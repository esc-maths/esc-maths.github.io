/*
  Infinite Monkey Theorem - Pi Digits Stream + Monkey Animation
  Updated for p5.js 2.0
  Starts after 5 seconds, begins slowly, then speeds up to normal
  Monkey only starts moving when the animation begins
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

// Slow start animation variables
let startTime = 0;
let slowStartDelay = 5000;      // 5 seconds delay before starting
let slowStartDuration = 8000;    // 8 seconds of gradual speed increase
let isStarted = false;
let isSlowStart = true;
let slowCharsPerFrame = 0.15;    // Initial very slow speed

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
  
  // Record start time for slow start animation
  startTime = millis();

  describe('Streaming digits of Pi with a typing monkey animation. Starts after 5 seconds, begins slowly, then speeds up!');
}

function draw() {
  background(0);
  cursor(HAND);

  // Frame
  noFill();
  stroke(255);
  rect(margin, margin, width - 2 * margin, height - 2 * margin);

  // Update typing speed based on time elapsed
  updateTypingSpeed();
  
  // Only show digits after the delay
  if (isStarted) {
    typeNextDigits();
    drawLines();
  } else {
    // Show "Starting soon" message
    drawWaitingMessage();
  }
  
  drawMonkey();
}

// Update typing speed based on elapsed time (delay → slow start → normal)
function updateTypingSpeed() {
  let elapsed = millis() - startTime;
  
  // Check if we're still in the initial delay
  if (!isStarted) {
    if (elapsed >= slowStartDelay) {
      isStarted = true;
      isSlowStart = true;
      charsPerFrame = slowCharsPerFrame;
    }
    return;
  }
  
  // After delay, handle the slow start gradual acceleration
  let slowStartElapsed = elapsed - slowStartDelay;
  
  if (slowStartElapsed < slowStartDuration) {
    isSlowStart = true;
    // t goes from 0 to 1 over the slow start duration
    let t = slowStartElapsed / slowStartDuration;
    // Use easeOutCubic for smooth acceleration
    let eased = 1 - Math.pow(1 - t, 3);
    // Interpolate between slow and normal speed
    charsPerFrame = slowCharsPerFrame + (1 - slowCharsPerFrame) * eased;
  } else {
    // After slow start, run at normal speed
    if (isSlowStart) {
      isSlowStart = false;
      charsPerFrame = 1; // Normal typing speed (1 digit per frame)
    }
  }
}

// Draw waiting message during the initial 5-second delay
function drawWaitingMessage() {
  let elapsed = millis() - startTime;
  let remaining = ceil((slowStartDelay - elapsed) / 1000);
  
  push();
  fill(255, 200, 100, 200);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Starting in " + remaining + "...", width / 2, height / 2);
  
  // Subtitle
  textSize(14);
  fill(255, 200, 100, 150);
  text("The monkey is preparing to type \n1 million π digits", width / 2, height / 2 + 40);
  pop();
}

function typeNextDigits() {
  if (!digits || index >= digits.length) {
    resetSketch();
    return;
  }

  // Use current charsPerFrame (which may be fractional during slow start)
  let effectiveLetters = floor(charsPerFrame);
  let fractional = charsPerFrame - effectiveLetters;
  
  // Add the integer part
  for (let k = 0; k < effectiveLetters; k++) {
    if (index >= digits.length) break;
    addNextDigit();
  }
  
  // Handle fractional part probabilistically (for smooth slow start)
  if (fractional > 0 && random(1) < fractional) {
    if (index < digits.length) {
      addNextDigit();
    }
  }
}

// Helper function to add a single digit
function addNextDigit() {
  if (index >= digits.length) return;
  
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

  // Monkey only starts animating when the digits start streaming
  if (isStarted && frameCount % 15 === 0) {
    currentImage = (currentImage === img1) ? img2 : img1;
  }
}

function resetSketch() {
  index = 0;
  lines = [];
  // Reset timing variables for a fresh start
  startTime = millis();
  isStarted = false;
  isSlowStart = true;
  charsPerFrame = slowCharsPerFrame;
  currentImage = img1; // Reset monkey to default pose
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  maxLines = floor((height - 2 * margin) / lineSpacing);
  resetSketch();
}