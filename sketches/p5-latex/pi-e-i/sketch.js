function setup() {
  createCanvas(550, 140);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "e^{i\\pi} + 1 = 0"
  );

  equation.position(10, 10);
  equation.size(108);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  // Animate the drawing of the LaTeX equation
  equation.play("createFill", 0, 5.5);
  //equation.play('growFromCenter', 0, 1);
}
