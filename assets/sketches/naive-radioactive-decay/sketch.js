// Radioactive decay simulation in p5.js (WebGL)
// Alpha particle emitted as a cluster
// by Juan Carlos Ponce Campuzano + ChatGPT

let nucleus = [];
let emittedClusters = [];
let lastDecayTime = 0;
let nextDecayInterval;

function setup() {
  createCanvas(450, 450, WEBGL);
  noStroke();

  // Create nucleus: evenly around a sphere
  let total = 92;
  let radius = 28; // nucleus radius
  for (let i = 0; i < total; i++) {
    let colorType = i % 2 === 0 ? 'red' : 'blue';
    // Point on sphere surface with slight jitter
    let pos = p5.Vector.random3D().mult(radius + random(-2, 2));
    nucleus.push({ pos, col: colorType });
  }

  setNextDecay();
}

function draw() {
  background(255);
  orbitControl();

  // Light
  ambientLight(100);
  pointLight(255, 255, 255, 100, 100, 200);

  // Draw nucleus with jiggle
  for (let p of nucleus) {
    push();
    let jiggle = p5.Vector.random3D().mult(0.5);
    translate(p.pos.x + jiggle.x, p.pos.y + jiggle.y, p.pos.z + jiggle.z);
    fill(p.col === 'red' ? color(255, 0, 0) : color(0, 0, 255));
    sphere(8);
    pop();
  }

  // Draw emitted alpha particle clusters
  for (let cluster of emittedClusters) {
    // Move cluster center
    cluster.center.add(cluster.vel);

    // Draw the 4 spheres of the cluster
    for (let i = 0; i < cluster.offsets.length; i++) {
      push();
      let pos = p5.Vector.add(cluster.center, cluster.offsets[i]);
      translate(pos.x, pos.y, pos.z);
      fill(cluster.colors[i] === 'red' ? color(255, 0, 0) : color(0, 0, 255));
      sphere(5);
      pop();
    }
  }

  // Trigger decay if time
  if (millis() - lastDecayTime > nextDecayInterval) {
    emitAlphaCluster();
    setNextDecay();
  }
}

function setNextDecay() {
  lastDecayTime = millis();
  nextDecayInterval = random(3000, 6000); // 3 to 6 seconds
}

function emitAlphaCluster() {
  let dir = p5.Vector.random3D().normalize();
  let startPos = createVector(0, 0, 0);

  // Tight cluster offsets (tetrahedral-like)
  let r = 6; // distance between cluster center and each sphere
  let offsets = [
    createVector( r,  0,  0),
    createVector(-r,  0,  0),
    createVector( 0,  r,  0),
    createVector( 0, -r,  0)
  ];

  emittedClusters.push({
    center: startPos.copy(),
    vel: dir.mult(1.5),
    offsets: offsets,
    colors: ['red', 'red', 'blue', 'blue']
  });
}
