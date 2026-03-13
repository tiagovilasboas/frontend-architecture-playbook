import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { semantic } from '../../theme/colors';
import { useBreakpoints } from '../../hooks/useBreakpoints';

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
  const { isMobile } = useBreakpoints();
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

      const verticalLayout = isMobile;
      const padding = verticalLayout ? 16 : Math.max(24, Math.min(48, w * 0.04));
      const gap = verticalLayout ? 12 : Math.max(24, Math.min(56, w * 0.05));

      const borderOk = isDark
        ? semantic.diagramSuccessBorderDark
        : semantic.diagramSuccessBorderLight;
      const borderErr = isDark
        ? semantic.diagramErrorBorderDark
        : semantic.diagramErrorBorderLight;
      const fillColor = isDark
        ? semantic.diagramFillDark
        : semantic.diagramFillLight;
      const textColor = isDark
        ? semantic.diagramTextDark
        : semantic.diagramTextLight;
      const subColor = isDark
        ? semantic.diagramSubDark
        : semantic.diagramSubLight;

      ctx.clearRect(0, 0, w, h);
      const arrowColor = variant === 'correct' ? borderOk : borderErr;
      const boxBorder = variant === 'correct' ? borderOk : borderErr;
      const labelFont = verticalLayout ? '600 14px Inter, sans-serif' : '600 18px Inter, sans-serif';
      const subFont = verticalLayout ? '12px Inter, sans-serif' : '14px Inter, sans-serif';
      const captionFont = '600 14px Inter, sans-serif';

      if (verticalLayout) {
        const totalGaps = 3 * gap;
        const boxH = Math.max(56, (h - padding * 2 - totalGaps - 28) / 4);
        const boxW = Math.max(140, w - padding * 2);
        const centerX = w / 2;
        const textPadding = 10;
        const maxTextW = Math.max(40, boxW - textPadding * 2);
        const startY = padding + 28;

        for (let i = 0; i < 4; i++) {
          const boxTop = startY + i * (boxH + gap);
          const boxLeft = centerX - boxW / 2;
          const boxCenterY = boxTop + boxH / 2;

          ctx.fillStyle = fillColor;
          roundRect(ctx, boxLeft, boxTop, boxW, boxH, 8);
          ctx.fill();
          ctx.strokeStyle = boxBorder;
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = labelFont;
          const labelStr = truncateText(ctx, LAYERS[i].label, maxTextW);
          ctx.fillStyle = textColor;
          ctx.fillText(labelStr, centerX, boxCenterY - 10);

          ctx.font = subFont;
          const subLines = wrapText(ctx, LAYERS[i].sub, maxTextW);
          const lineHeight = 12;
          const subBlockHeight = subLines.length * lineHeight;
          let subY = boxCenterY + 4 - (subBlockHeight - lineHeight) / 2;
          ctx.fillStyle = subColor;
          for (const line of subLines) {
            ctx.fillText(line, centerX, subY);
            subY += lineHeight;
          }
        }

        const arrowLen = 14;
        const headAngle = Math.PI / 6;
        if (variant === 'correct') {
          for (let i = 0; i < 3; i++) {
            const fromY = startY + i * (boxH + gap) + boxH;
            const toY = startY + (i + 1) * (boxH + gap);
            drawArrow(ctx, centerX, fromY, centerX, toY, arrowColor, arrowLen, headAngle);
          }
        } else {
          for (let i = 3; i > 0; i--) {
            const fromY = startY + i * (boxH + gap);
            const toY = startY + (i - 1) * (boxH + gap) + boxH;
            drawArrow(ctx, centerX, fromY, centerX, toY, arrowColor, arrowLen, headAngle);
          }
        }

        ctx.textAlign = 'left';
        ctx.font = captionFont;
        ctx.fillStyle = arrowColor;
        ctx.fillText(
          variant === 'correct'
            ? '✅ Dependências para dentro'
            : '❌ Dependências invertidas',
          padding,
          20
        );
      } else {
        const totalGaps = 3 * gap;
        const rawBoxW = (w - padding * 2 - totalGaps) / 4;
        const boxW = Math.max(100, Math.min(280, rawBoxW));
        const boxH = Math.max(80, Math.min(200, h - padding * 2 - 28));
        const centerY = h / 2;
        const startX = padding + (w - padding * 2 - 4 * boxW - totalGaps) / 2 + boxW / 2;
        const textPadding = 10;
        const maxTextW = Math.max(40, boxW - textPadding * 2);

        const labelSize = Math.max(14, Math.min(20, Math.round(w / 60)));
        const subSize = Math.max(11, Math.min(15, Math.round(w / 80)));
        ctx.font = `600 ${labelSize}px Inter, sans-serif`;
        const desktopLabelFont = ctx.font;
        ctx.font = `${subSize}px Inter, sans-serif`;
        const desktopSubFont = ctx.font;

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

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = desktopLabelFont;
          const labelStr = truncateText(ctx, LAYERS[i].label, maxTextW);
          ctx.fillStyle = textColor;
          ctx.fillText(labelStr, x, centerY - 14);

          ctx.font = desktopSubFont;
          const subLines = wrapText(ctx, LAYERS[i].sub, maxTextW);
          const lineHeight = subSize + 2;
          const subBlockHeight = subLines.length * lineHeight;
          let subY = centerY + 18 - (subBlockHeight - lineHeight) / 2;
          ctx.fillStyle = subColor;
          for (const line of subLines) {
            ctx.fillText(line, x, subY);
            subY += lineHeight;
          }
        }

        const arrowLen = Math.max(14, Math.min(24, boxW * 0.08));
        const headAngle = Math.PI / 6;
        if (variant === 'correct') {
          for (let i = 0; i < 3; i++) {
            const fromX = startX + i * (boxW + gap) + boxW / 2;
            const toX = startX + (i + 1) * (boxW + gap) - boxW / 2;
            drawArrow(ctx, fromX, centerY, toX, centerY, arrowColor, arrowLen, headAngle);
          }
        } else {
          for (let i = 3; i > 0; i--) {
            const fromX = startX + i * (boxW + gap) - boxW / 2;
            const toX = startX + (i - 1) * (boxW + gap) + boxW / 2;
            drawArrow(ctx, fromX, centerY, toX, centerY, arrowColor, arrowLen, headAngle);
          }
        }

        ctx.textAlign = 'left';
        ctx.font = captionFont;
        ctx.fillStyle = arrowColor;
        ctx.fillText(
          variant === 'correct'
            ? '✅ Dependências para dentro'
            : '❌ Dependências invertidas',
          padding,
          22
        );
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(container);
    return () => ro.disconnect();
  }, [variant, colorScheme, isDark, isMobile]);

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

/** Split text into lines that fit within maxWidth. */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  if (maxWidth <= 0) return [text];
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (ctx.measureText(next).width <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/** Truncate with ellipsis if wider than maxWidth. */
function truncateText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  const ellipsis = '…';
  let s = text;
  while (s.length && ctx.measureText(s + ellipsis).width > maxWidth) {
    s = s.slice(0, -1);
  }
  return s ? s + ellipsis : ellipsis;
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
