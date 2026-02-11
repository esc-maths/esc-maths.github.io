/*
  Juan Carlos Ponce Campuzano
  02/Feb/2026
*/

// Step 4: Introduce Complex Warping Functions

let t = 0;

function setup() {
  createCanvas(500, 500);
  //pixelDensity(2);
  background(0);
  stroke(255, 80);
}

function draw() {
  background(0, 40);
  
  t += 0.03;
  
  for (let i = 0; i < 30000; i++) {
    const x = i % 250;
    const y = floor(i / 250);
    
    // Different centering and scaling
    const k = x / 2 - 62.5;
    const e = y / 2 - 50;
    
    const o = mag(k, e) / 20;
    const c = o * e / 20 - t / 5;
    
    // More complex warping function
    const q = x + o * k * sin(2 * o - t);
    
    const px = width / 2 + q * sin(c);
    const py = height / 2 + (y / 2) * cos(2 * c - t) - q * cos(c);
    
    point(px, py);
  }
}