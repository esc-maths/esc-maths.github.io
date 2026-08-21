let plaintext = "THIS IS A SUPER SECRETE MESSAGE!";
let key = "SECRET";

let plainBits = [];
let keyBits = [];
let cipherBits = [];

let offset = 0;

function setup() {
	createCanvas(1100, 250);
	textFont("monospace");
	textSize(18);

	prepareBits();
}

function draw() {
	background(3, 10, 8);

	// Subtle binary background
	drawBackground();

	// Main sections
	drawPlaintext();
	drawKey();
	drawEncryption();
	drawCiphertext();

	// Animate
	offset += 0.3;

	if (offset > 20) {
		offset = 0;
	}
}


// --------------------------------------------------
// Prepare binary data
// --------------------------------------------------

function prepareBits() {

	plainBits = [];
	keyBits = [];
	cipherBits = [];

	for (let i = 0; i < plaintext.length; i++) {

		let p = plaintext.charCodeAt(i);
		let k = key.charCodeAt(i % key.length);

		let pBits = p.toString(2).padStart(8, "0");
		let kBits = k.toString(2).padStart(8, "0");

		for (let j = 0; j < 8; j++) {

			let pBit = int(pBits[j]);
			let kBit = int(kBits[j]);

			plainBits.push(pBit);
			keyBits.push(kBit);

			// XOR encryption
			cipherBits.push(pBit ^ kBit);
		}
	}
}


// --------------------------------------------------
// Plaintext
// --------------------------------------------------

function drawPlaintext() {

	textAlign(CENTER);

	fill(80, 255, 150);
	textSize(16);
	text("PLAINTEXT", 150, 38);

	textSize(22);

	for (let i = 0; i < plainBits.length; i++) {

		let x = 55 + i * 15;

		// Keep inside left section
		if (x > 280) break;

		let alpha = 150 + 100 * sin(frameCount * 0.05 + i);

		fill(80, 255, 150, alpha);
		text(plainBits[i], x, 90);
	}
}


// --------------------------------------------------
// Key
// --------------------------------------------------

function drawKey() {

	textAlign(CENTER);

	fill(255, 210, 80);
	textSize(16);
	text("KEY", 150, 145);

	textSize(22);

	for (let i = 0; i < keyBits.length; i++) {

		let x = 55 + i * 15;

		if (x > 280) break;

		fill(255, 210, 80, 220);
		text(keyBits[i], x, 195);
	}
}


// --------------------------------------------------
// Encryption operation
// --------------------------------------------------

function drawEncryption() {

	let cx = 450;

	// Incoming lines
	stroke(80, 255, 150, 100);
	line(280, 90, cx - 55, 115);

	stroke(255, 210, 80, 100);
	line(280, 195, cx - 55, 135);

	// XOR box
	noStroke();

	fill(10, 30, 25);
	stroke(100, 255, 180);
	strokeWeight(2);

	rectMode(CENTER);
	rect(cx, 125, 110, 65, 10);

	noStroke();

	fill(100, 255, 180);
	textAlign(CENTER);
	textSize(25);
	text("XOR", cx, 133);

	// Output line
	stroke(80, 220, 255, 120);
	line(cx + 55, 125, 620, 125);

	noStroke();

	// Moving particles
	for (let i = 0; i < 5; i++) {

		let x = cx + 70 + ((offset * 6 + i * 45) % 100);

		fill(100, 220, 255, 180);
		circle(x, 125, 4);
	}
}


// --------------------------------------------------
// Ciphertext
// --------------------------------------------------

function drawCiphertext() {

	textAlign(CENTER);

	fill(80, 220, 255);
	textSize(16);
	text("CIPHERTEXT", 830, 38);

	textSize(22);

	for (let i = 0; i < cipherBits.length; i++) {

		let x = 660 + i * 15;

		if (x > 1030) break;

		// Highlight bits as they pass through
		let highlight =
			abs(x - (660 + ((offset * 40) % 500))) < 25;

		if (highlight) {
			fill(255);
			textSize(26);
		}
		else {
			fill(80, 220, 255, 220);
			textSize(22);
		}

		text(cipherBits[i], x, 130);
	}
}


// --------------------------------------------------
// Background
// --------------------------------------------------

function drawBackground() {

	textSize(11);
	textAlign(CENTER);

	for (let i = 0; i < 80; i++) {

		let x = (i * 137) % width;
		let y = (i * 71 + frameCount * 0.15) % height;

		fill(30, 100, 70, 30);

		text(
			i % 2,
			x,
			y
		);
	}
}