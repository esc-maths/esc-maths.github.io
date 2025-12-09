/* 

Title: Apollonian gasket precipitation
 
Author: Juan Carlos Ponce Campuzano
Site: https://jcponce.github.io/
Patreon: https://www.patreon.com/jcponce
Date: 09-Dec-2025

Written in p5.js (https://p5js.org/)
Under Creative Commons License
https://creativecommons.org/licenses/by-sa/4.0/

Notes: I used this online tool to remove background

https://www.remove.bg/

*/

 
let images = [];
let snowflakes = [];
let noiseval = 0.01;
let size = 6;
let numMax = 40;

function preload() {
  for (let i = 0; i < size; i++) {
    images[i] = loadImage('imgs/pi-e-0' + (i+1) + '.png');
  }
  snowInit();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //console.log(int(random(0,3)));
}

function draw() {
  background(255);
  for (let i = 0; i < numMax; i++) {
    snowflakes[i].drawMe();
    snowflakes[i].updateMe();
  }
}

/* Class for snowflake simulation */
class snowflakesGGB {

  constructor() {
    this.initMe();
  }

  initMe() {
    this.x = random(0, windowWidth);
    this.y = random(-600, 0);
    this.iniPx = random(0, width);
    this.iniPy = -10;
    this.diameter = random(30, 65);
    this.resize = 0.24 * map(this.diameter, 6, 28, 0.055, 0.135);
    //this.sizeScale = random(0.055, 0.125);
    //this.sizeScale = getRandomSize();
    this.rotAngle = 0;
    this.rotSpeed = random(-1.2, 1.2);
    this.speed = random(0.25, 1.2);
    this.xnoise = random(100);
    this.wind = 2;
    this.randomImage = this.randomInteger(0, size - 1);
  }

  updateMe() {
    this.x = this.x + noise(this.xnoise) * this.wind - 1;
    this.xnoise = this.xnoise + noiseval;
    this.y = this.y + this.speed;
    if (this.y > height + 100 || this.x < -40 || this.x > windowWidth + 40) {
      this.initMe();
      this.y = -50;
    }
    this.rotAngle += this.rotSpeed;
  }

  drawMe() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotAngle));
    scale(this.resize, this.resize);
    imageMode(CENTER);
    image(images[this.randomImage], 0, 0);
    pop();
    
    noFill();
    stroke(120);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

function getRandomSize() {

  let r = pow(random(0, 2), 2);
  let s = 0.9
  return constrain(r * s, 0, s);

}

/* Extra functions */
function snowInit() {
  for (let i = 0; i < numMax; i++) {
    snowflakes[i] = new snowflakesGGB();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}