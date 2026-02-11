/*
  Juan Carlos Ponce Campuzano
  02/Feb/2026
*/

// Step 3: Add time-based oscillation and gentle distortion

let t = 0;

function setup() {
  createCanvas(500, 500);
  pixelDensity(2);
  background(0);
  stroke(255, 80);
}

function draw() {
  background(0, 40);
  
  t += 0.02;
  
  for (let i = 0; i < 20000; i++) {
    const x = i % 200;
    const y = floor(i / 200);
    
    const k = x - 100;
    const e = y - 50;
    
    const o = mag(k, e) / 50;
    const c = atan2(e, k);
    
    // Add time-based oscillation
    const q = o * 20 * sin(c * 2 + t);
    
    const px = width / 2 + (k + q * cos(c)) * 2;
    const py = height / 2 + (e + q * sin(c)) * 2;
    
    point(px, py);
  }
}