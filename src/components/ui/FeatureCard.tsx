import { Card, ThemeIcon, Title, Text } from "@mantine/core";
import type { CardProps } from "@mantine/core";
import type { IconProps } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface FeatureCardProps extends CardProps {
  icon: React.ComponentType<IconProps>;
  title: ReactNode;
  description: ReactNode;
  color?: string;
  iconSize?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color = "brand",
  iconSize = 50,
  ...props
}: FeatureCardProps) {
  return (
    <Card withBorder p="md" radius="md" ta="center" {...props}>
      <ThemeIcon
        size={iconSize}
        radius="md"
        variant="light"
        color={color}
        mb="sm"
      >
        <Icon size={iconSize * 0.5} />
      </ThemeIcon>
      <Title order={4} size="h5">
        {title}
      </Title>
      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </Card>
  );
}
