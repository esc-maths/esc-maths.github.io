let xmax = 600;
let ymax = 500;
let xgap = 20;
let num_rows = 17;

let y0 = 80;
let ygap = (Math.sqrt(3) * xgap) / 2;
let xcenter = xmax / 2;
let padding = 5;
let ball_diameter = 6;
let wall_height = 120;
// let num_rows = Math.round((ymax - 1.5 * wall_height) / xgap);
let count = 0;
let max_count = 500;
let num_bins = 16;
let walls, box, pins, balls, static_balls;
let ycoords_list;
let movement_happening = 1;

function setup() {
  new Canvas(xmax, ymax);
  world.gravity.y = 10;

  balls = new Group();
  balls.diameter = ball_diameter;
  balls.friction = 0;
  // balls.bounciness = 0;
  balls.color = "lime";

  static_balls = new Group();
  static_balls.diameter = ball_diameter;
  static_balls.color = "lime"; // 'red';
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
  // clear();
  if (frameCount % 2 == 0 && count < max_count) {
    drop_new_ball();
  }
  if (frameCount % 30 == 0 && balls.length > 0) {
    // Replace balls that have reached the end
    // by static sleeping ones, to reduce load
    reduce_computation_load();
  }
  // Show how many balls have been released
  textSize(20);
  text(count, 10, 25);
  // text(5*Math.round(frameRate()/5),10,50);
  // Draw the gaussian at the end
  if (count == max_count && static_balls.length > 1) {
    ycoords_list = fit_gaussian();
    draw_gaussian();
  }
  if (static_balls.length == max_count) {
    movement_happening = 0;
    // Stop executing draw(), to reduce CPU usage on static screen
    // mousePressed() will restart draw by calling loop()
    noLoop();
  }
}

function mousePressed() {
  loop();
}

function drop_new_ball() {
  this_ball = new balls.Sprite();
  count += 1;
  this_ball.x = xcenter + 0.5 * ball_diameter * (-1 + 2 * Math.random());
  this_ball.y = y0 + 8 * ball_diameter * (-1 + 2 * Math.random());
}

function make_pins() {
  pins = new Group();
  pins.collider = "static";
  pins.diameter = 3;
  pins.color = "white";
  pins.friction = 0;
  // pins.bounciness = 0;

  for (row = 0; row < num_rows; row++) {
    for (col = -padding; col < row + padding; col++) {
      this_pin = new pins.Sprite();
      this_pin.x = xcenter + xgap * (col + 1 / 2 - row / 2);
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

  bin_width = xmax / num_bins;
  for (i = 0; i < num_bins; i++) {
    this_wall = new walls.Sprite();
    bin_leftx = i * bin_width;
    this_wall.x = bin_leftx;
    this_wall.y = ymax - wall_height / 2;
  }
}

function reduce_computation_load() {
  // Replace balls that are not moving with static items
  if (frameCount % 30 == 0) {
    for (i = 0; i < balls.length; i++) {
      this_ball = balls[i];
      if (
        Math.abs(this_ball.vel.x) < 0.1 &&
        Math.abs(this_ball.vel.y) < 0.1 &&
        this_ball.y > ymax - wall_height
      ) {
        new_static = new static_balls.Sprite();
        new_static.x = this_ball.x;
        new_static.y = this_ball.y;
        // new_static.sleeping = true;
        this_ball.remove();
      }
    }
    for (i = 0; i < static_balls.length; i++) {
      this_ball = static_balls[i];
      this_ball.sleeping = true;
    }
  }
}

function fit_gaussian() {
  x_vals = new Array(static_balls.length);
  y_vals = new Array(static_balls.length);
  for (i = 0; i < static_balls.length; i++) {
    this_static_ball = static_balls[i];
    x_vals[i] = this_static_ball.x;
    y_vals[i] = ymax - this_static_ball.y;
  }
  mean_x = sumArray(x_vals) / x_vals.length;
  std_x = getStandardDeviation(x_vals);
  max_y = Math.max.apply(Math, y_vals);
  // xcoords_list = [];
  ycoords_list = [];
  for (xcoord = 0; xcoord < xmax; xcoord += 10) {
    z_score = (xcoord - mean_x) / std_x;
    // y_val = 1/Math.sqrt(2*Math.PI) * Math.exp(-0.5 * z_score**2);
    y_val = max_y * Math.exp(-0.5 * z_score ** 2);
    ycoords_list.push(ymax - y_val);
  }
  return ycoords_list;
}

function draw_gaussian() {
  static_balls.draw();
  textSize(10);
  i = 0;
  for (xcoord = 0; xcoord < xmax; xcoord += 10) {
    text("🔹", xcoord, ycoords_list[i]);
    i += 1;
  }
}

function sumArray(array) {
  const sum = array.reduce((total, item) => total + item);
  return sum;
}

function getStandardDeviation(array) {
  const n = array.length;
  const mean = array.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}
