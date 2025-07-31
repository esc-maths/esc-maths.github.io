class Person {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.state = NORMAL;
    this.infectedTime = 0;
    this.socialDistance = false;
  }

  move() {
    if (this.state === DEAD) return;

    this.pos.add(this.vel);
    this.keepInBounds();
    this.interactWithOthers();

    if (this.state === SICK) {
      this.tryToRecover();
    }
  }

  interactWithOthers() {
    for (const other of simulationState.people) {
      if (this === other || other.state === DEAD) continue;

      const d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);

      if (d < config.personSize) {
        if (this.state === SICK || other.state === SICK) {
          if (this.state === NORMAL) this.setState(SICK);
          if (other.state === NORMAL) other.setState(SICK);
        }

        if (simulationState.collisions && !this.socialDistance) {
          // Resolve direct collision
          const newDirection = p5.Vector.sub(this.pos, other.pos);
          newDirection.normalize();
          newDirection.mult(config.personSize - d);
          this.pos.add(newDirection);

          // Bounce to new direction
          newDirection.normalize();
          this.vel.add(newDirection);
          this.vel.normalize();
        }
        break;
      }
    }
  }

  tryToRecover() {
    if (simulationState.frameCount > this.infectedTime + config.recoveryTime) {
      if (random() < config.deathChance / 100.0) {
        this.setState(DEAD);
      } else {
        this.setState(RECOVER);
      }
    }
  }

  keepInBounds() {
    const halfSize = config.personSize / 2;

    if (this.pos.x - halfSize < 0 || this.pos.x + halfSize > simulationState.bounds.x) {
      this.vel.x *= -1;
      this.pos.x = constrain(this.pos.x, halfSize, simulationState.bounds.x - halfSize);
    }

    if (this.pos.y - halfSize < 0 || this.pos.y + halfSize > simulationState.bounds.y) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, halfSize, simulationState.bounds.y - halfSize);
    }
  }

  display() {
    textSize(config.personSize);
    textAlign(CENTER, CENTER);

    switch (this.state) {
      case NORMAL:
        fill(color(...config.colors.normal));
        text(config.emojis.normal, this.pos.x, this.pos.y);
        break;
      case SICK:
        fill(color(...config.colors.sick));
        text(config.emojis.sick, this.pos.x, this.pos.y);
        break;
      case RECOVER:
        fill(color(...config.colors.recovery));
        text(config.emojis.recovery, this.pos.x, this.pos.y);
        break;
      case DEAD:
        fill(color(...config.colors.dead));
        text(config.emojis.dead, this.pos.x, this.pos.y);
        break;
    }
  }

  setState(newState) {
    // Update counters
    if (this.state === SICK) simulationState.counts.sick--;
    else if (this.state === RECOVER) simulationState.counts.recovery--;
    else if (this.state === DEAD) simulationState.counts.dead--;
    else simulationState.counts.normal--;

    this.state = newState;

    // Update new state counters
    if (newState === SICK) {
      simulationState.counts.sick++;
      this.infectedTime = simulationState.frameCount;
    } else if (newState === RECOVER) {
      simulationState.counts.recovery++;
    } else if (newState === DEAD) {
      simulationState.counts.dead++;
    } else {
      simulationState.counts.normal++;
    }
  }

  practiceSocialDistance() {
    this.vel.mult(0);
    this.socialDistance = true;
    simulationState.counts.socialDistance++;
  }
}