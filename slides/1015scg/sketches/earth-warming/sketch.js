/*
 https://edhawkins.org/

 Data from NASA:
 https://data.giss.nasa.gov/gistemp/
 https://data.giss.nasa.gov/gistemp/faq/
*/

// Data properties
const anomin  = -1.0;        // anomaly value at the origin (must be < 0)
const anomax  =  1.5;        // anomaly value at the edge (must be > 0)
const refs    = [0, 1, 1.5]; // reference circles
const invalid = '***';       // placeholder for unavailable data in the CSV file

// Visualisation parameters
const textalignbug = false; // when I built this on MacOS with latest Firefox and p5js 1.6.0, textAlign([...],CENTER) didn't work properly
const canvassize   = 500;   // square canvas width and height in pixels
const bgcolour     = 0;     // black
const gridcolour   = 102;   // grey
const axescolour   = 153;   // light grey
const labelcolour  = 255;   // white
const margin   = 0.12;      // 12% margin around the graph, month labels go here
const gridstep = 0.5;       // gridline every 0.5 degree celsius
const ticksize = 0.03;      // size of ticks on axes in scaled coordinates
let cool, neutral, warm;    // temperature anomaly colours defined in setup()

// Derived constants for internal use
const range       = anomax - anomin;                // axes go from -range to +range in scaled coordinates
const origin      = canvassize / 2;                 // origin centered on the canvas
const scalefactor = origin / (1 + margin) / range;  // for graph grid [-range..+range] with 12% margin
const pixelsize   = 1 / scalefactor;                // size of 1 pixel in scaled coordinates
const borderdist  = origin * pixelsize;             // distance from origin to canvas border in scaled coordinates
const textheight1 = 20 * borderdist / 400;          // 20px in scaled coordinates (for canvassize=800)
const textheight2 = 50 * borderdist / 400;          // 50px in scaled coordinates (for canvassize=800)
const bug2px  = textalignbug ?  2 * pixelsize : 0;  //  2px correction for textAlign([...],CENTER) bug on MacOS/Firefox
const bug7px  = textalignbug ?  7 * pixelsize : 0;  //  7px correction for textAlign([...],CENTER) bug on MacOS/Firefox
const bug16px = textalignbug ? 16 * pixelsize : 0;  // 16px correction for textAlign([...],CENTER) bug on MacOS/Firefox
const label_n = 12;                                 // number of labels = 12 months in a year
const label_a = 2 * Math.PI / label_n;              // label angle = month labels 30 degrees apart
const label_r = -range * (1 + margin / 2) + bug2px; // label radius = month labels in middle of margin, start at centre-top
const rangelog = (Math.exp(range) - 1) / range;     // range scaling for logarithmic graph
const gridcount = Math.round(range / gridstep);     // how many gridlines from anomin to anomax
const tickstep = gridstep / 4;                      // 3 ticks between gridlines
const tickcount = Math.round(range / tickstep) + 3; // how many ticks from anomin to anomax, +3 outside last gridline

// Variables
let mapping = rlin;      // axis scaling = linear (rlin), quadratic (rsqr), logarithmic (rlog)
let data, labels;        // labels = month names from CSV header row
let index = 0, maxindex; // animation progression, number of data points on file
let dir;                 // direction vectors corresponding to labels (=month names)
let chkGrid, chkAxes, chkTicks, scaling, timeindex; // checkboxes, radiobuttons, slider
let running = true;      // draw loop always runs to enable interaction, this controls the animation

// Linear translation from degrees celsius to circle radius
function rlin(celsius) {
    const distTemp = celsius - anomin;
    return distTemp > 0 ? distTemp : 0; // linear map [min..max] => [0..range]
}

// Quadratic translation from degrees celsius to circle radius
function rsqr(celsius) {
    const distTemp = celsius - anomin;
    return distTemp > 0 ? Math.sqrt(distTemp * range) : 0; // sqrt map [min..max] => [0..range]
}

// Logarithmic translation from degrees celsius to circle radius
function rlog(celsius) {
    const distTemp = celsius - anomin;
    return distTemp > 0 ? Math.log(1 + distTemp * rangelog) : 0; // log map [min..max] => [0..range]
}

// Show grid
function showgrid() {
    stroke(gridcolour);
    strokeWeight(0.5 * pixelsize);
    noFill();
    // Gridlines on the axes
    line(0, -borderdist, 0, borderdist);
    line(-borderdist, 0, borderdist, 0);
    // Other gridlines
    for (let i = 1; i <= gridcount; ++i) {
        const c = anomin + i * gridstep; // temperature anomaly in celsius
        const r = mapping(c);            // circle radius
        line(r, -borderdist, r, borderdist);
        line(-r, -borderdist, -r, borderdist);
        line(-borderdist, r, borderdist, r);
        line(-borderdist, -r, borderdist, -r);
    }
}

// Show axes and ticks
function showaxes(showticks) {
    stroke(axescolour);
    strokeWeight(1 * pixelsize);
    noFill();
    // Axes
    line(0, -borderdist, 0, borderdist);
    line(-borderdist, 0, borderdist, 0);
    // Ticks
    if (showticks) {
        for (let i = 1; i <= tickcount; ++i) {
            const c = anomin + i * tickstep; // temperature anomaly in celsius
            const r = mapping(c);            // circle radius
            line(r, -ticksize, r, ticksize);
            line(-r, -ticksize, -r, ticksize);
            line(-ticksize, r, ticksize, r);
            line(-ticksize, -r, ticksize, -r);
        }
    }
}

// Colour gradient depends on temperature anomaly in degrees celsius
function gradient(celsius) {
    if (celsius >= 0)
        return lerpColor(neutral, warm, celsius / anomax); // anomylymax > 0
    return lerpColor(neutral, cool, celsius / anomin);     // anomalymin < 0
}

// Reference circle for the climate spiral
function refcircle(celsius) {
    const c = gradient(celsius); // colour
    const r = mapping(celsius);  // circle radius
    textSize(textheight1);       // set before call to textWidth()
    const labeltext = nf(celsius, 1, 1) + '°C';
    const labelsize = textWidth(labeltext);
    const labelpos = -r;         // y direction still screen-like, otherwise text would be upside down
    // Circle
    stroke(c);
    strokeWeight(4 * pixelsize);
    noFill();
    circle(0, 0, r * 2);
    // Label on background
    noStroke();
    fill(bgcolour); // erase for label
    rect(0, labelpos, labelsize + 8 * pixelsize, textheight1 + 2 * pixelsize); // plus a few pixels margin for legibility
    fill(c);
    text(labeltext, 0, labelpos + bug7px); // 7px correction for textAlign([...],CENTER) bug on MacOS/Firefox
}

// If axes not shown then also disable ticks
function axeschanged() {
    if (!this.checked() && chkTicks.checked())
        chkTicks.checked(false);
}

// If ticks enabled then also show axes
function tickschanged() {
    if (this.checked() && !chkAxes.checked())
        chkAxes.checked(true);
}

// Axis scaling = lin/sqrt/log
function scalingchanged() {
    switch (this.value()) {
        case '1': mapping = rlin; break;
        case '2': mapping = rsqr; break;
        case '3': mapping = rlog; break;
    }
}

// Stop animation when slider manually adjusted
function slidermove() {
    if (running)
        running = false;
}

// Start/stop animation when canvas clicked, or else propagate click
function mouseClicked() {
    if (mouseX >= 0 && mouseY >= 0 && mouseX < canvassize && mouseY < canvassize) {
        running = !running;
        return false;
    }
}

// Load CSV data of monthly global mean temperature anomalies
// File downloaded from https://data.giss.nasa.gov/gistemp/
//   "Global-mean monthly, seasonal, and annual means, 1880-present"
// Hand-edited to remove title on first line, now starts with header row
// function preload() {
//     data = loadTable("global-temp-anomaly.csv", "csv", "header");
// }

function preload(){
   // Load your CSV file (must be accessible: uploaded or served)
  data = loadTable('global-temp-anomaly.csv', 'csv', 'header');
}


function setup() {

    labels = data.columns.slice(1, label_n + 1); // month names are in header row, columns 1-12
    const rows = data.getRowCount();
    maxindex = label_n * rows - 1; // max index is 1 fewer than count = 12 columns * number of rows
    for (let i = label_n - 1; i >= 0; --i) {
        // check data on last row, from last column backwards
        const s = data.getString(rows - 1, labels[i]);
        if (s === invalid) // data not available yet?
            --maxindex;    // then 1 fewer data point
        else
            break;         // stop checking on first valid data
    }
    dir = new Array(label_n); // 12 direction vectors
    for (let i = 0; i < label_n; ++i) {
        // start at centre-top (for 12 labels and screen-like y direction)
        // increase angle (=clockwise) by same amount as between month labels
        const a = (i - 3) * label_a;
        dir[i] = {x: Math.cos(a), y: Math.sin(a)};
    }
    createCanvas(canvassize, canvassize);
    colorMode(RGB);
    cool    = color(  0,   0, 255); // blue  for temperature anomaly < 0
    neutral = color(255, 255, 255); // white for temperature anomaly = 0
    warm    = color(255,   0,   0); // red   for temperature anomaly > 0
    rectMode(CENTER);
    textAlign(CENTER, CENTER); // see also global const 'textalignbug'
    timeindex = createSlider(0, maxindex);
    timeindex.style('width', `${canvassize-50}px`);
    timeindex.position(25, height + 5);
    timeindex.mousePressed(slidermove); // stop animation if adjusted
    // chkGrid = createCheckbox('grid', true);
    // chkAxes = createCheckbox('axes', false);
    // chkAxes.changed(axeschanged);
    // chkTicks = createCheckbox('ticks', false);
    // chkTicks.changed(tickschanged);
    scaling = createRadio();
    scaling.style('font-size', '1.5em');
    scaling.position(width/2 - 100, height + 30);
    scaling.option('1', 'linear &nbsp;');
    scaling.option('2', 'sqrt &nbsp;');
    scaling.option('3', 'log');
    scaling.selected('1');
    scaling.changed(scalingchanged); // avoid expensive check in draw() loop
}

function draw() {
    // Erase canvas, set origin/scale
    background(bgcolour);
    translate(origin, origin);
    scale(scalefactor);

    // Show progress or jump to time index
    if (running)
        timeindex.value(index);
    else
        index = timeindex.value();

    // // Grid and axes
    // if (chkGrid.checked())
    //     showgrid();
    // if (chkAxes.checked())
    //     showaxes(chkTicks.checked());

    // Reference circles
    for (let i = 0; i < refs.length; ++i)
        refcircle(refs[i]);

    // Month labels, directly behind refcircles to reuse settings
    fill(labelcolour);
    // textSize(textheight1); // same as labels on refcircles, no need to set again here
    // noStroke();
    for (let i = 0; i < label_n; ++i) {
        text(labels[i], 0, label_r); // centre-top for current rotation
        rotate(label_a); // circle divided by 12 months = 30 degrees
    } // back at normal rotation

    // Year label, directly behind month labels to reuse settings
    textSize(textheight2);
    // noStroke(); // same as month labels, no need to set again here
    // fill(labelcolour);
    const curyear = Math.floor(index / label_n);   // year = index div 12
    text(data.getString(curyear, 0), 0, bug16px); // 16px correction for textAlign([...],CENTER) bug on MacOS/Firefox

    // Lines from point to point
    strokeWeight(2 * pixelsize);
    noFill();
    let t0 = data.getNum(0, labels[0]); // first temperature anomaly in the set (row 0, col 'Jan' = Jan 1880)
    const r0 = mapping(t0); // circle radius
    let x0 = r0 * dir[0].x;
    let y0 = r0 * dir[0].y;
    let yr = 0, mn = 1; // keep track of year/month in the loop (month starts at 1) to avoid div/mod
    for (let i = 1; i <= index; ++i) {         // fast & simple loop up to & including index = maxindex
        const t = data.getNum(yr, labels[mn]); // these are all valid as checked in setup()
        const r = mapping(t);
        const x = r * dir[mn].x;
        const y = r * dir[mn].y;
        stroke(gradient((t0 + t) / 2));
        line(x0, y0, x, y);
        // Remember for next loop
        t0 = t;
        x0 = x;
        y0 = y;
        // Next month/year
        if (++mn == label_n) {
            mn = 0;
            ++yr;
        }
    }

    // Next animation step
    if (running) {
        if (index < maxindex - 2)
            index = index + 2;
        else
            running = false;
    }
}