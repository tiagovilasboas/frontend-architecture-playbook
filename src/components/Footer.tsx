import React from 'react';
import { Group, Text, ActionIcon, Paper } from '@mantine/core';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
} from '@tabler/icons-react';

export default function Footer() {
  const { isMobile } = useBreakpoints();

  return (
    <Paper
      withBorder
      radius={0}
      mt="auto"
      py="sm"
      w="100%"
      px={isMobile ? undefined : 'md'}
      style={{
        position: 'relative',
        zIndex: 10,
        ...(isMobile
          ? {
              paddingLeft: 'max(8px, env(safe-area-inset-left, 0px))',
              paddingRight: 'max(8px, env(safe-area-inset-right, 0px))',
            }
          : {}),
      }}
    >
      <Group justify="space-between" wrap="nowrap" gap={isMobile ? 'xs' : 'md'}>
        <Group gap="xs" wrap="wrap" style={{ flex: 1, minWidth: 0 }}>
          <Text size="xs" c="dimmed">
            Feito com{' '}
            <IconHeart size={12} style={{ verticalAlign: 'middle' }} /> por
            Tiago Vilas Boas
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
