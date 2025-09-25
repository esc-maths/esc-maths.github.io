let phongshader;
let camera;

// material defs
let matWhite = { diff: [1, 1, 1], spec: [1, 1, 1], spec_exp: 200.0 };
let matDark = { diff: [0.2, 0.3, 0.4], spec: [1, 1, 1], spec_exp: 400.0 };
let matRed = { diff: [1, 0.05, 0.01], spec: [1, 0, 0], spec_exp: 400.0 };
let matBlue = { diff: [0.01, 0.05, 1], spec: [0, 0, 1], spec_exp: 400.0 };
let matGreen = { diff: [0.05, 1, 0.01], spec: [0, 1, 0], spec_exp: 400.0 };
let matYellow = { diff: [1, 1, 0.01], spec: [1, 1, 0], spec_exp: 400.0 };
let materials = [matWhite, matRed, matBlue, matGreen, matYellow];

// light defs
let ambientlight = { col: [0, 0, 0] };
let directlights = [
  { dir: [-1, -1, 0], col: [0, 0, 0] },
];
let pointlights = [
  { pos: [0, 0, 0, 1], col: [1.00, 1.00, 1.00], rad: 450 },
  { pos: [0, 0, 0, 1], col: [1.00, 0.00, 0.40], rad: 200 },
  { pos: [0, 0, 0, 1], col: [0.00, 0.40, 1.00], rad: 200 },
  { pos: [0, 0, 0, 1], col: [1.00, 0.40, 0.00], rad: 300 },
  { pos: [0, 0, 0, 1], col: [0.10, 0.40, 1.00], rad: 300 },
];

// geometry
let torus_def = { r1: 100, r2: 15 };
let rand_rad;

// Camera state variables
let cameraDistance = 400;
let cameraRotation = [0, 0, 0];
let cameraCenter = [0, 0, 60];
let isDragging = false;
let lastMouseX, lastMouseY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
  
  let phong_vert = document.getElementById("phong.vert").textContent;
  let phong_frag = document.getElementById("phong.frag").textContent;
  phongshader = new p5.Shader(this._renderer, phong_vert, phong_frag);
  
  rand_rad = floor(random(1, 4));
  
  // Initialize camera
  camera = createCamera();
  updateCamera();
  
  cursor('grab');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateCamera() {
  camera.setPosition(
    cameraCenter[0] + sin(cameraRotation[0]) * cos(cameraRotation[1]) * cameraDistance,
    cameraCenter[1] + sin(cameraRotation[1]) * cameraDistance,
    cameraCenter[2] + cos(cameraRotation[0]) * cos(cameraRotation[1]) * cameraDistance
  );
  camera.lookAt(cameraCenter[0], cameraCenter[1], cameraCenter[2]);
}

function mousePressed() {
  isDragging = true;
  lastMouseX = mouseX;
  lastMouseY = mouseY;
  cursor('grabbing');
}

function mouseReleased() {
  isDragging = false;
  cursor('grab');
}

function mouseDragged() {
  if (isDragging) {
    let deltaX = mouseX - lastMouseX;
    let deltaY = mouseY - lastMouseY;
    
    cameraRotation[0] += deltaX * 0.01;
    cameraRotation[1] += deltaY * 0.01;
    
    // Constrain vertical rotation to avoid flipping
    cameraRotation[1] = constrain(cameraRotation[1], -PI/2 + 0.1, PI/2 - 0.1);
    
    updateCamera();
    
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

function mouseWheel(event) {
  // Zoom in/out with mouse wheel
  cameraDistance += event.delta * 0.5;
  cameraDistance = constrain(cameraDistance, 100, 5000);
  updateCamera();
  return false;
}

function draw() {
  // Use shader directly instead of calling setShader function
  shader(phongshader);
  setAmbientlight(phongshader, ambientlight);
  addDirectlight(phongshader, directlights, 0);
  
  // projection
  perspective(60 * PI/180, width/height, 1, 20000);
  
  // clear BG
  background(0);
  noStroke();
  
  let m4_torus = new p5.Matrix();
  
  // add pointlights
  // 2 are place somewhere free in space
  // 3 are moving along the torus surface
  push();
  {
    let ang1 = map(mouseX, 0, width, -1, 1);
    let ang = sin(frameCount * 0.01) * 0.2;
    let ty = torus_def.r1 * 2 + (1-abs(ang)) * 100;
    
    push();
    rotateX((ang+1) * PI/2);
    translate(0, ty, 0);
    addPointLight(phongshader, pointlights, 0);
    pop();
    
    push();
    rotateZ(frameCount * 0.02);
    translate(180, 0, 10);
    addPointLight(phongshader, pointlights, 4);
    pop();
    
    // torus transformations + surface-pointlights
    push();
    rotateX(PI/2);
    translate(0, torus_def.r1, 0);
    let rad1 = torus_def.r1;
    let rad2 = torus_def.r2 + 5; // offset from torus surface
    
    push();
    rotateZ(0 * TWO_PI / 3 + frameCount * 0.01);
    translate(rad1, 0, 0);
    rotateY(sin(frameCount * 0.01) * TWO_PI);
    translate(rad2, 0, 0);
    addPointLight(phongshader, pointlights, 2);
    pop();
    
    push();
    rotateZ(2 * TWO_PI / 3 + frameCount * 0.02);
    translate(rad1, 0, 0);
    rotateY(frameCount * 0.04);
    translate(rad2, 0, 0);
    addPointLight(phongshader, pointlights, 3);
    pop();
    
    push();
    rotateZ(+PI/2 + sin(frameCount * 0.01) * 2 * PI/3);
    translate(rad1, 0, 0);
    rotateY(frameCount * 0.1);
    translate(rad2, 0, 0);
    addPointLight(phongshader, pointlights, 1);
    pop();
    
    m4_torus.set(this._renderer.uMVMatrix);
    pop();
  }
  pop();
  
  //////////////////////////////////////////////////////////////////////////////
  //
  // scene, material-uniforms
  //
  //////////////////////////////////////////////////////////////////////////////
  
  // reset shader, after fill() was used previously
  shader(phongshader);
  
  // ground
  push();
  translate(0, 0, 0);
  setMaterial(phongshader, matWhite);
  box(1000, 1000, 10);
  pop();
  
  // torus
  push();
  this._renderer.uMVMatrix.set(m4_torus);
  setMaterial(phongshader, matWhite);
  torus(torus_def.r1, torus_def.r2, 100, 25);
  pop();
  
  // random spheres
  randomSeed(rand_rad);
  setMaterial(phongshader, matDark);
  for(let i = 0; i < 20; i++){
    push();
    let tx = random(-1, 1) * 100;
    let ty = random(-1, 1) * 100;
    let tz = random(0, 2) * 50;
    let rad = random(5, 15);
    translate(tx, ty, tz + rad + 5);
    sphere(rad);
    pop();
  }
}

// Remove the setShader function since we call shader() directly
// function setShader(shader){
//   shader(shader);
// }

function setMaterial(shader, material){
  shader.setUniform('material.diff', material.diff);
  shader.setUniform('material.spec', material.spec);
  shader.setUniform('material.spec_exp', material.spec_exp);
}

function setAmbientlight(shader, ambientlight){
  shader.setUniform('ambientlight.col', ambientlight.col);
}

let m4_modelview = new p5.Matrix();
let m3_directions = new p5.Matrix('mat3');

function addDirectlight(shader, directlights, idx){
  // Get the current modelview matrix from the renderer
  m4_modelview.set(this._renderer.uMVMatrix);
  m3_directions.inverseTranspose(m4_modelview);
  
  let light = directlights[idx];
  
  // normalize direction
  let [x, y, z] = light.dir;
  let mag = Math.sqrt(x*x + y*y + z*z);
  let light_dir = [x/mag, y/mag, z/mag];
  
  // transform to camera-space
  light_dir = m3_directions.multVec(light_dir);
  
  // set shader uniforms
  shader.setUniform('directlights['+idx+'].dir', light_dir);
  shader.setUniform('directlights['+idx+'].col', light.col);
}

function addPointLight(shader, pointlights, idx){
  let light = pointlights[idx];
  
  // Transform light position to camera space
  m4_modelview.set(this._renderer.uMVMatrix);
  light.pos_cam = m4_modelview.multVec(light.pos);
  
  shader.setUniform('pointlights['+idx+'].pos', light.pos_cam);
  shader.setUniform('pointlights['+idx+'].col', light.col);
  shader.setUniform('pointlights['+idx+'].rad', light.rad);
  
  let col = light.col;
  fill(col[0]*255, col[1]*255, col[2]*255);
  sphere(2);
}

// multiplies: vdst = mat * vsrc
p5.Matrix.prototype.multVec = function(vsrc, vdst){
  vdst = (vdst instanceof Array) ? vdst : [];
  let x = 0, y = 0, z = 0, w = 1;
  
  if(vsrc instanceof p5.Vector){
    x = vsrc.x;
    y = vsrc.y;
    z = vsrc.z;
  } else if(vsrc instanceof Array){
    x = vsrc[0];
    y = vsrc[1];
    z = vsrc[2];
    w = vsrc[3];
    w = (w === undefined) ? 1 : w;
  }
  
  let mat = this.mat4 || this.mat3;
  
  if(mat.length === 16){
    vdst[0] = mat[0]*x + mat[4]*y + mat[8]*z + mat[12]*w;
    vdst[1] = mat[1]*x + mat[5]*y + mat[9]*z + mat[13]*w;
    vdst[2] = mat[2]*x + mat[6]*y + mat[10]*z + mat[14]*w;
    vdst[3] = mat[3]*x + mat[7]*y + mat[11]*z + mat[15]*w;
  } else {
    vdst[0] = mat[0]*x + mat[3]*y + mat[6]*z;
    vdst[1] = mat[1]*x + mat[4]*y + mat[7]*z;
    vdst[2] = mat[2]*x + mat[5]*y + mat[8]*z;
  }
  
  return vdst;
}