import * as THREE from 'three';

/**
 * =========================================================
 * BASIC SETUP
 * =========================================================
 */
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

const geometry = new THREE.PlaneGeometry(2, 2);

/**
 * =========================================================
 * UNIFORMS
 * =========================================================
 */
const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },

    uMode: { value: 2 },          // default: Loxodromic
    uShowSphere: { value: 1.0 },

    // Camera
    uCameraPos: { value: new THREE.Vector3() },
    uCameraForward: { value: new THREE.Vector3() },
    uCameraRight: { value: new THREE.Vector3() },
    uCameraUp: { value: new THREE.Vector3() }
};

/**
 * =========================================================
 * FRAGMENT SHADER (WORKING BASE)
 * =========================================================
 */
const fragmentShader = `
uniform float iTime;
uniform vec3 iResolution;

uniform int uMode;
uniform float uShowSphere;

uniform vec3 uCameraPos;
uniform vec3 uCameraForward;
uniform vec3 uCameraRight;
uniform vec3 uCameraUp;

#define PI 3.14159265359

// --- Complex math ---
vec2 cmul(vec2 a, vec2 b){
    return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

vec2 cdiv(vec2 a, vec2 b){
    return vec2(a.x*b.x + a.y*b.y, a.y*b.x - a.x*b.y) / dot(b,b);
}

// Example Möbius
vec2 mobius(vec2 z){
    vec2 A = vec2(-1.0,0.0);
    vec2 B = vec2(1.0,0.0);
    vec2 C = vec2(-1.0,0.0);
    vec2 D = vec2(-1.0,0.0);
    return cdiv(cmul(A,z)+B, cmul(C,z)+D);
}

// Scene SDF
float map(vec3 p){
    float plane = p.y;

    float sphere = length(p - vec3(0.0,1.0,0.0)) - 1.0;

    if(uShowSphere > 0.5) return min(plane, sphere);
    return plane;
}

void main(){

    vec2 uv = (gl_FragCoord.xy - 0.5*iResolution.xy) / iResolution.y;

    vec3 ro = uCameraPos;
    vec3 rd = normalize(uv.x*uCameraRight + uv.y*uCameraUp + 2.0*uCameraForward);

    // Raymarch
    float t = 0.0;
    for(int i=0;i<120;i++){
        vec3 p = ro + rd*t;
        float d = map(p);
        if(d < 0.001 || t > 50.0) break;
        t += d;
    }

    vec3 col = vec3(0.02,0.02,0.05);

    if(t < 50.0){
        vec3 p = ro + rd*t;

        bool isSphere = (uShowSphere > 0.5 && length(p-vec3(0,1,0)) < 1.05);

        vec2 z = isSphere
            ? vec2(p.x, p.z)/(2.0 - p.y)
            : p.xz * 0.5;

        z = mobius(z);

        // --- Different behaviours ---
        float speed = 0.3;

        if(uMode == 0){
            z *= mat2(cos(iTime), -sin(iTime), sin(iTime), cos(iTime));
        }
        else if(uMode == 1){
            z *= exp(iTime * 0.3);
        }
        else if(uMode == 2){
            float a = iTime * 0.3;
            z *= exp(a);
            z = vec2(
                z.x*cos(a) - z.y*sin(a),
                z.x*sin(a) + z.y*cos(a)
            );
        }
        else if(uMode == 3){
            z += vec2(iTime*0.5, 0.0);
        }

        // Grid
        vec2 g = fract(z*5.0);
        float grid = step(0.95, g.x) + step(0.95, g.y);

        col = mix(vec3(0.1,0.1,0.12), vec3(0.9), grid);

        // Lighting
        vec3 n = isSphere ? normalize(p-vec3(0,1,0)) : vec3(0,1,0);
        vec3 light = normalize(vec3(-1,1,-1));

        float diff = clamp(dot(n,light),0.2,1.0);
        col *= diff;
    }

    gl_FragColor = vec4(pow(col, vec3(0.4545)),1.0);
}
`;

/**
 * =========================================================
 * MATERIAL & MESH
 * =========================================================
 */
const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
        void main(){
            gl_Position = vec4(position,1.0);
        }
    `,
    fragmentShader
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * =========================================================
 * RENDERER
 * =========================================================
 */
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * =========================================================
 * RESOLUTION
 * =========================================================
 */
function updateResolution(){
    const pixelRatio = renderer.getPixelRatio();
    uniforms.iResolution.value.set(
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio,
        1
    );
}
updateResolution();

/**
 * =========================================================
 * CAMERA CONTROLS
 * =========================================================
 */
const target = new THREE.Vector3(0, 0.6, 0);
let radius = 8;

let rotX = 0.4;
let rotY = -0.5;

let isDown = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', e => {
    isDown = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

window.addEventListener('mouseup', () => isDown = false);

window.addEventListener('mousemove', e => {
    if(!isDown) return;

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;

    rotY += dx * 0.005;
    rotX += dy * 0.005;

    rotX = Math.max(0.2, Math.min(1.5, rotX));

    lastX = e.clientX;
    lastY = e.clientY;
});

/**
 * Update camera vectors for shader
 */
function updateCamera(){

    const x = radius * Math.sin(rotY) * Math.cos(rotX);
    const y = radius * Math.sin(rotX) + 1.5;
    const z = radius * Math.cos(rotY) * Math.cos(rotX);

    const pos = new THREE.Vector3(x,y,z);

    const forward = target.clone().sub(pos).normalize();
    const right = new THREE.Vector3(0,1,0).cross(forward).normalize();
    const up = forward.clone().cross(right).normalize();

    uniforms.uCameraPos.value.copy(pos);
    uniforms.uCameraForward.value.copy(forward);
    uniforms.uCameraRight.value.copy(right);
    uniforms.uCameraUp.value.copy(up);
}

/**
 * =========================================================
 * KEYBOARD CONTROLS
 * =========================================================
 */
const modeText = document.getElementById('mode-text');

const modes = {
    '1': 'Elliptic',
    '2': 'Hyperbolic',
    '3': 'Loxodromic',
    '4': 'Parabolic'
};

window.addEventListener('keydown', e => {

    if(modes[e.key]){
        uniforms.uMode.value = parseInt(e.key)-1;
        if(modeText) modeText.innerText = modes[e.key];
    }

    if(e.key === '5'){
        uniforms.uShowSphere.value =
            uniforms.uShowSphere.value === 1.0 ? 0.0 : 1.0;
    }
});

/**
 * =========================================================
 * RESIZE
 * =========================================================
 */
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateResolution();
});

/**
 * =========================================================
 * ANIMATION LOOP
 * =========================================================
 */
function tick(){

    uniforms.iTime.value = performance.now() * 0.001;

    updateCamera();

    renderer.render(scene, new THREE.Camera());

    requestAnimationFrame(tick);
}

tick();