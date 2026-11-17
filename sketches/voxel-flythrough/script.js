
import * as THREE from 'three';


/**
 * ============================================================
 * VOXEL FLYTHROUGH
 * ============================================================
 *
 * Based on the Shadertoy shader "Voxel Flythrough".
 *
 * All scene geometry and lighting are calculated in the
 * fragment shader.
 *
 * The external texture texture.jpg is used as iChannel0.
 */


/**
 * ============================================================
 * 1. THREE.JS SETUP
 * ============================================================
 */

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();


/**
 * ============================================================
 * 2. LOAD TEXTURE
 * ============================================================
 *
 * Load the original Shadertoy iChannel0 texture.
 *
 * The texture is used for triplanar mapping and
 * texture-based bump mapping.
 */

const textureLoader = new THREE.TextureLoader();

const noiseTexture = textureLoader.load(
    './texture.jpg',
    () => {
        console.log('Voxel texture loaded successfully.');
    },
    undefined,
    (error) => {
        console.error('Error loading texture.jpg:', error);
    }
);

noiseTexture.wrapS = THREE.RepeatWrapping;
noiseTexture.wrapT = THREE.RepeatWrapping;

noiseTexture.minFilter = THREE.LinearMipmapLinearFilter;
noiseTexture.magFilter = THREE.LinearFilter;

noiseTexture.generateMipmaps = true;

// Treat the texture as numerical data in the shader.
noiseTexture.colorSpace = THREE.NoColorSpace;


/**
 * ============================================================
 * 3. SHADER UNIFORMS
 * ============================================================
 *
 * iTime:
 *   Elapsed time.
 *
 * iResolution:
 *   Drawing-buffer resolution.
 *
 * iChannel0:
 *   External texture.
 */

const uniforms = {

    iTime: {
        value: 0
    },

    iResolution: {
        value: new THREE.Vector3(1, 1, 1)
    },

    iChannel0: {
        value: noiseTexture
    }

};


/**
 * ============================================================
 * 4. VERTEX SHADER
 * ============================================================
 */

const vertexShader = /* glsl */`

void main() {

    gl_Position = vec4(position, 1.0);

}

`;


/**
 * ============================================================
 * 5. FRAGMENT SHADER
 * ============================================================
 */

const fragmentShader = /* glsl */`

precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform sampler2D iChannel0;

#define FAR 35.0


/**
 * ------------------------------------------------------------
 * 2D ROTATION
 * ------------------------------------------------------------
 *
 * Rotates a 2D vector by angle a.
 *
 * Used to rotate the camera direction when following
 * the curved path.
 */

mat2 rot2(float a) {

    vec2 v = sin(vec2(1.570796, 0.0) + a);

    return mat2(v, -v.y, v.x);

}


/**
 * ------------------------------------------------------------
 * TRIPLANAR TEXTURE MAPPING
 * ------------------------------------------------------------
 *
 * Projects a 2D texture onto a 3D surface using three
 * different coordinate planes:
 *
 * XY, YZ and ZX.
 *
 * The surface normal determines the blending weights.
 *
 * This avoids the need for conventional UV coordinates.
 */

vec3 tex3D(sampler2D tex, in vec3 p, in vec3 n) {

    n = max((abs(n) - 0.2) * 7.0, 0.001);

    n /= (n.x + n.y + n.z);

    p = (
        texture(tex, p.yz) * n.x +
        texture(tex, p.zx) * n.y +
        texture(tex, p.xy) * n.z
    ).xyz;

    // Approximate conversion from sRGB to linear RGB.
    return p * p;

}


/**
 * ------------------------------------------------------------
 * CAMERA PATH
 * ------------------------------------------------------------
 *
 * Defines the curved path through the environment.
 *
 * Two sinusoidal functions create horizontal and vertical
 * deviations from a straight trajectory.
 */

vec2 path(in float z) {

    float a = sin(z * 0.11);

    float b = cos(z * 0.14);

    return vec2(
        a * 4.0 - b * 1.5,
        b * 1.7 + a * 1.5
    );

}


/**
 * ------------------------------------------------------------
 * 3D VALUE NOISE
 * ------------------------------------------------------------
 *
 * Generates continuous pseudo-random values in 3D space.
 *
 * Used for procedural environment reflections.
 */

float n3D(vec3 p) {

    const vec3 s = vec3(7.0, 157.0, 113.0);

    vec3 ip = floor(p);

    p -= ip;

    vec4 h = vec4(0.0, s.yz, s.y + s.z) + dot(ip, s);

    p = p * p * (3.0 - 2.0 * p);

    h = mix(
        fract(sin(h) * 43758.5453),
        fract(sin(h + s.x) * 43758.5453),
        p.x
    );

    h.xy = mix(h.xz, h.yw, p.y);

    return mix(h.x, h.y, p.z);

}


/**
 * ------------------------------------------------------------
 * PROCEDURAL DISTANCE FIELD
 * ------------------------------------------------------------
 *
 * Defines the geometry of the environment.
 *
 * The geometry is generated using trigonometric
 * transformations rather than actual 3D meshes.
 *
 * Negative values indicate the interior of the geometry.
 * Positive values indicate the exterior.
 */

float map(vec3 p) {

    // Bend the geometry around the camera path.
    p.xy -= path(p.z);

    // Large-scale 3D deformation.
    p = cos(p * 0.1575 + sin(p.zxy * 0.4375));

    // Create rounded, spherical-like structures.
    float n = dot(p, p);

    // Add smaller surface irregularities.
    p = sin(p * 3.0 + cos(p.yzx * 3.0));

    return n - p.x * p.y * p.z * 0.35 - 0.9;

}


/**
 * ------------------------------------------------------------
 * PROCEDURAL BRICK PATTERN
 * ------------------------------------------------------------
 *
 * Generates a repeating brick-like surface pattern.
 *
 * brickShade():
 *   Shading variation across the bricks.
 *
 * brickMorter():
 *   Grooves between bricks.
 *
 * brick():
 *   Combines the two patterns.
 */

const float w2h = 1.0;

const float mortW = 0.05;


float brickShade(vec2 p) {

    p = fract(p);

    return pow(
        16.0 * p.x * p.y * (1.0 - p.x) * (1.0 - p.y),
        0.25
    );

}


float brickMorter(vec2 p) {

    p.x -= 0.5;

    p = abs(fract(p + vec2(0.0, 0.5)) - 0.5) * 2.0;

    return smoothstep(0.0, mortW, p.x)
         * smoothstep(0.0, mortW * w2h, p.y);

}


float brick(vec2 p) {

    p = fract(p * vec2(0.5 / w2h, 0.5)) * 2.0;

    return brickMorter(p) * (brickShade(p) * 0.5 + 0.5);

}


/**
 * ------------------------------------------------------------
 * FUNCTION-BASED BUMP MAPPING
 * ------------------------------------------------------------
 *
 * Modifies surface normals to simulate small geometric
 * variations without modifying the actual geometry.
 */

float bumpSurf(in vec3 p, in vec3 n) {

    n = abs(n);

    if (n.x > 0.5) {
        p.xy = p.zy;
    }
    else if (n.y > 0.5) {
        p.xy = p.zx;
    }

    return brick(p.xy);

}


vec3 doBumpMap(in vec3 p, in vec3 nor, float bumpfactor) {

    const vec2 e = vec2(0.001, 0.0);

    float ref = bumpSurf(p, nor);

    vec3 grad = vec3(
        bumpSurf(p - e.xyy, nor),
        bumpSurf(p - e.yxy, nor),
        bumpSurf(p - e.yyx, nor)
    ) - ref;

    grad /= e.x;

    grad -= nor * dot(nor, grad);

    return normalize(nor + grad * bumpfactor);

}


/**
 * ------------------------------------------------------------
 * TEXTURE-BASED BUMP MAPPING
 * ------------------------------------------------------------
 *
 * Uses texture samples to estimate surface gradients.
 *
 * The resulting gradient modifies the surface normal.
 */

vec3 doBumpMap(
    sampler2D tx,
    in vec3 p,
    in vec3 n,
    float bf
) {

    const vec2 e = vec2(0.001, 0.0);

    mat3 m = mat3(
        tex3D(tx, p - e.xyy, n),
        tex3D(tx, p - e.yxy, n),
        tex3D(tx, p - e.yyx, n)
    );

    vec3 g = vec3(0.299, 0.587, 0.114) * m;

    g = (
        g - dot(
            tex3D(tx, p, n),
            vec3(0.299, 0.587, 0.114)
        )
    ) / e.x;

    g -= n * dot(n, g);

    return normalize(n + g * bf);

}


/**
 * ============================================================
 * 6. VOXEL TRAVERSAL
 * ============================================================
 *
 * Traverses the 3D voxel grid to find the first surface
 * intersected by a camera ray.
 *
 * The mask identifies the axis of the voxel boundary
 * crossed by the ray.
 */

vec3 voxelTrace(vec3 ro, vec3 rd, out vec3 mask) {

    vec3 p = floor(ro) + 0.5;

    vec3 dRd = 1.0 / abs(rd);

    rd = sign(rd);

    vec3 side = dRd * (rd * (p - ro) + 0.5);

    mask = vec3(0.0);

    for (int i = 0; i < 80; i++) {

        if (map(p) < 0.0) break;

        mask = step(side, side.yzx)
             * (1.0 - step(side.zxy, side));

        side += mask * dRd;

        p += mask * rd;

    }

    return p;

}


/**
 * ============================================================
 * 7. VOXEL SHADOWS
 * ============================================================
 *
 * Casts a secondary ray toward the light source.
 *
 * If geometry blocks the ray, the surface receives less light.
 */

float voxShadow(vec3 ro, vec3 rd, float end) {

    float shade = 1.0;

    vec3 p = floor(ro) + 0.5;

    vec3 dRd = 1.0 / abs(rd);

    rd = sign(rd);

    vec3 side = dRd * (rd * (p - ro) + 0.5);

    vec3 mask = vec3(0.0);

    float d = 1.0;

    for (int i = 0; i < 16; i++) {

        d = map(p);

        if (d < 0.0 || length(p - ro) > end) break;

        mask = step(side, side.yzx)
             * (1.0 - step(side.zxy, side));

        side += mask * dRd;

        p += mask * rd;

    }

    return shade = step(0.0, d) * 0.7 + 0.3;

}


/**
 * ============================================================
 * 8. AMBIENT OCCLUSION
 * ============================================================
 *
 * Estimates how much ambient light reaches each surface.
 *
 * Nearby geometry reduces the amount of ambient light,
 * creating darker corners and crevices.
 */

vec4 voxelAO(vec3 p, vec3 d1, vec3 d2) {

    vec4 side = vec4(
        map(p + d1),
        map(p + d2),
        map(p - d1),
        map(p - d2)
    );

    vec4 corner = vec4(
        map(p + d1 + d2),
        map(p - d1 + d2),
        map(p - d1 - d2),
        map(p + d1 - d2)
    );

    side = step(side, vec4(0.0));

    corner = step(corner, vec4(0.0));

    return 1.0 - (
        side + side.yzwx
        + max(corner, side * side.yzwx)
    ) / 3.0;

}


float calcVoxAO(vec3 vp, vec3 sp, vec3 rd, vec3 mask) {

    vec4 vAO = voxelAO(
        vp - sign(rd) * mask,
        mask.zxy,
        mask.yzx
    );

    sp = fract(sp);

    vec2 uv = sp.yz * mask.x
            + sp.zx * mask.y
            + sp.xy * mask.z;

    return mix(
        mix(vAO.z, vAO.w, uv.x),
        mix(vAO.y, vAO.x, uv.x),
        uv.y
    );

}


/**
 * ============================================================
 * 9. TRANSLUCENCY
 * ============================================================
 *
 * Estimates the thickness of the geometry by sampling
 * the distance field behind the surface.
 *
 * Thin areas produce a stronger translucent effect.
 */

float thickness(
    in vec3 p,
    in vec3 n,
    float maxDist,
    float falloff
) {

    const float nbIte = 6.0;

    float ao = 0.0;

    for (float i = 1.0; i < nbIte + 0.5; i++) {

        float l = (
            i * 0.75
            + fract(cos(i) * 45758.5453) * 0.25
        ) / nbIte * maxDist;

        ao += (
            l + map(p - n * l)
        ) / pow(1.0 + l, falloff);

    }

    return clamp(1.0 - ao / nbIte, 0.0, 1.0);

}


/**
 * ============================================================
 * 10. ENVIRONMENT MAPPING
 * ============================================================
 *
 * Generates procedural coloured reflections using
 * 3D value noise.
 */

vec3 envMap(vec3 rd, vec3 sn) {

    float c = n3D(rd * 3.0) * 0.66
            + n3D(rd * 6.0) * 0.34;

    c = smoothstep(0.4, 1.0, c);

    return vec3(
        min(c * 1.5, 1.0),
        pow(c, 3.0),
        pow(c, 16.0)
    );

}


/**
 * ============================================================
 * 11. MAIN FRAGMENT SHADER
 * ============================================================
 */

void main() {

    /**
     * SCREEN COORDINATES
     *
     * Centre the pixel coordinates and normalise them
     * using the screen height.
     *
     * This preserves the aspect ratio.
     */

    vec2 uv = (
        gl_FragCoord.xy - iResolution.xy * 0.5
    ) / iResolution.y;


    /**
     * CAMERA SETUP
     *
     * The camera moves forward along the Z axis.
     *
     * Its position is also displaced along the curved path.
     */

    vec3 camPos = vec3(0.0, 0.0, iTime * 2.0);

    vec3 lookAt = camPos + vec3(0.0, 0.0, 0.25);

    vec3 lightPos = camPos + vec3(0.0, 1.0, 5.0);


    // Apply the curved path.
    lookAt.xy += path(lookAt.z);

    camPos.xy += path(camPos.z);

    lightPos.xy += path(lightPos.z);


    /**
     * CAMERA ORIENTATION
     *
     * Construct the camera coordinate system.
     */

    float FOV = 3.14159265 / 3.0;

    vec3 forward = normalize(lookAt - camPos);

    vec3 right = normalize(
        vec3(forward.z, 0.0, -forward.x)
    );

    vec3 up = cross(forward, right);


    /**
     * RAY DIRECTION
     *
     * Each fragment receives its own viewing ray.
     */

    vec3 rd = normalize(
        forward
        + FOV * uv.x * right
        + FOV * uv.y * up
    );


    /**
     * CAMERA ROTATION
     *
     * Rotate the viewing direction according to the path.
     */

    rd.xy = rot2(path(lookAt.z).x / 24.0) * rd.xy;


    /**
     * VOXEL TRAVERSAL
     */

    vec3 mask;

    vec3 vPos = voxelTrace(camPos, rd, mask);


    /**
     * INTERSECTION DISTANCE
     */

    vec3 tCube = (
        vPos - camPos - 0.5 * sign(rd)
    ) / rd;

    float t = max(
        max(tCube.x, tCube.y),
        tCube.z
    );


    // Initialise scene colour.
    vec3 sceneCol = vec3(0.0);


    /**
     * SURFACE SHADING
     */

    if (t < FAR) {

        /**
         * SURFACE POSITION AND NORMAL
         */

        vec3 sp = camPos + rd * t;

        vec3 sn = -(mask * sign(rd));

        vec3 snNoBump = sn;


        /**
         * BUMP MAPPING
         */

        const float tSize0 = 1.0 / 4.0;

        // Texture-based bump mapping.
        sn = doBumpMap(
            iChannel0,
            sp * tSize0,
            sn,
            0.01
        );

        // Procedural brick bump mapping.
        sn = doBumpMap(
            sp,
            sn,
            0.1
        );


        /**
         * AMBIENT OCCLUSION
         */

        float ao = calcVoxAO(vPos, sp, rd, mask);


        /**
         * LIGHT DIRECTION
         */

        vec3 ld = lightPos - sp;

        float lDist = max(length(ld), 0.001);

        ld /= lDist;


        /**
         * LIGHT ATTENUATION
         */

        float atten = 1.0 / (
            1.0 + lDist * 0.2 + lDist * 0.1
        );


        /**
         * DIFFUSE LIGHTING
         */

        float ambience = 0.25;

        float diff = max(dot(sn, ld), 0.0);


        /**
         * SPECULAR LIGHTING
         */

        float spec = pow(
            max(dot(reflect(-ld, sn), -rd), 0.0),
            32.0
        );


        /**
         * SURFACE COLOUR
         */

        vec3 texCol = vec3(0.55, 0.7, 1.3);


        /**
         * APPLY TEXTURE
         */

        texCol *= tex3D(
            iChannel0,
            sp * tSize0,
            sn
        ) * 4.0;

        texCol *= bumpSurf(sp, sn) * 0.5 + 0.5;


        /**
         * TRANSLUCENCY
         */

        vec3 hf = normalize(ld + sn);

        float th = thickness(sp, sn, 1.0, 1.0);

        float tdiff = pow(
            clamp(dot(rd, -hf), 0.0, 1.0),
            1.0
        );

        float trans = tdiff * th;

        trans = pow(trans, 4.0);


        /**
         * SHADOWS
         */

        float shading = voxShadow(
            sp + snNoBump * 0.01,
            ld,
            lDist
        );


        /**
         * COMBINE LIGHTING
         */

        sceneCol = texCol * (diff + ambience)
                 + vec3(0.7, 0.9, 1.0) * spec;

        // Add reddish subsurface scattering.
        sceneCol += vec3(1.0, 0.05, 0.15) * trans * 2.0;

        // Add environment reflections.
        sceneCol += envMap(reflect(rd, sn), sn);


        /**
         * FINAL SURFACE SHADING
         */

        sceneCol *= atten * shading * ao;

    }


    /**
     * ========================================================
     * ATMOSPHERIC FOG
     * ========================================================
     *
     * Blend the geometry with a coloured background.
     *
     * Fog increases with distance, creating depth.
     */

    vec3 fog = mix(
        vec3(0.96, 0.48, 0.36),
        vec3(0.24, 0.32, 0.64),
        -rd.y * 0.5 + 0.5
    );

    sceneCol = mix(
        sceneCol,
        fog * sqrt(fog) * 1.2,
        smoothstep(0.0, 0.95, t / FAR)
    );


    /**
     * ========================================================
     * FINAL COLOUR
     * ========================================================
     *
     * Clamp the RGB values and apply approximate gamma
     * correction.
     */

    gl_FragColor = vec4(
        sqrt(clamp(sceneCol, 0.0, 1.0)),
        1.0
    );

}

`;


/**
 * ============================================================
 * 12. SHADER MATERIAL
 * ============================================================
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
 * ============================================================
 * 13. RENDERER
 * ============================================================
 */

const renderer = new THREE.WebGLRenderer({

    canvas,

    antialias: true

});

renderer.setClearColor(0x000000, 1);


/**
 * ============================================================
 * 14. RESPONSIVE SIZING
 * ============================================================
 */

function updateSize() {

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

}

window.addEventListener('resize', updateSize);

updateSize();


/**
 * ============================================================
 * 15. ANIMATION
 * ============================================================
 *
 * THREE.Timer tracks elapsed time.
 *
 * The time uniform controls the camera movement inside
 * the fragment shader.
 */

const timer = new THREE.Timer();

const camera = new THREE.Camera();


function tick() {

    timer.update();

    uniforms.iTime.value = timer.getElapsed();

    renderer.render(scene, camera);

    requestAnimationFrame(tick);

}

tick();
