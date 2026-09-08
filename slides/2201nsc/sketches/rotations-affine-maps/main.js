import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// DOM Elements
const container = document.getElementById('canvas-container');
const loadingEl = document.getElementById('loading');
const sliderX = document.getElementById('slider-x'); // Roll
const sliderY = document.getElementById('slider-y'); // Pitch
const sliderZ = document.getElementById('slider-z'); // Yaw
const valX = document.getElementById('val-x');
const valY = document.getElementById('val-y');
const valZ = document.getElementById('val-z');
const btnReset = document.getElementById('btn-reset');
const btnInfo = document.getElementById('btn-info');
const btnCloseModal = document.getElementById('btn-close-modal');
const modalOverlay = document.getElementById('modal-overlay');

// Matrix Cell Elements
const matrixCells = [
    document.getElementById('m00'), document.getElementById('m01'), document.getElementById('m02'),
    document.getElementById('m10'), document.getElementById('m11'), document.getElementById('m12'),
    document.getElementById('m20'), document.getElementById('m21'), document.getElementById('m22')
];

// Scene Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1e);

// Camera Setup
const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
camera.position.set(0, 50, 100);

// Renderer Setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
container.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambientLight);

const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
dirLight1.position.set(100, 150, 100);
scene.add(dirLight1);

const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight2.position.set(-100, -50, -100);
scene.add(dirLight2);

// Grid Floor
const gridHelper = new THREE.GridHelper(200, 40, 0x3b82f6, 0x36363d);
gridHelper.position.y = -30;
scene.add(gridHelper);

// Airplane Pivot Group
const airplaneGroup = new THREE.Group();
scene.add(airplaneGroup);

// https://free3d.com/3d-model/airplane-v1--79106.html
const MODEL_PATH = 'plane/';

// Load OBJ & MTL
const mtlLoader = new MTLLoader();
mtlLoader.setPath(MODEL_PATH);
mtlLoader.load(
    '11803_Airplane_v1_l1.mtl',
    (materials) => {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(MODEL_PATH);
        objLoader.load(
            '11803_Airplane_v1_l1.obj',
            (object) => {
                object.rotation.x = -Math.PI / 2;

                const box = new THREE.Box3().setFromObject(object);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());

                object.position.sub(center);

                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 50 / maxDim;

                const alignedModelWrapper = new THREE.Group();
                alignedModelWrapper.scale.set(scale, scale, scale);
                alignedModelWrapper.add(object);

                airplaneGroup.add(alignedModelWrapper);
                loadingEl.style.display = 'none';

                updateRotation();
            },
            (xhr) => {
                if (xhr.lengthComputable) {
                    const percent = Math.round((xhr.loaded / xhr.total) * 100);
                    loadingEl.textContent = `Loading Airplane Model... ${percent}%`;
                }
            },
            (error) => {
                console.error('Error loading OBJ:', error);
                loadingEl.textContent = 'Failed to load model files.';
            }
        );
    },
    (xhr) => { },
    (error) => {
        console.error('Error loading MTL:', error);
        loadingEl.textContent = 'Failed to load MTL material file.';
    }
);

// Matrix Calculation & UI Update
function updateRotation() {
    const radX = THREE.MathUtils.degToRad(parseFloat(sliderX.value));
    const radY = THREE.MathUtils.degToRad(parseFloat(sliderY.value));
    const radZ = THREE.MathUtils.degToRad(parseFloat(sliderZ.value));

    valX.textContent = `${parseFloat(sliderX.value).toFixed(1)}°`;
    valY.textContent = `${parseFloat(sliderY.value).toFixed(1)}°`;
    valZ.textContent = `${parseFloat(sliderZ.value).toFixed(1)}°`;

    airplaneGroup.rotation.set(radX, radY, radZ, 'XYZ');
    airplaneGroup.updateMatrix();

    const matrix4 = airplaneGroup.matrix;
    const e = matrix4.elements;

    const rotMatrix = [
        e[0], e[4], e[8],
        e[1], e[5], e[9],
        e[2], e[6], e[10]
    ];

    matrixCells.forEach((cell, index) => {
        cell.textContent = rotMatrix[index].toFixed(2);
    });
}

// Keyboard Input State
const keysPressed = {};
const ROTATION_SPEED = 60; // Degrees per second
const timer = new THREE.Timer();
timer.connect(document);

window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
    }
    keysPressed[e.key.toLowerCase()] = true;
    keysPressed[e.code] = true;
});

window.addEventListener('keyup', (e) => {
    keysPressed[e.key.toLowerCase()] = false;
    keysPressed[e.code] = false;
});

function adjustSlider(slider, amount) {
    const min = slider.min !== '' ? parseFloat(slider.min) : -180;
    const max = slider.max !== '' ? parseFloat(slider.max) : 180;
    const currentVal = parseFloat(slider.value);
    const newVal = Math.min(max, Math.max(min, currentVal + amount));
    if (newVal !== currentVal) {
        slider.value = newVal;
        return true;
    }
    return false;
}

function handleKeyboardInput(delta) {
    let hasChanged = false;
    const changeAmount = ROTATION_SPEED * delta;

    // Roll -> Slider Z
    if (keysPressed['w'] || keysPressed['KeyW']) {
        if (adjustSlider(sliderZ, changeAmount)) hasChanged = true;
    }
    if (keysPressed['s'] || keysPressed['KeyS']) {
        if (adjustSlider(sliderZ, -changeAmount)) hasChanged = true;
    }

    // Pitch -> Slider X
    if (keysPressed['q'] || keysPressed['KeyQ']) {
        if (adjustSlider(sliderX, -changeAmount)) hasChanged = true;
    }
    if (keysPressed['e'] || keysPressed['KeyE']) {
        if (adjustSlider(sliderX, changeAmount)) hasChanged = true;
    }

    // Yaw -> Slider Y
    if (keysPressed['a'] || keysPressed['KeyA']) {
        if (adjustSlider(sliderY, changeAmount)) hasChanged = true;
    }
    if (keysPressed['d'] || keysPressed['KeyD']) {
        if (adjustSlider(sliderY, -changeAmount)) hasChanged = true;
    }

    if (hasChanged) {
        updateRotation();
    }
}

// Modal Toggle Handlers
btnInfo.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
});

btnCloseModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Slider & Control Listeners
[sliderX, sliderY, sliderZ].forEach(slider => {
    slider.addEventListener('input', updateRotation);
});

btnReset.addEventListener('click', () => {
    sliderX.value = 0;
    sliderY.value = 0;
    sliderZ.value = 0;
    updateRotation();
});

// Resize Handler
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});


// Animation Loop
renderer.setAnimationLoop((timestamp) => {
    timer.update(timestamp);

    const delta = timer.getDelta();
    handleKeyboardInput(delta);
    controls.update();
    renderer.render(scene, camera);

});

