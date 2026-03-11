/**
 * Water by diatribes
 * https://www.shadertoy.com/user/diatribes
 */

import * as THREE from 'three';

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

void main() {
    // Shadertoy's fragCoord is gl_FragCoord.xy
    vec2 fragCoord = gl_FragCoord.xy;
    
    // Resolution
    vec3 resolution = iResolution;

    // Normalize coordinates (centered) - Exact match to your Shadertoy logic
    vec2 uv = (fragCoord - resolution.xy * 0.5) / resolution.y;

    float scale = 0.3;
    float iter = 0.0;
    float height = 0.0;
    vec3 p = vec3(0.0);

    // Main outer loop
    for (uv -= scale; iter < 32.0; iter++, scale += 1.0)
    {
        if (scale <= 0.001) break;

        // Accumulate position
        p += vec3(uv * scale, scale);
        height = p.y;
        float n = 0.01;

        // Fractal-like accumulation loop
        while (n < 1.0)
        {
            float wave = abs(
                dot(
                    sin(p.z + iTime + p / n),
                    vec3(1.0) // Simplified resolution/resolution
                )
            );

            height += wave * n * 0.1;
            n += n; // doubling each step
        }
        scale = height;
    }

    // Final color using tanh for soft-clipping
    gl_FragColor = vec4(tanh(iter * vec3(5.0, 2.0, 1.0) / length(uv - 0.1) / 500.0), 1.0);
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
 * Renderer & Sizing
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

const updateSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    renderer.setSize(width, height);
    renderer.setPixelRatio(pixelRatio);
    
    // Update resolution uniform to match drawing buffer
    uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio, 1);
};

window.addEventListener('resize', updateSize);
updateSize();

/**
 * Animate
 */
const timer = new THREE.Timer(); 

const tick = () => {
    timer.update();
    uniforms.iTime.value = timer.getElapsed();

    renderer.render(scene, new THREE.Camera());
    window.requestAnimationFrame(tick);
};

tick();