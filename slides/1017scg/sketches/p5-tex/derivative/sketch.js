function setup() {
  createCanvas(600, 170);
  overflow('hidden');
  background(255);
  writeTeX();
}

function writeTeX() {
  let equation = createTeX(
    "{\\displaystyle \\dfrac{dy}{dt}=\\lim_{h\\rightarrow 0}\\dfrac{f(t+h)-f(t)}{h}}"
  );
  equation.position(20, 30);
  equation.size(48);
  equation.stroke(color('rgb(0,0,0)'));
  equation.fill(color('rgb(0,0,0)'));
  
  equation.play("createFill", 0, 5.5);
 
}
