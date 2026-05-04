import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const geometry = new THREE.PlaneGeometry(2, 2);

// --- Audio Logic ---
let audioContext, analyser, dataArray, source;
const audioUrl = 'https://raw.githubusercontent.com/esc-maths/esc-maths.github.io/main/slides/1017scg/sketches/sound-viz/dance-land.mp3';

async function initAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);

    try {
        const response = await fetch(audioUrl);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        
        source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        source.loop = true;
        source.start();
    } catch (err) {
        console.error("Audio failed to load:", err);
    }
}

async function toggleAudio() {
    if (!audioContext) {
        await initAudio();
    } else {
        if (audioContext.state === 'running') {
            await audioContext.suspend();
        } else {
            await audioContext.resume();
        }
    }
}

// Key listener for 'P'
window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'p') {
        toggleAudio();
    }
});

// --- Textures & Uniforms ---
const loader = new THREE.TextureLoader();
const nyanTex = loader.load('cat.png'); 
nyanTex.magFilter = THREE.NearestFilter;
nyanTex.minFilter = THREE.NearestFilter;

const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3() },
    iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
    iAudioLevel: { value: 0 },
    iChannel1: { value: nyanTex }
};

// --- Shader (Same as previous version) ---
const fragmentShader = `
    uniform vec3 iResolution;
    uniform float iTime;
    uniform vec4 iMouse;
    uniform float iAudioLevel;
    uniform sampler2D iChannel1;

    #define NYAN 
    #define WAVES
    #define BORDER
    #define RAY_STEPS 150
    #define BRIGHTNESS 1.2
    #define GAMMA 1.4
    #define SATURATION .65
    #define detail .001
    #define t (iTime * .35)

    const vec3 origin = vec3(-1., .7, 0.);
    float det = 0.0;
    float edge = 0.0;

    mat2 rot(float a) { return mat2(cos(a), sin(a), -sin(a), cos(a)); }

    vec4 formula(vec4 p) {
        p.xz = abs(p.xz + 1.) - abs(p.xz - 1.) - p.xz;
        p.y -= .25;
        p.xy *= rot(radians(35.));
        p = p * 2. / clamp(dot(p.xyz, p.xyz), .2, 1.);
        return p;
    }

    float de(vec3 pos) {
        #ifdef WAVES
            pos.y += sin(pos.z - t * 6.) * .15;
        #endif
        vec3 tpos = pos;
        tpos.z = abs(3. - mod(tpos.z, 6.));
        vec4 p = vec4(tpos, 1.);
        for (int i = 0; i < 4; i++) { p = formula(p); }
        float fr = (length(max(vec2(0.), p.yz - 1.5)) - 1.) / p.w;
        float ro = max(abs(pos.x + 1.) - .3, pos.y - .35);
        ro = max(ro, -max(abs(pos.x + 1.) - .1, pos.y - .5));
        float pz = abs(.25 - mod(pos.z, .5));
        ro = max(ro, -max(abs(pz) - .2, pos.y - .3));
        ro = max(ro, -max(abs(pz) - .01, -pos.y + 0.32));
        return min(fr, ro);
    }

    vec3 path(float ti) {
        ti *= 1.5;
        return vec3(sin(ti), (1. - sin(ti * 2.)) * .5, -ti * 5.) * .5;
    }

    vec3 getNormal(vec3 p) {
        vec3 e = vec3(0.0, det * 5., 0.0);
        float d1 = de(p - e.yxx), d2 = de(p + e.yxx);
        float d3 = de(p - e.xyx), d4 = de(p + e.xyx);
        float d5 = de(p - e.xxy), d6 = de(p + e.xxy);
        float d = de(p);
        edge = abs(d - 0.5 * (d2 + d1)) + abs(d - 0.5 * (d4 + d3)) + abs(d - 0.5 * (d6 + d5));
        edge = min(1., pow(edge, .55) * 15.0);
        return normalize(vec3(d1 - d2, d3 - d4, d5 - d6));
    }

    vec4 rainbow(vec2 p) {
        float s = sin(p.x * 7.0 + t * 70.0) * 0.08;
        p.y += s; p.y *= 1.1;
        vec4 c;
        if (p.x > 0.0) c = vec4(0.);
        else if (0.0/6.0 < p.y && p.y < 1.0/6.0) c = vec4(255,43,14,255)/255.0;
        else if (1.0/6.0 < p.y && p.y < 2.0/6.0) c = vec4(255,168,6,255)/255.0;
        else if (2.0/6.0 < p.y && p.y < 3.0/6.0) c = vec4(255,244,0,255)/255.0;
        else if (3.0/6.0 < p.y && p.y < 4.0/6.0) c = vec4(51,234,5,255)/255.0;
        else if (4.0/6.0 < p.y && p.y < 5.0/6.0) c = vec4(8,163,255,255)/255.0;
        else if (5.0/6.0 < p.y && p.y < 6.0/6.0) c = vec4(122,85,255,255)/255.0;
        else c = vec4(0.);
        c.a *= .8 - min(.8, abs(p.x * .08));
        c.xyz = mix(c.xyz, vec3(length(c.xyz)), .15);
        return c;
    }

    vec4 nyan(vec2 p) {
        vec2 uv = p * vec2(0.4, 1.0);
        float ns = 3.0;
        float nt = iTime * ns; 
        nt -= mod(nt, 240.0/256.0/6.0); 
        nt = mod(nt, 240.0/256.0);
        float ny = mod(iTime * ns, 1.0); 
        ny -= mod(ny, 0.75); ny *= -0.05;
        vec4 color = texture2D(iChannel1, vec2(uv.x/3.0 + 210.0/256.0 - nt + 0.05, 1. - .5 + uv.y + ny));
        if (uv.x < -0.3 || uv.x > 0.2 || uv.y > 0.3 || uv.y < -0.3) color.a = 0.0;
        return color;
    }

    vec3 raymarch(vec3 from, vec3 dir) {
        edge = 0.; vec3 p; float d = 100., totdist = 0.;
        for (int i = 0; i < RAY_STEPS; i++) {
            if (d > det && totdist < 25.0) {
                p = from + totdist * dir;
                d = de(p);
                det = detail * exp(.13 * totdist);
                totdist += d; 
            }
        }
        p -= (det - d) * dir;
        vec3 norm = getNormal(p);
        vec3 col = (1. - abs(norm)) * max(0., 1. - edge * .8);
        totdist = clamp(totdist, 0., 26.);
        vec3 lDir = dir; lDir.y -= .02;
        
        float sunsize = 7. - (iAudioLevel * 5.); 
        float an = atan(lDir.x, lDir.y) + iTime * 1.5;
        float s = pow(clamp(1.0 - length(lDir.xy) * sunsize - abs(.2 - mod(an, .4)), 0., 1.), .1);
        float sb = pow(clamp(1.0 - length(lDir.xy) * (sunsize - .2) - abs(.2 - mod(an, .4)), 0., 1.), .1);
        float sg = pow(clamp(1.0 - length(lDir.xy) * (sunsize - 4.5) - .5 * abs(.2 - mod(an, .4)), 0., 1.), 3.);
        float y = mix(.45, 1.2, pow(smoothstep(0., 1., .75 - lDir.y), 2.)) * (1. - sb * .5);
        
        vec3 backg = vec3(0.5, 0., 1.) * ((1. - s) * (1. - sg) * y + (1. - sb) * sg * vec3(1., .8, 0.15) * 3.);
        backg += vec3(1., .9, .1) * s;
        backg = max(backg, sg * vec3(1., .9, .5));
        
        col = mix(vec3(1., .9, .3), col, exp(-.004 * totdist * totdist));
        if (totdist > 25.0) col = backg;
        
        col = pow(col, vec3(GAMMA)) * BRIGHTNESS;
        col = mix(vec3(length(col)), col, SATURATION);
        col *= vec3(1., .9, .85);

        #ifdef NYAN
            lDir = dir;
            lDir.yx *= rot(lDir.x);
            vec2 ncatpos = (lDir.xy + vec2(-3. + mod(-t, 6.), -.27));
            vec4 ncat = nyan(ncatpos * 5.0);
            vec4 rain = rainbow(ncatpos * 10.0 + vec2(.8, .5));
            if (totdist > 8.0) col = mix(col, max(vec3(.2), rain.xyz), rain.a * .9);
            if (totdist > 8.0) col = mix(col, max(vec3(.2), ncat.xyz), ncat.a * .9);
        #endif
        return col;
    }

    vec3 move(inout vec3 dir) {
        vec3 go = path(t);
        vec3 adv = path(t + .7);
        vec3 advec = normalize(adv - go);
        float an = (adv.x - go.x) * min(1., abs(adv.z - go.z)) * sign(adv.z - go.z) * .7;
        dir.xy *= rot(an);
        an = advec.y * 1.7;
        dir.yz *= rot(an);
        an = atan(advec.x, advec.z);
        dir.xz *= rot(an);
        return go;
    }

    void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy * 2. - 1.;
        vec2 oriuv = uv;
        uv.y *= iResolution.y / iResolution.x;
        vec2 mouse = (iMouse.xy / iResolution.xy - 0.5) * 3.0;
        if (iMouse.z < 1.0) mouse = vec2(0., -0.05);
        float fov = .9 - max(0., .7 - iTime * .3);
        vec3 dir = normalize(vec3(uv * fov, 1.));
        dir.yz *= rot(mouse.y);
        dir.xz *= rot(mouse.x);
        vec3 from = origin + move(dir);
        vec3 col = raymarch(from, dir);
        #ifdef BORDER
            col = mix(vec3(0.), col, pow(max(0., .95 - length(oriuv * oriuv * oriuv * vec2(1.05, 1.1))), .3));
        #endif
        gl_FragColor = vec4(col, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
    fragmentShader
});

scene.add(new THREE.Mesh(geometry, material));

function resize() {
    const w = window.innerWidth, h = window.innerHeight, pr = renderer.getPixelRatio();
    renderer.setSize(w, h);
    uniforms.iResolution.value.set(w * pr, h * pr, 1);
}
window.addEventListener('resize', resize);
resize();

function animate(time) {
    uniforms.iTime.value = time / 1000;
    if (analyser && audioContext.state === 'running') {
        analyser.getByteFrequencyData(dataArray);
        let avg = 0;
        for (let i = 0; i < dataArray.length; i++) avg += dataArray[i];
        uniforms.iAudioLevel.value = (avg / dataArray.length) / 255;
    } else {
        // Smoothly drop audio level to 0 when paused
        uniforms.iAudioLevel.value *= 0.9;
    }
    renderer.render(scene, new THREE.Camera());
    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
    uniforms.iMouse.value.x = e.clientX;
    uniforms.iMouse.value.y = window.innerHeight - e.clientY;
});
window.addEventListener('mousedown', () => uniforms.iMouse.value.z = 1);
window.addEventListener('mouseup', () => uniforms.iMouse.value.z = 0);

requestAnimationFrame(animate);