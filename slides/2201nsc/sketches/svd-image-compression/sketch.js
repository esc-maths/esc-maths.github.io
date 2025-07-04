let img;
let grayMatrix = [];
let compressedMatrix = [];
let k = 51; // default k value
let slider;

function preload() {
  img = loadImage('cat.jpeg'); // Replace with your image
}

function setup() {
  createCanvas(2 * 300, 420); // image + space for text/slider
  img.resize(300, 400); // Resize for performance
  img.loadPixels();

  // Build grayscale matrix
  for (let y = 0; y < img.height; y++) {
    let row = [];
    for (let x = 0; x < img.width; x++) {
      let index = 4 * (x + y * img.width);
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let gray = 0.299 * r + 0.587 * g + 0.114 * b;
      row.push(gray);
    }
    grayMatrix.push(row);
  }

   // --- Prepare the left image once in a buffer ---
  originalGfx = createGraphics(100, 100);
  originalGfx.loadPixels();
  for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
      let gray = grayMatrix[y][x];
      let idx = 4 * (x + y * 100);
      originalGfx.pixels[idx] = gray;
      originalGfx.pixels[idx + 1] = gray;
      originalGfx.pixels[idx + 2] = gray;
      originalGfx.pixels[idx + 3] = 255;
    }
  }
  originalGfx.updatePixels();

  // Create slider below canvas
  slider = createSlider(1, 101, k, 10);
  slider.position(10, height + 5);
  slider.style('width', `${width - 20}px`);
}

function draw() {
  background(255);
  k = slider.value();

  // Draw original image from buffer
  image(originalGfx, 0, 0);

  // SVD decomposition
  // using JS library
  let svd = numeric.svd(grayMatrix);
  let U = svd.U;
  let S = svd.S;
  let V = svd.V;

  // Truncate to top-k components
  let Uk = U.map(row => row.slice(0, k));
  let Sk = numeric.diag(S.slice(0, k));
  let Vk = V.map(row => row.slice(0, k));

  // Reconstruct image
  let US = numeric.dot(Uk, Sk);
  compressedMatrix = numeric.dot(US, numeric.transpose(Vk));

  loadPixels();

  // Draw original image (left)
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let gray = grayMatrix[y][x];
      let index = 4 * (x + y * width);
      pixels[index] = gray;
      pixels[index + 1] = gray;
      pixels[index + 2] = gray;
      pixels[index + 3] = 255;
    }
  }

  // Draw compressed image (right)
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let gray = compressedMatrix[y][x];
      gray = constrain(gray, 0, 255);
      let index = 4 * ((x + img.width) + y * width);
      pixels[index] = gray;
      pixels[index + 1] = gray;
      pixels[index + 2] = gray;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();

  // Add labels
  textAlign(CENTER);
  textSize(12);
  fill(0);
  text("Original", img.width / 2, img.height + 15);
  text(`Compressed (k = ${k})`, 1.5 * img.width, img.height + 15);
}
