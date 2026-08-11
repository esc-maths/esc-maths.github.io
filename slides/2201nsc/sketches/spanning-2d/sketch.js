let v1 = { x: -3, y: 1 };
let v2 = { x: 1, y: 3 };

let scale = 55;

// coefficient range
let minCoeff = -3;
let maxCoeff = 3;
let step = 0.25;

// Store previous vectors
let traces = [];

let a = minCoeff;
let b = minCoeff;

let timer = 0;
let delay = 3;

let animating = false;
let spanButton;


// ==================================================
// Setup
// ==================================================

function setup() {

    createCanvas(850, 550);

    angleMode(RADIANS);

    // Create button
    spanButton = createButton("Span");

    spanButton.style("font-size", "16px");
    spanButton.style("padding", "6px 18px");
    spanButton.style("cursor", "pointer");

    // Position at bottom centre of canvas
    spanButton.position(
        10,
        height - 45
    );

    spanButton.mousePressed(toggleAnimation);
}


// ==================================================
// Draw
// ==================================================

function draw() {

    background(250);

    push();

    translate(width / 2, height / 2);

    drawGrid();
    drawAxes();

    // Previous vectors
    for (let v of traces) {
        drawTrace(v.x, v.y);
    }

    // Current vector
    let x = a * v1.x + b * v2.x;
    let y = a * v1.y + b * v2.y;

    drawCombination(x, y, a, b);

    // Original spanning vectors
    drawVector(v1, "v₁");
    drawVector(v2, "v₂");

    pop();


    // ==================================================
    // Animation
    // ==================================================

    if (animating) {

        timer++;

        if (timer > delay) {

            timer = 0;

            // Save current vector
            traces.push({
                x: x,
                y: y
            });

            // Move left → right
            a += step;

            // Move to next row
            if (a > maxCoeff) {

                a = minCoeff;
                b += step;
            }

            // Finished entire span
            if (b > maxCoeff) {

                animating = false;

                spanButton.html("Span");

                a = minCoeff;
                b = minCoeff;
            }
        }
    }
}


// ==================================================
// Start / Stop
// ==================================================

function toggleAnimation() {

    animating = !animating;

    if (animating) {

        spanButton.html("Stop");

    } else {

        spanButton.html("Span");
    }
}


// ==================================================
// Coordinate axes
// ==================================================

function drawAxes() {

    stroke(80);
    strokeWeight(1);

    // x-axis
    line(-width / 2, 0, width / 2, 0);

    // y-axis
    line(0, -height / 2, 0, height / 2);

    // Arrow heads
    drawArrowHead(width / 2, 0, 0);
    drawArrowHead(-width / 2, 0, PI);

    drawArrowHead(0, -height / 2, -PI / 2);
    drawArrowHead(0, height / 2, PI / 2);

    noStroke();

    fill(50);

    textSize(15);

    text("x", width / 2 - 20, -10);
    text("y", 10, -height / 2 + 20);
}


// ==================================================
// Grid
// ==================================================

function drawGrid() {

    stroke(225);
    strokeWeight(1);

    for (let x = -6; x <= 6; x++) {

        line(
            x * scale,
            -height / 2,
            x * scale,
            height / 2
        );
    }

    for (let y = -4; y <= 4; y++) {

        line(
            -width / 2,
            y * scale,
            width / 2,
            y * scale
        );
    }
}


// ==================================================
// Original vectors
// ==================================================

function drawVector(v, label) {

    let x = v.x * scale;
    let y = -v.y * scale;

    stroke(40);
    strokeWeight(4);

    line(0, 0, x, y);

    let angle = atan2(y, x);

    drawArrowHead(x, y, angle);

    noStroke();

    fill(40);

    textSize(20);

    text(
        label,
        x + 10,
        y - 10
    );
}


// ==================================================
// Trace
// ==================================================

function drawTrace(x, y) {

    let px = x * scale;
    let py = -y * scale;

    if (
        px < -width / 2 ||
        px > width / 2 ||
        py < -height / 2 ||
        py > height / 2
    ) {
        return;
    }

    stroke(120);
    strokeWeight(1);

    line(0, 0, px, py);

    noStroke();

    fill(130);

    circle(px, py, 4);
}


// ==================================================
// Current vector
// ==================================================

function drawCombination(x, y, a, b) {

    let px = x * scale;
    let py = -y * scale;

    stroke(150, 0, 0);
    strokeWeight(3);

    line(0, 0, px, py);

    let angle = atan2(py, px);

    drawArrowHead(px, py, angle);

    noStroke();

    fill(150, 0, 0);

    circle(px, py, 7);

    fill(150, 0, 0);

    textSize(25);

    text(
        `α₁ = ${a.toFixed(2)},  α₂ = ${b.toFixed(2)}`,
        -width / 2 + 10,
        -height / 2 + 30
    );

    // text(
    //     `v = α₁ v₁ + α₂ v₂`,
    //     -width / 2 + 10,
    //     -height / 2 + 60
    // );
}


// ==================================================
// Arrow head
// ==================================================

function drawArrowHead(x, y, angle) {

    push();

    translate(x, y);

    rotate(angle);

    fill(40);

    noStroke();

    triangle(
        0, 0,
        -15, -7,
        -15, 7
    );

    pop();
}