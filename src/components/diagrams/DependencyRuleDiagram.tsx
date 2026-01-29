import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { semantic } from '../../theme/colors';

interface DependencyRuleDiagramProps {
  /** correct = setas para a direita (UI→Service→Repo→Domain), incorrect = setas para a esquerda */
  variant?: 'correct' | 'incorrect';
  /** altura do canvas */
  height?: number;
}

const LAYERS = [
  { label: 'UI Layer', sub: 'React/Vue, Components' },
  { label: 'Service Layer', sub: 'Business Logic, Use Cases' },
  { label: 'Repository Layer', sub: 'Data Access, API' },
  { label: 'Domain Layer', sub: 'Entities, Rules (Core)' },
] as const;

export default function DependencyRuleDiagram({
  variant = 'correct',
  height = 400,
}: DependencyRuleDiagramProps) {
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
      const minBoxW = 220;
      const totalGaps = 3 * gap;
      const boxW = Math.max(minBoxW, (w - padding * 2 - totalGaps) / 4);
      const boxH = Math.min(180, h - padding * 2);
      const centerY = h / 2;

      const borderOk = isDark
        ? semantic.diagramSuccessBorderDark
        : semantic.diagramSuccessBorderLight;
      const borderErr = isDark
        ? semantic.diagramErrorBorderDark
        : semantic.diagramErrorBorderLight;
      const fillColor = isDark
        ? semantic.diagramFillDark
        : semantic.diagramFillLight;
      const textColor = isDark ? semantic.diagramTextDark : semantic.diagramTextLight;
      const subColor = isDark ? semantic.diagramSubDark : semantic.diagramSubLight;

      ctx.clearRect(0, 0, w, h);

      const startX = padding + boxW / 2;
      const arrowColor = variant === 'correct' ? borderOk : borderErr;
      const boxBorder = variant === 'correct' ? borderOk : borderErr;

      for (let i = 0; i < 4; i++) {
        const x = startX + i * (boxW + gap);
        const boxLeft = x - boxW / 2;
        const boxTop = centerY - boxH / 2;

        ctx.fillStyle = fillColor;
        roundRect(ctx, boxLeft, boxTop, boxW, boxH, 8);
        ctx.fill();
        ctx.strokeStyle = boxBorder;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = textColor;
        ctx.font = '600 18px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(LAYERS[i].label, x, centerY - 14);
        ctx.fillStyle = subColor;
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText(LAYERS[i].sub, x, centerY + 18);
      }

      const arrowLen = 20;
      const headAngle = Math.PI / 6;
      if (variant === 'correct') {
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
            arrowLen,
            headAngle
          );
        }
      } else {
        for (let i = 3; i > 0; i--) {
          const fromX = startX + i * (boxW + gap) - boxW / 2;
          const toX = startX + (i - 1) * (boxW + gap) + boxW / 2;
          drawArrow(
            ctx,
            fromX,
            centerY,
            toX,
            centerY,
            arrowColor,
            arrowLen,
            headAngle
          );
        }
      }

      ctx.textAlign = 'left';
      ctx.font = '600 14px Inter, sans-serif';
      ctx.fillStyle = arrowColor;
      ctx.fillText(
        variant === 'correct'
          ? '✅ Dependências para dentro'
          : '❌ Dependências invertidas',
        padding,
        22
      );
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(container);
    return () => ro.disconnect();
  }, [variant, colorScheme, isDark]);

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
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
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
  ctx.beginPath();
  const r = Math.min(radius, width / 2, height / 2);
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
