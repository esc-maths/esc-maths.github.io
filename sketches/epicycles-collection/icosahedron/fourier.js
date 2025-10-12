//===========================
// Complex Number Class
//===========================

class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  add(c) {
    this.re += c.re;
    this.im += c.im;
    return this;
  }

  mult(c) {
    const re = this.re * c.re - this.im * c.im;
    const im = this.re * c.im + this.im * c.re;
    return new Complex(re, im);
  }

  scale(factor) {
    this.re /= factor;
    this.im /= factor;
    return this;
  }

  get amp() {
    return Math.sqrt(this.re ** 2 + this.im ** 2);
  }

  get phase() {
    return Math.atan2(this.im, this.re);
  }
}


//===========================
// Discrete Fourier Transform (DFT)
//===========================

/**
 * Generic DFT function for both even and odd cases.
 * @param {Complex[]} x - Input signal as array of Complex numbers.
 * @param {boolean} isOdd - True for odd DFT, false for even DFT.
 */
function dft(x, isOdd = false) {
  const X = [];
  const N = x.length;
  const half = isOdd ? (N - 1) / 2 : N / 2;

  for (let k = -half; k <= (isOdd ? half : half - 1); k++) {
    let sum = new Complex(0, 0);

    for (let l = 0; l < N; l++) {
      const phi = (k * 2 * Math.PI * l) / N;
      const c = new Complex(Math.cos(phi), -Math.sin(phi));
      sum.add(x[l].mult(c));
    }

    sum.scale(N);

    const freq = k;
    X[k + half] = {
      re: sum.re,
      im: sum.im,
      freq,
      amp: sum.amp,
      phase: sum.phase
    };
  }
  return X;
}

/**
 * DFT for odd signals (lower frequencies)
 */
function dftOdd(x) {
  return dft(x, true);
}

/**
 * DFT for even signals (lower frequencies)
 */
function dftEven(x) {
  return dft(x, false);
}


//===========================
// Fourier Series Reconstruction
//===========================

/**
 * Fourier series representation using Fourier coefficients.
 * @param {Array} fourier - Array of Fourier coefficients.
 * @param {number} t - Time or angle parameter.
 * @param {number} terms - Number of terms to use in the reconstruction.
 */
function fourierSeries(fourier, t, terms) {
  let sumX = 0;
  let sumY = 0;

  for (let k = 0; k < terms; k++) {
    const { freq: f, re: r, im: i } = fourier[k];
    sumX += Math.cos(f * t) * r - Math.sin(f * t) * i;
    sumY += Math.cos(f * t) * i + Math.sin(f * t) * r;
  }

  return createVector(sumX, sumY);
}
