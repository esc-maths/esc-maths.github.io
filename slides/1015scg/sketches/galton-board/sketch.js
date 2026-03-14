const { Engine, World, Bodies, Composite, Body } = Matter;

let engine;
let world;
let particles = [];
let pegs = [];
let boundaries = [];
let ground; 
let binCounts = [];

const rows = 9; 
const cols = 14; 
const spacing = 55; 
const ballRadius = 7;
const maxBalls = 350;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  for (let i = 0; i <= cols; i++) {
    binCounts[i] = 0;
  }

  // 1. Create Pegs
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let xOffset = (r % 2 === 0) ? 0 : spacing / 2;
      let x = (width / 2 - (cols * spacing) / 2) + c * spacing + xOffset;
      let y = 120 + r * (spacing * 0.8);
      
      let p = Bodies.circle(x, y, 4, { isStatic: true, friction: 0 });
      pegs.push(p);
      Composite.add(world, p);
    }
  }

  // 2. Create Bins
  let binHeight = 180;
  let binY = height - binHeight / 2 - 60; 
  for (let i = 0; i <= cols; i++) {
    let x = (width / 2 - (cols * spacing) / 2) + i * spacing - (spacing / 4);
    let b = Bodies.rectangle(x, binY, 4, binHeight, { isStatic: true });
    boundaries.push(b);
    Composite.add(world, b);
  }

  // 3. Create the Ground
  ground = Bodies.rectangle(width / 2, height - 50, width, 10, { isStatic: true });
  Composite.add(world, ground);
}

function draw() {
  background(10);
  Engine.update(engine);

  // UI
  fill(255);
  textSize(16);
  text("GALTON BOARD", 100, 40);
  textSize(12);
  fill(150);
  text("Click to RESET", 100, 60);
  
  // Spawn balls
  if (frameCount % 10 === 0 && particles.length < maxBalls) {
    particles.push(new Particle(width / 2 + random(-2, 2), 40));
  }

  // Draw Pegs
  fill(0, 255, 180);
  for (let p of pegs) {
    circle(p.position.x, p.position.y, 8);
  }

  // Draw Bin Walls & Ground
  fill(80);
  rectMode(CENTER);
  for (let b of boundaries) {
    rect(b.position.x, b.position.y, 4, 180);
  }
  rect(ground.position.x, ground.position.y, width, 10);

  // Draw Bin Counts
  fill(255, 204, 0);
  textSize(14);
  let startX = (width / 2 - (cols * spacing) / 2) - (spacing / 4);
  for (let i = 0; i <= cols; i++) {
    let x = startX + (i * spacing) + (spacing / 2);
    text(binCounts[i], x, height - 20);
  }

  // Update/Draw Particles
  for (let p of particles) {
    p.update();
    p.show();
  }
}

function mousePressed() {
  for (let p of particles) {
    Composite.remove(world, p.body);
  }
  particles = [];
  for (let i = 0; i < binCounts.length; i++) binCounts[i] = 0;
}

class Particle {
  constructor(x, y) {
    // Standard physics options - no freezing
    let options = { 
      restitution: 0.4, 
      friction: 0.1,
      frictionAir: 0.01 
    };
    this.body = Bodies.circle(x, y, ballRadius, options);
    this.counted = false;
    this.color = color(100, 150, 255);
    Composite.add(world, this.body);
  }

  update() {
    // Trigger count as soon as the ball enters the bin area (y > height - 240)
    if (!this.counted && this.body.position.y > height - 240) {
      this.countInBin();
    }
  }

  countInBin() {
    let startX = (width / 2 - (cols * spacing) / 2) - (spacing / 4);
    let index = Math.floor((this.body.position.x - startX) / spacing);
    index = constrain(index, 0, cols);
    binCounts[index]++;
    this.counted = true;
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color);
    noStroke();
    circle(0, 0, ballRadius * 2);
    // Draw a small line so you can see the balls rotating
    //stroke(255, 50);
    //line(0, 0, ballRadius, 0);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}