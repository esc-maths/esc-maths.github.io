/*
  Source code: 
  https://x.com/yuruyurau/status/2022524457508835641
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/

/**
 * A restructured and readable version of the original 
 * compressed "code golf" sketch.
 */

let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
  stroke(w, 96);
}

function draw() {
  background(0, 50);

  // Time increment (faster than previous sketch)
  t += PI / 65;

  // Draw 20,000 points
  for (let i = 25000; i > 0; i--) {
    drawPoint(i / 500, i);
  }
}

function drawPoint(y, i) {

  // Oscillation term (different threshold and timing)
  let k = cos(y * 9) * (
    y < 5
      ? sin(t / 8 + y) * 35
      : 11
  );

  // Vertical shift term
  let e = y / 8 - 13;

  // Polar magnitude scaling
  let o = mag(k, e) / 6;

  // Angular coordinate (4-phase symmetry)
  let c =
    o / 3
    - e / 5
    - t / 8
    + (i % 4) * 8;

  // Radial expression
  let q =
    k * y / 19
    + 49
    + k * sin(y) * sin(o * 2 - e / 5 - t);

  // Final coordinates
  const s = 1.3;
  let x =
    s * ( q * sin(c) - 79 * cos(c / 3) )
    + width / 2;

  let yPos =
    s * ( (q + 70) * cos(c) )
    + height / 2;

  point(x, yPos);
}
