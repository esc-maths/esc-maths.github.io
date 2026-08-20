// sketch.js - Pure Scale Affine Transformation

let origin;
let xVec, scaleX, scaleY;

// Timing Configuration
let delayFrames = 240; // 4 seconds initial delay (at 60fps)
let animFrames  = 300; // 5 seconds construction phase (at 60fps)
let holdFrames  = 480; // 8 seconds pause phase at the end
let totalFrames;

function setup() {
  createCanvas(600, 500);
  textFont('Georgia');
  
  totalFrames = delayFrames + animFrames + holdFrames;
  
  // Define coordinate origin on canvas
  origin = createVector(60, height - 60);
  
  // Vector x = (x, y) relative to origin
  xVec = createVector(100, 120);
  
  // Scale factors along x and y directions
  scaleX = 4.5; // Factor 'a' for x
  scaleY = 2.5; // Factor 'd' for y
}

function draw() {
  background(255);
  
  // Frame position within current cycle
  let cycleFrame = frameCount % totalFrames;
  
  // Map progress: 0 during 4s delay, 0->1 during construction, 1 during hold
  let p = constrain((cycleFrame - delayFrames) / animFrames, 0, 1);
  
  // Animation phase progress timing
  let pX  = getSubProgress(p, 0.00, 0.30);
  let pAX = getSubProgress(p, 0.30, 0.55);
  let pDY = getSubProgress(p, 0.55, 0.78);
  let pT  = getSubProgress(p, 0.78, 0.98);

  // 1. Draw Static Axes & Origin (Visible immediately)
  drawAxes();
  
  // Calculated Screen Points
  let sO  = toScreen(0, 0);
  let sX  = toScreen(xVec.x, xVec.y);
  let sAX = toScreen(xVec.x * scaleX, 0);
  let sTx = toScreen(xVec.x * scaleX, xVec.y * scaleY);

  // 2. Animate Position Vector x and components (Gray)
  if (pX > 0) {
    let currX = xVec.x * pX;
    let currY = xVec.y * pX;
    let sCurrX = toScreen(currX, currY);

    // Component x (Horizontal)
    stroke(140);
    strokeWeight(2);
    line(sO.x, sO.y, toScreen(min(currX, xVec.x), 0).x, sO.y);
    if (pX > 0.4) {
      drawLabel("x", toScreen(xVec.x / 2, -22), color(120), 30, true);
    }

    // Component y (Vertical)
    if (pX > 0.5) {
      let yProg = map(pX, 0.5, 1.0, 0, xVec.y, true);
      line(sX.x, sO.y, sX.x, toScreen(xVec.x, yProg).y);
      drawLabel("y", createVector(sX.x + 15, (sO.y + sX.y) / 2), color(120), 30, true);
    }

    // Gray arrow from Origin to x
    drawArrow(sO, sCurrX, color(120), 2.5, 14);

    // Point x
    if (pX >= 0.95) {
      fill(0);
      noStroke();
      circle(sX.x, sX.y, 10);
      drawLabel("x", createVector(sX.x - 10, sX.y - 22), color(0), 32, false, true);
    }
  }

  // 3. Animate Scaled Horizontal Component 'ax'
  if (pAX > 0) {
    let currAX = xVec.x * scaleX * pAX;
    let sCurrAX = toScreen(currAX, 0);
    
    stroke(0);
    strokeWeight(2.5);
    line(sO.x, sO.y, sCurrAX.x, sO.y);
    
    // Endpoint marker tick
    fill(0);
    circle(sCurrAX.x, sO.y, 4);

    if (pAX > 0.5) {
      drawLabel("ax", createVector((sO.x + sAX.x) / 2, sO.y + 24), color(0), 32, true, false);
    }
  }

  // 4. Animate Scaled Vertical Component 'dy'
  if (pDY > 0) {
    let currDY = (xVec.y * scaleY) * pDY;
    let sCurrDY = toScreen(xVec.x * scaleX, currDY);
    
    stroke(0);
    strokeWeight(2.5);
    line(sAX.x, sAX.y, sCurrDY.x, sCurrDY.y);

    if (pDY > 0.5) {
      drawLabel("dy", createVector(sAX.x + 22, (sAX.y + sTx.y) / 2), color(0), 32, true, false);
    }
  }

  // 5. Animate Transformed Vector T(x) from Origin
  if (pT > 0) {
    let currTx = xVec.x * scaleX * pT;
    let currTy = xVec.y * scaleY * pT;
    let sCurrT = toScreen(currTx, currTy);

    // Thick Black Arrow from Origin O to T(x)
    drawArrow(sO, sCurrT, color(0), 4, 14);

    if (pT >= 0.95) {
      fill(0);
      noStroke();
      circle(sTx.x, sTx.y, 10);
      drawLabel("T", createVector(sTx.x - 28, sTx.y - 30), color(0), 34, true);
      drawLabel("(", createVector(sTx.x - 7, sTx.y - 30), color(0), 34, false);
      drawLabel("x", createVector(sTx.x + 10, sTx.y - 30), color(0), 34, false, true);
      drawLabel(")", createVector(sTx.x + 28, sTx.y - 30), color(0), 34, false);
    }
  }
}

// Helper: Convert Cartesian Math Coordinates to Canvas Coordinates
function toScreen(x, y) {
  return createVector(origin.x + x, origin.y - y);
}

// Helper: Smooth sub-progress calculation
function getSubProgress(p, start, end) {
  if (p < start) return 0;
  if (p > end) return 1;
  return (p - start) / (end - start);
}

// Helper: Draw Fully Rendered Static Coordinate Axes
function drawAxes() {
  stroke(0);
  strokeWeight(1.5);
  let xAxisLen = width - origin.x - 20;
  let yAxisLen = origin.y - 20;

  // X Axis
  drawArrow(origin, createVector(origin.x + xAxisLen, origin.y), color(0), 1.5, 8);
  // Y Axis
  drawArrow(origin, createVector(origin.x, origin.y - yAxisLen), color(0), 1.5, 8);
  
  // Origin Label 'O'
  drawLabel("O", createVector(origin.x - 20, origin.y + 20), color(0), 32, true);
}

// Helper: Render Arrow Vector
function drawArrow(p1, p2, col, weight = 2, headSize = 10) {
  let d = dist(p1.x, p1.y, p2.x, p2.y);
  if (d < 2) return;
  
  push();
  stroke(col);
  fill(col);
  strokeWeight(weight);
  line(p1.x, p1.y, p2.x, p2.y);

  let angle = atan2(p2.y - p1.y, p2.x - p1.x);
  translate(p2.x, p2.y);
  rotate(angle);
  noStroke();
  triangle(5, 0, -headSize - 5, -headSize / 2, -headSize - 5, headSize / 2);
  pop();
}

// Helper: Text Labels with Math Styling
function drawLabel(txt, pos, col, size = 20, isItalic = false, isBold = false) {
  push();
  fill(col);
  noStroke();
  textSize(size);
  textAlign(CENTER, CENTER);
  let style = NORMAL;
  if (isItalic && isBold) style = BOLDITALIC;
  else if (isItalic) style = ITALIC;
  else if (isBold) style = BOLD;
  textStyle(style);
  text(txt, pos.x, pos.y);
  pop();
}

// Click canvas to restart animation loop immediately
function mousePressed() {
  frameCount = 0;
}