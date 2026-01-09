/*
  Based upon
  https://openprocessing.org/sketch/2839516/
  by Project Somedays
*/

let boxSize;
let jumpingBoxes = [];
let lowCol, highCol;
let noiseTime = 0;

// ------------------ PALETTES ------------------
const palettes = {
  "Funky Neon": "#42047e, #07f49e",
  "Neon Orchid": "#00f59b, #7014f2",
  "Twilight Firecracker": "#08415c, #cc2936",
  "Golden Horizon Gleam": "#006e90, #f18f01",
  "Bubblegum Beach Party": "#145277, #83d0cb"
};

// ------------------ GUI ------------------
const gui = new lil.GUI();
const params = {
  frames: 90,
  res: 25,
  progRate: 0.1,
  zoom: 250,
  palette: "Funky Neon"
};

gui.add(params, "frames", 30, 210, 5).onChange(resetNoiseOffsets);
gui.add(params, "res", 5, 35, 1).onChange(rebuildGrid);
gui.add(params, "progRate", 0.01, 0.2, 0.01);
gui.add(params, "zoom", 1, 500, 1).onChange(resetNoiseOffsets);
gui.add(params, "palette", Object.keys(palettes)).onChange(updateColours);
gui.close();

// ------------------ SETUP ------------------
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // pixelDensity(1);
  camera(-width * 1.75, -width, width * 1.75, 0, 0, 0, 0, 1, 0);
  updateColours();
  rebuildGrid();
}

// ------------------ DRAW ------------------
function draw() {
  background(0);

  if (frameCount % (params.frames * 2) === 0) {
    noiseTime += params.progRate;
    resetNoiseOffsets();
  }

  for (const jb of jumpingBoxes) {
    jb.update();
    jb.show();
  }

  orbitControl();
}

// ------------------ GRID ------------------
function rebuildGrid() {
  jumpingBoxes.length = 0;

  boxSize = 0.95 * width / (params.res / 2);
  const spacing = width / (params.res / 2);
  const start = -0.9 * width;

  for (let i = 0; i < params.res; i++) {
    for (let j = 0; j < params.res; j++) {
      const x = start + i * spacing;
      const z = start + j * spacing;
      const offset = calcFrameOffset(x, z);
      jumpingBoxes.push(new JumpingBox(x, z, offset));
    }
  }
}

// ------------------ COLOURS ------------------
function updateColours() {
  const [high, low] = palettes[params.palette].split(", ");
  highCol = color(high);
  lowCol = color(low);
}

// ------------------ NOISE ------------------
function calcFrameOffset(x, z) {
  return map(
    noise(x / params.zoom, z / params.zoom, noiseTime),
    0,
    1,
    0,
    0.45 * params.frames
  );
}

function resetNoiseOffsets() {
  for (const jb of jumpingBoxes) {
    jb.offset = calcFrameOffset(jb.p.x, jb.p.z);
  }
}

// ------------------ EASING ------------------
function easeInOutElastic(x) {
  const c5 = TWO_PI / 4.5;
  if (x === 0 || x === 1) return x;

  const u = -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2;
  const v = (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;

  return x < 0.5
    ? u : v;
}

// ------------------ CLASS ------------------
class JumpingBox {
  constructor(x, z, offset) {
    this.p = createVector(x, 0, z);
    this.offset = offset;
    this.col = lowCol;
    this.squish = 0;
  }

  update() {
    const frame = (frameCount - this.offset + params.frames) % params.frames;
    const prog = frame / params.frames;

    this.squish = easeInOutElastic(prog);
    this.p.y = -boxSize * constrain(sin(prog * TWO_PI), 0, 1) * 2.4;
    this.col = lerpColor(lowCol, highCol, prog);
  }

  show() {
    push();
    translate(this.p.x, this.p.y, this.p.z);
    scale(1, 1 - this.squish * 0.5, 1);
    fill(this.col);
    box(boxSize);
    pop();
  }
}
