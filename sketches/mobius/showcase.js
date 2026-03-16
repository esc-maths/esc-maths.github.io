import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();
const geometry = new THREE.PlaneGeometry(2, 2);

const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
    uMode: { value: 0 },       // 0: Loxodromic, 1: Elliptic, 2: Hyperbolic, 3: Parabolic
    uShowSphere: { value: 1.0 } // 1.0: On, 0.0: Off
};

const fragmentShader = `
uniform float iTime;
uniform vec3 iResolution;
uniform int uMode; 
uniform float uShowSphere;

#define PI 3.14159265359

// --- Complex Math ---
vec2 cmul(vec2 z, vec2 w) { return vec2(z.x * w.x - z.y * w.y, z.x * w.y + z.y * w.x); }
vec2 cdiv(vec2 z, vec2 w) { return vec2(z.x * w.x + z.y * w.y, -z.x * w.y + z.y * w.x) / dot(w, w); }

// The fixed Mobius base warp
vec2 applyMobius(vec2 z) {
    vec2 A = vec2(-1, 0), B = vec2(1, 0), C = vec2(-1, 0), D = vec2(-1, 0);
    return cdiv(cmul(A, z) + B, cmul(C, z) + D);
}

float map(vec3 p) {
    float d = p.y; 
    if (uShowSphere > 0.5) d = min(d, length(p - vec3(0, 1, 0)) - 1.0);
    return d;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y;
    vec3 ro = vec3(-3.0, 5.0, -6.0), look = vec3(0, 0.6, 0);
    vec3 f = normalize(look - ro), r = normalize(cross(f, vec3(0, 1, 0))), u = normalize(cross(r, f));
    vec3 rd = normalize(uv.x * r + uv.y * u + 2.0 * f);

    float t = 0.0;
    for(int i = 0; i < 120; i++) {
        float d = map(ro + rd * t);
        if(d < 0.001 || t > 40.0) break;
        t += d;
    }

    vec3 col = vec3(0.05, 0.05, 0.08);

    if(t < 50.0) {
        vec3 pos = ro + rd * t;
        bool isSphere = (uShowSphere > 0.5 && length(pos - vec3(0, 1, 0)) < 1.1);
        
        // 1. Map to Complex Plane
        vec2 z = isSphere ? vec2(pos.x, pos.z) / (2.001 - pos.y) : pos.xz * 0.5;

        // Apply Mobius base
        z = applyMobius(z);

        vec2 gridUV;

        // 2. Apply Mode (State Machine)
        float speed = 0.09;
        if (uMode == 0) { // Loxodromic: Seamless & Large Tiles
            float logR = log(length(z) + 0.0001) - iTime * speed;
            float theta = atan(z.y, z.x) * (2.0 / PI) + iTime * speed; // Period is 4.0
    
            // slope = 0.5 means for every full rotation (4 units), 
            // we shift log-radius by 2 units. 
            // Since 2 is an even integer, the checkerboard color stays the same 
            // across the jump, hiding the branch cut.
            float slope = 0.5; 
    
            gridUV.x = logR + slope * theta;
            gridUV.y = logR - (1.0 / slope) * theta; 
    
            // Smaller density: 1.0 makes tiles large. 
            // Use integers (1.0, 2.0, etc.) to maintain the seamless branch cut.
            gridUV *= 0.75; 
        }
        else if (uMode == 1) { // Elliptic: Pure Rotation
            gridUV = vec2(log(length(z) + 0.0001), atan(z.y, z.x) * (2.0 / PI) + iTime * speed * 2.2);
        } 
        else if (uMode == 2) { // Hyperbolic: Pure Scaling
            gridUV = vec2(log(length(z) + 0.0001) - iTime * speed * 2.4, atan(z.y, z.x) * (2.0 / PI));
        } 
        else if (uMode == 3) { // Parabolic: Pure Translation
            gridUV = (z + vec2(iTime * speed * 2.2, 0.0)) * 1.0;
        }

        // 3. Render Checkerboard
        vec2 check = floor(mod(gridUV * 4.0, 2.0));
        float mask = abs(check.x - check.y);

        // Define light position/direction here
        vec3 lightPos = vec3(-1.0, 1.0, -0.5); 
        vec3 lightDir = normalize(lightPos); // Or just use a fixed direction like normalize(vec3(1, 2, 3))
        
        vec3 nor = isSphere ? normalize(pos - vec3(0, 1, 0)) : vec3(0, 1, 0);
        // Diffuse lighting
        float diff = clamp(dot(nor, lightDir), 0.2, 1.0);
        col = mix(vec3(0.01), vec3(0.9), mask) * diff;
        
        if(isSphere) col += pow(clamp(dot(reflect(rd, nor), lightDir), 0.0, 1.0), 32.0) * 0.4;
    }

    gl_FragColor = vec4(pow(col, vec3(0.4545)), 1.0);
}
`;

const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
    fragmentShader: fragmentShader
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Add this line

// Initial uniform set with pixel ratio
const canvasWidth = window.innerWidth * renderer.getPixelRatio();
const canvasHeight = window.innerHeight * renderer.getPixelRatio();
uniforms.iResolution.value.set(canvasWidth, canvasHeight, 1);

const modeText = document.getElementById('mode-text');
const modes = {
    '1': 'Loxodromic',
    '2': 'Elliptic',
    '3': 'Hyperbolic',
    '4': 'Parabolic'
};

window.addEventListener('keydown', (e) => {
    // 1. Handle Mode Switching (1-4)
    if (modes[e.key]) {
        uniforms.uMode.value = parseInt(e.key) - 1;
        
        // Only update text if the element actually exists to prevent crashes
        if (modeText) {
            modeText.innerText = modes[e.key];
        }
    }

    // 2. Handle Sphere Toggle (5)
    if (e.key === '5') {
        // Toggle between 1.0 and 0.0
        uniforms.uShowSphere.value = uniforms.uShowSphere.value === 1.0 ? 0.0 : 1.0;
        console.log("Sphere toggled to:", uniforms.uShowSphere.value);
    }
});

window.addEventListener('resize', () => {
    // 1. Get new dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 2. Update Renderer (this updates the canvas width/height attributes)
    renderer.setSize(width, height);
    
    // 3. Update Pixel Ratio (important for high-DPI screens/Retina)
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);

    // 4. Update Uniforms
    // We multiply by pixelRatio to ensure the shader knows the actual 
    // number of pixels in the drawing buffer
    uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio, 1);
});

// REMOVE the second redundant window.addEventListener('keydown'...) block below this!

const tick = () => {
    uniforms.iTime.value = performance.now() / 1000;
    renderer.render(scene, new THREE.Camera());
    window.requestAnimationFrame(tick);
};
tick();