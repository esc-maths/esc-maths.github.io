import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {
  color, positionLocal, vec3, Fn, sin, cos,
  mul, div, add, sub, uniform, step, max
} from "three/tsl";

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00050a);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 10, 15);

const renderer = new THREE.WebGPURenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- Arnold & Rogness Parameters ---
const uHeight = uniform(1.0);    // Vertical movement (Dilatation)
const uRotation = uniform(0.0);  // Y-axis rotation (Elliptic)
const uTilt = uniform(0.0);      // X-axis rotation (Inversion/Loxodromic)

/**
 * Möbius logic following the paper:
 * 1. Project plane point (x, z) up to a sphere at height 'h'
 * 2. Rotate/Tilt that sphere
 * 3. Sample a grid based on the final orientation
 */
const moebius = Fn(() => {
  const x = positionLocal.x;
  const z = positionLocal.z;

  // Inverse Stereographic Projection
  // We calculate the point on a unit sphere that would project to (x, z)
  const r2 = add(mul(x, x), mul(z, z));
  const denom = add(r2, 1.0);
  
  let p = vec3(
    div(mul(2.0, x), denom),
    div(sub(r2, 1.0), denom),
    div(mul(2.0, z), denom)
  );

  // Apply Rotation (Y-axis)
  const cR = cos(uRotation);
  const sR = sin(uRotation);
  const rx = sub(mul(p.x, cR), mul(p.z, sR));
  const rz = add(mul(p.x, sR), mul(p.z, cR));
  p = vec3(rx, p.y, rz);

  // Apply Tilt (X-axis)
  const cT = cos(uTilt);
  const sT = sin(uTilt);
  const ry = sub(mul(p.y, cT), mul(p.z, sT));
  const rz2 = add(mul(p.y, sT), mul(p.z, cT));
  p = vec3(p.x, ry, rz2);

  // Grid Pattern based on the Sphere's surface coordinates
  const density = 10.0;
  const gx = step(0.96, cos(mul(p.x, density)));
  const gy = step(0.96, cos(mul(p.y, density)));
  const gz = step(0.96, cos(mul(p.z, density)));

  const grid = max(gx, max(gy, gz));

  return grid.select(color(0x00d2ff), color(0x030303));
});

// --- Objects ---

// The Transformation Plane
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100),
  new THREE.MeshBasicNodeMaterial({ colorNode: moebius() })
);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// The Visible Riemann Sphere
// Wireframe helps see the rotation and tilt described in the paper
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshBasicMaterial({
    wireframe: true,
    transparent: true,
    opacity: 0.2,
    color: 0x00d2ff
  })
);
scene.add(sphere);

// --- Slider Events ---
document.getElementById("dilatation").addEventListener("input", e => {
  uHeight.value = parseFloat(e.target.value);
});
document.getElementById("rotation").addEventListener("input", e => {
  uRotation.value = parseFloat(e.target.value);
});
document.getElementById("inversion").addEventListener("input", e => {
  uTilt.value = parseFloat(e.target.value);
});

// --- Animation Loop ---
function animate() {
  // Sync the physical sphere's transform with the shader uniforms
  sphere.position.y = uHeight.value;
  sphere.rotation.y = uRotation.value;
  sphere.rotation.x = uTilt.value;

  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});