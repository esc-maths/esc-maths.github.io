let x1, x2;
let s1 = 120, s2 = 80; 
let n1 = 15, n2 = 15;
let cl = 0.95;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width / 2; 
  cursor('pointer');
}

function draw() {
  background(255);
  
  x1 = width / 2;
  x2 = mouseX;

  // Controls for n2 (Sample Size)
  if (keyIsPressed && keyCode === UP_ARROW) n2 += 0.1;
  if (keyIsPressed && keyCode === DOWN_ARROW) n2 = max(2.1, n2 - 0.1);

  // --- MATH BLOCK: MATCHING YOUR SLIDE ---
  
  // 1. Calculate variances divided by n (s^2/n)
  let term1 = sq(s1) / n1;
  let term2 = sq(s2) / n2;
  
  // 2. Calculate t_stat = |x1 - x2| / sqrt(s1^2/n1 + s2^2/n2)
  let standardErrorWelch = sqrt(term1 + term2);
  let tStat = abs(x1 - x2) / standardErrorWelch;
  
  // 3. Calculate Degrees of Freedom (Welch-Satterthwaite)
  let num = sq(term1 + term2);
  let den = (sq(term1) / (n1 - 1)) + (sq(term2) / (n2 - 1));
  let df = num / den;
  
  // 4. Find t_critical (Linear interpolation approximation for CL 0.95)
  // This shifts as df changes
  let tCrit = 1.96 + (2.5 / df); 

  // --- VISUALIZATION ---
  drawWelchComparison(x1, s1, n1, x2, s2, n2, tCrit);
  drawTDistLayer(tStat, tCrit);
  drawWelchUI(n1, n2, s1, s2, df, tStat, tCrit);
}

function drawWelchComparison(mx1, ms1, mn1, mx2, ms2, mn2, tc) {
  // Exp 1: Center
  let se1 = ms1 / sqrt(mn1);
  drawExperiment(mx1, tc * se1, color(100, 150, 255), "Exp 1 (x̄₁)");
  
  // Exp 2: Mouse
  let se2 = ms2 / sqrt(mn2);
  drawExperiment(mx2, tc * se2, color(127, 21, 175), "Exp 2 (x̄₂)");
}

function drawExperiment(x, ciWidth, col, label) {
  stroke(col);
  strokeWeight(6);
  line(x - ciWidth, height * 0.35, x + ciWidth, height * 0.35);
  line(x - ciWidth, height * 0.35 - 10, x - ciWidth, height * 0.35 + 10);
  line(x + ciWidth, height * 0.35 - 10, x + ciWidth, height * 0.35 + 10);
  
  fill(col);
  noStroke();
  ellipse(x, height * 0.35, 12, 12);
  textAlign(CENTER);
  textSize(20);
  text(label, x, height * 0.35 - 25);
}

function drawTDistLayer(ts, tc) {
  let centerX = width / 2;
  let centerY = height * 0.7;
  let scaleX = 70; 
  
  noFill();
  stroke(80);
  strokeWeight(3);
  beginShape();
  for (let t = -5; t <= 5; t += 0.1) {
    let y = exp(-sq(t) / 2) * 100;
    vertex(centerX + t * scaleX, centerY - y);
  }
  endShape();

  // Rejection Regions
  fill(255, 0, 0, 40);
  noStroke();
  rect(centerX + tc * scaleX, centerY - 110, 150, 110);
  rect(centerX - tc * scaleX - 150, centerY - 110, 150, 110);
  
  fill(0);
  textSize(20);
  text("t_critical", centerX + tc * scaleX + 45, centerY + 25);
  text("-t_critical", centerX - tc * scaleX, centerY + 25);
  
  // t_stat mapping
  let pointerX = centerX + ts * scaleX; 
  pointerX = constrain(pointerX, centerX, centerX + 5.5 * scaleX);
  
  fill(0);
  triangle(pointerX, centerY + 5, pointerX - 5, centerY + 15, pointerX + 5, centerY + 15);
  textAlign(CENTER);
  text("t_stat: " + nf(ts, 1, 2), pointerX, centerY + 50);
}

function drawWelchUI(n1, n2, s1, s2, df, ts, tc) {
  fill(0);
  textAlign(LEFT);
  textSize(26);
  text(`n₁=${nf(n1,1,0)}, s₁=${s1}`, 50, 100);
  text(`n₂=${nf(n2,1,1)}, s₂=${s2}`, 50, 130);
  text(`df = ${nf(df, 1, 2)}`, 50, 180);
  text(`t_crit = ${nf(tc, 1, 2)}`, 50, 210);
  
  textAlign(CENTER);
  textSize(32);
  // THE FINAL CONDITION CHECK
  if (ts <= tc) {
    fill(4, 125, 4);
    text(`✅ t_stat (${nf(ts,1,2)}) ≤ t_critical (${nf(tc,1,2)})`, width/2, 60);
    textSize(20);
    text("Experiments Agree", width/2, 90);
  } else {
    fill(190, 10, 10);
    text(`❌ t_stat (${nf(ts,1,2)}) > t_critical (${nf(tc,1,2)})`, width/2, 60);
    textSize(20);
    text("Experiments Do Not Agree", width/2, 90);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}