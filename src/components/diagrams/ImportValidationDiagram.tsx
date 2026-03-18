import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { semantic } from '../../theme/colors';

const LAYERS = ['UI', 'Service', 'Repository', 'Domain'] as const;

interface ImportValidationDiagramProps {
  height?: number;
}

export default function ImportValidationDiagram({
  height = 320,
}: ImportValidationDiagramProps) {
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

      const halfW = w / 2;
      const padding = 24;
      const boxH = 40;
      const boxW = Math.min(160, halfW - padding * 2);

      const successBorder = isDark
        ? semantic.diagramSuccessBorderDark
        : semantic.diagramSuccessBorderLight;
      const errorBorder = isDark
        ? semantic.diagramErrorBorderDark
        : semantic.diagramErrorBorderLight;
      const fillColor = isDark
        ? semantic.diagramFillDark
        : semantic.diagramFillLight;
      const textColor = isDark
        ? semantic.diagramTextDark
        : semantic.diagramTextLight;
      const arrowOk = isDark
        ? semantic.diagramArrowDark
        : semantic.diagramArrowLight;

      function drawPanel(
        left: number,
        panelW: number,
        title: string,
        isCorrect: boolean
      ) {
        const borderColor = isCorrect ? successBorder : errorBorder;
        ctx.fillStyle = textColor;
        ctx.font = '600 14px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(title, left + padding, padding + 10);

        const startY = padding + 32;
        const boxGap = 8;
        const startX =
          left + (panelW - boxW * 4 - boxGap * 3) / 2 + boxW / 2 + boxGap / 2;

        for (let i = 0; i < 4; i++) {
          const x = startX + i * (boxW + boxGap);
          const y = startY + i * (boxH + boxGap) + boxH / 2;
          const boxLeft = x - boxW / 2;
          const boxTop = startY + i * (boxH + boxGap);

          ctx.fillStyle = fillColor;
          roundRect(ctx, boxLeft, boxTop, boxW, boxH, 6);
          ctx.fill();
          ctx.strokeStyle = borderColor;
          ctx.stroke();

          ctx.fillStyle = textColor;
          ctx.font = '600 12px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(LAYERS[i], x, y);
        }

        const arrowColor = isCorrect ? arrowOk : errorBorder;
        const headLen = 10;
        const headAngle = Math.PI / 6;

        if (isCorrect) {
          for (let i = 0; i < 3; i++) {
            const fromX = startX + i * (boxW + boxGap) + boxW / 2;
            const toX = startX + (i + 1) * (boxW + boxGap) - boxW / 2;
            const fromY = startY + i * (boxH + boxGap) + boxH / 2;
            const toY = startY + (i + 1) * (boxH + boxGap) + boxH / 2;
            drawArrow(
              ctx,
              fromX,
              fromY,
              toX,
              toY,
              arrowColor,
              headLen,
              headAngle
            );
          }
        } else {
          drawArrow(
            ctx,
            startX + 3 * (boxW + boxGap) - boxW / 2,
            startY + 3 * (boxH + boxGap) + boxH / 2,
            startX + boxW / 2,
            startY + boxH / 2,
            errorBorder,
            headLen,
            headAngle
          );
          drawArrow(
            ctx,
            startX + 3 * (boxW + boxGap) - boxW / 2,
            startY + 3 * (boxH + boxGap) + boxH / 2,
            startX + (boxW + boxGap) + boxW / 2,
            startY + (boxH + boxGap) + boxH / 2,
            errorBorder,
            headLen,
            headAngle
          );
          drawArrow(
            ctx,
            startX + 2 * (boxW + boxGap) - boxW / 2,
            startY + 2 * (boxH + boxGap) + boxH / 2,
            startX + (boxW + boxGap) + boxW / 2,
            startY + (boxH + boxGap) + boxH / 2,
            errorBorder,
            headLen,
            headAngle
          );
        }
      }

      drawPanel(0, halfW, '✅ Correct (imports only inward)', true);
      drawPanel(halfW, halfW, '❌ Incorrect (inner importing outer)', false);
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
): void {
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
): void {
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
