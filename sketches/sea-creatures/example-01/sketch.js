/*
  Original code by yuruyurau
  https://x.com/yuruyurau/status/2005652330612736419
  This version by
  Juan Carlos Ponce Campuzano
  01/Feb/2026
*/


let time = 0;

function drawPoint(i) {

  // Split behaviour depending on index
  const k =
    i < 20000
      ? sin(i / 9) * 9
      : 4 * cos(i / 49) * cos(i / 3690);

  // Vertical parameter
  const e = i / 984 - 12;

  // Radial magnitude (squared and scaled)
  const d =
    pow(mag(k, e), 2) / 99 + 1;

  // Angular distortion
  const angle = atan2(k, e);

  // Intermediate horizontal displacement
  const q =
    k * (4 + sin(d * 16 - time + k)) -
    5 * sin(angle * 9);

  // Phase controlling oscillations
  const c =
    d * 1.1 -
    time / 18 +
    (i % 2) * 3;

  // Final coordinates
  const x =
    q +
    70 * sin(c) +
    width / 2;

  const y =
    (q + 40) * sin(c - d) +
    d * 79 + height / 2 * 0.1;

  // Draw point
  point(x, y);
}

function draw() {

  // Initialise canvas once
  if (!time) {
    createCanvas(500, 500);
  }

  background(0, 80);
  stroke(255, 50);

  // Advance time
  time += PI / 30;

  // Draw many points
  for (let i = 0; i < 33000; i++) {
    drawPoint(i);
  }
}