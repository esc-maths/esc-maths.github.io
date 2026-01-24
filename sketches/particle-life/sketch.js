// Simple Particle Life simulation
let particles = [];
let NUM_TYPES = 6;
let numParticles = 1500;
let forces = [];
let minDistances = [];
let radii = [];
let K = 0.05;
let friction = 0.85;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  
  // Initialize interaction matrices
  for (let i = 0; i < NUM_TYPES; i++) {
    forces[i] = [];
    minDistances[i] = [];
    radii[i] = [];
    for (let j = 0; j < NUM_TYPES; j++) {
      forces[i][j] = random(0.3, 1.0);
      if (random() < 0.5) forces[i][j] *= -1;
      minDistances[i][j] = random(30, 50);
      radii[i][j] = random(70, 250);
    }
  }
  
  // Create particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0);
  
  // Update all particles
  for (let p of particles) {
    p.update();
  }
  
  // Draw all particles
  for (let p of particles) {
    p.display();
  }
}

function mousePressed() {
  // Reset with new random parameters
  for (let i = 0; i < NUM_TYPES; i++) {
    for (let j = 0; j < NUM_TYPES; j++) {
      forces[i][j] = random(0.3, 1.0);
      if (random() < 0.5) forces[i][j] *= -1;
      minDistances[i][j] = random(30, 50);
      radii[i][j] = random(70, 250);
    }
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = 0;
    this.vy = 0;
    this.type = floor(random(NUM_TYPES));
    this.color = color(this.type * (360 / NUM_TYPES), 80, 100);
  }
  
  update() {
    let fx = 0, fy = 0;
    
    // Check interactions with all other particles
    for (let other of particles) {
      if (other === this) continue;
      
      // Calculate distance with toroidal wrapping
      let dx = other.x - this.x;
      let dy = other.y - this.y;
      
      // Toroidal wrapping
      if (dx > width/2) dx -= width;
      if (dx < -width/2) dx += width;
      if (dy > height/2) dy -= height;
      if (dy < -height/2) dy += height;
      
      let dist = sqrt(dx*dx + dy*dy);
      
      if (dist > 0.1) { // Avoid division by zero
        // Normalize direction
        dx /= dist;
        dy /= dist;
        
        // Get interaction parameters
        let forceVal = forces[this.type][other.type];
        let minDist = minDistances[this.type][other.type];
        let radius = radii[this.type][other.type];
        
        // Apply forces
        if (dist < minDist) {
          // Strong repulsion when too close
          let strength = abs(forceVal) * (-3) * (1 - dist/minDist);
          fx += dx * strength;
          fy += dy * strength;
        }
        
        if (dist < radius) {
          // Attraction/repulsion within radius
          let strength = forceVal * (1 - dist/radius);
          fx += dx * strength;
          fy += dy * strength;
        }
      }
    }
    
    // Apply forces
    this.vx = (this.vx + fx * K) * friction;
    this.vy = (this.vy + fy * K) * friction;
    
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    
    // Toroidal boundaries
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
    
    // Limit speed
    let speed = sqrt(this.vx*this.vx + this.vy*this.vy);
    if (speed > 5) {
      this.vx *= 5 / speed;
      this.vy *= 5 / speed;
    }
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, 7, 7);
  }
}