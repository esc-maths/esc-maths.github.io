/*

"Da Rasterizer" by TDM: 
https://www.shadertoy.com/view/MsjSzz

This version: Juan Carlos Ponce Campuzano
Website: https://jcponce.github.io
Date: 3/Aug/2025

*/

// a shader variable
let theShader;
let shaderBg;

let img;
let time_;
let framerate;

let moves = [0, 0];

// function preload() {
//   // load the shader
//   theShader = loadShader('shader.vert', 'shader.frag');
// }

async function setup() {
  theShader = await loadShader("vertex.vert", "fragment.frag");

  // disables scaling for retina screens which can create inconsistent scaling between displays
  pixelDensity(1);

  createCanvas(windowWidth, windowHeight);
  noStroke();

  // shaders require WEBGL mode to work
  shaderBg = createGraphics(windowWidth, windowHeight, WEBGL);

  cursor('grab');

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
  yMouse = (yMouse);

  mouseMove();

  // pass the interactive information to the shader
  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iTime", millis() / 1000.0);
  theShader.setUniform("iMouse", moves);


  // rect gives us some geometry on the screen to draw the shader on
  shaderBg.rect(0, 0, width, height);
  image(shaderBg, 0, 0, width, height);

  // if (isMouseOverLink()) {
  //   fill(180);
  //   cursor('pointer'); // <-- this makes the cursor a hand
  // } else {
  //   fill(220);
  //   //cursor('default'); // <-- this restores the default cursor
  // }

  // rect(0, 0, 110, 30);
  // fill(0);
  // text("dynamicmath.xyz", 7, 19)

  //console.log(imView);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  theShader.setUniform("iResolution", [width, height]);
}

function mousePressed() {
  cursor('grabbing');
}

function mouseReleased() {
  cursor('grab');
}

function mouseMove() {
  if (!mouseIsPressed) return;
  moves[0] += mouseX - pmouseX;
  moves[1] += pmouseY - mouseY;
}