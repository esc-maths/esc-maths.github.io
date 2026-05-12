let data = [];
let selector;

const margin = 80;

function setup() {
  createCanvas(800, 500);

  // Dropdown menu
  selector = createSelect();
  selector.position(20, 20);

  selector.option("Connected Points");
  selector.option("Polyline");
  selector.option("Scatter Plot");
  selector.option("Bars");

  // Generate 75 data points
  for (let i = 0; i < 75; i++) {
    let x = map(i, 0, 74, 1998, 2002);

    // Sinusoidal variation + randomness
    let y = 120 + 40 * sin(i * 0.25) + random(-15, 15);

    y = constrain(y, 50, 200);

    data.push({ x, y });
  }
}

function draw() {
  background(250);

  drawAxes();

  let mode = selector.value();

  if (mode === "Connected Points") {
    drawConnectedPoints();
  } else if (mode === "Polyline") {
    drawPolyline();
  } else if (mode === "Scatter Plot") {
    drawScatter();
  } else if (mode === "Bars") {
    drawBars();
  }
}

function drawAxes() {
  stroke(0);
  strokeWeight(2);

  // x-axis
  line(margin, height - margin, width - margin, height - margin);

  // y-axis
  line(margin, margin, margin, height - margin);

  // X-axis labels (1998 to 2002)
  textAlign(CENTER, TOP);
  textSize(14);

  for (let yr = 1998; yr <= 2002; yr++) {
    let x = map(yr, 1998, 2002, margin, width - margin);

    line(x, height - margin, x, height - margin + 8);

    noStroke();
    fill(0);
    text(yr, x, height - margin + 12);

    stroke(220);
    line(x, margin, x, height - margin);
  }

  // Y-axis labels (50 to 200)
  textAlign(RIGHT, CENTER);

  for (let val = 50; val <= 200; val += 25) {
    let y = map(val, 50, 200, height - margin, margin);

    stroke(220);
    line(margin, y, width - margin, y);

    stroke(0);
    line(margin - 8, y, margin, y);

    noStroke();
    fill(0);
    text(val, margin - 12, y);
  }

  // Axis titles
  fill(0);
  textSize(16);

  textAlign(CENTER);
  text("Year", width / 2, height - 25);

  push();
  translate(25, height / 2);
  rotate(-HALF_PI);
  text("Value", 0, 0);
  pop();
}

function screenX(xVal) {
  return map(xVal, 1998, 2002, margin, width - margin);
}

function screenY(yVal) {
  return map(yVal, 50, 200, height - margin, margin);
}

function drawConnectedPoints() {
  stroke(30, 100, 220);
  strokeWeight(2);
  noFill();

  beginShape();

  for (let p of data) {
    let x = screenX(p.x);
    let y = screenY(p.y);

    vertex(x, y);
  }

  endShape();

  for (let p of data) {
    let x = screenX(p.x);
    let y = screenY(p.y);

    fill(255);
    stroke(30, 100, 220);
    strokeWeight(2);

    circle(x, y, 7);
  }
}

function drawPolyline() {
  noFill();
  stroke(220, 50, 50);
  strokeWeight(3);

  beginShape();

  for (let p of data) {
    vertex(screenX(p.x), screenY(p.y));
  }

  endShape();
}

function drawScatter() {
  noStroke();
  fill(20, 10, 220);

  for (let p of data) {
    circle(screenX(p.x), screenY(p.y), 8);
  }
}

function drawBars() {
  noStroke();
  fill(200, 50, 40);

  let w = (width - 2 * margin) / data.length;

  for (let p of data) {
    let x = screenX(p.x);
    let y = screenY(p.y);

    rectMode(CORNERS);

    rect(x - w * 0.4, y, x + w * 0.4, height - margin);
  }
}
