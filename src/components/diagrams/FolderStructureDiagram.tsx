import { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { semantic } from '../../theme/colors';

const FOLDERS = [
  { label: 'domain/', hint: 'most inner', children: ['entities/', 'rules/'] },
  {
    label: 'repositories/',
    hint: 'imports domain',
    children: ['user.repository.ts'],
  },
  {
    label: 'services/',
    hint: 'domain + repos',
    children: ['user.service.ts'],
  },
  { label: 'ui/', hint: 'outer', children: ['components/', 'pages/'] },
] as const;

interface FolderStructureDiagramProps {
  height?: number;
}

export default function FolderStructureDiagram({
  height = 280,
}: FolderStructureDiagramProps) {
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

      const padding = 24;
      const gap = 16;
      const totalGaps = 3 * gap;
      const boxW = Math.max(120, (w - padding * 2 - totalGaps) / 4);
      const boxH = Math.min(140, h - padding * 2);
      const startX =
        padding + (w - padding * 2 - boxW * 4 - totalGaps) / 2 + boxW / 2;
      const centerY = h / 2;

      const borderColor = isDark
        ? semantic.diagramSuccessBorderDark
        : semantic.diagramSuccessBorderLight;
      const fillColor = isDark
        ? semantic.diagramFillDark
        : semantic.diagramFillLight;
      const textColor = isDark
        ? semantic.diagramTextDark
        : semantic.diagramTextLight;
      const subColor = isDark
        ? semantic.diagramSubDark
        : semantic.diagramSubLight;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 2;
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

        const folder = FOLDERS[i];
        ctx.fillStyle = textColor;
        ctx.font = '600 14px ui-monospace, monospace';
        ctx.fillText(folder.label, x, centerY - 28);
        ctx.fillStyle = subColor;
        ctx.font = '11px Inter, sans-serif';
        ctx.fillText(folder.hint, x, centerY - 10);
        ctx.font = '11px ui-monospace, monospace';
        folder.children.forEach((child, j) => {
          ctx.fillText(child, x, centerY + 8 + j * 16);
        });
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
