/* 
 Adapted from original code
*/

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 iResolution;
uniform float iTime;

// Custom tanh approximation
float tanh_approx(float x) {
    x = clamp(x, -3.0, 3.0);
    float x2 = x * x;
    return x * (27.0 + x2) / (27.0 + 9.0 * x2);
}

vec3 tanh_approx(vec3 x) {
    x = clamp(x, -3.0, 3.0);
    vec3 x2 = x * x;
    return x * (27.0 + x2) / (27.0 + 9.0 * x2);
}

varying vec2 vTexCoord;

void main() {
    // Shadertoy-style UV coordinates (similar to your original)
    // Convert from [0,1] to [-aspect, aspect] x [-1, 1]
    vec2 uv = (vTexCoord - 0.5) * 2.0;
    uv.x *= iResolution.x / iResolution.y;
    
    // Alternative: More similar to your original fragCoord approach
    // vec2 fragCoord = vTexCoord * iResolution.xy;
    // vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    
    float t = iTime;
    vec3 o = vec3(0.0);
    vec3 p, w;
    
    float z = 0.0;
    float d = 0.1;
    
    // Try with fewer iterations first to debug
    for (float i = 0.0; i < 60.0; i++) {
        // Position update - using a different approach
        p = vec3(uv * (1.0 + z * 0.5), z);
        w = p;
        
        // Inner warp loop
        for (float f = 1.0; f <= 5.0; f++) {
            w += sin(w.zxy * f - 9.0 * exp(-d / 0.1) + t) / f;
        }
        
        // Accumulation - simplified version
        float denom = abs(mix(p, w, 0.1).y + 0.01) + 1e-4;
        o += 0.03 / denom * d;
        
        // Marching update - with safety check
        d = 0.3 * (length(cos(p.xz)) - 0.4);
        if (abs(d) < 0.001) break;
        z += d;
    }
    
    // Apply nonlinearity and output
    o = tanh_approx(o * 3.0); // Boost brightness
    
    // Debug: Try different outputs to see what's working
    // gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0); // Test UV coordinates
    // gl_FragColor = vec4(o, 1.0);
    
    // Add some color variation
    vec3 color = vec3(o.r * 1.2, o.g * 0.8, o.b * 1.0);
    gl_FragColor = vec4(color, 1.0);
}