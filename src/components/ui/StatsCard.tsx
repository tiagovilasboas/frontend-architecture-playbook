import { Card, ThemeIcon, Title, Text, Group, Stack } from '@mantine/core';
import type { CardProps } from '@mantine/core';
import type { IconProps } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

/**
 * StatsCard - Componente de estatísticas responsivo
 *
 * Melhorias Mobile:
 * - Layout horizontal automático no mobile (ícone + texto lado a lado)
 * - Tamanhos responsivos (ícones e textos menores em telas pequenas)
 * - Padding otimizado para mobile
 * - Prop 'layout' para controle manual (vertical/horizontal/auto)
 * - Prop 'iconSize' para tamanho customizado do ícone
 */
interface StatsCardProps extends CardProps {
  icon: React.ComponentType<IconProps>;
  value: string;
  label: string;
  color?: string;
  layout?: 'vertical' | 'horizontal' | 'auto';
  iconSize?: number;
}

export function StatsCard({
  icon: Icon,
  value,
  label,
  color = 'brand',
  layout = 'auto',
  iconSize,
  ...props
}: StatsCardProps) {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isSmallMobile = useMediaQuery('(max-width: 400px)');

  // Determina o layout baseado no prop ou automaticamente no mobile
  const finalLayout =
    layout === 'auto' ? (isMobile ? 'horizontal' : 'vertical') : layout;

  // Tamanhos responsivos
  const finalIconSize = iconSize || (isSmallMobile ? 32 : isMobile ? 40 : 50);
  const iconInnerSize = finalIconSize * 0.5;
  const titleSize = isSmallMobile ? 'h5' : isMobile ? 'h4' : 'h3';
  const textSize = isSmallMobile ? 'xs' : isMobile ? 'sm' : 'md';
  const padding = isSmallMobile ? 'sm' : isMobile ? 'md' : 'lg';

  if (finalLayout === 'horizontal') {
    return (
      <Card withBorder p={padding} radius="md" {...props}>
        <Group gap="sm" align="center" justify="flex-start">
          <ThemeIcon
            size={finalIconSize}
            radius="md"
            variant="light"
            color={color}
            style={{ flexShrink: 0 }}
          >
            <Icon size={iconInnerSize} />
          </ThemeIcon>
          <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
            <Title order={3} size={titleSize} style={{ lineHeight: 1.1 }}>
              {value}
            </Title>
            <Text size={textSize} c="dimmed" style={{ lineHeight: 1.2 }}>
              {label}
            </Text>
          </Stack>
        </Group>
      </Card>
    );
  }

  // Layout vertical (padrão)
  return (
    <Card withBorder p={padding} radius="md" ta="center" {...props}>
      <ThemeIcon
        size={finalIconSize}
        radius="md"
        variant="light"
        color={color}
        mb="sm"
        style={{ margin: '0 auto 0.75rem auto' }}
      >
        <Icon size={iconInnerSize} />
      </ThemeIcon>
      <Title order={3} size={titleSize} mb={4}>
        {value}
      </Title>
      <Text size={textSize} c="dimmed">
        {label}
      </Text>
    </Card>
  );
}
