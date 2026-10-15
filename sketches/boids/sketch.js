let swarm = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 300; i++) {
    swarm.push(new Boid());
  }
}

function draw() {
  background(30);

  for (let bo of swarm) {
    bo.edges();
    bo.flock(swarm);
    bo.update();
    bo.show();
  }
}

// Resize canvas when the browser window changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Toggle fullscreen with the F key
function keyPressed() {
  if (key === 'f' || key === 'F') {
    fullscreen(!fullscreen());
  }
}

class Boid {
  constructor() {
    this.perceptionRadius = 50;
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(2);
    this.acc = createVector(0, 0);

    this.maxSpeed = 5;
    this.maxForce = 0.05;
    this.r = 5;
    this.vision = 1;

    this.redd = random(10, 200);
    this.g = 60;
    this.b = random(150, 255);
    this.st = 5;
  }

  flock(boids) {
    let align = this.alignment(boids);
    this.acc.add(align);

    let separate = this.separation(boids);
    this.acc.add(separate);

    let cohesion = this.cohesion(boids);
    this.acc.add(cohesion);

    let rand = p5.Vector.random2D();
    rand.limit(this.maxForce * 5);
    this.acc.add(rand);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edges() {
    // Wrap around the canvas edges
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  separation(boids) {
    let perceptionRadius = 10;
    let avg = createVector(0, 0);
    let total = 0;

    for (let other of boids) {
      let d = this.pos.dist(other.pos);

      if (other != this && d < perceptionRadius) {
        let angle = this.vel.angleBetween(other.vel);

        if (
          angle < PI / this.vision ||
          angle > -PI / this.vision
        ) {
          let diff = p5.Vector.sub(this.pos, other.pos);

          if (d > 0) {
            diff.div(d * d);
          }

          avg.add(diff);
          total++;
        }
      }
    }

    if (total > 0) {
      avg.div(total);
      avg.setMag(this.maxSpeed);
      avg.sub(this.vel);
      avg.limit(this.maxForce * 5);
    }

    return avg;
  }

  alignment(boids) {
    let perceptionRadius = 100;
    let avg = createVector(0, 0);
    let total = 0;

    for (let other of boids) {
      let d = this.pos.dist(other.pos);

      if (other != this && d < perceptionRadius) {
        let angle = this.vel.angleBetween(other.vel);

        if (
          angle < PI / this.vision ||
          angle > -PI / this.vision
        ) {
          avg.add(other.vel);
          total++;
        }
      }
    }

    if (total > 0) {
      avg.div(total);
      avg.setMag(this.maxSpeed);
      avg.sub(this.vel);
      avg.limit(this.maxForce);
    }

    return avg;
  }

  cohesion(boids) {
    let perceptionRadius = 100;
    let avg = createVector(0, 0);
    let total = 0;

    for (let other of boids) {
      let d = this.pos.dist(other.pos);

      if (other != this && d < perceptionRadius) {
        let angle = this.vel.angleBetween(other.vel);

        if (
          angle < PI / this.vision ||
          angle > -PI / this.vision
        ) {
          avg.add(other.pos);
          total++;
        }
      }
    }

    if (total > 0) {
      avg.div(total);
      avg.sub(this.pos);
      avg.setMag(this.maxSpeed);
      avg.sub(this.vel);
      avg.limit(this.maxForce);
    }

    return avg;
  }

  show() {
    stroke(this.redd, this.g, this.b);
    strokeWeight(this.st);
    fill(this.g, this.redd, this.b);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());

    triangle(
      -this.r, -this.r / 2,
      -this.r, this.r / 2,
      this.r, 0
    );

    pop();
  }
}
