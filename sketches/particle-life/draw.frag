precision highp float;

uniform sampler2D state;
uniform vec2 resolution;
uniform vec2 canvasSize;
uniform int numParticles;
uniform int numTypes;

varying vec2 vUv;

void main() {
  vec2 uv = floor(vUv * resolution) / resolution;
  int index = int(gl_FragCoord.y) * int(resolution.x)
            + int(gl_FragCoord.x);

  if (index >= numParticles) discard;

  vec4 p = texture2D(state, uv);
  vec2 pos = p.xy * canvasSize;

  vec2 screen = (pos / canvasSize) * 2.0 - 1.0;
  gl_FragColor = vec4(vec3(fract(float(index) / float(numTypes))), 1.0);
}
