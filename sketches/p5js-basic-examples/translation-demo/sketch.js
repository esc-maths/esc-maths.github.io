/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part II: Translation Demo
*/

let x = 0;
let y = 0;
let dim = 80.0;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(102);
  // Animar al incrementar nuestor valor x
  x = x + 0.8;
  // Si la figura se sale del lienzo, reinicia la posición
  if (x > width + dim) {
    x = -dim;
  }

  // Aunque nuestro comando rect() dibuja la figura con su centro
  // en el origen, translate() lo mueve a una nueva posición x,y
  translate(x, height / 2 - dim / 2);
  fill(255);
  rect(-dim / 2, -dim / 2, dim, dim);

  // Las transformaciones se acumulan. Observa cómo este rect se mueve
  // al doble de velocidad que el otro, a pesar de que tiene el mismo
  // parámetro para el valor de x.
  translate(x, dim);
  fill(0);
  rect(-dim / 2, -dim / 2, dim, dim);
}