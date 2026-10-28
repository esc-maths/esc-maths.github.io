function setup() {
  createCanvas(600, 130);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "{\\displaystyle \\int f(x)\\,dx=F(x)+C}"
  );
  equation.position(65, 10);
  equation.size(48);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  equation.play("createFill", 0, 3.5);
 
}
