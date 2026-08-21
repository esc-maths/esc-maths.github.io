let startTime;

// Timeline Timing Configurations (in milliseconds)
const INITIAL_WAIT = 2000; // 2s initial pause
const ANIM_DUR     = 2000; // 2s duration for each transformation
const PAUSE_DUR    = 1500; // 1.5s pause between steps
const HOLD_WAIT    = 3000; // 3s final hold at fully transformed state
const RESET_DUR   = 3000; // 3s smooth return back to origin

// Step Timeline Milestones
const t0 = INITIAL_WAIT;               // 3.0s: Rotate Starts
const t1 = t0 + ANIM_DUR;              // 5.0s: Rotate Ends
const t2 = t1 + PAUSE_DUR;             // 7.0s: Shear Starts
const t3 = t2 + ANIM_DUR;              // 9.0s: Shear Ends
const t4 = t3 + PAUSE_DUR;             // 11.0s: Translate Starts
const t5 = t4 + ANIM_DUR;              // 13.0s: Translate Ends
const t6 = t5 + PAUSE_DUR;             // 15.0s: Scale Starts
const t7 = t6 + ANIM_DUR;              // 17.0s: Scale Ends
const t8 = t7 + HOLD_WAIT;             // 21.0s: Hold Ends -> Reset Starts
const t9 = t8 + RESET_DUR;             // 24.0s: Reset Complete
const TOTAL_CYCLE = t9 + 1000;         // 25.0s Total Loop Duration (1s buffer)

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15, 23, 42); // Dark slate background

  let elapsedTime = (millis() - startTime) % TOTAL_CYCLE;

  // Maximum transformation target parameters
  let maxAngle = QUARTER_PI;
  let maxShX   = 0.45;
  let maxShY   = -0.25;
  let maxTx    = width * 0.12;
  let maxTy    = -height * 0.08;
  let maxSx    = 1.4;
  let maxSy    = 0.65;

  let angle, shX, shY, tx, ty, sx, sy;

  // --- TRANSFORMATION PARAMETER CALCULATIONS ---
  if (elapsedTime >= t8 && elapsedTime < t9) {
    // 5. SMOOTH RESET PHASE: Interpolate all parameters back to default state
    let pReset = getStepProgress(elapsedTime, t8, RESET_DUR);
    angle = lerp(maxAngle, 0, pReset);
    shX   = lerp(maxShX, 0, pReset);
    shY   = lerp(maxShY, 0, pReset);
    tx    = lerp(maxTx, 0, pReset);
    ty    = lerp(maxTy, 0, pReset);
    sx    = lerp(maxSx, 1.0, pReset);
    sy    = lerp(maxSy, 1.0, pReset);
  } else if (elapsedTime >= t9) {
    // Resting at initial state before loop restarts
    angle = 0; shX = 0; shY = 0; tx = 0; ty = 0; sx = 1.0; sy = 1.0;
  } else {
    // 1-4. FORWARD SEQUENTIAL TRANSFORMATIONS
    let pRotate    = getStepProgress(elapsedTime, t0, ANIM_DUR);
    let pShear     = getStepProgress(elapsedTime, t2, ANIM_DUR);
    let pTranslate = getStepProgress(elapsedTime, t4, ANIM_DUR);
    let pScale     = getStepProgress(elapsedTime, t6, ANIM_DUR);

    angle = lerp(0, maxAngle, pRotate);
    shX   = lerp(0, maxShX, pShear);
    shY   = lerp(0, maxShY, pShear);
    tx    = lerp(0, maxTx, pTranslate);
    ty    = lerp(0, maxTy, pTranslate);
    sx    = lerp(1.0, maxSx, pScale);
    sy    = lerp(1.0, maxSy, pScale);
  }

  push();
  // Center screen origin
  translate(width / 2, height / 2);

  // --- TRANSFORMATION MATRIX CHAIN ---
  rotate(angle);         // Step 1: Rotation
  shearX(shX);           // Step 2: Shear
  shearY(shY);
  translate(tx, ty);     // Step 3: Translation
  scale(sx, sy);         // Step 4: Scale

  drawTransformedGrid();
  drawCurvyShape();
  pop();

  drawPhaseIndicator(elapsedTime);
}

// Cubic ease-in-out calculator
function getStepProgress(elapsed, start, duration) {
  if (elapsed < start) return 0;
  if (elapsed >= start + duration) return 1;
  let raw = (elapsed - start) / duration;
  return raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
}

function drawTransformedGrid() {
  stroke(255, 255, 255, 30);
  strokeWeight(1);
  let gridSize = 300;
  let step = 30;

  for (let x = -gridSize; x <= gridSize; x += step) {
    line(x, -gridSize, x, gridSize);
  }
  for (let y = -gridSize; y <= gridSize; y += step) {
    line(-gridSize, y, gridSize, y);
  }
}

function drawCurvyShape() {
  push();
  fill(56, 189, 248, 160); // Semi-transparent cyan
  stroke(238, 242, 255);
  strokeWeight(3);

  beginShape();
  let steps = 80;
  for (let i = 0; i <= steps; i++) {
    let a = (TWO_PI / steps) * i;
    let r = 120 + 35 * sin(3 * a) + 15 * cos(5 * a);
    let px = cos(a) * r;
    let py = sin(a) * r;
    vertex(px, py);
  }
  endShape(CLOSE);

  // Origin anchor dot
  fill(244, 63, 94);
  noStroke();
  ellipse(0, 0, 10, 10);
  pop();
}

function drawPhaseIndicator(elapsed) {
  fill(226, 232, 240);
  noStroke();
  textSize(15);
  textFont('sans-serif');
  
  let label = "";
  if (elapsed < t0) {
    label = `State: Starting in ${((t0 - elapsed) / 1000).toFixed(1)}s...`;
  } else if (elapsed < t2) {
    label = "Step 1/4: Applying ROTATION";
  } //else if (elapsed < t2) {
    //label = "Step 1/4: Rotation complete (Pause 2s)";
  //} 
  else if (elapsed < t3) {
    label = "Step 2/4: Applying SHEAR";
  } //else if (elapsed < t4) {
    //label = "Step 2/4: Shear complete (Pause 2s)";
  //} 
  else if (t4 < elapsed && elapsed < t6) {
    label = "Step 3/4: Applying TRANSLATION";
  } //else if (elapsed < t6) {
    //label = "Step 3/4: Translation complete (Pause 2s)";
  //} 
  else if (elapsed < t7) {
    label = "Step 4/4: Applying SCALING";
  } else if (elapsed < t8) {
    label = `Final State.`;
  } else if (elapsed < t9) {
    label = "Reset State";
  } else {
    label = "Original State Restored (Loop restarting...)";
  }
  
  text(label, 30, 40);
}