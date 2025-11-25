/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part III: 2D grid with a for loop
*/

function setup() {
  createCanvas(500, 500);
  fill(255);
  stroke(102);
}
function draw() {
  background(0);
  for (let y = 10; y <= height - 10; y += 40) {
    for (let x = 10; x <= width - 10; x += 40) {
      ellipse(x, y, 4, 4);
      // Draw a line to the center of the canvas
      stroke(200);
      line(x, y, 250, 250);
    }
  }
}
