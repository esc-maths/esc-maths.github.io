let points = [];
let n = 70;
let rSlider;
let rValue = 0;
let baseX = [], baseY = [];
let margin = 60;

function setup() {
  createCanvas(450, 450);
  textFont('Menlo');
  textSize(14);

  // Slider for correlation
  rSlider = createSlider(-1, 1, 0, 0.01);
  rSlider.position(20, height + 20);
  rSlider.style('width', '400px');

  // Generate base data (independent random pairs)
  for (let i = 0; i < n; i++) {
    baseX[i] = random(-1, 1);
    baseY[i] = random(-1, 1);
  }

  noLoop();
}

function draw() {
  background(250);

  // Read correlation value
  rValue = rSlider.value();

  // Plot area boundaries
  let plotX0 = margin;
  let plotY0 = height - margin;
  let plotW = width - 2 * margin;
  let plotH = height - 2 * margin;

  // Draw axes
  stroke(0);
  line(plotX0, plotY0, plotX0 + plotW, plotY0); // x-axis
  line(plotX0, plotY0, plotX0, plotY0 - plotH); // y-axis

  // Axis labels
  noStroke();
  fill(0);
  textAlign(CENTER, CENTER);
  text('Data 1', plotX0 + plotW / 2, height - 20); // x-axis label

  push();
  translate(20, plotY0 - plotH / 2);
  rotate(-HALF_PI);
  text('Data 2', 0, 0);
  pop();

  // Tick marks and numeric labels for x
  textAlign(CENTER, TOP);
  for (let i = -1; i <= 1; i += 0.5) {
    let x = map(i, -1, 1, plotX0, plotX0 + plotW);
    stroke(200);
    line(x, plotY0, x, plotY0 - plotH);
    noStroke();
    fill(0);
    text(nf(i, 1, 1), x, plotY0 + 5);
  }

  // Tick marks and numeric labels for y
  textAlign(RIGHT, CENTER);
  for (let j = -1; j <= 1; j += 0.5) {
    let y = map(j, -1, 1, plotY0, plotY0 - plotH);
    stroke(200);
    line(plotX0, y, plotX0 + plotW, y);
    noStroke();
    fill(0);
    text(nf(j, 1, 1), plotX0 - 5, y);
  }

  // Correlation label
  push();
  textAlign(LEFT, CENTER);
  textSize(24);
  text('r = ' + nf(rValue, 1, 2), width / 3, 25);
  pop();

  // Generate correlated points using Cholesky-like transform
  points = [];
  for (let i = 0; i < n; i++) {
    let x = baseX[i];
    let y = rValue * baseX[i] + sqrt(1 - rValue * rValue) * baseY[i];
    points.push({ x, y });
  }

  // Draw points
  noStroke();
  fill(50, 20, 255);
  for (let p of points) {
    let px = map(p.x, -1, 1, plotX0, plotX0 + plotW);
    let py = map(p.y, -1, 1, plotY0, plotY0 - plotH);
    ellipse(px, py, 8, 8);
  }
}

function mouseDragged() {
  redraw();
}
function mouseReleased() {
  redraw();
}
function touchMoved() {
  redraw();
}
