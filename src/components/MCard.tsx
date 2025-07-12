import React from 'react';
import { Card, Group, Text, Badge } from '@mantine/core';
import type { ReactNode } from 'react';
interface Props {
  title: string;
  description: string;
  href: string;
  badge?: string;
  icon?: ReactNode;
}
export default function MCard({ title, description, href, badge, icon }: Props) {
  return (
    <Card shadow="sm" padding="lg" component="a" href={href} withBorder>
      <Group justify="space-between" mb="sm">
        <Group gap="xs">
          {icon}
          <Text fw={500}>{title}</Text>
        </Group>
        {badge && <Badge>{badge}</Badge>}
      </Group>
      <Text size="sm" c="dimmed" lineClamp={3}>{description}</Text>
    </Card>
  );
} 