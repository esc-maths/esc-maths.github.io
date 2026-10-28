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
    recovery: [0, 130, 0],
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