let xmax = 600;
let ymax = 600; // Updated to 600x600
let xgap = 20;
let num_rows = 20;
let num_cols = 29; // Added to establish the grid width for the new pin logic

let y0 = 100;
let ygap = (Math.sqrt(3) * xgap) / 2;
let xcenter = xmax / 2;
let ball_diameter = 6;
let wall_height = 150;
let count = 0;
let max_count = 1000;
let num_bins = xmax / xgap;
let bin_width = xgap;
let walls, box, pins, balls, static_balls;
let ycoords_list;
let movement_happening = 1;
let reset_button;
let colors_list = [
  '#123C7A', // royal blue
  '#1E88E5', // bright blue
  '#29B6F6', // sky neon blue
  '#64FFDA'  // aqua highlight
];

function setup() {
  new Canvas(xmax, ymax);
  world.gravity.y = 10;

  balls = new Group();
  balls.diameter = ball_diameter;
  balls.bounciness = 0;
  balls.friction = 3;
  //balls.color = "lime";

  static_balls = new Group();
  static_balls.diameter = ball_diameter;
  //static_balls.color = "lime";
  static_balls.collider = "static";

  reset_button = new Sprite(xmax - 50, 25, 80, 30);
  reset_button.color = "white";
  reset_button.text = "Reset";
  reset_button.textSize = 20;
  reset_button.collider = "static";
  
  make_pins();
  make_box_and_bins();
}

function draw() {
  if (movement_happening) {
    main_draw_loop();
  }
  if (reset_button.mouse.pressing()) {
    count = 0;
    balls.removeAll();
    static_balls.removeAll();
    movement_happening = 1;
    loop();
  }
}

function main_draw_loop() {
  background("white");
  
  if (frameCount % 1 == 0 && count < max_count) {
    drop_new_ball();
  }
  if (frameCount % 30 == 0 && balls.length > 0) {
    reduce_computation_load();
  }
  
  // Show how many balls have been released
  textSize(20);
  fill("black");
  text(count, 10, 25);
  
  // Draw the gaussian at the end
  if (count == max_count && static_balls.length > 1) {
    ycoords_list = fit_gaussian();
    draw_gaussian();
  }
  if (static_balls.length == max_count) {
    movement_happening = 0;
    noLoop();
  }
}

function mousePressed() {
  loop();
}

function drop_new_ball() {
  let this_color;
  let this_ball = new balls.Sprite();
  count += 1;
  this_ball.x = xcenter + 0.5 * ball_diameter * (-1 + 2 * Math.random());
  this_ball.y = y0 - 20 + 8 * ball_diameter * (-1 + 2 * Math.random());
  this_color = colors_list[count % colors_list.length];
	this_ball.color = this_color;
	this_ball.stroke = this_ball.color;
}

function make_pins() {
  pins = new Group();
  pins.collider = "static";
  pins.diameter = 3;
  pins.color = "white";
  pins.friction = 0;

  // Center the staggered layout globally relative to xcenter
  let total_width = (num_cols - 1) * xgap;
  let start_x = xcenter - total_width / 2;
  
  for (let row = 0; row < num_rows; row++) {
    // Alternate offset for staggered pattern
    let x_offset = (row % 2 === 0) ? 0 : xgap / 2;
    
    for (let col = 0; col < num_cols; col++) {
      let this_pin = new pins.Sprite();
      this_pin.x = start_x + col * xgap + x_offset;
      this_pin.y = y0 + row * ygap;
    }
  }
}

function make_box_and_bins() {
  box = new Sprite([
    [1, 1],
    [xmax, 1],
    [xmax, ymax],
    [1, ymax],
    [1, 1]
  ]);
  box.collider = "static";
  box.shape = "chain";
  box.color = "skyblue";

  walls = new Group();
  walls.width = 1;
  walls.height = wall_height;
  walls.color = "white";
  walls.collider = "static";

  //let bin_width = xmax / num_bins;
  for (let i = 0; i <= num_bins; i++) {
    let this_wall = new walls.Sprite();
    let bin_leftx = i * bin_width;
    this_wall.x = bin_leftx;
    this_wall.y = ymax - wall_height / 2;
  }
}

function reduce_computation_load() {
  for (let i = balls.length - 1; i >= 0; i--) {
    let this_ball = balls[i];
    if (
      Math.abs(this_ball.vel.x) < 0.1 &&
      Math.abs(this_ball.vel.y) < 0.1 &&
      this_ball.y > ymax - wall_height
    ) {
      let new_static = new static_balls.Sprite();
      new_static.x = this_ball.x;
      new_static.y = this_ball.y;
      this_ball.remove();
    }
  }
  for (let i = 0; i < static_balls.length; i++) {
    static_balls[i].sleeping = true;
  }
}

function fit_gaussian() {
  let x_vals = new Array(static_balls.length);
  let y_vals = new Array(static_balls.length);
  for (let i = 0; i < static_balls.length; i++) {
    let this_static_ball = static_balls[i];
    x_vals[i] = this_static_ball.x;
    y_vals[i] = ymax - this_static_ball.y;
  }
  let mean_x = sumArray(x_vals) / x_vals.length;
  let std_x = getStandardDeviation(x_vals);
  let max_y = Math.max.apply(Math, y_vals);
  
  ycoords_list = [];
  for (let xcoord = 0; xcoord < xmax; xcoord += 10) {
    let z_score = (xcoord - mean_x) / std_x;
    let y_val = max_y * Math.exp(-0.5 * z_score ** 2);
    ycoords_list.push(ymax - y_val);
  }
  return ycoords_list;
}

function draw_gaussian() {
  static_balls.draw();
  textSize(10);
  let idx = 0;
  for (let xcoord = 0; xcoord < xmax; xcoord += 10) {
    text("🔴", xcoord, ycoords_list[idx]);
    idx += 1;
  }
}

function sumArray(array) {
  return array.reduce((total, item) => total + item, 0);
}

function getStandardDeviation(array) {
  const n = array.length;
  const mean = array.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}