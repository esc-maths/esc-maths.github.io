/*
  Infinite Monkey Theorem - Typing Stream Animation
  Monkey typewriter + random letter stream (infinite text canvas)
  
  The infinite monkey theorem states that if you let
  a monkey hit the keys of a typewriter at random an
  infinite amount of times, eventually the monkey will
  type out the entire works of Shakespeare.
  
  Updated: displays random letters as a flowing text column
  similar to the Pi digits visualization, with random a-z.
  Starts slow, then speeds up to normal after 8 seconds.
  
  Author: Juan Carlos Ponce Campuzano
  https://dynamicmath.xyz
*/

let img1, img2;
let currentImage;

// Text stream engine (random letters, like Pi digits but with a-z)
let letterStream = "";
let streamIndex = 0;
let margin = 60;
let lineSpacing = 26;
let charsPerFrame = 1;      // typing speed (letters per frame) - will start lower
let lines = [];             // stores visible lines of text
let maxLines;

// Letters pool (classic a-z)
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Slow start animation variables
let startTime = 0;
let slowStartDuration = 10000; // 10 seconds in milliseconds
let isSlowStart = true;
let slowCharsPerFrame = 0.15; // slower typing speed (fractional for gradual effect)

async function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier");
  textSize(20);
  textAlign(LEFT, TOP);

  // Monkey images (from original GeoGebra art)
  img1 = await loadImage('monkey-curves-left.png');
  img2 = await loadImage('monkey-curves-right.png');
  
  currentImage = img1;
  
  // Setup text stream dimensions
  maxLines = floor((height - 2 * margin) / lineSpacing);
  
  // Start with an empty buffer; first letters will be generated dynamically
  lines = [];
  streamIndex = 0;
  generateMoreRandomLetters(200); // seed some random letters initially
  
  // Visual style: subtle shadow and glow
  drawingContext.shadowBlur = 4;
  drawingContext.shadowColor = "rgba(255,255,200,0.5)";
  
  // Record start time for slow start animation
  startTime = millis();
  
  describe('The infinite monkey theorem: a monkey typing randomly will eventually produce Shakespeare. Watch random letters stream like a cosmic typewriter. Starts slow, then speeds up! ∞ 🤯');
}

function draw() {
  background(0);
  cursor(HAND);
  
  // Update typing speed based on time elapsed
  updateTypingSpeed();
  
  // Text stream: type next letters
  typeNextLetters();
  
  // Draw the visible lines (centered + scrolling)
  drawTextStream();
  
  // Monkey animation
  let scaleFactor = min(width / img1.width, height / img1.height) * 0.5;
  let scaledWidth = img1.width * scaleFactor;
  let scaledHeight = img1.height * scaleFactor;
  let posX = width * 8 / 10 - scaledWidth / 2;
  let posY = height * 8 / 10 - scaledHeight / 2;
  
  // Alternate images to simulate typing monkey movement
  if (frameCount % 15 == 0) {
    currentImage = (currentImage === img1) ? img2 : img1;
  }
  image(currentImage, posX, posY, scaledWidth, scaledHeight);
}

// Update typing speed based on elapsed time (slow start then normal)
function updateTypingSpeed() {
  let elapsed = millis() - startTime;
  
  if (elapsed < slowStartDuration) {
    isSlowStart = true;
    // Easing function: gradually increase from slowCharsPerFrame to charsPerFrame
    // t goes from 0 to 1 over the slow start duration
    let t = elapsed / slowStartDuration;
    // Use easeOutCubic for smooth acceleration
    let eased = 1 - Math.pow(1 - t, 3);
    // Interpolate between slow and normal speed
    charsPerFrame = slowCharsPerFrame + (1 - slowCharsPerFrame) * eased;
  } else {
    // After 8 seconds, run at normal speed
    if (isSlowStart) {
      isSlowStart = false;
      charsPerFrame = 1; // Normal typing speed
    }
  }
}

// Generate a random string of given length (from alphabet)
function generateMoreRandomLetters(amount) {
  let newChars = "";
  for (let i = 0; i < amount; i++) {
    newChars += alphabet.charAt(floor(random(alphabet.length)));
  }
  letterStream += newChars;
}

// Core typing engine: adds characters to the text buffer & manages lines
function typeNextLetters() {
  // Ensure we have enough random letters in stream
  if (streamIndex >= letterStream.length - 100) {
    generateMoreRandomLetters(400);
  }
  
  // Use current charsPerFrame (which may be fractional during slow start)
  // For fractional values, we probabilistically add letters
  let effectiveLetters = floor(charsPerFrame);
  let fractional = charsPerFrame - effectiveLetters;
  
  // Add the integer part
  for (let k = 0; k < effectiveLetters; k++) {
    if (streamIndex >= letterStream.length) {
      generateMoreRandomLetters(300);
      if (streamIndex >= letterStream.length) break;
    }
    addNextCharacter();
  }
  
  // Handle fractional part probabilistically
  if (fractional > 0 && random(1) < fractional) {
    if (streamIndex < letterStream.length) {
      addNextCharacter();
    }
  }
}

// Helper function to add a single character to the text stream
function addNextCharacter() {
  if (streamIndex >= letterStream.length) {
    generateMoreRandomLetters(300);
    if (streamIndex >= letterStream.length) return;
  }
  
  let ch = letterStream.charAt(streamIndex);
  streamIndex++;
  
  // Start lines array if empty
  if (lines.length === 0) {
    lines.push("");
  }
  
  let currentLine = lines[lines.length - 1];
  let testString = currentLine + ch;
  let lineWidth = textWidth(testString);
  
  // Check if new character fits within the margins
  if (lineWidth < width - 2.3 * margin) {
    lines[lines.length - 1] += ch;
  } else {
    // Need new line
    lines.push(ch);
    // Remove oldest line if exceeding max visible lines (scrolling effect)
    if (lines.length > maxLines) {
      lines.shift();
    }
  }
}

// Draw the current text lines (centered vertically, with margin box)
function drawTextStream() {
  // Draw elegant border frame
  noFill();
  stroke(255, 180);
  strokeWeight(1.2);
  rect(margin, margin, width - 2 * margin, height - 2 * margin);
  
  // Prepare text style
  fill(255, 245, 200);
  noStroke();
  textSize(20);
  textFont("Courier");
  
  if (lines.length === 0) return;
  
  // Center the block vertically
  let totalHeight = lines.length * lineSpacing;
  let startY = height / 2 - totalHeight / 2;
  
  for (let i = 0; i < lines.length; i++) {
    let y = startY + i * lineSpacing;
    // Small horizontal padding inside margin
    text(lines[i], margin + 12, y);
  }
  
  // Blinking cursor effect at the end of current line (typewriter feel)
  let lastLine = lines[lines.length - 1] || "";
  let cursorX = margin + 12 + textWidth(lastLine);
  let cursorY = startY + (lines.length - 1) * lineSpacing;
  if (frameCount % 30 < 15) {
    stroke(255, 220, 100);
    strokeWeight(2);
    line(cursorX, cursorY, cursorX, cursorY + textAscent() + 2);
  }
  
  // Show slow start indicator in corner (only during slow start)
  if (isSlowStart) {
    push();
    fill(255, 200, 100, 150);
    noStroke();
    textSize(12);
    textAlign(RIGHT, BOTTOM);
    let remaining = ceil((slowStartDuration - (millis() - startTime)) / 1000);
    text("Warming up... " + remaining + "s", width - 15, height - 15);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Recompute text layout parameters
  maxLines = floor((height - 2 * margin) / lineSpacing);
  // Reset text stream to avoid weird overflow
  resetTextStream();
}

function resetTextStream() {
  lines = [];
  streamIndex = 0;
  letterStream = "";
  generateMoreRandomLetters(300);
  // Reset the slow start timer as well
  startTime = millis();
  isSlowStart = true;
  charsPerFrame = slowCharsPerFrame;
}