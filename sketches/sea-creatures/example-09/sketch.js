/*
  Source code: 
  https://x.com/yuruyurau/status/2022990999358988663
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/
let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
  stroke(255, 90)
}

function draw() {
  background(0, 90);

  // Time increment
  t += PI / 50;

  // Draw 20,000 points
  for (let i = 20000; i > 0; i--) {
    drawPoint(i / 500, i);
  }
}

function drawPoint(y, i) {

  // Core horizontal oscillation
  let k =
    cos(y * 5) *
    (y < 9 ? 21 : 12);

  // Vertical shift
  let e =
    y / 8 - 13;

  // Polar magnitude scaling
  let o =
    mag(k, e) / 6;

  // Radial expression
  let q =
    k * 2
    + 49
    + cos(y) / k
    + k * cos(y / 2) *
      (1 + sin(o * 4 - e / 2 - t));

  // Angular coordinate (2-fold symmetry)
  let c =
    o / 1.5
    - e / 5
    - t / 8
    + (i % 2) * 3;

  // Final coordinates
  let s = 1.4;
  let x =
    s * q * sin(c)
    + width / 2;

  let yPos =
    s * ( q * cos(c)
    - 79 * sin(c / 4) ) 
    + height / 2;

  

  point( x,yPos);
}

