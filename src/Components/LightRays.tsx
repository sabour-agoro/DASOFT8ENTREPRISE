import { useRef, useEffect } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';

export type RaysOrigin = 'top-center' | 'top-left' | 'top-right' | 'right' | 'left' | 'bottom-center' | 'bottom-right' | 'bottom-left';

interface LightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  followMouse?: boolean;
  mouseInfluence?: number;
  className?: string;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const getAnchorAndDir = (origin: RaysOrigin, w: number, h: number): { anchor: [number, number]; dir: [number, number] } => {
  const outside = 0.2;
  switch (origin) {
    case 'top-left': return { anchor: [0, -outside * h], dir: [0, 1] };
    case 'top-right': return { anchor: [w, -outside * h], dir: [0, 1] };
    case 'left': return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case 'right': return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case 'bottom-left': return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-center': return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-right': return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default: return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = '#ffffff',
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 2,
  pulsating = false,
  followMouse = true,
  mouseInfluence = 0.1,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const program = new Program(gl, {
      vertex: `attribute vec2 position; varying vec2 vUv; void main() { vUv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }`,
      fragment: `precision highp float;
        uniform float iTime; uniform vec2 iResolution; uniform vec2 rayPos; uniform vec2 rayDir;
        uniform vec3 raysColor; uniform float raysSpeed; uniform float lightSpread;
        uniform float rayLength; uniform float pulsating; uniform vec2 mousePos; uniform float mouseInfluence;
        varying vec2 vUv;

        float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
          vec2 sourceToCoord = coord - raySource;
          float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
          float spreadFactor = pow(max(cosAngle, 0.0), 1.0 / max(lightSpread, 0.001));
          float dist = length(sourceToCoord);
          float falloff = clamp((iResolution.x * rayLength - dist) / (iResolution.x * rayLength), 0.0, 1.0);
          float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
          return falloff * spreadFactor * pulse * (0.5 + 0.5 * sin(cosAngle * seedA + iTime * speed));
        }

        void main() {
          vec2 coord = gl_FragCoord.xy;
          vec2 finalDir = normalize(mix(rayDir, normalize(mousePos * iResolution.xy - rayPos), mouseInfluence));
          float s = rayStrength(rayPos, finalDir, coord, 36.22, 21.11, raysSpeed);
          gl_FragColor = vec4(raysColor * s, s * 0.5);
        }`,
      uniforms: {
        iTime: { value: 0 }, iResolution: { value: [0, 0] }, rayPos: { value: [0, 0] },
        rayDir: { value: [0, 0] }, raysColor: { value: hexToRgb(raysColor) },
        raysSpeed: { value: raysSpeed }, lightSpread: { value: lightSpread },
        rayLength: { value: rayLength }, pulsating: { value: pulsating ? 1.0 : 0.0 },
        mousePos: { value: [0.5, 0.5] }, mouseInfluence: { value: mouseInfluence }
      }
    });

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.iResolution.value = [w * renderer.dpr, h * renderer.dpr];
      const { anchor, dir } = getAnchorAndDir(raysOrigin, w * renderer.dpr, h * renderer.dpr);
      program.uniforms.rayPos.value = anchor;
      program.uniforms.rayDir.value = dir;
    };

    const loop = (t: number) => {
      program.uniforms.iTime.value = t * 0.001;
      if (followMouse) {
        smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * 0.08;
        smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * 0.08;
        program.uniforms.mousePos.value = [smoothMouseRef.current.x, 1 - smoothMouseRef.current.y];
      }
      renderer.render({ scene: mesh });
      animationIdRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    animationIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationIdRef.current!);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
    };
  }, [raysOrigin, raysColor, raysSpeed, lightSpread, followMouse, pulsating, rayLength, mouseInfluence]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    if (followMouse) window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [followMouse]);

  return <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`} />;
};

export default LightRays;