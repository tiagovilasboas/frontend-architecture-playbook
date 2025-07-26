import React, { useState } from 'react';
import {
  Text,
  Stack,
  Paper,
  Card,
  Group,
  Badge,
  Anchor,
  Alert,
  List,
  ActionIcon,
  Collapse,
} from '@mantine/core';
import {
  IconTrendingUp,
  IconExternalLink,
  IconCheckbox,
  IconChevronDown,
  IconChevronUp,
  IconUsers,
} from '@tabler/icons-react';

export interface Case {
  company: string;
  icon: string;
  title: string;
  challenge: string;
  solution: string;
  practices: string[];
  results: string[];
  link: string;
  color: string;
  disclaimer?: string;
}

interface CaseCardProps {
  case_: Case;
  index: number;
}

export function CaseCard({ case_, index }: CaseCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Extrair métricas de escala do título
  const scaleMatch = case_.title.match(/- (\d+[MBK]+\+?) usuários?/);
  const scale = scaleMatch ? scaleMatch[1] : null;

  return (
    <Card
      withBorder
      shadow="sm"
      padding="lg"
      radius="md"
      style={{ cursor: 'pointer' }}
      onClick={() => setExpanded(!expanded)}
    >
      <Stack gap="md">
        {/* Header */}
        <Group gap="sm" align="flex-start">
          <Text
            size="xl"
            style={{ lineHeight: 1, marginTop: 0, marginBottom: 0 }}
          >
            {case_.icon}
          </Text>
          <div style={{ flex: 1 }}>
            <Group gap="xs" align="center" style={{ marginBottom: 4 }}>
              <Text
                fw={700}
                size="lg"
                style={{ lineHeight: 1, marginBottom: 0 }}
              >
                {case_.company}
              </Text>
              <Badge variant="light" color={case_.color}>
                Case #{index + 1}
              </Badge>
              {scale && (
                <Badge
                  variant="light"
                  color="blue"
                  leftSection={<IconUsers size={12} />}
                >
                  {scale}
                </Badge>
              )}
            </Group>
            <Text fw={600} size="lg" c={`${case_.color}.6`}>
              {case_.title.replace(/- \d+[MBK]+\+? usuários?/, '')}
            </Text>
          </div>
          <ActionIcon
            variant="light"
            size="sm"
            onClick={e => {
              e.stopPropagation(); // Previne que o click do card seja acionado
              setExpanded(!expanded);
            }}
            style={{ marginTop: 4 }}
          >
            {expanded ? (
              <IconChevronUp size={16} />
            ) : (
              <IconChevronDown size={16} />
            )}
          </ActionIcon>
        </Group>

        {/* Collapsible Content */}
        <Collapse in={expanded}>
          <Stack gap="md">
            {/* Challenge & Solution */}
            <Paper withBorder p="md" radius="sm">
              <Stack gap="sm">
                <div>
                  <Text fw={600} size="sm" c="orange" mb={4}>
                    🔥 Desafio:
                  </Text>
                  <Text size="sm">{case_.challenge}</Text>
                </div>
                <div>
                  <Text fw={600} size="sm" c="blue" mb={4}>
                    💡 Solução:
                  </Text>
                  <Text size="sm">{case_.solution}</Text>
                </div>
              </Stack>
            </Paper>

            {/* Practices */}
            <div>
              <Text fw={600} size="sm" c="dimmed" mb="xs">
                🛠️ Boas práticas aplicadas:
              </Text>
              <Group gap="xs">
                {case_.practices.map(practice => (
                  <Badge key={practice} variant="light" size="sm" color="gray">
                    {practice}
                  </Badge>
                ))}
              </Group>
            </div>

            {/* Results */}
            <Alert
              color={case_.color}
              icon={<IconTrendingUp size={16} />}
              radius="md"
            >
              <Text fw={600} size="sm" mb="xs">
                📈 Impacto Real:
              </Text>
              <List spacing={4} size="sm">
                {case_.results.map((result, idx) => (
                  <List.Item
                    key={idx}
                    icon={
                      <IconCheckbox
                        size={14}
                        color="var(--mantine-color-green-6)"
                      />
                    }
                  >
                    <Text fw={500}>{result}</Text>
                  </List.Item>
                ))}
              </List>
            </Alert>

            {/* Reference */}
            <div>
              <Text fw={600} size="sm" c="dimmed" mb="xs">
                📚 Referência:
              </Text>
              <Anchor
                href={case_.link}
                target="_blank"
                rel="noopener noreferrer"
                c={case_.color}
                size="sm"
                onClick={e => e.stopPropagation()} // Previne que o click do card seja acionado
              >
                <Group gap={4}>
                  <IconExternalLink size={14} />
                  <Text size="sm">Ver artigo técnico</Text>
                </Group>
              </Anchor>
            </div>

            {/* Disclaimer */}
            {case_.disclaimer && (
              <Alert
                color="yellow"
                variant="light"
                icon={<IconTrendingUp size={16} />}
                radius="sm"
              >
                <Text size="xs" c="dimmed">
                  <strong>ℹ️ Nota:</strong> {case_.disclaimer}
                </Text>
              </Alert>
            )}
          </Stack>
        </Collapse>
      </Stack>
    </Card>
  );
}
