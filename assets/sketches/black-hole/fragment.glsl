/* 

 Original code "Accretion" by @XorDev
 https://www.shadertoy.com/view/WcKXDV
 
 I am just trying to undestand how this works! :)
 
 Juan Carlos Ponce Campuzano
 27/Jul/2025
 https://www.patreon.com/jcponce
 
*/

// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision highp float;
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

varying vec2 vTexCoord;

void main() {
    // Map vTexCoord to normalized device coordinates (NDC) [-1, 1]
    vec2 uv = vTexCoord * 2.0 - 1.0;
    
    // Define a scale factor
    const float scale = 1.0;

    // Adjust for aspect ratio and scale the coordinates
    uv.x *= scale * iResolution.x / iResolution.y;
    uv.y *= scale;
		
		// ========================
    // Configuration
    // ========================
    const int MAX_STEPS = 20;       // Raymarching steps
    const int NOISE_ITERATIONS = 7; // Fractal noise layers
    const float INITIAL_OFFSET = 0.1;
    const float RADIAL_SCALE = 5.0;
    const float DEPTH_ATTENUATION = 0.2;
    
    // ========================
    // Initialize
    // ========================
    float rayDepth = 0.0;
    float stepDistance = 0.0;
		
		vec4 finalColor = vec4(0.0);
		
		// Create camera ray direction
    vec3 rayDirection = normalize(vec3(uv, 1.0));

    // ========================
    // Raymarching Loop
    // ========================
    for (int step = 0; step < MAX_STEPS; step++)
    {
        // Current position along ray
        vec3 position = rayDepth * rayDirection + INITIAL_OFFSET;
        
        // ========================
        // Polar Coordinate Transformation
        // ========================
        float angle = atan(position.y / 0.2, position.x) * 2.0;
        float radius = length(position.xy) - RADIAL_SCALE - rayDepth * DEPTH_ATTENUATION;
        float height = position.z / 3.0;
        position = vec3(angle, height, radius);
        
        // ========================
        // Fractal Noise Displacement
        // ========================
        for (int noiseStep = 1; noiseStep <= NOISE_ITERATIONS; noiseStep++)
        {
            float noiseScale = float(noiseStep);
            vec3 noiseInput = position.yzx * noiseScale + iTime + 0.3 * float(step);
            position += sin(noiseInput) / noiseScale;
        }
        
        // ========================
        // Distance Estimation
        // ========================
        vec3 surfacePattern = 0.4 * cos(position) - 0.4;
        stepDistance = length(vec4(surfacePattern, position.z));
        rayDepth += stepDistance;
        
        // ========================
        // Color Calculation
        // ========================
        float colorPhase = position.x + float(step) * 0.4 + rayDepth;
        vec4 colorPattern = vec4(6.0, 1.0, 9.0, 0.0);
        finalColor += (1.0 + cos(colorPhase + colorPattern)) / stepDistance;
    }

    // Time varying pixel color
    vec3 color = vec3(uv.x, uv.y, 1.0);

    // Output the final color with full opacity
    //gl_FragColor = vec4(color, 1.0);
		
		// ========================
    // Post-processing
    // ========================
    // Apply tanh approximation to each color channel separately
    vec4 processedColor = finalColor * finalColor / 400.0;
    processedColor.r = tanh_approx(processedColor.r);
    processedColor.g = tanh_approx(processedColor.g);
    processedColor.b = tanh_approx(processedColor.b);
    processedColor.a = 1.0; // Ensure full opacity
    
    gl_FragColor = processedColor;
}