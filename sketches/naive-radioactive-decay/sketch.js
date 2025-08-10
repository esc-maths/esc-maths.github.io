/* 
Radioactive decay simulation in p5.js (WebGL)
Nucleus with red/blue spheres, no overlaps
Alpha particles emitted as clusters (removed after 40s)
Electrons orbit nucleus with visible orbital rings
by Juan Carlos Ponce Campuzano 
10/Aug/2025


I know this is not scientifically accurate at the subatomic level, however this representation can still be very useful for teaching and understanding concepts at the right stage.

MinutePhysics has a nice video where he talks about: A Better Way To Picture Atoms

https://youtu.be/W2Xb2GFK2yc
*/

let nucleus = [];
let emittedClusters = [];
let electrons = [];
let lastDecayTime = 0;
let nextDecayInterval;
const clusterLifetime = 40000; // 40 seconds
const nucleusRadius = 40;
const particleRadius = 7; // size of protons/neutrons

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();

    createNucleus();
    createElectrons();
    setNextDecay();
}

function draw() {
    background(10);
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
        if (e.trail.length > 30) { // keep trail short
            e.trail.shift();
        }

        // Draw trail
        noFill();
        stroke(128, 255, 255, 200);
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
    const total = 200; // number of nucleons
    let maxAttempts = 500; // increased from 100 to give more chances
    let safetyRadius = particleRadius * 1.8; // slightly more than diameter

    for (let i = 0; i < total; i++) {
        let col = i % 2 === 0 ? 'red' : 'blue';
        let attempts = 0;
        let pos;
        let validPosition = false;
        
        while (!validPosition && attempts < maxAttempts) {
            // 50% on surface, 50% inside
            if (random() < 0.5) {
                // Surface particles - random point on sphere with small variation
                pos = p5.Vector.random3D().mult(nucleusRadius + random(-3, 3));
            } else {
                // Interior particles - random point within sphere
                let r = nucleusRadius * pow(random(), 1/3);
                pos = p5.Vector.random3D().mult(r);
            }
            
            // Check against all existing particles
            validPosition = true;
            for (let p of nucleus) {
                if (p.pos.dist(pos) < safetyRadius) {
                    validPosition = false;
                    break;
                }
            }
            
            attempts++;
        }
        
        if (validPosition) {
            nucleus.push({ pos, col });
        } else {
            console.log("Failed to place particle after", maxAttempts, "attempts");
        }
    }
    
    // Optional: After initial placement, try to push overlapping particles apart
    relaxNucleus();
}

// New function to help push overlapping particles apart
function relaxNucleus() {
    const repulsionStrength = 0.5;
    const minDistance = particleRadius * 2.2;
    const iterations = 20;
    
    for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < nucleus.length; i++) {
            let totalForce = createVector(0, 0, 0);
            let p1 = nucleus[i];
            
            // Check against all other particles
            for (let j = 0; j < nucleus.length; j++) {
                if (i === j) continue;
                
                let p2 = nucleus[j];
                let dist = p1.pos.dist(p2.pos);
                
                if (dist < minDistance) {
                    // Calculate repulsion force
                    let force = p5.Vector.sub(p1.pos, p2.pos);
                    force.normalize();
                    force.mult((minDistance - dist) * repulsionStrength);
                    totalForce.add(force);
                }
            }
            
            // Apply the force
            p1.pos.add(totalForce);
            
            // Keep particles within nucleus bounds
            let mag = p1.pos.mag();
            if (mag > nucleusRadius) {
                p1.pos.normalize().mult(nucleusRadius);
            }
        }
    }
}

// function isFarEnough(newPos) {
//     for (let p of nucleus) {
//         if (p.pos.dist(newPos) < minSpacing) {
//             return false;
//         }
//     }
//     return true;
// }

function createElectrons() {
    electrons = [];
    let orbits = [80, 100, 120, 140];
    for (let i = 0; i < 8; i++) {
        electrons.push({
            radius: random(orbits),
            speed: random(0.007, 0.095) * (random() < 0.5 ? 1 : -1),
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