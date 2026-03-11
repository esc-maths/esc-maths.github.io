// complexLib.js
export const complexLibrary = `
#define complex vec2

// Constants
#define pi 3.14159265358979
#define twopi 6.28318530717958
#define cpi complex(3.14159265358979, 0.0)

#define e  2.71828182845904
#define ce complex(2.71828182845904, 0.0)

#define phi 1.61803398874989
#define cphi complex(1.61803398875, 0.0)

#define invphi -0.6180339887498948482
#define cinvphi complex(-0.6180339887498948482, 0.0)

#define i complex(0.0, 1.0)
#define one complex(1.0, 0.0)
#define minusone complex(-1.0, 0.0)
#define zero complex(0.0, 0.0)

// Polar values
float arg(complex z) {
    return atan(z.y, z.x);
}

float r(float x, float y) { 
    return length(vec2(x,y)); 
}

float theta(float x, float y) {
    return arg(vec2(x,y));
}

// Basic arithmetic
// https://en.wikipedia.org/wiki/c_number#Elementary_operations
complex cadd(vec2 z, vec2 v) { return z + v; }
complex csub(vec2 z, vec2 v) { return z - v; }


complex conjugate(complex z) {
  return complex(z.x, -z.y);
}

complex cmul(complex z, complex v) {
return mat2(z, -z.y, z.x ) * v;
}

complex cdiv(complex z, complex v) {
    if(isinf(v.x) || isinf(v.y)) return zero;
    return cmul(z, conjugate(v))/(v.x*v.x + v.y*v.y);
}

complex re(complex z) {
return complex(z.x, 0.0);
}

complex im(complex z) {
return complex(z.y, 0.0);
}

float modulussquared(complex z){
return dot(z,z);
}

float realmodulus(complex z){
return length(z);
}

complex modulus(complex z){
if(z.y == 0.0){
  return complex(abs(z.x), 0.0);
}
return complex(realmodulus(z), 0.0);
}

complex cabs(complex z) {
return complex(length(z), 0.0);
}

complex carg(complex z) {
return complex(arg(z), 0.0);
}

complex cargi(complex z) {
return complex(0.0, arg(z));
}

//Log base e
complex clog(complex z) {
return complex(log(length(z)), arg(z));
}

complex ln(complex z) {
return clog(z);
}

//Log base b
complex clog(complex z, complex b) {
return cdiv(clog(z),clog(b));
}

complex clen(complex z) {
return complex(length(z), 0.0);
}

//Special case of cpow, e^z
complex cexp(complex z) {
// Computes e^z = e^(x+iy) = e^x (cos(y) + isin(y))
return exp(z.x)*complex(cos(z.y), sin(z.y));
}

//Special case, for efficiency
complex cpow(float r, complex z) {
//Computes r^z = r^(c+di) = r^z r^di = r^z e^log(r)di
return pow(r,z.x) *complex(cos(z.y*log(r)), sin(z.y* log(r)));
}

complex cpow(complex z, complex w) {
// Computes z^w = (|z|^2)^(0.5w.x) * e^(-w.y*arg(z)) * e^(i(w.x*arg(z) + 0.5*w.y*log(|z|^2)))
//if(z.y == 0.0 ) return cpow(z.x, w);
if(z == zero) return zero;
//return cexp(cmul(w,clog(z)));
return pow(dot(z, z), 0.5*w.x) * cexp(complex(-w.y*arg(z), w.x*arg(z) + 0.5*w.y*log(dot(z,z))));
}

complex cfloor(complex z){
return floor(z);
}

complex cceil(complex z){
return ceil(z);
}

// From https://sledit.xyz/guides/#glsl-library/complex#trivial
vec2 csqrt(vec2 z) {
    float r = length(z);
    // r + abs(z.x) is always well-conditioned (no cancellation)
    float w = sqrt(0.5 * (r + abs(z.x)));
    if (w == 0.0) return vec2(0.0);            // z == 0
    float halfInvW = 0.5 / w;
    if (z.x >= 0.0) {
        // Re is the stable component
        return vec2(w, z.y * halfInvW);
    } else {
        // Im is the stable component
        return vec2(abs(z.y) * halfInvW, z.y >= 0.0 ? w : -w);
    }
}

complex mobiousHyperbolic(complex c, float time){
    return cadd(csub(clog(csub(c,complex(1.0,0.0))),clog(cadd(c,complex(1.0,0.0)))),complex(time,0.0));
}

complex mobiousElliptic(complex c, float time){
    return cmul(complex(1.19129,0.0), cadd(csub(clog(csub(c,complex(1.0,0.0))),clog(cadd(c,complex(1.0,0.0)))),cmul(complex(time,0.0),complex(0.0,1.0))));
}

complex mobiousParabolic(complex c, float time){
    return cadd(cdiv(complex(1.0,0.0),c), complex(time, 0.0));
}
    
complex mobiousLoxodromic(complex c, float time){
    return cadd(cmul(cadd(complex(0.3585,0.0),cmul(complex(0.5975,0.0),complex(0.0,1.0))),csub(clog(csub(c,complex(1.0,0.0))),clog(cadd(c,complex(1.0,0.0))))),complex(time,0.0));
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`;