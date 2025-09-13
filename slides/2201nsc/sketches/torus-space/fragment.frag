/*

"RayMarching" 

You can use this shader as a template for ray marching shaders

Based upon Kishimisy's video tutorials: https://youtu.be/khblXafu7iA

Author: Juan Carlos Ponce Campuzano
Website: https://jcponce.github.io
Date: 06/Jan/2024

*/


// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision highp float;
#endif

#define PI 3.14159265359

// These are our passed in information from the sketch.js
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;
uniform bool iView;

//uniform sampler2D iTexture01;

varying vec2 vTexCoord;

// 2D rotation function
mat2 rot2D(float a) {
    return mat2(cos(a), -sin(a), sin(a), cos(a));
}

// Octahedron SDF - https://iquilezles.org/articles/distfunctions/
float sdOctahedron(vec3 p, float s) {
    p = abs(p);
    return (p.x+p.y+p.z-s)*0.57735027;
}

// Sphere
float sdSphere( vec3 p, float s )
{
  return length(p)-s;
}

// Box
float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
}

// Torus
float sdTorus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

//https://iquilezles.org/articles/palettes/
vec3 palette1( float t ) {
    vec3 a = vec3(0.0, 0.5, 0.5);
    vec3 b = vec3(0.0, 0.5, 0.5);
    vec3 c = vec3(0.0, 0.5, 0.333);
    vec3 d = vec3(0.0, 0.5, 0.667);

    return a + b*cos( 6.28318*(c*t+d) );
}

vec3 palette2( float t ) {
    vec3 a = vec3(0.939, 0.328, 0.718);
    vec3 b = vec3(0.659, 0.438, 0.328);
    vec3 c = vec3(0.388, 0.388, 0.296);
    vec3 d = vec3(2.538, 2.478, 0.168);

    return a + b*cos( 6.28318*(c*t+d) );
}

float easingFunction( float t){
		return 0.5 * cos(t * 0.4 + PI) + 0.5;
}


// Scene distance
float map(vec3 p) {
    p.z += iTime * 0.08;
  
    vec3 q = p;
  
    q = fract(p) - 0.5;

    return sdTorus(q, vec2(0.2, 0.05)); // distance to an object
}


void main() {
    // copy the vTexCoord
    // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
    // we can use it to access every pixel on the screen
  
    vec2 coord = vTexCoord;

    vec2 uv = ( coord * 2.0 - 1.0 ) * iResolution.xy / iResolution.y;
  
    vec3 ro = vec3(0.0, 0.0, -3.0); // ray origin
    vec3 rd = normalize(vec3(uv, 1.0)); // ray direction
    vec3 col = vec3(0.0); // final pixel color
    
    float t = 0.0; // total distance travelled
  
    // Updated thanks to Matthias Hurrle from this sketch
		// https://openprocessing.org/sketch/2679978
		float MN = min(iResolution.x,iResolution.y);
    // Horizontal camera rotation
    ro.yz *= rot2D(0.5-iMouse.y*6.3/MN);
    rd.yz *= rot2D(0.5-iMouse.y*6.3/MN);
  
    // Horizontal camera rotation
    ro.xz *= rot2D(-iMouse.x*6.3/MN);
    rd.xz *= rot2D(-iMouse.x*6.3/MN);
  
    // Raymarching
    for(int i = 0; i < 65; i++){
      vec3 p = ro + rd * t; // position align the ray

      p.zy *= rot2D(0.5);
			p.zx *= rot2D(-0.1);
			
			p.xy *= rot2D(t*0.02);  // rotate ray around z-axis
			//p.yz *= rot2D(t*0.03);  
			
			p.y += sin(t*0.3)*0.1; // wiggle ray
      p.z += sin(t*0.6)*0.3; // wiggle ray
      p.x += sin(t*0.2)*0.3; // wiggle ray
  
      float d = map(p);  // current distance to the scene
    
      t += d;			// "march" the ray
      
      if (d < 0.001 || t > 100.0) break; // "d" early stop if close enough
																				 // "t" early stop if too far
			
    }
  
    // Coloring
		//float u = smoothstep(0.0, 1.0, 0.5 + 0.5*sin(iTime*0.5));
		//vec3 p1 = palette1(t*0.1 + 0.01);
		//vec3 p2 = palette2(t*0.1 + 0.01);
		//col = mix(p2, p1, u);
		col = palette1(t*0.1 + 0.01);
      
  // gl_FragColor is a built in shader variable, and your .frag file must contain it
  // We are setting the vec3 color into a new vec4, with a transparency of 1 (no opacity)
	gl_FragColor = vec4(col, 1.0);
}