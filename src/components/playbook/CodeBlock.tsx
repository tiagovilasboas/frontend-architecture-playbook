import { Box, Text } from '@mantine/core';

export interface CodeBlockProps {
  title?: string;
  code: string;
}

export function CodeBlock({ title, code }: CodeBlockProps): JSX.Element {
  return (
    <Box mb="md">
      {title ? (
        <Text size="sm" c="dimmed" ff="JetBrains Mono, monospace" mb="xs">
          {title}
        </Text>
      ) : null}
      <pre className="playbook-code-block">
        <code>{code}</code>
      </pre>
    </Box>
  );
}
