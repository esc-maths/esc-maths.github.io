#ifdef GL_ES
precision highp float;
#endif

uniform vec2 iResolution;
uniform vec2 iMouse; 
uniform float iTime;

varying vec2 vTexCoord;

#define R           iResolution
#define T           iTime
#define PI          3.14159265359
#define PI2         6.28318530718
#define MAX_DIST    20.00
#define MIN_DIST    0.001
#define SCALE       0.7500

float hash21(vec2 p){ return fract(sin(dot(p,vec2(26.34,45.32)))*4324.23); }
mat2 rot(float a){ return mat2(cos(a),sin(a),-sin(a),cos(a)); }

vec3 hit, hitP1, sid;
float speed, sdir, hitD, chx, checker;
mat2 t90;

float torus( vec3 p, vec2 t ) {
  vec2 q = vec2(length(p.xy)-t.x,p.z);
  return length(q)-t.y;
}

float truchet(vec3 p,vec3 x, vec2 r) {
    return min(torus(p-x,r),torus(p+x,r));
}

const float size = 1.333333; // 1./0.75
const float hlf = 0.666666;
const float shorten = 1.26;   

vec3 drep(inout vec3 p) {
    vec3 id_val = floor((p+hlf)/size);
    p = mod(p+hlf,size)-hlf;
    return id_val;
}

vec2 map(vec3 q3){
    vec2 res = vec2(100.,0.);
    float k = 5.0/dot(q3,q3); 
    q3 *= k;
    q3.z += speed;

    vec3 qm = q3;
    vec3 qd = q3+hlf;
    qd.xz *= t90;
    vec3 qid = drep(qm);
    vec3 did = drep(qd);
    
    float ht = hash21(qid.xy+qid.z);
    float hy = hash21(did.xz+did.y);
    
    float chk1 = mod(qid.y + qid.x,2.) * 2. - 1.;
    float chk2 = mod(did.y + did.x,2.) * 2. - 1.;

    if(ht > 0.5) qm.x *= -1.;
    if(hy > 0.5) qd.x *= -1.;

    float t = truchet(qm,vec3(hlf,hlf,0.0),vec2(hlf,0.115));
    if(t < res.x) {
        sid = qid; hit = qm; chx = chk1;
        sdir = ht > 0.5 ? -1. : 1.;
        res = vec2(t,2.);
    }

    float d = truchet(qd,vec3(hlf,hlf,0.0),vec2(hlf,0.200));
    if(d < res.x) {
        sid = did; hit = qd; chx = chk2;
        sdir = hy > 0.5 ? -1. : 1.;
        res = vec2(d,1.);
    }

    res.x = res.x * (1.0/k) / shorten;
    return res;
}

vec3 normal(vec3 p, float t) {
    float e = MIN_DIST*t;
    vec2 h = vec2(1,-1)*0.5773;
    return normalize(h.xyy * map(p+h.xyy*e).x + h.yyx * map(p+h.yyx*e).x + h.yxy * map(p+h.yxy*e).x + h.xxx * map(p+h.xxx*e).x);
}

vec3 hue(float t) { 
    return 0.375 + 0.375*cos(PI2*t*(vec3(0.985,0.98,0.95)+vec3(0.220,0.961,0.875))); 
}

float gear(vec2 p, float radius) {
    float sp = floor(radius*PI2)*2.;
    float gs = length(p.xy)-radius;
    float at = atan(p.y,p.x);
    float gw = abs(sin(at*sp)*0.15);
    gs += smoothstep(0.05, 0.5, gw);
    return max(gs, -(length(p.xy)-(radius*0.45)));
}

vec3 lpos = vec3(-0.666,0.666,3.85);

vec4 render(inout vec3 ro, inout vec3 rd, inout vec3 ref, bool isLast, inout float d) {
    vec3 C = vec3(0);
    float m = 0.0;
    
    for(int i=0; i<150; i++) {
        vec2 ray = map(ro + rd * d);
        if(abs(ray.x) < MIN_DIST*d || d > MAX_DIST) break;
        d += (i < 64) ? ray.x*0.35 : ray.x;
        m = ray.y;
    } 
    
    hitP1 = hit; hitD = sdir; checker = chx;
    
    if(d < MAX_DIST) {
        vec3 p = ro + rd * d;
        vec3 n = normal(p,d);
        vec3 l = normalize(lpos-p);
        
        float diff = clamp(dot(n,l), 0.0, 1.0) + clamp(dot(n,vec3(0.0,-1.0,0.0)), 0.0, 1.0);
        float fresnel = mix(0.01, 0.7, pow(clamp(1.0+dot(rd, n), 0.0, 1.0), 5.0));

        float shdw = 1.0;
        float t_sh = 0.01;
        for(int i=0; i<25; i++){
            float h_sd = map(p + l*t_sh).x;
            if(h_sd < MIN_DIST) { shdw = 0.0; break; }
            shdw = min(shdw, 16.0*h_sd/t_sh);
            t_sh += h_sd;
        }
        diff = mix(diff, diff*shdw, 0.65);
        float spec = 0.5 * pow(max(dot(normalize(p-ro), reflect(normalize(lpos), n)), 0.0), (m==2.0?24.0:64.0));

        vec3 h_col = vec3(0.05);
        if(m > 0.0) {
            vec3 hp = hitP1 * hitD;
            vec2 dists = vec2(length(hp-hlf), length(hp+hlf));
            vec3 g3 = dists.x < dists.y ? vec3(hp-hlf) : vec3(hp+hlf);
            vec2 uv = vec2(atan(g3.y,g3.x)/PI2, atan(hp.z, length(g3.yx)-hlf)/PI2);
            if(hitD < 1.0 != checker > 0.0) uv.y *= -1.0;

            if(m == 2.0) {
                vec2 grid = fract(uv*vec2(28.0,6.0))-0.5;
                if(hash21(floor(uv*vec2(28.0,6.0)))<0.5) grid.x *= -1.0;
                vec2 d2 = vec2(length(grid-0.5), length(grid+0.5));
                float circle = length(d2.x<d2.y?grid-0.5:grid+0.5)-0.5; 
                float center = smoothstep(0.0175, 0.0125, abs(abs(abs(circle)-0.2)-0.1)-0.025);
                h_col = mix(vec3(0.0), vec3(0.6), center);
                ref = vec3(clamp(1.0-center, 0.0, 1.0))-fresnel;
            } else {
                vec2 sc = vec2(28.0,10.0);
                vec2 grid = fract(uv*sc)-0.5;
                vec2 cid = floor(uv*sc);
                float hs = hash21(cid);
                if(hs < 0.5) grid.x *= -1.0;
                
                vec2 d2 = vec2(length(grid-0.5), length(grid+0.5));
                float circle = length(d2.x<d2.y?grid-0.5:grid+0.5)-0.5;
                float center = smoothstep(0.0175, 0.0125, abs(circle)-0.15);
                h_col = mix(hue(length(p.zy*0.3)*3.0), hue(length(p.zx*0.5)*2.0), center);
                
                // Fixed gear calculation - matching original shader
                float chk = mod(cid.y + cid.x, 2.0) * 2.0 - 1.0;
                vec2 arc = grid - sign(grid.x + grid.y + 0.001) * 0.5;
                float angle2 = atan(arc.x, arc.y);
                float width = 0.2;
                float rad = length(arc);
                float tm = T * 0.25;
                
                // Fix the tuv calculation to match original
                vec2 tuv = vec2(
                    fract(chk * angle2 / 1.57 + tm),
                    (rad - (0.5 - width)) / (2.0 * width) * 2.0
                );
                tuv.y -= 0.5;
                tuv.xy *= vec2(2.0, 0.5);
                tuv.x = mod(tuv.x + 0.5, 1.0) - 0.5;
                
                // Gear transformation
                vec2 gvec = tuv.xy - vec2(0.0, 0.25);
                float dir = (chk > 0.0 != hs > 0.5) ? -1.0 : 1.0;
                gvec *= rot(T * 1.4 * dir);
                
                // Apply gear
                float ddt = gear(gvec, 0.45);
                ddt = smoothstep(-0.0125, 0.0125, min(ddt, center));
                h_col = mix(h_col, vec3(0.0), ddt);
                
                ref = vec3(clamp(1.0-center, 0.0, 1.0))-fresnel;
            }
        }
        
        C = diff * h_col + spec;
        if(isLast) C = mix(vec3(0.001), C, exp(-0.05*d*d*d));
        
        ro = p + n * 0.002;
        rd = reflect(rd, n);
    } else {
        C = vec3(0.001);
    }
    return vec4(C, 0.0);
}

void main() {
    t90 = rot(1.5707);
    speed = iTime * 0.225;
    
    vec2 uv = (vTexCoord * 2.0 - 1.0);
    uv.x *= iResolution.x / iResolution.y;
    
    vec3 ro = vec3(0.0, 0.0, 3.5);
    vec3 rd = normalize(vec3(uv, -1.0));

    float MN = min(iResolution.x,iResolution.y);
    
    float mx = (iMouse.x / MN);
    float my = (iMouse.y / MN);
    mat2 rx = rot(-my);
    mat2 ry = rot(-mx);
    
    ro.yz *= rx;
    rd.yz *= rx;
    ro.xz *= ry;
    rd.xz *= ry;
    
    vec3 col = vec3(0.0);
    vec3 fil = vec3(1.0);
    float d = 0.0;
    
    vec3 ref1 = vec3(0.0);
    vec4 p1 = render(ro, rd, ref1, false, d);
    col += p1.rgb * fil;
    fil *= ref1;
    float w = exp(-0.145 * d * d * d);
    
    vec3 ref2 = vec3(0.0);
    vec4 p2 = render(ro, rd, ref2, true, d);
    col += p2.rgb * fil;
    
    col = mix(col, vec3(0.001), 1.0 - w);
    gl_FragColor = vec4(pow(clamp(col, 0.0, 1.0), vec3(0.4545)), 1.0);
}