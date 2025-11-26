/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part III: Functions
*/

function setup() {
  createCanvas(500, 200);
  ellipseMode(RADIUS);
}

function draw() {
  background(220);
  
  for(let x = 50; x<=width; x+=100){
    let size = sin(map(x, 0, 500, 0, PI));
    pacman(x, 100, size)
  }
}

function pacman(x, y, s){
  push()
  translate(x, y);
  scale(s)
  fill(255,255,0)
  arc(0, 0, 50, 50, 0.52, 5.76); // Hacia la izquierda
  fill(0)
  ellipse((10), (0-20), 5)
  pop();
}