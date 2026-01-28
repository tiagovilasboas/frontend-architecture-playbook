import React from 'react';
import { Group, Text, ActionIcon, Stack, Paper } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <Paper
      withBorder
      p={0}
      radius={0}
      className="footer-bar"
      style={{
        marginTop: 'auto',
        backgroundColor: 'var(--mantine-color-body)',
      }}
    >
      <Stack gap="md" py="xl" px="md" ta="center">
        <Group justify="center" gap="lg">
          <ActionIcon
            component="a"
            href="https://github.com/tiagovilasboas"
            target="_blank"
            size="lg"
            variant="light"
            color="gray"
            aria-label="GitHub - Tiago Vilas Boas"
          >
            <IconBrandGithub size={20} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/tiagovilasboas"
            target="_blank"
            size="lg"
            variant="light"
            color="gray"
            aria-label="LinkedIn - Tiago Vilas Boas"
          >
            <IconBrandLinkedin size={20} />
          </ActionIcon>
        </Group>

        <Text size="sm" c="dimmed">
          Feito com{' '}
          <IconHeart
            size={14}
            style={{
              verticalAlign: 'middle',
              color: 'var(--mantine-color-red-6)',
            }}
          />{' '}
          por Tiago Vilas Boas
        </Text>

        <Text size="xs" c="dimmed">
          Front-End Architecture Playbook • 2025
        </Text>
      </Stack>
    </Paper>
  );
}
