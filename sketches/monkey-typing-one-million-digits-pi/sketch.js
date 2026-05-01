/*
  Infinite Monkey Theorem - Pi Digits Stream + Monkey Animation
  Updated for p5.js 2.0
*/

let digits = "";
let index = 0;

let margin = 60;
let lineSpacing = 26;
let charsPerFrame = 1;

let lines = [];
let maxLines;

// Monkey animation
let img1, img2;
let currentImage;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  img1 = await loadImage('monkey-curves-left.png');
  img2 = await loadImage('monkey-curves-right.png');

  const data = await loadStrings(
    "https://raw.githubusercontent.com/CodingTrain/Coding-Challenges/main/097.1_Book_of_Pi_Part_1/Processing/CC_097_1_Book_of_Pi_Part_1/pi-1million.txt"
  );

  digits = "3." + data[0];

  textFont("Courier");
  textSize(20);
  textAlign(LEFT, TOP);

  maxLines = floor((height - 2 * margin) / lineSpacing);

  fill(255, 255, 255, 70);
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "white";

  currentImage = img1;

  describe('Streaming digits of Pi with a typing monkey animation.');
}

function draw() {
  background(0);
  cursor(HAND);

  // Frame
  noFill();
  stroke(255);
  rect(margin, margin, width - 2 * margin, height - 2 * margin);

  typeNextDigits();
  drawLines();
  drawMonkey();
}

function typeNextDigits() {
  if (!digits || index >= digits.length) {
    resetSketch();
    return;
  }

  for (let k = 0; k < charsPerFrame; k++) {
    if (index >= digits.length) break;

    let d = digits[index++];
    if (lines.length === 0) lines.push("");

    let currentLine = lines[lines.length - 1];
    let lineWidth = textWidth(currentLine + d);

    if (lineWidth < width - 2.3 * margin) {
      lines[lines.length - 1] += d;
    } else {
      lines.push(d);
      if (lines.length > maxLines) lines.shift();
    }
  }
}

function drawLines() {
  fill(255);
  noStroke();

  let startY = height / 2 - (lines.length * lineSpacing) / 2;

  for (let i = 0; i < lines.length; i++) {
    text(lines[i], margin + 10, startY + i * lineSpacing);
  }
}

function drawMonkey() {
  if (!img1 || !img2) return;

  let scaleFactor = min(width / img1.width, height / img1.height) * 0.5;

  let scaledWidth = img1.width * scaleFactor;
  let scaledHeight = img1.height * scaleFactor;

  let posX = width * 0.8 - scaledWidth / 2;
  let posY = height * 0.8 - scaledHeight / 2;

  image(currentImage, posX, posY, scaledWidth, scaledHeight);

  // safer toggle
  if (frameCount % 15 === 0) {
    currentImage = (currentImage === img1) ? img2 : img1;
  }
}

function resetSketch() {
  index = 0;
  lines = [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  maxLines = floor((height - 2 * margin) / lineSpacing);
  resetSketch();
}