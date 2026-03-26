import * as THREE from 'three/webgpu';
import { pass, mrt, output, normalView, diffuseColor, velocity, add, vec3, vec4, directionToColor, colorToDirection, sample } from 'three/tsl';
import { ssgi } from 'three/addons/tsl/display/SSGINode.js';
import { traa } from 'three/addons/tsl/display/TRAANode.js';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';
import { World, Sphere, Box, BodyType, Ray } from '@perplexdotgg/bounce';

// ── Config ──

const BALL_RADIUS = 0.4;
const FILL_RATIO = 0.3; // fraction of room volume to fill with balls
const PACKING = 0.6; // random sphere packing efficiency
const BOX_HEIGHT = 6;
const BOX_DEPTH = 8;
const WALL_THICKNESS = 0.5;
const CAM_FOV = 45;

function getBoxWidth() {

	const aspect = window.innerWidth / window.innerHeight;
	const vFov = THREE.MathUtils.degToRad( CAM_FOV / 2 );
	// Width that fills the viewport at the front face distance
	// distFromFront = halfH / tan(vFov)
	// halfW = tan(hFov) * dist = tan(vFov) * aspect * dist
	const dist = ( BOX_HEIGHT / 2 ) / Math.tan( vFov );
	return Math.tan( vFov ) * aspect * dist * 2;

}

function getBallCount() {

	const roomVolume = boxSize.w * boxSize.h * boxSize.d;
	const ballVolume = ( 4 / 3 ) * Math.PI * Math.pow( BALL_RADIUS, 3 );
	return Math.floor( roomVolume * FILL_RATIO * PACKING / ballVolume );

}

// ── Three.js ──

let camera, scene, renderer, renderPipeline;
let raycaster, pointer;
let mouseLight;
let glassSphere;
let glassSphereBody;

// ── Physics ──

let world;
let ballCount = 0;
let bodies = []; // physics bodies, indexed same as instances
let ballsMesh = null; // InstancedMesh
let wallMeshes = [];
let boxSize = { w: 8, h: BOX_HEIGHT, d: BOX_DEPTH };

// ── Drag state ──

let mouseRayOrigin = new THREE.Vector3();
let mouseRayDir = new THREE.Vector3();
let mouseActive = false;
let mouseMoving = false;
let mouseStopTimer = 0;
let pointerDown = false;
let activePointers = new Set();
let mouseLightTarget = new THREE.Vector3( 0, BOX_HEIGHT / 2, BOX_DEPTH / 4 );
let mouseRayOriginTarget = new THREE.Vector3();
let mouseRayDirTarget = new THREE.Vector3();
const EASE_SPEED = 8;
const GLASS_RADIUS = 0.8;

// ── Init ──

init();

async function init() {

	// Camera

	camera = new THREE.PerspectiveCamera( CAM_FOV, window.innerWidth / window.innerHeight, 0.1, 100 );

	// Scene

	scene = new THREE.Scene();

	// Renderer

	renderer = new THREE.WebGPURenderer( { antialias: false } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
	renderer.toneMapping = THREE.ACESFilmicToneMapping;
	renderer.toneMappingExposure = 0.35;
	renderer.shadowMap.enabled = true;
	document.body.appendChild( renderer.domElement );

	// Post-processing: SSGI

	renderPipeline = new THREE.RenderPipeline( renderer );

	const scenePass = pass( scene, camera );
	scenePass.setMRT( mrt( {
		output: output,
		diffuseColor: diffuseColor,
		normal: directionToColor( normalView ),
		velocity: velocity,
	} ) );

	const scenePassColor = scenePass.getTextureNode( 'output' );
	const scenePassDiffuse = scenePass.getTextureNode( 'diffuseColor' );
	const scenePassDepth = scenePass.getTextureNode( 'depth' );
	const scenePassNormal = scenePass.getTextureNode( 'normal' );
	const scenePassVelocity = scenePass.getTextureNode( 'velocity' );

	const diffuseTexture = scenePass.getTexture( 'diffuseColor' );
	diffuseTexture.type = THREE.UnsignedByteType;
	const normalTexture = scenePass.getTexture( 'normal' );
	normalTexture.type = THREE.UnsignedByteType;

	const sceneNormal = sample( ( uv ) => {

		return colorToDirection( scenePassNormal.sample( uv ) );

	} );

	const giPass = ssgi( scenePassColor, scenePassDepth, sceneNormal, camera );
	giPass.sliceCount.value = 2;
	giPass.stepCount.value = 8;

	const gi = giPass.rgb;
	const ao = giPass.a;

	const compositePass = vec4(
		add( scenePassColor.rgb.mul( ao ), scenePassDiffuse.rgb.mul( gi ) ),
		scenePassColor.a
	);

	const traaPass = traa( compositePass, scenePassDepth, scenePassVelocity, camera );
	const bloomPass = bloom( traaPass, 0.1, 0.25, 0.0 );
	const combined = vec4( add( traaPass.rgb, bloomPass.rgb ), traaPass.a );
	renderPipeline.outputNode = combined;

	// Lights

	mouseLight = new THREE.PointLight( 0xffffff, 80 );
	mouseLight.position.set( 0, BOX_HEIGHT / 2, BOX_DEPTH / 4 );
	mouseLight.castShadow = true;
	mouseLight.shadow.mapSize.set( 1024, 1024 );
	mouseLight.shadow.radius = 20;
	mouseLight.shadow.bias = 0.01;
	scene.add( mouseLight );

	// Glass sphere

	const glassGeo = new THREE.SphereGeometry( GLASS_RADIUS, 64, 32 );
	const glassMat = new THREE.MeshPhysicalMaterial( {
		color: 0xffffff,
		metalness: 0,
		roughness: 0.5,
		transmission: 1,
		thickness: GLASS_RADIUS * 2,
		ior: 1.5,
		// emissive: 0xffffff,
		// emissiveIntensity: 0.5
		side: THREE.DoubleSide
		
	} );

	glassSphere = new THREE.Mesh( glassGeo, glassMat );
	glassSphere.position.copy( mouseLight.position );
	scene.add( glassSphere );

	// Raycaster

	raycaster = new THREE.Raycaster();
	pointer = new THREE.Vector2();

	// Build scene + physics

	rebuildScene();

	// Events

	renderer.domElement.addEventListener( 'pointerdown', onPointerDown );
	renderer.domElement.addEventListener( 'pointermove', onPointerMove );
	renderer.domElement.addEventListener( 'pointerup', onPointerUp );
	renderer.domElement.addEventListener( 'pointercancel', onPointerUp );
	window.addEventListener( 'resize', onResize );

}

// ── Rebuild ──

function rebuildScene() {

	// Remove old wall meshes
	for ( const mesh of wallMeshes ) {

		scene.remove( mesh );
		mesh.geometry.dispose();

	}

	wallMeshes = [];

	// Remove old ball mesh
	if ( ballsMesh ) {

		scene.remove( ballsMesh );
		ballsMesh.dispose();
		ballsMesh = null;

	}

	bodies = [];

	// Compute box width and ball count from aspect ratio
	boxSize.w = getBoxWidth();
	ballCount = getBallCount();

	// Recreate physics world (destroys all bodies/shapes)
	world = new World( {
		gravity: [ 0, - 9.81, 0 ],
		solveVelocityIterations: 6,
		solvePositionIterations: 2,
		linearDamping: 0.1,
		angularDamping: 0.1,
		restitution: 0.4,
		friction: 0.5,
	} );

	// Update camera
	fitCameraToBox();

	// Create dynamic body for glass sphere
	const glassShape = world.createSphere( { radius: GLASS_RADIUS } );
	glassSphereBody = world.createDynamicBody( {
		shape: glassShape,
		position: [ mouseLight.position.x, mouseLight.position.y, mouseLight.position.z ],
		mass: 5,
		restitution: 0.3,
		friction: 0.2,
	} );

	createBox();
	createBalls();

}

// ── Box container ──

function createBox() {

	const hw = boxSize.w / 2;
	const hh = boxSize.h / 2;
	const hd = boxSize.d / 2;
	const t = WALL_THICKNESS;

	const whiteMaterial = new THREE.MeshPhysicalMaterial( {
		color: 0xeeeeee,
		roughness: 0.7,
		metalness: 0.0,
	} );

	const redMaterial = new THREE.MeshPhysicalMaterial( {
		color: 0xff2222,
		roughness: 0.7,
		metalness: 0.0,
	} );

	const greenMaterial = new THREE.MeshPhysicalMaterial( {
		color: 0x22ff22,
		roughness: 0.7,
		metalness: 0.0,
	} );

	const walls = [
		// floor
		{ size: [ boxSize.w, t, boxSize.d ], pos: [ 0, - t / 2, 0 ], mat: whiteMaterial },
		// ceiling
		{ size: [ boxSize.w, t, boxSize.d ], pos: [ 0, boxSize.h + t / 2, 0 ], mat: whiteMaterial },
		// back
		{ size: [ boxSize.w, boxSize.h, t ], pos: [ 0, hh, - hd - t / 2 ], mat: whiteMaterial },
		// front (transparent, no mesh)
		{ size: [ boxSize.w, boxSize.h, t ], pos: [ 0, hh, hd + t / 2 ], noMesh: true },
		// left
		{ size: [ t, boxSize.h, boxSize.d ], pos: [ - hw - t / 2, hh, 0 ], mat: redMaterial },
		// right
		{ size: [ t, boxSize.h, boxSize.d ], pos: [ hw + t / 2, hh, 0 ], mat: greenMaterial },
	];

	for ( const w of walls ) {

		const shape = world.createBox( { width: w.size[ 0 ], height: w.size[ 1 ], depth: w.size[ 2 ] } );
		world.createStaticBody( { shape, position: w.pos } );

		if ( ! w.noMesh ) {

			const geo = new THREE.BoxGeometry( w.size[ 0 ], w.size[ 1 ], w.size[ 2 ] );
			const mesh = new THREE.Mesh( geo, w.mat );
			mesh.position.set( ...w.pos );
			mesh.receiveShadow = true;
			scene.add( mesh );
			wallMeshes.push( mesh );

		}

	}

}

// ── Balls ──

function createBalls() {

	const sphereGeo = new THREE.SphereGeometry( BALL_RADIUS, 32, 16 );
	const sphereShape = world.createSphere( { radius: BALL_RADIUS } );

	const material = new THREE.MeshPhysicalMaterial( {
		roughness: 0.3,
		metalness: 0.1,
	} );

	ballsMesh = new THREE.InstancedMesh( sphereGeo, material, ballCount );
	ballsMesh.castShadow = true;
	ballsMesh.receiveShadow = true;
	scene.add( ballsMesh );

	const colors = [
		0xff4444, 0x44ff44, 0x4488ff, 0xffaa00, 0xff44ff,
		0x44ffff, 0xffff44, 0xff8844, 0x8844ff, 0x44ff88,
	];

	const color = new THREE.Color();
	const hw = boxSize.w / 2 - BALL_RADIUS - 0.1;
	const hd = boxSize.d / 2 - BALL_RADIUS - 0.1;

	for ( let i = 0; i < ballCount; i ++ ) {

		color.set( colors[ i % colors.length ] );
		ballsMesh.setColorAt( i, color );

		const x = ( Math.random() - 0.5 ) * 2 * hw;
		const y = BALL_RADIUS + Math.random() * ( boxSize.h - BALL_RADIUS * 2 );
		const z = ( Math.random() - 0.5 ) * 2 * hd;

		const body = world.createDynamicBody( {
			shape: sphereShape,
			position: [ x, y, z ],
			mass: 1,
			restitution: 0.5,
			friction: 0.4,
		} );

		bodies.push( body );

	}

}

// ── Drag interaction ──

function onPointerDown( event ) {

	activePointers.add( event.pointerId );

	if ( event.pointerType === 'touch' ) {

		// Two fingers on mobile = spawn balls
		pointerDown = activePointers.size >= 2;

	} else {

		pointerDown = true;

	}

}

function onPointerUp( event ) {

	activePointers.delete( event.pointerId );

	if ( event.pointerType === 'touch' ) {

		pointerDown = activePointers.size >= 2;

	} else {

		pointerDown = false;

	}

}

function respawnBalls() {

	const hw = boxSize.w / 2 - BALL_RADIUS - 0.1;
	const hd = boxSize.d / 2 - BALL_RADIUS - 0.1;
	const count = 5;

	for ( let i = 0; i < count; i ++ ) {

		const body = bodies[ Math.floor( Math.random() * bodies.length ) ];

		body.position.set( [
			( Math.random() - 0.5 ) * 2 * hw,
			boxSize.h - BALL_RADIUS - Math.random() * 1,
			( Math.random() - 0.5 ) * 2 * hd,
		] );
		body.linearVelocity.set( [ 0, 0, 0 ] );
		body.angularVelocity.set( [ 0, 0, 0 ] );
		body.commitChanges();

	}

}

function onPointerMove( event ) {

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	raycaster.setFromCamera( pointer, camera );

	mouseRayOriginTarget.copy( raycaster.ray.origin );
	mouseRayDirTarget.copy( raycaster.ray.direction );
	mouseActive = true;
	mouseMoving = true;
	clearTimeout( mouseStopTimer );
	mouseStopTimer = setTimeout( () => mouseMoving = false, 50 );

	// Set light target on a plane 1/4 into the room
	const centerPlane = new THREE.Plane( new THREE.Vector3( 0, 0, 1 ), - boxSize.d / 4 );
	const hit = new THREE.Vector3();
	if ( raycaster.ray.intersectPlane( centerPlane, hit ) ) {

		mouseLightTarget.copy( hit );

	}

}

// ── Camera fitting ──

function fitCameraToBox() {

	const aspect = window.innerWidth / window.innerHeight;
	const vFov = THREE.MathUtils.degToRad( CAM_FOV / 2 );

	// Distance from the front face to fit the height
	const dist = ( boxSize.h / 2 ) / Math.tan( vFov );

	camera.aspect = aspect;
	camera.position.set( 0, boxSize.h / 2, dist + boxSize.d / 2 );
	camera.lookAt( 0, boxSize.h / 2, 0 );
	camera.updateProjectionMatrix();

}

// ── Resize ──

function onResize() {

	renderer.setSize( window.innerWidth, window.innerHeight );
	rebuildScene();

}

// ── Animate ──

const timer = new THREE.Timer();
const _dummy = new THREE.Object3D();

function animate() {

	timer.update();
	const dt = Math.min( timer.getDelta(), 1 / 30 );

	// Ease mouse ray and light toward targets
	const easeFactor = 1 - Math.exp( - EASE_SPEED * dt );
	mouseRayOrigin.lerp( mouseRayOriginTarget, easeFactor );
	mouseRayDir.lerp( mouseRayDirTarget, easeFactor );
	// Apply spring force to glass sphere toward mouse target
	mouseLightTarget.lerp( mouseLightTarget, easeFactor ); // target already set by pointer
	const gp = glassSphereBody.position;
	const springStiffness = 500;
	const springDamping = 40;
	const gv = glassSphereBody.linearVelocity;
	const gravityCompensation = 9.81 * 5; // mass * gravity
	glassSphereBody.applyLinearForce( {
		x: ( mouseLightTarget.x - gp.x ) * springStiffness - gv.x * springDamping,
		y: ( mouseLightTarget.y - gp.y ) * springStiffness - gv.y * springDamping + gravityCompensation,
		z: ( mouseLightTarget.z - gp.z ) * springStiffness - gv.z * springDamping,
	} );

	// Respawn balls while pointer is held
	if ( pointerDown ) {

		respawnBalls();

	}

	// Push balls near the mouse ray
	if ( mouseMoving ) {

		const pushRadius = 1.5;
		const pushStrength = 5;
		const _closest = new THREE.Vector3();
		const _ballPos = new THREE.Vector3();
		const _pushDir = new THREE.Vector3();

		for ( const body of bodies ) {

			const bp = body.position;
			_ballPos.set( bp.x, bp.y, bp.z );

			// Find closest point on ray to ball center
			const ray = new THREE.Ray( mouseRayOrigin, mouseRayDir );
			ray.closestPointToPoint( _ballPos, _closest );

			const dist = _closest.distanceTo( _ballPos );

			if ( dist < pushRadius ) {

				_pushDir.subVectors( _ballPos, _closest );
				if ( _pushDir.lengthSq() < 0.001 ) _pushDir.set( 0, 1, 0 );
				_pushDir.normalize();

				const strength = pushStrength * ( 1 - dist / pushRadius );
				body.applyLinearImpulse( {
					x: _pushDir.x * strength,
					y: _pushDir.y * strength,
					z: _pushDir.z * strength,
				} );

			}

		}

	}

	// Step physics
	if ( world ) {

		world.advanceTime( 1 / 60, dt );

	}

	// Sync instance matrices

	for ( let i = 0; i < bodies.length; i ++ ) {

		const body = bodies[ i ];
		const p = body.position;
		const q = body.orientation;

		_dummy.position.set( p.x, p.y, p.z );
		_dummy.quaternion.set( q.x, q.y, q.z, q.w );
		_dummy.updateMatrix();

		ballsMesh.setMatrixAt( i, _dummy.matrix );

	}

	ballsMesh.instanceMatrix.needsUpdate = true;

	// Sync glass sphere and light to physics body position
	const gPos = glassSphereBody.position;
	glassSphere.position.set( gPos.x, gPos.y, gPos.z );
	mouseLight.position.set( gPos.x, gPos.y, gPos.z );

	renderPipeline.render();

}