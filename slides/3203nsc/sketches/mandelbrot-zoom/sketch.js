/*
 
Zoomin in Mandelbrot set

Author: Juan Carlos Ponce Campuzano
Website: https://jcponce.github.io
Date: 16/Mar/2024

*/

// a shader variable
let theShader;
let shaderBg;

let img;
let time_;
let framerate;

async function setup() {
	
	theShader = await
  loadShader("vertex.vert", "fragment.frag");
  pixelDensity(1);

  createCanvas(700, 400);
  noStroke();

  // shaders require WEBGL mode to work
  shaderBg = createGraphics(700, 400, WEBGL);
  
}

function draw() {
  // we can draw the background each frame or not.
  // if we do we can use transparency in our shader.
  // if we don't it will leave a trailing after image.
  // background(0);
  // shader() sets the active shader with our shader
  shaderBg.shader(theShader);

  // get the mouse coordinates, map them to values between 0-1 space
  let yMouse = (map(mouseY, 0, height, height, 0) / height) * 2 - 1;
  let xMouse = (mouseX / width) * 2 - 1;

  // Make sure pixels are square
  xMouse = (xMouse * width) / height;
  yMouse = (yMouse ) ;
  

  // pass the interactive information to the shader
  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iTime", millis() / 1000.0);
  theShader.setUniform("iMouse", [viewX, viewY]);


  // rect gives us some geometry on the screen to draw the shader on
  shaderBg.rect(0, 0, width, height);
  image(shaderBg, 0, 0, width, height);
  
  
}

function windowResized() {
  resizeCanvas(400, 400);
}

let imView = false;

function mousePressed() {
  if (imView === false) {
    imView = true;
  }
  cursor('grabbing');
}

function mouseReleased() {
  if (imView === true) {
    imView = false;
  }
  cursor('grab');
}

// Change 3D view 
let viewX = 189;
let viewY = 224;
function mouseDragged() {
  viewX = mouseX;
  viewY = map(mouseY, 0, height, height, 0);
  //console.log(viewX,viewY);
}

function mouseReleased() {
  if (imView === true) {
    imView = false;
  }
  cursor('grab');
}