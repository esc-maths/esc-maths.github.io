import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ============================================
// SHADERS
// ============================================

// Column/Accretion Disk Shader
const columnVertexShader = `
varying vec2 vUv;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`;

const columnFragmentShader = `
uniform float uTime;
uniform sampler2D uGradientTexture;
uniform sampler2D uNoisesTexture;
varying vec2 vUv;

float inverseLerp(float v, float minValue, float maxValue) {
    return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}

void main() {
    float noise1 = texture(uNoisesTexture, vUv - uTime * 0.1).r;
    float noise2 = texture(uNoisesTexture, vUv - uTime * 0.08).g;
    float noise3 = texture(uNoisesTexture, vUv - uTime * 0.06).b;
    float noise4 = texture(uNoisesTexture, vUv - uTime * 0.04).a;
    vec4 noiseVector = vec4(noise1, noise2, noise3, noise4);
    float noiseLength = length(noiseVector);

    float outerFalloff = remap(vUv.y, 0.4, 0.0, 1.0, 0.0);
    float innerFalloff = remap(vUv.y, 1.0, 0.95, 0.0, 1.0);
    float falloff = min(outerFalloff, innerFalloff);
    falloff = smoothstep(0.0, 1.0, falloff);

    vec2 uv = vUv;
    uv.y += noiseLength * 0.4;
    uv.y *= falloff;

    vec4 color = texture(uGradientTexture, uv);
    color.a = uv.y;

    gl_FragColor = color;
}
`;

// Noise Generation Shader
const noiseVertexShader = `
varying vec2 vUv;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`;

const noiseFragmentShader = `
varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float perlin3dPeriodic(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep); 
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

void main() {
    float perlin1 = perlin3dPeriodic(vec3(vUv.xy * 5.0, 12.34), vec3(5.0));
    float perlin2 = perlin3dPeriodic(vec3(vUv.xy * 10.0, 34.56), vec3(10.0));
    float perlin3 = perlin3dPeriodic(vec3(vUv.xy * 20.0, 56.78), vec3(20.0));
    float perlin4 = perlin3dPeriodic(vec3(vUv.xy * 40.0, 56.78), vec3(40.0));
    gl_FragColor = vec4(perlin1, perlin2, perlin3, perlin4);
}
`;

// Star Particles Shader
const starVertexShader = `
attribute float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
    gl_PointSize = size;
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const starFragmentShader = `
varying vec3 vColor;

void main() {
    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - 0.5);
    float alpha = 0.02 / distanceToCenter;
    alpha *= 1.0 - distanceToCenter * 2.0;
    gl_FragColor = vec4(vColor, alpha);
}
`;

// Black Hole Core Shader (creates the dark center)
const holeVertexShader = `
varying vec2 vUv;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`;

const holeFragmentShader = `
varying vec2 vUv;

float inverseLerp(float v, float minValue, float maxValue) {
    return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}

void main() {
    float distanceToCenter = length(vUv - 0.5);
    float strength = remap(distanceToCenter, 0.2, 0.5, 1.0, 0.0);
    strength = smoothstep(0.0, 1.0, strength);
    gl_FragColor = vec4(vec3(strength), 1.0);
}
`;

// Accretion Disk Ring Shader
const discVertexShader = `
varying vec2 vUv;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`;

const discFragmentShader = `
varying vec2 vUv;

float inverseLerp(float v, float minValue, float maxValue) {
    return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}

void main() {
    float distanceToCenter = length(vUv - 0.5);
    float strength = remap(distanceToCenter, 0.2 / 3.0, 0.5 / 3.0, 1.0, 0.0);
    strength = smoothstep(0.0, 1.0, strength);

    float alpha = remap(distanceToCenter, 0.4, 0.5, 1.0, 0.0);
    alpha = smoothstep(0.0, 1.0, alpha);

    gl_FragColor = vec4(vec3(strength), alpha);
}
`;

// Post-Processing Shader (creates the gravitational lensing effect)
const postVertexShader = `
varying vec2 vUv;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`;

const postFragmentShader = `
uniform float uTime;
uniform sampler2D uDefaultTexture;
uniform sampler2D uDistortionTexture;
uniform vec2 uConvergencePosition;

varying vec2 vUv;

float inverseLerp(float v, float minValue, float maxValue) {
    return (v - minValue) / (maxValue - minValue);
}
float remap(float v, float inMin, float inMax, float outMin, float outMax) {
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}
float random2d(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    float distortionStrength = texture(uDistortionTexture, vUv).r;
    vec2 toConvergence = uConvergencePosition - vUv;
    vec2 distoredUv = vUv + toConvergence * distortionStrength;
    
    float distanceToCenter = length(vUv - 0.5);
    float vignetteStrength = remap(distanceToCenter, 0.3, 0.7, 0.0, 1.0);
    vignetteStrength = smoothstep(0.0, 1.0, vignetteStrength);
    
    float r = texture(uDefaultTexture, distoredUv + vec2(sin(0.0), cos(0.0)) * 0.02 * vignetteStrength).r;
    float g = texture(uDefaultTexture, distoredUv + vec2(sin(2.1), cos(2.1)) * 0.02 * vignetteStrength).g;
    float b = texture(uDefaultTexture, distoredUv + vec2(sin(-2.1), cos(-2.1)) * 0.02 * vignetteStrength).b;
    vec4 color = vec4(r, g, b, 1.0);

    float noise = random2d(vUv + uTime);
    noise = noise - 0.5;

    float grayscale = r * 0.299 + g * 0.587 + b * 0.114;
    noise *= grayscale;

    color += noise;

    gl_FragColor = color;
}
`;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector("canvas.webgl");
    if (!canvas) {
        console.error("Canvas element with class 'webgl' not found!");
        return;
    }
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor("#130e16");
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    
    // Main scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 500);
    camera.position.set(0, 0.8, 10);
    
    // Floating group (this creates the floating camera effect)
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);
    scene.add(camera);
    
    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.zoomSpeed = 0.4;
    
    // Handle resize
    let defaultRenderTarget, distortionRenderTarget;
    
    const resizeHandler = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
        
        if (defaultRenderTarget && distortionRenderTarget) {
            const pixelRatio = renderer.getPixelRatio();
            defaultRenderTarget.setSize(width * pixelRatio, height * pixelRatio);
            distortionRenderTarget.setSize(width * pixelRatio, height * pixelRatio);
        }
    };
    
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    
    // ============================================
    // STAR PARTICLES (Background)
    // ============================================
    
    const starCount = 10000;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
        const idx = i * 3;
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 400;
        
        starPositions[idx + 0] = Math.cos(theta) * Math.sin(phi) * radius;
        starPositions[idx + 1] = Math.sin(theta) * Math.sin(phi) * radius;
        starPositions[idx + 2] = Math.cos(phi) * radius;
        
        starSizes[i] = 0.5 + Math.random() * 30;
        
        const hue = Math.round(Math.random() * 360);
        const lightness = Math.round(80 + Math.random() * 20);
        const color = new THREE.Color(`hsl(${hue}, 100%, ${lightness}%)`);
        
        starColors[idx + 0] = color.r;
        starColors[idx + 1] = color.g;
        starColors[idx + 2] = color.b;
    }
    
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("size", new THREE.BufferAttribute(starSizes, 1));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    
    const starMaterial = new THREE.ShaderMaterial({
        transparent: true,
        vertexShader: starVertexShader,
        fragmentShader: starFragmentShader
    });
    
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);
    
    // ============================================
    // NOISE TEXTURE (for the accretion disk)
    // ============================================
    
    const noiseScene = new THREE.Scene();
    const noiseCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    noiseCamera.position.set(0, 0, 5);
    noiseScene.add(noiseCamera);
    
    const noisePlaneGeometry = new THREE.PlaneGeometry(2, 2);
    const noiseMaterial = new THREE.ShaderMaterial({
        vertexShader: noiseVertexShader,
        fragmentShader: noiseFragmentShader
    });
    const noisePlane = new THREE.Mesh(noisePlaneGeometry, noiseMaterial);
    noiseScene.add(noisePlane);
    
    const noiseRenderTarget = new THREE.WebGLRenderTarget(256, 256, {
        generateMipmaps: false,
        type: THREE.FloatType,
        wrapS: THREE.RepeatWrapping,
        wrapT: THREE.RepeatWrapping
    });
    
    renderer.setRenderTarget(noiseRenderTarget);
    renderer.render(noiseScene, noiseCamera);
    renderer.setRenderTarget(null);
    
    // ============================================
    // GRADIENT TEXTURE (for the accretion disk colors)
    // ============================================
    
    const gradientCanvas = document.createElement("canvas");
    gradientCanvas.width = 1;
    gradientCanvas.height = 128;
    const gradientContext = gradientCanvas.getContext("2d");
    const gradient = gradientContext.createLinearGradient(0, 0, 0, gradientCanvas.height);
    
    // Hot accretion disk colors (orange/red/purple)
    gradient.addColorStop(0, "#fffbf9");  // White-hot center
    gradient.addColorStop(0.1, "#ffbc68"); // Orange
    gradient.addColorStop(0.2, "#ff5600"); // Deep orange
    gradient.addColorStop(0.4, "#ff0053"); // Red/pink
    gradient.addColorStop(0.8, "#cc00ff"); // Purple
    
    gradientContext.fillStyle = gradient;
    gradientContext.fillRect(0, 0, gradientCanvas.width, gradientCanvas.height);
    
    const gradientTexture = new THREE.CanvasTexture(gradientCanvas);
    
    // ============================================
    // ACCRETION DISK (The main visual element)
    // ============================================
    
    const diskGeometry = new THREE.CylinderGeometry(1.5, 1.5, 6, 64, 8, true);
    const diskMaterial = new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        vertexShader: columnVertexShader,
        fragmentShader: columnFragmentShader,
        uniforms: {
            uTime: { value: 0 },
            uGradientTexture: { value: gradientTexture },
            uNoisesTexture: { value: noiseRenderTarget.texture }
        }
    });
    
    const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
    scene.add(accretionDisk);
    
    // ============================================
    // BLACK HOLE CORE & RING (For distortion effect)
    // ============================================
    
    const distortionScene = new THREE.Scene();
    
    // Black hole core (dark center)
    const coreGeometry = new THREE.PlaneGeometry(4, 4);
    const coreMaterial = new THREE.ShaderMaterial({
        vertexShader: holeVertexShader,
        fragmentShader: holeFragmentShader
    });
    const blackHoleCore = new THREE.Mesh(coreGeometry, coreMaterial);
    distortionScene.add(blackHoleCore);
    
    // Accretion ring (glowing ring around the black hole)
    const ringGeometry = new THREE.PlaneGeometry(12, 12);
    const ringMaterial = new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        vertexShader: discVertexShader,
        fragmentShader: discFragmentShader
    });
    const accretionRing = new THREE.Mesh(ringGeometry, ringMaterial);
    accretionRing.rotation.x = -Math.PI * 0.5;
    distortionScene.add(accretionRing);
    
    // ============================================
    // POST-PROCESSING (Gravitational lensing effect)
    // ============================================
    
    const pixelRatio = renderer.getPixelRatio();
    defaultRenderTarget = new THREE.WebGLRenderTarget(
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio,
        { generateMipmaps: false }
    );
    
    distortionRenderTarget = new THREE.WebGLRenderTarget(
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio,
        { generateMipmaps: false, format: THREE.RGBAFormat }
    );
    
    const postScene = new THREE.Scene();
    const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    postCamera.position.set(0, 0, 5);
    postScene.add(postCamera);
    
    const postPlaneGeometry = new THREE.PlaneGeometry(2, 2);
    const postMaterial = new THREE.ShaderMaterial({
        vertexShader: postVertexShader,
        fragmentShader: postFragmentShader,
        uniforms: {
            uTime: { value: 0 },
            uDefaultTexture: { value: defaultRenderTarget.texture },
            uDistortionTexture: { value: distortionRenderTarget.texture },
            uConvergencePosition: { value: new THREE.Vector2() }
        }
    });
    const postPlane = new THREE.Mesh(postPlaneGeometry, postMaterial);
    postScene.add(postPlane);
    
    // ============================================
    // ANIMATION LOOP
    // ============================================
    
    const clock = new THREE.Clock();
    
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Update accretion disk shader time
        diskMaterial.uniforms.uTime.value = elapsedTime;
        
        // Update controls
        controls.update();
        
        // Rotate camera on Z axis (creates the swirling effect)
        camera.rotateZ(0.2);
        
        // Floating group animation (moves the reference point)
        const speed = elapsedTime * 0.2;
        const amplitude = 0.1;
        floatingGroup.position.x = amplitude * Math.sin(speed) * Math.sin(speed * 2.1) * Math.sin(speed * 4.3);
        floatingGroup.position.y = amplitude * Math.sin(speed * 1.23) * Math.sin(speed * 4.56) * Math.sin(speed * 7.89);
        floatingGroup.position.z = amplitude * Math.sin(speed * 3.45) * Math.sin(speed * 6.78) * Math.sin(speed * 9.01);
        
        // Make black hole core face the camera
        camera.updateWorldMatrix();
        blackHoleCore.lookAt(camera.position);
        
        // Calculate convergence position for gravitational lensing
        const convergencePoint = new THREE.Vector3(0, 0, 0);
        convergencePoint.project(camera);
        convergencePoint.x = convergencePoint.x * 0.5 + 0.5;
        convergencePoint.y = convergencePoint.y * 0.5 + 0.5;
        postMaterial.uniforms.uConvergencePosition.value.set(convergencePoint.x, convergencePoint.y);
        postMaterial.uniforms.uTime.value = elapsedTime;
        
        // Render main scene to default render target
        renderer.setRenderTarget(defaultRenderTarget);
        renderer.setClearColor("#130e16");
        renderer.render(scene, camera);
        
        // Render distortion scene (black hole core + ring)
        renderer.setRenderTarget(distortionRenderTarget);
        renderer.setClearColor("#000000");
        renderer.render(distortionScene, camera);
        
        // Render final post-processed scene to screen
        renderer.setRenderTarget(null);
        renderer.render(postScene, postCamera);
        
        requestAnimationFrame(animate);
    };
    
    animate();
});