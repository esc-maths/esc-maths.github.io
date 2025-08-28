/*
 You can use this as a template to make shaders! Have fun!
 
 Escher infinite bended frame
 Juan Carlos Ponce Campuzano
 28/Aug/2025
 https://www.patreon.com/jcponce
 
 Inspired by Escher's Cubic Space Division (1952)
 https://escherinhetpaleis.nl/en/about-escher/escher-today/cubic-space-division
 
*/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision highp float;
#endif

// These are our passed in information from the sketch.js
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;

#define PI 3.14159265359

varying vec2 vTexCoord;

// 2D rotation function
mat2 rot2D(float a) {
    return mat2(cos(a), -sin(a), sin(a), cos(a));
}

// Box
float sdBox( vec3 p, vec3 b )
{
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
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
    p.z += iTime * 0.3;
  
    vec3 q = p;
		
    q = fract(p) - 0.5;
		
		float verBeam = sdBox(q, vec3(0.03, 0.5, 0.03));
		float horBeam = sdBox(q, vec3(0.5, 0.05, 0.03));
		float zBeam = sdBox(q, vec3(0.03, 0.03, 0.5));
		float centralCube = sdBox(q, vec3(0.15, 0.15, 0.15));
  
    return min( centralCube, min(verBeam, min(horBeam, zBeam)) ); // distance to an object
		//return sdBoxFrame( q, vec3(0.5), 0.01 );
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
    ro.yz *= rot2D(-iMouse.y*6.3/MN);
    rd.yz *= rot2D(-iMouse.y*6.3/MN);
  
    // Horizontal camera rotation
    ro.xz *= rot2D(-iMouse.x*6.3/MN);
    rd.xz *= rot2D(-iMouse.x*6.3/MN);
  
    // Raymarching
  
    for(int i = 0; i < 50; i++){
      vec3 p = ro + rd * t; // position along the ray
			
			p.zy *= rot2D(-0.3);
			p.zx *= rot2D(-0.4);
		
			p.xy *= rot2D(t*0.045);  // rotate ray along z-axis
			
			p.y += sin(t*0.5)*0.35; // wiggle ray along y-axis
  
      float d = map(p);
    
      t += d;
      
      if (d < 0.001 || t > 100.0) break; // "d" early stop if close enough
																				 // "t" early stop if too far
    }
  
    // Coloring
		float transForm = easingFunction(iTime);
    col = palette2(t*0.1 + 0.01) * transForm + palette1(t*0.1 + 0.01) * (1.0 - transForm);
    
      
    // gl_FragColor is a built in shader variable, and 
		// your .frag file must contain it
    // We are setting the vec3 color into a new vec4, 
		// with a transparency of 1 (no opacity)
	  gl_FragColor = vec4(col, 1.0);
}