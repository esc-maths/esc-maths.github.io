let points = [];
let minWidth = 500;
let minHeight = 700;

function setup() {
  // Ensure the canvas meets minimum size requirements for the visualization
  let w = max(windowWidth, minWidth);
  let h = max(windowHeight, minHeight);
  createCanvas(w, h);
  
  // Seed initial data with a positive correlation
  for (let i = 0; i < 100; i++) {
    let x = random(-150, 150);
    let y = x * 0.7 + random(-60, 60);
    points.push(createVector(x + width / 2, y + height / 2));
  }
}

function draw() {
  background(30);
  
  // 1. Arrange the data (User interactivity to draw spread)
  if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    points.push(createVector(mouseX, mouseY));
  }

  // Draw data points
  fill(255, 150);
  noStroke();
  for (let p of points) {
    ellipse(p.x, p.y, 8, 8);
  }

  if (points.length > 1) {
    drawPCA();
  }
  
  // UI Instructions
  fill(255);
  noStroke();
  textSize(16);
  text("Click and drag to add data points", 20, 30);
}

function drawPCA() {
  // 1. Calculate the mean (center of the data)
  let xSum = 0, ySum = 0;
  for (let p of points) { 
    xSum += p.x; 
    ySum += p.y; 
  }
  let meanX = xSum / points.length;
  let meanY = ySum / points.length;

  // 2. Compute the Covariance Matrix (Equivalent to X^T * X / (n-1))
  let cxx = 0, cyy = 0, cxy = 0;
  for (let p of points) {
    let dx = p.x - meanX;
    let dy = p.y - meanY;
    cxx += dx * dx;
    cyy += dy * dy;
    cxy += dx * dy;
  }
  let n = points.length - 1;
  cxx /= n;
  cyy /= n;
  cxy /= n;

  // 3. Find principal vectors by calculating Eigenvalues (Roots of the characteristic polynomial)
  let trace = cxx + cyy;
  let det = (cxx * cyy) - (cxy * cxy);
  
  // Singular values squared (sigma^2)
  let lambda1 = (trace + sqrt(max(0, trace * trace - 4 * det))) / 2;
  let lambda2 = (trace - sqrt(max(0, trace * trace - 4 * det))) / 2;

  // Eigenvectors (v1, v2)
  let v1, v2;
  if (abs(cxy) > 1e-5) {
    v1 = createVector(cxy, lambda1 - cxx).normalize();
    v2 = createVector(cxy, lambda2 - cxx).normalize();
  } else {
    v1 = createVector(1, 0);
    v2 = createVector(0, 1);
  }

  // Draw the mean origin
  fill(255, 200, 0);
  ellipse(meanX, meanY, 12, 12);

  // 4. Scale by the singular values (sqrt of eigenvalues) to show variation
  // Multiplied by a constant (e.g., 2.5) purely for visual scaling on the canvas
  let scale1 = sqrt(lambda1) * 2.5;
  let scale2 = sqrt(lambda2) * 2.5;

  // Draw Principal Vector 1 (Greatest spread)
  strokeWeight(4);
  stroke(255, 50, 50); // Red
  line(meanX, meanY, meanX + v1.x * scale1, meanY + v1.y * scale1);
  line(meanX, meanY, meanX - v1.x * scale1, meanY - v1.y * scale1);

  // Draw Principal Vector 2 (Orthogonal spread)
  stroke(50, 150, 255); // Blue
  line(meanX, meanY, meanX + v2.x * scale2, meanY + v2.y * scale2);
  line(meanX, meanY, meanX - v2.x * scale2, meanY - v2.y * scale2);
}

function windowResized() {
  let w = max(windowWidth, minWidth);
  let h = max(windowHeight, minHeight);
  resizeCanvas(w, h);
}