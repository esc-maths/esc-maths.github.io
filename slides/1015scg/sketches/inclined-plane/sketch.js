let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

let engine, world;
let myBox, ramp, stopper;
let released = false;

let releaseBtn, resetBtn;

function setup() {
  createCanvas(430, 300);

  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 1;

  // Create ramp
  const rampWidth = 400;
  const rampHeight = 20;
  const angle = -0.4; // about -23 degrees (descending to the right)

  ramp = Bodies.rectangle(210, 200, rampWidth, rampHeight, {
    isStatic: true,
    angle: angle,
    friction: 0.01
  });

  // Compute ramp’s higher (rightmost) end coordinates
  const rampTopX = ramp.position.x + (rampWidth / 2) * cos(angle);
  const rampTopY = ramp.position.y + (rampWidth / 2) * sin(angle);

  // Create box aligned with ramp
  const boxSize = 40;
  const offset = 11;
  const startX = rampTopX - (boxSize / 2) * sin(-angle);
  const startY = rampTopY - (boxSize / 2) * cos(-angle) - offset;

  myBox = Bodies.rectangle(startX, startY, boxSize, boxSize, {
    friction: 0.002,
    restitution: 0,
    density: 0.03,
    isStatic: true // static until released
  });
  Body.setAngle(myBox, angle);

  // Stopper at bottom
  stopper = Bodies.rectangle(37, 280, 100, 10, {
    isStatic: true,
    angle: angle + PI/2
  });

  World.add(world, [myBox, ramp, stopper]);

  // Buttons
  releaseBtn = createButton('Release');
  releaseBtn.position(20, 20);
  releaseBtn.mousePressed(() => {
    if (!released) {
      Body.setStatic(myBox, false);
      released = true;
    }
  });

  resetBtn = createButton('Reset');
  resetBtn.position(100, 20);
  resetBtn.mousePressed(resetBox);
}

function draw() {
  background(230);
  Engine.update(engine);

  // Ramp
  push();
  translate(ramp.position.x, ramp.position.y);
  rotate(ramp.angle);
  fill(150, 100, 100);
  rectMode(CENTER);
  rect(0, 0, 450, 20);
  fill(200, 10, 10);
  rect(0, 0, 370, 20);
  pop();

  // Stopper
  push();
  translate(stopper.position.x, stopper.position.y);
  rotate(ramp.angle - PI/2)
  fill(80);
  rectMode(CENTER);
  rect(0, 0, 80, 10);
  pop();

  // Box
  push();
  translate(myBox.position.x, myBox.position.y);
  rotate(myBox.angle);
  fill(100, 150, 200);
  rectMode(CENTER);
  rect(0, 0, 40, 40);
  pop();

  // Ground line (optional)
  push();
  stroke(0);
  strokeWeight(2)
  line(0, 280, width, 280);
  pop();
}

function resetBox() {
  World.remove(world, myBox);

  const rampWidth = 400;
  const angle = -0.4;

  const rampTopX = ramp.position.x + (rampWidth / 2) * cos(angle);
  const rampTopY = ramp.position.y + (rampWidth / 2) * sin(angle);

  const boxSize = 40;
  const offset = 11;
  const startX = rampTopX - (boxSize / 2) * sin(-angle);
  const startY = rampTopY - (boxSize / 2) * cos(-angle) - offset;

  myBox = Bodies.rectangle(startX, startY, boxSize, boxSize, {
    friction: 0.002,
    restitution: 0,
    density: 0.02,
    isStatic: true
  });
  Body.setAngle(myBox, angle);
  World.add(world, myBox);

  released = false;
}
