/*

"Da Rasterizer" by TDM: 
https://www.shadertoy.com/view/MsjSzz

This version: Juan Carlos Ponce Campuzano
Website: https://jcponce.github.io
Date: 3/Aug/2025

*/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision highp float;
#endif

// These are our passed in information from the sketch.js
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;

//uniform sampler2D iTexture01;

varying vec2 vTexCoord;

#define LINEAR_ROTATION

#define WEIGHT (3.0 / iResolution.x)
const vec3 RED = vec3(1.0,0.0,0.0);
const vec3 GREEN = vec3(0.0,1.0,0.0);
const vec3 BLUE = vec3(0.0,0.8,1.0);
const vec3 WHITE = vec3(1.0,1.0,0.97);
const vec3 YELLOW = vec3(1.0,1.0,0.0);

// rasterize functions
float line(vec2 p, vec2 p0, vec2 p1, float w) {
    vec2 d = p1 - p0;
    float t = clamp(dot(d,p-p0) / dot(d,d), 0.0,1.0);
    vec2 proj = p0 + d * t;
    float dist = length(p - proj);
    dist = 1.0/dist*WEIGHT*w;
    return min(dist*dist,1.0);
}

float circle(vec2 p, vec2 c, float r, float w) {
    float dist = abs(length(p - c)) + r;
    dist = 1.0/dist*WEIGHT*w;
    return min(dist*dist,1.0);
}

// matrices
mat4 getRotMatrix(vec3 a) {
    vec3 s = sin(a);
    vec3 c = cos(a);    
    mat4 ret;
    ret[0] = vec4(c.y*c.z,c.y*s.z,-s.y,0.0);
    ret[1] = vec4(s.x*s.y*c.z-c.x*s.z,s.x*s.y*s.z+c.x*c.z,s.x*c.y,0.0);
    ret[2] = vec4(c.x*s.y*c.z+s.x*s.z, c.x*s.y*s.z-s.x*c.z,   c.x*c.y,0.0);    
    ret[3] = vec4(0.0,0.0,0.0,1.0);
    return ret;
}
mat4 getPosMatrix(vec3 p) {   
    mat4 ret;
    ret[0] = vec4(1.0,0.0,0.0,p.x);
    ret[1] = vec4(0.0,1.0,0.0,p.y);
    ret[2] = vec4(0.0,0.0,1.0,p.z);   
    ret[3] = vec4(0.0,0.0,0.0,1.0);
    return ret;
}

// utils
vec3 mix3(vec3 a, vec3 b, vec3 c, float t) {
    if(t>0.5) return mix(b,c,t*2.0-1.0);
    else return mix(a,b,t*2.0);
}
vec3 fragment(vec3 p) {
    float t = sin(p.x*0.8+iTime*0.5)*0.5+0.5;
    float fog = min(pow(p.z,3.0)*400.0,1.0);
    return mix3(RED,GREEN,BLUE,t) * fog;
}  

void main() {
    // copy the vTexCoord
    // vTexCoord is a value that goes from 0.0 - 1.0 
    // depending on the pixels location
    // we can use it to access every pixel on the screen
  
    vec2 coord = vTexCoord;

    vec2 uv = ( coord * 2.0 - 1.0 ) * iResolution.xy / iResolution.y;
    uv = uv * (1.0 + pow(length(uv)*0.4,0.5)) * 0.6; // Spherical view

    float line_width = 1.5; 
    float time = iTime * 0.31415;
    vec3 c = vec3(mix(vec3(0.01,0.03,0.1), vec3(0.0), 0.5*pow(length(uv)*0.5,2.0)));
    mat4 cam = getPosMatrix(vec3(0.0,0.0,10.0));
    
    #ifdef LINEAR_ROTATION
      mat4 rot = getRotMatrix(vec3(time,time*0.86,time*0.473));
    #else
      float p = 0.08;
      mat4 rot = getRotMatrix(vec3(time		+sin(time*30.0)*p,
                                 time*0.860	+sin(time*20.0)*p*1.24,
                                 time*0.473	+sin(time*10.0)*p));
    #endif
    
    vec3 instances[18];
    instances[0] = vec3( 0.0, 0.0,-1.0);
    instances[1] = vec3(-1.0, 0.0,-1.0);
    instances[2] = vec3( 1.0, 0.0,-1.0);
    instances[3] = vec3( 0.0, 1.0,-1.0);
    instances[4] = vec3( 0.0,-1.0,-1.0);    
    instances[5] = vec3(-1.0, 0.0, 0.0);
    instances[6] = vec3( 1.0, 0.0, 0.0);
    instances[7] = vec3( 0.0, 1.0, 0.0);
    instances[8] = vec3( 0.0,-1.0, 0.0);        
    instances[9] = vec3(-1.0,-1.0, 0.0);
    instances[10] = vec3( 1.0, 1.0, 0.0);
    instances[11] = vec3(-1.0, 1.0, 0.0);
    instances[12] = vec3( 1.0,-1.0, 0.0);    
    instances[13] = vec3( 0.0, 0.0, 1.0);
    instances[14] = vec3(-1.0, 0.0, 1.0);
    instances[15] = vec3( 1.0, 0.0, 1.0);
    instances[16] = vec3( 0.0, 1.0, 1.0);
    instances[17] = vec3( 0.0,-1.0, 1.0);
    
    // box pipeline
    for(int dip = 0; dip < 18; dip++) {
        
        // input assembly
        vec3 vert[8];
        vert[0] = vec3(-1.0,-1.0, 1.0);
        vert[1] = vec3(-1.0, 1.0, 1.0);    
        vert[2] = vec3( 1.0, 1.0, 1.0);    
        vert[3] = vec3( 1.0,-1.0, 1.0);
        vert[4] = vec3(-1.0,-1.0,-1.0);
        vert[5] = vec3(-1.0, 1.0,-1.0);    
        vert[6] = vec3( 1.0, 1.0,-1.0);    
        vert[7] = vec3( 1.0,-1.0,-1.0);

        // vertex processing        
        mat4 pos = getPosMatrix(instances[dip] * 4.0);
        mat4 mat = pos * rot * cam;

        for(int i = 0; i < 8; i++) {

            // transform
            vert[i] = (vec4(vert[i],1.0) * mat).xyz;

            // perspective
            vert[i].z = 1.0 / vert[i].z;
            vert[i].xy *= vert[i].z;
        }    

        // primitive assembly and rasterize
        float i;
        i  = line(uv,vert[0].xy,vert[1].xy,line_width);
        i += line(uv,vert[1].xy,vert[2].xy,line_width);
        i += line(uv,vert[2].xy,vert[3].xy,line_width);
        i += line(uv,vert[3].xy,vert[0].xy,line_width);
        i += line(uv,vert[4].xy,vert[5].xy,line_width);
        i += line(uv,vert[5].xy,vert[6].xy,line_width);
        i += line(uv,vert[6].xy,vert[7].xy,line_width);
        i += line(uv,vert[7].xy,vert[4].xy,line_width);
        i += line(uv,vert[0].xy,vert[4].xy,line_width);
        i += line(uv,vert[1].xy,vert[5].xy,line_width);
        i += line(uv,vert[2].xy,vert[6].xy,line_width);
        i += line(uv,vert[3].xy,vert[7].xy,line_width);
        c += fragment(vert[0]) * min(i,1.0);
    }
        
    instances[0] = vec3(-1.0, 1.0,-1.0);
    instances[1] = vec3( 1.0, 1.0,-1.0);
    instances[2] = vec3(-1.0,-1.0,-1.0);
    instances[3] = vec3( 1.0,-1.0,-1.0);
    instances[4] = vec3(-1.0, 1.0, 1.0);
    instances[5] = vec3( 1.0, 1.0, 1.0);
    instances[6] = vec3(-1.0,-1.0, 1.0);
    instances[7] = vec3( 1.0,-1.0, 1.0);
    
    // cicle pipeline
    for(int dip = 0; dip < 8; dip++) {
        
        // input assembly
        vec3 vert = vec3(0.0);

        // vertex processing
        mat4 pos = getPosMatrix(instances[dip] * 4.0);
        mat4 mat = pos * rot * cam;

        // transform
        vert = (vec4(vert,1.0) * mat).xyz;

        // perspective
        vert.z = 1.0 / vert.z;
        vert.xy *= vert.z;

        // rasterize
        c += fragment(vert) * circle(uv,vert.xy,-vert.z,line_width);
    }
      
  // gl_FragColor is a built in shader variable, and your .frag file must contain it
  // We are setting the vec3 color into a new vec4, with a transparency of 1 (no opacity)
	gl_FragColor = vec4(c,1.0);
}