let iris;

async function setup() {
  createCanvas(600, 600);

  iris = await loadTable("iris/iris.data.csv", ",", "header");

  // Check the structure of the CSV
  console.log(iris.getRowCount(), iris.getColumnCount());
  console.log(iris.columns);

  noLoop();
}

function draw() {
  background(255);

  // --------------------------------------------------
  // Read the data
  // --------------------------------------------------

  let X = [];
  let species = [];

  for (let i = 0; i < iris.getRowCount(); i++) {

    // Four numerical measurements
    X.push([
      Number(iris.getString(i, 0)),
      Number(iris.getString(i, 1)),
      Number(iris.getString(i, 2)),
      Number(iris.getString(i, 3))
    ]);

    // Fifth column = species
    species.push(iris.getString(i, 4));
  }

  // --------------------------------------------------
  // Centre the data
  // X = X - mean(X)
  // --------------------------------------------------

  let means = [0, 0, 0, 0];

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < X.length; i++) {
      means[j] += X[i][j];
    }
    means[j] /= X.length;
  }

  for (let i = 0; i < X.length; i++) {
    for (let j = 0; j < 4; j++) {
      X[i][j] -= means[j];
    }
  }

  // --------------------------------------------------
  // SVD
  //
  // X = U S V^T
  //
  // We need the first two right singular vectors.
  // --------------------------------------------------

  let V = pca(X, 2);

  // --------------------------------------------------
  // Project onto the first two principal components
  //
  // us = X * V
  // --------------------------------------------------

  let US = [];

  for (let i = 0; i < X.length; i++) {

    let pc1 = 0;
    let pc2 = 0;

    for (let j = 0; j < 4; j++) {
      pc1 += X[i][j] * V[j][0];
      pc2 += X[i][j] * V[j][1];
    }

    US.push([pc1, pc2]);
  }

  // --------------------------------------------------
  // Plot
  // --------------------------------------------------

  plotPoints(US, species);
}


// ======================================================
// PCA using covariance matrix
// ======================================================
//
// For centred X:
//
// X^T X v = lambda v
//
// The eigenvectors of X^T X are the right singular
// vectors of X.
//
// We find the two largest eigenvectors using
// power iteration with deflation.
// ======================================================

function pca(X, components) {

  let n = X.length;
  let d = X[0].length;

  // Compute X^T X
  let C = Array.from({ length: d }, () =>
    Array(d).fill(0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < d; j++) {
      for (let k = 0; k < d; k++) {
        C[j][k] += X[i][j] * X[i][k];
      }
    }
  }

  let V = [];

  for (let c = 0; c < components; c++) {

    // Start with a random vector
    let v = [];

    for (let j = 0; j < d; j++) {
      v.push(random(-1, 1));
    }

    normalize(v);

    // Power iteration
    for (let iteration = 0; iteration < 1000; iteration++) {

      let w = multiplyMatrixVector(C, v);

      normalize(w);

      v = w;
    }

    // Store eigenvector
    V.push(v);

    // Deflation
    let Cv = multiplyMatrixVector(C, v);

    let lambda = dot(v, Cv);

    for (let j = 0; j < d; j++) {
      for (let k = 0; k < d; k++) {
        C[j][k] -= lambda * v[j] * v[k];
      }
    }
  }

  // Convert from [v1, v2] to matrix with columns
  let result = Array.from({ length: d }, () =>
    Array(components).fill(0)
  );

  for (let i = 0; i < d; i++) {
    for (let j = 0; j < components; j++) {
      result[i][j] = V[j][i];
    }
  }

  return result;
}


// ======================================================
// Matrix-vector multiplication
// ======================================================

function multiplyMatrixVector(A, v) {

  let result = [];

  for (let i = 0; i < A.length; i++) {

    let sum = 0;

    for (let j = 0; j < v.length; j++) {
      sum += A[i][j] * v[j];
    }

    result.push(sum);
  }

  return result;
}


// ======================================================
// Vector utilities
// ======================================================

function dot(a, b) {

  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}


function normalize(v) {

  let length = Math.sqrt(dot(v, v));

  for (let i = 0; i < v.length; i++) {
    v[i] /= length;
  }
}


// ======================================================
// Scatter plot
// ======================================================

function plotPoints(data, species) {

  let margin = 70;

  let xs = data.map(p => p[0]);
  let ys = data.map(p => p[1]);

  let minX = min(xs);
  let maxX = max(xs);
  let minY = min(ys);
  let maxY = max(ys);

  let paddingX = 0.1 * (maxX - minX);
  let paddingY = 0.1 * (maxY - minY);

  minX -= paddingX;
  maxX += paddingX;
  minY -= paddingY;
  maxY += paddingY;

  // Axes through zero
  let x0 = map(0, minX, maxX, margin, width - margin);
  let y0 = map(0, minY, maxY, height - margin, margin);

  stroke(0);
  strokeWeight(1);

  line(margin, y0, width - margin, y0);
  line(x0, margin, x0, height - margin);

  // Points
  for (let i = 0; i < data.length; i++) {

    let px = map(
      data[i][0],
      minX,
      maxX,
      margin,
      width - margin
    );

    let py = map(
      data[i][1],
      minY,
      maxY,
      height - margin,
      margin
    );

    if (species[i].includes("setosa")) {
      fill(220, 70, 70);
    }
    else if (species[i].includes("versicolor")) {
      fill(70, 130, 220);
    }
    else {
      fill(70, 170, 100);
    }

    noStroke();
    circle(px, py, 8);
  }

  // Labels
  fill(0);
  textSize(16);
  textAlign(CENTER);

  text("princomp1", width / 2, height - 20);

  push();
  translate(20, height / 2);
  rotate(-HALF_PI);
  text("princomp2", 0, 0);
  pop();
}