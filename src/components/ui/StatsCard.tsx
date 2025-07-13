import { Card, ThemeIcon, Title, Text } from '@mantine/core';
import type { CardProps } from '@mantine/core';
import type { IconProps } from '@tabler/icons-react';

interface StatsCardProps extends CardProps {
  icon: React.ComponentType<IconProps>;
  value: string;
  label: string;
  color?: string;
}

export function StatsCard({ icon: Icon, value, label, color = 'brand', ...props }: StatsCardProps) {
  return (
    <Card withBorder p="md" radius="md" ta="center" {...props}>
      <ThemeIcon size={50} radius="md" variant="light" color={color} mb="sm">
        <Icon size={25} />
      </ThemeIcon>
      <Title order={3} size="h4">{value}</Title>
      <Text size="sm" c="dimmed">{label}</Text>
    </Card>
  );
} 