let table;
let datasets = {};
let names = [];
let currentIndex = 0;

let holdTime = 5000;
let transitionTime = 1500;
let lastSwitch = 0;

let plotSize;
let statsPanelWidth = 240;

let plotLeft;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  table = await loadTable('assets/datasaurus.csv', ',', 'header');

  colorMode(HSL, 360, 100, 100);
  calculatePlotArea();

  // Group datasets
  for (let r = 0; r < table.getRowCount(); r++) {
    let name = table.getString(r, "dataset");
    let x = table.getNum(r, "x");
    let y = table.getNum(r, "y");
    if (!datasets[name]) datasets[name] = [];
    datasets[name].push({ x, y });
  }

  names = Object.keys(datasets);

  // Sort points for smooth morph
  for (let n of names) {
    datasets[n].sort((a, b) => a.x - b.x || a.y - b.y);
  }

  lastSwitch = millis();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculatePlotArea();
}

function calculatePlotArea() {
  plotSize = min(width - statsPanelWidth - 60, height * 0.9);

  // Center the plot horizontally relative to the remaining space
  let freeSpace = width - statsPanelWidth;
  plotLeft = (freeSpace - plotSize) / 2;
}


function draw() {
  background(0, 0, 96);

  let now = millis();
  let elapsed = now - lastSwitch;

  let curr = datasets[names[currentIndex]];
  let next = datasets[names[(currentIndex + 1) % names.length]];

  let t = 0;
  if (elapsed > holdTime) {
    t = (elapsed - holdTime) / transitionTime;
    if (t >= 1) {
      currentIndex = (currentIndex + 1) % names.length;
      lastSwitch = now;
      t = 0;
      curr = datasets[names[currentIndex]];
      next = datasets[names[(currentIndex + 1) % names.length]];
    }
  }

  drawGrid();
  drawAxes();
  drawMorph(curr, next, t);
  drawStatsPanel(curr, names[currentIndex]);
}

//
// DRAWING HELPERS
//

function drawMorph(aPoints, bPoints, t) {
  push();
  noStroke();

  for (let i = 0; i < aPoints.length; i++) {
    let pa = aPoints[i];
    let pb = bPoints[i];

    let x = lerp(pa.x, pb.x, t);
    let y = lerp(pa.y, pb.y, t);

    let px = map(x, 0, 100, plotLeft, plotLeft + plotSize);
    let py = map(y, 0, 100, height / 2 + plotSize / 2, height / 2 - plotSize / 2);


    // Color palette: hue cycles through 0–360
    let hueColors = map(i, 0, aPoints.length, 200, 340);
    fill(hueColors, 80, 50);

    ellipse(px, py, 10, 10);
  }

  pop();
}

function drawGrid() {
  push();
  stroke(0, 0, 80);
  strokeWeight(1);

  for (let i = 0; i <= 10; i++) {
    let x = map(i, 0, 10, plotLeft, plotLeft + plotSize);
    let y = map(i, 0, 10, height / 2 + plotSize / 2, height / 2 - plotSize / 2);

    line(plotLeft, y, plotLeft + plotSize, y);
    line(x, height / 2 - plotSize / 2, x, height / 2 + plotSize / 2);

  }

  pop();
}

function drawAxes() {
  push();
  stroke(0, 0, 40);
  strokeWeight(3);

  // Y axis
  line(plotLeft, height / 2 - plotSize / 2, plotLeft, height / 2 + plotSize / 2);

  // X axis
  line(plotLeft, height / 2 + plotSize / 2, plotLeft + plotSize, height / 2 + plotSize / 2);

  pop();
}

function drawStatsPanel(points, name) {
  let panelX = width - statsPanelWidth + 20;

  // Compute stats
  let xs = points.map(p => p.x);
  let ys = points.map(p => p.y);

  let meanX = nf(mean(xs), 1, 9);
  let meanY = nf(mean(ys), 1, 9);
  let sdX = nf(std(xs), 1, 9);
  let sdY = nf(std(ys), 1, 9);
  let r = nf(corr(xs, ys), 1, 9);

  push();
  fill(0, 0, 70);
  noStroke();
  rect(width - statsPanelWidth, 0, statsPanelWidth, height);

  fill(0, 0, 0);
  textSize(30);
  textAlign(LEFT, TOP);
  text(name, panelX, 20);

  textSize(18);
  text(`Mean X: ${meanX}`, panelX, 80);
  text(`Mean Y: ${meanY}`, panelX, 110);
  text(`SD X:   ${sdX}`, panelX, 150);
  text(`SD Y:   ${sdY}`, panelX, 180);
  text(`Corr: ${r}`, panelX, 210);
  
  text(`\n\nBy J. Matejka \n& G. Fitzmaurice 2017`, panelX, 240);

  pop();
}

//
// MATH HELPERS
//

function mean(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

function std(arr) {
  let m = mean(arr);
  return Math.sqrt(arr.map(x => (x - m) ** 2).reduce((a, b) => a + b) / arr.length);
}

function corr(xs, ys) {
  let mx = mean(xs);
  let my = mean(ys);

  let num = 0;
  let dx = 0;
  let dy = 0;

  for (let i = 0; i < xs.length; i++) {
    let a = xs[i] - mx;
    let b = ys[i] - my;
    num += a * b;
    dx += a * a;
    dy += b * b;
  }

  return num / Math.sqrt(dx * dy);
}