// Radioactive decay simulation in p5.js (WebGL)
// Nucleus with red/blue spheres, no overlaps
// Alpha particles emitted as clusters (removed after 40s)
// Electrons orbit nucleus with visible orbital rings
// by Juan Carlos Ponce Campuzano + ChatGPT

let nucleus = [];
let emittedClusters = [];
let electrons = [];
let lastDecayTime = 0;
let nextDecayInterval;
const clusterLifetime = 40000; // 40 seconds
const nucleusRadius = 45;
const particleRadius = 6; // size of protons/neutrons
const minSpacing = particleRadius * 3.5; // minimal allowed distance between nucleons

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();

    createNucleus();
    createElectrons();
    setNextDecay();
}

function draw() {
    background(0);
    orbitControl();

    ambientLight(90);
    pointLight(255, 255, 255, 200, -100, 300);

    // Draw nucleus
    for (let p of nucleus) {
        push();
        let jiggle = p5.Vector.random3D().mult(0.6);
        translate(p.pos.x + jiggle.x, p.pos.y + jiggle.y, p.pos.z + jiggle.z);
        fill(p.col === 'red' ? color(230, 60, 60) : color(80, 120, 255));
        sphere(particleRadius);
        pop();
    }

    // Draw orbitals and electrons with trailing trace
    // In draw():
    for (let e of electrons) {
        push();
        rotateToAxis(e.axis);

        // Update electron position
        e.angle += e.speed;
        let ex = e.radius * cos(e.angle);
        let ey = e.radius * sin(e.angle);

        // Store position in trail
        e.trail.push(createVector(ex, ey, 0));
        if (e.trail.length > 40) { // keep trail short
            e.trail.shift();
        }

        // Draw trail
        noFill();
        stroke(100, 100, 255, 80);
        beginShape();
        for (let p of e.trail) {
            vertex(p.x, p.y, p.z);
        }
        endShape();

        // Draw electron
        noStroke();
        translate(ex, ey, 0);
        fill(200, 200, 50);
        sphere(3);

        pop();
    }

    // Draw emitted clusters
    for (let cluster of emittedClusters) {
        cluster.center.add(cluster.vel);

        if (cluster.spin) {
            cluster.angle += cluster.spin;
            let axis = cluster.spinAxis;
            for (let i = 0; i < cluster.baseOffsets.length; i++) {
                cluster.offsets[i] = rotateVectorAroundAxis(cluster.baseOffsets[i], axis, cluster.angle);
            }
        }

        for (let i = 0; i < cluster.offsets.length; i++) {
            push();
            let pos = p5.Vector.add(cluster.center, cluster.offsets[i]);
            translate(pos.x, pos.y, pos.z);
            fill(cluster.colors[i] === 'red' ? color(255, 80, 80) : color(100, 140, 255));
            sphere(6);
            pop();
        }
    }

    // Remove expired clusters
    emittedClusters = emittedClusters.filter(c => millis() - c.birth < clusterLifetime);

    // Trigger decay
    if (millis() - lastDecayTime > nextDecayInterval) {
        emitAlphaCluster();
        setNextDecay();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function createNucleus() {
    nucleus = [];
    const total = 270; // number of nucleons
    let attempts;

    for (let i = 0; i < total; i++) {
        let col = i % 2 === 0 ? 'red' : 'blue';
        attempts = 0;
        let pos;
        do {
            // 50% on surface, 50% inside
            if (random() < 0.5) {
                pos = p5.Vector.random3D().mult(nucleusRadius + random(-3, 3));
            } else {
                let r = nucleusRadius * pow(random(), 1 / 3);
                pos = p5.Vector.random3D().mult(r);
            }
            attempts++;
        } while (!isFarEnough(pos) && attempts < 100);

        nucleus.push({ pos, col });
    }
}

function isFarEnough(newPos) {
    for (let p of nucleus) {
        if (p.pos.dist(newPos) < minSpacing) {
            return false;
        }
    }
    return true;
}

function createElectrons() {
    electrons = [];
    let orbits = [80, 100, 120, 140];
    for (let i = 0; i < 8; i++) {
        electrons.push({
            radius: random(orbits),
            speed: random(0.007, 0.055) * (random() < 0.5 ? 1 : -1),
            angle: random(TWO_PI),
            axis: p5.Vector.random3D().normalize(),
            trail: [] // store previous positions
        });
    }
}

function rotateToAxis(axis) {
    // Rotates so that z-axis aligns with given axis
    let forward = createVector(0, 0, 1);
    let angle = acos(constrain(forward.dot(axis), -1, 1));
    let rotAxis = forward.cross(axis);
    rotate(angle, rotAxis);
}

function setNextDecay() {
    lastDecayTime = millis();
    nextDecayInterval = random(3000, 7000); // Time period for decay
}

function emitAlphaCluster() {
    let dir = p5.Vector.random3D().normalize();
    let speed = random(1.2, 2.2);
    let startPos = createVector(0, 0, 0);

    let r = 6;
    let baseOffsets = [
        createVector(r, 0, 0),
        createVector(-r, 0, 0),
        createVector(0, r, 0),
        createVector(0, -r, 0)
    ];

    let forward = createVector(0, 0, 1);
    let axis = forward.cross(dir);
    let angle = acos(constrain(forward.dot(dir), -1, 1));
    let offsets = baseOffsets.map(o => rotateVectorAroundAxis(o, axis, angle));
    offsets.forEach(v => v.add(p5.Vector.random3D().mult(0.6)));

    let spin = random(-0.02, 0.02);
    let spinAxis = p5.Vector.random3D().normalize();

    emittedClusters.push({
        center: startPos.copy(),
        vel: dir.mult(speed),
        baseOffsets: baseOffsets.map(v => v.copy()),
        offsets: offsets,
        colors: ['red', 'red', 'blue', 'blue'],
        birth: millis(),
        spin: spin,
        spinAxis: spinAxis,
        angle: 0
    });
}

function rotateVectorAroundAxis(v, axis, angle) {
    if (!axis || axis.mag() === 0 || angle === 0) return v.copy();
    let k = axis.copy().normalize();
    let vRot = p5.Vector.mult(v, cos(angle));
    let kCrossV = k.copy().cross(v).mult(sin(angle));
    let kTerm = k.copy().mult(k.dot(v) * (1 - cos(angle)));
    return p5.Vector.add(p5.Vector.add(vRot, kCrossV), kTerm);
}