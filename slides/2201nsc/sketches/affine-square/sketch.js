let angle = 0;
let tx = 0;
let ty = 0;

let targetAngle = 0;
let targetTx = 0;
let targetTy = 0;

let startAngle = 0;
let startTx = 0;
let startTy = 0;

let animationStart = 0;
let animationDuration = 1000;
let animating = false;

let rotateButton;
let translateButton;
let resetButton;

// Original square
const square = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1]
];

function setup() {

    createCanvas(windowWidth, windowHeight);

    rotateButton = createButton("Rotate 45°");
    rotateButton.position(20, 20);
    rotateButton.style("font-size", "16px");
    rotateButton.style("padding", "8px 14px");
    rotateButton.mousePressed(startRotation);

    translateButton = createButton("Translate (2, 3)");
    translateButton.position(140, 20);
    translateButton.style("font-size", "16px");
    translateButton.style("padding", "8px 14px");
    translateButton.attribute("disabled", "");
    translateButton.mousePressed(startTranslation);

    resetButton = createButton("Reset");
    resetButton.position(295, 20);
    resetButton.style("font-size", "16px");
    resetButton.style("padding", "8px 14px");
    resetButton.mousePressed(resetTransformation);
}


function draw() {

    background(250);

    // --------------------------------------------------------
    // Animate transformation
    // --------------------------------------------------------

    if (animating) {

        let t = (millis() - animationStart) / animationDuration;

        t = constrain(t, 0, 1);

        // Smooth easing
        t = easeInOut(t);

        angle = lerp(startAngle, targetAngle, t);
        tx = lerp(startTx, targetTx, t);
        ty = lerp(startTy, targetTy, t);

        if (t >= 1) {

            angle = targetAngle;
            tx = targetTx;
            ty = targetTy;

            animating = false;

            updateButtons();
        }
    }


    // --------------------------------------------------------
    // Coordinate system
    // --------------------------------------------------------

    push();

    translate(width / 2, height / 2);

    const s = min(width, height) / 10;

    scale(s, -s);

    drawGrid();
    drawAxes();

    // Original square
    drawSquare(square, false);

    // Transformed square
    const transformed = square.map(p => transformPoint(p));

    drawSquare(transformed, true);

    pop();


    // --------------------------------------------------------
    // Information
    // --------------------------------------------------------

    fill(40);
    noStroke();
    textSize(18);

    text("Affine transformation", 20, 100);

    text(
        "Rotation: " + degrees(angle).toFixed(1) + "°",
        20,
        130
    );

    text(
        "Translation: (" +
        tx.toFixed(1) + ", " +
        ty.toFixed(1) + ")",
        20,
        155
    );
}


// ------------------------------------------------------------
// Start rotation
// ------------------------------------------------------------

function startRotation() {

    if (animating) return;

    startAngle = angle;
    startTx = tx;
    startTy = ty;

    targetAngle = PI / 4;
    targetTx = tx;
    targetTy = ty;

    startAnimation();
}


// ------------------------------------------------------------
// Start translation
// ------------------------------------------------------------

function startTranslation() {

    if (animating) return;

    startAngle = angle;
    startTx = tx;
    startTy = ty;

    targetAngle = angle;
    targetTx = 2;
    targetTy = 3;

    startAnimation();
}


// ------------------------------------------------------------
// Start animation
// ------------------------------------------------------------

function startAnimation() {

    animationStart = millis();
    animating = true;

    rotateButton.attribute("disabled", "");
    translateButton.attribute("disabled", "");
    resetButton.attribute("disabled", "");
}


// ------------------------------------------------------------
// Reset
// ------------------------------------------------------------

function resetTransformation() {

    if (animating) return;

    startAngle = angle;
    startTx = tx;
    startTy = ty;

    targetAngle = 0;
    targetTx = 0;
    targetTy = 0;

    startAnimation();
}


// ------------------------------------------------------------
// Button states
// ------------------------------------------------------------

function updateButtons() {

    resetButton.removeAttribute("disabled");

    if (angle === 0 && tx === 0 && ty === 0) {

        rotateButton.removeAttribute("disabled");
        translateButton.attribute("disabled", "");

    } else if (abs(angle - PI / 4) < 0.001 &&
               abs(tx) < 0.001 &&
               abs(ty) < 0.001) {

        rotateButton.attribute("disabled", "");
        translateButton.removeAttribute("disabled");

    } else {

        rotateButton.attribute("disabled", "");
        translateButton.attribute("disabled");
    }
}


// ------------------------------------------------------------
// Transformation
// ------------------------------------------------------------

function transformPoint(p) {

    const x = p[0];
    const y = p[1];

    // Rotation
    const xr =
        x * cos(angle) -
        y * sin(angle);

    const yr =
        x * sin(angle) +
        y * cos(angle);

    // Translation
    const xt = xr + tx;
    const yt = yr + ty;

    return [xt, yt];
}


// ------------------------------------------------------------
// Easing function
// ------------------------------------------------------------

function easeInOut(t) {

    return t < 0.5
        ? 2 * t * t
        : 1 - pow(-2 * t + 2, 2) / 2;
}


// ------------------------------------------------------------
// Drawing
// ------------------------------------------------------------

function drawSquare(sq, transformed) {

    const s = min(width, height) / 10;

    if (transformed) {
        stroke(30, 100, 220);
        fill(30, 100, 220, 50);
    } else {
        stroke(100);
        fill(150, 150, 150, 35);
    }

    strokeWeight(2 / s);

    beginShape();

    for (const p of sq) {
        vertex(p[0], p[1]);
    }

    endShape(CLOSE);

    // Vertices
    noStroke();

    if (transformed) {
        fill(30, 100, 220);
    } else {
        fill(80);
    }

    for (const p of sq) {
        circle(p[0], p[1], 0.10);
    }
}


function drawGrid() {

    const range = 7;
    const s = min(width, height) / 10;

    stroke(220);
    strokeWeight(1 / s);

    for (let x = -range; x <= range; x++) {
        line(x, -range, x, range);
    }

    for (let y = -range; y <= range; y++) {
        line(-range, y, range, y);
    }
}


function drawAxes() {

    const s = min(width, height) / 10;

    stroke(100);
    strokeWeight(2 / s);

    line(-7, 0, 7, 0);
    line(0, -7, 0, 7);

    push();

    scale(1, -1);

    noStroke();
    fill(50);

    textSize(16 / s);

    text("x", 6.8, 25 / s);
    text("y", 10 / s, -6.7);

    pop();
}


// ------------------------------------------------------------
// Full screen
// ------------------------------------------------------------

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}