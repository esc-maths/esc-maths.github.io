/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part II: Little Challenge
*/

let angle = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  translate(mouseX, mouseY);
  
  rotate(angle);
  
  scale(mouseX/200);

  rect(-25, -25, 50, 50);
  
  angle += 0.05;
  
}