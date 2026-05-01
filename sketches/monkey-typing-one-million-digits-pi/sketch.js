/*
  Infinite Monkey Theorem - Pi Digits Stream + Monkey Animation
  
  The infinite monkey theorem states that if you let
  a monkey hit the keys of a typewriter at random an
  infinite amount of times, eventually the monkey will
  type out the entire works of Shakespeare.
  
  This version displays the first 1 million digits of Pi
  with a typing monkey animation.
  
  Author: Juan Carlos Ponce Campuzano
  https://dynamicmath.xyz
*/

let digits = "";
let index = 0;

let margin = 60;
let lineSpacing = 26;
let charsPerFrame = 1; // typing speed

let lines = []; // stores strings for all visible lines
let maxLines;

// Monkey animation variables
let img1, img2;
let currentImage;

function preload() {
  // Monkey images made with GeoGebra
  // https://www.geogebra.org/m/ke9sdhex
  img1 = loadImage('monkey-curves-left.png');
  img2 = loadImage('monkey-curves-right.png');

  // CSV with a single row: 141592...
  digits = loadStrings(
    "https://raw.githubusercontent.com/CodingTrain/Coding-Challenges/main/097.1_Book_of_Pi_Part_1/Processing/CC_097_1_Book_of_Pi_Part_1/pi-1million.txt"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("Courier");
  textSize(20);
  textAlign(LEFT, TOP);

  digits = "3." + digits[0]; // convert array → string
  maxLines = floor((height - 2 * margin) / lineSpacing);

  fill(255, 255, 255, 70);
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "white";
  
  currentImage = img1; // Start with first monkey image
  
  // Add a general description of the canvas
  describe('The infinite monkey theorem states that a monkey hitting keys at random on a typewriter keyboard for an infinite amount of time will almost surely type any given text, including the complete works of William Shakespeare. Here we show the first 1 million digits of Pi. ∞ 🤯');
}

function draw() {
  background(0);
  cursor(HAND);

  // ----- PI DIGITS STREAM -----
  // margin frame
  noFill();
  stroke(255);
  rect(margin, margin, width - 2 * margin, height - 2 * margin);

  // typing engine for Pi digits
  typeNextDigits();

  // draw current buffer of visible lines
  drawLines();
  
  // ----- MONKEY ANIMATION -----
  // Calculate the scale factor based on the canvas size
  let scaleFactor = min(width / img1.width, height / img1.height) * 0.5;
  
  // Calculate the scaled image size
  let scaledWidth = img1.width * scaleFactor;
  let scaledHeight = img1.height * scaleFactor;
  
  // Calculate the position for the scaled image (bottom right corner)
  let posX = width * 8 / 10 - scaledWidth / 2;
  let posY = height * 8 / 10 - scaledHeight / 2;
  
  // Display the current image at the specified position with scaled size
  image(currentImage, posX, posY, scaledWidth, scaledHeight);
  
  // Alternate between img1 and img2 every 15 frames (typing animation)
  if (frameCount % 15 == 0) {
    if (currentImage === img1) {
      currentImage = img2;
    } else {
      currentImage = img1;
    }
  }
  
  
}

function typeNextDigits() {
  if (index >= digits.length) {
    resetSketch();
    return;
  }

  for (let k = 0; k < charsPerFrame; k++) {
    if (index >= digits.length) break;

    let d = digits[index];
    index++;

    // start lines array if empty
    if (lines.length === 0) lines.push("");

    let currentLine = lines[lines.length - 1];
    let lineWidth = textWidth(currentLine + d);

    // check if new digit fits in current line
    if (lineWidth < width - 2.3 * margin) {
      lines[lines.length - 1] += d;
    } else {
      // new line needed
      lines.push(d);

      // scrolling?
      if (lines.length > maxLines) {
        lines.shift(); // remove first line
      }
    }
  }
}

function drawLines() {
  fill(255);
  noStroke();

  // middle height starting point
  let startY = height / 2 - (lines.length * lineSpacing) / 2;

  for (let i = 0; i < lines.length; i++) {
    let y = startY + i * lineSpacing;
    text(lines[i], margin + 10, y);
  }
}

function resetSketch() {
  index = 0;
  lines = [];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  maxLines = floor((height - 2 * margin) / lineSpacing);
  resetSketch(); // resets everything on resize
}