let iris;

async function setup() {
  createCanvas(600, 600);

  iris = await loadTable("iris/iris.data.csv", ",", "header");

  // Check the structure of the CSV
  console.log(iris.getRowCount(), iris.getColumnCount());
  console.log(iris.columns);

  noLoop();
}

function draw() {
  background(255);

  // --------------------------------------------------
  // Read the first two columns
  // --------------------------------------------------

  let x = [];
  let y = [];
  let group = [];

  for (let i = 0; i < iris.getRowCount(); i++) {
    x.push(Number(iris.getString(i, 0)));
    y.push(Number(iris.getString(i, 1)));

    // Fifth column = species/class
    group.push(iris.getString(i, 4));
  }

  // --------------------------------------------------
  // Centre the data: iris = iris - mean(iris)
  // --------------------------------------------------

  let meanX = mean(x);
  let meanY = mean(y);

  for (let i = 0; i < x.length; i++) {
    x[i] -= meanX;
    y[i] -= meanY;
  }

  // --------------------------------------------------
  // Plot
  // --------------------------------------------------

  let margin = 40;

  let minX = min(x);
  let maxX = max(x);
  let minY = min(y);
  let maxY = max(y);

  // Make the axes slightly larger than the data range
  let paddingX = 0.1 * (maxX - minX);
  let paddingY = 0.1 * (maxY - minY);

  minX -= paddingX;
  maxX += paddingX;
  minY -= paddingY;
  maxY += paddingY;

  // Axes
  stroke(0);
  strokeWeight(1);

  // x-axis
  let y0 = map(0, minY, maxY, height - margin, margin);
  line(margin, y0, width - margin, y0);

  // y-axis
  let x0 = map(0, minX, maxX, margin, width - margin);
  line(x0, margin, x0, height - margin);

  // Axis labels
  noStroke();
  fill(0);
  textSize(19);

  textAlign(CENTER);
  text("sepal length", width / 2, height - 20);

  push();
  translate(20, height / 2);
  rotate(-HALF_PI);
  text("sepal width", 0, 0);
  pop();

  // --------------------------------------------------
  // Points
  // --------------------------------------------------

  for (let i = 0; i < x.length; i++) {

    let px = map(x[i], minX, maxX, margin, width - margin);
    let py = map(y[i], minY, maxY, height - margin, margin);

    // Colour according to species
    if (group[i].includes("setosa")) {
      fill(220, 70, 70);
    } 
    else if (group[i].includes("versicolor")) {
      fill(70, 130, 220);
    } 
    else {
      fill(70, 170, 100);
    }

    noStroke();
    circle(px, py, 8);
  }

  // --------------------------------------------------
  // Tick labels
  // --------------------------------------------------

  fill(0);
  textSize(15);
  textAlign(CENTER);

  for (let v = -1; v <= 1; v += 0.5) {
    let px = map(v, minX, maxX, margin, width - margin);
    if(v != 0) text(v.toFixed(1), px, y0 + 20);
  }

  textAlign(RIGHT);

  for (let v = -1; v <= 1; v += 0.5) {
    let py = map(v, minY, maxY, height - margin, margin);
    if(v != 0) text(v.toFixed(1), x0 - 8, py + 4);
    if( v== 0 ) text(v.toFixed(0), x0 - 4, py + 20);
  }
}


// --------------------------------------------------
// Mean function
// --------------------------------------------------

function mean(values) {
  let total = 0;

  for (let value of values) {
    total += value;
  }

  return total / values.length;
}