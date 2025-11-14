let arLength;
let period = 100; // fixed medium period
let stepSize = 10;
let ar1 = [];
let ar2 = [];

//=================================================================
function setup() {
  createCanvas(windowWidth, windowHeight);
  arLength = width;
  generateData();
}

//=================================================================
function limit(val, min, max) {
  if (val < min) return min;
  else if (val > max) return max;
  else return val;
}

//=================================================================
function draw() {
  background(40, 40, 40);

  // guide lines
  strokeWeight(2);
  stroke(100);
  line(0, height / 2, width, height / 2);
  strokeWeight(1);
  line(0, height * 0.2, width, height * 0.2);
  line(0, height * 0.8, width, height * 0.8);

  let val = 0;
  let prevVal = 0;

  for (let i = 1; i < ar1.length; i++) {
    // draw correlation (start at x = 0, full width)
    if (i >= period) {
      prevVal = val;
      val = correlation(i, period);
      stroke(200);
      strokeWeight(1.5);
      line(
        map(i - period, 0, ar1.length - period, 0, width),
        map(val, -1, 1, height, 0),
        map(i - 1 - period, 0, ar1.length - period, 0, width),
        map(prevVal, -1, 1, height, 0)
      );
    }

    // draw datasets
    stroke(255, 0, 0);
    strokeWeight(2);
    line(
      map(i, 0, ar1.length, 0, width),
      ar1[i],
      map(i - 1, 0, ar1.length, 0, width),
      ar1[i - 1]
    );

    stroke(0, 0, 250);
    line(
      map(i, 0, ar2.length, 0, width),
      ar2[i],
      map(i - 1, 0, ar2.length, 0, width),
      ar2[i - 1]
    );
  }
}

//=================================================================
// This calculates the Pearson correlation coefficient
// over the last period points up to index i.
function correlation(i, period) {
  let retVal = 0;
  let sd1 = standardDeviation(ar1, i, period);
  let sd2 = standardDeviation(ar2, i, period);
  let mean1 = getAverage(ar1, i, period);
  let mean2 = getAverage(ar2, i, period);

  for (let j = 0; j < period; j++) {
    let tmp1 = (ar1[i - j] - mean1) / sd1;
    let tmp2 = (ar2[i - j] - mean2) / sd2;
    retVal += tmp1 * tmp2;
  }
  return retVal / (period - 1);
}

//=================================================================
function getAverage(ar, i, period) {
  let avg = 0;
  for (let p = 0; p < period; p++) {
    avg += ar[i - p];
  }
  return avg / period;
}

//=================================================================
function standardDeviation(ar, i, period) {
  let avg = getAverage(ar, i, period);
  let sd = 0;
  for (let j = 0; j < period; j++) {
    sd += sq(ar[i - j] - avg);
  }
  sd /= (period - 1);
  return sqrt(sd);
}

//=================================================================
function mousePressed() {
  generateData(); // click to regenerate random data
}

//=================================================================
function generateData() {
  ar1 = new Array(arLength);
  ar2 = new Array(arLength);
  ar1[0] = height / 2;
  ar2[0] = height / 2;

  for (let i = 1; i < arLength; i++) {
    ar1[i] = limit(ar1[i - 1] + random(-stepSize, stepSize), 0, height);
    ar2[i] = limit(ar2[i - 1] + random(-stepSize, stepSize), 0, height);
  }
}
