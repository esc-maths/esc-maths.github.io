// Radioactive decay simulation in p5.js (WebGL)
// Alpha particle emitted as a cluster, removed after 40s
// by Juan Carlos Ponce Campuzano + ChatGPT

let nucleus = [];
let emittedClusters = [];
let lastDecayTime = 0;
let nextDecayInterval;
const clusterLifetime = 40000; // 40 seconds (ms)

function setup() {
  createCanvas(windowWidth, 380, WEBGL);
  noStroke();

  createNucleus();
  setNextDecay();
}

function windowResized() {
  resizeCanvas(windowWidth, 380);
}

function createNucleus() {
  nucleus = [];
  const total = 250;
  const radius = 50; // visual radius of the nucleus sphere

  for (let i = 0; i < total; i++) {
    // alternate colors
    let colorType = i % 2 === 0 ? 'red' : 'blue';

    // choose whether this point lies on the surface (shell) or inside (volume)
    // ~50% on surface, ~50% inside (small jitter)
    if (random() < 0.5) {
      // surface-like: point near the sphere surface with slight jitter
      let pos = p5.Vector.random3D().mult(radius + random(-3, 3));
      nucleus.push({ pos, col: colorType });
    } else {
      // inside: uniform-ish in volume using cube root trick
      let r = radius * pow(random(), 1 / 3); // radial distance biased for uniform volume
      let pos = p5.Vector.random3D().mult(r);
      nucleus.push({ pos, col: colorType });
    }
  }
}

function draw() {
  background(12);

  // optional: remove orbitControl() if you don't want mouse rotation
  orbitControl();

  // lighting
  ambientLight(60);
  pointLight(255, 255, 255, 200, -100, 300);

  // Draw nucleus with small jiggle
  push();
  for (let p of nucleus) {
    push();
    let jiggle = p5.Vector.random3D().mult(0.6); // jiggle magnitude
    translate(p.pos.x + jiggle.x, p.pos.y + jiggle.y, p.pos.z + jiggle.z);
    if (p.col === 'red') fill(230, 60, 60);
    else fill(80, 120, 255);
    sphere(8); // nucleus particle size
    pop();
  }
  pop();

  // Update & draw emitted clusters
  for (let cluster of emittedClusters) {
    // update center position
    cluster.center.add(cluster.vel);

    // (optional) slight rotation of offsets so the cluster doesn't stay rigidly aligned
    if (cluster.spin) {
      cluster.angle += cluster.spin;
      // rotate offsets by angle around an axis
      let axis = cluster.spinAxis;
      for (let i = 0; i < cluster.baseOffsets.length; i++) {
        cluster.offsets[i] = rotateVectorAroundAxis(cluster.baseOffsets[i], axis, cluster.angle);
      }
    }

    // draw each sphere of the cluster
    for (let i = 0; i < cluster.offsets.length; i++) {
      push();
      let pos = p5.Vector.add(cluster.center, cluster.offsets[i]);
      translate(pos.x, pos.y, pos.z);
      if (cluster.colors[i] === 'red') fill(255, 80, 80);
      else fill(100, 140, 255);
      sphere(7);
      pop();
    }
  }

  // Remove clusters older than clusterLifetime
  emittedClusters = emittedClusters.filter(cluster => (millis() - cluster.birth) < clusterLifetime);

  // Trigger decay if time
  if (millis() - lastDecayTime > nextDecayInterval) {
    emitAlphaCluster();
    setNextDecay();
  }
}

function setNextDecay() {
  lastDecayTime = millis();
  nextDecayInterval = random(3000, 7000); // 3 to 7 seconds
}

function emitAlphaCluster() {
  let dir = p5.Vector.random3D().normalize();
  let speed = random(1.2, 2.2);
  let startPos = createVector(0, 0, 0);

  // cluster offsets: small tetra / cross-like arrangement
  let r = 6;
  // base offsets (local cluster coordinates)
  let baseOffsets = [
    createVector( r,  0,  0),
    createVector(-r,  0,  0),
    createVector( 0,  r,  0),
    createVector( 0, -r,  0)
  ];

  // rotate the base offsets so cluster faces in direction `dir`
  // find rotation axis & angle from (0,0,1) to dir
  let forward = createVector(0, 0, 1);
  let axis = forward.cross(dir);
  let angle = acos(constrain(forward.dot(dir), -1, 1));
  let offsets = baseOffsets.map(o => rotateVectorAroundAxis(o, axis, angle));

  // optionally add tiny random jitter to offsets to avoid perfect symmetry
  offsets.forEach(v => v.add(p5.Vector.random3D().mult(0.6)));

  // small spin for visual interest
  let spin = random(-0.02, 0.02);
  let spinAxis = p5.Vector.random3D().normalize();

  emittedClusters.push({
    center: startPos.copy(),
    vel: dir.mult(speed),
    baseOffsets: baseOffsets.map(v => v.copy()),
    offsets: offsets,
    colors: ['red', 'red', 'blue', 'blue'],
    birth: millis(),
    // spin params:
    spin: spin,
    spinAxis: spinAxis,
    angle: 0
  });
}

// helper: rotate vector `v` around axis `axis` by `angle` (radians)
// if axis is (0,0,0) or angle 0, returns v copy
function rotateVectorAroundAxis(v, axis, angle) {
  if (!axis || (axis.mag && axis.mag() === 0) || angle === 0) return v.copy();
  // Rodrigues' rotation formula
  let k = axis.copy().normalize();
  let vRot = p5.Vector.mult(v, cos(angle));
  let kCrossV = k.copy().cross(v).mult(sin(angle));
  let kDotV = k.copy().dot(v);
  let kTerm = k.copy().mult(kDotV * (1 - cos(angle)));
  return p5.Vector.add(p5.Vector.add(vRot, kCrossV), kTerm);
}
