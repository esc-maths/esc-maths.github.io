let data = [];

let mean = {
    x: 0,
    y: 0
};

let theta = -35;

let v1 = {
    x: 0.92,
    y: 0.39
};

let canvasSizeX = 850;
let canvasSizeY = 550;

let scale = 70;


// --------------------------------------------------
// SETUP
// --------------------------------------------------

function setup() {

    createCanvas(canvasSizeX, canvasSizeY);

    textFont("Arial");

    generateData();
}


// --------------------------------------------------
// DATA
// --------------------------------------------------

function generateData() {

    randomSeed(5);

    // Elongated cloud
    let angle = radians(23);

    let c = cos(angle);
    let s = sin(angle);

    for (let i = 0; i < 60; i++) {

        let a = randomGaussian() * 2.8;
        let b = randomGaussian() * 0.65;

        let x = a * c - b * s;
        let y = a * s + b * c;

        data.push({
            x: x,
            y: y
        });

        mean.x += x;
        mean.y += y;
    }

    mean.x /= data.length;
    mean.y /= data.length;
}


// --------------------------------------------------
// DRAW
// --------------------------------------------------

function draw() {

    background(250);

    drawAxes();

    drawData();

    drawDirection();

    drawPrincipalDirection();

    drawLabels();

}


// --------------------------------------------------
// DATA POINTS
// --------------------------------------------------

function drawData() {

    noStroke();
    fill(40, 100, 180);

    for (let p of data) {

        let x = screenX(p.x);
        let y = screenY(p.y);

        circle(x, y, 8);
    }
}


// --------------------------------------------------
// CURRENT DIRECTION v
// --------------------------------------------------

function drawDirection() {

    let v = {
        x: cos(radians(theta)),
        y: sin(radians(theta))
    };

    let originX = screenX(mean.x);
    let originY = screenY(mean.y);

    let L = 260;

    // Direction vector
    stroke(70);
    strokeWeight(3);

    line(
        originX - L * v.x,
        originY + L * v.y,
        originX + L * v.x,
        originY - L * v.y
    );

    // ------------------------------------------------
    // Projections
    // ------------------------------------------------

    for (let p of data) {

        // Centre the observation
        let x = p.x - mean.x;
        let y = p.y - mean.y;

        // Xv = projection onto v
        let projection = x * v.x + y * v.y;

        let projectedX =
            mean.x + projection * v.x;

        let projectedY =
            mean.y + projection * v.y;

        let px = screenX(p.x);
        let py = screenY(p.y);

        let qx = screenX(projectedX);
        let qy = screenY(projectedY);

        // Perpendicular projection line
        stroke(190);
        strokeWeight(1);

        line(
            px,
            py,
            qx,
            qy
        );

        // Projected point
        noStroke();
        fill(210, 60, 60);

        circle(
            qx,
            qy,
            6
        );
    }

    // Calculate ||Xv||
    let normXv = 0;

    for (let p of data) {

        let x = p.x - mean.x;
        let y = p.y - mean.y;

        let projection =
            x * v.x + y * v.y;

        normXv += projection * projection;
    }

    normXv = sqrt(normXv);

    // Display Xv norm
    noStroke();
    fill(50);

    textSize(20);

    text(
        "‖Xv‖ = " + normXv.toFixed(2),
        25,
        35
    );

    textSize(16);

    text(
        "v = (" +
        v.x.toFixed(2) +
        ", " +
        v.y.toFixed(2) +
        ")",
        25,
        62
    );
}


// --------------------------------------------------
// PRINCIPAL DIRECTION
// --------------------------------------------------

function drawPrincipalDirection() {

    let originX = screenX(mean.x);
    let originY = screenY(mean.y);

    let L = 270;

    stroke(210, 40, 40);
    strokeWeight(4);

    line(
        originX - L * v1.x,
        originY + L * v1.y,
        originX + L * v1.x,
        originY - L * v1.y
    );

    noStroke();
    fill(210, 40, 40);

    textSize(20);

    text(
        "v₁",
        originX + L * v1.x + 10,
        originY - L * v1.y
    );
}


// --------------------------------------------------
// LABELS
// --------------------------------------------------

function drawLabels() {

    noStroke();

    fill(80);

    textSize(16);

    text(
        "Drag the grey direction",
        width - 230,
        height - 25
    );

    fill(210, 40, 40);

    text(
        "principal direction",
        width - 230,
        height - 48
    );
}


// --------------------------------------------------
// AXES
// --------------------------------------------------

function drawAxes() {

    stroke(215);
    strokeWeight(1);

    // x-axis
    line(
        0,
        screenY(0),
        width,
        screenY(0)
    );

    // y-axis
    line(
        screenX(0),
        0,
        screenX(0),
        height
    );
}


// --------------------------------------------------
// COORDINATE TRANSFORMATION
// --------------------------------------------------

function screenX(x) {

    return width / 2 + x * scale;
}


function screenY(y) {

    return height / 2 - y * scale;
}


// --------------------------------------------------
// INTERACTION
// --------------------------------------------------

function mouseDragged() {

    let cx = screenX(mean.x);
    let cy = screenY(mean.y);

    let dx = mouseX - cx;
    let dy = -(mouseY - cy);

    theta = degrees(
        atan2(dy, dx)
    );
}