let N = 5;
let C = [];
let omega = [];
let points = [];
let t = 0;
let tStep = 0.01;
let drawingComplete = false;
let curveColor;
let lastUpdateTime = 0;
let updateInterval = 4000; // 4 seconds in milliseconds

function setup() {
  createCanvas(600, 500);
  
  // Generate initial random curve color
  curveColor = generateNiceColor();
  
  // Initialize parameters and plot first curve
  initializeParameters();
  plotCurve();
  
  lastUpdateTime = millis();
}

function draw() {
  background(30);
  
  // Check if it's time to update the curve
  if (millis() - lastUpdateTime > updateInterval) {
    generateNewCurve();
    lastUpdateTime = millis();
  }
  
  // Draw coordinate system
  drawCoordinateSystem();
  
  // Draw the curve
  drawCurve();
  
  // Display timer info
  displayTimer();
}

function generateNiceColor() {
  // Generate vibrant colors for the curves
  let colorSchemes = [
    // Bright reds
    () => color(255, random(80, 150), random(80, 150)),
    // Bright greens
    () => color(random(80, 150), 255, random(80, 150)),
    // Bright blues
    () => color(random(80, 150), random(80, 150), 255),
    // Bright purples
    () => color(random(180, 255), random(80, 150), random(180, 255)),
    // Bright oranges
    () => color(255, random(150, 200), random(80, 120)),
    // Bright cyans
    () => color(random(80, 150), 255, 255),
    // Bright pinks
    () => color(255, random(100, 180), random(180, 255)),
    // Bright yellows
    () => color(255, 255, random(100, 180))
  ];
  
  // Pick a random color scheme
  let randomScheme = random(colorSchemes);
  return randomScheme();
}

function initializeParameters() {
  C = [];
  omega = [];
  points = [];
  t = 0;
  drawingComplete = false;
  
  for (let i = 0; i < N; i++) {
    // Random complex coefficients (real and imaginary parts between -2 and 2)
    C.push({
      real: random(-2, 2),
      imag: random(-2, 2)
    });
    
    // Random integer frequencies between -10 and 10
    omega.push(floor(random(-10, 11)));
  }
}

function plotCurve() {
  points = [];
  
  // Plot the complete curve from t=0 to t=2π
  for (t = 0; t <= TWO_PI; t += tStep) {
    points.push(calculatePoint(t));
  }
  
  drawingComplete = true;
}

function calculatePoint(t) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < N; i++) {
    // Calculate e^(omega*i*t) = cos(omega*t) + i*sin(omega*t)
    let angle = omega[i] * t;
    let expReal = cos(angle);
    let expImag = sin(angle);
    
    // Multiply by complex coefficient C
    // (a+bi)(c+di) = (ac - bd) + (ad + bc)i
    x += C[i].real * expReal - C[i].imag * expImag;
    y += C[i].real * expImag + C[i].imag * expReal;
  }
  
  // Scale for better visualization
  return createVector(x * 23, y * 23);
}

function drawCoordinateSystem() {
  push();
  stroke(80);
  strokeWeight(1);
  
  // Draw grid
  for (let x = -width/2; x <= width/2; x += 50) {
    line(x + width/2, 0, x + width/2, height);
  }
  for (let y = -height/2; y <= height/2; y += 50) {
    line(0, y + height/2, width, y + height/2);
  }
  
  // Draw axes
  stroke(210);
  strokeWeight(2);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  
  pop();
}

function drawCurve() {
  if (points.length < 2) return;
  
  push();
  translate(width/2, height/2);
  
  // Draw the complete curve with the random color
  stroke(curveColor);
  strokeWeight(3);
  noFill();
  
  beginShape();
  for (let mypoint of points) {
    vertex(mypoint.x, mypoint.y);
  }
  endShape();
  
  pop();
}

function displayTimer() {
  push();
  fill(255);
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  
  let timeLeft = updateInterval - (millis() - lastUpdateTime);
  let secondsLeft = ceil(timeLeft / 1000);
  
  let info = `N = ${N}\n`;
  info += `Next curve in: ${secondsLeft}s\n\n`;
  
  info += 'Parameters:\n';
  for (let i = 0; i < N; i++) {
    info += `C${i+1} = ${C[i].real.toFixed(2)} ${C[i].imag >= 0 ? '+' : ''}${C[i].imag.toFixed(2)}i`;
    info += `, ω${i+1} = ${omega[i]}\n`;
  }
  
  text(info, 18, 18);
  pop();
}

function generateNewCurve() {
  // Generate new random curve color
  curveColor = generateNiceColor();
  
  // Cycle N between 2 and 6
  N = (N % 6) + 1;
  if (N < 2) N = 2;
  
  // Generate new parameters and plot
  initializeParameters();
  plotCurve();
}

// Handle window resizing
function windowResized() {
  resizeCanvas(600, 500);
}