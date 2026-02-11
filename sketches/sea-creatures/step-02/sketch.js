/*
  Juan Carlos Ponce Campuzano
  01/Feb/2026
*/

// Step 2: Add Polar Coordinate Conversion and a gentle periodic animation

let t = 0;

function setup() {
  createCanvas(500, 500);
  pixelDensity(2);
  background(0);
  stroke(255, 120);
}

function draw() {
  background(0, 40);
  
  t += 0.02;
  
  for (let i = 0; i < 20000; i++) {
    const x = i % 200;
    const y = floor(i / 200);
    
    const k = x - 100;
    const e = y - 50;
    
    // Calculate distance from center (magnitude)
    const o = mag(k, e) / 50;
    
    // Convert to angle
    const c = atan2(e, k);
    
    // Simple circular pattern
    const px = width / 2 + (k + o * 10 * cos(c + t)) * 2;
    const py = height / 2 + (e + o * 10 * sin(c + t)) * 2;
    
    point(px, py);
  }
}

