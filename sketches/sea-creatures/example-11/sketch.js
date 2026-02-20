/*
  Source code: 
  https://x.com/yuruyurau/status/1933629116575855091
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/
let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
  stroke(255, 98);
}

function draw() {
  background(0, 70);

  // Slow time evolution
  t += PI / 240;

  // Draw 10,000 points
  for (let i = 10000; i > 0; i--) {
    drawPoint(i, i / 235);
  }
}

function drawPoint(x, y) {

  // Oscillatory horizontal component
  let k =
    (4 + sin(y * 2 - t) * 1.5) *
    cos(x / 28);

  // Vertical drift
  let e =
    y / 8 - 13;

  // Radial magnitude
  let d =
    mag(k, e);

  // Radial expression
  let q =
    3 * sin(k * 2)
    + 0.3 / k
    + sin(y / 30) * k *
      (9 + 4 * sin(e * 5 - d * 3 + t * 2));

  // Angular coordinate
  let c =
    d - t;

  // Final coordinates
  let s = 1.5;
  let xPos =
    s * ( q + 30 * cos(c) )
    + width / 2;

  let yPos =
    s * ( q * sin(c) + d * 39 )
    - height / 2 * 1.4;

  point(xPos, yPos);
}

