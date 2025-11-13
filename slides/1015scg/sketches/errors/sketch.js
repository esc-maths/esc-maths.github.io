let values = [];
let errors = [];
let maxRows = 10;
let counter = 0;
let delay = 20;

function setup() {
  createCanvas(420, 380);
  
  textFont('Courier New');
  textSize(20);
  textAlign(CENTER, CENTER);
  frameRate(60);
}

function draw() {
  background(10);

   // green glowing color
  drawingContext.shadowBlur = 15;        // intensity of glow
  drawingContext.shadowColor = color(102, 255, 102);
  fill(102, 255, 102);
  
  textSize(24);
  text("Value", width * 0.3, 40);
  text("Error", width * 0.7, 40);

  // add a new value every few frames
  if (frameCount % delay === 0) {
    let val = random(5, 20).toFixed(2);
    let err = random(0.01, 1).toFixed(2);
    values.push(val);
    errors.push(err);
    counter++;

    // keep only the last 100 entries
    if (values.length > 100) {
      values.shift();
      errors.shift();
    }
  }

  // determine visible rows (max 10)
  let total = values.length;
  let firstRow = max(0, total - maxRows);
  let lastRow = total; // now bounded by available data

  // draw visible rows safely
  for (let i = firstRow; i < lastRow; i++) {
    let rowIndex = i - firstRow;
    let y = 80 + rowIndex * 30;

    // check that data exists
    if (values[i] !== undefined && errors[i] !== undefined) {
      text(values[i], width * 0.3, y);
      text("± " + errors[i], width * 0.7, y);
    }
  }

  // reset glow for other drawing
  drawingContext.shadowBlur = 0;
}
