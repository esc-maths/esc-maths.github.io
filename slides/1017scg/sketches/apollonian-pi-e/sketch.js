/*
  Inspired by Daniel Shiffman's Coding Challenge 182
  https://thecodingtrain.com/challenges/182-apollonian-gasket
  
  and also by David Crooks's work
  https://openprocessing.org/user/68039?view=sketches&o=13
  
  This version by
  Juan Carlos Ponce Campuzano
  https://www.dynamicmath.xyz/
  15/Mar/2024
  
  References:
  https://arxiv.org/pdf/math/0101066.pdf
  https://mathlesstraveled.com/2016/04/27/apollonian-gaskets/
  https://www.americanscientist.org/article/a-tisket-a-tasket-an-apollonian-gasket
  https://www.jstor.org/stable/2316373
*/

let circles, center, theta, side, circle_1, circle_2, circle_3, initial_decartes, touchPoint, r1, r2, z1, z2;
let randomPosition, randomAngle, randomRadius;
let showText = true;
let georgiaFont; // Variable to hold the loaded font

function preload() {
  georgiaFont = loadFont('STIXTwoText-Italic-VariableFont_wght.ttf');
}

function setup() {
  side = 500;
  
  // Create canvas with transparent background support
  createCanvas(side, side);
  
  r1 = side / 2.1;
  center = new complex(side / 2, side / 2);
  z1 = center;
  touchPoint = center.minus(new complex(r1, 0));
  r2 = (2.0 / 3.0) * r1;
  z2 = touchPoint.add(new complex(r2, 0));
  theta = 0.0;
  randomAngle = random(0, TWO_PI);
  randomRadius = random(0, 100);
  cursor("pointer");
  textFont(georgiaFont);
}

function draw() {
  clear(); // Clear with transparent background
  drawApollonian();
  noLoop();
}

function drawApollonian() {
  randomPosition = new complex(
    randomRadius * cos(randomAngle) + width / 2,
    randomRadius * sin(randomAngle) + height / 2
  );
  
  let relativePosition = randomPosition.minus(touchPoint);
  if (
    relativePosition.modulus() > 100 &&
    randomPosition.minus(z1).modulus() < r1
  ) {
    r2 = (0.5 * relativePosition.modulus()) / cos(relativePosition.arg());
    z2 = touchPoint.add(new complex(r2, 0));
  }
  
  theta = randomPosition.minus(z2).arg();
  
  //curvatures
  let k1 = -1 / r1;
  let k2 = 1 / r2;
  
  // Initial circles
  circle_1 = new Circle(z1.scale(k1), k1);
  circle_2 = new Circle(z2.scale(k2), k2);
  circle_3 = thirdCircle(circle_1, circle_2, theta);
  
  // We've set them up to be touching tangent to the other two
  circle_1.tangentCircles = [circle_2, circle_3];
  circle_2.tangentCircles = [circle_1, circle_3];
  circle_3.tangentCircles = [circle_2, circle_1];
  circle_1.gray = 0;
  circles = [circle_1, circle_2, circle_3];
  
  n = 0;
  while (circles.length < 10000 && n < 20) {
    n++;
    let r_min = 1.0;
    let incompleteCircles = circles.filter(
      (x) =>
        x.tangentCircles.length > 0 && x.tangentCircles.length < 5
    );
    let completion = incompleteCircles.reduce((acc, obj) => {
      return concat(acc, apollonian(obj, r_min));
    }, []);
    circles = concat(circles, completion);
  }
  
  // Clear the screen with transparency
  clear();
  
  // Draw all circles (no background color)
  circles.map((x) => x.show());
  
  if (showText) {
    push();
    // Use semi-transparent background for the text box
    fill(190, 190, 190, 240);
    noStroke();
    rect(width / 2 - 143, 30 - 35, 290, 90, 20);
    fill(0);
    textSize(28);
    text("Click to generate \n new Apollonian gasket!", width / 2, 30);
    pop();
  }
}

function mousePressed() {
  showText = false;
  randomAngle = random(0, TWO_PI);
  randomRadius = random(0, 100);
  redraw();
}

function touchStarted() {
  showText = false;
  randomAngle = random(0, TWO_PI);
  randomRadius = random(0, 100);
  redraw();
}

function thirdCircle(c1, c2, angle) {
  // First guess at z3 and r3
  // As a first guess assume the center
  // of c3 lies on the cirle that is the
  // average of the first two
  // This is true at theta==0
  let r_a = 0.5 * (c1.r + c2.r);
  let z_a = c1.center.add(c2.center).scale(0.5);
  let dz3 = new complex(r_a * cos(angle), r_a * sin(angle));
  let z3 = z_a.add(dz3);
  let r3 = 0.0;
  
  // Iterativly improve our guess of r3,z3
  for (let i = 0; i < 1000; i++) {
    r3 = find_r3(z3, c1.center, c1.r);
    z3 = find_z3(c2.center, c2.r, r3, theta);
  }
  
  // Curvature
  let k3 = 1 / r3;
  return new Circle(z3.scale(k3), k3);
}

function find_z3(z2, r2, r3, theta) {
  let n = new complex(cos(theta), sin(theta));
  return z2.add(n.scale(r2 + r3));
}

function find_r3(z3, z1, r1) {
  let dz = z3.minus(z1);
  return r1 - dz.modulus();
}

function apollonian(c, r_min) {
  // Apply Decartes theorem iterativly
  // to pack circles within a circle.
  // https://en.wikipedia.org/wiki/Apollonian_gasket
  if (c.tangentCircles.length < 2) return [];
  if (c.tangentCircles.length == 2) return decartes(c, c.tangentCircles[0], c.tangentCircles[1]);
  
  c1 = c.tangentCircles[0];
  c2 = c.tangentCircles[1];
  c3 = c.tangentCircles[2];
  
  // Each call to decartes returns a pair of circles.
  // One we already have, so we filter it out.
  // We'll also filter out circles that are too small.
  let c23 = decartes(c, c2, c3).filter((x) => !c1.isEqual(x) && x.r > r_min);
  let c13 = decartes(c, c1, c3).filter((x) => !c2.isEqual(x) && x.r > r_min);
  let c12 = decartes(c, c1, c2).filter((x) => !c3.isEqual(x) && x.r > r_min);
  
  //return c23;
  return concat(c23, concat(c12, c13));
}

function decartes(c1, c2, c3) {
  // Decartes Theorem: Given three tangent
  // circles we can find a fourth and a fifth.
  // https://en.wikipedia.org/wiki/Descartes%27_theorem
  let k_plus = c1.k + c2.k + c3.k + 2 * sqrt(c1.k * c2.k + c3.k * c2.k + c1.k * c3.k);
  let k_minus = c1.k + c2.k + c3.k - 2 * sqrt(c1.k * c2.k + c3.k * c2.k + c1.k * c3.k);
  
  let c12 = c1.z.mult(c2.z);
  let c23 = c2.z.mult(c3.z);
  let c31 = c3.z.mult(c1.z);
  let t1 = c1.z.add(c2.z.add(c3.z));
  let t2 = c12.add(c23.add(c31));
  let t3 = t2.sqrt().scale(2.0);
  
  let z_plus = t1.add(t3);
  let z_minus = t1.minus(t3);
  
  let c_plus = new Circle(z_plus, k_plus);
  let c_minus = new Circle(z_minus, k_minus);
  c_plus.tangentCircles = [c1, c2, c3];
  c_minus.tangentCircles = [c1, c2, c3];
  
  // These now have a full set so we don't care anymore
  c1.tangentCircles = [];
  c2.tangentCircles = [];
  c3.tangentCircles = [];
  
  return [c_plus, c_minus];
}

class Circle {
  constructor(z, k) {
    // k is the curvature.
    // z is the position expressed as a
    // complex number and divided by the curvature.
    // This is a convienient quantity for decartes therom.
    this.k = k;
    this.r = 1 / abs(k);
    this.z = z;
    this.gray = 255;
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    this.tangentCircles = [];
    this.center = z.scale(1.0 / k);
  }
  
  isEqual(c) {
    let tolerance = 2.0;
    let equalR = abs(this.r - c.r) < tolerance;
    let equalX = abs(this.center.x - c.center.x) < tolerance;
    let equalY = abs(this.center.y - c.center.y) < tolerance;
    return equalR && equalX && equalY;
  }
  
  show() {
    // Use fill for white circles with transparency
    fill(255, 255, 255, 255); // Fully opaque white circles
    //noStroke();
    ellipse(this.center.x, this.center.y, 2 * this.r, 2 * this.r);
    
    // Black text inside circles
    fill(100);
    textAlign(CENTER);
    textSize(2 * this.r);
    if (random() < 0.5) {
      text("π", this.center.x - this.r * 0.1, this.center.y + this.r * 0.5);
    } else {
      text("e", this.center.x - this.r * 0.1, this.center.y + this.r * 0.5);
    }
  }
}

class complex {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  add(z) {
    return new complex(this.x + z.x, this.y + z.y);
  }
  
  minus(z) {
    return new complex(this.x - z.x, this.y - z.y);
  }
  
  mult(z) {
    return new complex(
      this.x * z.x - this.y * z.y,
      this.x * z.y + this.y * z.x
    );
  }
  
  scale(s) {
    return new complex(this.x * s, this.y * s);
  }
  
  sq() {
    return this.mult(this);
  }
  
  sqrt() {
    let r = Math.sqrt(this.modulus());
    let arg = this.arg() / 2.0;
    return new complex(r * cos(arg), r * sin(arg));
  }
  
  modulus() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  arg() {
    return atan2(this.y, this.x);
  }
}

// Add this function to save the canvas with transparent background
function keyPressed() {
  if (key === 's' || key === 'S') {
    // Save the canvas as a PNG with transparent background
    saveCanvas('apollonian-gasket', 'png');
  }
}