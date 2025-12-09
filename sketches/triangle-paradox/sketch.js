/*
 Paradox triangle by Sayama:
 https://openprocessing.org/sketch/953976

 Adapted by Juan Carlos Ponce Campuzano
 09/Dec/2025
 https://www.dynamicmath.xyz
*/

const Pallete = createCols("https://coolors.co/222222-ffffff-4b4e6d-c2cad3");
let vPos, unitSize;
const divNum = 3;
const cycle = 150;
let bg;

let size;
let radius;
let centerPos;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();

  size = min(width, height) * 0.35;
  radius = size * sqrt(3) / 3;
  centerPos = createVector(width / 2, height / 2 - radius * 0.15 );
  unitSize = size / (divNum - 1) * 0.5;
  vPos = [
    createVector(size / 2, -radius / 2).add(centerPos),
    createVector(0, radius).add(centerPos),
    createVector(-size / 2, -radius / 2).add(centerPos),
  ];

  bg = createGraphics(width, height);
  bg.noStroke();
  bg.fill(lerpColor(color(Pallete[3] + "20"), color(0, 10), 0.2));
  // for (let i = 0; i < 100000; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let s = noise(x * 0.01, y * 0.01) * 1 + 1;

  //   bg.rect(x, y, s, s);
  // }
  bg.rect(0, 0, width, height);

}

function draw() {
  background(Pallete[3]);
  const frameRatio = (frameCount % cycle) / cycle;
  let points = [];
  for (let i = 0; i < vPos.length; i++) {
    for (let n = 0; n < divNum; n++) {
      let v1 = vPos[i];
      let v2 = vPos[(i + 1) % vPos.length];
      let ratio = n + frameRatio;
      let p = p5.Vector.lerp(v1, v2, ratio / divNum);
      points.push(p);
    }
  }
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    cube(p.x, p.y, unitSize);
  }
  cube(points[0].x, points[0].y, unitSize);
  cubeMasked(points[1].x, points[1].y, unitSize, frameRatio);
  image(bg, 0, 0);
}

function cube(cx, cy, size) {
  let h = size * 0.5 * sqrt(3);
  for (let i = 0; i < 3; i++) {
    fill(Pallete[i]);
    push();
    translate(cx, cy);
    rotate(i * TAU / 3);
    shearX(-PI / 6);
    rect(0, 0, -size, -h);
    pop();
  }
}


function cubeMasked(cx, cy, size, ratio) {
  let h = size * 0.5 * sqrt(3);
  for (let i = 0; i < 3; i++) {
    fill(Pallete[i]);
    push();
    translate(cx, cy);
    rotate(i * TAU / 3);
    shearX(-PI / 6);
    if (i == 0) quad(0, 0, -size, -h * ratio, -size, -h, 0, -h);
    else if (i == 1) rect(0, 0, -size, -h);
    pop();
  }
}

function createCols(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Recalculate all geometry-dependent values
  size = min(width, height) * 0.35;
  radius = size * sqrt(3) / 3;
  centerPos = createVector(width / 2, height / 2 - radius * 0.15);
  unitSize = size / (divNum - 1) * 0.5;

  // Reset positions of the 3 vertices
  vPos = [
    createVector(size / 2, -radius / 2).add(centerPos),
    createVector(0, radius).add(centerPos),
    createVector(-size / 2, -radius / 2).add(centerPos),
  ];

  // Rebuild background graphics
  bg = createGraphics(width, height);
  bg.noStroke();
  bg.fill(lerpColor(color(Pallete[3] + "20"), color(0, 10), 0.2));
  bg.rect(0, 0, width, height);
}