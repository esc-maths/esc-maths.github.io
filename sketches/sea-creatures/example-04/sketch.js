/*
  Source code: 
  https://x.com/yuruyurau/status/2020509112010936361
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/

let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
  stroke(w, 96);
}

function draw() {
  background(0, 70);

  // Time evolution
  t += PI / 65;

  // Draw 20,000 points
  for (let i = 20000; i > 0; i--) {
    drawPoint(i / 99, i);
  }
}

function drawPoint(y, i) {

  // Base oscillation
  let k = 8 * cos(y);

  // Vertical offset field
  let e = y / 8 - 12;

  // Strong nonlinear radial distortion
  let d =
    pow(mag(k, e), 3) / 999
    + 1;

  // Radial quantity
  let q =
    79
    - e * sin(k)
    + (k / d) *
      (
        8
        + 4 * sin(
            d * d
            - t
            + cos(e + t / 2)
          )
      );

  // Angular coordinate (2-phase symmetry)
  let c =
    d / 2
    + (e / 99) * sin(t + d)
    - t / 8
    + (i % 2) * 3;

  // Final Cartesian coordinates
  const s = 1.15;
  let x =
    s * q * sin(c)
    + width / 2;

  let yPos =
    s * (q + 40) * cos(c)
    + height / 2;

  point(x, yPos);
}

