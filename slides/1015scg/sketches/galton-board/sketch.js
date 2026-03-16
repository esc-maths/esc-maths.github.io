const { Engine, World, Bodies, Composite, Body } = Matter;

let engine;
let world;
let particles = [];
let pegs = [];
let boundaries = [];
let ground;
let binCounts = [];

const rows = 12;
const cols = 14;
const spacing = 55;
const ballRadius = 7;
const maxBalls = 380;

let pegTopMargin = 90;
let binHeight = 180;
let groundMargin = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  engine.enableSleeping = true; 
  world = engine.world;

  for (let i = 0; i <= cols; i++) {
    binCounts[i] = 0;
  }

  // 1. Create Pegs
  let binY = height - binHeight / 2 - groundMargin;
  let binTop = binY - binHeight / 2;
  let pegAreaHeight = binTop - pegTopMargin;
  let pegSpacingY = pegAreaHeight / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let xOffset = (r % 2 === 0) ? 0 : spacing / 2;
      let x = (width / 2 - (cols * spacing) / 2) + c * spacing + xOffset;
      let y = pegTopMargin + r * pegSpacingY;

      let p = Bodies.circle(x, y, 4, { isStatic: true, friction: 0 });
      pegs.push(p);
      Composite.add(world, p);
    }
  }

  // 2. Create Bins (with tall side walls)
  for (let i = 0; i <= cols; i++) {
    let x = (width / 2 - (cols * spacing) / 2) + i * spacing - (spacing / 4);
    
    let currentBinHeight = binHeight;
    let currentBinY = binY;

    // Make the first and last walls extra tall to catch stray balls
    if (i === 0 || i === cols) {
      currentBinHeight = height; // Extend to top
      currentBinY = height / 2;  // Center it vertically
    }

    let b = Bodies.rectangle(x, currentBinY, 4, currentBinHeight, { isStatic: true });
    // We store the height property on the body so we can draw it correctly in draw()
    b.customHeight = currentBinHeight; 
    boundaries.push(b);
    Composite.add(world, b);
  }

  // 3. Create the Ground
  ground = Bodies.rectangle(width / 2, height - 50, width, 10, { isStatic: true });
  Composite.add(world, ground);
}

function draw() {
  background(10);

  if (particles.length === maxBalls && allBallsSleeping()) {
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text("SIMULATION COMPLETE", width / 2, 40);
    noLoop();
    return;
  }

  Engine.update(engine);

  // UI
  fill(255);
  textAlign(LEFT);
  textSize(16);
  text("GALTON BOARD", 100, 40);
  textSize(12);
  fill(150);
  text("Click to RESET", 100, 60);

  // Spawn balls
  if (frameCount % 8 === 0 && particles.length < maxBalls) {
    particles.push(new Particle(width / 2 + random(-1, 1), 45));
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
    // Use the custom height we defined in setup
    rect(b.position.x, b.position.y, 4, b.customHeight);
  }
  rect(ground.position.x, ground.position.y, width, 10);

  // Draw Bin Counts
  // Draw Bin Counts
  fill(255, 204, 0);
  textSize(14);
  textAlign(CENTER);
  
  // startX is the first bin wall. 
  // We want to add half a spacing to get to the center of the first gap.
  let firstBinCenter = (width / 2 - (cols * spacing) / 2) + (spacing / 4); 
  
  for (let i = 0; i < cols; i++) {
    let x = firstBinCenter + (i * spacing);
    text(binCounts[i], x, height - 20);
  }

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
  loop();
}

function allBallsSleeping() {
  for (let p of particles) {
    if (!p.body.isSleeping && p.body.speed > 0.15) {
      return false;
    }
  }
  return true;
}

class Particle {
  constructor(x, y) {
    let options = {
      restitution: 0.4,
      friction: 0.1,
      frictionAir: 0.01,
      sleepThreshold: 30 
    };
    this.body = Bodies.circle(x, y, ballRadius, options);
    this.counted = false;
    this.color = color(100, 150, 255);
    Composite.add(world, this.body);
  }

  update() {
    if (!this.counted && this.body.position.y > height - binHeight - groundMargin) {
      this.countInBin();
    }
  }

  countInBin() {
    let startX = (width / 2 - (cols * spacing) / 2) - (spacing / 4);
    let index = Math.floor((this.body.position.x - startX) / spacing);
    
    // Constrain to the actual number of bins (0 to 13 if cols is 14)
    index = constrain(index, 0, cols - 1); 
    
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
    if (this.body.isSleeping) fill(80, 110, 180);
    noStroke();
    circle(0, 0, ballRadius * 2);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  location.reload();
}