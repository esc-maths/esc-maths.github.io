let v1 = { x: 1, y: 2, z: 4 };
let v2 = { x: 2, y: 1, z: 3 };
let v3 = { x: 0, y: 0, z: 1 };

let scale = 60;

// Coefficient range
let minCoeff = -7;
let maxCoeff = 7;
let step = 1;

// Store previous vectors
let traces = [];

let a = minCoeff;
let b = minCoeff;
let c = minCoeff;

let timer = 0;
let delay = 2;

let animating = false;
let spanButton;

// Rotation around Z-axis variables
let zAngle = 0.5;
let rotatingZ = false;
let rotateZButton;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Span button
  spanButton = createButton("Span");
  spanButton.style("font-size", "16px");
  spanButton.style("padding", "6px 18px");
  spanButton.style("cursor", "pointer");
  spanButton.position(width/2 - 90, height - 70);
  spanButton.mousePressed(toggleAnimation);

  // Rotate Z button
  rotateZButton = createButton("Rotate Z");
  rotateZButton.style("font-size", "16px");
  rotateZButton.style("padding", "6px 18px");
  rotateZButton.style("cursor", "pointer");
  rotateZButton.position(width/2 + 10, height - 70);
  rotateZButton.mousePressed(toggleZRotation);
}

function draw() {
  background(250);

  // Enable interactive 3D rotation with mouse
  orbitControl();

  // Increment Z angle if rotation is active
  if (rotatingZ) {
    zAngle += 0.002;
  }

  // Camera orientation
  rotateX(PI / 2 - 0.3);
  rotateY(0);
  rotateZ(zAngle);

  drawGrid();
  drawAxes();

  // Previous vector traces
  for (let v of traces) {
    drawTrace(v.x, v.y, v.z);
  }

  // Current linear combination
  let x = a * v1.x + b * v2.x + c * v3.x;
  let y = a * v1.y + b * v2.y + c * v3.y;
  let z = a * v1.z + b * v2.z + c * v3.z;

  drawCombination(x, y, z, a, b, c);

  // Original spanning vectors
  drawVector(v1, color(220,22,10));
  drawVector(v2, color(21,113,23));
  drawVector(v3, color(20,20,153));

  // ==================================================
  // Animation
  // ==================================================

  if (animating) {
    timer++;

    if (timer > delay) {
      timer = 0;

      // Save current vector
      traces.push({ x: x, y: y, z: z });

      // Iterate through 3D coefficient space
      a += step;

      if (a > maxCoeff) {
        a = minCoeff;
        b += step;
      }

      if (b > maxCoeff) {
        b = minCoeff;
        c += step;
      }

      // Finished entire span
      if (c > maxCoeff) {
        animating = false;
        spanButton.html("Span");

        a = minCoeff;
        b = minCoeff;
        c = minCoeff;
      }
    }
  }
}

// ==================================================
// Span Toggle
// ==================================================

function toggleAnimation() {
  animating = !animating;

  if (animating) {
    spanButton.html("Stop");
  } else {
    spanButton.html("Span");
  }
}

// ==================================================
// Z Rotation Toggle
// ==================================================

function toggleZRotation() {
  rotatingZ = !rotatingZ;

  if (rotatingZ) {
    rotateZButton.html("Stop Z");
  } else {
    rotateZButton.html("Rotate Z");
  }
}

// ==================================================
// Coordinate axes
// ==================================================

function drawAxes() {
  strokeWeight(1);
  let len = 360;

  // X-axis (Red)
  stroke(200, 50, 50);
  line(-len, 0, 0, len, 0, 0);

  // Y-axis (Green)
  stroke(50, 180, 50);
  line(0, -len, 0, 0, len, 0);

  // Z-axis (Blue)
  stroke(50, 50, 200);
  line(0, 0, -len, 0, 0, len);
}

// ==================================================
// Grid
// ==================================================

function drawGrid() {
  stroke(190);
  strokeWeight(0.5);
  let extent = 6;

  for (let i = -extent; i <= extent; i++) {
    line(i * scale, -extent * scale, 0, i * scale, extent * scale, 0);
    line(-extent * scale, i * scale, 0, extent * scale, i * scale, 0);
  }
}

// ==================================================
// Original vectors
// ==================================================

function drawVector(v, col) {
  let px = v.x * scale;
  let py = -v.y * scale; // Invert Y for screen space
  let pz = v.z * scale;

  stroke(col);
  strokeWeight(7);
  line(0, 0, 0, px, py, pz);

  drawArrowHead3D(px, py, pz, col, 22);
}

// ==================================================
// Trace
// ==================================================

function drawTrace(x, y, z) {
  let px = x * scale;
  let py = -y * scale;
  let pz = z * scale;

  stroke(100, 170);
  strokeWeight(1);
  line(0, 0, 0, px, py, pz);

  push();
  translate(px, py, pz);
  fill(130, 120);
  noStroke();
  sphere(3);
  pop();
}

// ==================================================
// Current vector
// ==================================================

function drawCombination(x, y, z, ca, cb, cc) {
  let px = x * scale;
  let py = -y * scale;
  let pz = z * scale;

  let col = color(150, 0, 0);

  stroke(col);
  strokeWeight(3);
  line(0, 0, 0, px, py, pz);

  drawArrowHead3D(px, py, pz, col, 20);
}

// ==================================================
// 3D Cone Arrowhead Helper
// ==================================================

function drawArrowHead3D(px, py, pz, col, size) {
  let len = dist(0, 0, 0, px, py, pz);
  if (len === 0) return;

  push();
  translate(px, py, pz);

  // Align cone direction with vector (px, py, pz)
  let theta = atan2(px, pz);
  let phi = acos(py / len);

  rotateY(theta);
  rotateX(phi);

  fill(col);
  noStroke();

  // Cone dimensions: cone(radius, height)
  cone(size * 0.35, size);
  pop();
}