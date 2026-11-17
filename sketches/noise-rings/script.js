
import * as THREE from 'three';

/**
 * Base setup
 */
const canvas = document.querySelector('canvas.webgl');
const scene = new THREE.Scene();

/**
 * Shader uniforms
 */
const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3(1, 1, 1) }
};

/**
 * Vertex shader
 */
const vertexShader = /* glsl */`
    void main() {
        gl_Position = vec4(position, 1.0);
    }
`;

/**
 * Fragment shader
 * Simplex Noise Rings
 */
const fragmentShader = /* glsl */`

precision highp float;

uniform float iTime;
uniform vec3 iResolution;

#define NUM_RINGS 16.0

const float PI = 3.14159265359;
const float TAU = 6.28318530718;


/**
 * 3D random function
 */
vec3 random3(vec3 c) {

    float j = 4096.0 * sin(dot(c, vec3(17.0, 59.4, 15.0)));

    vec3 r;

    r.z = fract(512.0 * j);

    j *= 0.125;

    r.x = fract(512.0 * j);

    j *= 0.125;

    r.y = fract(512.0 * j);

    return r - 0.5;
}


/**
 * Simplex noise constants
 */
const float F3 = 0.3333333;
const float G3 = 0.1666667;


/**
 * 3D simplex noise
 */
float simplex3d(vec3 p) {

    // Find current tetrahedron
    vec3 s = floor(p + dot(p, vec3(F3)));

    vec3 x = p - s + dot(s, vec3(G3));

    // Calculate i1 and i2
    vec3 e = step(vec3(0.0), x - x.yzx);

    vec3 i1 = e * (1.0 - e.zxy);

    vec3 i2 = 1.0 - e.zxy * (1.0 - e);

    // Calculate x1, x2 and x3
    vec3 x1 = x - i1 + G3;

    vec3 x2 = x - i2 + 2.0 * G3;

    vec3 x3 = x - 1.0 + 3.0 * G3;

    // Calculate surflet weights
    vec4 w;

    vec4 d;

    w.x = dot(x, x);
    w.y = dot(x1, x1);
    w.z = dot(x2, x2);
    w.w = dot(x3, x3);

    w = max(0.6 - w, 0.0);

    // Calculate surflet components
    d.x = dot(random3(s), x);

    d.y = dot(random3(s + i1), x1);

    d.z = dot(random3(s + i2), x2);

    d.w = dot(random3(s + 1.0), x3);

    // Multiply by w^4
    w *= w;
    w *= w;

    d *= w;

    return dot(d, vec4(52.0));
}


/**
 * Main shader
 */
void main() {

    vec2 fragCoord = gl_FragCoord.xy;

    vec2 uv = (fragCoord - 0.5 * iResolution.xy) / iResolution.y;

    vec3 col = vec3(0.0);

    // Time parameter
    float tt = fract(0.3 * iTime);

    // Generate noise rings
    for (float i = 1.0; i <= NUM_RINGS; i++) {

        // Angle of UV point
        float a = atan(uv.y, uv.x) + PI;

        // Radius of circle through noise-space
        float rad = 0.2;

        // Embedded simplex noise
        float embeddedNoise = simplex3d(
            vec3(sin(a), cos(a), i)
        );

        // Noise deltas
        float nx = 0.12 * simplex3d(
            vec3(
                (10.0 * i) + rad * sin(TAU * tt - 5.0 * a),
                (10.0 * i) + rad * cos(TAU * tt - 5.0 * a),
                embeddedNoise
            )
        );

        float ny = 0.12 * simplex3d(
            vec3(
                (2.0 * i) + rad * sin(TAU * tt - 5.0 * a),
                (2.0 * i) + rad * cos(TAU * tt - 5.0 * a),
                embeddedNoise
            )
        );

        // Dampener
        float d = length(uv - vec2(-0.4));

        // Circle SDF with noise and dampening
        float circSDF = abs(
            length(uv - vec2(nx * d * d, ny * d * d)) - 0.37
        );

        // Glow effect
        col += d * 0.0008 / max(abs(circSDF), 0.00001);
    }

    gl_FragColor = vec4(col, 1.0);
}
`;


/**
 * Shader material
 */
const geometry = new THREE.PlaneGeometry(2, 2);

const material = new THREE.ShaderMaterial({

    uniforms,

    vertexShader,

    fragmentShader,

    depthTest: false,

    depthWrite: false

});

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({

    canvas,

    antialias: true

});

renderer.setClearColor(0x000000, 1);


/**
 * Responsive sizing
 */
const updateSize = () => {

    const width = window.innerWidth;

    const height = window.innerHeight;

    const pixelRatio = Math.min(window.devicePixelRatio, 2);

    renderer.setPixelRatio(pixelRatio);

    renderer.setSize(width, height);

    uniforms.iResolution.value.set(
        width * pixelRatio,
        height * pixelRatio,
        1
    );

};

window.addEventListener('resize', updateSize);

updateSize();


/**
 * Animation
 */
const timer = new THREE.Timer();

const camera = new THREE.Camera();

const tick = () => {

    timer.update();

    uniforms.iTime.value = timer.getElapsed();

    renderer.render(scene, camera);

    requestAnimationFrame(tick);

};

tick();
