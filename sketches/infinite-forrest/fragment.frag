/* 
 Adapted from original code
 https://x.com/XorDev/status/2021248551678849313
 Modified by Juan Carlos Ponce Campuzano
 11/Feb/2026
*/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif

// These are our passed in information from the sketch.js
uniform vec2 iResolution;
uniform float iTime;
//uniform vec2 iMouse;

// Custom tanh approximation since WebGL 1.0 doesn't have tanh()
float tanh_approx(float x) {
    // Simple tanh approximation good enough for visual purposes
    x = clamp(x, -3.0, 3.0);
    float x2 = x * x;
    return x * (27.0 + x2) / (27.0 + 9.0 * x2);
}

// Vector versions for convenience
vec3 tanh_approx(vec3 x) {
    x = clamp(x, -3.0, 3.0);
    vec3 x2 = x * x;
    return x * (27.0 + x2) / (27.0 + 9.0 * x2);
}

varying vec2 vTexCoord;

void main() {
    // Map vTexCoord to normalized device coordinates (NDC) [-1, 1]
    vec2 uv = vTexCoord * 2.0 - 1.0;
    
    // Adjust for aspect ratio
    uv.x *= iResolution.x / iResolution.y;
    
    // ========================
    // Main Shader Code
    // ========================
    vec2 r = iResolution.xy;
    float t = iTime;

    vec3 o = vec3(0.0);
    vec3 p, w;

    float z = 0.0;
    float d = 0.1;

    // Ray marching loop
    for (float i = 0.0; i < 90.0; i++)
    {
        // Position update - using uv from template
        p = z * vec3(uv, 0.5) + 0.5;
        w = p;

        // Inner warp loop
        for (float f = 1.0; f <= 5.0; f++)
        {
            w += sin(w.zxy * f - 9.0 * exp(-d / 0.1) + t) / f;
        }

        // Accumulation
        vec4 k = vec4(0.0, 1.0, 2.0, 3.0) * 0.01;
        float denom = abs(mix(p, w, 0.1).y + k.y) + 1e-4;
        o += 0.03 / denom * d;
        
        // Subtle breathing effect
        p.z += 0.3 * t;
        
        // Depth-dependent glow (commented out as in original)
        // o *= smoothstep(-0.2, 0.8, z);

        // Marching update
        d = 0.3 * (length(cos(p.xz)) - 0.4);
        z += d;
    }

    // Apply tanh approximation
    o = tanh_approx(o);
    
    // Output the final color with full opacity
    gl_FragColor = vec4(o, 1.0);
}