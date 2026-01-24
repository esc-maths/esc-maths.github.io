precision highp float;

uniform sampler2D state;
uniform vec2 resolution;
uniform vec2 canvasSize;
uniform int numParticles;
uniform int numTypes;

uniform float forces[36];
uniform float minDistances[36];
uniform float radii[36];

varying vec2 vUv;

const float K = 0.05;
const float friction = 0.85;

void main() {
  vec2 uv = floor(vUv * resolution) / resolution;
  vec4 self = texture2D(state, uv);

  vec2 pos = self.xy * canvasSize;
  vec2 vel = (self.zw - 0.5) * 2.0;

  vec2 totalForce = vec2(0.0);

  int index = int(gl_FragCoord.y) * int(resolution.x)
            + int(gl_FragCoord.x);

  if (index < numParticles) {
    int type = index % numTypes;

    for (int i = 0; i < 1000; i++) {
      if (i >= numParticles || i == index) break;

      vec2 uv2 = vec2(
        float(i % int(resolution.x)),
        float(i / int(resolution.x))
      ) / resolution;

      vec4 other = texture2D(state, uv2);
      vec2 p2 = other.xy * canvasSize;

      vec2 d = p2 - pos;

      if (d.x > 0.5 * canvasSize.x) d.x -= canvasSize.x;
      if (d.x < -0.5 * canvasSize.x) d.x += canvasSize.x;
      if (d.y > 0.5 * canvasSize.y) d.y -= canvasSize.y;
      if (d.y < -0.5 * canvasSize.y) d.y += canvasSize.y;

      float dist = length(d);
      vec2 dir = normalize(d + 1e-6);

      int t2 = i % numTypes;
      int idx = type * numTypes + t2;

      if (dist < minDistances[idx]) {
        totalForce += dir * (-3.0 * abs(forces[idx])) *
                      (1.0 - dist / minDistances[idx]) * K;
      }

      if (dist < radii[idx]) {
        totalForce += dir * forces[idx] *
                      (1.0 - dist / radii[idx]) * K;
      }
    }
  }

  vel += totalForce;
  pos += vel;

  pos = mod(pos + canvasSize, canvasSize);
  vel *= friction;

  gl_FragColor = vec4(
    pos / canvasSize,
    vel * 0.5 + 0.5
  );
}
