/*
  Source code: 
  https://x.com/yuruyurau/status/1999900774143607224
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/


let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
  stroke(255);
}

function draw() {
  background(0, 80);

  // Time increment
  t += PI / 30;

  // Draw 30,000 points
  for (let i = 25000; i > 0; i--) {
    drawPoint(i);
  }
}

function drawPoint(i) {

  // Oscillatory horizontal component
  let k =
    5 *
    cos(i / 49) *
    cos(i / 3690);

  // Vertical drift term
  let e =
    i / 984 - 12;

  // Radial magnitude scaling
  let d =
    pow(mag(k, e), 2) / 99 + 1;

  // Stroke modulation
  stroke(w, 50 + 2 / cos(t + e));

  // Angular component (3-fold symmetry)
  let c =
    d
    - t / 18
    + (i % 3) * 4;

  // Final coordinates
  let s = 1.5;
  let x =
    s * ( k * (4 + sin(d * 18 - t * 2 + (i % 3) * 2))
    - 5 * sin(atan2(k, e) * 9)
    + 30 * sin(c) )
    + width / 2;

  let y =
    s * ( 80 * sin(c - d)
    + d * 79 ) + height / 2 * 0.05;

  point(x, y);
}

