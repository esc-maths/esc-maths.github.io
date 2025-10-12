let N = 5;
let C = [];
let omega = [];
let points = [];
let t = 0;
let tStep = 0.01;
let curveColor;

let targetN = 5;
let targetC = [];
let targetOmega = [];
let targetCurveColor;

let transitionProgress = 0;
let transitionSpeed = 0.01;
let isTransitioning = false;
let lastUpdateTime = 0;
let updateInterval = 4000; // 4 seconds in milliseconds

function setup() {
  createCanvas(600, 500);
  
  // Generate initial random curve color
  curveColor = generateNiceColor();
  
  // Initialize parameters and plot first curve
  initializeParameters();
  plotCurve();
  
  // Initialize target parameters
  targetN = N;
  targetC = JSON.parse(JSON.stringify(C));
  targetOmega = [...omega];
  targetCurveColor = color(red(curveColor), green(curveColor), blue(curveColor));
  
  lastUpdateTime = millis();
}

function draw() {
  background(30);
  
  // Check if it's time to start transition to target curve
  if (!isTransitioning && millis() - lastUpdateTime > updateInterval) {
    prepareTargetCurve();
    startTransition();
    lastUpdateTime = millis();
  }
  
  // Update transition if active
  if (isTransitioning) {
    updateTransition();
  }
  
  // Draw coordinate system
  drawCoordinateSystem();
  
  // Draw the current curve (or interpolated curve during transition)
  drawCurve();
}

function generateNiceColor() {
  // Generate vibrant colors for the curves
  let colorSchemes = [
    () => color(255, random(80, 150), random(80, 150)),
    () => color(random(80, 150), 255, random(80, 150)),
    () => color(random(80, 150), random(80, 150), 255),
    () => color(random(180, 255), random(80, 150), random(180, 255)),
    () => color(255, random(150, 200), random(80, 120)),
    () => color(random(80, 150), 255, 255),
    () => color(255, random(100, 180), random(180, 255)),
    () => color(255, 255, random(100, 180))
  ];
  
  let randomScheme = random(colorSchemes);
  return randomScheme();
}

function initializeParameters() {
  C = [];
  omega = [];
  
  for (let i = 0; i < N; i++) {
    C.push({
      real: random(-2, 2),
      imag: random(-2, 2)
    });
    omega.push(floor(random(-10, 11)));
  }
}

function prepareTargetCurve() {
  targetN = floor(random(2, 7)); // Random N between 2 and 6
  
  targetC = [];
  targetOmega = [];
  
  for (let i = 0; i < targetN; i++) {
    targetC.push({
      real: random(-2, 2),
      imag: random(-2, 2)
    });
    targetOmega.push(floor(random(-10, 11)));
  }
  
  targetCurveColor = generateNiceColor();
}

function startTransition() {
  isTransitioning = true;
  transitionProgress = 0;
}

function updateTransition() {
  transitionProgress += transitionSpeed;
  
  if (transitionProgress >= 1) {
    // Transition complete - set current to target
    N = targetN;
    C = targetC;
    omega = targetOmega;
    curveColor = targetCurveColor;
    
    // Plot the final target curve
    plotCurve();
    
    // Reset transition
    isTransitioning = false;
    transitionProgress = 0;
  } else {
    // Update points during transition
    plotTransitionCurve();
  }
}

function plotCurve() {
  points = [];
  for (t = 0; t <= TWO_PI; t += tStep) {
    points.push(calculateCurrentPoint(t));
  }
}

function plotTransitionCurve() {
  points = [];
  for (t = 0; t <= TWO_PI; t += tStep) {
    points.push(calculateTransitionPoint(t));
  }
}

let xScale = 30;
let yScale = 30; 
function calculateCurrentPoint(t) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < N; i++) {
    let angle = omega[i] * t;
    let expReal = cos(angle);
    let expImag = sin(angle);
    x += C[i].real * expReal - C[i].imag * expImag;
    y += C[i].real * expImag + C[i].imag * expReal;
  }
  
  return createVector(x * xScale, y * yScale);
}

function calculateTransitionPoint(t) {
  let x = 0;
  let y = 0;

  // Use the maximum number of terms between current and target
  let maxTerms = max(N, targetN);

  for (let i = 0; i < maxTerms; i++) {
    // Get current term values (0 if term doesn't exist)
    let currentReal = i < N ? C[i].real : 0;
    let currentImag = i < N ? C[i].imag : 0;
    let currentOmega = i < N ? omega[i] : 0;

    // Get target term values (0 if term doesn't exist)
    let targetReal = i < targetN ? targetC[i].real : 0;
    let targetImag = i < targetN ? targetC[i].imag : 0;
    let targetOmegaVal = i < targetN ? targetOmega[i] : 0; // <-- renamed here

    // Interpolate coefficients and frequencies
    let interpReal = lerp(currentReal, targetReal, transitionProgress);
    let interpImag = lerp(currentImag, targetImag, transitionProgress);
    let interpOmega = lerp(currentOmega, targetOmegaVal, transitionProgress);

    // Calculate the exponential term with interpolated frequency
    let angle = interpOmega * t;
    let expReal = cos(angle);
    let expImag = sin(angle);

    // Calculate contribution
    x += interpReal * expReal - interpImag * expImag;
    y += interpReal * expImag + interpImag * expReal;
  }

  return createVector(x * xScale, y * yScale);
}


function drawCoordinateSystem() {
  push();
  stroke(50);
  strokeWeight(1);
  
  for (let x = -width/2; x <= width/2; x += 50) {
    line(x + width/2, 0, x + width/2, height);
  }
  for (let y = -height/2; y <= height/2; y += 50) {
    line(0, y + height/2, width, y + height/2);
  }
  
  stroke(180);
  strokeWeight(1);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  
  pop();
}

function drawCurve() {
  if (points.length < 2) return;
  
  push();
  translate(width/2, height/2);
  
  // Interpolate color during transition
  if (isTransitioning) {
    let r = lerp(red(curveColor), red(targetCurveColor), transitionProgress);
    let g = lerp(green(curveColor), green(targetCurveColor), transitionProgress);
    let b = lerp(blue(curveColor), blue(targetCurveColor), transitionProgress);
    stroke(r, g, b);
  } else {
    stroke(curveColor);
  }
  
  strokeWeight(3);
  noFill();
  
  beginShape();
  for (let mypoint of points) {
    vertex(mypoint.x, mypoint.y);
  }
  endShape();
  
  pop();
}