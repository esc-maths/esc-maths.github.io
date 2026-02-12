let particles = [];
let streamCount = 50;
let expandStart = 300; // Point where divergence begins
let expandEnd = 500;   // Point where streams become straight

function setup() {
  createCanvas(1100, 320);
  textFont('Courier New');
  textSize(18);
}

function draw() {
  background(10, 20, 50);

  // Spawning new data bits
  if (frameCount % 1 == 0) {
    particles.push(new DataBit());
  }

  blendMode(ADD);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }

  blendMode(BLEND);
}

class DataBit {
  constructor() {
    this.x = 0;
    this.y = height / 2;
    this.speed = random(2, 4);
    this.val = random([0, 1]);
    this.alpha = 255;

    // Determine the final vertical lane
    this.streamIndex = floor(random(streamCount));
    this.targetY = map(this.streamIndex, 0, streamCount, 40, height - 40);

    // Color based on the target lane
    if (this.targetY < height * 0.35) this.color = color(0, 255, 255);
    else if (this.targetY < height * 0.65) this.color = color(255, 0, 200);
    else this.color = color(255, 200, 0);
  }

  update() {
    this.x += this.speed;

    if (this.x < expandStart) {
      // PHASE 1: Stay in the center "cable"
      this.y = height / 2;
    } 
    else if (this.x >= expandStart && this.x <= expandEnd) {
      // PHASE 2: Expand/Diverge
      let progress = map(this.x, expandStart, expandEnd, 0, 1);
      // Smooth step for a nicer curve
      let smoothProgress = Math.sin((progress * PI) / 2); 
      this.y = lerp(height / 2, this.targetY, smoothProgress);
    } 
    else {
      // PHASE 3: Straight line at target height
      this.y = this.targetY;
    }

    // Fade out at the edge
    if (this.x > width - 100) {
      this.alpha = map(this.x, width - 100, width, 255, 0);
    }
  }

  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    noStroke();

    // Visual logic: Dots during the cable/expansion, Binary during straight lines
    if (this.x < expandEnd - 20) {
      ellipse(this.x, this.y, 6, 6);
    } else {
      text(this.val, this.x, this.y);
    }
  }

  finished() {
    return this.x > width || this.alpha <= 0;
  }
}