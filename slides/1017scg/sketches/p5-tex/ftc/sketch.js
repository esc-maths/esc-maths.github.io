function setup() {
  createCanvas(600, 150);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "{\\displaystyle \\int_a^b f(x)\\,dx=F(b)-F(a)}"
  );
  equation.position(20, 20);
  equation.size(48);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  equation.play("createFill", 0, 3.5);
 
}
