/*
Auxiliary functions
*/

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
      random(simulationState.bounds.y-5)
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
  fill(255, 220);
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