/**
 * =======================================================
 * 3D Tree Growth 
 * =======================================================
 * A procedural tree generation based on Space Colonization.
 * Features: Vertex caching, cross-plane mesh, and
 * constant tapering.
 * Interaction: Press 'SPACE' to reset and regrow.
 */

let tree;
let attractors = [];
let meshCache = [];
let isGrowing = true;
let colorCache = [];

let treeColorA;
let treeColorB;

// Layout Constants
const groundLevel = 250;
const treeHeightMax = 450;
const spreadWidth = 200;

// Algorithm Constants
const numAttractors = 100;
const minDist = 10;
const maxDist = 150;
const branchLength = 10;

// Tapering Constants
const baseThickness = 16;
const thicknessDecay = 0.95;
const minThickness = 1;

// Initialize or Reset the tree and attractors
function initTree() {
  // Clear existing data
  attractors = [];
  meshCache = [];
  isGrowing = true;

  // 🎨 Pick new colors
  treeColorA = color(random(10, 250), random(10, 250), random(10, 255));

  treeColorB = color(random(10, 250), random(10, 250), random(10, 255));

  // Place new attractors
  for (let i = 0; i < numAttractors; i++) {
    const v = createVector(
      random(-spreadWidth, spreadWidth),
      random(groundLevel - treeHeightMax, groundLevel - 50),
      random(-spreadWidth, spreadWidth)
    );
    attractors.push(v);
  }

  // Create new tree instance
  tree = new Tree();
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //colorMode(HSB, 1, 1, 1, 1);
  initTree();
}

function draw() {
  background(0);
  rotateY(frameCount * -0.001);
  orbitControl();

  // 1. Growth Phase Control
  if (isGrowing) {
    isGrowing = tree.grow();
  }

  // 2. Render Ground
  push();
  translate(0, groundLevel, 0);
  rotateX(HALF_PI);
  fill(10);
  plane(spreadWidth * 2);
  pop();

  // 3. Render Mesh
  //fill(0);
  noStroke();
  beginShape(TRIANGLES);
  for (let i = 0; i < meshCache.length; i++) {
    const p = meshCache[i];

    // Interpolate color along growth
    const t = map(i, 0, meshCache.length - 1, 0, 1);
    const c = lerpColor(treeColorA, treeColorB, t);

    fill(c);
    vertex(p.x, p.y, p.z);
  }
  endShape();
}

// Handle key interactions
function keyPressed() {
  // Reset when Spacebar is pressed (Key code 32)
  if (key === " " || keyCode === 32) {
    initTree();
  }
}

class Tree {
  constructor() {
    this.branches = [];
    const pos = createVector(0, groundLevel, 0);
    const dir = createVector(0, -1, 0);
    this.branches.push(new Branch(null, pos, dir, 0));
  }

  grow() {
    let createdNewBranch = false;
    for (const b of this.branches) b.reset();

    // Influence Calculation
    for (let i = attractors.length - 1; i >= 0; i--) {
      const a = attractors[i];
      let closestBranch = null;
      let record = maxDist * maxDist;

      for (const b of this.branches) {
        const dSq =
          (a.x - b.pos.x) ** 2 + (a.y - b.pos.y) ** 2 + (a.z - b.pos.z) ** 2;
        if (dSq < minDist * minDist) {
          attractors.splice(i, 1);
          closestBranch = null;
          break;
        } else if (dSq < record) {
          closestBranch = b;
          record = dSq;
        }
      }

      if (closestBranch) {
        const dir = p5.Vector.sub(a, closestBranch.pos).normalize();
        closestBranch.dir.add(dir);
        closestBranch.count++;
      }
    }

    // Branch Generation & Mesh Construction
    const newBranches = [];
    for (const b of this.branches) {
      if (b.count > 0) {
        const avgDir = b.dir
          .copy()
          .div(b.count + 1)
          .normalize();
        const nextPos = p5.Vector.add(
          b.pos,
          p5.Vector.mult(avgDir, branchLength)
        );
        const nextBranch = new Branch(b, nextPos, avgDir.copy(), b.level + 1);

        // Calculate Cross-plane Geometry
        let side1 = createVector(-avgDir.z, 0, avgDir.x).normalize();
        if (side1.mag() === 0) side1 = createVector(1, 0, 0);
        const side2 = p5.Vector.cross(avgDir, side1).normalize();

        const tStart = max(
          minThickness,
          baseThickness * pow(thicknessDecay, b.level)
        );
        const tEnd = max(
          minThickness,
          baseThickness * pow(thicknessDecay, nextBranch.level)
        );

        const s1S = p5.Vector.mult(side1, tStart);
        const s1E = p5.Vector.mult(side1, tEnd);
        const s2S = p5.Vector.mult(side2, tStart);
        const s2E = p5.Vector.mult(side2, tEnd);

        this.addTaperedQuad(b.pos, nextPos, s1S, s1E);
        this.addTaperedQuad(b.pos, nextPos, s2S, s2E);

        newBranches.push(nextBranch);
        createdNewBranch = true;
      }
    }

    if (createdNewBranch) {
      this.branches = this.branches.concat(newBranches);
    }

    return createdNewBranch;
  }

  addTaperedQuad(pStart, pEnd, sStart, sEnd) {
    meshCache.push(
      p5.Vector.add(pStart, sStart),
      p5.Vector.sub(pStart, sStart),
      p5.Vector.add(pEnd, sEnd)
    );
    meshCache.push(
      p5.Vector.sub(pStart, sStart),
      p5.Vector.sub(pEnd, sEnd),
      p5.Vector.add(pEnd, sEnd)
    );
    
  }
}

class Branch {
  constructor(parent, pos, dir, level) {
    this.parent = parent;
    this.pos = pos;
    this.dir = dir;
    this.origDir = dir.copy();
    this.count = 0;
    this.level = level;
  }
  reset() {
    this.dir = this.origDir.copy();
    this.count = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}