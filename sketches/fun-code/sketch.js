let codeLines = [];
let fontSize = 20;
let margin = 70;
let scrollSpeed = 35; // frames between new lines
let frameCounter = 0;
let nextY;

// Typing state
let typingSpeed = 2; // frames per character (smaller = faster)
let typingCounter = 0;
let currentSnippet = "";
let currentIndex = 0;
let isTyping = false;

// Cursor
let cursorBlinkSpeed = 10;
let cursorVisible = true;
let cursorCounter = 0;
let cursorSize = 16;

let funSnippets = [
  "while(alive) { code(); }",
  "if(coffee) { awake = true; }",
  "for(let i=0; i<infinity; i++) { debug(); }",
  "function sleep() { dream(); }",
  "try { hack(); } catch(e) { panic(); }",
  "const happiness = Math.random() > 0.5 ? 'yes' : 'no';",
  "console.log('Keep coding!');",
  "if(deadline) { panic(); }",
  "document.getElementById('life').innerHTML = 'code';",
  "while(!success) { iterate(); }",
  "if(error) { scream(); }",
  "while(bored) { explore(); }",
  "const coffee = getCoffee();",
  "if(nap) { dreamOfCode(); }",
  "console.warn('Too many bugs!');",
  "for(let day=0; day<7; day++) { code(); }",
  "try { finishProject(); } catch(e) { startOver(); }",
  "debug(); debug(); debug();",
  "while(!weekend) { survive(); }",
  "const mood = Math.random() > 0.5 ? 'happy' : 'confused';",
  "console.log('Debugging life...');",
  "if(lunch) { eat(); } else { code(); }",
  "for(let bug=0; bug<Infinity; bug++) { fix(); }",
  "function procrastinate() { avoidResponsibility(); }",
  "while(true) { code(); sleep(); repeat(); }"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(fontSize);
  frameRate(60);

  nextY = height / 2;
}

function draw() {
  background(0);

  // Draw existing lines
  for (let line of codeLines) {
    drawGlowingText(line.text, line.x, line.y);
  }

  // Cursor blinking
  cursorCounter++;
  if (cursorCounter >= cursorBlinkSpeed) {
    cursorCounter = 0;
    cursorVisible = !cursorVisible;
  }

  // Typing logic
  frameCounter++;
  if (frameCounter >= scrollSpeed && !isTyping) {
    frameCounter = 0;
    startTyping();
  }

  if (isTyping) {
    typeCharacter();
  }

  // Draw cursor
  if (cursorVisible && codeLines.length > 0) {
    drawCursor();
  }
}

// -------------------------
// Typing control
// -------------------------
function startTyping() {
  currentSnippet = random(funSnippets);
  currentIndex = 0;
  isTyping = true;

  codeLines.push({
    text: "",
    x: margin,
    y: nextY
  });
}

function typeCharacter() {
  typingCounter++;
  if (typingCounter < typingSpeed) return;
  typingCounter = 0;

  let currentLine = codeLines[codeLines.length - 1];
  currentLine.text += currentSnippet[currentIndex];
  currentIndex++;

  if (currentIndex >= currentSnippet.length) {
    isTyping = false;
    nextY += fontSize;
    handleScroll();
  }
}

// -------------------------
// Scrolling logic
// -------------------------
function handleScroll() {
  if (nextY + fontSize > height - margin) {
    for (let line of codeLines) {
      line.y -= fontSize;
    }
    nextY -= fontSize;
  }

  codeLines = codeLines.filter(line => line.y > margin - fontSize);
}

// -------------------------
// Cursor
// -------------------------
function drawCursor() {
  let lastLine = codeLines[codeLines.length - 1];
  let cursorX = lastLine.x + textWidth(lastLine.text) + 6;
  let cursorY = lastLine.y - fontSize + 4;

  drawingContext.shadowBlur = 6;
  drawingContext.shadowColor = color(0, 255, 70);

  noStroke();
  fill(0, 255, 70);
  rect(cursorX, cursorY, cursorSize, cursorSize);

  drawingContext.shadowBlur = 0;
}

// -------------------------
// Glowing text
// -------------------------
function drawGlowingText(txt, x, y) {
  for (let i = 4; i > 0; i--) {
    fill(0, 255, 70, 40 * i);
    text(txt, x, y);
  }
  fill(0, 255, 70);
  text(txt, x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  nextY = height / 2;
}
