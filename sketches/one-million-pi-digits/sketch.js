/*
  Particle system
  Image reconstruction
  Juan Carlos Ponce Campuzano
  04/Dec/2025
  https://www.patreon.com/jcponce
  
  Still work in progress. :) 
  I will update it soon!
*/

let digits = "";
let index = 0;

let margin = 60;
let lineSpacing = 26;
let charsPerFrame = 2; // typing speed

let lines = []; // stores strings for all visible lines
let maxLines;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  // CSV with a single row: 141592...
  digits = await loadStrings(
    "https://raw.githubusercontent.com/CodingTrain/Coding-Challenges/main/097.1_Book_of_Pi_Part_1/Processing/CC_097_1_Book_of_Pi_Part_1/pi-1million.txt"
  );

  textFont("Courier");
  textSize(20);
  textAlign(LEFT, TOP);

  digits = "3." + digits[0]; // convert array → string
  maxLines = floor((height - 2 * margin) / lineSpacing);

  fill(255, 255, 255, 70);
  drawingContext.shadowBlur = 5;
  drawingContext.shadowColor = "white";
}

function draw() {
  background(0);

  // margin frame
  noFill();
  stroke(255);
  rect(margin, margin, width - 2 * margin, height - 2 * margin);

  // typing engine
  typeNextDigits();

  // draw current buffer of visible lines
  drawLines();
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
  resetSketch(); // ← resets everything on resize
}
