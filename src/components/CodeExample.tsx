import { useState } from 'react';
import { Paper, Text, Button, Stack, Group, Code, Collapse } from '@mantine/core';
import { IconChevronDown, IconChevronRight, IconCode } from '@tabler/icons-react';

interface CodeExampleCodeObject {
  content: string;
  language?: string;
  description?: string;
}

interface CodeExampleProps {
  title: string;
  description?: string;
  code: string | CodeExampleCodeObject;
  defaultExpanded?: boolean;
}

export default function CodeExample({ 
  title, 
  description, 
  code, 
  defaultExpanded = false 
}: CodeExampleProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  // Suporte a string ou objeto
  const codeContent = typeof code === 'string' ? code : code.content;
  const codeDescription = typeof code === 'string' ? description : (code.description || description);
  // Futuro: const codeLanguage = typeof code === 'string' ? undefined : code.language;

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="sm">
        <Group justify="space-between" align="center">
          <Group gap="xs" align="center">
            <IconCode size={16} />
            <Text fw={600} size="sm">{title}</Text>
          </Group>
          <Button
            variant="subtle"
            size="xs"
            onClick={() => setExpanded(!expanded)}
            rightSection={expanded ? <IconChevronDown size={14} /> : <IconChevronRight size={14} />}
          >
            {expanded ? 'Ocultar' : 'Ver código'}
          </Button>
        </Group>
        
        {codeDescription && (
          <Text size="sm" c="dimmed">
            {codeDescription}
          </Text>
        )}

        <Collapse in={expanded}>
          <Code block style={{ marginTop: '8px' }}>
            {codeContent}
          </Code>
        </Collapse>
      </Stack>
    </Paper>
  );
} 