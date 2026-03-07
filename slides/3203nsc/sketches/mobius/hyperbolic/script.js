import * as THREE from 'three';
import { complexLibrary } from '../common/complexLib.js'; 

/**
 * Base Setup
 */
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

/**
 * Shader Material
 */
const geometry = new THREE.PlaneGeometry(2, 2);

const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() }
};

const fragmentShader = `
uniform float iTime;
uniform vec3 iResolution;

// Inject the library here
${complexLibrary}

vec3 computeColor(vec2 fragCoord) {
    float zoom = 3.0;
    // Corrected origin centering logic
    vec2 uv = (fragCoord - 0.5 * iResolution.xy) * zoom / min(iResolution.y, iResolution.x);
    
    complex z = uv;
    complex w = mobiousHyperbolic(z, 0.2 * iTime);
    
    vec2 grid = fract(w * 2.0); 
    float check = step(0.5, grid.x) == step(0.5, grid.y) ? 1.0 : 0.0;

    return vec3(check);
}

void main() {
    vec3 finalCol = vec3(0.0);
    float samples = 2.0; 
    for(float y = 0.0; y < 1.0; y += 1.0/samples) {
        for(float x = 0.0; x < 1.0; x += 1.0/samples) {
            vec2 offset = vec2(x, y);
            finalCol += computeColor(gl_FragCoord.xy + offset);
        }
    }
    finalCol /= (samples * samples);
    gl_FragColor = vec4(finalCol, 1.0);
}
`;

const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `,
    fragmentShader: fragmentShader
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes & Renderer
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    uniforms.iResolution.value.set(sizes.width, sizes.height, 1);
});

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Initialize iResolution
uniforms.iResolution.value.set(sizes.width, sizes.height, 1);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    uniforms.iTime.value = elapsedTime;

    renderer.render(scene, new THREE.Camera());
    window.requestAnimationFrame(tick);
};

// Ensure iResolution matches the actual drawing buffer size
const updateResolution = () => {
    const pixelRatio = renderer.getPixelRatio();
    uniforms.iResolution.value.set(
        canvas.clientWidth * pixelRatio,
        canvas.clientHeight * pixelRatio,
        1
    );
};

// Call it once at start
updateResolution();

// Call it on every resize
window.addEventListener('resize', updateResolution);

tick();