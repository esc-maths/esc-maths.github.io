/*
  Source code: 
  https://x.com/yuruyurau/status/1883073486417179116
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/

let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
}

function draw() {
  background(6);
  stroke(w, 46);

  t += PI / 90;

  for (let i = 0; i < 20000; i++) {
    let x = i % 100;
    let y = i / 100;
    drawPointFunction(x, y);
  }
}

function drawPointFunction(x, y) {

  // --- Intermediate variables (cleaned up for readability) ---

  let k = x / 4 - 12.5;
  let e = y / 9 + 5;

  let o = mag(k, e) / 9;

  let q =
    x +
    99 +
    tan(1 / k) +
    o * k *
    (cos(e * 9) / 4 + cos(y / 2)) *
    sin(o * 4 - t);

  let c = o * e / 30 - t / 8;

  // --- Final coordinates ---

  let px =
    q * 0.7 * sin(c) +
    9 * cos(y / 19 + t) +
    250;

  let py =
    250 +
    (q / 2) * cos(c);

  point(px, py);
}