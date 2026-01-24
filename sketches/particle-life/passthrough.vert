precision highp float;

attribute vec3 aPosition;
varying vec2 vUv;

void main() {
  vUv = aPosition.xy * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 1.0);
}
