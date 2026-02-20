/*
  Source code: 
  https://x.com/yuruyurau/status/1969263738193674589
  
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
  stroke(w, 46);

  t += PI / 90;

  for (let i = 0; i < 30000; i++) {
    let y = i / 4000;
    drawPointFunction(i, y);
  }
}

function drawPointFunction(i, y) {

  // --- Core variables ---

  let k = 4 * cos(i / 39) * cos(y + 1);
  let e = y * 4 - 11;

  let d = pow(mag(k, e), 2) / 69;

  // --- Angular modulation ---

  let angleComponent = atan2(k, e) * e;

  let q =
    99
    - 4 * sin(angleComponent)
    + d * 8 * sin(d / 0.8 - t)
    + k * (2 + sin(d * 9 - t * 8));

  let c =
    d / 2
    - t / 8
    + (i % 3);

  // --- Final coordinates (centered on 500px canvas) ---

  let px =
    q * sin(c)
    + w / 2;

  let py =
    q * cos(c + (i % 3) * 9)
    + w / 2;

  point(px, py);
}