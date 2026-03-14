let n = 15; 
let s = 80; // Increased from 40 to 80 to make the CI interval larger
let mu0;    // Theoretical value (Fixed)
let mu;     // Estimate (Moving)
let cl = 0.95; // Confidence Level

function setup() {
  createCanvas(windowWidth, windowHeight);
  mu0 = width / 2; 
  cursor('pointer');
}

function draw() {
  background(255);
  
  // Interactive Estimate mu based on MouseX
  mu = mouseX;
  
  // Controls for n (Sample Size)
  // Note: Decreasing N via Down Arrow will also make the CI larger!
  if (keyIsPressed && keyCode === UP_ARROW) n += 0.1;
  if (keyIsPressed && keyCode === DOWN_ARROW) n = max(2, n - 0.1);

  // 1. Calculations based on your slide
  let df = n - 1;
  let se = s / sqrt(n);
  let tStat = abs(mu - mu0) / se;
  
  // Approximation for t-critical at CL 0.95
  let tCrit = 2.0 + (2.0 / df); 
  
  // 2. Draw the Estimate vs Theoretical (Top)
  drawComparisonLayer(mu0, mu, se, tCrit);
  
  // 3. Draw the t-distribution logic (Bottom)
  drawTDistLayer(tStat, tCrit);
  
  drawSlideUI(n, df, se, tStat, tCrit);
}

function drawComparisonLayer(m0, m, se, tc) {
  // Draw mu0 (Theoretical Target)
  stroke(110);
  strokeWeight(3);
  drawingContext.setLineDash([5, 5]);
  line(m0, 130, m0, height * 0.4);
  drawingContext.setLineDash([]);
  
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(26);
  text("Theoretical Value (μ₀)", m0, 120);

  // Draw Estimate (mu) with Confidence Interval (CI)
  let ciHalfWidth = tc * se;
  stroke(100, 150, 255);
  strokeWeight(6); // Thicker line for better visibility
  line(m - ciHalfWidth, height * 0.3, m + ciHalfWidth, height * 0.3); // CI Line
  
  // End caps for the CI
  line(m - ciHalfWidth, height * 0.3 - 10, m - ciHalfWidth, height * 0.3 + 10);
  line(m + ciHalfWidth, height * 0.3 - 10, m + ciHalfWidth, height * 0.3 + 10);
  
  fill(100, 150, 255);
  noStroke();
  ellipse(m, height * 0.3, 12, 12); // mu point
  textSize(20);
  text("Estimate (μ)", m, height * 0.3 - 20);
  text("CI", m + ciHalfWidth + 25, height * 0.3 + 10);
}

function drawTDistLayer(ts, tc) {
  let centerX = width / 2;
  let centerY = height * 0.68;
  let scaleX = 60; 
  
  // Curve
  noFill();
  stroke(50);
  strokeWeight(3);
  beginShape();
  for (let t = -5; t <= 5; t += 0.1) {
    let y = exp(-sq(t) / 2) * 100;
    vertex(centerX + t * scaleX, centerY - y);
  }
  endShape();

  // Rejection Regions (Red Squares)
  fill(255, 0, 0, 40);
  noStroke();
  rect(centerX + tc * scaleX, centerY - 110, 150, 110);
  rect(centerX - tc * scaleX - 150, centerY - 110, 150, 110);
  
  // Labels for t-critical
  fill(0);
  textSize(20);
  text("t_critical", centerX + tc * scaleX, centerY + 25);
  text("-t_critical", centerX - tc * scaleX, centerY + 25);

  // Your t-stat pointer
  let pointerX = centerX + ts * scaleX; 
  pointerX = constrain(pointerX, centerX - 5.5 * scaleX, centerX + 5.5 * scaleX);
  
  fill(0);
  triangle(pointerX, centerY + 5, pointerX - 5, centerY + 15, pointerX + 5, centerY + 15);
  text("t_stat: " + nf(ts, 1, 2), pointerX, centerY + 50);
}

function drawSlideUI(n, df, se, ts, tc) {
  fill(0);
  textAlign(LEFT);
  textSize(24);
  text(`1. SE = ${nf(se, 1, 2)}`, 50, 80);
  text(`2. CL = 0.95`, 50, 110);
  text(`3. df = n - 1 = ${nf(df, 1, 1)}`, 50, 140);
  text(`4. t_critical = ${nf(tc, 1, 2)}`, 50, 170);
  
  textSize(32);
  if (ts <= tc) {
    fill(4, 125, 4);
    text("✅ t_stat ≤ t_critical: μ agrees with μ₀", width / 2 - 260, 50);
  } else {
    fill(190, 10, 10);
    text("❌ t_stat > t_critical: μ does not agree with μ₀", width / 2 - 260, 50);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}