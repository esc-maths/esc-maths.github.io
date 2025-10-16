function setup() {
  createCanvas(600, 70);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "{\\displaystyle \\rho \\left(\\frac{\\partial \\mathbf v}{\\partial t} + \\mathbf v \\cdot \\nabla \\mathbf v \\right) =-\\nabla p + \\mu \\nabla^2 \\mathbf v + \\mathbf F, \\quad \\nabla \\cdot \\mathbf v = 0. }"
  );
  equation.position(15, 5);
  equation.size(25);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  equation.play("createFill", 0, 6.0);
 
}
