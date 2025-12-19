let codeLines = [];
let maxLines;
let fontSize = 20;
let margin = 70;
let scrollSpeed = 35; // Number of frames per line scroll (smaller = faster)
let frameCounter = 0;
let nextY; // y-position for the next line

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
  textFont('monospace');
  textSize(fontSize);
  frameRate(60);

  // start y in the middle of the canvas
  nextY = height / 2;
}

function draw() {
  background(0);
  // green glowing color
  // drawingContext.shadowBlur = 3;        // intensity of glow
  // drawingContext.shadowColor = color(102, 255, 102);

  // Draw all lines
  for (let i = 0; i < codeLines.length; i++) {
    drawGlowingText(codeLines[i].text, codeLines[i].x, codeLines[i].y);
  }

  // Scroll based on speed
  frameCounter++;
  if (frameCounter >= scrollSpeed) {
    frameCounter = 0;

    // Add a new random line at nextY
    let newLine = {
      text: random(funSnippets),
      x: margin,
      y: nextY
    };
    codeLines.push(newLine);

    // Move nextY down by font size
    nextY += fontSize;

    // If the next line would go below canvas, scroll all lines up
    if (nextY + fontSize > height - margin) {
      for (let i = 0; i < codeLines.length; i++) {
        codeLines[i].y -= fontSize;
      }
      nextY -= fontSize;
    }

    // Optionally remove lines that move above the top margin
    codeLines = codeLines.filter(line => line.y > margin - fontSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // reset nextY to middle
  nextY = height / 2;
}

// Draw glowing text
function drawGlowingText(txt, x, y) {
  for (let i = 4; i > 0; i--) {
    fill(0, 255, 70, 40 * i);
    text(txt, x, y);
  }
  fill(0, 255, 70);
  text(txt, x, y);
}
