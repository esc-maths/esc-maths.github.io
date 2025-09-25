function setup() {
  createCanvas(690, 180);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "{\\displaystyle \\begin{pmatrix} a & b & e \\\\ c & d & f \\\\ 	0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} ax + by + e \\\\ cx + dy + f \\\\ 1 \\end{pmatrix}.}"
  ); 
  equation.position(10, 10);
  equation.size(40);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  equation.play("createFill", 0, 3.5);
 
}
