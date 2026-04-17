let dino;
let obstacles = [];
let gravity = 0.8;
let score = 0;

let state = "start"; // "start", "playing", "gameover"
let spawnTimer = 0;

function setup() {
  createCanvas(900, 200);
  dino = new Dino();
}

function draw() {
  background(240);
  
  if (justRestarted) {
    justRestarted = false;
  }

  // Ground
  stroke(0);
  line(0, height - 20, width, height - 20);

  if (state === "start") {
    showStartScreen();
    return;
  }

  if (state === "playing") {
    runGame();
  }

  if (state === "gameover") {
    showGameOver();
  }

  // Score
  textSize(16);
  textAlign(LEFT);
  fill(0);
  text("Score: " + score, 10, 20);
}

function showStartScreen() {
  textAlign(CENTER);
  fill(0);

  textSize(28);
  text("Dino Game", width / 2, height / 2 - 10);

  textSize(16);
  text("Press SPACE to start", width / 2, height / 2 + 20);
}

function runGame() {
  dino.update();
  dino.show();

  // Spawn obstacles
  spawnTimer++;
  if (spawnTimer > 90) {
    obstacles.push(new Obstacle());
    spawnTimer = 0;
  }

  // Obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].show();

    if (dino.hits(obstacles[i])) {
      state = "gameover";
    }

    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
      score++;
    }
  }
}

function showGameOver() {
  textAlign(CENTER);
  fill(0);

  textSize(32);
  text("Game Over", width / 2, height / 2 - 10);

  textSize(16);
  text("Press SPACE to restart", width / 2, height / 2 + 20);
}

let justRestarted = false;

function keyPressed() {
  if (key === ' ') {
    if (state === "start") {
      state = "playing";
    } 
    else if (state === "playing") {
      if (!justRestarted) dino.jump();
    } 
    else if (state === "gameover") {
      resetGame();
      state = "playing";
      justRestarted = true;
    }
  }
}

function resetGame() {
  obstacles = [];
  score = 0;
  spawnTimer = 0;
  dino = new Dino();
}

// Dino class
class Dino {
  constructor() {
    this.size = 30;
    this.bottom = this.size + 20;
    this.x = 50;
    this.y = height - (this.bottom);
    this.vy = 0;
    
  }

  jump() {
    if (this.y >= height - this.bottom) {
      this.vy = -12;
    }
  }

  update() {
    this.y += this.vy;
    this.vy += gravity;

    if (this.y > height - this.bottom) {
      this.y = height - this.bottom;
      this.vy = 0;
    }
  }

  show() {
    fill(50);
    rect(this.x, this.y, this.size, this.size);
  }

  hits(obstacle) {
    return (
      this.x < obstacle.x + obstacle.w &&
      this.x + this.size > obstacle.x &&
      this.y < obstacle.y + obstacle.h &&
      this.y + this.size > obstacle.y
    );
  }
}

// Obstacle class
class Obstacle {
  constructor() {
    this.w = 10;
    this.h = random(20, 40);
    this.x = width;
    this.y = height - 20 - this.h;
    this.speed = 6;
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    fill(0);
    rect(this.x, this.y, this.w, this.h);
  }

  offscreen() {
    return this.x < -this.w;
  }
}