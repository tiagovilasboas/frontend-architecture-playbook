import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Table,
  Badge,
  Group,
  Card,
  Alert,
  ThemeIcon,
  SimpleGrid,
} from '@mantine/core';
import {
  IconCheck,
  IconX,
  IconMinus,
  IconTrendingUp,
  IconAlertTriangle,
  IconBulb,
} from '@tabler/icons-react';

interface ArchitectureMetric {
  name: string;
  spa: string;
  ssr: string;
  ssg: string;
  microFrontends: string;
  pwa: string;
  cleanArchitecture: string;
  description?: string;
}

interface ArchitectureComparisonProps {
  metrics: ArchitectureMetric[];
}

const ArchitectureComparison: React.FC<ArchitectureComparisonProps> = ({
  metrics,
}) => {
  const getScoreColor = (score: string) => {
    if (score === 'Excelente') return 'green';
    if (score === 'Bom') return 'blue';
    if (score === 'Regular') return 'yellow';
    if (score === 'Ruim') return 'red';
    return 'gray';
  };

  const getScoreIcon = (score: string) => {
    if (score === 'Excelente') return <IconCheck size={14} />;
    if (score === 'Bom') return <IconTrendingUp size={14} />;
    if (score === 'Regular') return <IconMinus size={14} />;
    if (score === 'Ruim') return <IconX size={14} />;
    return null;
  };

  // Cases reais por arquitetura
  const realCases = {
    spa: [
      {
        company: 'Netflix',
        metric: 'Smart TV Performance',
        result: '70% redução TTI',
      },
      {
        company: 'Spotify',
        metric: 'Web Player',
        result: '60% redução bundle',
      },
      {
        company: 'Tinder',
        metric: 'Mobile App',
        result: '30% redução crashes',
      },
    ],
    ssr: [
      {
        company: 'Pinterest',
        metric: 'SEO & Performance',
        result: '44% aumento receita',
      },
      { company: 'Twitter', metric: 'PWA Lite', result: '70% redução dados' },
      {
        company: 'Walmart',
        metric: 'Black Friday',
        result: '98% conversões mobile',
      },
    ],
    ssg: [
      {
        company: 'GOV.UK',
        metric: 'Acessibilidade',
        result: 'WCAG AAA compliance',
      },
      {
        company: 'Booking.com',
        metric: 'A/B Testing',
        result: 'Milhões em receita',
      },
    ],
    microFrontends: [
      {
        company: 'Spotify',
        metric: 'Web Player',
        result: 'Modularização completa',
      },
      { company: 'Netflix', metric: 'Smart TV', result: '200M+ dispositivos' },
    ],
    pwa: [
      {
        company: 'Pinterest',
        metric: 'Mobile PWA',
        result: '44% aumento receita',
      },
      {
        company: 'Twitter',
        metric: 'Twitter Lite',
        result: '65% mais sessões',
      },
      { company: 'Walmart', metric: 'E-commerce', result: '98% conversões' },
    ],
    cleanArchitecture: [
      { company: 'Slack', metric: 'Desktop App', result: '50% menos memória' },
      {
        company: 'Uber',
        metric: 'Real-time Maps',
        result: '70% redução renderização',
      },
    ],
  };

  return (
    <Stack gap="xl">
      <div>
        <Title order={2} mb="lg">
          <IconTrendingUp
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Comparação de Arquiteturas
        </Title>
        <Text c="dimmed">
          Análise comparativa baseada em cases reais de empresas
        </Text>
      </div>

      {/* Real Cases by Architecture */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Cases Reais por Arquitetura</Title>
              <Text c="dimmed">
                Exemplos práticos de empresas que implementaram cada arquitetura
              </Text>
            </div>
          </Group>

          <div style={{ overflowX: 'auto' }}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Arquitetura</Table.Th>
                  <Table.Th>Empresa</Table.Th>
                  <Table.Th>Métrica</Table.Th>
                  <Table.Th>Resultado</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {Object.entries(realCases).map(([architecture, cases]) =>
                  cases.map((case_, index) => (
                    <Table.Tr key={`${architecture}-${index}`}>
                      <Table.Td>
                        <Badge variant="light" color="blue">
                          {architecture.toUpperCase()}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={600}>{case_.company}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{case_.metric}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm" c="green" fw={500}>
                          {case_.result}
                        </Text>
                      </Table.Td>
                    </Table.Tr>
                  ))
                )}
              </Table.Tbody>
            </Table>
          </div>
        </Stack>
      </Paper>

      {/* Comparison Matrix */}
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          Matriz de Comparação
        </Title>

        <div style={{ overflowX: 'auto' }}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Métrica</Table.Th>
                <Table.Th>SPA</Table.Th>
                <Table.Th>SSR</Table.Th>
                <Table.Th>SSG</Table.Th>
                <Table.Th>Micro Frontends</Table.Th>
                <Table.Th>PWA</Table.Th>
                <Table.Th>Clean Architecture</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {metrics.map((metric, index) => (
                <Table.Tr key={index}>
                  <Table.Td>
                    <div>
                      <Text fw={600}>{metric.name}</Text>
                      {metric.description && (
                        <Text size="xs" c="dimmed">
                          {metric.description}
                        </Text>
                      )}
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      {getScoreIcon(metric.spa)}
                      <Badge
                        variant="light"
                        color={getScoreColor(metric.spa)}
                        size="sm"
                      >
                        {metric.spa}
                      </Badge>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      {getScoreIcon(metric.ssr)}
                      <Badge
                        variant="light"
                        color={getScoreColor(metric.ssr)}
                        size="sm"
                      >
                        {metric.ssr}
                      </Badge>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      {getScoreIcon(metric.ssg)}
                      <Badge
                        variant="light"
                        color={getScoreColor(metric.ssg)}
                        size="sm"
                      >
                        {metric.ssg}
                      </Badge>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      {getScoreIcon(metric.microFrontends)}
                      <Badge
                        variant="light"
                        color={getScoreColor(metric.microFrontends)}
                        size="sm"
                      >
                        {metric.microFrontends}
                      </Badge>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      {getScoreIcon(metric.pwa)}
                      <Badge
                        variant="light"
                        color={getScoreColor(metric.pwa)}
                        size="sm"
                      >
                        {metric.pwa}
                      </Badge>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      {getScoreIcon(metric.cleanArchitecture)}
                      <Badge
                        variant="light"
                        color={getScoreColor(metric.cleanArchitecture)}
                        size="sm"
                      >
                        {metric.cleanArchitecture}
                      </Badge>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </Paper>

      {/* Key Insights */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Insights Principais</Title>
              <Text c="dimmed">O que aprendemos com os cases reais</Text>
            </div>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="blue">
                  <IconTrendingUp size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Performance é Crítica</Title>
                  <Text size="sm" c="dimmed">
                    Cada segundo conta
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Pinterest aumentou 44% na receita otimizando performance.
                Netflix reduziu 70% no tempo de carregamento. Performance vira
                dinheiro real.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="green">
                  <IconCheck size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Escala Importa</Title>
                  <Text size="sm" c="dimmed">
                    Milhões de usuários
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                WhatsApp suporta 2 bilhões de usuários. Netflix roda em 200
                milhões de dispositivos. Arquitetura certa escala.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="orange">
                  <IconAlertTriangle size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>UX é Conversão</Title>
                  <Text size="sm" c="dimmed">
                    Detalhes fazem diferença
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Google testou 41 tons de azul e ganhou milhões. Walmart aumentou
                98% conversões no mobile. UX vira dinheiro.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="purple">
                  <IconBulb size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Arquitetura Certa</Title>
                  <Text size="sm" c="dimmed">
                    Resolve problemas reais
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Slack economizou 50% de memória. Uber reduziu 70% no tempo de
                renderização. Arquitetura resolve problemas.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Recommendations */}
      <Alert color="blue" icon={<IconBulb size={16} />} radius="md">
        <Text fw={600} size="sm" mb="xs">
          💡 Dica Técnica:
        </Text>
        <Text size="sm">
          <strong>Escolha baseada em problemas reais</strong>, não em
          tendências. Cada arquitetura resolve problemas específicos. Pinterest
          precisava de SEO + performance = SSR. Netflix precisava de escala =
          SPA otimizado.
        </Text>
      </Alert>
    </Stack>
  );
};

export default ArchitectureComparison;
