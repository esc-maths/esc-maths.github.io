/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part III: Motion
*/

let angle = 0.0;
let amplitude = 100;
let offset = 100;
let vel = 0.05;

let diameter = 80;

function setup() {
  createCanvas(450, 200);
}

function draw() {
  background(0);
  let y = offset + sin(angle + 0.5) * (amplitude - diameter/2);
  circle(width/2, y, diameter);
  angle += vel;
}