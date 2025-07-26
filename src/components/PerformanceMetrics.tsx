import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Grid,
  Card,
  Badge,
  Group,
  Progress,
  List,
  Alert,
  SimpleGrid,
  ThemeIcon,
} from '@mantine/core';
import {
  IconClock,
  IconGauge,
  IconDatabase,
  IconNetwork,
  IconDeviceMobile,
  IconBulb,
  IconAlertTriangle,
  IconTrendingUp,
} from '@tabler/icons-react';

interface PerformanceMetric {
  name: string;
  value: number; // 0-100
  unit: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  company?: string;
  before?: string;
  after?: string;
}

interface PerformanceMetricsProps {
  architecture: string;
  metrics: PerformanceMetric[];
  recommendations: string[];
  warnings: string[];
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  architecture,
  metrics,
  recommendations,
  warnings,
}) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'green';
      case 'negative':
        return 'red';
      default:
        return 'blue';
    }
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'positive':
        return '📈';
      case 'negative':
        return '📉';
      default:
        return '➡️';
    }
  };

  // Cases reais de performance
  const realCases = [
    {
      company: 'Pinterest',
      metric: 'Bundle Size',
      before: '2.5MB',
      after: '200KB',
      improvement: '92%',
      impact: 'Aumento de 44% na receita por usuário',
    },
    {
      company: 'Netflix',
      metric: 'Time to Interactive',
      before: '30s',
      after: '9s',
      improvement: '70%',
      impact: 'Suporte a 200M+ dispositivos',
    },
    {
      company: 'Spotify',
      metric: 'Bundle Size',
      before: '5MB',
      after: '2MB',
      improvement: '60%',
      impact: 'Tempo até primeiro play -40%',
    },
    {
      company: 'Tinder',
      metric: 'Swipe Response',
      before: '500ms',
      after: '350ms',
      improvement: '30%',
      impact: '-25% crashes de performance',
    },
    {
      company: 'Slack',
      metric: 'Memory Usage',
      before: '500MB',
      after: '250MB',
      improvement: '50%',
      impact: '-60% travamentos',
    },
    {
      company: 'Uber',
      metric: 'Map Rendering',
      before: '2s',
      after: '600ms',
      improvement: '70%',
      impact: '10x mais motoristas sem lag',
    },
  ];

  return (
    <Stack gap="xl">
      <div>
        <Title order={2} mb="lg">
          <IconGauge
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Métricas de Performance - {architecture}
        </Title>
        <Text c="dimmed">
          Análise detalhada do impacto na performance desta arquitetura
        </Text>
      </div>

      {/* Real Cases Performance */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconTrendingUp size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Cases Reais de Performance</Title>
              <Text c="dimmed">
                Métricas reais de empresas que otimizaram performance
              </Text>
            </div>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            {realCases.map((case_, index) => (
              <Card key={index} withBorder p="md" radius="md">
                <Stack gap="sm">
                  <Group justify="space-between">
                    <Badge variant="light" color="blue">
                      {case_.company}
                    </Badge>
                    <Badge variant="light" color="green">
                      {case_.improvement}
                    </Badge>
                  </Group>

                  <div>
                    <Text fw={600} size="sm" c="dimmed">
                      {case_.metric}
                    </Text>
                    <Group gap="xs" align="center">
                      <Text size="sm" c="red" fw={500}>
                        {case_.before}
                      </Text>
                      <Text size="sm">→</Text>
                      <Text size="sm" c="green" fw={500}>
                        {case_.after}
                      </Text>
                    </Group>
                  </div>

                  <Text size="xs" c="dimmed">
                    {case_.impact}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Key Metrics */}
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          Métricas Principais
        </Title>

        <Grid>
          {metrics.map(metric => (
            <Grid.Col key={metric.name} span={{ base: 12, md: 6, lg: 4 }}>
              <Card withBorder p="md">
                <Group mb="md">
                  {metric.icon}
                  <div>
                    <Title order={4}>{metric.name}</Title>
                    <Text size="sm" c="dimmed">
                      {metric.description}
                    </Text>
                  </div>
                </Group>

                <Group justify="space-between" mb="sm">
                  <Text size="lg" fw={600}>
                    {metric.value}
                    {metric.unit}
                  </Text>
                  <Badge
                    size="sm"
                    variant="light"
                    color={getImpactColor(metric.impact)}
                  >
                    {getImpactIcon(metric.impact)} {metric.impact}
                  </Badge>
                </Group>

                <Progress
                  value={metric.value}
                  color={getImpactColor(metric.impact)}
                  size="sm"
                />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Paper>

      {/* Performance Breakdown */}
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          Breakdown de Performance
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <Card withBorder p="md">
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconClock size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Tempo de Carregamento</Title>
                <Text size="sm" c="dimmed">
                  First Contentful Paint, Largest Contentful Paint
                </Text>
              </div>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>FCP {'<'} 1.8s (Bom)</List.Item>
              <List.Item>LCP {'<'} 2.5s (Bom)</List.Item>
              <List.Item>TTI {'<'} 3.8s (Bom)</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconDatabase size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Bundle Size</Title>
                <Text size="sm" c="dimmed">
                  JavaScript, CSS, Assets
                </Text>
              </div>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>JS inicial {'<'} 200KB</List.Item>
              <List.Item>CSS crítico {'<'} 50KB</List.Item>
              <List.Item>Total {'<'} 500KB</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconNetwork size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Network</Title>
                <Text size="sm" c="dimmed">
                  Requests, Compression, Caching
                </Text>
              </div>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>Requests {'<'} 50</List.Item>
              <List.Item>Gzip/Brotli ativo</List.Item>
              <List.Item>Cache otimizado</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconDeviceMobile size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Mobile</Title>
                <Text size="sm" c="dimmed">
                  Performance em dispositivos móveis
                </Text>
              </div>
            </Group>
            <List size="sm" spacing="xs">
              <List.Item>Score {'>'} 90</List.Item>
              <List.Item>3G otimizado</List.Item>
              <List.Item>Touch friendly</List.Item>
            </List>
          </Card>
        </SimpleGrid>
      </Paper>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <Paper withBorder p="xl" radius="md">
          <Title order={3} mb="lg">
            <IconBulb
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Recomendações
          </Title>
          <List spacing="md">
            {recommendations.map((rec, index) => (
              <List.Item key={index}>
                <Text>{rec}</Text>
              </List.Item>
            ))}
          </List>
        </Paper>
      )}

      {/* Warnings */}
      {warnings.length > 0 && (
        <Alert
          color="yellow"
          icon={<IconAlertTriangle size={16} />}
          radius="md"
        >
          <Title order={4} mb="sm">
            ⚠️ Atenção
          </Title>
          <List spacing="xs">
            {warnings.map((warning, index) => (
              <List.Item key={index}>
                <Text size="sm">{warning}</Text>
              </List.Item>
            ))}
          </List>
        </Alert>
      )}
    </Stack>
  );
};

export default PerformanceMetrics;
