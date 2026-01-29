import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { semantic } from '../theme/colors';

/** Gera número determinístico a partir de uma string (hash simples) */
function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** PRNG determinístico (mulberry32) – seed por página para comportamento único */
function createSeededRandom(seed: number): () => number {
  return function next() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Interação com o mouse: raio de influência e força de repulsão (valores baixos = sutil) */
const MOUSE_RADIUS = 140;
const MOUSE_STRENGTH = 0.12;

/** Fator global: rede mais lenta e discreta */
const SLOWDOWN = 0.4;

/** Perfis de animação – cada página sorteia um (seed); valores já calmos */
const ANIMATION_PROFILES = [
  {
    name: 'default',
    speed: 0.6,
    maxDist: 150,
    damping: 0.997,
    trailAlpha: 0.35,
    lineWidth: 1.2,
    accel: 0.02,
  },
  {
    name: 'calm',
    speed: 0.35,
    maxDist: 220,
    damping: 0.9985,
    trailAlpha: 0.28,
    lineWidth: 1,
    accel: 0.01,
  },
  {
    name: 'flow',
    speed: 0.5,
    maxDist: 190,
    damping: 0.998,
    trailAlpha: 0.32,
    lineWidth: 1.2,
    accel: 0.015,
  },
  {
    name: 'soft',
    speed: 0.45,
    maxDist: 180,
    damping: 0.998,
    trailAlpha: 0.3,
    lineWidth: 1.1,
    accel: 0.012,
  },
  {
    name: 'gentle',
    speed: 0.4,
    maxDist: 200,
    damping: 0.9982,
    trailAlpha: 0.28,
    lineWidth: 1,
    accel: 0.01,
  },
] as const;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

interface NeuralNetworkCanvasProps {
  nodeCount?: number;
  fullScreen?: boolean;
  /** Seed por página (ex: pathname) – cada página tem rede neural única */
  seed?: string;
}

export default function NeuralNetworkCanvas({
  nodeCount = 80,
  fullScreen = true,
  seed: pageSeed,
}: NeuralNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -10000, y: -10000 });
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -10000, y: -10000 };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    // Dark: alpha false = canvas opaco, sem transparência (evita body #030710 aparecer)
    const ctx = canvas.getContext('2d', { alpha: !isDark });
    if (!ctx) return;

    const updateCanvasSize = () => {
      if (fullScreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        const container = canvas.parentElement;
        canvas.width = container?.clientWidth || window.innerWidth;
        canvas.height = container?.clientHeight || window.innerHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const lineColor = isDark
      ? semantic.canvasLineDark
      : semantic.canvasLineLight;
    const nodeColor = isDark
      ? semantic.canvasNodeDark
      : semantic.canvasNodeLight;
    const glowColor = isDark
      ? semantic.canvasGlowDark
      : semantic.canvasGlowLight;

    // Animação única por página: seed escolhe perfil + posições/velocidades
    const seedNum = pageSeed
      ? hashString(pageSeed)
      : Math.floor(Math.random() * 0xffffffff);
    const rng = createSeededRandom(seedNum);
    const profileIndex = Math.floor(rng() * ANIMATION_PROFILES.length);
    const profile = ANIMATION_PROFILES[profileIndex];
    const speedMult = profile.speed * SLOWDOWN;
    const maxDistance = profile.maxDist;
    const damping = profile.damping;
    const trailAlpha = profile.trailAlpha;
    const lineWidth = profile.lineWidth;
    const accelAmount = profile.accel * SLOWDOWN;

    const nodes: Node[] = [];
    const count = isMobile ? Math.floor(nodeCount * 0.5) : nodeCount;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: rng() * canvas.width,
        y: rng() * canvas.height,
        vx: (rng() - 0.5) * 1.2 * speedMult,
        vy: (rng() - 0.5) * 1.2 * speedMult,
        radius: 2.5 + rng() * 2.5,
        connections: [],
      });
    }

    nodesRef.current = nodes;

    const bgColor = isDark ? semantic.canvasBgDark : semantic.canvasBgLight;
    // Trail deve usar o mesmo RGB do fundo (dark = preto, light = claro)
    const trailRgb = isDark ? '0, 0, 0' : '232, 238, 244';
    const trailColor = `rgba(${trailRgb}, ${trailAlpha})`;

    const animate = () => {
      if (!ctx) return;

      // Fundo sólido (preto no dark, claro no light)
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Trail (alpha por perfil – cada página com sensação diferente)
      ctx.fillStyle = trailColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Update node positions
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseActive = mx > -5000 && my > -5000;

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Pequena repulsão pelo mouse (só dentro do raio de influência)
        if (mouseActive) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < MOUSE_RADIUS && dist > 2) {
            const t = 1 - dist / MOUSE_RADIUS;
            const force = t * t * MOUSE_STRENGTH;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }

        // Boundary bounce with wrap-around effect
        if (node.x < 0) {
          node.x = canvas.width;
        } else if (node.x > canvas.width) {
          node.x = 0;
        }
        if (node.y < 0) {
          node.y = canvas.height;
        } else if (node.y > canvas.height) {
          node.y = 0;
        }

        node.vx += (Math.random() - 0.5) * accelAmount;
        node.vy += (Math.random() - 0.5) * accelAmount;
        node.vx *= damping;
        node.vy *= damping;
      });

      // Conexões (maxDistance definido por página no início do effect)
      nodes.forEach((node, i) => {
        node.connections = [];
        nodes.forEach((other, j) => {
          if (i !== j) {
            // Calculate distance with wrap-around
            let dx = other.x - node.x;
            let dy = other.y - node.y;

            // Wrap-around check
            if (Math.abs(dx) > canvas.width / 2) {
              dx = dx > 0 ? dx - canvas.width : dx + canvas.width;
            }
            if (Math.abs(dy) > canvas.height / 2) {
              dy = dy > 0 ? dy - canvas.height : dy + canvas.height;
            }

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              node.connections.push(j);
            }
          }
        });
      });

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      nodes.forEach(node => {
        node.connections.forEach(j => {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;

          // Wrap-around for drawing
          let drawX = other.x;
          let drawY = other.y;
          if (Math.abs(dx) > canvas.width / 2) {
            drawX = dx > 0 ? other.x - canvas.width : other.x + canvas.width;
          }
          if (Math.abs(dy) > canvas.height / 2) {
            drawY = dy > 0 ? other.y - canvas.height : other.y + canvas.height;
          }

          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = (1 - distance / maxDistance) * 0.5;

          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(drawX, drawY);
          ctx.stroke();
        });
      });

      // Draw nodes with glow
      nodes.forEach(node => {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Node
        ctx.fillStyle = nodeColor;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [nodeCount, colorScheme, isMobile, fullScreen, pageSeed, isDark]);

  const canvasContainerStyle = fullScreen
    ? {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none' as const,
        zIndex: 0,
        overflow: 'hidden' as const,
        backgroundColor: isDark ? '#000' : undefined,
      }
    : {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none' as const,
        zIndex: 0,
        overflow: 'hidden' as const,
        backgroundColor: isDark ? '#000' : undefined,
      };

  const canvasStyle = {
    width: '100%',
    height: '100%',
    display: 'block' as const,
    backgroundColor: isDark ? '#000' : undefined,
  };

  if (!fullScreen) {
    return (
      <Box style={canvasContainerStyle}>
        <canvas ref={canvasRef} style={canvasStyle} />
      </Box>
    );
  }

  return (
    <Box style={canvasContainerStyle}>
      <canvas ref={canvasRef} style={canvasStyle} />
    </Box>
  );
}
