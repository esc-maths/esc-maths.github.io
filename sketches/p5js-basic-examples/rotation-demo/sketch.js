/*
  Workshop: 
  "Learning Mathematics Through Programming 
  and Interactive Graphics with p5.js"
  by Juan Carlos Ponce Campuzano
  
  Meinjin Delta Brisbane, Australia, November 23-28, 2025
  Part II: Rotation Demo
*/
let angulo = 0.0;
let dir = 0.0;

function setup() {
  createCanvas(600, 400);
  noStroke();
  fill(255);
  // Dibuja el rectánglo desde el centro y también hará que
  //la rotación sea en torno al centro
  rectMode(CENTER);
}

function draw() {
  background(51);

  // Durante los segundos pares (0, 2, 4, 6...), añade jitter a
  // la rotación
  if (second() % 2 === 0) {
    dir = 0.01;
  } dir = -0.01;
  //increase the angle value using the most recent jitter value
  angulo = angulo + dir;
  // Usa coseno para obtener un movimiento suave a favor y en contra
  // de las manecillas del reloj cuando no esté  haciendo jittering
  let c = cos(angulo);
  // Mueve la figura al centro del lienzo
  translate(width / 2, height / 2);
  // Aplica la rotación final
  rotate(c);
  rect(0, 0, 180, 180);
}