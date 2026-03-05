import { Box, Paper, Text } from '@mantine/core';

export interface DiagramBlockProps {
  title: string;
  children: React.ReactNode;
}

export function DiagramBlock({ title, children }: DiagramBlockProps): JSX.Element {
  return (
    <Paper withBorder p="lg" radius="md" mb="md" style={{ borderColor: 'var(--mantine-color-dark-4)' }}>
      <Text size="sm" c="dimmed" ff="JetBrains Mono, monospace" mb="md">
        {title}
      </Text>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 80 }}>
        {children}
      </Box>
    </Paper>
  );
}
