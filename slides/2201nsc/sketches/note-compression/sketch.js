/*
    Written by Juan Carlos Ponce Campuzano
    https://www.dynamicmath.xyz/
    Date: 4/Ju/2025

    References: 
    https://en.wikipedia.org/wiki/Singular_value_decomposition
    https://dmicz.github.io/machine-learning/svd-image-compression/
*/

let img;
let rMatrix = [];
let gMatrix = [];
let bMatrix = [];
let compressedR = [];
let compressedG = [];
let compressedB = [];
let k = 10; // default k value for compression
let slider;
let originalGfx;

async function setup() {
    img = await loadImage('note_screenshot.png'); // Load image

    createCanvas(2 * 410, 470); // 250x350 images + space for text

    pixelDensity(1);

    img.resize(410, 450);
    img.loadPixels();

     // Convert to RGB matrices
    for (let y = 0; y < img.height; y++) {
        let rRow = [];
        let gRow = [];
        let bRow = [];
        for (let x = 0; x < img.width; x++) {
            let index = 4 * (x + y * img.width);
            rRow.push(img.pixels[index]);
            gRow.push(img.pixels[index + 1]);
            bRow.push(img.pixels[index + 2]);
        }
        rMatrix.push(rRow);
        gMatrix.push(gRow);
        bMatrix.push(bRow);
    }

    // Prepare the left image once in a buffer
    originalGfx = createGraphics(img.width, img.height);
    originalGfx.image(img, 0, 0);

    // Slider
    // slider = createSlider(1, 250, k, 1);
    // slider.position(10, height + 5);
    // slider.style('width', `${width - 20}px`);
}

function draw() {
    background(255);
    //k = slider.value();

    // Draw original from buffer
    image(originalGfx, 0, 0);

    // Compute SVD for each channel
    let svdR = numeric.svd(rMatrix);
    let svdG = numeric.svd(gMatrix);
    let svdB = numeric.svd(bMatrix);

    // Compress R channel
    let Ur = svdR.U.map(row => row.slice(0, k));
    let Sr = numeric.diag(svdR.S.slice(0, k));
    let Vr = svdR.V.map(row => row.slice(0, k));
    let USr = numeric.dot(Ur, Sr);
    compressedR = numeric.dot(USr, numeric.transpose(Vr));

    // Compress G channel
    let Ug = svdG.U.map(row => row.slice(0, k));
    let Sg = numeric.diag(svdG.S.slice(0, k));
    let Vg = svdG.V.map(row => row.slice(0, k));
    let USg = numeric.dot(Ug, Sg);
    compressedG = numeric.dot(USg, numeric.transpose(Vg));

    // Compress B channel
    let Ub = svdB.U.map(row => row.slice(0, k));
    let Sb = numeric.diag(svdB.S.slice(0, k));
    let Vb = svdB.V.map(row => row.slice(0, k));
    let USb = numeric.dot(Ub, Sb);
    compressedB = numeric.dot(USb, numeric.transpose(Vb));

    // Draw compressed image (right)
    loadPixels();
    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let r = constrain(compressedR[y][x], 0, 255);
            let g = constrain(compressedG[y][x], 0, 255);
            let b = constrain(compressedB[y][x], 0, 255);
            
            let index = 4 * ((x + img.width) + y * width);
            pixels[index] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();

    showInfo();
    noLoop();
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
