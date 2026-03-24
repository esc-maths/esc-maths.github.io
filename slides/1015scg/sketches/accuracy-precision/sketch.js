function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(255);

  textAlign(CENTER, CENTER);
  textSize(20);

  drawCase(125, 145, "High Accuracy\nHigh Precision", "high_high");
  drawCase(375, 145, "High Accuracy\nLow Precision", "high_low");
  drawCase(125, 375, "Low Accuracy\nHigh Precision", "low_high");
  drawCase(375, 375, "Low Accuracy\nLow Precision", "low_low");
}

function drawCase(cx, cy, label, type) {
  // Label
  fill(0);
  noStroke();
  text(label, cx, cy - 90);

  // Target (scaled)
  noStroke();
  fill(255, 0, 0);
  circle(cx, cy, 120);

  fill(255);
  circle(cx, cy, 90);

  fill(255, 0, 0);
  circle(cx, cy, 60);

  fill(255);
  circle(cx, cy, 30);

  // Points
  fill(0);
  noStroke();

  let points = [];

  if (type === "high_high") {
    for (let i = 0; i < 25; i++) {
      points.push([
        randomGaussian(0, 5),
        randomGaussian(0, 5)
      ]);
    }
  }

  if (type === "high_low") {
    for (let i = 0; i < 25; i++) {
      let angle = random(TWO_PI);
      let r = random(8, 35);
      points.push([
        r * cos(angle),
        r * sin(angle)
      ]);
    }
  }

  if (type === "low_high") {
    for (let i = 0; i < 25; i++) {
      points.push([
        50 + randomGaussian(0, 5),
        -50 + randomGaussian(0, 5)
      ]);
    }
  }

  if (type === "low_low") {
    for (let i = 0; i < 25; i++) {
      points.push([
        random(-80, 80),
        random(-80, 80)
      ]);
    }
  }

  for (let p of points) {
    circle(cx + p[0], cy + p[1], 9);
  }
}