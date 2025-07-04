/*
    Written by Juan Carlos Ponce Campuzano
    https://www.dynamicmath.xyz/
    Date: 4/Ju/2025

    References: 
    https://en.wikipedia.org/wiki/Singular_value_decomposition
    https://dmicz.github.io/machine-learning/svd-image-compression/
*/

let img;
let grayMatrix = [];
let compressedMatrix = [];
let k = 131; // default k value
let slider;
let originalGfx;

function preload() {
    img = loadImage('cat.jpeg'); // Load image
}

function setup() {
    createCanvas(2 * 250, 370); // 250x350 images + space for text
    img.resize(250, 350);
    img.loadPixels();

    // Convert to grayscale matrix
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

    // Prepare the left image once in a buffer
    originalGfx = createGraphics(img.width, img.height);
    originalGfx.loadPixels();
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let gray = grayMatrix[y][x];
            let idx = 4 * (x + y * img.width);
            originalGfx.pixels[idx] = gray;
            originalGfx.pixels[idx + 1] = gray;
            originalGfx.pixels[idx + 2] = gray;
            originalGfx.pixels[idx + 3] = 255;
        }
    }
    originalGfx.updatePixels();

    // Slider
    slider = createSlider(1, 250, k, 1);
    slider.position(10, height + 5);
    slider.style('width', `${width - 20}px`);
}

function draw() {
    background(255);
    k = slider.value();

    // Draw original from buffer
    image(originalGfx, 0, 0);

    // Compute SVD
    let svd = numeric.svd(grayMatrix);
    let U = svd.U;
    let S = svd.S;
    let V = svd.V;

    let Uk = U.map(row => row.slice(0, k));
    let Sk = numeric.diag(S.slice(0, k));
    let Vk = V.map(row => row.slice(0, k));

    let US = numeric.dot(Uk, Sk);
    compressedMatrix = numeric.dot(US, numeric.transpose(Vk));

    loadPixels();

    // Draw compressed image (right)
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let gray = constrain(compressedMatrix[y][x], 0, 255);
            let index = 4 * ((x + img.width) + y * width);
            pixels[index] = gray;
            pixels[index + 1] = gray;
            pixels[index + 2] = gray;
            pixels[index + 3] = 255;
        }
    }

    updatePixels();

    showInfo();
}

function showInfo() {
    // Labels
    textAlign(CENTER);
    textSize(14);
    fill(0);
    text("Original", img.width / 2, img.height + 15);

    let m = img.height;
    let n = img.width;
    let compressedSize = (m * k + k + n * k); // U, S, V
    let originalSize = m * n;
    let compressionRatio = 100 * (1 - compressedSize / originalSize);
    text(`Compressed (${compressionRatio.toFixed(1)}% smaller)`, 1.5 * img.width, img.height + 15);
}
