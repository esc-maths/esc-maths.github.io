let x = 0, y = 0;

function nextPoint() {
  let nextX, nextY, r = random();
  // Apply affine transforms base on probability distribution
  if (r < 0.01) {
    nextX = 0;
    nextY = 0.16 * y;
  } else if (r < 0.86) {
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    nextX = 0.2 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }
  x = nextX;
  y = nextY;
}

function setup() {
  createCanvas(200, 350);
  background(255);
  strokeWeight(2); // Point size
}

let maxValue = 20; // Change this number to speed up iterations
function draw() {
  for (let i = 0; i < maxValue; i++) {
    drawPoint();
    nextPoint();
  }
}

// Auxiliary function
function drawPoint() {
  // Range: -2.1820 < x < 2.6558 and 0 < y < 9.9983.
  let px = map(x, -2.182, 2.6558, 5, width - 5);
  let py = map(y, 0, 9.9983, height, 5);
  point(px, py);
}