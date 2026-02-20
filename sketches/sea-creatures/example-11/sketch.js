/*
  Source code: 
  https://x.com/yuruyurau/status/2024809725230297325
  
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

  t += PI / 45;

  for (let i = 0; i < 20000; i++) {
    drawPointFunction(i);
  }
}

function drawPointFunction(i) {

  // --- Core variables ---

  let k = 9 * cos(i / 61);
  let e = i / 792 - 12;

  let d = pow(mag(k, e), 2) / 79 + 1;

  // --- Oscillatory inner structure ---

  let innerOsc =
    8 +
    4 * sin(
      sin(d * d + e / 8 - t)
    );

  let q =
    79 -
    e * sin(k) +
    (k / d) * innerOsc;

  let c =
    d / 2 -
    cos(d * 2) / 9 +
    cos(t - d * 2) / 9 -
    t / 16 +
    (i % 2) * 3;

  // --- Final coordinates ---

  let px =
    q * sin(c) +
    250;

  let py =
    (q + 40) * cos(c) +
    250;

  point(px, py);
}