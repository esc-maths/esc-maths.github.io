/*

FFT music visualizer

Date: 12/Sep/2025
Site: https://jcponce.github.io/

*/

/* Code based on example from Daniel Shiffman. */

// Variables for FFT
let song;
let fft;
let spectra = [];
let mic; 
let index;

// Variables for interaction
let mode = 0;
let angle = 0;

// Use HTML globals
// let rotateView = false; // declared in HTML <script>
// let starMicro = false;  // declared in HTML <script>

let songsList = [
  "dance-land.mp3",
  "https://www.dynamicmath.xyz/sketches/shaders/topology/Disco-Science.mp3", 
  "https://www.dynamicmath.xyz/assets/audio/01-Time-In-A-Bottle.mp3",
];

function preload() {
  index = Math.floor(Math.random() * songsList.length);
  song = loadSound(songsList[index]);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);

  document.getElementById('playMusic').onclick = () => {
    toggle();
  };

  mic = new p5.AudioIn();
  fft = new p5.FFT(0.5, 64);

  document.getElementById('micro').onclick = () => {
    starMicro = !starMicro;
    let divElem = document.getElementById('hide');
    let divInfo = document.getElementById('info');
    if (!starMicro) {
      divElem.style.display = 'block'; 
      divInfo.style.display = 'block'; 
      mic.stop();
    } else {
      divElem.style.display = 'none';
      divInfo.style.display = 'none'; 
      mic.start();
      mic.connect(fft);
      song.pause();
      song.setVolume(1);
    }
  };

  frameRate(15);
  colorMode(HSB);
  createInfoLinks();

  let camZ = (height/2.0) / tan(PI*30.0/180.0); // default WEBGL camera distance
  camera(0, 0, camZ * 0.07, 0, 0, 0, 0, 1, 0);  // move slightly closer
  
}

function draw() {
  perspective(60 * PI/180, width/height, 1, 1000);

  // orbit controls with mouse drag/scroll
  orbitControl();

  if (mode == 0) background(0);
  else background(255);

  let spectrum = fft.analyze();
  spectra.push(new Spectrum(spectrum));
  if (spectra.length > 30) spectra.splice(0, 1);

  let hh = starMicro ? 6 : 3;

  rotateX(1.3);
  if (rotateView) {
    rotateZ(angle);
    angle -= 0.005;
  } else {
    rotateZ(angle);
  }
  rotateZ(-0.5);
  translate(-15, -15, -4);

  ambientLight(55);
  pointLight(210, 210, 210, 50, 50, 30);

  noStroke();
  for (let j = 0; j < spectra.length; j++) {
    let spec = spectra[j].getSpectrum();
    for (let i = 0; i < 32; i++) {
      let adjust = (i + 1) * (i * 1) / 90; 
      let h = map(spec[i] * adjust, 0, 255, 0, hh);
      fill(i*12, 80, 100);
      push();
      translate(i, j, h/2);
      box(0.85, 0.85, h);
      pop();
    }
  }
}

function toggle() {
  if (song.isPlaying()) {
    song.pause();
    song.setVolume(1);
  } else {
    song.loop();
  }
}

function keyPressed() {
  if (keyCode == 32) mode = 1 - mode;
}

function createInfoLinks() {
  let hleft = select('#hud-left');
  let nameSong, linkInfo;
  if (index == 0) {
    nameSong = '8 bit mentality <i class="fa fa-info-circle"></i>';
    linkInfo = 'https://soundcloud.com/stage7/8-bit-mentality';
  } else if (index == 1) {
    nameSong = 'Disco Science <i class="fa fa-info-circle"></i>';
    linkInfo = 'https://en.wikipedia.org/wiki/Production_(album)';
  } else if (index == 2) {
    nameSong = 'Time in a bottle <i class="fa fa-info-circle"></i>';
    linkInfo = 'https://en.wikipedia.org/wiki/Time_in_a_Bottle';
  }
  createA(linkInfo, nameSong, '_blank').parent(hleft);
}

class Spectrum {
  constructor(spectrum) {
    this.spectrum = spectrum;
  }
  getSpectrum() {
    for (let i = 0; i < this.spectrum.length; i++) {
      this.spectrum[i] *= 0.95;
    }
    return this.spectrum;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}