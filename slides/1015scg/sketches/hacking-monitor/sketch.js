/*
acktivity Monitor by Reinis 
Source: https://openprocessing.org/@u91723/504313

This version by Juan Carlos Ponce Campuzano 
19/May/2026
*/

let bg;
let fg;

let textS = 6;
let resetDelay = 700;
let cursorSize = 10;

let t = 0;
let i;

let garbage = [
  "bilinear momentum",
  "brute force",
  "fruit morse",
  "computing inverse",
  "quanta",
  "hex dump",
  "cpu",
  "triangulation",
  "recursive backtrace",
  "parallell complexification"
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg = color(0);
  fg = color(52, 229, 235);

  noCursor();
  background(bg);

  i = new HorizSplit(1);
}

function draw() {
  fill(red(bg), green(bg), blue(bg), 100);
  noStroke();
  rect(0, 0, width, height);

  t += 0.007;

  push();
  i.make(width, height);
  pop();

  stroke(fg);
  line(mouseX, mouseY - cursorSize, mouseX, mouseY + cursorSize);
  line(mouseX - cursorSize, mouseY, mouseX + cursorSize, mouseY);
}

function filler(i) {
  return garbage[i % garbage.length];
}

function labelText(txt) {
  textSize(textS);

  fill(fg);
  noStroke();
  rect(0, 0, 80, textS + 8);

  fill(bg);
  text(txt, 4, textS + 4);
}

function generateItem(level, horizontal = random() < 0.6) {
  if (random() < 0.9 && level < 5) {
    if (random() < 0.35) {
      return new StackItem(level);
    }

    if (horizontal) {
      return new HorizSplit(level);
    } else {
      return new VertSplit(level);
    }
  } else {
    switch (floor(random(7))) {
      case 0:
        return new Code();
      case 1:
        return new Web();
      case 2:
        return new Bar();
      case 3:
        return new LineGraph();
      case 4:
        return new Pie();
      case 5:
        return new Data();
      case 6:
        return new Progress();
    }
  }
}

// =========================
// Base Item
// =========================

class Item {
  make(w, h) {}
}

// =========================
// StackItem
// =========================

class StackItem extends Item {
  constructor(level) {
    super();

    this.l = level;
    this.frame = floor(random(resetDelay));

    this.a = null;
    this.b = null;

    this.reset();
  }

  make(w, h) {
    this.frame++;

    if (this.frame % resetDelay === 0) {
      this.reset();
    }

    this.a.make(w, h);

    fill(red(bg), green(bg), blue(bg), 100);
    noStroke();
    rect(0, 0, w, h);

    this.b.make(w, h);
  }

  reset() {
    if (random() > 0.5 || this.a == null) {
      this.a = generateItem(this.l + 1);
    }

    if (random() > 0.5 || this.b == null) {
      this.b = generateItem(this.l + 1);
    }
  }
}

// =========================
// HorizSplit
// =========================

class HorizSplit extends Item {
  constructor(level) {
    super();

    this.l = level;
    this.split = random(0.2, 0.8);
    this.frame = floor(random(resetDelay));

    this.reset();
  }

  make(w, h) {
    this.frame++;

    if (this.frame % resetDelay === 0) {
      this.reset();
    }

    push();
    this.a.make(w * this.split, h);
    pop();

    push();
    translate(w * this.split, 0);
    this.b.make(w * (1 - this.split), h);
    pop();

    stroke(fg);
    strokeWeight(1);
    line(w * this.split, 0, w * this.split, h);
  }

  reset() {
    this.split = random(0.25, 0.75);

    let horizontal = height < min(this.split, 1 - this.split) * width;

    if (random() > 0.5 || this.a == null) {
      this.a = generateItem(this.l + 1, horizontal);
    }

    if (random() > 0.5 || this.b == null) {
      this.b = generateItem(this.l + 1, horizontal);
    }
  }
}

// =========================
// VertSplit
// =========================

class VertSplit extends Item {
  constructor(level) {
    super();

    this.l = level;
    this.split = random(0.25, 0.75);
    this.frame = floor(random(resetDelay));

    this.reset();
  }

  make(w, h) {
    this.frame++;

    if (this.frame % resetDelay === 0) {
      this.reset();
    }

    push();
    this.a.make(w, h * this.split);
    pop();

    push();
    translate(0, h * this.split);
    this.b.make(w, h * (1 - this.split));
    pop();

    stroke(fg);
    strokeWeight(1);
    line(0, h * this.split, w, h * this.split);
  }

  reset() {
    this.split = random(0.25, 0.75);

    let horizontal = min(this.split, 1 - this.split) * height < width;

    if (random() > 0.5 || this.a == null) {
      this.a = generateItem(this.l + 1, horizontal);
    }

    if (random() > 0.5 || this.b == null) {
      this.b = generateItem(this.l + 1, horizontal);
    }
  }
}

// =========================
// Text Base
// =========================

class TextItem extends Item {
  constructor() {
    super();

    this.code = "";
    this.frame = 0;
  }

  make(w, h) {
    textSize(textS);

    this.frame++;

    if (this.frame % 2 === 0) {
      this.addCode();
    }

    let lines = this.code.split("\n").length;

    if (lines * textS * 2 > h) {
      this.code = this.code.replace(/([^\n]+\n)/, "");
    }

    fill(fg);
    noStroke();
    text(this.code, 0, 0, w, h);
  }

  addCode() {}
}

// =========================
// Progress
// =========================

class Progress extends Item {
  constructor() {
    super();

    this.time = 0;
    this.seed = floor(random(300));
    this.progress = new Array(5).fill(0);
  }

  make(w, h) {
    this.time += 0.1;

    let rowHeight = h / (this.progress.length * 2 + 1);

    for (let i = 0; i < this.progress.length; i++) {
      this.progress[i] += noise(i, this.time) / 500;

      push();
      translate(10, rowHeight * (i * 2 + 1));

      fill(
        lerpColor(
          bg,
          fg,
          this.progress[i] < 1 ? 0.5 : sin(this.time * 3) / 8 + 0.5
        )
      );

      noStroke();
      rect(0, 0, (w - 20) * min(this.progress[i], 1), rowHeight);

      noFill();
      stroke(fg);
      rect(0, 0, w - 20, rowHeight);

      labelText(filler(i + this.seed));

      pop();
    }
  }
}

// =========================
// Code
// =========================

class Code extends TextItem {
  constructor() {
    super();

    this.seed = random(200);
    this.indentation = 0;

    this.control = [
      "for(Complex root: crack.generate())",
      "if(confirmPassword(input))",
      "while(forger.hasNext())",
      "private class Identifier"
    ];
  }

  addCode() {
    switch (floor(random(4))) {
      case 0:
        this.code +=
          this.spaces() +
          filler(floor(this.seed + random(100)))
            .replaceAll(" ", ".") +
          "();\n";
        break;

      case 1:
        this.code +=
          this.spaces() +
          random(this.control) +
          " {\n";

        this.indentation++;
        break;

      case 2:
        if (this.indentation > 0) {
          this.indentation--;

          this.code += this.spaces() + "}\n";
        }
        break;
    }
  }

  spaces() {
    return "   ".repeat(this.indentation);
  }
}

// =========================
// Data
// =========================

class Data extends TextItem {
  constructor() {
    super();

    this.seed = random(200);
  }

  addCode() {
    for (let i = 0; i < 8; i++) {
      this.code += nf(sq(random(42)), 1, 2) + "    ";
    }

    this.code += "\n";
  }
}

// =========================
// Web
// =========================

class Web extends Item {
  constructor() {
    super();

    this.seed = random(200);
  }

  make(w, h) {
    let angle = noise(this.seed, t / 10) * TWO_PI;

    let points = [];

    push();

    translate(w / 2, h / 2);

    for (let i = 0; i < 16; i++) {
      angle += 1;

      let x = cos(angle * i) * w / 3;
      let y = sin(angle * (i + 1)) * h / 3;

      stroke(red(fg), green(fg), blue(fg), 140);

      for (let j = 0; j < 4; j++) {
        if (points.length > 0) {
          let this_point = random(points);

          line(x, y, this_point[0], this_point[1]);
        }
      }

      points.push([x, y]);

      push();

      translate(x, y);

      labelText(filler(i + floor(this.seed)));

      pop();
    }

    pop();
  }
}

// =========================
// Bar
// =========================

class Bar extends Item {
  constructor() {
    super();

    this.seed = random(200);
  }

  make(w, h) {
    let num = floor(w / 25);
    let con = w / (num + 1);

    for (let i = 0; i < num; i++) {
      stroke(fg);
      noFill();

      let value =
        h * (1 - noise(this.seed, t + 0.23 * i, i) * 0.8);

      let x = con * (2 / 3 + i);

      rect(x, h, (con / 3) * 2, -value);

      if (i % 3 === 0) {
        push();

        translate(x, h - value - 20);

        labelText(filler(i + floor(this.seed)));

        pop();
      }
    }
  }
}

// =========================
// Line Graph
// =========================

class LineGraph extends Item {
  constructor() {
    super();

    this.num = 42;
    this.seed = random(200);
  }

  make(w, h) {
    let this_step = 7;

    stroke(lerpColor(bg, fg, 0.5));

    for (let x = 0; x < w; x += this_step) {
      line(x, h, x, h - 10);
    }

    for (let y = 0; y < h; y += this_step) {
      line(0, y, 10, y);
    }

    let con = w / (this.num + 1);

    for (let i = 0; i < this.num - 1; i++) {
      for (let j = 0; j < 3; j++) {
        stroke(fg);
        strokeWeight(2);

        line(
          con * (0.5 + i),
          h * noise(this.seed, t + 0.23 * i, j),

          con * (1.5 + i),
          h * noise(this.seed, t + 0.23 * (i + 1), j)
        );

        if (i === 5) {
          push();

          translate(
            con * (0.5 + i),
            h * noise(this.seed, t + 0.23 * i, j) - 20
          );

          labelText(filler(j + floor(this.seed)));

          pop();
        }
      }
    }
  }
}

// =========================
// Pie
// =========================

class Pie extends Item {
  constructor() {
    super();

    this.seed = random(200);
  }

  make(w, h) {
    push();

    translate(w / 2, h / 2);

    stroke(fg);
    strokeWeight(2);

    let diameter = min(w, h) * 0.6;

    let angle = noise(this.seed, t) * TWO_PI;

    for (let i = 0; i < 16; i++) {
      fill(
        lerpColor(bg, fg, noise(this.seed, i + 100))
      );

      let da = sq(noise(this.seed, i, t)) * 3;

      arc(0, 0, diameter, diameter, angle, angle + da, PIE);

      angle += da;
    }

    angle = noise(this.seed, t) * TWO_PI;

    for (let i = 0; i < 16; i++) {
      angle += sq(noise(this.seed, i, t)) * 3;

      push();

      translate(
        cos(angle) * diameter / 1.6,
        sin(angle) * diameter / 1.6
      );

      labelText(filler(i + floor(this.seed)));

      pop();
    }

    pop();
  }
}