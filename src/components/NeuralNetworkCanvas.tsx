import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

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
}

export default function NeuralNetworkCanvas({
  nodeCount = 80,
  fullScreen = true,
}: NeuralNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
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

    const isDark = colorScheme === 'dark';
    // Azul escuro alinhado ao tema (brand/accent)
    const lineColor = isDark
      ? 'rgba(147, 197, 253, 0.14)'
      : 'rgba(58, 77, 107, 0.2)';
    const nodeColor = isDark
      ? 'rgba(96, 165, 250, 0.65)'
      : 'rgba(59, 130, 246, 0.5)';
    const glowColor = isDark
      ? 'rgba(96, 165, 250, 0.35)'
      : 'rgba(59, 130, 246, 0.25)';

    // Initialize nodes
    const nodes: Node[] = [];
    const count = isMobile ? Math.floor(nodeCount * 0.5) : nodeCount;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8, // Aumentado de 0.3 para 0.8
        vy: (Math.random() - 0.5) * 0.8, // Aumentado de 0.3 para 0.8
        radius: 3 + Math.random() * 2,
        connections: [],
      });
    }

    nodesRef.current = nodes;

    // Fundo azul bem escuro (alinhado ao tema)
    const bgColor = isDark ? 'rgb(6, 11, 20)' : 'rgb(232, 238, 244)';

    const animate = () => {
      if (!ctx) return;

      // Fundo sólido azul escuro
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clear com fade suave para efeito de trail
      ctx.fillStyle = isDark
        ? 'rgba(6, 11, 20, 0.4)'
        : 'rgba(232, 238, 244, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

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

        // Add slight random acceleration for more organic movement
        node.vx += (Math.random() - 0.5) * 0.05;
        node.vy += (Math.random() - 0.5) * 0.05;

        // Damping (menos agressivo para movimento mais fluido)
        node.vx *= 0.995;
        node.vy *= 0.995;
      });

      // Calculate connections (considering wrap-around)
      const maxDistance = 150;
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

      // Draw connections (with wrap-around)
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1.5;
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
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [nodeCount, colorScheme, isMobile, fullScreen]);

  if (!fullScreen) {
    return (
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </Box>
  );
}
