/*
 Source Code
 https://openprocessing.org/sketch/390536
 by Emoc
 21 nov. 2016
 emoc <at> codelab.fr
 visual help to explain 2D transformations :
 translate(), rotate(), scale(), pushMatrix(),  popMatrix() 
 in p5js, pushMatrix() = push(), popMatrix() = pop()
*/

let translation_x;
let translation_y;
let rotation;
let scaling;

// change transformation (translate, scale, rotate) order
let transformation_order = new Array(3);

let codeStr; // renamed from 'code'

let c = new Array(3);
let posXSliders;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  translation_x = 0;
  translation_y = 0;
  rotation = 0;
  scaling = 1;

  posXSliders = 800;
  slider_translation_x = createSlider(-100, 400, translation_x, 1);
  slider_translation_x.position(posXSliders, 50);
  slider_translation_y = createSlider(-100, 400, translation_y, 1);
  slider_translation_y.position(posXSliders, 80);
  slider_rotation = createSlider(0, TWO_PI, rotation, 0.01);
  slider_rotation.position(posXSliders, 110);
  slider_scaling = createSlider(0.5, 2, scaling, 0.01);
  slider_scaling.position(posXSliders, 140);

  order = createRadio();
  order.option(1, 'Translate, Scale, Rotate');
  order.option(2, 'Translate, Rotate, Scale');
  order.option(3, 'Rotate, Translate, Scale');
  order.option(4, 'Rotate, Scale, Translate');
  order.option(5, 'Scale, Rotate, Translate');
  order.option(6, 'Scale, Translate, Rotate');
  order.position(posXSliders, 170);
  order.style('width', '180px');
  order.changed(changeOrder);
  
  order.selected('1'); // default selection
  transformation_order = [0, 1, 2]; // match default

  button = createButton('reset');
  button.position(posXSliders, 320);
  button.mousePressed(reset);
}

function draw() {

  translation_x = slider_translation_x.value();
  translation_y = slider_translation_y.value();
  rotation = slider_rotation.value();
  scaling = slider_scaling.value();

  // white page!
  fill(230);
  noStroke();
  rect(0, 0, width, height);

  fill(255)
  beginShape();
  vertex(0, 0);
  vertex(500, 0);
  vertex(500, 500);
  vertex(0, 500);
  endShape(CLOSE);

  // reference matrix
  drawGrid([200, 200, 200], 50, 10, 0, 0, false);

  codeStr = "pushMatrix();\n"; // renamed

  // transformed matrix
  push();

  for (let i = 0; i < transformation_order.length; i++) {
    switch (transformation_order[i]) {
      case 0:
        translate(translation_x, translation_y);
        codeStr += "translate(" + int(translation_x) + ", " + int(translation_y) + "); \n";
        break;
      case 1:
        scale(scaling);
        codeStr += "scale(" + int(scaling * 100) / 100 + ");\n";
        break;
      case 2:
        rotate(rotation);
        codeStr += "rotate(" + int(rotation * 100) / 100 + ");\n";
        break;
    }
  }

  drawGrid([0, 0, 0], 50, 10, 0, 0, true);
  pop();

  codeStr += "popMatrix();\n"; // renamed

  // sliders text
  fill(0);
  text("translation_x", posXSliders, 50);
  text("translation_y", posXSliders, 80);
  text("rotation", posXSliders, 110);
  text("scaling", posXSliders, 140);

  // print matrix transform code on screen  
  fill(200, 200, 200);
  stroke(0);
  rect(posXSliders - 10, 370, 180, 140, 12);
  fill(0);
  textSize(18);
  text(codeStr, posXSliders, 400); // renamed

}

function reset() { // activated by 'reset' button
  slider_translation_x.value(0);
  slider_translation_y.value(0);
  slider_rotation.value(0);
  slider_scaling.value(1);
  order.selected('1'); // reset radio to default
  transformation_order = [0, 1, 2]; // ensure order array matches
}

function changeOrder() { // activated by radio buttons
  print("order_value : " + order.value());
  switch (order.value()) {
    case '1':
      transformation_order = [0, 1, 2];
      break;
    case '2':
      transformation_order = [0, 2, 1];
      break;
    case '3':
      transformation_order = [2, 0, 1];
      break;
    case '4':
      transformation_order = [2, 1, 0];
      break;
    case '5':
      transformation_order = [1, 2, 0];
      break;
    case '6':
      transformation_order = [1, 0, 2];
      break;
  }
  print(transformation_order);
}



function drawGrid(c, cell_width, cell_number, start_x, start_y, visible_captions) {

  push();
  stroke(c[0], c[1], c[2]);
  strokeWeight(3);
  fill(c[0], c[1], c[2]);

  // draw orthogonal grid
  for (let n = 0; n <= cell_number; n++) {
    let x = start_x + (n * cell_width);
    line(x, start_y, x, start_y + (cell_number * cell_width));
    let y = start_y + (n * cell_width);
    line(start_x, y, start_x + (cell_number * cell_width), y);
  }

  // axis & arrows
  let end_x = start_x + cell_width * (cell_number + 1);
  let end_y = start_y + cell_width * (cell_number + 1);

  // x axis
  line(start_x, start_y, end_x, start_y);
  line(end_x - (cell_width / 6), start_y - (cell_width / 6), end_x, start_y);
  line(end_x - (cell_width / 6), start_y + (cell_width / 6), end_x, start_y);

  // y axis
  line(start_x, start_y, start_x, end_y);
  line(start_x - (cell_width / 6), end_y - (cell_width / 6), start_x, end_y);
  line(start_x + (cell_width / 6), end_y - (cell_width / 6), start_x, end_y);
  pop();

  push();
  stroke(c[0], c[1], c[2]);
  fill(c[0], c[1], c[2]);
  // axis captions
  if (visible_captions) {
    textSize(12);
    text("X", end_x + 20, start_y + 15);
    text("Y", start_x + 10, end_y + 20);
  }

  // graduations
  if (visible_captions) {
    textSize(10);
    for (let n = 0; n <= cell_number; n++) {
      let x = start_x + (n * cell_width);
      let y = start_y + (n * cell_width);
      if (n % 2 == 0 && (slider_translation_y.value() > 0 || slider_translation_x.value() > 0)) {
        text("(" + int(n * cell_width) + ", 0)", x - cell_width / 4, start_y - cell_width / 8);
        if (n > 0 && (slider_translation_y.value() > 0 || slider_translation_x.value() > 0)) text("(0, " + int(n * cell_width) + ")", start_x - cell_width / 4, y - cell_width / 8);
      }
    }
  }
  pop();
}
