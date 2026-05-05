import * as THREE from 'three';

// --- Setup Three.js scene with fullscreen quad ---
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const geometry = new THREE.PlaneGeometry(2, 2);

// --- Shader uniforms (matches Shadertoy style) ---
const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector3(window.innerWidth, window.innerHeight, 1) },
    iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },     // .xy = current, .zw = click state
    // We'll emulate iChannel0 and iChannel1 via procedural fallback since we don't load external textures
    // Original shader uses iChannel0 for "responsive sun size" and iChannel1 for Nyan cat sprite.
    // To keep it self-contained and avoid missing textures, I implement dummy fallback that still looks great.
    // Actually we can create small data textures for seamless behaviour, but simpler: modify shader to use 
    // built-in noise / mock channel0 as constant, and for iChannel1 we build a tiny canvas texture with rainbow stripes?
    // For authentic look, I'll generate two canvas textures to simulate the required channels:
    iChannel0: { value: null },
    iChannel1: { value: null }
};

// --- Helper: create a placeholder texture for iChannel0 (sun size modulation)
// The original reads texture(iChannel0, vec2(.6,.2)).x to add slight variation; we'll make a noisy gradient.
const createChannel0Texture = () => {
    const size = 256;
    const data = new Uint8Array(size * size * 4);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const idx = (i * size + j) * 4;
            // simple pseudo-random / noise pattern to give variation in sun size
            const val = (Math.sin(i * 0.05) * Math.cos(j * 0.07) + 1) * 0.5;
            const r = Math.floor(val * 255);
            const g = Math.floor((val * 0.8 + 0.2) * 255);
            const b = Math.floor((val * 0.6) * 255);
            data[idx] = r;
            data[idx + 1] = g;
            data[idx + 2] = b;
            data[idx + 3] = 255;
        }
    }
    const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.needsUpdate = true;
    return tex;
};

// --- Create iChannel1: Nyan cat stripe pattern (rainbow + cat sprite simulation)
// Since the original uses an external cat image, we'll generate a custom texture with rainbow stripes and cat shape silhouette
const createChannel1Texture = () => {
    const width = 512;
    const height = 512;
    const canvasTex = document.createElement('canvas');
    canvasTex.width = width;
    canvasTex.height = height;
    const ctx = canvasTex.getContext('2d');

    // Draw rainbow background stripes (simulate Nyan cat body)
    const stripeColors = [
        '#FF2B0E', '#FFA806', '#FFF400', '#33EA05', '#08A3FF', '#7A55FF'
    ];
    const stripeHeight = height / 6;
    for (let i = 0; i < 6; i++) {
        ctx.fillStyle = stripeColors[i];
        ctx.fillRect(0, i * stripeHeight, width, stripeHeight);
    }
    // Add black outlines / tail region
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, 4);
    ctx.fillRect(0, height - 4, width, 4);
    // Draw a simple cat face silhouette (right side for pop-tart effect)
    ctx.fillStyle = '#222222';
    // cat ears
    ctx.beginPath();
    ctx.moveTo(width * 0.7, height * 0.2);
    ctx.lineTo(width * 0.8, height * 0.05);
    ctx.lineTo(width * 0.85, height * 0.2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(width * 0.85, height * 0.2);
    ctx.lineTo(width * 0.95, height * 0.05);
    ctx.lineTo(width * 0.95, height * 0.2);
    ctx.fill();
    // cat face round
    ctx.fillStyle = '#F4A261';
    ctx.beginPath();
    ctx.ellipse(width * 0.82, height * 0.3, width * 0.12, height * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(width * 0.78, height * 0.28, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width * 0.86, height * 0.28, 4, 0, Math.PI * 2);
    ctx.fill();
    // star / rainbow trail effect
    for (let k = 0; k < 40; k++) {
        ctx.fillStyle = `hsl(${k * 15}, 100%, 60%)`;
        ctx.fillRect(width * 0.1 + k * 8, height * 0.5, 3, 12);
    }

    const texture = new THREE.CanvasTexture(canvasTex);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);
    texture.needsUpdate = true;
    return texture;
};

uniforms.iChannel0.value = createChannel0Texture();
uniforms.iChannel1.value = createChannel1Texture();

// --- Fragment shader: full adaptation of "Fractal Cartoon" by Kali ---
// Converted all features: Amazing Surface formula, edge detection, waves, camera path, Nyan cat, sun & sky.
// Retains original creative spirit.
const fragmentShader = `
      uniform vec3 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      uniform sampler2D iChannel0;
      uniform sampler2D iChannel1;

      #define SHOWONLYEDGES
      #define NYAN 
      #define WAVES
      #define BORDER

      #define RAY_STEPS 150
      #define BRIGHTNESS 1.2
      #define GAMMA 1.4
      #define SATURATION 0.65
      #define detail 0.001

      // 2D rotation
      mat2 rot(float a) {
        return mat2(cos(a), sin(a), -sin(a), cos(a));
      }

      // Amazing Surface fractal formula
      vec4 formula(vec4 p) {
        p.xz = abs(p.xz + 1.0) - abs(p.xz - 1.0) - p.xz;
        p.y -= 0.25;
        p.xy *= rot(radians(35.0));
        p = p * 2.0 / clamp(dot(p.xyz, p.xyz), 0.2, 1.0);
        return p;
      }

      float de(vec3 pos) {
        #ifdef WAVES
          pos.y += sin(pos.z - iTime * 6.0) * 0.15;
        #endif
        float hid = 0.0;
        vec3 tpos = pos;
        tpos.z = abs(3.0 - mod(tpos.z, 6.0));
        vec4 p = vec4(tpos, 1.0);
        for (int i = 0; i < 4; i++) {
          p = formula(p);
        }
        float fr = (length(max(vec2(0.0), p.yz - 1.5)) - 1.0) / p.w;
        float ro = max(abs(pos.x + 1.0) - 0.3, pos.y - 0.35);
        ro = max(ro, -max(abs(pos.x + 1.0) - 0.1, pos.y - 0.5));
        float posz_mod = abs(0.25 - mod(pos.z, 0.5));
        ro = max(ro, -max(abs(posz_mod) - 0.2, pos.y - 0.3));
        ro = max(ro, -max(abs(posz_mod) - 0.01, -pos.y + 0.32));
        float d = min(fr, ro);
        return d;
      }

      float edgeVal = 0.0;
      vec3 calcNormal(vec3 p, float det) {
        vec3 e = vec3(0.0, det * 5.0, 0.0);
        float d1 = de(p - e.yxx);
        float d2 = de(p + e.yxx);
        float d3 = de(p - e.xyx);
        float d4 = de(p + e.xyx);
        float d5 = de(p - e.xxy);
        float d6 = de(p + e.xxy);
        float d = de(p);
        edgeVal = abs(d - 0.5 * (d2 + d1)) + abs(d - 0.5 * (d4 + d3)) + abs(d - 0.5 * (d6 + d5));
        edgeVal = min(1.0, pow(edgeVal, 0.55) * 15.0);
        return normalize(vec3(d1 - d2, d3 - d4, d5 - d6));
      }

      vec3 path(float ti) {
        ti *= 1.5;
        vec3 p = vec3(sin(ti), (1.0 - sin(ti * 2.0)) * 0.5, -ti * 5.0) * 0.5;
        return p;
      }

      // Nyan cat utilities
      vec4 rainbow(vec2 p) {
        float q = max(p.x, -0.1);
        float s = sin(p.x * 7.0 + iTime * 70.0) * 0.08;
        p.y += s;
        p.y *= 1.1;
        vec4 c;
        if (p.x > 0.0) c = vec4(0.0);
        else if (0.0/6.0 < p.y && p.y < 1.0/6.0) c = vec4(255.0/255.0, 43.0/255.0, 14.0/255.0, 1.0);
        else if (1.0/6.0 < p.y && p.y < 2.0/6.0) c = vec4(255.0/255.0, 168.0/255.0, 6.0/255.0, 1.0);
        else if (2.0/6.0 < p.y && p.y < 3.0/6.0) c = vec4(255.0/255.0, 244.0/255.0, 0.0/255.0, 1.0);
        else if (3.0/6.0 < p.y && p.y < 4.0/6.0) c = vec4(51.0/255.0, 234.0/255.0, 5.0/255.0, 1.0);
        else if (4.0/6.0 < p.y && p.y < 5.0/6.0) c = vec4(8.0/255.0, 163.0/255.0, 255.0/255.0, 1.0);
        else if (5.0/6.0 < p.y && p.y < 6.0/6.0) c = vec4(122.0/255.0, 85.0/255.0, 255.0/255.0, 1.0);
        else if (abs(p.y) - 0.05 < 0.0001) c = vec4(0.0);
        else if (abs(p.y - 1.0) - 0.05 < 0.0001) c = vec4(0.0);
        else c = vec4(0.0);
        c.a *= 0.8 - min(0.8, abs(p.x * 0.08));
        c.xyz = mix(c.xyz, vec3(length(c.xyz)), 0.15);
        return c;
      }

      vec4 nyanSprite(vec2 p) {
        vec2 uv = p * vec2(0.4, 1.0);
        float ns = 3.0;
        float nt = iTime * ns;
        nt -= mod(nt, 240.0/256.0/6.0);
        nt = mod(nt, 240.0/256.0);
        float ny = mod(iTime * ns, 1.0);
        ny -= mod(ny, 0.75);
        ny *= -0.05;
        vec2 sampleCoord = vec2(uv.x / 3.0 + 210.0/256.0 - nt + 0.05, 1.0 - 0.5 + uv.y + ny);
        vec4 color = texture(iChannel1, sampleCoord);
        if (uv.x < -0.3) color.a = 0.0;
        if (uv.x > 0.2) color.a = 0.0;
        if (uv.y > 0.3) color.a = 0.0;
        if (uv.y < -0.3) color.a = 0.0;
        return color;
      }

      vec3 raymarch(vec3 from, vec3 dir) {
        edgeVal = 0.0;
        float d = 100.0;
        float totdist = 0.0;
        float det_local = detail;
        vec3 p;
        for (int i = 0; i < RAY_STEPS; i++) {
          if (d > det_local && totdist < 25.0) {
            p = from + totdist * dir;
            d = de(p);
            det_local = detail * exp(0.13 * totdist);
            totdist += d;
          }
        }
        vec3 col = vec3(0.0);
        p -= (det_local - d) * dir;
        vec3 norm = calcNormal(p, det_local);
        #ifdef SHOWONLYEDGES
          col = 1.0 - vec3(edgeVal);
        #else
          col = (1.0 - abs(norm)) * max(0.0, 1.0 - edgeVal * 0.8);
        #endif
        
        // sky & sun
        vec3 localDir = dir;
        localDir.y -= 0.02;
        float sunsize = 7.0 - max(0.0, texture(iChannel0, vec2(0.6, 0.2)).x) * 5.0;
        float an = atan(localDir.x, localDir.y) + iTime * 1.5;
        float s = pow(clamp(1.0 - length(localDir.xy) * sunsize - abs(0.2 - mod(an, 0.4)), 0.0, 1.0), 0.1);
        float sb = pow(clamp(1.0 - length(localDir.xy) * (sunsize - 0.2) - abs(0.2 - mod(an, 0.4)), 0.0, 1.0), 0.1);
        float sg = pow(clamp(1.0 - length(localDir.xy) * (sunsize - 4.5) - 0.5 * abs(0.2 - mod(an, 0.4)), 0.0, 1.0), 3.0);
        float y = mix(0.45, 1.2, pow(smoothstep(0.0, 1.0, 0.75 - localDir.y), 2.0)) * (1.0 - sb * 0.5);
        
        vec3 backg = vec3(0.5, 0.0, 1.0) * ((1.0 - s) * (1.0 - sg) * y + (1.0 - sb) * sg * vec3(1.0, 0.8, 0.15) * 3.0);
        backg += vec3(1.0, 0.9, 0.1) * s;
        backg = max(backg, sg * vec3(1.0, 0.9, 0.5));
        
        col = mix(vec3(1.0, 0.9, 0.3), col, exp(-0.004 * totdist * totdist));
        if (totdist > 25.0) col = backg;
        col = pow(col, vec3(GAMMA)) * BRIGHTNESS;
        col = mix(vec3(length(col)), col, SATURATION);
        
        #ifdef SHOWONLYEDGES
          col = 1.0 - vec3(length(col));
        #else
          col *= vec3(1.0, 0.9, 0.85);
          #ifdef NYAN
            vec2 dirCopy = dir.xy;
            dirCopy.yx *= rot(dir.x);
            vec2 ncatpos = (dirCopy.xy + vec2(-3.0 + mod(-iTime, 6.0), -0.27));
            vec4 ncat = nyanSprite(ncatpos * 5.0);
            vec4 rain = rainbow(ncatpos * 10.0 + vec2(0.8, 0.5));
            if (totdist > 8.0) col = mix(col, max(vec3(0.2), rain.xyz), rain.a * 0.9);
            if (totdist > 8.0) col = mix(col, max(vec3(0.2), ncat.xyz), ncat.a * 0.9);
          #endif
        #endif
        return col;
      }

      vec3 moveCamera(inout vec3 dir) {
        vec3 go = path(iTime);
        vec3 adv = path(iTime + 0.7);
        float hd = de(adv);
        vec3 advec = normalize(adv - go);
        float an = adv.x - go.x;
        an *= min(1.0, abs(adv.z - go.z)) * sign(adv.z - go.z) * 0.7;
        dir.xy *= mat2(cos(an), sin(an), -sin(an), cos(an));
        an = advec.y * 1.7;
        dir.yz *= mat2(cos(an), sin(an), -sin(an), cos(an));
        an = atan(advec.x, advec.z);
        dir.xz *= mat2(cos(an), sin(an), -sin(an), cos(an));
        return go;
      }

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = fragCoord.xy / iResolution.xy * 2.0 - 1.0;
        vec2 oriuv = uv;
        uv.y *= iResolution.y / iResolution.x;
        vec2 mouse = (iMouse.xy / iResolution.xy - 0.5) * 3.0;
        if (iMouse.z < 0.5) mouse = vec2(0.0, -0.05);
        float fov = 0.9 - max(0.0, 0.7 - iTime * 0.3);
        vec3 dir = normalize(vec3(uv * fov, 1.0));
        dir.yz *= rot(mouse.y);
        dir.xz *= rot(mouse.x);
        vec3 from = vec3(-1.0, 0.7, 0.0) + moveCamera(dir);
        vec3 color = raymarch(from, dir);
        #ifdef BORDER
          float vignette = max(0.0, 0.95 - length(oriuv * oriuv * oriuv * vec2(1.05, 1.1)));
          color = mix(vec3(0.0), color, pow(vignette, 0.3));
        #endif
        fragColor = vec4(color, 1.0);
      }

      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        mainImage(gl_FragColor, fragCoord);
      }
    `;

const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
    fragmentShader: fragmentShader,
    depthWrite: false,
    depthTest: false
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// --- Mouse tracking for iMouse uniform ---
const mouseState = { x: 0, y: 0, down: false };
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width;
    const normY = 1.0 - (e.clientY - rect.top) / rect.height;
    mouseState.x = normX;
    mouseState.y = normY;
    uniforms.iMouse.value.x = normX * iResolution.x;
    uniforms.iMouse.value.y = normY * iResolution.y;
});
canvas.addEventListener('mousedown', () => {
    mouseState.down = true;
    uniforms.iMouse.value.z = 1.0;
});
window.addEventListener('mouseup', () => {
    mouseState.down = false;
    uniforms.iMouse.value.z = 0.0;
});
// touch events for mobile
canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length) {
        const rect = canvas.getBoundingClientRect();
        const normX = (e.touches[0].clientX - rect.left) / rect.width;
        const normY = 1.0 - (e.touches[0].clientY - rect.top) / rect.height;
        uniforms.iMouse.value.x = normX * iResolution.x;
        uniforms.iMouse.value.y = normY * iResolution.y;
        uniforms.iMouse.value.z = 1.0;
    }
});
canvas.addEventListener('touchend', () => {
    uniforms.iMouse.value.z = 0.0;
});

let iResolution = uniforms.iResolution.value;
function updateResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = renderer.getPixelRatio();
    uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio, 1);
    renderer.setSize(width, height);
}
window.addEventListener('resize', () => {
    updateResolution();
});
updateResolution();

// Animation loop
let clock = new THREE.Clock();
function animate() {
    uniforms.iTime.value = performance.now() / 3000.0; // high precision time
    // update mouse values continuously if dragging for smoothness
    if (mouseState.down === false && uniforms.iMouse.value.z > 0.5) {
        uniforms.iMouse.value.z = 0.0;
    }
    renderer.render(scene, new THREE.Camera());
    requestAnimationFrame(animate);
}

animate();
// small style: ensure canvas fills without scroll
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';