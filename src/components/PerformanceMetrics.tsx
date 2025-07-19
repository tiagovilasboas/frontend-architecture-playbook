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
} from '@mantine/core';
import {
  IconClock,
  IconGauge,
  IconDatabase,
  IconNetwork,
  IconDeviceMobile,
  IconBulb,
  IconAlertTriangle,
} from '@tabler/icons-react';

interface PerformanceMetric {
  name: string;
  value: number; // 0-100
  unit: string;
  description: string;
  impact: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
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
          Análise Detalhada
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="md">
                <IconClock
                  size={20}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Tempo de Carregamento
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Bundle size inicial</List.Item>
                <List.Item>Lazy loading de componentes</List.Item>
                <List.Item>Code splitting por rota</List.Item>
                <List.Item>Tree shaking de dependências</List.Item>
                <List.Item>Compressão de assets</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="md">
                <IconNetwork
                  size={20}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Requisições de Rede
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Número de requests</List.Item>
                <List.Item>Tamanho dos payloads</List.Item>
                <List.Item>Cache de dados</List.Item>
                <List.Item>Otimização de queries</List.Item>
                <List.Item>CDN e assets</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="md">
                <IconDatabase
                  size={20}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Processamento
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Uso de CPU</List.Item>
                <List.Item>Renderização de componentes</List.Item>
                <List.Item>Virtualização de listas</List.Item>
                <List.Item>Memoização de cálculos</List.Item>
                <List.Item>Web Workers</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="md">
                <IconDeviceMobile
                  size={20}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Mobile Performance
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Responsividade</List.Item>
                <List.Item>Touch interactions</List.Item>
                <List.Item>Battery consumption</List.Item>
                <List.Item>Offline capabilities</List.Item>
                <List.Item>Progressive enhancement</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Recommendations */}
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Recomendações de Otimização
        </Title>

        <Grid>
          {recommendations.map((rec, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <Alert color="green" icon={<IconBulb size={16} />} radius="md">
                <Text size="sm">{rec}</Text>
              </Alert>
            </Grid.Col>
          ))}
        </Grid>
      </Paper>

      {/* Warnings */}
      {warnings.length > 0 && (
        <Paper withBorder p="xl" radius="md">
          <Title order={3} mb="lg">
            <IconAlertTriangle
              size={28}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Pontos de Atenção
          </Title>

          <Grid>
            {warnings.map((warning, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <Alert
                  color="orange"
                  icon={<IconAlertTriangle size={16} />}
                  radius="md"
                >
                  <Text size="sm">{warning}</Text>
                </Alert>
              </Grid.Col>
            ))}
          </Grid>
        </Paper>
      )}

      {/* Performance Tips */}
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          💡 Dicas de Performance
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="md">
                Otimizações Imediatas
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Use React.memo() para componentes pesados</List.Item>
                <List.Item>Implemente lazy loading de imagens</List.Item>
                <List.Item>Otimize imports com tree shaking</List.Item>
                <List.Item>Use Suspense para code splitting</List.Item>
                <List.Item>Implemente service workers para cache</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="md">
                Monitoramento
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Core Web Vitals (LCP, FID, CLS)</List.Item>
                <List.Item>Bundle analyzer para identificar gargalos</List.Item>
                <List.Item>Performance monitoring em produção</List.Item>
                <List.Item>User experience metrics</List.Item>
                <List.Item>A/B testing de otimizações</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default PerformanceMetrics;
