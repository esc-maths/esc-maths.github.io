let cols = 10;
let rows = 4;
let sectors = [];

function setup() {
  createCanvas(800, 200);
  colorMode(HSB,360,100,100,100)
  angleMode(DEGREES);
  noStroke();

  let w = width / cols;
  let h = height / rows;
  let marginFactor = 0.7; // <— reduce radius for spacing (0.8 = 20% margin)

  for (let j = 0; j < rows; j++) {
    for (let i = cols - 1; i >= 0; i--) {
      let x = i * w + w / 2;
      let y = j * h + h / 2;
      let r = min(w, h) * marginFactor;
      let delay = (cols - 1 - i) + j; // stagger from top-right
      let rotation = 0;
      sectors.push(new Sector(x, y, r, rotation, delay));
    }
  }
}

function draw() {
  background(20);
  let baseSpeed = 1;

  for (let s of sectors) {
    s.display(baseSpeed);
  }
}

class Sector {
  constructor(x, y, r, rotation, delay) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rotation = rotation;
    this.delay = delay;
  }

  display(speed) {
    let t = frameCount * speed - this.delay * 15;
    let angle = map(sin(t), -1, 1, 0, 360);

    fill(200, 100, 100, 100);
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    arc(0, 0, this.r, this.r, -angle, 0, PIE);
    pop();
  }
}
