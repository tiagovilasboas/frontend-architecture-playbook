import { Card, ThemeIcon, Title, Text } from '@mantine/core';
import type { CardProps } from '@mantine/core';
import type { IconProps } from '@tabler/icons-react';

interface FeatureCardProps extends CardProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
  color?: string;
}

export function FeatureCard({ icon: Icon, title, description, color = 'brand', ...props }: FeatureCardProps) {
  return (
    <Card withBorder p="md" radius="md" ta="center" {...props}>
      <ThemeIcon size={50} radius="md" variant="light" color={color} mb="sm">
        <Icon size={25} />
      </ThemeIcon>
      <Title order={4} size="h5">{title}</Title>
      <Text size="sm" c="dimmed">{description}</Text>
    </Card>
  );
} 