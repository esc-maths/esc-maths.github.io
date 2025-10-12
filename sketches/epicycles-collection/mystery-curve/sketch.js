let t = 0;
let dt = 0.005;
let trace = [];
let maxTrace = 1000;

let terms = [];
let scaleFactor = 150; // 👈 controls the overall size of epicycles

function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  complexSetup();
}

function complexSetup() {
  // Define coefficients and frequencies
  terms = [
    { C: new Complex(1, 0), omega: 1 },
    { C: new Complex(0.5, 0), omega: 6 },
    { C: new Complex(0, 1 / 3), omega: -14 },
  ];
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let pos = new Complex(0, 0);

  // Draw the system of epicycles
  for (let k = 0; k < terms.length; k++) {
    let term = terms[k];
    let prev = pos.copy();
    let e = Complex.exp(new Complex(0, term.omega * t));
    let contribution = Complex.mult(term.C, e);
    pos.add(contribution);

    // Scale everything for visibility
    let radius = contribution.abs() * scaleFactor;

    stroke(120, 150);
    noFill();
    ellipse(prev.re * scaleFactor, -prev.im * scaleFactor, 2 * radius, 2 * radius);

    stroke(255);
    line(prev.re * scaleFactor, -prev.im * scaleFactor, pos.re * scaleFactor, -pos.im * scaleFactor);
  }

  // Draw the trace of the endpoint
  let endpoint = createVector(pos.re * scaleFactor, -pos.im * scaleFactor);
  trace.push(endpoint);
  if (trace.length > maxTrace) trace.shift();

  stroke(0, 255, 255);
  noFill();
  beginShape();
  for (let v of trace) vertex(v.x, v.y);
  endShape();

  // Draw current endpoint
  fill(255, 0, 0);
  noStroke();
  ellipse(endpoint.x, endpoint.y, 6);

  t += dt;
}

// ======== Complex Number Utilities ========
class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  copy() {
    return new Complex(this.re, this.im);
  }

  add(c) {
    this.re += c.re;
    this.im += c.im;
  }

  abs() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
  }

  static exp(c) {
    let e = Math.exp(c.re);
    return new Complex(e * Math.cos(c.im), e * Math.sin(c.im));
  }

  static mult(a, b) {
    return new Complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
  }
}
