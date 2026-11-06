import * as THREE from 'three';
import { Timer } from 'three';

// --------------------------------------------------
// Configuration
// --------------------------------------------------

const canvas = document.querySelector('canvas.webgl');

const characters = '@%#*+=-:.';
const characterBrightness = [1.0, 0.90, 0.78, 0.65, 0.6, 0.55, 0.55, 0.55, 0.5];

const mouseRadius = 140;
const repulsionStrength = 5;
const attraction = 0.015;
const friction = 0.82;

// --------------------------------------------------
// 1. ASCII ART
// --------------------------------------------------

const artwork = String.raw`
                                  -%%%%%%%%%%%##**++==---::....
                                  *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%##*+=--::...
                                  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#*######******##*****+
                                 .#@%**+++**##%%@@@@@@@@@@@@@@@@@@%#*#*******************:
                                 .#@#*+.-*######%%%%#**+++++=+#@@%%#*#####***************+
                                 .#@#*=:=***####%%%%%%%%%%%%%#%@@%%##*####*****************:
                                 .%@#*--+****######%%%%%%%%%%%@@@%##*#####***************+:
                                 :%@##-=+****########%%%%%%%%%@@@%##*####****************+.
                                 :%@#*-===+++**########%%%%%%@@@@%#**#####**************+*.
                                 :@@#*-====++++**###########%%@@@%#*######**************+*
                                 -@@#*--====+++++++*****#####%@@@%#*#######*************++
                                 -@@#*--======++++++++++*****#@@%%#*#####***************++
                                 -@%#*--========+++++++++++++#@@%%#*######**************++
                                 =@%#*--=================+===#@@%%#*##*****************++=
                                 =@%#*---====================#@@%#**#####*#************++=
                                 =@%#*----===================%@@%#*########************++-
                                 +@%%@#*+====================@@@%#*######*************+++-
                                 +@@@@@@@@@%%*==============-@@@%#*###*#**************+++:
                                 +@@@@@@@@@@@@@@@@@@@#+======@@@%#**##****************+++:
                                 *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%***#****************++++.
                                 *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%********************++++.
                                 *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%*******************+++++
                                 *@@@@@@@@@@@@@##@@@@@@@@@@@@@@%#******************+++++=
                                 #@%%@@@@@@@@@@@@@%#-:=*#%%@@@@%#*****************++++++=
                                .#@@@@@@@@@@@@@@@@@@@@@%=::*@@@%#*****************++++++=
                                 +##%%@@@@@@@@@@@@@@@@@@@@@@@@@%*****************++++++=-
                    .*%#*#%##:     .:+####%%%@@@@@@@@@@@@@@@@@@%*****************+++=+==-
                .:*@%##+**++%%#%%*-:.-++===**##%%%@@@@@@@@@@@@@%***************+++=+=+==:
              -*%%%##%*#+*****+#**##%%%#*=======++*##%%%%@@@@@%#************++*++++++-.
           -%@@#%#**+#+##+**=#*+#*+#+##+#%@@#+=========+####%%##*********+++++++++:.
       .=%@@@@##*+*#+##*+#+##***+**+**+#*+#**#%%@#++======-==+*=--=****++*+**+=:                 .:.
     .*@@@@@@@%*##*###**+#***#+*#**#*+#***#=*+*#**%%%%#*+=====::++*****+***-:                    :.
      +%@@@@@@@@@@########**#+#*+**+#*+*#*+#*+##+**+####%@@@#====++*****:                       ::
       -*##%@@@@@@@@@%########*+#+*#*+*#+#*****=#*+*#****%@@@@@@#-=+=:                         :-
         .:=*#%%@@@@@@@@@@%#########+*+##*+**+###******%@@@@@@%#*:......                      ::
              .*##%%@@@@@@@@@@%###*+####+*%%####****#@@@@@@@##**=--=-==++++.               .-=.
                 .-+#%%@@@@@@@@@@@%###*+##*=+##***%@@@@@@%#**+-.:..   ..:-==:         .:--:.
                     .-*#%%@@@@@@@@@@@%##**%%%%%@@@@@@@%#**+: .:=#**==-+---:.:----::::.
                         :+##%%@@@@@@@@@@@@@@@@@@@@@@##**+-. :#@#####***+--=.
                            .-+#%%%@@@@@@@@@@@@@@@%#**+-. .+@@@@@@@@%%%@@@%-
                                .:*##%%@@@@@@@@@%#**+: .=%@@@@@@@@@@@@@@##*=
                                    .-*##%%@@@#**+=. .*@@@@@@@@@@@@@@%#*****.
                                        :=*##**+-.   =@@@@@@@@@@@@@%#****+-.
                                           .::.      +@@@@@@@@@@@#****+-.
                                                      :+#%@@@@@#***+=.
`;

// --------------------------------------------------
// Three.js setup
// --------------------------------------------------

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x020b05, 1);

const timer = new Timer();
timer.connect(document);

// --------------------------------------------------
// Parse ASCII artwork
// --------------------------------------------------

const lines = artwork.replace(/\r/g, '').split('\n');

const artworkRows = lines
    .map(line => line.replace(/\s+$/, ''))
    .filter(line => line.length > 0);

const maxColumns = Math.max(...artworkRows.map(line => line.length));
const rowCount = artworkRows.length;

const particles = [];

let cellSize = 8;
let artworkWidth = 0;
let artworkHeight = 0;

// --------------------------------------------------
// Create character texture atlas
// --------------------------------------------------

function createCharacterTexture() {
    const glyphWidth = 64;
    const glyphHeight = 64;

    const textureCanvas = document.createElement('canvas');

    textureCanvas.width = glyphWidth * characters.length;
    textureCanvas.height = glyphHeight;

    const context = textureCanvas.getContext('2d');

    context.clearRect(
        0,
        0,
        textureCanvas.width,
        textureCanvas.height
    );

    context.font = 'bold 54px monospace';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#ffffff';

    for (let i = 0; i < characters.length; i++) {
        context.fillText(
            characters[i],
            i * glyphWidth + glyphWidth / 2,
            glyphHeight / 2
        );
    }

    const texture = new THREE.CanvasTexture(textureCanvas);

    texture.colorSpace = THREE.NoColorSpace;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    return texture;
}

const characterTexture = createCharacterTexture();

// --------------------------------------------------
// Create particle data
// --------------------------------------------------

function createParticles() {
    particles.length = 0;

    const availableWidth = window.innerWidth * 0.90;
    const availableHeight = window.innerHeight * 0.80;

    cellSize = Math.min(
        availableWidth / maxColumns,
        availableHeight / rowCount
    );
    
    const horizontalSpacing = 0.70;
    artworkWidth = maxColumns * cellSize * horizontalSpacing;
    artworkHeight = rowCount * cellSize;

    const offsetX = (window.innerWidth - artworkWidth) / 2 ;
    const offsetY = (window.innerHeight - artworkHeight) / 2;

    artworkRows.forEach((line, row) => {
        for (let column = 0; column < line.length; column++) {
            const character = line[column];

            const characterIndex = characters.indexOf(character);

            if (characterIndex === -1) continue;

            
            const targetX = offsetX + column * cellSize * horizontalSpacing;
            const targetY = offsetY + row * cellSize;

            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,

                vx: 0,
                vy: 0,

                targetX,
                targetY,

                characterIndex,
                brightness: characterBrightness[characterIndex]
            });
        }
    });
}

// --------------------------------------------------
// Create instanced geometry
// --------------------------------------------------

function createParticleGeometry() {
    const geometry = new THREE.InstancedBufferGeometry();

    // Quad vertices: three components per vertex.
    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute([
            -0.5, -0.5, 0,
             0.5, -0.5, 0,
             0.5,  0.5, 0,
            -0.5,  0.5, 0
        ], 3)
    );

    // Texture coordinates.
    geometry.setAttribute(
        'uv',
        new THREE.Float32BufferAttribute([
            0, 0,
            1, 0,
            1, 1,
            0, 1
        ], 2)
    );

    geometry.setIndex([0, 1, 2, 0, 2, 3]);

    const count = particles.length;

    const positions = new Float32Array(count * 2);
    const characterIndices = new Float32Array(count);
    const brightness = new Float32Array(count);

    particles.forEach((particle, i) => {
        positions[i * 2] = particle.x;
        positions[i * 2 + 1] = particle.y;

        characterIndices[i] = particle.characterIndex;
        brightness[i] = particle.brightness;
    });

    geometry.setAttribute(
        'aPosition',
        new THREE.InstancedBufferAttribute(positions, 2)
    );

    geometry.setAttribute(
        'aCharacter',
        new THREE.InstancedBufferAttribute(characterIndices, 1)
    );

    geometry.setAttribute(
        'aBrightness',
        new THREE.InstancedBufferAttribute(brightness, 1)
    );

    geometry.instanceCount = count;

    return geometry;
}

// --------------------------------------------------
// Shaders
// --------------------------------------------------

const vertexShader = `
    attribute vec2 aPosition;
    attribute float aCharacter;
    attribute float aBrightness;

    uniform vec2 uResolution;
    uniform float uCellSize;

    varying vec2 vUv;
    varying float vCharacter;
    varying float vBrightness;

    void main() {
        vUv = uv;
        vCharacter = aCharacter;
        vBrightness = aBrightness;

        vec2 center = vec2(
            (aPosition.x / uResolution.x) * 2.0 - 1.0,
            1.0 - (aPosition.y / uResolution.y) * 2.0
        );

        vec2 size = vec2(
            uCellSize / uResolution.x,
            uCellSize / uResolution.y
        ) * 2.0;

        vec2 vertexPosition = center + position.xy * size;

        gl_Position = vec4(vertexPosition, 0.0, 1.0);
    }
`;

const fragmentShader = `
    uniform sampler2D uCharacters;

    varying vec2 vUv;
    varying float vCharacter;
    varying float vBrightness;

    void main() {
        float columns = 9.0;

        vec2 atlasUv = vec2(
            (vCharacter + vUv.x) / columns,
            vUv.y
        );

        float glyph = texture2D(uCharacters, atlasUv).a;

        if (glyph < 0.15) discard;

        vec3 greenValue = vec3(0.15, 1.0, 0.35);

        float glow = vBrightness * glyph;

        vec3 color = greenValue * glow;

        gl_FragColor = vec4(color, glyph * glow);
    }
`;

// --------------------------------------------------
// Material and mesh
// --------------------------------------------------

createParticles();

let particleGeometry = createParticleGeometry();

const material = new THREE.ShaderMaterial({
    uniforms: {
        uResolution: {
            value: new THREE.Vector2(
                window.innerWidth,
                window.innerHeight
            )
        },
        uCellSize: {
            value: cellSize
        },
        uCharacters: {
            value: characterTexture
        }
    },

    vertexShader,
    fragmentShader,

    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

const particleMesh = new THREE.Mesh(particleGeometry, material);

particleMesh.frustumCulled = false;

scene.add(particleMesh);

// --------------------------------------------------
// Mouse interaction
// --------------------------------------------------

const mouse = {
    x: -10000,
    y: -10000,
    active: false
};

window.addEventListener('pointermove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
});

window.addEventListener('pointerleave', () => {
    mouse.active = false;
});

// --------------------------------------------------
// Particle interaction
// --------------------------------------------------

function updateParticles() {

    const positions = particleGeometry.attributes.aPosition.array;

    const radiusSquared = mouseRadius * mouseRadius;

    for (let i = 0; i < particles.length; i++) {

        const particle = particles[i];

        // ------------------------------------------
        // Mouse displacement
        // ------------------------------------------

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;

        const distanceSquared = dx * dx + dy * dy;

        // ------------------------------------------
        // Mouse repulsion
        // ------------------------------------------

        if (
            mouse.active &&
            distanceSquared < radiusSquared &&
            distanceSquared > 0
        ) {

            const distance = Math.sqrt(distanceSquared);

            const influence = 1 - distance / mouseRadius;

            const force = influence * repulsionStrength;

            // Push the particle away from the mouse.
            particle.vx -= (dx / distance) * force;
            particle.vy -= (dy / distance) * force;
        }

        // ------------------------------------------
        // Particle movement
        // ------------------------------------------

        // Apply friction to velocity.
        particle.vx *= friction;
        particle.vy *= friction;

        // Update position using velocity.
        particle.x += particle.vx;
        particle.y += particle.vy;

        // ------------------------------------------
        // Return to original position
        // ------------------------------------------

        // Apply attraction directly to position.
        particle.x += (particle.targetX - particle.x) * attraction;
        particle.y += (particle.targetY - particle.y) * attraction;

        // Update GPU position buffer.
        positions[i * 2] = particle.x;
        positions[i * 2 + 1] = particle.y;
    }

    particleGeometry.attributes.aPosition.needsUpdate = true;
}

// --------------------------------------------------
// Resize
// --------------------------------------------------

function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);

    material.uniforms.uResolution.value.set(width, height);

    // Recalculate particle targets and rebuild geometry.
    createParticles();

    const newGeometry = createParticleGeometry();

    particleMesh.geometry.dispose();
    particleMesh.geometry = newGeometry;

    particleGeometry = newGeometry;

    material.uniforms.uCellSize.value = cellSize;
}

window.addEventListener('resize', resize);

// --------------------------------------------------
// Animation loop
// --------------------------------------------------

let accumulator = 0;

const fixedTimeStep = 1 / 60;

function animate() {

    requestAnimationFrame(animate);

    timer.update();

    const delta = Math.min(timer.getDelta(), 0.05);

    accumulator += delta;

    // Run the original particle physics at 60 updates per second.
    while (accumulator >= fixedTimeStep) {

        updateParticles();

        accumulator -= fixedTimeStep;
    }

    renderer.render(scene, camera);
}

// A camera is not needed for this shader-based fullscreen effect.
const camera = new THREE.Camera();

animate();
