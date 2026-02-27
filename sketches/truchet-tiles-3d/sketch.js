/**
    License: Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License

    UV Mapping a Truchet Tile Set
    @byt3_m3chanic 8/16/21
    https://www.shadertoy.com/view/NddGzH


    Thank you @Fabrice for the knowledge and math
    Started as an experiment - how can I do this.
    https://www.shadertoy.com/view/sdtGRn

    And finally ended up here, it's pretty tricky as
    you have to get the closest arc and use that in
    the mapping formula.

*/

// a shader variable
let theShader;
let shaderBg;

let moves = [0, 0];

async function setup() {
	
	theShader = await
  loadShader("vertex.vert", "fragment.frag");
  pixelDensity(2);

  createCanvas(600, 400);
  noStroke();

  // shaders require WEBGL mode to work
  shaderBg = createGraphics(600, 400, WEBGL);
  
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
  
  mouseMove();
  // pass the interactive information to the shader
  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iTime", millis() / 1000.0);
  theShader.setUniform("iMouse", moves);


  // rect gives us some geometry on the screen to draw the shader on
  shaderBg.rect(0, 0, width, height);
  image(shaderBg, 0, 0, width, height);
  
  
}

function windowResized() {
  resizeCanvas(600, 400);
}


function mousePressed() {
  cursor("grabbing");
}

function mouseReleased() {
  cursor("grab");
}

function mouseMove() {
  if (!mouseIsPressed) return;
  moves[0] += mouseX - pmouseX;
  moves[1] += pmouseY - mouseY;
}