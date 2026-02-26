/*

Zoomin in Mandelbrot set
Source: https://www.shadertoy.com/view/lsX3W4

Author: Juan Carlos Ponce Campuzano
Website: https://jcponce.github.io
Date: 26/Feb/2026

*/


// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision highp float;
#endif


// These are our passed in information from the sketch.js
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;

varying vec2 vTexCoord;

float distanceToMandelbrot( in vec2 c )
{
    // iterate
    float di =  1.0;
    vec2 z  = vec2(0.0);
    float m2 = 0.0;
    vec2 dz = vec2(0.0);
    for( int i=0; i<400; i++ )
    {
        if( m2>1024.0 ) { di=0.0; break; }

		// Z' -> 2·Z·Z' + 1
        dz = 2.0*vec2(z.x*dz.x-z.y*dz.y, z.x*dz.y + z.y*dz.x) + vec2(1.0,0.0);
			
        // Z -> Z² + c			
        z = vec2( z.x*z.x - z.y*z.y, 2.0*z.x*z.y ) + c;
			
        m2 = dot(z,z);
    }

    // distance	
	// d(c) = |Z|·log|Z|/|Z'|
	float d = 0.5*sqrt(dot(z,z)/dot(dz,dz))*log(dot(z,z));
    //if( di>0.5 ) d=0.0;
	
    return d;
}




void main() {
    // copy the vTexCoord
    // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
    // we can use it to access every pixel on the screen
  
    vec2 coord = vTexCoord;
    //vec2 fragCoord = vTexCoord;

    float u = coord.x * 2.0 - 1.0;
    float v = coord.y * 2.0 - 1.0;
    const float scale = 0.5;

    // Make sure pixels are square
    u = u / scale * iResolution.x / iResolution.y;
    v = v / scale;

    vec2 p = vec2(u, v);
  
   //vec2 p = (2.0*fragCoord-iResolution.xy)/iResolution.y;

    // animation	
	float tz = 0.5 - 0.5 * cos(0.125 * iTime);
    float zoo = pow( 0.5, 17.0 * tz );
	vec2 c = vec2(-0.05,.6805) + p * zoo;

    // distance to Mandelbrot
    float d = distanceToMandelbrot(c);
    
    // do some soft coloring based on distance
	d = clamp( pow(4.0*d/zoo,0.2), 0.0, 1.0 );
    //d =pow(d,.1);
    //d = 1.0-1.0/(1.0+1000.0*d);
    
    vec3 col = vec3(d);
  

  // gl_FragColor is a built in shader variable, and your .frag file must contain it
  // We are setting the vec3 color into a new vec4, with a transparency of 1 (no opacity)
	gl_FragColor =  vec4(col, 1.0);
}