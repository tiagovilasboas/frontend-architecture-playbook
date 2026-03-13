import React from 'react';
import { Group, Text, ActionIcon, Paper } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <Paper
      withBorder
      radius={0}
      mt="auto"
      px="md"
      py="sm"
      w="100%"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <Group justify="space-between" wrap="nowrap" gap="md">
        <Group gap="xs" wrap="wrap" style={{ flex: 1, minWidth: 0 }}>
          <Text size="xs" c="dimmed">
            Feito com <IconHeart size={12} style={{ verticalAlign: 'middle' }} /> por Tiago Vilas Boas
          </Text>
          <Text size="xs" c="dimmed" component="span">
            • Front-End Architecture Playbook • 2025
          </Text>
        </Group>
        <Group gap="xs">
          <ActionIcon
            component="a"
            href="https://github.com/tiagovilasboas"
            target="_blank"
            size="sm"
            variant="light"
            aria-label="GitHub - Tiago Vilas Boas"
          >
            <IconBrandGithub size={18} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/tiagovilasboas"
            target="_blank"
            size="sm"
            variant="light"
            aria-label="LinkedIn - Tiago Vilas Boas"
          >
            <IconBrandLinkedin size={18} />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  );
}
