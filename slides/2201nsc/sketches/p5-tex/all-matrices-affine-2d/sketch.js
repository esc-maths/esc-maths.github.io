function setup() {
  createCanvas(800, 500);
  overflow('hidden');
  background(255);
  writeTeX();
}

let sizeFont = 45;

function writeTeX() {
  //background(255); // clear on redraw

  let col1 = width * 0.02; // left column
  let col2 = width * 0.45; // right column
  let row1 = height * 0.02; // top row
  let row2 = height * 0.52; // bottom row

  // Scale
  let scaleEq = createTeX(
    "{\\displaystyle \\begin{pmatrix} s_x & 0 & 0 \\\\ 0 & s_y & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}}"
  );
  scaleEq.position(col1, row1);
  scaleEq.size(sizeFont);
  scaleEq.play("createFill", 0, 3);

  let scaleLabel = createTeX("{\\text{Scale}}");
  scaleLabel.position(col1 + 110, row1 + 180);
  scaleLabel.play("createFill", 0, 3);

  // Rotation
  let rotationEq = createTeX(
    "{\\displaystyle \\begin{pmatrix} \\cos \\theta & -\\sin \\theta & 0 \\\\ \\sin \\theta & \\cos \\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}}"
  );
  rotationEq.position(col2, row1);
  rotationEq.size(sizeFont);
  rotationEq.play("createFill", 0, 3);

  let rotationLabel = createTeX("{\\text{Rotation}}");
  rotationLabel.position(col2 + 150, row1 + 180);
  rotationLabel.play("createFill", 0, 3);

  // Shear
  let shearEq = createTeX(
    "{\\displaystyle \\begin{pmatrix} 1 & h_x & 0 \\\\ h_y & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}}"
  );
  shearEq.position(col1, row2);
  shearEq.size(sizeFont);
  shearEq.play("createFill", 0, 3);

  let shearLabel = createTeX("{\\text{Shear}}");
  shearLabel.position(col1 + 110, row2 + 190);
  shearLabel.play("createFill", 0, 3);

  // Translation
  let translationEq = createTeX(
    "{\\displaystyle \\begin{pmatrix} 1 & 0 & \\Delta x \\\\ 0 & 1 & \\Delta y \\\\ 0 & 0 & 1 \\end{pmatrix}}"
  );
  translationEq.position(col2 + 65, row2);
  translationEq.size(sizeFont);
  translationEq.play("createFill", 0, 3);

  let translationLabel = createTeX("{\\text{Translation}}");
  translationLabel.position(col2 + 130, row2 + 190);
  translationLabel.play("createFill", 0, 3);
}
