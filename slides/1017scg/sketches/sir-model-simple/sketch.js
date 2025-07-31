/*
Coronavirus simulation  by 
Juan Carlos Ponce Campuzano
https://jcponce.github.io

31/Jul/2025

Modernized version with ES6+ features and reset button
*/

// Configuration
const config = {
  population: 150,
  personSize: 15,
  recoveryTime: 500,
  deathChance: 0, // Out of 100%
  socialDistance: 0, // Out of 100%
  emojis: {
    normal: "🙂",
    sick: "🥵",
    recovery: "😎",
    dead: "💀"
  },
  colors: {
    normal: [0, 0, 255],
    sick: [204, 0, 0],
    recovery: [0, 180, 0],
    dead: [255, 250, 250]
  }
};

// Simulation state
let simulationState = {
  bounds: { x: 0, y: 0 },
  people: [],
  collisions: true,
  counts: {
    normal: 0,
    sick: 0,
    recovery: 0,
    dead: 0,
    socialDistance: 0
  },
  plotSize: 120,
  frameCount: 0
};

// Constants
const NORMAL = 0;
const SICK = 1;
const RECOVER = 2;
const DEAD = 3;

// DOM elements
let resetButton;

function setup() {
  // Initialize canvas
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  
  simulationState.bounds.x = windowWidth;
  simulationState.bounds.y = windowHeight - simulationState.plotSize;
  
  textStyle(BOLD);

  // Create reset button
  resetButton = createButton('Reset Simulation');
  resetButton.position(25, 140);
  resetButton.mousePressed(completeReset);
  resetButton.addClass('button');

  initializeSimulation();
}

function draw() {
  // Track frames for recovery timing
  simulationState.frameCount++;
  
  // Clear entire canvas
  // background(0);
  
  // Draw main simulation area
  noStroke();
  fill(0);
  rect(0, 0, simulationState.bounds.x, simulationState.bounds.y);

  // Update and display people
  for (const person of simulationState.people) {
    person.move();
    person.display();
  }

  displayStats();

  if (simulationState.counts.sick === 0) {
    displayEnd();
  } else {
    displayGraph();
  }
}

function initializeSimulation() {
  simulationState.people = [];
  simulationState.counts = {
    normal: config.population,
    sick: 0,
    recovery: 0,
    dead: 0,
    socialDistance: 0
  };
  simulationState.frameCount = 0;

  // Clear graph area
  noStroke();
  fill(120);
  rect(0, simulationState.bounds.y, width, height);

  // Create population
  for (let i = 0; i < config.population; i++) {
    const person = new Person(
      random(simulationState.bounds.x),
      random(simulationState.bounds.y)
    );
    simulationState.people.push(person);

    if (i / config.population * 100 < config.socialDistance) {
      person.practiceSocialDistance();
    }
  }

  // Patient zero doesn't practice social distancing
  for (const person of simulationState.people) {
    if (!person.socialDistance) {
      person.setState(SICK);
      break;
    }
  }
}

function completeReset() {
  // Clear everything and start fresh
  background(0);
  initializeSimulation();
}

function displayStats() {
  noStroke();
  textAlign(LEFT);
  textSize(14);

  // Background panel
  fill(255, 200);
  rect(0, 0, 200, 130);

  // Stats text
  fill(0);
  text(`Total: ${simulationState.people.length}`, 10, 20);
  text(`Social distance: ${simulationState.counts.socialDistance} (${percentage(simulationState.counts.socialDistance, simulationState.people.length)}%)`, 10, 40);

  fill(color(...config.colors.normal));
  text(`Susceptible: ${simulationState.counts.normal} (${percentage(simulationState.counts.normal, simulationState.people.length)}%)`, 10, 60);

  fill(color(...config.colors.sick));
  text(`Infected: ${simulationState.counts.sick} (${percentage(simulationState.counts.sick, simulationState.people.length)}%)`, 10, 80);

  fill(color(...config.colors.recovery));
  text(`Recovered: ${simulationState.counts.recovery} (${percentage(simulationState.counts.recovery, simulationState.people.length)}%)`, 10, 100);
}

function displayGraph() {
  const sickHeight = map(simulationState.counts.sick, 0, simulationState.people.length, height - simulationState.plotSize, height) - simulationState.bounds.y;
  const normalHeight = map(simulationState.counts.normal, 0, simulationState.people.length, height - simulationState.plotSize, height) - simulationState.bounds.y;
  const recoveryHeight = map(simulationState.counts.recovery, 0, simulationState.people.length, height - simulationState.plotSize, height) - simulationState.bounds.y;
  const deadHeight = map(simulationState.counts.dead, 0, simulationState.people.length, height - simulationState.plotSize, height) - simulationState.bounds.y;

  const speed = simulationState.frameCount * 0.3;
  const y = height;
  const rsize = 7;

  strokeWeight(1);

  // Dead (if death chance > 0)
  if (config.deathChance > 0) {
    stroke(color(...config.colors.dead));
    fill(color(...config.colors.dead));
    ellipse(speed, y - deadHeight, rsize);
  }

  // Sick
  stroke(color(...config.colors.sick));
  fill(color(...config.colors.sick));
  ellipse(speed, y - sickHeight, rsize);

  // Normal
  stroke(color(...config.colors.normal));
  fill(color(...config.colors.normal));
  ellipse(speed, y - normalHeight, rsize);

  // Recovered
  stroke(color(...config.colors.recovery));
  fill(color(...config.colors.recovery));
  ellipse(speed, y - recoveryHeight, rsize);
}

function displayEnd() {
  noStroke();
  fill(250);
  textAlign(CENTER);
  textSize(60);
  text("OUTBREAK DONE", width / 2, height / 2);
}

function percentage(value, maxValue) {
  return (value / maxValue * 100.0).toFixed(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  simulationState.bounds.x = windowWidth;
  simulationState.bounds.y = windowHeight - simulationState.plotSize;
  resetButton.position(20, 20);
  completeReset();
}