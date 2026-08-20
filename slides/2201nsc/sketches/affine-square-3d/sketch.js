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
let viewButton;

let view3D = false;

// Original square
const square = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1]
];


function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);

    // --------------------------------------------------------
    // Buttons
    // --------------------------------------------------------

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

    viewButton = createButton("3D view");
    viewButton.position(365, 20);
    viewButton.style("font-size", "16px");
    viewButton.style("padding", "8px 14px");
    viewButton.mousePressed(toggleView);
}


// ============================================================
// MAIN DRAW
// ============================================================

function draw() {

    background(250);

    updateAnimation();

    if (view3D) {
        draw3D();
    } else {
        draw2D();
    }

    drawInformation();
}


// ============================================================
// ANIMATION
// ============================================================

function updateAnimation() {

    if (!animating) return;

    let t =
        (millis() - animationStart) /
        animationDuration;

    t = constrain(t, 0, 1);

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


function easeInOut(t) {

    return t < 0.5
        ? 2 * t * t
        : 1 - pow(-2 * t + 2, 2) / 2;
}


// ============================================================
// TRANSFORMATIONS
// ============================================================

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


function startAnimation() {

    animationStart = millis();
    animating = true;

    rotateButton.attribute("disabled", "");
    translateButton.attribute("disabled", "");
    resetButton.attribute("disabled", "");
}


function updateButtons() {

    resetButton.removeAttribute("disabled");

    if (
        abs(angle) < 0.001 &&
        abs(tx) < 0.001 &&
        abs(ty) < 0.001
    ) {

        rotateButton.removeAttribute("disabled");
        translateButton.attribute("disabled", "");

    } else if (
        abs(angle - PI / 4) < 0.001 &&
        abs(tx) < 0.001 &&
        abs(ty) < 0.001
    ) {

        rotateButton.attribute("disabled", "");
        translateButton.removeAttribute("disabled");

    } else {

        rotateButton.attribute("disabled", "");
        translateButton.attribute("disabled");
    }
}


// ============================================================
// AFFINE TRANSFORMATION
// ============================================================

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


// ============================================================
// 2D VIEW
// ============================================================

function draw2D() {

    // Camera looking directly down the w-axis
    camera(
        0, 0, 1000,
        0, 0, 0,
        0, 1, 0
    );

    const s = min(width, height) / 10;

    scale(s, -s);

    drawGrid2D();
    drawAxes2D();

    drawSquare2D(square, false);

    const transformed = square.map(transformPoint);

    drawSquare2D(transformed, true);
}


function drawGrid2D() {

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


function drawAxes2D() {

    const s = min(width, height) / 10;

    stroke(90);
    strokeWeight(2 / s);

    line(-7, 0, 7, 0);
    line(0, -7, 0, 7);
}


function drawSquare2D(sq, transformed) {

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

    noStroke();

    fill(
        transformed
            ? color(30, 100, 220)
            : color(80)
    );

    for (const p of sq) {
        circle(p[0], p[1], 0.10);
    }
}


// ============================================================
// 3D VIEW
// ============================================================

function draw3D() {

    // --------------------------------------------------------
    // Fixed camera angle
    // --------------------------------------------------------

   camera(
    700, -300, 300,
    0, 0, 0.5,
    0, 0, 1
);

    const s = min(width, height) / 10;

    scale(s);

    // Axes
    drawAxes3D();

    // Affine plane w = 1
    drawAffinePlane();

    // Original square
    drawSquare3D(square, false);

    // Transformed square
    const transformed = square.map(transformPoint);

    drawSquare3D(transformed, true);

    // Lines showing transformation
    drawTransformationLines();
}


// ============================================================
// 3D XYZ / AFFINE AXES
// ============================================================

function drawAxes3D() {

    const range = 7;

    strokeWeight(0.025);

    // x-axis
    stroke(200, 60, 60);
    line(-range, 0, 0, range, 0, 0);

    // y-axis
    stroke(60, 140, 60);
    line(0, -range, 0, 0, range, 0);

    // w-axis
    stroke(60, 90, 200);
    line(0, 0, 0, 0, 0, 4);

    // Origin
    push();

    noStroke();
    fill(50);
    sphere(0.06);

    pop();

    // Labels
    push();

    noStroke();
    textSize(0.30);

    fill(200, 60, 60);
    text("x", range + 0.2, 0, 0);

    fill(60, 140, 60);
    text("y", 0, range + 0.2, 0);

    fill(60, 90, 200);
    text("w", 0, 0, 4.3);

    pop();
}


// ============================================================
// AFFINE PLANE w = 1
// ============================================================

function drawAffinePlane() {

    const range = 7;

    push();

    // w = 1
    translate(0, 0, 1);

    // Plane
    noStroke();
    fill(150, 180, 220, 45);

    beginShape();

    vertex(-range, -range, 0);
    vertex(range, -range, 0);
    vertex(range, range, 0);
    vertex(-range, range, 0);

    endShape(CLOSE);

    // Plane grid
    stroke(180, 190, 210, 120);
    strokeWeight(0.012);

    for (let x = -range; x <= range; x++) {
        line(x, -range, 0, x, range, 0);
    }

    for (let y = -range; y <= range; y++) {
        line(-range, y, 0, range, y, 0);
    }

    pop();

    // Plane label
    push();

    noStroke();
    fill(60);
    textSize(0.30);

    translate(-6.6, 6.5, 1.03);

    text("Affine plane  w = 1", 0, 0);

    pop();
}


// ============================================================
// SQUARE IN 3D
// ============================================================

function drawSquare3D(sq, transformed) {

    if (transformed) {
        stroke(30, 100, 220);
        fill(30, 100, 220, 70);
    } else {
        stroke(100);
        fill(150, 150, 150, 45);
    }

    strokeWeight(0.035);

    beginShape();

    for (const p of sq) {

        // Affine coordinate:
        // (x, y) -> (x, y, 1)

        vertex(
            p[0],
            p[1],
            1
        );
    }

    endShape(CLOSE);

    // Vertices
    noStroke();

    fill(
        transformed
            ? color(30, 100, 220)
            : color(80)
    );

    for (const p of sq) {

        push();

        translate(
            p[0],
            p[1],
            1
        );

        sphere(0.07);

        pop();
    }
}


// ============================================================
// TRANSFORMATION LINES
// ============================================================

function drawTransformationLines() {

    if (
        abs(angle) < 0.001 &&
        abs(tx) < 0.001 &&
        abs(ty) < 0.001
    ) {
        return;
    }

    const transformed = square.map(transformPoint);

    stroke(120, 120, 120, 100);
    strokeWeight(0.015);

    for (let i = 0; i < square.length; i++) {

        const p = square[i];
        const q = transformed[i];

        line(
            p[0], p[1], 1,
            q[0], q[1], 1
        );
    }
}


// ============================================================
// INFORMATION
// ============================================================

function drawInformation() {

    push();

    resetMatrix();

    fill(40);
    noStroke();

    textSize(18);

    text(
        view3D
            ? "3D affine-coordinate view"
            : "2D view",
        20,
        100
    );

    text(
        "Rotation: " +
        degrees(angle).toFixed(1) +
        "°",
        20,
        130
    );

    text(
        "Translation: (" +
        tx.toFixed(1) +
        ", " +
        ty.toFixed(1) +
        ")",
        20,
        155
    );

    if (view3D) {

        text(
            "Affine plane: w = 1",
            20,
            180
        );
    }

    pop();
}


// ============================================================
// TOGGLE VIEW
// ============================================================

function toggleView() {

    view3D = !view3D;

    viewButton.html(
        view3D
            ? "2D view"
            : "3D view"
    );

    // The camera is explicitly reset by draw2D()
    // or draw3D(), so switching views always gives
    // the same clean viewpoint.
}


// ============================================================
// FULL SCREEN
// ============================================================

function windowResized() {

    resizeCanvas(
        windowWidth,
        windowHeight
    );
}