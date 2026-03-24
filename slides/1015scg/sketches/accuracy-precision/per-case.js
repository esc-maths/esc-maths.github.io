let selector;
let currentCase = "high_high";

function setup() {
  createCanvas(500, 500);

  selector = createSelect();
  selector.position(10, 10);
  selector.option("High Accuracy, High Precision", "high_high");
  selector.option("High Accuracy, Low Precision", "high_low");
  selector.option("Low Accuracy, High Precision", "low_high");
  selector.option("Low Accuracy, Low Precision", "low_low");

  selector.changed(() => {
    currentCase = selector.value();
    redraw();
  });

  noLoop();
}

function draw() {
  background(255);

  textAlign(CENTER, CENTER);
  textSize(22);

  let label = getLabel(currentCase);

  // Slightly lower center to make space for label
  drawCase(width / 2, height / 2 + 20, label, currentCase);
}

function getLabel(type) {
  if (type === "high_high") return "High Accuracy\nHigh Precision";
  if (type === "high_low") return "High Accuracy\nLow Precision";
  if (type === "low_high") return "Low Accuracy\nHigh Precision";
  if (type === "low_low") return "Low Accuracy\nLow Precision";
}

function drawCase(cx, cy, label, type) {
  // Label
  fill(0);
  noStroke();
  text(label, cx, cy - 200);

  // 🎯 Larger target
  noStroke();
  fill(255, 0, 0);
  circle(cx, cy, 300);

  fill(255);
  circle(cx, cy, 220);

  fill(255, 0, 0);
  circle(cx, cy, 140);

  fill(255);
  circle(cx, cy, 60);

  // Points
  fill(0);
  noStroke();

  let points = [];

  if (type === "high_high") {
    for (let i = 0; i < 35; i++) {
      points.push([
        randomGaussian(0, 8),
        randomGaussian(0, 8)
      ]);
    }
  }

  if (type === "high_low") {
    for (let i = 0; i < 35; i++) {
      let angle = random(TWO_PI);
      let r = random(10, 90);
      points.push([
        r * cos(angle),
        r * sin(angle)
      ]);
    }
  }

  if (type === "low_high") {
    for (let i = 0; i < 35; i++) {
      points.push([
        100 + randomGaussian(0, 8),
        -100 + randomGaussian(0, 8)
      ]);
    }
  }

  if (type === "low_low") {
    for (let i = 0; i < 35; i++) {
      points.push([
        random(-140, 140),
        random(-140, 140)
      ]);
    }
  }

  for (let p of points) {
    circle(cx + p[0], cy + p[1], 10);
  }
}