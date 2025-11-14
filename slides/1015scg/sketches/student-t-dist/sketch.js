// Plot Normal and Student's t-distributions with left y-axis ticks and right legend
// Juan Carlos — 2025

// https://emoji.aranja.com/

function setup() {
  createCanvas(600, 500);
  background(255);
  noLoop();

  let xmin = -4;
  let xmax = 4;
  let step = 0.05;

  let ymin = 0;
  let ymax = 0.45;

  // Axis margins
  let marginLeft = 40;
  let marginRight = 40;
  let marginBottom = 40;
  let marginTop = 30;

  let plotW = width - marginLeft - marginRight;
  let plotH = height - marginTop - marginBottom;
  let x0 = marginLeft;
  let y0 = height - marginBottom;

  // Helper functions to map values to canvas coordinates
  function xToCanvas(x) {
    return map(x, xmin, xmax, x0, x0 + plotW);
  }
  function yToCanvas(y) {
    return map(y, ymin, ymax, y0, y0 - plotH);
  }

  // Draw axes: x-axis across, y-axis at left (x = xmin)
  stroke(0);
  strokeWeight(1);
  line(xToCanvas(xmin), yToCanvas(0), xToCanvas(xmax), yToCanvas(0)); // x-axis
  line(xToCanvas(xmin), yToCanvas(ymin), xToCanvas(xmin), yToCanvas(ymax)); // y-axis on left

  // Axis ticks and labels
  textSize(15);
  fill(0);
  noStroke();

  // X-axis ticks (integer ticks from xmin to xmax)
  textAlign(CENTER, TOP);
  for (let x = xmin; x <= xmax; x++) {
    let cx = xToCanvas(x);
    if (x % 1 === 0) {
      stroke(0);
      line(cx, y0 - 3, cx, y0 + 3);
      noStroke();
      text(x, cx, y0 + 8);
    }
  }

  // Y-axis ticks ON THE LEFT (use xToCanvas(xmin) for the tick x-position)
  textAlign(RIGHT, CENTER);
  let leftAxisX = xToCanvas(xmin);
  for (let y = ymin; y <= ymax; y += 0.1) {
    let cy = yToCanvas(y);
    stroke(0);
    line(leftAxisX - 3, cy, leftAxisX + 3, cy);
    noStroke();
    text(nf(y, 0, 1), leftAxisX - 6, cy);
  }

  // Draw normal distribution (mean 0, std 1)
  push();
  stroke(0, 0, 255);
  strokeWeight(2.5);
  noFill();
  beginShape();
  for (let x = xmin; x <= xmax; x += step) {
    let y = normalPDF(x, 0, 1);
    vertex(xToCanvas(x), yToCanvas(y));
  }
  endShape();
  pop();

  // Draw t-distributions with different degrees of freedom
  let dfs = [1, 3, 8, 20];
  let colors = [
    [255, 0, 0],
    [255, 100, 0],
    [0, 150, 0],
    [150, 0, 150]
  ];

  for (let i = 0; i < dfs.length; i++) {
    let df = dfs[i];
    stroke(colors[i]);
    strokeWeight(1.5);
    noFill();
    beginShape();
    for (let x = xmin; x <= xmax; x += step) {
      let y = studentTPDF(x, df);
      vertex(xToCanvas(x), yToCanvas(y));
    }
    endShape();
  }

  // Title
  push();
  textAlign(CENTER);
  fill(0);
  stroke(0);
  strokeWeight(0.5);
  textSize(16);
  text("Normal (blue) vs Student's t-distributions", width / 2, 20);
  pop();

  // Legend on the right side
  push();
  textAlign(LEFT);
  noStroke();
  textSize(18);
  let legendX = width - 120;
  let legendY = 60;
  for (let i = 0; i < dfs.length; i++) {
    fill(colors[i]);
    text(`t (df=${dfs[i]})`, legendX, legendY + i * 20);
  }
  pop();

 
}

//------------------------------------------------------
// Standard Normal PDF
function normalPDF(x, mean, sd) {
  return (1 / (sd * sqrt(TWO_PI))) * exp(-0.5 * pow((x - mean) / sd, 2));
}

// Student's t-distribution PDF
function studentTPDF(x, v) {
  // Γ((v+1)/2) / [ sqrt(vπ) * Γ(v/2) ] * (1 + x²/v)^(-(v+1)/2)
  return (
    gamma((v + 1) / 2) /
    (sqrt(v * PI) * gamma(v / 2)) *
    pow(1 + (x * x) / v, -(v + 1) / 2)
  );
}

// Gamma function approximation (Lanczos)
function gamma(z) {
  let g = 7;
  let p = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843695780195716e-6,
    1.5056327351493116e-7
  ];
  if (z < 0.5) return PI / (sin(PI * z) * gamma(1 - z));
  z -= 1;
  let x = p[0];
  for (let i = 1; i < g + 2; i++) x += p[i] / (z + i);
  let t = z + g + 0.5;
  return sqrt(2 * PI) * pow(t, z + 0.5) * exp(-t) * x;
}
