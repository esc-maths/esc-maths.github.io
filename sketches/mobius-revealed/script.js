import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

// --- UI Configuration ---
const params = {
    translateX: 0.0,
    translateZ: 0.0,
    height: 0.5,      // Scaling
    rotation: 0.0,    // XY-Plane Rotation
    inversion: 0.0,   // X-Axis Rotation (0 to PI)
    showSphere: true
};

const gui = new dat.GUI();
const folder = gui.addFolder('Möbius Rigid Motions');
folder.add(params, 'height', 0.01, 2.0).name('Scaling (Y-Axis)');
folder.add(params, 'rotation', 0, Math.PI * 2).name('Rotation (XY)');
folder.add(params, 'inversion', 0, Math.PI).name('Inversion (X-Axis)');
folder.add(params, 'showSphere').name('Show Sphere');
folder.open();

// --- Mouse Interaction for Translation ---
window.addEventListener('mousemove', (e) => {
    if (e.buttons === 1) { // Left click drag
        params.translateX += e.movementX * 0.01;
        params.translateZ += e.movementY * 0.01;
    }
});

const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
    uSphPos: { value: new THREE.Vector3(0, 0.5, 0) },
    uSphRot: { value: new THREE.Vector2(0, 0) }, // x: XY-rot, y: X-axis rot
    uShowSphere: { value: 1.0 }
};

const fragmentShader = `
uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uSphPos;   // x, z = translation, y = height (scaling)
uniform vec2 uSphRot;   // x = rotation, y = inversion
uniform float uShowSphere;

#define PI 3.14159265359
#define ROT(a) mat2(cos(a), sin(a), -sin(a), cos(a))

// --- Math Helpers ---
float rayPlane(vec3 ro, vec3 rd, vec4 p) {
    return -(dot(ro, p.xyz) + p.w) / dot(rd, p.xyz);
}

vec2 raySphere(vec3 ro, vec3 rd, vec4 sph) {
    vec3 oc = ro - sph.xyz;
    float b = dot(oc, rd);
    float c = dot(oc, oc) - sph.w * sph.w;
    float h = b * b - c;
    if (h < 0.0) return vec2(-1.0);
    return vec2(-b - sqrt(h), -b + sqrt(h));
}

// Rigid Motion: Rotation and Inversion
void applyRigidMotion(inout vec3 p, vec3 center) {
    p -= center;
    // 1. Rotation in the XY-plane (around vertical Y axis in 3D)
    p.xz *= ROT(uSphRot.x);
    // 2. Rotation around X-axis (Inversion 1/z)
    p.yz *= ROT(uSphRot.y); 
    p += center;
}

// Stereographic Projections
vec3 planeToSphere(vec3 p, vec4 sph) {
    vec3 N = sph.xyz + vec3(0, sph.w, 0);
    vec3 rd = normalize(N - p);
    float t = raySphere(p, rd, sph).x;
    return p + rd * t;
}

vec3 sphereToPlane(vec3 p, vec4 sph) {
    vec3 N = sph.xyz + vec3(0, sph.w, 0);
    vec3 rd = normalize(p - N);
    float t = rayPlane(p, rd, vec4(0, 1, 0, 0));
    return p + rd * t;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y;
    
    // Camera
    vec3 ro = vec3(4.0, 3.0, 4.0);
    vec3 look = vec3(0, 0, 0);
    vec3 f = normalize(look - ro), r = normalize(cross(f, vec3(0,1,0))), u = normalize(cross(r, f));
    vec3 rd = normalize(uv.x * r + uv.y * u + 1.5 * f);

    vec4 sph = vec4(uSphPos, 0.5);
    
    // Intersections
    float pt = rayPlane(ro, rd, vec4(0, 1, 0, 0));
    vec2 st = raySphere(ro, rd, sph);
    
    vec3 col = vec3(0.02, 0.03, 0.05); // Background
    float t = 1e10;
    bool isSphere = false;

    if(uShowSphere > 0.5 && st.x > 0.0) { t = st.x; isSphere = true; }
    if(pt > 0.0 && pt < t) { t = pt; isSphere = false; }

    if(t < 50.0) {
        vec3 pos = ro + rd * t;
        vec3 worldP = pos;
        
        if(!isSphere) {
            // Step 1: Map Plane to Sphere
            vec3 pOnSph = planeToSphere(worldP, sph);
            // Step 2: Apply Rigid Motions (Translate/Rotate)
            applyRigidMotion(pOnSph, sph.xyz);
            // Step 3: Map Sphere back to Plane
            vec3 finalP = sphereToPlane(pOnSph, sph);
            
            // Grid logic on final coordinates
            vec2 grid = fract(finalP.xz * 2.0) - 0.5;
            float m = smoothstep(0.45, 0.48, max(abs(grid.x), abs(grid.y)));
            col = mix(vec3(0.2, 0.4, 0.6), vec3(0.0, 1.0, 0.8), m);
        } else {
            // Render the sphere itself
            vec3 pOnSph = worldP;
            applyRigidMotion(pOnSph, sph.xyz);
            vec3 finalP = sphereToPlane(pOnSph, sph);
            
            vec2 grid = fract(finalP.xz * 2.0) - 0.5;
            col = mix(vec3(0.8, 0.8, 0.9), vec3(1, 0.5, 0), smoothstep(0.4, 0.45, max(abs(grid.x), abs(grid.y))));
            col *= max(dot(normalize(pos - sph.xyz), normalize(vec3(1,2,1))), 0.3);
        }
        
        col *= exp(-0.05 * t); // Fog
    }

    gl_FragColor = vec4(pow(col, vec3(0.4545)), 1.0);
}
`;

const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
    fragmentShader: fragmentShader
});

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setSize(width, height);
    uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio, 1);
};

window.addEventListener('resize', handleResize);
handleResize(); // Set initial size

const tick = () => {
    uniforms.iTime.value = performance.now() / 1000;
    
    // Update Uniforms from UI
    uniforms.uSphPos.value.set(params.translateX, params.height, params.translateZ);
    uniforms.uSphRot.value.set(params.rotation, params.inversion);
    uniforms.uShowSphere.value = params.showSphere ? 1.0 : 0.0;
    
    renderer.render(scene, new THREE.Camera());
    window.requestAnimationFrame(tick);
};
tick();