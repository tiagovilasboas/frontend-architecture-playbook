import { Card } from "@mantine/core";
import type { CardProps } from "@mantine/core";

interface SectionCardProps extends CardProps {
  children: React.ReactNode;
}

export function SectionCard({ children, ...props }: SectionCardProps) {
  return (
    <Card withBorder p="xl" radius="lg" {...props}>
      {children}
    </Card>
  );
}
