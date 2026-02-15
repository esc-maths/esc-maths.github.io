/*
  Source code: 
  https://x.com/yuruyurau/status/1972323745344938475
  
  This version by Juan Carlos Ponce Campuzano
  14/Feb/2026

*/
let t = 0;
let w = 500;

function setup() {
  createCanvas(w, w);
  stroke(255, 90);
  
}

function draw() {
  background(0, 90);
  t += PI / 120;
  
  for (let i = 10000; i > 0; i--) {
    drawPoint(i);
  }
}

function drawPoint(i) {
  // Original: a=(y,d=mag(k=(y<11?6+sin(y^8)*6:y/5+cos(y/2))*cos(i-t/4),e=y/7-13)+sin(e/4+t)/2)
  
  // y parameter in original function corresponds to i/345 in the loop
  let y = i / 345;
  
  // Calculate k
  let k;
  if (y < 11) {
    k = (6 + sin(y * y * y * y * y * y * y * y) * 6) * cos(i - t / 4);
  } else {
    k = (y / 5 + cos(y / 2)) * cos(i - t / 4);
  }
  
  // Calculate e
  let e = y / 7 - 13;
  
  // Calculate d (magnitude)
  let d = Math.hypot(k, e) + sin(e / 4 + t) / 2;
  
  // Original: point((q=y*k/d*(3+sin(d*2+y/2-t*4)))+60*cos(c=d/2+1-t/2)+200,q*sin(c)+d*29-170)
  
  // Calculate q
  let q = y * k / d * (3 + sin(d * 2 + y / 2 - t * 4));
  
  // Calculate c
  let c = d / 2 + 1 - t / 2;
  
  // Calculate x and y coordinates
  let x = q + 60 * cos(c) + 250;
  let yCoord = q * sin(c) + d * 29 - 150;
  
  point(x, yCoord);
}
