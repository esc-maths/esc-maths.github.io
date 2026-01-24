let N = 100000;
let viewDist, collDist;
let fbWide, fbHigh;
let oldPosVel, newPosVel;
let gridWide, gridHigh, grid;
let collShdr, showGridShdr, updateShdr, drawShdr;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  collDist = 0.8 * sqrt(4.0 / N);
  viewDist = 6.0 * collDist;
  gridWide = gridHigh = int(3.0 / collDist);
  //console.log( collDist, " * ", gridWide, " = ", collDist*gridWide );

  collShdr = createShader(vsCollision, fsCollision);
  showGridShdr = createShader(vsUpdate, fsShowGrid);
  updateShdr = createShader(vsUpdate, fsUpdate);
  drawShdr = createShader(vsDraw, fsDraw);

  fbWide = 1024;
  fbHigh = ceil(N / fbWide);
  let fbOptions = {
    format: FLOAT,
    depth: false, 
    antialias: false, 
    density: 1,
    width: fbWide, 
    height: fbHigh
  };

  oldPosVel = createFramebuffer(fbOptions);
  newPosVel = createFramebuffer(fbOptions);

  let gl = oldPosVel.gl;
  oldPosVel.loadPixels();

  for (let i = 0; i < N; i++) {
    oldPosVel.pixels[4 * i] = random(-1, 1);
    oldPosVel.pixels[4 * i + 1] = random(-1, 1);
    let ang = random(TAU);
    let spd = 0.005 * random(0.5, 1.0);
    oldPosVel.pixels[4 * i + 2] = spd * cos(ang);
    oldPosVel.pixels[4 * i + 3] = spd * sin(ang);
  }
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  oldPosVel.updatePixels();
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

  fbOptions = {
    format: UNSIGNED_BYTE,
    depth: false, 
    antialias: false, 
    density: 1,
    width: gridWide, 
    height: gridHigh
  };
  grid = createFramebuffer(fbOptions);

  // Set initial aspect ratio uniform
  //drawShdr.setUniform('aspectRatio', width/height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Force WebGL viewport update
  const gl = this._renderer.GL;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

  drawShdr.bindShader();
  drawShdr.setUniform('aspectRatio', width / height);
  drawShdr.unbindShader();
}

function draw() {
  let t = frameCount / 60.0;

  grid.begin();
  background(0, 0);
  collShdr.bindShader();
  collShdr.setUniform('data', oldPosVel);
  collShdr.setUniform('outRes', [gridWide, gridHigh]);
  collShdr.bindTextures();
  let gl = grid.gl;
  gl.drawArrays(gl.POINTS, 0, N);
  collShdr.unbindTextures();
  collShdr.unbindShader();
  grid.end();

  background(16);
  //image( grid, -width/2, -height/2, width, height );
  // showGridShdr.bindShader();
  // showGridShdr.setUniform( 'grid', grid );
  // showGridShdr.setUniform( 'outRes', [width, height] );
  // showGridShdr.bindTextures();
  // gl = this._renderer.GL;
  // gl.drawArrays( gl.TRIANGLES, 0, 3 );  // a single full-screen triangle
  // showGridShdr.unbindTextures();
  // showGridShdr.unbindShader();

  newPosVel.begin();
  updateShdr.bindShader();
  updateShdr.setUniform('grid', grid);
  updateShdr.setUniform('dataOld', oldPosVel);
  updateShdr.setUniform('N', N);
  updateShdr.setUniform('viewDist', viewDist);
  updateShdr.setUniform('collDist', collDist);
  updateShdr.setUniform('time', t);
  updateShdr.bindTextures();
  gl = newPosVel.gl;
  gl.drawArrays(gl.TRIANGLES, 0, 3);  // a single full-screen triangle
  updateShdr.unbindTextures();
  updateShdr.unbindShader();
  newPosVel.end();

  scale(min(height, width) / 2.0);

  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);
  gl.enable(gl.BLEND);
  gl.blendEquation(gl.MAX);
  gl.lineWidth(2.0);

  drawShdr.bindShader();
  drawShdr.setUniform('dataOld', oldPosVel);
  drawShdr.setUniform('dataNew', newPosVel);
  drawShdr.setUniform('N', N);
  drawShdr.setUniform('aspectRatio', width/height);
  drawShdr.bindTextures();

  gl.drawArrays(gl.POINTS, 0, N);
  gl.disable(gl.BLEND);

  drawShdr.unbindTextures();
  drawShdr.unbindShader();

  let temp = oldPosVel;
  oldPosVel = newPosVel;
  newPosVel = temp;
}


let vsCollision = `#version 300 es
precision highp float;
precision highp int;
uniform sampler2D data;
uniform vec2 outRes;
out vec4 vColor;

void main() {
	ivec2 res = textureSize( data, 0 );
	int idx = gl_VertexID;
	ivec2 ij = ivec2( idx%res.x, idx/res.x );
	vec2 pos = texelFetch( data, ij, 0 ).xy;
	gl_PointSize = 1.;
  gl_Position = vec4( floor((pos+1.)*0.5*outRes+1.)/outRes*2.-1., 0., 1.);
	vColor = vec4( (idx>>16)&0xff, (idx>>8)&0xff, idx&0xff, 255 ) / 255.0;
}
`;

let fsCollision = `#version 300 es
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main() {
	fragColor = vColor;
}
`;

let fsShowGrid = `#version 300 es
precision highp float;
uniform sampler2D grid;
uniform vec2 outRes;
out vec4 fragColor;
void main() {
  vec2 uv = gl_FragCoord.xy/outRes;
	uv.y = 1. - uv.y;
	fragColor = texelFetch(grid, ivec2(uv*vec2(textureSize(grid,0))), 0);
}
`;



let vsUpdate = `#version 300 es
precision highp float;
precision highp int;
void main() {
	gl_Position = vec4( 4*ivec2(gl_VertexID&1, gl_VertexID&2)-1, 0., 1. );
}
`;

let fsUpdate = `#version 300 es
precision highp float;
precision highp int;
uniform sampler2D grid;
uniform sampler2D dataOld;
uniform int N;
uniform float viewDist;
uniform float collDist;
uniform float time;
out vec4 fragColor;
#define TAU 6.2831853
void main() {
  ivec2 dataRes = textureSize( dataOld, 0 );
  int idx = int(gl_FragCoord.y) * dataRes.x + int(gl_FragCoord.x);
  vec4 posVel = texelFetch( dataOld, ivec2(gl_FragCoord.xy), 0 );
	vec2 pos = posVel.xy;
	vec2 vel = posVel.zw;
	// find and react to any other particles within "viewDist" of this particle
	ivec2 gridRes = textureSize( grid, 0 );
	ivec2 minij = max( ivec2(floor( ((pos-viewDist)*0.5+0.5)*vec2(gridRes) )), 0 );
	ivec2 maxij = min( ivec2(floor( ((pos+viewDist)*0.5+0.5)*vec2(gridRes) )), gridRes-1 );
	for( int j=minij.y; j<=maxij.y; j++ ) {
	  for( int i=minij.x; i<=maxij.x; i++ ) {
			ivec4 other = ivec4( texelFetch( grid, ivec2(i,j), 0 ) * 255.5 );
			if( other.a > 0 ) {
			  int oidx = (other.r << 16) + (other.g << 8) + other.b;
				if( oidx != idx ) {
				  vec4 otherPosVel = texelFetch( dataOld, ivec2( oidx%dataRes.x, oidx/dataRes.x), 0 );
					vec2 v = pos - otherPosVel.xy;
					float d = length(v);
					if( d < viewDist && d > 0.00001 ) {
					  vec2 vnorm = normalize(v);
            float affinity = cos( (float(oidx - idx)/float(N) + 0.18) * TAU ) - 0.1;
            vel -= 0.01 * affinity * (1.0-d/viewDist) * vnorm;
					  if( d < collDist ) {
							vel += 0.05 * (1.0-d/collDist) * vnorm;
						}
					}
				}
			}
		}
	}
	// slight force to push in from the sides
	vel -= sign(pos)*pow(abs(pos),vec2(64.));
	// force field to mix things up a little
	float a = atan( pos.y, pos.x );
	float r = length( pos );
	vel += 0.025 * sin(TAU*2.*sin(0.25*time)*r + 3.*(a-0.2*time)) * vec2( sin(a), -cos(a));
	// clamp the max speed, varies per particle
	float spd = length(vel);
	float maxspeed = 0.0012 * float((idx%64)+193)/256.;
	if( spd > maxspeed ) vel *= maxspeed / spd;
  // update the particle position and then bound it to the viewing area
  pos += vel;
	if( pos.x < -1. ) { pos.x = -2. - pos.x;   vel.x *= -1.; }
	if( pos.x >  1. ) { pos.x =  2. - pos.x;   vel.x *= -1.; }
	if( pos.y < -1. ) { pos.y = -2. - pos.y;   vel.y *= -1.; }
	if( pos.y >  1. ) { pos.y =  2. - pos.y;   vel.y *= -1.; }
	fragColor = vec4( pos, vel );
}
`;


let vsDraw = `#version 300 es
precision highp float;
precision highp int;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
uniform sampler2D dataOld;
uniform sampler2D dataNew;
uniform int N;
uniform float aspectRatio;
out vec4 vColor;

vec3 hsb2rgb( in vec3 c ) {
   vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                            6.0)-3.0)-1.0,  0.0,  1.0 );
   rgb = rgb*rgb*(3.0-2.0*rgb);
   return c.z * mix( vec3(1.0), rgb, c.y);
}

void main() {
	ivec2 res = textureSize( dataOld, 0 );
	int idx = gl_VertexID;
	ivec2 ij = ivec2( idx%res.x, idx/res.x );
	//vec2 p0 = texelFetch( dataOld, ij, 0 ).xy;
	vec2 p1 = texelFetch( dataNew, ij, 0 ).xy;

  // Adjust for aspect ratio
  p1.x *= aspectRatio;

	vec4 p = vec4( p1, 0., 1. ); //vec4( (((gl_VertexID & 1) > 0 ) ? p0 : p1), 0., 1. );
	p = uModelViewMatrix * p;
  gl_Position = uProjectionMatrix * p;

	float u = float(idx)/float(N);
	vec3 c = hsb2rgb( vec3( u, 0.6, 1. ) );

	gl_PointSize = 2.;
	vColor = vec4( c, 1.0 );
}
`;

let fsDraw = `#version 300 es
precision highp float;
in vec4 vColor;
out vec4 fragColor;
void main() {
	fragColor = vColor;
}
`;