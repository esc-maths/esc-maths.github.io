/*
 Data Visualisation: Global warming
 Cartesian polyline version (rectangular canvas)
*/

// =====================
// Data properties
// =====================
const anomin = -1.0;
const anomax = 1.5;
const invalid = '***';

// =====================
// Visual parameters
// =====================
const canvasW = 800;
const canvasH = 500;

const bgcolour = 0;
const axescolour = 153;
const labelcolour = 255;

const leftMargin = 60;
const rightMargin = 20;
const topMargin = 40;
const bottomMargin = 40;

const yTickStep = 0.5;   // °C between labels
const yTickSize = 6;     // pixels
const xTickSize = 6;     // pixels
const yearStep  = 20;    // years between labels


let cool, neutral, warm;

// =====================
// Variables
// =====================
let mapping = rlin;
let data, labels;
let index = 0, maxindex;
let scaling, timeindex;
let running = true;

// =====================
// Scaling functions
// =====================
function rlin(c) {
    return map(c, anomin, anomax, 0, plotH);
}

function rsqr(c) {
    const t = map(c, anomin, anomax, 0, 1);
    return sqrt(max(0, t)) * plotH;
}

function rlog(c) {
    const t = map(c, anomin, anomax, 0, 1);
    return log(1 + 9 * max(0, t)) / log(10) * plotH;
}

// =====================
// Colour gradient
// =====================
function gradient(celsius) {
    if (celsius >= 0)
        return lerpColor(neutral, warm, celsius / anomax);
    return lerpColor(neutral, cool, celsius / anomin);
}

// =====================
// Load data
// =====================
function preload() {
    data = loadTable('global-temp-anomaly.csv', 'csv', 'header');
}

// =====================
// Setup
// =====================
let plotW, plotH;

function setup() {
    createCanvas(canvasW, canvasH);

    plotW = width - leftMargin - rightMargin;
    plotH = height - topMargin - bottomMargin;

    labels = data.columns.slice(1, 13);
    const rows = data.getRowCount();
    maxindex = 12 * rows - 1;

    for (let i = 11; i >= 0; --i) {
        if (data.getString(rows - 1, labels[i]) === invalid)
            maxindex--;
        else break;
    }

    colorMode(RGB);
    textAlign(CENTER, CENTER);

    cool = color(0, 0, 255);
    neutral = color(255);
    warm = color(255, 0, 0);

    timeindex = createSlider(0, maxindex);
    timeindex.style('width', `${canvasW - 80}px`);
    timeindex.position(40, height + 5);
    timeindex.mousePressed(() => running = false);

    scaling = createRadio();
    scaling.style('font-size', '1.5em');
    scaling.position(width / 2 - 100, height + 35);
    scaling.option('1', 'linear ');
    scaling.option('2', 'sqrt ');
    scaling.option('3', 'log');
    scaling.selected('1');
    scaling.changed(() => {
        mapping = scaling.value() === '1' ? rlin :
            scaling.value() === '2' ? rsqr : rlog;
    });
}

// =====================
// Draw
// =====================
function draw() {
    background(bgcolour);

    if (running)
        timeindex.value(index);
    else
        index = timeindex.value();

    // Move origin to bottom-left of plot
    translate(leftMargin, height - bottomMargin);

    // Axes
    stroke(axescolour);
    strokeWeight(1);
    line(0, 0, plotW, 0);        // x-axis
    line(0, 0, 0, -plotH);       // y-axis

    // Year label
    fill(labelcolour);
    textSize(24);
    noStroke();
    const year = Math.floor(index / 12);
    text(data.getString(year, 0), plotW / 2, -plotH - 20);

    // Polyline
    noFill();
    strokeWeight(2);

    let yr = 0, mn = 0;
    let t0 = data.getNum(0, labels[0]);
    let x0 = 0;
    let y0 = -mapping(t0);

    for (let i = 1; i <= index; ++i) {
        mn++;
        if (mn === 12) {
            mn = 0;
            yr++;
        }

        const t = data.getNum(yr, labels[mn]);
        const x = map(i, 0, maxindex, 0, plotW);
        const y = -mapping(t);

        stroke(gradient((t0 + t) / 2));
        line(x0, y0, x, y);

        x0 = x;
        y0 = y;
        t0 = t;
    }

    // Axes
    stroke(axescolour);
    strokeWeight(1);
    line(0, 0, plotW, 0);      // x-axis
    line(0, 0, 0, -plotH);     // y-axis

    drawYAxisLabels();
    drawXAxisLabels();

    // Animation step
    if (running) {
        if (index < maxindex - 2)
            index += 2;
        else
            running = false;
    }
}

// =====================
// Axes info
// =====================
function drawYAxisLabels() {
    stroke(axescolour);
    fill(labelcolour);
    textSize(12);
    textAlign(RIGHT, CENTER);

    for (let t = anomin; t <= anomax + 0.001; t += yTickStep) {
        const y = -mapping(t);

        // Tick
        line(-yTickSize, y, 0, y);

        // Label
        noStroke();
        text(nf(t, 1, 1) + '°C', -yTickSize - 6, y);
        stroke(axescolour);
    }
}

function drawXAxisLabels() {
    stroke(axescolour);
    fill(labelcolour);
    textSize(12);
    textAlign(CENTER, TOP);

    const rows = data.getRowCount();

    for (let r = 0; r < rows; r += yearStep) {
        const year = int(data.getString(r, 0));
        const i = r * 12; // convert year row to month index

        if (i > maxindex) break;

        const x = map(i, 0, maxindex, 0, plotW);

        // Tick
        line(x, 0, x, xTickSize);

        // Label
        noStroke();
        text(year, x, xTickSize + 4);
        stroke(axescolour);
    }
}



// =====================
// Interaction
// =====================
function mouseClicked() {
    if (mouseX >= 0 && mouseY >= 0 &&
        mouseX < width && mouseY < height) {
        running = !running;
        return false;
    }
}
