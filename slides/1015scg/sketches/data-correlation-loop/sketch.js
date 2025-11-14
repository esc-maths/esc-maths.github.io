let points = [];
let index = 0;
let caseType = 0; // 0 = no corr, 1 = positive, 2 = negative
let delay = 4;    // lower = slower animation
let frameCounter = 0;

function setup() {
  createCanvas(450, 450);
  textFont('Menlo'); 
  generatePoints();
}

function draw() {
  background(230);

  drawAxes();
  drawPoints();
}

// ----------------------------------------------------
// Generate data for 3 correlation cases
// ----------------------------------------------------
function generatePoints() {
  points = [];
  index = 0;

  let n = 60;

  for (let i = 0; i < n; i++) {
    let x = random(0, 1);
    let y;

    if (caseType === 0) {
      y = random(0, 1);               // NO correlation
    } else if (caseType === 1) {
      y = x + random(-0.2, 0.2);      // Positive correlation
    } else if (caseType === 2) {
      y = 1 - x + random(-0.2, 0.2);  // Negative correlation
    }

    y = constrain(y, 0, 1);

    points.push({ x, y });
  }

  caseType = (caseType + 1) % 3;
}

// ----------------------------------------------------
// Draw axes with labels
// ----------------------------------------------------
function drawAxes() {
  stroke(0);
  strokeWeight(2);

  // X-axis
  line(40, height - 40, width - 20, height - 40);

  // Y-axis
  line(40, height - 40, 40, 20);

  // Labels
  noStroke();
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);

  text("Data 1", width / 2, height - 20);

  push();
  translate(15, height / 2);
  rotate(-HALF_PI);
  text("Data 2", 0, 0);
  pop();
}

// ----------------------------------------------------
// Draw points with colours depending on case
// ----------------------------------------------------
function drawPoints() {
  let col;

  if (caseType === 1) col = color(0, 51, 204);     // next will be positive → blue
  if (caseType === 2) col = color(204, 0, 0);      // next will be negative → red
  if (caseType === 0) col = color(0, 153, 51);      // next will be no corr → orange

  fill(col);
  noStroke();

  for (let i = 0; i < index; i++) {
    let px = map(points[i].x, 0, 1, 40, width - 20);
    let py = map(points[i].y, 0, 1, height - 40, 20);
    circle(px, py, 10);
  }

  // Slow animation: reveal a point only every "delay" frames
  frameCounter++;
  if (frameCounter % delay === 0) {
    if (index < points.length) {
      index++;
    } else {
      // regenerate after finishing
      if (frameCount % 40 === 0) {
        generatePoints();
      }
    }
  }
}
