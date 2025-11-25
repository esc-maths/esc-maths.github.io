/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part III: 2D grid with a for loop basic example
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let y = 32; y < height; y += 8) {//vertical
    for (let x = 12; x < width; x += 15) {// horizontal
      fill(25, 55, 255, 140);
      ellipse(x, y, 16 - y / 10, 16 - y /10);
    }
  }
  
}