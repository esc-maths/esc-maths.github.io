
let binaryLines = []; // Array to store binary lines
let charSize = 20; // Size of characters
let lineSpacing = 20; // Spacing between lines
let lineLength; // Maximum characters per line
let typingSpeed = 10; // Speed of typing (characters per second)
let canvasPadding = 20; // Padding around the canvas
let canvasFilled = false; // Flag to track if canvas is filled

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(charSize);
  frameRate(8);

  updateLineLength();
}

function draw() {
  background(0);

  // Add a new line with binary digits
  if (frameCount % round(frameRate() / typingSpeed) == 0) {
    let newLine = '';
    let brightnessList = [];

    for (let i = 0; i < lineLength; i++) {
      let brightness = random(0, 1);
      brightnessList.push(brightness);

      let character = random() < brightness ? '1' : '0';
      newLine += character;
    }

    // Add the new line
    binaryLines.unshift({
      text: newLine,
      brightnessList: brightnessList
    });

    // Remove excess lines if the canvas is filled
    if (canvasFilled) {
      binaryLines.pop();
    }

    // Update the canvasFilled flag
    canvasFilled =
      binaryLines.length * lineSpacing >= height - canvasPadding * 4;
  }

  // Display binary lines with varying brightness
  for (let i = 0; i < binaryLines.length; i++) {
    let yPos =
      height - (binaryLines.length - i) * lineSpacing - canvasPadding;

    let lines = binaryLines[i];

    for (let j = 0; j < lines.text.length; j++) {
      let x = canvasPadding + j * charSize;
      let character = lines.text[j];
      let brightness = lines.brightnessList[j];

      let alpha = brightness < 0.4 ? 90 : 250;

      fill(0, 255, 0, alpha);
      text(character, x, yPos);
    }
  }
}

// Calculate the number of characters that fit across the canvas
function updateLineLength() {
  lineLength = floor((width - canvasPadding * 2) / charSize);
}

// Resize the canvas when the window changes size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateLineLength();

  // Reset existing lines to match the new width
  binaryLines = [];
  canvasFilled = false;
}