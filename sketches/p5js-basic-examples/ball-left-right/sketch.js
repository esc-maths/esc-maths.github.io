/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part III: Motion with conditionals
*/

let diameter = 80;
let x = 50;
let speed = 1.5;
let direction = 1;

function setup() {
  createCanvas(500, 200);
}

function draw() {
  background(0);
  x += speed * direction;
  if (x > width - diameter / 2 || x < diameter / 2) {
    direction = -direction; // Change direction
  }
  if (direction == 1) {
    // Moving to the right
    fill(255, 255, 0);
    circle(x, 100, diameter);
    fill(0);
    circle(x + 10, 80, 10);
  } else {
    // Moving to the left
    fill(255, 255, 0);
    circle(x, 100, diameter);
    fill(0);
    circle(x - 10, 80, 10);
  }
}
