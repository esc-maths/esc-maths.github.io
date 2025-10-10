function setup() {
  createCanvas(770, 330);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "\\left\\{ \\begin{array}{l} " +
    "\\displaystyle \\sum_{k=1}^{N} R_k\\cos(\\omega_k t + \\phi_k) \\\\ " +
    "\\displaystyle \\sum_{k=1}^{N} R_k\\sin(\\omega_k t + \\phi_k) " +
    "\\end{array} \\right. \\quad 0 \\leq t \\leq 2\\pi"
  );

  equation.position(10, 10);
  equation.size(48);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  // Animate the drawing of the LaTeX equation
  equation.play("createFill", 0, 5.5);
}
