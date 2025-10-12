/* 
 Title: Icosahedron with lower frequencies
 Author: Juan Carlos Ponce Campuzano
 Website: https://jcponce.github.io/
 Date: 12-Oct-2025
 License: Creative Commons Attribution-NonCommercial 4.0 International License
 http://creativecommons.org/licenses/by-nc/4.0/

*/

//===========================
// Globals
//===========================
let x = [];
let fourierX;
let time = 0;
let path = [];
let sliderTerms;
let sel;
let showEpicycles = true;
let scl;

//===========================
// p5.js Setup
//===========================
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(47);

  setupScale();
  computeFourier();

  setupUI();
  // console.log('Fourier coefficients:', fourierX.length);
}

//===========================
// p5.js Draw
//===========================
function draw() {
  background(255);
  translate(width / 2 - 70, height / 2);

  if (showEpicycles) {
    drawEpicycles();
  } else {
    drawApproximation();
  }

  // Update time
  time += 0.006; // or use TWO_PI / fourierX.length
}

//===========================
// Setup Helpers
//===========================
function setupScale() {
  scl = (windowWidth < 1400 ? 0.05 : 0.04) * width;
}

function computeFourier() {
  const skip = 1;
  const size = 1;

  x = [];
  for (let i = 0; i < densified.length; i += skip) {
    x.push(new Complex(scl * densified[i].x * size, -scl * densified[i].y * size));
  }

  const isEven = densified.length % 2 === 0;
  fourierX = isEven ? dftEven(x) : dftOdd(x);
  fourierX.sort((a, b) => b.amp - a.amp);
}

function setupUI() {
  sel = createSelect();
  sel.position(10, 10);
  sel.style('font-size:16px');
  sel.option('Epicycles');
  sel.option('Approx. Curve');
  sel.changed(handleModeChange);

  sliderTerms = createSlider(3, fourierX.length, 1000, 1);
  sliderTerms.style('width', '400px');
  sliderTerms.position(windowWidth / 2 - 200, windowHeight - 70);
  sliderTerms.input(clearPath); // smoother than .changed()
}

//===========================
// Drawing Functions
//===========================
function drawEpicycles() {
  strokeJoin(ROUND);
  const v = epicycles(0, 0, fourierX, sliderTerms.value(), time);

  if (time <= TWO_PI + PI / 10) path.unshift(v);

  noFill();
  strokeWeight(5);
  beginShape();
  path.forEach(p => vertex(p.x, p.y));
  endShape();

  drawLabel(`${sliderTerms.value()} epicycles`);
}

function drawApproximation() {
  stroke(0);
  strokeWeight(5);
  strokeJoin(ROUND);
  noFill();

  beginShape();
  for (let k = 0; k < 360; k += 0.5) {
    const v = fourierSeries(fourierX, radians(k), sliderTerms.value());
    vertex(v.x, v.y);
  }
  endShape(CLOSE);

  drawLabel(`Parametric curve with n = ${sliderTerms.value()} terms`);
}

function drawLabel(txt) {
  push();
  resetMatrix();
  textAlign(CENTER);
  textSize(17);
  strokeWeight(1);
  stroke(0);
  fill(0);
  text(txt, windowWidth / 2, 30);
  pop();
}

//===========================
// Interaction Functions
//===========================
function handleModeChange() {
  showEpicycles = sel.value() === 'Epicycles';
  clearPath();
  time = 0;
}

function clearPath() {
  path = [];
  time = 0;
}

//===========================
// Core Math Visualization
//===========================
function epicycles(x, y, fourier, terms, t) {
  for (let i = 0; i < terms; i++) {
    const { freq, amp: radius, phase } = fourier[i];
    const prevx = x;
    const prevy = y;

    x += radius * cos(freq * t + phase);
    y += radius * sin(freq * t + phase);

    // Draw circles and arms
    stroke(0, 0, 255);
    strokeWeight(1.5);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    stroke(20);
    strokeWeight(2);
    line(prevx, prevy, x, y);
  }

  return createVector(x, y);
}

//===========================
// Responsive
//===========================
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupScale();
  sliderTerms.position(windowWidth / 2 - 200, windowHeight - 70);
}
