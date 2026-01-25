import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { color, positionLocal, screenUV, range, time, vec3, mod, float, uv } from "three/tsl";
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0x000000,0.02);
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 1;
const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setAnimationLoop(animate);
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const ctrls = new OrbitControls(camera, renderer.domElement);
ctrls.enableDamping = true;

const startCount = 100000;
const size = 0.25;
const geometry = new THREE.PlaneGeometry(size, size);
const material = new THREE.MeshBasicNodeMaterial({
  //color: 0xffffff}
  transparent: true,
});

const positionRange = range(new THREE.Vector3(-100, -100, -100), new THREE.Vector3(100, 100, 100));
const speed = 10;
const animatedZ = mod(positionRange.z.add(time.mul(speed)), 100.0).sub(100);
const animatedPos = vec3(
  positionRange.x,
  positionRange.y,
  animatedZ
)

const brightnessRange = range(0.1, 1.2);
const colorRange = range(color(0x000000), color(0xffffff));
material.positionNode = positionLocal.add(animatedPos);
material.opacityNode = float(0.1).div(uv().sub(0.5).length()).sub(0.2);
material.colorNode = colorRange.mul(brightnessRange)

const starts = new THREE.InstancedMesh(geometry, material, startCount);
scene.add(starts);

//const knot = new THREE.Mesh(geometry, material);
//scene.add(knot);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(hemiLight);

// Sprites BG
// const sprites = getLayer({
//   hue: 0.6,
//   numSprites: 8,
//   opacity: 0.1,
//   radius: 10,
//   size: 24,
//   z: -10.5,
// });
// scene.add(sprites);


function animate() {
  //requestAnimationFrame(animate);
  //knot.rotation.x += 0.01;
  //knot.rotation.y += 0.02;
  //renderer.renderAsync(scene, camera);

  renderer.render(scene, camera);
  ctrls.update();
}

//animate();

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);