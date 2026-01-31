let pendulums = [];
const g = 200; // gravity (scaled for visuals)
const dt = 0.02; // Euler time step

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Create many double pendulums
  for (let i = 0; i < 30; i++) {
    pendulums.push(
      new DoublePendulum(
        width / 2,
        height / 4,
        120,
        120,
        1,
        1,
        PI / 2 + i * 0.001, // tiny variation → chaos
        PI / 2,
        i
      )
    );
  }
}

function draw() {
  background(0);

  for (let p of pendulums) {
    p.update();
    p.display();
  }
}

class DoublePendulum {
  constructor(x0, y0, L1, L2, m1, m2, t1, t2, index) {
    this.origin = createVector(x0, y0);

    this.L1 = L1;
    this.L2 = L2;
    this.m1 = m1;
    this.m2 = m2;

    this.t1 = t1;
    this.t2 = t2;

    this.w1 = 0;
    this.w2 = 0;

    // Unique color per pendulum
    colorMode(HSB, 360, 100, 100, 100);
    this.col = color((index * 12) % 360, 80, 100, 100);
    colorMode(RGB, 255);
  }

  update() {
    const { L1, L2, m1, m2, t1, t2, w1, w2 } = this;

    const num1 =
      -g * (2 * m1 + m2) * sin(t1) -
      m2 * g * sin(t1 - 2 * t2) -
      2 * sin(t1 - t2) * m2 * (w2 * w2 * L2 + w1 * w1 * L1 * cos(t1 - t2));

    const den1 = L1 * (2 * m1 + m2 - m2 * cos(2 * t1 - 2 * t2));

    const a1 = num1 / den1;

    const num2 =
      2 *
      sin(t1 - t2) *
      (w1 * w1 * L1 * (m1 + m2) +
        g * (m1 + m2) * cos(t1) +
        w2 * w2 * L2 * m2 * cos(t1 - t2));

    const den2 = L2 * (2 * m1 + m2 - m2 * cos(2 * t1 - 2 * t2));

    const a2 = num2 / den2;

    // Euler integration
    this.w1 += a1 * dt;
    this.w2 += a2 * dt;
    this.t1 += this.w1 * dt;
    this.t2 += this.w2 * dt;
  }

  display() {
    stroke(255);
    strokeWeight(2);

    const x1 = this.origin.x + this.L1 * sin(this.t1);
    const y1 = this.origin.y + this.L1 * cos(this.t1);

    const x2 = x1 + this.L2 * sin(this.t2);
    const y2 = y1 + this.L2 * cos(this.t2);

    // rods
    line(this.origin.x, this.origin.y, x1, y1);
    line(x1, y1, x2, y2);

    // first mass (neutral)
    fill(220);
    noStroke();
    circle(x1, y1, 12);

    // second mass (unique color)
    fill(this.col);
    noStroke();
    circle(x2, y2, 25);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
