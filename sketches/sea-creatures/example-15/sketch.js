/*
  yuruyurau styke
  
  This version by Juan Carlos Ponce Campuzano
  21/Feb/2026

*/
let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(0, 90);
  stroke(255, 46);

  t += PI / 100;

  for (let i = 0; i < 30000; i++) {
    let y = i / 5000;
    drawPointFunction(i, y);
  }
}

function drawPointFunction(i, y) {

  // --- Core variables ---

  let k = 4 * cos(i / 39) * cos(y + 1);
  let e = y * 4 - 11;

  let d = pow(mag(k, e), 2) / 99;

  // --- Angular modulation ---

  let angleComponent = atan2(k, e) * e;

  let q =
    109
    - 1 * sin(angleComponent)
    + d * 8 * sin(d / 0.8 - t)
    + k * (2 + sin(d * 9 - t * 8));

  let c =
    d / 2
    - t / 8
    + (i % 2);

  // --- Final coordinates (centered on 500px canvas) ---

  let s = 1.4;
  let px =
    s * (q * sin(c + (i % 3) * 90))
    + w / 2;

  let py =
    s * ( q * cos(c + (i % 3) * 90) )
    + w / 2;

  point(px, py);
}