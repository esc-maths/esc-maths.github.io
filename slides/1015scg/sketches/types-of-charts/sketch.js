let data = [];
let buttons = [];
let currentMode = "Connected Points";

const margin = 80;

function setup() {
  createCanvas(800, 500);

  // 1. Setup Options and Distribution
  let options = ["Connected Points", "Polyline", "Scatter Plot", "Bars"];
  let btnWidth = 130;
  let totalAvailableWidth = width - (margin * 2);
  // Calculate spacing so first button is at margin and last is at width-margin
  let spacing = totalAvailableWidth / (options.length - 1);

  for (let i = 0; i < options.length; i++) {
    let btn = createButton(options[i]);
    
    // Calculate position: center the button over the calculated X point
    let xPos = margin + (i * spacing) - (btnWidth / 2);
    btn.position(xPos, 20);
    btn.size(btnWidth, 32);

    // Styling for a cleaner look
    btn.style('cursor', 'pointer');
    btn.style('border', '1px solid #ccc');
    btn.style('border-radius', '4px');
    btn.style('transition', '0.2s');

    btn.mousePressed(() => {
      currentMode = options[i];
    });
    
    buttons.push(btn);
  }

  // 2. Generate 75 data points
  for (let i = 0; i < 75; i++) {
    let x = map(i, 0, 74, 1998, 2002);
    let y = 120 + 40 * sin(i * 0.25) + random(-15, 15);
    y = constrain(y, 50, 200);
    data.push({ x, y });
  }
}

function draw() {
  background(250);

  drawAxes();
  updateButtonStyles();

  // Mode Logic
  if (currentMode === "Connected Points") {
    drawConnectedPoints();
  } else if (currentMode === "Polyline") {
    drawPolyline();
  } else if (currentMode === "Scatter Plot") {
    drawScatter();
  } else if (currentMode === "Bars") {
    drawBars();
  }
}

// Visual feedback for which button is active
function updateButtonStyles() {
  for (let btn of buttons) {
    if (btn.html() === currentMode) {
      btn.style('background-color', '#3264dc');
      btn.style('color', '#fff');
      btn.style('font-weight', 'bold');
    } else {
      btn.style('background-color', '#fff');
      btn.style('color', '#000');
      btn.style('font-weight', 'normal');
    }
  }
}

function drawAxes() {
  stroke(0);
  strokeWeight(2);

  // x-axis
  line(margin, height - margin, width - margin, height - margin);
  // y-axis
  line(margin, margin, margin, height - margin);

  // X-axis labels
  textAlign(CENTER, TOP);
  textSize(14);
  for (let yr = 1998; yr <= 2002; yr++) {
    let x = map(yr, 1998, 2002, margin, width - margin);
    stroke(0);
    line(x, height - margin, x, height - margin + 8);
    noStroke();
    fill(0);
    text(yr, x, height - margin + 12);
    stroke(220);
    line(x, margin, x, height - margin);
  }

  // Y-axis labels
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

// Helpers for mapping coordinates
function screenX(xVal) {
  return map(xVal, 1998, 2002, margin, width - margin);
}

function screenY(yVal) {
  return map(yVal, 50, 200, height - margin, margin);
}

// Charting Functions
function drawConnectedPoints() {
  stroke(30, 100, 220);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let p of data) {
    vertex(screenX(p.x), screenY(p.y));
  }
  endShape();
  for (let p of data) {
    fill(255);
    stroke(30, 100, 220);
    strokeWeight(2);
    circle(screenX(p.x), screenY(p.y), 7);
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