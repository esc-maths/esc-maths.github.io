let N = 34000;
let collDist;
let fbWide, fbHigh;
let oldPosVel, newPosVel;
let gridWide, gridHigh, grid;
let collShdr, showGridShdr, updateShdr, drawShdr;

function setup() {
  // Create canvas with full window dimensions
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  collDist = 0.75 * sqrt(4.0/N);
  gridWide = gridHigh = int(4.0/collDist);

  collShdr = createShader(vsCollision, fsCollision);
  showGridShdr = createShader(vsUpdate, fsShowGrid);
  updateShdr = createShader(vsUpdate, fsUpdate);
  drawShdr = createShader(vsDraw, fsDraw);

  fbWide = 1024;
  fbHigh = ceil(N / fbWide);
  let fbOptions = { 
    format: FLOAT,
    depth: false, 
    antialias: false, 
    density: 1,
    width: fbWide, 
    height: fbHigh 
  };
  
  oldPosVel = createFramebuffer(fbOptions);
  newPosVel = createFramebuffer(fbOptions);
  let gl = oldPosVel.gl;
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  
  oldPosVel.loadPixels();
  for(let i = 0; i < N; i++) {
    oldPosVel.pixels[4*i] = random(-1, 1);
    oldPosVel.pixels[4*i+1] = random(-1, 1);
    let ang = random(TAU);
    let spd = 0.005 * random(0.5, 1.0);
    oldPosVel.pixels[4*i+2] = spd * cos(ang);
    oldPosVel.pixels[4*i+3] = spd * sin(ang);
  }
  oldPosVel.updatePixels();

  fbOptions = { 
    format: UNSIGNED_BYTE,
    depth: false, 
    antialias: false, 
    density: 1,
    width: gridWide, 
    height: gridHigh 
  };
  grid = createFramebuffer(fbOptions);
  
  // Set initial aspect ratio uniform
  drawShdr.setUniform('aspectRatio', width/height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Update aspect ratio when window resizes
  drawShdr.setUniform('aspectRatio', width/height);
}

function draw() {
  let t = frameCount/60.0;
  
  // Collision detection pass
  grid.begin();
  background(0, 0);
  collShdr.bindShader();
  collShdr.setUniform('data', oldPosVel);
  collShdr.setUniform('outRes', [gridWide, gridHigh]);
  collShdr.bindTextures();
  let gl = grid.gl;
  gl.drawArrays(gl.POINTS, 0, N);
  collShdr.unbindTextures();
  collShdr.unbindShader();
  grid.end();
  
  background(255);
  
  // Update particle positions
  newPosVel.begin();
  updateShdr.bindShader();
  updateShdr.setUniform('grid', grid);
  updateShdr.setUniform('dataOld', oldPosVel);
  updateShdr.setUniform('collDist', collDist);
  updateShdr.setUniform('time', t);
  updateShdr.bindTextures();
  gl = newPosVel.gl;
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  updateShdr.unbindTextures();
  updateShdr.unbindShader();
  newPosVel.end();
  
  // Draw particles with aspect ratio correction
  let aspect = width/height;
  if (aspect > 1) {
    scale(height / 2.0);  // Wide window
  } else {
    scale(width / 2.0);   // Tall window
  }
  
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.lineWidth(2.0);
  
  drawShdr.bindShader();
  drawShdr.setUniform('dataOld', oldPosVel);
  drawShdr.setUniform('dataNew', newPosVel);
  drawShdr.setUniform('N', N);
  drawShdr.setUniform('aspectRatio', width/height);
  drawShdr.bindTextures();
  gl.drawArrays(gl.POINTS, 0, N);
  gl.disable(gl.BLEND);
  drawShdr.unbindTextures();
  drawShdr.unbindShader();

  // Swap buffers
  let temp = oldPosVel;
  oldPosVel = newPosVel;
  newPosVel = temp;
}

// Vertex shader for collision detection
let vsCollision = `#version 300 es
precision highp float;
precision highp int;
uniform sampler2D data;
uniform vec2 outRes;
out vec4 vColor;

void main() {
  ivec2 res = textureSize(data, 0);
  int idx = gl_VertexID;
  ivec2 ij = ivec2(idx%res.x, idx/res.x);
  vec2 pos = texelFetch(data, ij, 0).xy;
  gl_PointSize = 1.;
  gl_Position = vec4(floor((pos+1.)*0.5*outRes+1.)/outRes*2.-1., 0., 1.);
  vColor = vec4((idx>>16)&0xff, (idx>>8)&0xff, idx&0xff, 255) / 255.0;
}`;

// Fragment shader for collision detection
let fsCollision = `#version 300 es
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main() {
  fragColor = vColor;
}`;

// Fragment shader for grid display
let fsShowGrid = `#version 300 es
precision highp float;
uniform sampler2D grid;
uniform vec2 outRes;
out vec4 fragColor;
void main() {
  vec2 uv = gl_FragCoord.xy/outRes;
  uv.y = 1. - uv.y;
  fragColor = texelFetch(grid, ivec2(uv*vec2(textureSize(grid,0))), 0);
}`;

// Vertex shader for updates
let vsUpdate = `#version 300 es
precision highp float;
precision highp int;
void main() {
  gl_Position = vec4(4*ivec2(gl_VertexID&1, gl_VertexID&2)-1, 0., 1.);
}`;

// Fragment shader for updates
let fsUpdate = `#version 300 es
precision highp float;
precision highp int;
uniform sampler2D grid;
uniform sampler2D dataOld;
uniform float collDist;
uniform float time;
out vec4 fragColor;
#define TAU 6.2831853

void main() {
  ivec2 dataRes = textureSize(dataOld, 0);
  int idx = int(gl_FragCoord.y) * dataRes.x + int(gl_FragCoord.x);
  vec4 posVel = texelFetch(dataOld, ivec2(gl_FragCoord.xy), 0);
  vec2 pos = posVel.xy;
  vec2 vel = posVel.zw;
  ivec2 gridRes = textureSize(grid, 0);
  ivec2 minij = max(ivec2(floor(((pos-collDist)*0.5+0.5)*vec2(gridRes))), 0);
  ivec2 maxij = min(ivec2(floor(((pos+collDist)*0.5+0.5)*vec2(gridRes))), gridRes-1);
  
  for(int j=minij.y; j<=maxij.y; j++) {
    for(int i=minij.x; i<=maxij.x; i++) {
      ivec4 other = ivec4(texelFetch(grid, ivec2(i,j), 0) * 255.0);
      if(other.a > 0) {
        int oidx = (other.r << 16) + (other.g << 8) + other.b;
        if(oidx != idx) {
          vec4 otherPosVel = texelFetch(dataOld, ivec2(oidx%dataRes.x, oidx/dataRes.x), 0);
          vec2 v = pos - otherPosVel.xy;
          float d = length(v);
          if(d < collDist && d > 0.00001) {
            vel += 0.01 * (1.0-d/collDist) * normalize(v);
          }
        }
      }
    }
  }
  
  // Attractors
  vec2 attractors[4];
  float lim = 0.85;
  attractors[0] = vec2(-lim, lim);
  attractors[1] = vec2(-lim, -lim);
  attractors[2] = vec2(lim, -lim);
  attractors[3] = vec2(lim, lim);
  
  int attractorIndex = idx % 4;
  vec2 target = attractors[attractorIndex];
  vec2 dir = target - pos;
  float dist = length(dir);
  if(dist > 0.001) {
    vel += 0.0002 * normalize(dir) * min(dist, 0.5);
  }
  
  float spd = length(vel);
  if(spd > 0.0015) vel *= 0.0015 / spd;
  pos += vel;
  
  // Boundary checks
  if(pos.x < -1.) { pos.x = -2. - pos.x; vel.x *= -1.; }
  if(pos.x >  1.) { pos.x =  2. - pos.x; vel.x *= -1.; }
  if(pos.y < -1.) { pos.y = -2. - pos.y; vel.y *= -1.; }
  if(pos.y >  1.) { pos.y =  2. - pos.y; vel.y *= -1.; }
  
  fragColor = vec4(pos, vel);
}`;

// Vertex shader for drawing particles
let vsDraw = `#version 300 es
precision highp float;
precision highp int;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform sampler2D dataOld;
uniform sampler2D dataNew;
uniform int N;
uniform float aspectRatio;
out vec4 vColor;

// Our color palette in GLSL
vec3 getColor(int index) {
    // Array of our colors (matches JavaScript array)
    vec3 palette[9];
    palette[0] = vec3(0.8, 0.0, 0.0);    // dark red
    palette[1] = vec3(1.0, 0.4, 0.0);    // strong orange
    palette[2] = vec3(0.8, 0.8, 0.0);    // dark yellow
    palette[3] = vec3(0.0, 0.6, 0.0);    // dark green
    palette[4] = vec3(0.0, 0.0, 0.8);    // dark blue
    palette[5] = vec3(0.4, 0.0, 0.8);    // purple
    palette[6] = vec3(0.8, 0.0, 0.8);    // magenta
    palette[7] = vec3(0.4, 0.4, 0.4);    // gray
    palette[8] = vec3(0.0, 0.5, 0.5);    // teal
    
    // Use modulo to cycle through colors based on particle index
    return palette[index % 9];
}

vec3 hsb2rgb(in vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
  rgb = rgb*rgb*(3.0-2.0*rgb);
  return c.z * mix(vec3(1.0), rgb, c.y);
}

void main() {
  ivec2 res = textureSize(dataOld, 0);
  int idx = gl_VertexID;
  ivec2 ij = ivec2(idx%res.x, idx/res.x);
  vec2 p1 = texelFetch(dataNew, ij, 0).xy;
  
  // Adjust for aspect ratio
  p1.x *= aspectRatio;
  
  vec4 p = vec4(p1, 0., 1.);
  p = uModelViewMatrix * p;
  gl_Position = uProjectionMatrix * p;
  
  //float u = float(idx)/float(N);
  //vec3 c = hsb2rgb(vec3(u, 1.0, 1.0));
	
	// Get color from palette based on particle index
    vec3 c = getColor(idx);
  gl_PointSize = 2.5;
  vColor = vec4(c, 1.0);
}`;

// Fragment shader for drawing particles
let fsDraw = `#version 300 es
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main() {
  fragColor = vColor;
}`;