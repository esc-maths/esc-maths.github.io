/*
  Original code by yuruyurau
  https://x.com/yuruyurau/status/1972324657572491526
  This version by
  Juan Carlos Ponce Campuzano
  01/Feb/2026
*/


let time = 0;

function drawPoint(x, y, index) {

  // Normalised auxiliary variables
  const k = x / 4 - 12.5;
  const e = y / 9 + 9;

  // Magnitude-based oscillation
  const o = mag(k, e) / 9;

  // Intermediate x-offset
  const q =
    x +
    39 +
    y +
    1 / k +
    o * k * (cos(y) / 4 + cos(e)) * sin(o * 4 - time);

  // Phase used by trig functions
  const c =
    o +
    e / 99 -
    time / 8 +
    (index % 2) * 3;

  // Final screen coordinates
  const px =
    q * 1.1 * sin(c) + 250;

  const py =
    1.3 * ( (y / 2) * cos(c * 4 - o) - (q / 2) * cos(c) ) 
    + 250;

  // Draw the point
  
  point(px, py);
}

function draw() {

  // Initialise canvas once
  if (!time) {
    createCanvas(500, 500);
  }

  background(0, 70);
  stroke(255, 50);

  // Advance time
  time += PI / 60;

  // Draw many points
  for (let i = 0; i < 35000; i++) {
    const x = (i / 2) % 100;
    const y = i / 350;
    drawPoint(x, y, i);
  }
}
