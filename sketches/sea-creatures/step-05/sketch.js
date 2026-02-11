/*
  Juan Carlos Ponce Campuzano
  02/Feb/2026
*/

// Step 5: Final Complex Pattern

let t = 0;

function setup() {
  createCanvas(500, 500);
  pixelDensity(2);
  background(0);
  stroke(255, 80);
}

function draw() {
  background(0, 60);

  t += 0.05;

  for (let i = 0; i < 40000; i++) {
    // High density grid with different modulo division
    const x = i / 4 % 100;
    const y = floor(i / 150);

    // Recenter with scaling
    const k = x / 4 - 12.5;
    const e = y / 9 - 9;

    // Polar coordinate calculations
    const o = mag(k, e) / 9;
    const c = o * e / 30 - t / 8;

    // Complex displacement function
    const q =
      x +
      cos(9 / (k + 1e-6)) +  // Avoid division by zero
      o * k *
      sin(4 * o - t);

    // Final position with multiple transformations
    const px = 0.9 * q * sin(c) + width / 2;
    const py =
      height / 2 +
      (y / 3.6) * cos(3 * c - t / 2) -
      (q / 2) * cos(c);

    point(px, py);
  }
}
