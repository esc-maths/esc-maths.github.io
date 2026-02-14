/*
  Source code: 
  https://x.com/yuruyurau/status/2021238125285036136
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/

let t = 0;
let i;

function setup() {
  createCanvas(500, 500);
  background(0);
  stroke(255, 100);
}

function draw() {

  // Semi-transparent background for motion trails
  background(0, 70);

  t += PI / 45;

  for (i = 20000; i--;) {
    drawPoint(i / 600, width/2, height/2);
  }
}

// Parametric point generator
function drawPoint(y, CX, CY) {

  // Scaled cosine term (includes conditional)
  let k = cos(y * 5) * (y < 11 ? 21 : 11);

  // Linear offset
  let e = y / 8 - 13;

  // Radial magnitude
  let o = mag(k, e) / 6;

  // Radius modulation
  let q =
    k * 3 +
    49 +
    cos(19 / k) +
    k * cos(y / 2) *
    (1 + sin(o * 4 - e * 2 - t));

  // Angular parameter (depends on global i)
  let c =
    o / 1.5 -
    e / 5 -
    t / 8 +
    (i % 3) * 8;
  
  let s = 1.3;

  // Plot point
  point(
    s * q * sin(c) + CX,
    s * (q * cos(c) - 79 * sin(c / 3)) + CY
  );
}


/*
let t = 0;
let i;

// Parametric point generator
const drawPoint = (y) => {

  // Scaled cosine term (IMPORTANT: includes conditional)
  let k = cos(y * 5) * (y < 11 ? 21 : 11);

  // Linear offset
  let e = y / 8 - 13;

  // Radial magnitude
  let o = mag(k, e) / 6;

  // Radius modulation
  let q =
    k * 3 +
    49 +
    cos(19 / k) +
    k * cos(y / 2) *
    (1 + sin(o * 4 - e * 2 - t));

  // Angular parameter (depends on GLOBAL i)
  let c =
    o / 1.5 -
    e / 5 -
    t / 8 +
    (i % 3) * 8;

  // Plot point
  point(
    q * sin(c) + 250,
    250 + q * cos(c) - 79 * sin(c / 3)
  );
};

draw = () => {

  if (!t) {
    createCanvas(500, 500);
  }

  background(0, 70);
  stroke(255, 100);

  t += PI / 45;

  for (i = 35000; i--;) {
    drawPoint(i / 600);
  }
};
*/
