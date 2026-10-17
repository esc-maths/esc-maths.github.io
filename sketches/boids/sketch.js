
let flock = [];
const NUM_BOIDS = 180;

let separationWeight = 1.5;
let alignmentWeight = 1.0;
let cohesionWeight = 1.0;

let showTrails = false;
let showInfo = true;

const BG = [10, 12, 22];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < NUM_BOIDS; i++) {
    flock.push(new Boid(random(width), random(height)));
  }

  background(...BG);
}

function draw() {
  if (showTrails) {
    noStroke();
    fill(BG[0], BG[1], BG[2], 35);
    rect(0, 0, width, height);
  } else {
    background(...BG);
  }

  for (const b of flock) {
    b.flock(flock);
  }

  for (const b of flock) {
    b.update();
    b.edges();
    b.render();
  }

  if (showInfo) drawInfo();
}

function drawInfo() {
  push();

  colorMode(RGB, 255);
  fill(240);
  noStroke();
  textFont("monospace");
  textSize(14);

  text("REYNOLDS BOIDS", 20, 30);
  text("Boids: " + flock.length, 20, 55);

  text("Separation: " + separationWeight.toFixed(1), 20, 80);
  text("Alignment:  " + alignmentWeight.toFixed(1), 20, 100);
  text("Cohesion:   " + cohesionWeight.toFixed(1), 20, 120);

  textSize(12);
  text(
    "1/2 Separation   3/4 Alignment   5/6 Cohesion",
    20, height - 45
  );

  text(
    "T Trails   R Reset   SPACE Add Boids   H Info",
    20, height - 22
  );

  pop();
}

function keyPressed() {
  if (key === "1") separationWeight += 0.2;
  if (key === "2") separationWeight = max(0, separationWeight - 0.2);

  if (key === "3") alignmentWeight += 0.2;
  if (key === "4") alignmentWeight = max(0, alignmentWeight - 0.2);

  if (key === "5") cohesionWeight += 0.2;
  if (key === "6") cohesionWeight = max(0, cohesionWeight - 0.2);

  if (key === "t" || key === "T") showTrails = !showTrails;
  if (key === "h" || key === "H") showInfo = !showInfo;

  if (key === "r" || key === "R") {
    flock = [];

    for (let i = 0; i < NUM_BOIDS; i++) {
      flock.push(new Boid(random(width), random(height)));
    }

    background(...BG);
  }

  if (key === " ") {
    for (let i = 0; i < 20; i++) {
      flock.push(new Boid(mouseX, mouseY));
    }
    return false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ==================================================
// Boid class
// ==================================================

class Boid {
  constructor(x, y) {
    this.position = createVector(x, y);

    this.maxSpeed = 3.0;
    this.maxForce = 0.06;

    this.perceptionRadius = 55;
    this.separationRadius = 25;

    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(1, this.maxSpeed));

    this.acceleration = createVector(0, 0);

    this.hueValue = random(160, 230);
  }

  flock(boids) {
    const sep = this.separation(boids);
    const ali = this.alignment(boids);
    const coh = this.cohesion(boids);

    sep.mult(separationWeight);
    ali.mult(alignmentWeight);
    coh.mult(cohesionWeight);

    this.acceleration.add(sep);
    this.acceleration.add(ali);
    this.acceleration.add(coh);
  }

  separation(boids) {
    const steering = createVector(0, 0);
    let total = 0;

    for (const other of boids) {
      const d = p5.Vector.dist(this.position, other.position);

      if (other !== this && d < this.separationRadius && d > 0) {
        const diff = p5.Vector.sub(this.position, other.position);

        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  alignment(boids) {
    const steering = createVector(0, 0);
    let total = 0;

    for (const other of boids) {
      const d = p5.Vector.dist(this.position, other.position);

      if (other !== this && d < this.perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  cohesion(boids) {
    const center = createVector(0, 0);
    let total = 0;

    for (const other of boids) {
      const d = p5.Vector.dist(this.position, other.position);

      if (other !== this && d < this.perceptionRadius) {
        center.add(other.position);
        total++;
      }
    }

    if (total > 0) {
      center.div(total);

      const desired = p5.Vector.sub(center, this.position);
      desired.setMag(this.maxSpeed);

      const steering = p5.Vector.sub(desired, this.velocity);
      steering.limit(this.maxForce);

      return steering;
    }

    return createVector(0, 0);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;

    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  render() {
    push();

    translate(this.position.x, this.position.y);
    rotate(this.velocity.heading() + HALF_PI);

    colorMode(HSB, 360, 100, 100, 100);
    fill(this.hueValue, 75, 100, 90);
    noStroke();

    beginShape();
    vertex(0, -9);
    vertex(-4, 6);
    vertex(0, 3);
    vertex(4, 6);
    endShape(CLOSE);

    pop();

    colorMode(RGB, 255);
  }
}
