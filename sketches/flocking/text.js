const flock = [];
const attractors = [];
let graphics;

const controls = {
    align: 1.5,
    cohesion: 1,
    separation: 2,
    trace: true,
    numParticles: 2000,
    showAttractors: true
};

let quadTree;
let particleShader;

let palette = [
    [252, 201, 198, 255], // Bright Red
    [250, 242, 193, 255], // Vivid Yellow
    [183, 255, 192, 255], // Bright Green
    [174, 217, 255, 255], // Vivid Blue
    [208, 151, 217, 255], // Bright Purple
    [237, 212, 173, 255], // Vivid Orange
    [187, 249, 250, 255]  // Bright Cyan
];

const attractorColors = [
    [0, 191, 255, 255],   // Electric Magenta
    [2, 255, 179, 255],   // Neon Green
    [255, 0, 13, 255]     // Hot Pink
];

const ATTRACTION_RADIUS = 130;
const FORCE_PULSE_SPEED = 0.02;

// Vertex shader for particles
const vertShader = `
attribute vec3 aPosition;
attribute vec4 aColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec4 vColor;

void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
    gl_PointSize = 5.0;
    vColor = aColor;
}
`;

// Fragment shader for particles
const fragShader = `
precision mediump float;

varying vec4 vColor;

void main() {
    gl_FragColor = vColor;
}
`;

class Attractor {
    constructor(pos, index) {
        this.position = pos;
        this.baseStrength = random(0.4, 0.4);
        this.currentStrength = 0;
        this.pulsePhase = random(TWO_PI);
        this.color = attractorColors[index % attractorColors.length];
        this.radius = random(15, 25);
        this.influenceColor = attractorColors[index % attractorColors.length];
        this.index = index;
    }

    update() {
        this.pulsePhase += FORCE_PULSE_SPEED;
        this.currentStrength = this.baseStrength * (0.8 + 0.2 * sin(this.pulsePhase));
    }

    getStrength() {
        return this.currentStrength;
    }

    display() {
        if (!controls.showAttractors) return;
        
        push();
        noStroke();
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
        pop();
    }
}

class Boid {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(1.5, 3.5));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 2.5;
        
        // Store color as array for WebGL
        const colIndex = floor(random(palette.length));
        this.originalCol = palette[colIndex];
        this.currentCol = [...this.originalCol];
        this.colorTransitionSpeed = 0.05;
    }

    edges() {
        if (this.position.x > width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = width;
        if (this.position.y > height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = height;
    }

    align(boids) {
        const perceptionRadius = 30;
        const perceptionCount = 5;
        const steering = createVector();
        let total = 0;
        
        const nearby = quadTree.getItemsInRadius(this.position.x, this.position.y, perceptionRadius, perceptionCount);
        for (const other of nearby) {
            steering.add(other.velocity);
            total++;
        }
        
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    separation(boids) {
        const perceptionRadius = 30;
        const perceptionCount = 5;
        const steering = createVector();
        let total = 0;
        
        const nearby = quadTree.getItemsInRadius(this.position.x, this.position.y, perceptionRadius, perceptionCount);
        for (const other of nearby) {
            const diff = p5.Vector.sub(this.position, other.position);
            const d = diff.mag();
            if (d === 0) continue;
            diff.div(d * d);
            steering.add(diff);
            total++;
        }
        
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesion(boids) {
        const perceptionRadius = 50;
        const perceptionCount = 5;
        const steering = createVector();
        let total = 0;
        
        const nearby = quadTree.getItemsInRadius(this.position.x, this.position.y, perceptionRadius, perceptionCount);
        for (const other of nearby) {
            steering.add(other.position);
            total++;
        }
        
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        alignment.mult(controls.align);
        cohesion.mult(controls.cohesion);
        separation.mult(controls.separation);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    applyAttractors() {
        let totalForce = createVector(0, 0);
        let attractorCount = 0;

        for (let attractor of attractors) {
            let d = p5.Vector.dist(this.position, attractor.position);
            if (d < ATTRACTION_RADIUS) {
                let strength = attractor.getStrength() * (1 - d / ATTRACTION_RADIUS);
                let desired = p5.Vector.sub(attractor.position, this.position);
                desired.normalize();
                desired.mult(strength);
                totalForce.add(desired);
                attractorCount++;
            }
        }

        if (attractorCount > 0) {
            totalForce.div(attractorCount);
            this.acceleration.add(totalForce);
        }
    }

    updateColor() {
        let minDistSq = ATTRACTION_RADIUS * ATTRACTION_RADIUS;
        let targetColor = [...this.originalCol];

        for (let attractor of attractors) {
            const dx = this.position.x - attractor.position.x;
            const dy = this.position.y - attractor.position.y;
            const distSq = dx * dx + dy * dy;
            
            if (distSq < minDistSq) {
                minDistSq = distSq;
                const intensity = 1 - sqrt(distSq) / ATTRACTION_RADIUS;
                for (let i = 0; i < 4; i++) {
                    targetColor[i] = lerp(this.originalCol[i], attractor.influenceColor[i], intensity);
                }
            }
        }

        for (let i = 0; i < 4; i++) {
            this.currentCol[i] = lerp(this.currentCol[i], targetColor[i], this.colorTransitionSpeed);
        }
    }

    update() {
        this.applyAttractors();
        this.updateColor();
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }
}

// QuadTree implementation remains the same as before
// [Include all the QuadTree classes from previous code here]

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    // Create offscreen graphics buffer for trail effect
    graphics = createGraphics(width, height);
    graphics.background(0);
    
    particleShader = createShader(vertShader, fragShader);
    
    quadTree = new QuadTree(Infinity, 30, new Rect(0, 0, width, height));

    // Create attractors
    posA = createVector(random(50, width / 3 - 50), random(50, 2 * height / 3 - 50));
    attractors.push(new Attractor(posA, 0));
    posB = createVector(random(width / 3 + 50, 2 * width / 3 - 50), random(2 * height / 3 - 50, 3 * height / 3 - 50));
    attractors.push(new Attractor(posB, 1));
    posC = createVector(random(2 * width / 3 + 50, 3 * width / 3 - 50), random(height / 3 - 50, 2 * height / 3 - 50));
    attractors.push(new Attractor(posC, 2));

    // Create GUI
    let gui = new dat.GUI({ width: 295 });
    gui.add(controls, 'align', 0, 3).name("Align").step(0.1);
    gui.add(controls, 'cohesion', 0, 3).name("Cohesion").step(0.1);
    gui.add(controls, 'separation', 0, 3).name("Separation").step(0.1);
    gui.add(controls, 'numParticles', 0, 2000).name("Num Particles").step(1);
    gui.add(controls, 'trace').name("Trace").listen();
    gui.add(controls, 'showAttractors').name("Show Attractors");
    gui.close();

    // Initialize particles
    for (let i = 0; i < controls.numParticles; i++) {
        flock.push(new Boid());
    }
}

function draw() {
    // Handle trail effect
    if (!controls.trace) {
        graphics.background(0);
    } else {
        graphics.fill(0, 20);
        graphics.noStroke();
        graphics.rect(0, 0, width, height);
    }
    
    // Draw the trail buffer
    image(graphics, -width/2, -height/2);
    
    // Update quad tree
    quadTree.clear();
    for (const boid of flock) {
        quadTree.addItem(boid.position.x, boid.position.y, boid);
    }

    // Update attractors
    for (let attractor of attractors) {
        attractor.update();
    }

    // Update particles
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
    }

    // Render particles using shader
    shader(particleShader);
    beginShape(POINTS);
    for (let boid of flock) {
        vertex(boid.position.x - width/2, boid.position.y - height/2, 0);
        fill(boid.currentCol);
    }
    endShape();
    resetShader();

    // Draw attractors on top
    for (let attractor of attractors) {
        attractor.display();
    }

    // Adjust particle count
    let maxBoids = controls.numParticles;
    let difference = flock.length - maxBoids;
    if (difference < 0) {
        for (let i = 0; i < -difference; i++) {
            flock.push(new Boid());
        }
    } else if (difference > 0) {
        flock.length = maxBoids;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    graphics = createGraphics(width, height);
    graphics.background(0);
    quadTree = new QuadTree(Infinity, 30, new Rect(0, 0, width, height));

    for (let attractor of attractors) {
        attractor.position.x = constrain(attractor.position.x, 0, width);
        attractor.position.y = constrain(attractor.position.y, 0, height);
    }

    if (!controls.trace) {
        graphics.background(0);
    }
}