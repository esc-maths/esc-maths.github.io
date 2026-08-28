// ----- Global variables -----
let table;
let dataMatrix;          // rows x 4 features
let labels;              // species strings
let labelCodes;          // 0,1,2
let speciesColors;
let uniqueLabels;

// Two sets of 2D points
let initialPoints = [];  // centered sepal length vs sepal width
let finalPoints = [];    // PCA scores (PC1 vs PC2)
let currentPoints = [];  // blended for drawing

// Transition state
let transitionProgress = 0;   // 0 = original, 1 = PCA
let isAnimating = false;
let targetProgress = 0;
const speed = 0.03;

// Axis labels (change dynamically)
let xLabel = 'Sepal length';
let yLabel = 'Sepal width';

// Plot padding
const pad = 70;

// p5 button
let toggleBtn;

// ----- p5 lifecycle -----
// function preload() {
//   // Assumes 'iris.data.csv' is in the same folder and has a header row.

// }

async function setup() {
  createCanvas(800, 600);
  table = await loadTable('iris/iris.data.csv', ',', 'header');
  background(255);

  // ---- Extract data ----
  const rows = table.getRows();
  const numRows = rows.length;
  const numFeatures = 4;

  dataMatrix = [];
  labels = [];

  for (let i = 0; i < numRows; i++) {
    const row = rows[i];
    const features = [];
    for (let j = 0; j < numFeatures; j++) {
      features.push(parseFloat(row.getString(j)));
    }
    dataMatrix.push(features);
    labels.push(row.getString(4));
  }

  // ---- Encode labels ----
  uniqueLabels = [...new Set(labels)];
  const labelMap = {};
  uniqueLabels.forEach((label, idx) => { labelMap[label] = idx; });
  labelCodes = labels.map(label => labelMap[label]);

  speciesColors = [
    color(31, 119, 180),  // setosa — blue
    color(255, 127, 14),  // versicolor — orange
    color(44, 160, 44)    // virginica — green
  ];

  // ---- Center data for PCA (and for initial plot) ----
  const n = dataMatrix.length;
  const p = numFeatures;
  const mean = Array(p).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < p; j++) {
      mean[j] += dataMatrix[i][j];
    }
  }
  for (let j = 0; j < p; j++) mean[j] /= n;

  const centered = dataMatrix.map(row => row.map((val, j) => val - mean[j]));

  // ---- SVD (numeric.js) ----
  const svd = numeric.svd(centered);
  const V = svd.V; // right singular vectors

  // ---- PCA scores (first two components) ----
  const V2 = V.map(row => [row[0], row[1]]);
  finalPoints = centered.map(row => {
    const x = row.reduce((sum, val, j) => sum + val * V2[j][0], 0);
    const y = row.reduce((sum, val, j) => sum + val * V2[j][1], 0);
    return [x, y];
  });

  // ---- Initial points: centered sepal length (col 0) and sepal width (col 1) ----
  initialPoints = centered.map(row => [row[0], row[1]]);

  // Start with the original view
  currentPoints = initialPoints.map(p => p.slice());
  transitionProgress = 0;

  // ---- Create the toggle button (top‑right corner) ----
  toggleBtn = createButton('Show PCA');
  toggleBtn.position(10, 10);
  toggleBtn.style('padding', '8px 16px');
  toggleBtn.style('font-size', '16px');
  toggleBtn.mousePressed(toggleTransition);

  // ---- Draw initial plot ----
  drawPlot();
}

function draw() {
  // Only animate if we're transitioning
  if (isAnimating) {
    const step = speed * (targetProgress - transitionProgress);
    if (abs(step) < 0.001) {
      transitionProgress = targetProgress;
      isAnimating = false;
      toggleBtn.html(targetProgress === 0 ? 'Show PCA' : 'Show Original');
    } else {
      transitionProgress += step;
      transitionProgress = constrain(transitionProgress, 0, 1);
    }
    // Update points
    updateCurrentPoints();
    drawPlot();
  }
}

function updateCurrentPoints() {
  const t = transitionProgress;
  currentPoints = initialPoints.map((init, i) => {
    const fin = finalPoints[i];
    return [lerp(init[0], fin[0], t), lerp(init[1], fin[1], t)];
  });
  // Update axis labels
  xLabel = t < 0.5 ? 'Sepal length' : 'PC1';
  yLabel = t < 0.5 ? 'Sepal width' : 'PC2';
}

function toggleTransition() {
  // If already animating, we simply reverse direction
  if (isAnimating) {
    targetProgress = 1 - transitionProgress;
  } else {
    targetProgress = transitionProgress < 0.5 ? 1 : 0;
    isAnimating = true;
  }
  // Update button text while animating (will be set when done)
  toggleBtn.html(targetProgress === 0 ? 'Show PCA' : 'Show Original');
}

// ----- Plotting function -----
function drawPlot() {
  background(255);

  // Compute min/max of currentPoints with some padding
  let xMin = Infinity, xMax = -Infinity;
  let yMin = Infinity, yMax = -Infinity;
  for (let p of currentPoints) {
    if (p[0] < xMin) xMin = p[0];
    if (p[0] > xMax) xMax = p[0];
    if (p[1] < yMin) yMin = p[1];
    if (p[1] > yMax) yMax = p[1];
  }
  const xRange = xMax - xMin || 1;
  const yRange = yMax - yMin || 1;
  const xPad = xRange * 0.1;
  const yPad = yRange * 0.1;
  xMin -= xPad; xMax += xPad;
  yMin -= yPad; yMax += yPad;

  // Plot area dimensions
  const plotW = width - 2 * pad;
  const plotH = height - 2 * pad;
  const scaleX = plotW / (xMax - xMin);
  const scaleY = plotH / (yMax - yMin);

  let mapX, mapY;

  // If we are showing PCA (progress > 0.5), stretch to fill the canvas.
  // Otherwise, keep the original square aspect ratio.
  if (transitionProgress > 0.5) {
    // Stretch independently to fill the plot area
    mapX = (x) => pad + (x - xMin) * scaleX;
    mapY = (y) => pad + (yMax - y) * scaleY;
  } else {
    // Original view: preserve aspect ratio (like MATLAB's default behavior)
    const scale = Math.min(scaleX, scaleY);
    const xOffset = (width - scale * (xMax - xMin)) / 2;
    const yOffset = (height - scale * (yMax - yMin)) / 2;
    mapX = (x) => xOffset + (x - xMin) * scale;
    mapY = (y) => yOffset + (yMax - y) * scale;
  }

  // ----- Axes -----
  stroke(0);
  strokeWeight(1);
  line(pad, height - pad, width - pad, height - pad); // X axis
  line(pad, pad, pad, height - pad);                 // Y axis

  // ----- Tick marks & numbers (X) -----
  let xTickStep = niceStep((xMax - xMin) / 2);
  let xStart = ceil(xMin / xTickStep) * xTickStep;
  fill(0);
  noStroke();
  textSize(12);
  textAlign(CENTER, TOP);
  for (let v = xStart; v <= xMax; v += xTickStep) {
    const xPos = mapX(v);
    stroke(0);
    line(xPos, height - pad, xPos, height - pad + 6);
    noStroke();
    fill(0);
    text(nf(formatTick(v), 1, 2), xPos, height - pad + 10);
  }

  // ----- Tick marks & numbers (Y) -----
  let yTickStep = niceStep((yMax - yMin) / 2);
  let yStart = ceil(yMin / yTickStep) * yTickStep;
  textAlign(RIGHT, CENTER);
  for (let v = yStart; v <= yMax; v += yTickStep) {
    const yPos = mapY(v);
    stroke(0);
    line(pad - 6, yPos, pad, yPos);
    noStroke();
    fill(0);
    text(nf(formatTick(v), 1, 2), pad - 10, yPos);
  }

  // ----- Scatter points -----
  const pointSize = 10;
  for (let i = 0; i < currentPoints.length; i++) {
    const [x, y] = currentPoints[i];
    const code = labelCodes[i];
    stroke(255);
    strokeWeight(1);
    fill(speciesColors[code]);
    ellipse(mapX(x), mapY(y), pointSize, pointSize);
  }

  // ----- Axis labels -----
  fill(0);
  noStroke();
  textSize(18);
  textAlign(CENTER, CENTER);
  text(xLabel, width / 2, height - 20);
  push();
  translate(18, height / 2);
  rotate(-PI / 2);
  text(yLabel, 0, 0);
  pop();

  // ----- Legend -----
  const legX = width - 160;
  const legY = 30;
  textSize(16);
  textAlign(LEFT, CENTER);
  for (let i = 0; i < uniqueLabels.length; i++) {
    fill(speciesColors[i]);
    noStroke();
    ellipse(legX, legY + i * 25, 10, 10);
    fill(0);
    text(uniqueLabels[i], legX + 20, legY + i * 25);
  }

  // Show progress if animating (optional)
  if (isAnimating) {
    fill(0);
    textSize(14);
    textAlign(LEFT, TOP);
    text('Transition: ' + round(transitionProgress * 100) + '%', width/2 - 50, 10);
  }
}

// ----- Helper: nice step for ticks -----
function niceStep(range) {
  const rough = range / 6;
  const magnitude = pow(10, floor(log(rough) / log(10)));
  const normalized = rough / magnitude;
  let step;
  if (normalized < 1.5) step = 1;
  else if (normalized < 3.5) step = 2;
  else if (normalized < 7.5) step = 5;
  else step = 10;
  return step * magnitude;
}

function formatTick(val) {
  if (abs(val) < 1e-6) {
    return '0.00';
  }
  return nf(val, 1, 2);
}