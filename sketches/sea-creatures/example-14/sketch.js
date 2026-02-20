/*
  Source code: 
  https://x.com/yuruyurau/status/1949120251335241902
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/
let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(9);
  stroke(w, 96);

  t += PI / 120;

  for (let i = 0; i < 10000; i++) {
    let x = i;
    let y = i / 235;
    drawPointFunction(x, y);
  }
}

function drawPointFunction(x, y) {

  // --- Core structure ---

  let k =
    (4 + cos(x / 9 - t)) *
    cos(x / 30);

  let e =
    y / 7 - 13;

  let d =
    mag(k, e) +
    sin(y / 99 + t / 2) -
    4;

  // --- Inner oscillatory term ---

  let innerOsc =
    9 +
    2 * sin(
      cos(e) * 9 -
      d * 4 +
      t
    );

  let q =
    3 * sin(k * 2) +
    sin(y / 29) *
    k *
    innerOsc;

  let c =
    d - t;

  // --- Final coordinates ---

  let s = 1.3;
  let px =
    s * (q + 40 * cos(c) )  
    + 250;

  let py =
    s * (q * sin(c) +
    d * 35);

  point(px, py);
}