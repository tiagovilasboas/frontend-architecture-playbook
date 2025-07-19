import React, { useState } from 'react';
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
  Tabs,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconCheck,
  IconX,
  IconAlertTriangle,
  IconClock,
  IconUsers,
  IconCode,
  IconTestPipe,
  IconScale,
  IconChartBar,
  IconList,
  IconTable,
} from '@tabler/icons-react';

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

const ArchitectureComparison: React.FC<ArchitectureComparisonProps> = ({
  architectures,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeTab, setActiveTab] = useState<string | null>('metrics');

  const metricCategories = [
    {
      name: 'Performance',
      icon: <IconClock size={16} />,
      description: 'Velocidade e eficiência',
    },
    {
      name: 'Manutenibilidade',
      icon: <IconCode size={16} />,
      description: 'Facilidade de manutenção',
    },
    {
      name: 'Testabilidade',
      icon: <IconTestPipe size={16} />,
      description: 'Facilidade de testes',
    },
    {
      name: 'Escalabilidade',
      icon: <IconScale size={16} />,
      description: 'Capacidade de crescimento',
    },
    {
      name: 'Complexidade',
      icon: <IconUsers size={16} />,
      description: 'Curva de aprendizado',
    },
  ];

  const MetricsComparison = () => (
    <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="md">
      <Title order={3} mb="lg">
        Métricas Comparativas
      </Title>

      <Grid>
        {architectures.map(arch => (
          <Grid.Col key={arch.name} span={{ base: 12, md: 6, lg: 4 }}>
            <Card withBorder p={isMobile ? 'sm' : 'md'}>
              <Title order={4} mb="sm">
                {arch.name}
              </Title>
              <Text size="sm" c="dimmed" mb="md">
                {arch.description}
              </Text>

              <Stack gap="xs">
                {metricCategories.map(category => {
                  const metric = arch.metrics.find(
                    m => m.name === category.name
                  );
                  const value = metric?.value || 0;

                  return (
                    <div key={category.name}>
                      <Group justify="space-between" mb={2}>
                        <Group gap="xs">
                          {category.icon}
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
                          value >= 7 ? 'green' : value >= 4 ? 'yellow' : 'red'
                        }
                        size="sm"
                      />
                      <Text size="xs" c="dimmed" mt={2}>
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
    <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="md">
      <Title order={3} mb="lg">
        Análise Detalhada
      </Title>

      <Grid>
        {architectures.map(arch => (
          <Grid.Col key={arch.name} span={{ base: 12, md: 6 }}>
            <Card withBorder p={isMobile ? 'sm' : 'md'}>
              <Title order={4} mb="sm">
                {arch.name}
              </Title>

              <Stack gap="sm">
                {/* Pros */}
                <div>
                  <Group mb="xs">
                    <IconCheck size={16} color="green" />
                    <Text size="sm" fw={600}>
                      Vantagens
                    </Text>
                  </Group>
                  <List size="sm" spacing="xs">
                    {arch.pros.map((pro, index) => (
                      <List.Item key={index} c="dimmed">
                        {pro}
                      </List.Item>
                    ))}
                  </List>
                </div>

                {/* Cons */}
                <div>
                  <Group mb="xs">
                    <IconX size={16} color="red" />
                    <Text size="sm" fw={600}>
                      Desvantagens
                    </Text>
                  </Group>
                  <List size="sm" spacing="xs">
                    {arch.cons.map((con, index) => (
                      <List.Item key={index} c="dimmed">
                        {con}
                      </List.Item>
                    ))}
                  </List>
                </div>

                {/* Best For */}
                <div>
                  <Group mb="xs">
                    <IconCheck size={16} color="blue" />
                    <Text size="sm" fw={600}>
                      Melhor para
                    </Text>
                  </Group>
                  <List size="sm" spacing="xs">
                    {arch.bestFor.map((item, index) => (
                      <List.Item key={index} c="dimmed">
                        {item}
                      </List.Item>
                    ))}
                  </List>
                </div>

                {/* Avoid When */}
                <div>
                  <Group mb="xs">
                    <IconAlertTriangle size={16} color="orange" />
                    <Text size="sm" fw={600}>
                      Evite quando
                    </Text>
                  </Group>
                  <List size="sm" spacing="xs">
                    {arch.avoidWhen.map((item, index) => (
                      <List.Item key={index} c="dimmed">
                        {item}
                      </List.Item>
                    ))}
                  </List>
                </div>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Paper>
  );

  const DecisionMatrix = () => (
    <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="md">
      <Title order={3} mb="lg">
        Matriz de Decisão
      </Title>

      <Text size="sm" c="dimmed" mb="lg">
        Use esta matriz para escolher a arquitetura baseada no seu contexto
      </Text>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder p={isMobile ? 'sm' : 'md'}>
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
          <Card withBorder p={isMobile ? 'sm' : 'md'}>
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
    <Stack gap={isMobile ? 'md' : 'xl'}>
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
            <Tabs.Tab value="metrics" leftSection={<IconChartBar size={16} />}>
              Métricas
            </Tabs.Tab>
            <Tabs.Tab value="analysis" leftSection={<IconList size={16} />}>
              Análise
            </Tabs.Tab>
            <Tabs.Tab value="matrix" leftSection={<IconTable size={16} />}>
              Decisão
            </Tabs.Tab>
          </Tabs.List>

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
          <MetricsComparison />
          <DetailedAnalysis />
          <DecisionMatrix />
        </>
      )}
    </Stack>
  );
};

export default ArchitectureComparison;
