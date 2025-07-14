import { useState } from 'react';
import { Paper, Text, Button, Stack, Group, Badge, Tooltip, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { IconChevronDown, IconChevronRight, IconCode, IconCopy, IconCheck } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
  const [copied, setCopied] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  // Suporte a string ou objeto
  const codeContent = typeof code === 'string' ? code : code.content;
  const codeDescription = typeof code === 'string' ? description : (code.description || description);

  // Detectar linguagem baseado no conteúdo
  const detectLanguage = (content: string): string => {
    if (content.includes('<?php')) return 'php';
    if (content.includes('<!DOCTYPE html') || content.includes('<html')) return 'html';
    if (content.includes('interface') || content.includes('type') || content.includes('export class')) return 'typescript';
    if (content.includes('import') && content.includes('from')) return 'typescript';
    if (content.includes('const') || content.includes('let') || content.includes('var')) return 'javascript';
    return 'typescript'; // default
  };

  const detectedLanguage = detectLanguage(codeContent);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleToggle = () => setExpanded((v) => !v);

  return (
    <Paper 
      withBorder 
      p="md" 
      radius="md"
      style={{ cursor: 'pointer' }}
      onClick={handleToggle}
    >
      <Stack gap="sm">
        <Group justify="space-between" align="center">
          <Group gap="xs" align="center">
            <IconCode size={16} />
            <Text fw={600} size="sm">{title}</Text>
          </Group>
          <Group gap={4} align="center">
            <Tooltip label={copied ? 'Copiado!' : 'Copiar código'} withArrow>
              <Button
                variant="subtle"
                size="xs"
                onClick={handleCopy}
                leftSection={copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                color={copied ? 'green' : 'blue'}
                tabIndex={0}
              >
                {copied ? 'Copiado!' : 'Copiar'}
              </Button>
            </Tooltip>
            <Button
              variant="subtle"
              size="xs"
              onClick={(e) => { e.stopPropagation(); handleToggle(); }}
              rightSection={expanded ? <IconChevronDown size={14} /> : <IconChevronRight size={14} />}
              tabIndex={0}
            >
              {expanded ? 'Ocultar' : 'Ver código'}
            </Button>
          </Group>
        </Group>
        <Group justify="space-between" align="center" mb={4}>
          <Badge size="xs" variant="light" color="blue" style={{ textTransform: 'uppercase' }}>
            {detectedLanguage}
          </Badge>
        </Group>
        {codeDescription && (
          <Text size="sm" c="dimmed">
            {codeDescription}
          </Text>
        )}
        {expanded && (
          <SyntaxHighlighter
            language={detectedLanguage}
            style={tomorrow}
            customStyle={{
              borderRadius: 6,
              fontSize: 14,
              margin: 0,
              padding: 12,
              overflowX: 'auto' as const,
              background: colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
              color: colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[9],
              border: `1px solid ${colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
            }}
            showLineNumbers
            lineNumberStyle={{
              minWidth: '1.8em',
              paddingRight: '0.5em',
              textAlign: 'left',
              color: colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[6],
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {codeContent}
          </SyntaxHighlighter>
        )}
      </Stack>
    </Paper>
  );
} 