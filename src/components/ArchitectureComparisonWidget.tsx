import React, { useState } from 'react';
import {
  Title,
  Text,
  Paper,
  Alert,
  Group,
  Grid,
  Card,
  Badge,
  Select,
  Button,
  List,
  ThemeIcon,
} from '@mantine/core';
import {
  IconAlertTriangle,
  IconTarget,
  IconInfoCircle,
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import architectureData from '../data/architecture-comparison.json';

type ComparisonType = 'pros' | 'cons' | 'bestFor' | 'avoidWhen';

interface ArchMetric {
  name: string;
  value: number;
  description: string;
  icon: string | null;
}

interface ArchItem {
  name: string;
  description: string;
  metrics: ArchMetric[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  avoidWhen: string[];
}

const data = architectureData as ArchItem[];

export default function ArchitectureComparisonWidget() {
  const [selectedArchitectures, setSelectedArchitectures] = useState<string[]>(
    []
  );
  const [comparisonType, setComparisonType] = useState<ComparisonType>('pros');

  const getComparisonData = () => {
    if (selectedArchitectures.length === 0) return null;
    const selectedArch = data.find(
      arch => arch.name === selectedArchitectures[0]
    );
    if (!selectedArch) return null;
    const comparison: Record<string, string[]> = {
      [comparisonType]: selectedArch[comparisonType] as string[],
    };
    if (selectedArchitectures.length > 1) {
      const secondArch = data.find(
        arch => arch.name === selectedArchitectures[1]
      );
      if (secondArch) {
        comparison[`${comparisonType}2`] = secondArch[
          comparisonType
        ] as string[];
      }
    }
    return comparison;
  };

  const comparison = getComparisonData();

  const getComparisonColor = () => {
    switch (comparisonType) {
      case 'pros':
        return 'green';
      case 'cons':
        return 'red';
      case 'bestFor':
        return 'blue';
      case 'avoidWhen':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const getComparisonIcon = () => {
    switch (comparisonType) {
      case 'pros':
        return <IconCheck size={14} />;
      case 'cons':
        return <IconX size={14} />;
      case 'bestFor':
        return <IconTarget size={14} />;
      case 'avoidWhen':
        return <IconAlertTriangle size={14} />;
      default:
        return null;
    }
  };

  const getComparisonLabel = () => {
    switch (comparisonType) {
      case 'pros':
        return 'Vantagens desta arquitetura';
      case 'cons':
        return 'Desvantagens desta arquitetura';
      case 'bestFor':
        return 'Melhor para estes cenários';
      case 'avoidWhen':
        return 'Evite nestes casos';
      default:
        return '';
    }
  };

  const getSummaryLabel = () => {
    switch (comparisonType) {
      case 'pros':
        return 'vantagem';
      case 'cons':
        return 'desvantagem';
      case 'bestFor':
        return 'aplicação ideal';
      case 'avoidWhen':
        return 'evitar';
      default:
        return '';
    }
  };

  return (
    <Paper withBorder p="xl" radius="md">
      <Title order={2} mb="lg">
        Comparador Interativo
      </Title>
      <Text c="dimmed" mb="lg">
        Selecione até 2 arquiteturas para comparar detalhadamente.
      </Text>

      <Group gap="md" mb="lg">
        <Select
          label="Primeira arquitetura"
          placeholder="Escolha uma arquitetura"
          data={data.map(arch => ({ value: arch.name, label: arch.name }))}
          value={selectedArchitectures[0] || null}
          onChange={value => {
            if (value) {
              setSelectedArchitectures(prev =>
                [value, ...prev.filter(name => name !== value)].slice(0, 2)
              );
            }
          }}
          style={{ flex: 1 }}
        />
        <Select
          label="Segunda arquitetura (opcional)"
          placeholder="Escolha uma arquitetura"
          data={data.map(arch => ({ value: arch.name, label: arch.name }))}
          value={selectedArchitectures[1] || null}
          onChange={value => {
            if (value) {
              setSelectedArchitectures(prev =>
                [...prev.filter(name => name !== value), value].slice(0, 2)
              );
            }
          }}
          style={{ flex: 1 }}
        />
      </Group>

      {selectedArchitectures.length > 0 && (
        <Group gap="xs" mb="lg">
          <Text size="sm" fw={600}>
            Comparar por:
          </Text>
          <Button
            variant={comparisonType === 'pros' ? 'filled' : 'light'}
            color="green"
            size="sm"
            leftSection={<IconCheck size={16} />}
            onClick={() => setComparisonType('pros')}
          >
            Vantagens
          </Button>
          <Button
            variant={comparisonType === 'cons' ? 'filled' : 'light'}
            color="red"
            size="sm"
            leftSection={<IconX size={16} />}
            onClick={() => setComparisonType('cons')}
          >
            Desvantagens
          </Button>
          <Button
            variant={comparisonType === 'bestFor' ? 'filled' : 'light'}
            size="sm"
            leftSection={<IconTarget size={16} />}
            onClick={() => setComparisonType('bestFor')}
          >
            Melhor para
          </Button>
          <Button
            variant={comparisonType === 'avoidWhen' ? 'filled' : 'light'}
            color="orange"
            size="sm"
            leftSection={<IconAlertTriangle size={16} />}
            onClick={() => setComparisonType('avoidWhen')}
          >
            Evitar quando
          </Button>
        </Group>
      )}

      {comparison && (
        <Grid>
          {selectedArchitectures.map(archName => {
            const arch = data.find(a => a.name === archName);
            if (!arch) return null;
            const comparisonData = arch[comparisonType] as string[];
            const avgScore =
              arch.metrics.reduce((sum, m) => sum + m.value, 0) /
              arch.metrics.length;

            return (
              <Grid.Col
                key={archName}
                span={{
                  base: 12,
                  md: selectedArchitectures.length === 1 ? 12 : 6,
                }}
              >
                <Card withBorder p="lg" style={{ height: '100%' }}>
                  <Group justify="space-between" mb="md">
                    <Title order={4} c={getComparisonColor()}>
                      {archName}
                    </Title>
                    <Badge
                      variant="filled"
                      color={
                        avgScore >= 7 ? 'green' : avgScore >= 5 ? 'blue' : 'red'
                      }
                      size="lg"
                    >
                      {avgScore.toFixed(1)}/10
                    </Badge>
                  </Group>

                  <Group gap="xs" mb="lg" wrap="wrap">
                    {arch.metrics.map(metric => (
                      <Badge
                        key={metric.name}
                        variant="light"
                        color={
                          metric.value >= 7
                            ? 'green'
                            : metric.value >= 5
                              ? 'yellow'
                              : 'red'
                        }
                        size="sm"
                      >
                        {metric.name}: {metric.value}/10
                      </Badge>
                    ))}
                  </Group>

                  <Alert
                    color={getComparisonColor()}
                    icon={<IconInfoCircle size={16} />}
                    radius="md"
                    mb="md"
                  >
                    <Text size="sm" fw={600}>
                      {getComparisonLabel()}
                    </Text>
                  </Alert>

                  <List size="sm" spacing="xs">
                    {comparisonData.map((item, idx) => (
                      <List.Item
                        key={idx}
                        icon={
                          <ThemeIcon
                            variant="light"
                            color={getComparisonColor()}
                            size="sm"
                          >
                            {getComparisonIcon()}
                          </ThemeIcon>
                        }
                      >
                        <Text size="sm" fw={500}>
                          {item}
                        </Text>
                      </List.Item>
                    ))}
                  </List>

                  <Alert variant="light" radius="md" mt="md">
                    <Text size="xs" c="dimmed">
                      <strong>Resumo:</strong> {comparisonData.length} pontos de{' '}
                      {getSummaryLabel()} identificados.
                    </Text>
                  </Alert>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      )}

      {selectedArchitectures.length === 0 && (
        <Alert icon={<IconInfoCircle size={16} />} radius="md">
          <Text size="sm">
            Selecione pelo menos uma arquitetura para ver a comparação
            detalhada.
          </Text>
        </Alert>
      )}
    </Paper>
  );
}
