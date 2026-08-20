// sketch.js - Pure Rotation Affine Transformation

let origin;
let radius, startAngle, rotAngle, endAngle;

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
  origin = createVector(80, height - 70);
  
  // Vector properties
  radius = 360;
  startAngle = radians(14); // Angle of x relative to horizontal
  rotAngle   = radians(42); // Rotation angle theta
  endAngle   = startAngle + rotAngle;
}

function draw() {
  background(255);
  
  // Frame position within current cycle
  let cycleFrame = frameCount % totalFrames;
  
  // Map progress: 0 during 4s delay, 0->1 during construction, 1 during hold
  let p = constrain((cycleFrame - delayFrames) / animFrames, 0, 1);
  
  // Animation phase progress timing
  let pX   = getSubProgress(p, 0.00, 0.30);
  let pArc = getSubProgress(p, 0.30, 0.65);
  let pT   = getSubProgress(p, 0.65, 0.98);

  // 1. Draw Static Axes & Origin (Visible immediately)
  drawAxes();
  
  // Calculated Points in Cartesian Math Coordinates
  let xVec = createVector(radius * cos(startAngle), radius * sin(startAngle));
  let tVec = createVector(radius * cos(endAngle), radius * sin(endAngle));
  
  let sO  = toScreen(0, 0);
  let sX  = toScreen(xVec.x, xVec.y);
  let sTx = toScreen(tVec.x, tVec.y);

  // 2. Animate Position Vector x (Gray)
  if (pX > 0) {
    let currX = xVec.x * pX;
    let currY = xVec.y * pX;
    let sCurrX = toScreen(currX, currY);

    // Gray arrow from Origin to x
    drawArrow(sO, sCurrX, color(120), 2.5, 10);

    // Point x
    if (pX >= 0.95) {
      fill(0);
      noStroke();
      circle(sX.x, sX.y, 14);
      // Increased label size by +10px (now 32px)
      drawLabel("x", createVector(sX.x + 22, sX.y - 18), color(0), 32, false, true);
    }
  }

  // 3. Animate Dashed Arc Trajectory & Angle theta Arc
  if (pArc > 0) {
    let currRot = startAngle + rotAngle * pArc;

    // Draw Dashed Trajectory Arc from x towards T(x)
    stroke(0);
    strokeWeight(2);
    drawDashedArc(sO, radius, startAngle, currRot);

    // Draw Angle Arc (theta)
    let thetaRadius = 100;
    stroke(0);
    strokeWeight(1.8);
    noFill();
    
    // Convert math angles to canvas angles (p5 arc angles run clockwise with Y down)
    let arcStart = -startAngle;
    let arcCurr = -currRot;
    arc(sO.x, sO.y, thetaRadius * 2, thetaRadius * 2, arcCurr, arcStart);

    // Arrowhead on angle arc
    let arrowAnglePos = toScreen(thetaRadius * cos(currRot), thetaRadius * sin(currRot));
    let tangentAngle = currRot + HALF_PI;
    drawMiniHead(arrowAnglePos, tangentAngle, 8);

    // Theta Label (Increased size by +10px -> 30px)
    if (pArc > 0.4) {
      let midAngle = startAngle + (rotAngle * pArc) / 2;
      let labelPos = toScreen((thetaRadius + 28) * cos(midAngle), (thetaRadius + 28) * sin(midAngle));
      drawLabel("θ", labelPos, color(0), 30, true);
    }
  }

  // 4. Animate Transformed Vector T(x)
  if (pT > 0) {
    let currTx = tVec.x * pT;
    let currTy = tVec.y * pT;
    let sCurrT = toScreen(currTx, currTy);

    // Thick Black Arrow from Origin to T(x)
    drawArrow(sO, sCurrT, color(0), 4, 14);

    if (pT >= 0.95) {
      fill(0);
      noStroke();
      circle(sTx.x, sTx.y, 14);
      // Increased label size by +10px (now 34px)
      //drawLabel("T(x)", createVector(sTx.x + 40, sTx.y - 15), color(0), 34, true, true);
      // drawLabel("T", createVector(sTx.x + 0, sTx.y - 20), color(0), 34, true);
      // drawLabel("(", createVector(sTx.x + 24, sTx.y - 20), color(0), 34, false);
      // drawLabel("x", createVector(sTx.x + 40, sTx.y - 20), color(0), 34, false, true);
      // drawLabel(")", createVector(sTx.x + 58, sTx.y - 20), color(0), 34, false);
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
  
  // Origin Label 'O' (Increased size by +10px -> 32px)
  drawLabel("O", createVector(origin.x - 22, origin.y + 22), color(0), 32, true);
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
  triangle(0, 0, -headSize, -headSize / 2, -headSize, headSize / 2);
  pop();
}

// Helper: Draw Dashed Arc Trajectory
function drawDashedArc(center, r, a1, a2, dashLen = 7, gapLen = 5) {
  let totalAngle = a2 - a1;
  let arcLength = r * totalAngle;
  let numSteps = floor(arcLength / (dashLen + gapLen));
  let stepAngle = (dashLen + gapLen) / r;
  let dashAngle = dashLen / r;

  for (let i = 0; i < numSteps; i++) {
    let startA = a1 + i * stepAngle;
    let endA   = min(startA + dashAngle, a2);
    
    let pStart = toScreen(r * cos(startA), r * sin(startA));
    let pEnd   = toScreen(r * cos(endA), r * sin(endA));
    line(pStart.x, pStart.y, pEnd.x, pEnd.y);
  }
}

// Helper: Draw Arrowhead for Angle Arc
function drawMiniHead(pos, angleRad, size) {
  push();
  translate(pos.x, pos.y);
  rotate(-angleRad);
  fill(0);
  noStroke();
  triangle(0, 0, -size, -size / 2, -size, size / 2);
  pop();
}

// Helper: Text Labels with Math Styling
function drawLabel(txt, pos, col, size = 30, isItalic = false, isBold = false) {
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