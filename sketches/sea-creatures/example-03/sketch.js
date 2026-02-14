/*
  Original idea by yuruyurau
  https://x.com/yuruyurau
  This version by
  Juan Carlos Ponce Campuzano
  01/Feb/2026
*/

let t = 0;

function drawPoint(x, y, cX, cY) {

  // Core parameters
  const k = x / 4 - 12.5;
  const e = y / 9;

  // Radial magnitude
  const o = mag(k, e) / 9;

  // Phase (o * e coupling)
  const c = (o * e) / 30 - t / 8;

  // Small epsilon to avoid division by zero
  const eps = 1e-6;

  // Distorted horizontal component
  const q =
    x +
    130 +
    cos(9 / (k + eps)) +
    o * k *
      (
        cos(8 * e) / 3 +
        cos(y) / 0.7
      ) *
      sin(4 * o - t);

  // Final screen coordinates
  const px =
    0.8 * q * sin(c) + cX;

  const py =
    (y / 4) * cos(4 * c - t / 2) -
    (q / 2) * cos(c) + cY;

  point(px, py);
}

function draw() {

  // Initialise canvas once
  if (!t) {
    createCanvas(500, 500);
    pixelDensity(2);
  }

  background(0, 100); // trails
  stroke(255, 100);

  // Time evolution
  t += PI / 60;
  
  const cX = width / 2;
  const cY = height / 2;

  // Draw the structure
  for (let i = 0; i < 30000; i++) {
    const x = (i / 3) % 100;
    const y = i / 150;
    drawPoint(x, y, cX, cY);
  }
}