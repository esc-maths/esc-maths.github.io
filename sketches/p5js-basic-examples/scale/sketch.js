/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part II: Scaling Example
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(204);
  
  translate(mouseX, mouseY);
  scale(mouseX/100);
  rect(0, 0, 50, 50)

}