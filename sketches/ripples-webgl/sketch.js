let video;
let handPose;
let hands = [];
let ripples = [];
let ripSh;

let wellPos;
let wellVel;
let wellTarget;
let elasticForce = 0.08;
let damping = 0.75;

const maxRipples = 40;

const vert = `
attribute vec3 aPosition;
attribute vec2 aTexCoord;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
}
`;

const frag = `
precision highp float;
varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform vec2 uResolution;
uniform vec2 uVideoSize;
uniform float uTime;
uniform vec3 uWaves[40];
uniform int uWaveCount;

void main() {
  vec2 uv = vTexCoord;
  vec2 p = uv * 2.0 - 1.0;
  
  float aspect = uResolution.x / uResolution.y;
  p.x *= aspect;

  vec2 totalDisp = vec2(0.0);
  float totalAmp = 0.0;

  for (int i = 0; i < 40; i++) {
    if (i >= uWaveCount) break;
    vec3 w = uWaves[i];
    
    vec2 center = w.xy * 2.0 - 1.0;
    center.x *= aspect;
    
    vec2 toP = p - center;
    float dist = length(toP);
    float age = w.z;
    
    float radius = age * 0.9 + 0.1 * sin(age * 6.0); 
    float waveWidth = 0.05 + age * 0.12;
    float d = dist - radius;
    
    float mask = smoothstep(waveWidth, 0.0, abs(d));
    float str = (1.0 - age / 2.5);
    float rip = sin(d * 30.0) * mask * str;
    
    vec2 dir = (dist > 0.001) ? normalize(toP) : vec2(0.0);
    totalDisp += dir * rip * 0.05;
    totalAmp += abs(rip);
  }

  vec2 distortedUV = uv - totalDisp;

  vec2 ratio = uResolution / uVideoSize;
  float scale = max(ratio.x, ratio.y);
  
  vec2 offset = (uResolution - uVideoSize * scale) * 0.5;
  vec2 videoUV = (distortedUV * uResolution - offset) / (uVideoSize * scale);
  
  videoUV.x = 1.0 - videoUV.x;

  if (videoUV.x < 0.0 || videoUV.x > 1.0 || videoUV.y < 0.0 || videoUV.y > 1.0) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  } else {
    float r = texture2D(tex0, videoUV + totalDisp * 0.01).r;
    float g = texture2D(tex0, videoUV).g;
    float b = texture2D(tex0, videoUV - totalDisp * 0.01).b;
    vec3 col = vec3(r, g, b);
    col += vec3(totalAmp * 0.15);
    gl_FragColor = vec4(col, 1.0);
  }
}
`;

async function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose = await ml5.handPose({ flipped: true });
  handPose.detectStart(video, r => hands = r);

  ripSh = createShader(vert, frag);
  
  wellPos = createVector(width / 2, height / 2);
  wellVel = createVector(0, 0);
  wellTarget = createVector(width / 2, height / 2);
  
  noStroke();
}

function getCoverInfo() {
  const vw = video.width;
  const vh = video.height;
  const sw = width;
  const sh = height;
  
  const scale = max(sw / vw, sh / vh);
  const w = vw * scale;
  const h = vh * scale;
  const ox = (sw - w) * 0.5;
  const oy = (sh - h) * 0.5;
  
  return { scale, ox, oy, w, h }
}

function distSq(p1, p2) {
  return (p1.x - p2.x)**2 + (p1.y - p2.y)**2;
}

function isHandOpen(hand) {
  const wrist = hand.wrist;
  const tips = [
    hand.index_finger_tip,
    hand.middle_finger_tip,
    hand.ring_finger_tip,
    hand.pinky_finger_tip
  ];
  const mcps = [
    hand.index_finger_mcp,
    hand.middle_finger_mcp,
    hand.ring_finger_mcp,
    hand.pinky_finger_mcp
  ];
  
  let openFingers = 0;
  for(let i=0; i<4; i++) {
    if (distSq(tips[i], wrist) > distSq(mcps[i], wrist) * 1.8) {
      openFingers++
    }
  }
  return openFingers >= 3;
}

function updatePhysics() {
  const cover = getCoverInfo();
  let count = 0;
  let centroid = createVector(0, 0);
  let active = false;

  if (hands.length > 0) {
    for(let hand of hands) {
      let k = hand.middle_finger_mcp;
      if (k) {
        let screenX = (k.x * cover.scale) + cover.ox;
        let screenY = (k.y * cover.scale) + cover.oy;
        
        centroid.add(screenX, screenY);
        count++
      }
      if (isHandOpen(hand)) active = true;
    }
  }

  if (count > 0) {
    centroid.div(count);
    wellTarget.set(centroid.x, centroid.y);
  }

  let force = p5.Vector.sub(wellTarget, wellPos);
  force.mult(elasticForce);
  wellVel.add(force);
  wellVel.mult(damping);
  wellPos.add(wellVel);

  if (active && count > 0 && frameCount % 8 === 0) {
    ripples.push({ 
      x: wellPos.x / width, 
      y: wellPos.y / height, 
      age: 0 
    })
  }
}

function draw() {
  background(0);
  
  if (!video.width) return;

  updatePhysics();
  
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].age += 0.015;
    if (ripples[i].age > 2.5) {
      ripples.splice(i, 1);
    }
  }

  if (ripples.length > maxRipples) ripples.shift();
  
  shader(ripSh);
  ripSh.setUniform('tex0', video);
  ripSh.setUniform('uResolution', [width, height]);
  ripSh.setUniform('uVideoSize', [video.width, video.height]);
  ripSh.setUniform('uTime', millis() * 0.001);
  
  let data = [];
  for (let r of ripples) {
    data.push(r.x, r.y, r.age);
  }
  
  ripSh.setUniform('uWaves', data);
  ripSh.setUniform('uWaveCount', ripples.length);

  plane(width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}