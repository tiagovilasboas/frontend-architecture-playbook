import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';

const STEPS = [
  { label: 'UI Layer', sub: 'Components' },
  { label: 'Service', sub: 'Use Cases' },
  { label: 'Repository', sub: 'Data Access' },
  { label: 'Domain', sub: 'Core' },
] as const;

interface DependencyRuleFlowDiagramProps {
  /** altura do canvas */
  height?: number;
}

export default function DependencyRuleFlowDiagram({
  height = 340,
}: DependencyRuleFlowDiagramProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w <= 0 || h <= 0) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const padding = 40;
      const gap = 44;
      const minBoxW = 240;
      const totalGaps = 3 * gap;
      const boxW = Math.max(minBoxW, (w - padding * 2 - totalGaps) / 4);
      const boxH = Math.min(160, h - padding * 2);
      const startX =
        padding + (w - padding * 2 - boxW * 4 - totalGaps) / 2 + boxW / 2;
      const centerY = h / 2;

      const borderColor = isDark
        ? 'rgba(34, 197, 94, 0.7)'
        : 'rgba(22, 163, 74, 0.8)';
      const fillColor = isDark
        ? 'rgba(30, 41, 59, 0.5)'
        : 'rgba(241, 245, 249, 0.8)';
      const textColor = isDark ? '#e2e8f0' : '#1e293b';
      const subColor = isDark ? '#94a3b8' : '#64748b';

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 2;
      ctx.font = '600 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < 4; i++) {
        const x = startX + i * (boxW + gap);
        const boxLeft = x - boxW / 2;
        const boxTop = centerY - boxH / 2;

        ctx.fillStyle = fillColor;
        roundRect(ctx, boxLeft, boxTop, boxW, boxH, 8);
        ctx.fill();
        ctx.strokeStyle = borderColor;
        ctx.stroke();

        ctx.fillStyle = textColor;
        ctx.font = '600 18px Inter, sans-serif';
        ctx.fillText(STEPS[i].label, x, centerY - 14);
        ctx.fillStyle = subColor;
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText(STEPS[i].sub, x, centerY + 18);
      }

      const arrowColor = isDark
        ? 'rgba(34, 197, 94, 0.9)'
        : 'rgba(22, 163, 74, 0.9)';
      for (let i = 0; i < 3; i++) {
        const fromX = startX + i * (boxW + gap) + boxW / 2;
        const toX = startX + (i + 1) * (boxW + gap) - boxW / 2;
        drawArrow(
          ctx,
          fromX,
          centerY,
          toX,
          centerY,
          arrowColor,
          22,
          Math.PI / 6
        );
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(container);
    return () => ro.disconnect();
  }, [colorScheme, isDark, height]);

  return (
    <Box
      ref={containerRef}
      style={{
        width: '100%',
        height,
        borderRadius: 12,
        overflow: 'hidden',
        border: `1px solid var(--mantine-color-default-border)`,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </Box>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawArrow(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color: string,
  headLen: number,
  headAngle: number
) {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const angle = Math.atan2(dy, dx);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headLen * Math.cos(angle - headAngle),
    toY - headLen * Math.sin(angle - headAngle)
  );
  ctx.lineTo(
    toX - headLen * Math.cos(angle + headAngle),
    toY - headLen * Math.sin(angle + headAngle)
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}
