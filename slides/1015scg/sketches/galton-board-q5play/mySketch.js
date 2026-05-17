/**
 * made with q5play!
 * https://q5play.org
 */

let xmax = 600;
let ymax = 600;
await createCanvas(xmax, ymax);
displayMode(CENTER);
world.gravity.y = 10;

// q5play.renderStats = true;

let xgap = 22;
let num_rows = 18;
let num_cols = 26; // Number of pin columns (horizontal pins)
let y0 = -200;
let ygap = (Math.sqrt(3) * xgap) / 2;
let xcenter = 0;
let ball_diameter = 4.5;
let wall_height = 150;
let count = 0;
let max_count = 1700;
let num_bins = xmax / xgap;
let bin_width = xgap;
let this_ball;
let ycoords_list;
let row, col;
let x_vals, y_vals;
let gaussian_has_been_fitted = 0;

let balls = new Group();
balls.diameter = ball_diameter;
balls.bounciness = 0;
balls.friction = 3;

let pins = new Group();
pins.diameter = 3;
pins.color = "black";
pins.bounciness = 0.6;
pins.physics = "static";
pins.friction = 5;

let walls = new Group();
walls.color = "black";
walls.physics = "static";

make_pins();
make_floor_and_bins();

q5.update = function() {
	background('white');
	
	// Reset by reloading the page on mouse press
	if (mouse.presses()) {
		location.reload();
	}
	
	if (count < max_count) {
		let i;
		for (i = 0; i < 4; i++) {
			drop_new_ball();
		}
	} 
	if (count == max_count) {
		if (frameCount % 60 == 0) {
			ycoords_list = fit_gaussian();
			gaussian_has_been_fitted = 1;
		}
		if (gaussian_has_been_fitted == 1) {
			draw_gaussian();
		}
	}

	textSize(15);
	fill('black');
	text('Galton board', -xmax/2 + 20, -ymax/2 + 20)
	text('Click to reset', -xmax/2 + 20, -ymax/2 + 45)
	//text(count, -xmax/2 + 20, -ymax/2 + 70);
};

function drop_new_ball() {
	this_ball = new balls.Sprite();
	count += 1;
	this_ball.x = xcenter + 0.5 * 3 * ball_diameter * 3 * (randn_bm() - 0.5) + 4;
	this_ball.y = y0 + 60 + 8 * ball_diameter * (-5 + 2 * Math.random());
}

function make_pins() {
	// Calculate total width of pin arrangement
	let total_width = (num_cols - 1) * xgap;
	let start_x = -total_width / 2;
	
	for (row = 0; row < num_rows; row++) {
		// Alternate offset for staggered pattern (like the Galton board)
		let x_offset = (row % 2 === 0) ? 0 : xgap / 2;
		
		for (col = 0; col < num_cols; col++) {
			let this_pin = new pins.Sprite();
			// Position pins in a staggered grid that spans both sides
			this_pin.x = start_x + col * xgap + x_offset;
			this_pin.y = y0 + row * ygap;
		}
	}
}

function make_floor_and_bins() {
	let i;
	for (i = 0; i < num_bins; i++) {
		let bin_leftx = i * bin_width - xmax / 2 + 2;
		let this_wall = new walls.Sprite(bin_leftx, (ymax - wall_height) / 2, 2, wall_height);
	}
	let floor = new walls.Sprite(0, ymax / 2 - 1, xmax, 2);
}

// From https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
function randn_bm() {
	let u = 0, v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
	num = num / 10.0 + 0.5;
	if (num > 1 || num < 0) return randn_bm()
	return num
}

function fit_gaussian() {
	x_vals = [];
	y_vals = [];
	let i, mean_x, std_x, xcoord, z_score, y_val, y_range;
	
	for (i = 0; i < balls.length; i++) {
		this_ball = balls[i];
		if (Math.abs(this_ball.vel.y) < 0.005 && 
			this_ball.y > ymax/2 - wall_height) {
			x_vals.push(this_ball.x);
			y_vals.push(this_ball.y);
		} 
	}
	
	if (x_vals.length > 1) {
		mean_x = sumArray(x_vals) / x_vals.length;
		std_x = getStandardDeviation(x_vals);
	} 
	
	y_range = ymax/2 - Math.min.apply(Math, y_vals);
	ycoords_list = [];
	
	for (xcoord = -xmax/2; xcoord < xmax/2; xcoord += 10) {
		z_score = (xcoord - mean_x) / std_x;
		y_val = ymax/2 - y_range * Math.exp(-0.5 * z_score ** 2);
		ycoords_list.push(y_val);
	}
	return ycoords_list;
}

function draw_gaussian() {
	fill('red');
	let xcoord;
	let i = 0;
	for (xcoord = -xmax/2; xcoord < xmax/2; xcoord += 10) {
		circle(xcoord, ycoords_list[i], 10);
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