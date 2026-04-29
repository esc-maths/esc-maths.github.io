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
    iMouse: { value: new THREE.Vector2() }
};

/**
 * =========================================================
 * FRAGMENT SHADER (STAR NEST)
 * =========================================================
 */
const fragmentShader = `
uniform float iTime;
uniform vec3 iResolution;
uniform vec2 iMouse;

#define iterations 17
#define formuparam 0.53

#define volsteps 20
#define stepsize 0.1

#define zoom   0.800
#define tile   0.850
#define speed  0.0010 

#define brightness 0.0015
#define darkmatter 0.300
#define distfading 0.730
#define saturation 0.850

void main() {

    vec2 fragCoord = gl_FragCoord.xy;

    // coords
    vec2 uv = fragCoord / iResolution.xy - 0.5;
    uv.y *= iResolution.y / iResolution.x;

    vec3 dir = vec3(uv * zoom, 1.0);
    float time = iTime * speed + 0.25;

    // mouse rotation
    float a1 = 0.5;
    float a2 = 0.8;

    mat2 rot1 = mat2(cos(a1), sin(a1), -sin(a1), cos(a1));
    mat2 rot2 = mat2(cos(a2), sin(a2), -sin(a2), cos(a2));

    dir.xz *= rot1;
    dir.xy *= rot2;

    // vec3 flow = vec3(
    //   sin(iTime * 0.011) + 0.5 * sin(iTime * 0.027),
    //   cos(iTime * 0.013) + 0.3 * cos(iTime * 0.021),
    //   sin(iTime * 0.009) + 0.4 * cos(iTime * 0.017)
    // );

    

    vec3 from = vec3(1.0, 0.5, 0.5);
    //from += flow * 1.0;
    from += vec3(time * 2.0 * sin(time * 8.0), time, -2.0);

    from.xz *= rot1;
    from.xy *= rot2;

    // volumetric rendering
    float s = 0.1;
    float fade = 1.0;
    vec3 v = vec3(0.0);

    for (int r = 0; r < volsteps; r++) {

        vec3 p = from + s * dir * 0.5;
        p = abs(vec3(tile) - mod(p, vec3(tile * 2.0)));

        float pa = 0.0;
        float a = 0.0;

        for (int i = 0; i < iterations; i++) {
            p = abs(p) / dot(p, p) - formuparam;
            a += abs(length(p) - pa);
            pa = length(p);
        }

        float dm = max(0.0, darkmatter - a * a * 0.0001);

        a *= a * a;

        if (r > 6) fade *= 1.0 - dm;

        v += fade;
        v += vec3(s, s*s, s*s*s*s) * a * brightness * fade;

        fade *= distfading;
        s += stepsize;
    }

    v = mix(vec3(length(v)), v, saturation);

    gl_FragColor = vec4(v * 0.01, 1.0);
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
 * MOUSE (for rotation like Shadertoy)
 * =========================================================
 */
window.addEventListener('mousemove', (e) => {
    uniforms.iMouse.value.set(
        e.clientX,
        window.innerHeight - e.clientY
    );
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

    renderer.render(scene, new THREE.Camera());

    requestAnimationFrame(tick);
}

tick();