/*
  Sea creature Step 1
  Juan Carlos Ponce Campuzano
  01/Feb/2026
*/

// Step 1: Basic Grid Setup

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  background(0);

  for (let i = 0; i < 20000; i++) {

    const x = i % 200;
    const y = floor(i / 200);

    // simple recentering
    const k = x - 100;
    const e = y - 50;

    // gentle warp
    const px = width / 2 + k * 2;
    const py = height / 2 + e * 2;

    point(px, py);
  }
}