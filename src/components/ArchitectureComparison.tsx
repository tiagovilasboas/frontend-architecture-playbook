import React, { useState, useMemo } from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Grid,
  Card,
  Badge,
  Group,
  Tabs,
  TextInput,
  Select,
  ActionIcon,
  Tooltip,
  Collapse,
  Divider,
  List,
  ThemeIcon,
  Progress,
} from '@mantine/core';
import {
  IconSearch,
  IconChartBar,
  IconTarget,
  IconList,
  IconTable,
  IconChevronDown,
  IconChevronUp,
  IconCheck,
  IconX,
  IconBolt,
  IconCode,
  IconTestPipe,
  IconScale,
  IconBrain,
  IconAlertTriangle,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

interface ArchitectureMetric {
  name: string;
  value: number; // 0-10
  description: string;
  icon: React.ReactNode;
}

interface ArchitectureComparisonProps {
  architectures: {
    name: string;
    description: string;
    metrics: ArchitectureMetric[];
    pros: string[];
    cons: string[];
    bestFor: string[];
    avoidWhen: string[];
  }[];
}

// Fora do componente, sem export
const metricCategories = [
  {
    name: 'Performance',
    icon: <IconBolt size={16} />,
    description: 'Velocidade e eficiência',
    color: 'blue',
  },
  {
    name: 'Manutenibilidade',
    icon: <IconCode size={16} />,
    description: 'Facilidade de manutenção',
    color: 'green',
  },
  {
    name: 'Testabilidade',
    icon: <IconTestPipe size={16} />,
    description: 'Facilidade de testes',
    color: 'purple',
  },
  {
    name: 'Escalabilidade',
    icon: <IconScale size={16} />,
    description: 'Capacidade de crescimento',
    color: 'orange',
  },
  {
    name: 'Complexidade',
    icon: <IconBrain size={16} />,
    description: 'Curva de aprendizado',
    color: 'red',
  },
];

const ArchitectureComparison: React.FC<ArchitectureComparisonProps> = ({
  architectures,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeTab, setActiveTab] = useState<string | null>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [expandedArchitecture, setExpandedArchitecture] = useState<
    string | null
  >(null);

  // Filter architectures based on search
  const filteredArchitectures = useMemo(() => {
    return architectures.filter(
      arch =>
        arch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        arch.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [architectures, searchTerm]);

  // Get top performers for each metric
  const topPerformers = useMemo(() => {
    const performers: { [key: string]: { name: string; value: number }[] } = {};

    metricCategories.forEach(category => {
      performers[category.name] = architectures
        .map(arch => ({
          name: arch.name,
          value: arch.metrics.find(m => m.name === category.name)?.value || 0,
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 3);
    });

    return performers;
  }, [architectures, metricCategories]);

  const OverviewSection = () => (
    <Paper withBorder p="xl" radius="md">
      <Group justify="space-between" mb="xl">
        <div>
          <Title order={3} mb="xs">
            Visão Geral das Arquiteturas
          </Title>
          <Text c="dimmed" size="sm">
            Compare {architectures.length} arquiteturas em{' '}
            {metricCategories.length} métricas
          </Text>
        </div>

        <Group>
          <TextInput
            placeholder="Buscar arquitetura..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            leftSection={<IconSearch size={16} />}
            size="sm"
            style={{ width: 250 }}
          />
          <Select
            placeholder="Filtrar por métrica"
            value={selectedMetric}
            onChange={setSelectedMetric}
            data={metricCategories.map(cat => ({
              value: cat.name,
              label: cat.name,
            }))}
            size="sm"
            style={{ width: 200 }}
            clearable
          />
        </Group>
      </Group>

      {/* Top Performers Grid */}
      <Grid mb="xl">
        {metricCategories.map(category => (
          <Grid.Col key={category.name} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon
                  size={40}
                  radius="md"
                  variant="light"
                  color={
                    category.color as
                      | 'blue'
                      | 'green'
                      | 'purple'
                      | 'orange'
                      | 'red'
                  }
                >
                  {category.icon}
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    {category.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {category.description}
                  </Text>
                </div>
              </Group>

              <Stack gap="xs">
                {topPerformers[category.name]?.map((performer, index) => (
                  <Group key={performer.name} justify="space-between">
                    <Group gap="xs">
                      <Badge
                        size="xs"
                        variant="light"
                        color={index === 0 ? 'yellow' : 'gray'}
                      >
                        #{index + 1}
                      </Badge>
                      <Text size="sm" fw={500}>
                        {performer.name}
                      </Text>
                    </Group>
                    <Badge
                      size="sm"
                      variant="light"
                      color={
                        performer.value >= 7
                          ? 'green'
                          : performer.value >= 4
                            ? 'yellow'
                            : 'red'
                      }
                    >
                      {performer.value}/10
                    </Badge>
                  </Group>
                ))}
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Architecture Cards */}
      <Grid>
        {filteredArchitectures.map(arch => {
          const avgScore =
            arch.metrics.reduce((sum, m) => sum + m.value, 0) /
            arch.metrics.length;
          const isExpanded = expandedArchitecture === arch.name;

          return (
            <Grid.Col key={arch.name} span={{ base: 12, lg: 6 }}>
              <Card withBorder p="md" style={{ height: '100%' }}>
                <Group justify="space-between" mb="md">
                  <div style={{ flex: 1 }}>
                    <Title order={4} mb="xs">
                      {arch.name}
                    </Title>
                    <Text size="sm" c="dimmed" mb="sm">
                      {arch.description}
                    </Text>

                    <Group gap="xs">
                      <Badge
                        variant="light"
                        color={
                          avgScore >= 7
                            ? 'green'
                            : avgScore >= 4
                              ? 'yellow'
                              : 'red'
                        }
                      >
                        Score: {avgScore.toFixed(1)}/10
                      </Badge>
                      <Badge variant="light" color="blue">
                        {arch.metrics.length} métricas
                      </Badge>
                    </Group>
                  </div>

                  <ActionIcon
                    variant="light"
                    onClick={() =>
                      setExpandedArchitecture(isExpanded ? null : arch.name)
                    }
                  >
                    {isExpanded ? (
                      <IconChevronUp size={16} />
                    ) : (
                      <IconChevronDown size={16} />
                    )}
                  </ActionIcon>
                </Group>

                {/* Quick Metrics */}
                <Group gap="xs" mb="md">
                  {arch.metrics.slice(0, 3).map(metric => {
                    const getScoreColor = (value: number) => {
                      if (value >= 8) return 'green';
                      if (value >= 6) return 'blue';
                      if (value >= 4) return 'yellow';
                      return 'red';
                    };

                    return (
                      <Tooltip
                        key={metric.name}
                        label={`${metric.name}: ${metric.value}/10`}
                        withArrow
                        position="top"
                        multiline
                        w={200}
                      >
                        <Badge
                          variant="filled"
                          color={getScoreColor(metric.value)}
                          size={isMobile ? 'md' : 'sm'}
                          style={{
                            minWidth: isMobile ? '60px' : '50px',
                            textAlign: 'center',
                            fontWeight: 700,
                            fontSize: isMobile ? '14px' : '12px',
                          }}
                        >
                          {metric.value}/10
                        </Badge>
                      </Tooltip>
                    );
                  })}
                </Group>

                {/* Metrics Legend - Mobile Friendly */}
                <Text size="xs" c="dimmed" ta="center" mb="sm">
                  {isMobile ? (
                    <>
                      <strong>Métricas:</strong>{' '}
                      {arch.metrics.slice(0, 3).map((metric, index) => (
                        <span key={metric.name}>
                          {index > 0 ? ', ' : ' '}
                          <strong>{metric.name}</strong> ({metric.value}/10)
                        </span>
                      ))}
                    </>
                  ) : (
                    <>
                      <strong>Métricas principais:</strong>{' '}
                      {arch.metrics.slice(0, 3).map((metric, index) => (
                        <span key={metric.name}>
                          {index > 0 ? ', ' : ' '}
                          <strong>{metric.name}</strong> ({metric.value}/10)
                        </span>
                      ))}
                    </>
                  )}
                </Text>

                {/* Expanded Details */}
                <Collapse in={isExpanded}>
                  <Divider mb="md" />

                  <Grid>
                    <Grid.Col span={6}>
                      <Text size="sm" fw={600} mb="xs" c="green">
                        <IconCheck size={14} style={{ marginRight: 4 }} />
                        Vantagens
                      </Text>
                      <List size="xs" spacing="xs">
                        {arch.pros.slice(0, 3).map((pro, index) => (
                          <List.Item key={index} c="dimmed">
                            {pro}
                          </List.Item>
                        ))}
                      </List>
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <Text size="sm" fw={600} mb="xs" c="red">
                        <IconX size={14} style={{ marginRight: 4 }} />
                        Desvantagens
                      </Text>
                      <List size="xs" spacing="xs">
                        {arch.cons.slice(0, 3).map((con, index) => (
                          <List.Item key={index} c="dimmed">
                            {con}
                          </List.Item>
                        ))}
                      </List>
                    </Grid.Col>
                  </Grid>
                </Collapse>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Paper>
  );

  const MetricsComparison = () => (
    <Paper withBorder p="xl" radius="md">
      <Title order={3} mb="lg">
        Comparação Detalhada de Métricas
      </Title>

      <Grid>
        {filteredArchitectures.map(arch => (
          <Grid.Col key={arch.name} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p="md">
              <Title order={4} mb="sm">
                {arch.name}
              </Title>
              <Text size="sm" c="dimmed" mb="md">
                {arch.description}
              </Text>

              <Stack gap="md">
                {metricCategories.map(category => {
                  const metric = arch.metrics.find(
                    m => m.name === category.name
                  );
                  const value = metric?.value || 0;

                  return (
                    <div key={category.name}>
                      <Group justify="space-between" mb={4}>
                        <Group gap="xs">
                          <ThemeIcon
                            size={20}
                            radius="sm"
                            variant="light"
                            color={
                              category.color as
                                | 'blue'
                                | 'green'
                                | 'purple'
                                | 'orange'
                                | 'red'
                            }
                          >
                            {category.icon}
                          </ThemeIcon>
                          <Text size="sm" fw={500}>
                            {category.name}
                          </Text>
                        </Group>
                        <Badge
                          size="sm"
                          variant="light"
                          color={
                            value >= 7 ? 'green' : value >= 4 ? 'yellow' : 'red'
                          }
                        >
                          {value}/10
                        </Badge>
                      </Group>
                      <Progress
                        value={value * 10}
                        color={
                          category.color as
                            | 'blue'
                            | 'green'
                            | 'purple'
                            | 'orange'
                            | 'red'
                        }
                        size="sm"
                        mb={4}
                      />
                      <Text size="xs" c="dimmed">
                        {metric?.description || category.description}
                      </Text>
                    </div>
                  );
                })}
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  );

  const DetailedAnalysis = () => (
    <Paper withBorder p="xl" radius="md">
      <Group justify="space-between" mb="lg">
        <div>
          <Title order={3} mb="xs">
            Análise Detalhada
          </Title>
          <Text c="dimmed" size="sm">
            Análise profunda de cada arquitetura com trade-offs e casos de uso
          </Text>
        </div>

        <Badge variant="light" color="blue">
          {filteredArchitectures.length} arquiteturas
        </Badge>
      </Group>

      <Grid>
        {filteredArchitectures.map(arch => {
          const avgScore =
            arch.metrics.reduce((sum, m) => sum + m.value, 0) /
            arch.metrics.length;
          const topMetric = arch.metrics.reduce((max, m) =>
            m.value > max.value ? m : max
          );
          const worstMetric = arch.metrics.reduce((min, m) =>
            m.value < min.value ? m : min
          );

          return (
            <Grid.Col key={arch.name} span={{ base: 12, lg: 6 }}>
              <Card withBorder p="xl" style={{ height: '100%' }}>
                {/* Header */}
                <Group justify="space-between" mb="lg">
                  <div>
                    <Title order={4} mb="xs">
                      {arch.name}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {arch.description}
                    </Text>
                  </div>

                  <Group gap="xs">
                    <Badge
                      variant="light"
                      color={
                        avgScore >= 7
                          ? 'green'
                          : avgScore >= 4
                            ? 'yellow'
                            : 'red'
                      }
                    >
                      Score: {avgScore.toFixed(1)}/10
                    </Badge>
                    <Badge variant="light" color="blue">
                      {arch.metrics.length} métricas
                    </Badge>
                  </Group>
                </Group>

                {/* Quick Stats */}
                <Group mb="lg" gap="md">
                  <Card withBorder p="sm" style={{ flex: 1 }}>
                    <Text size="xs" c="dimmed" mb={4}>
                      Melhor Métrica
                    </Text>
                    <Group gap="xs">
                      <ThemeIcon
                        size={24}
                        radius="sm"
                        variant="light"
                        color="green"
                      >
                        <IconCheck size={14} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={600}>
                          {topMetric.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {topMetric.value}/10
                        </Text>
                      </div>
                    </Group>
                  </Card>

                  <Card withBorder p="sm" style={{ flex: 1 }}>
                    <Text size="xs" c="dimmed" mb={4}>
                      Pior Métrica
                    </Text>
                    <Group gap="xs">
                      <ThemeIcon
                        size={24}
                        radius="sm"
                        variant="light"
                        color="red"
                      >
                        <IconX size={14} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={600}>
                          {worstMetric.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {worstMetric.value}/10
                        </Text>
                      </div>
                    </Group>
                  </Card>
                </Group>

                {/* Analysis Sections */}
                <Stack gap="lg">
                  {/* Pros & Cons Side by Side */}
                  <Grid>
                    <Grid.Col span={6}>
                      <Card withBorder p="md" style={{ height: '100%' }}>
                        <Group mb="sm">
                          <ThemeIcon
                            size={20}
                            radius="sm"
                            variant="light"
                            color="green"
                          >
                            <IconCheck size={12} />
                          </ThemeIcon>
                          <Text size="sm" fw={600} c="green">
                            Vantagens ({arch.pros.length})
                          </Text>
                        </Group>
                        <List size="sm" spacing="xs">
                          {arch.pros.map((pro, index) => (
                            <List.Item key={index} c="dimmed">
                              {pro}
                            </List.Item>
                          ))}
                        </List>
                      </Card>
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <Card withBorder p="md" style={{ height: '100%' }}>
                        <Group mb="sm">
                          <ThemeIcon
                            size={20}
                            radius="sm"
                            variant="light"
                            color="red"
                          >
                            <IconX size={12} />
                          </ThemeIcon>
                          <Text size="sm" fw={600} c="red">
                            Desvantagens ({arch.cons.length})
                          </Text>
                        </Group>
                        <List size="sm" spacing="xs">
                          {arch.cons.map((con, index) => (
                            <List.Item key={index} c="dimmed">
                              {con}
                            </List.Item>
                          ))}
                        </List>
                      </Card>
                    </Grid.Col>
                  </Grid>

                  {/* Use Cases */}
                  <Grid>
                    <Grid.Col span={6}>
                      <Card withBorder p="md" style={{ height: '100%' }}>
                        <Group mb="sm">
                          <ThemeIcon
                            size={20}
                            radius="sm"
                            variant="light"
                            color="blue"
                          >
                            <IconTarget size={12} />
                          </ThemeIcon>
                          <Text size="sm" fw={600} c="blue">
                            Melhor para ({arch.bestFor.length})
                          </Text>
                        </Group>
                        <List size="sm" spacing="xs">
                          {arch.bestFor.map((item, index) => (
                            <List.Item key={index} c="dimmed">
                              {item}
                            </List.Item>
                          ))}
                        </List>
                      </Card>
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <Card withBorder p="md" style={{ height: '100%' }}>
                        <Group mb="sm">
                          <ThemeIcon
                            size={20}
                            radius="sm"
                            variant="light"
                            color="orange"
                          >
                            <IconAlertTriangle size={12} />
                          </ThemeIcon>
                          <Text size="sm" fw={600} c="orange">
                            Evite quando ({arch.avoidWhen.length})
                          </Text>
                        </Group>
                        <List size="sm" spacing="xs">
                          {arch.avoidWhen.map((item, index) => (
                            <List.Item key={index} c="dimmed">
                              {item}
                            </List.Item>
                          ))}
                        </List>
                      </Card>
                    </Grid.Col>
                  </Grid>

                  {/* Metrics Summary */}
                  <Card withBorder p="md">
                    <Text size="sm" fw={600} mb="sm">
                      Resumo das Métricas
                    </Text>
                    <Grid>
                      {arch.metrics.map(metric => {
                        const category = metricCategories.find(
                          cat => cat.name === metric.name
                        );
                        return (
                          <Grid.Col key={metric.name} span={{ base: 6, md: 4 }}>
                            <Group gap="xs">
                              <ThemeIcon
                                size={16}
                                radius="sm"
                                variant="light"
                                color={
                                  category?.color as
                                    | 'blue'
                                    | 'green'
                                    | 'purple'
                                    | 'orange'
                                    | 'red'
                                }
                              >
                                {category?.icon}
                              </ThemeIcon>
                              <div style={{ flex: 1 }}>
                                <Text size="xs" fw={500}>
                                  {metric.name}
                                </Text>
                                <Progress
                                  value={metric.value * 10}
                                  color={
                                    category?.color as
                                      | 'blue'
                                      | 'green'
                                      | 'purple'
                                      | 'orange'
                                      | 'red'
                                  }
                                  size="xs"
                                />
                              </div>
                              <Badge
                                size="xs"
                                variant="light"
                                color={
                                  metric.value >= 7
                                    ? 'green'
                                    : metric.value >= 4
                                      ? 'yellow'
                                      : 'red'
                                }
                              >
                                {metric.value}/10
                              </Badge>
                            </Group>
                          </Grid.Col>
                        );
                      })}
                    </Grid>
                  </Card>
                </Stack>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Paper>
  );

  const DecisionMatrix = () => (
    <Paper withBorder p="xl" radius="md">
      <Title order={3} mb="lg">
        Matriz de Decisão
      </Title>

      <Text size="sm" c="dimmed" mb="lg">
        Use esta matriz para escolher a arquitetura baseada no seu contexto
      </Text>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Contexto do Projeto
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>MVP/Protótipo:</strong> Clean Architecture pode ser
                over-engineering
              </List.Item>
              <List.Item>
                <strong>Projeto Complexo:</strong> Clean Architecture é ideal
              </List.Item>
              <List.Item>
                <strong>Time Júnior:</strong> Considere arquiteturas mais
                simples
              </List.Item>
              <List.Item>
                <strong>Performance Crítica:</strong> Avalie o overhead
              </List.Item>
              <List.Item>
                <strong>Longo Prazo:</strong> Clean Architecture compensa
              </List.Item>
            </List>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Critérios de Escolha
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Testes Importantes:</strong> Clean Architecture
              </List.Item>
              <List.Item>
                <strong>Migrações Frequentes:</strong> Clean Architecture
              </List.Item>
              <List.Item>
                <strong>Time Pequeno:</strong> Arquiteturas mais simples
              </List.Item>
              <List.Item>
                <strong>Deadline Apertado:</strong> Evite complexidade
              </List.Item>
              <List.Item>
                <strong>Múltiplos Frontends:</strong> Clean Architecture
              </List.Item>
            </List>
          </Card>
        </Grid.Col>
      </Grid>
    </Paper>
  );

  return (
    <Stack gap="xl">
      <div>
        <Title order={2} mb="lg">
          Comparação de Arquiteturas
        </Title>
        <Text c="dimmed">
          Compare diferentes arquiteturas baseado em métricas práticas
        </Text>
      </div>

      {isMobile ? (
        <Tabs value={activeTab} onChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab value="overview" leftSection={<IconChartBar size={16} />}>
              Visão Geral
            </Tabs.Tab>
            <Tabs.Tab value="metrics" leftSection={<IconTarget size={16} />}>
              Métricas
            </Tabs.Tab>
            <Tabs.Tab value="analysis" leftSection={<IconList size={16} />}>
              Análise
            </Tabs.Tab>
            <Tabs.Tab value="matrix" leftSection={<IconTable size={16} />}>
              Decisão
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" pt="md">
            <OverviewSection />
          </Tabs.Panel>

          <Tabs.Panel value="metrics" pt="md">
            <MetricsComparison />
          </Tabs.Panel>

          <Tabs.Panel value="analysis" pt="md">
            <DetailedAnalysis />
          </Tabs.Panel>

          <Tabs.Panel value="matrix" pt="md">
            <DecisionMatrix />
          </Tabs.Panel>
        </Tabs>
      ) : (
        <>
          <OverviewSection />
          <MetricsComparison />
          <DetailedAnalysis />
          <DecisionMatrix />
        </>
      )}
    </Stack>
  );
};

export default ArchitectureComparison;
