import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Group,
  ThemeIcon,
  Card,
  Badge,
  SimpleGrid,
  Alert,
} from '@mantine/core';
import {
  IconTrendingUp,
  IconBulb,
  IconCheck,
  IconX,
  IconMinus,
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

  // Cases reais por arquitetura VALIDADOS do repositório oficial
  const validatedCases = {
    spa: [
      {
        company: 'Facebook',
        metric: 'Requests',
        result: '60% redução requests',
        source: 'https://code.facebook.com/posts/557147474482256',
        validated: true,
      },
      {
        company: 'Shopify',
        metric: 'Loading',
        result: '50% melhoria carregamento',
        source:
          'https://shopify.engineering/how-17-lines-of-code-improved-shopify-com-loading-by-50',
        validated: true,
      },
      {
        company: 'Sentry',
        metric: 'Bundle Size',
        result: '35% redução bundle',
        source:
          'https://sentry.engineering/blog/session-replay-sdk-bundle-size-optimizations',
        validated: true,
      },
    ],
    ssr: [
      {
        company: 'Goibibo',
        metric: 'PWA Conversions',
        result: '60% melhoria conversões',
        source: 'https://web.dev/goibibo/',
        validated: true,
      },
      {
        company: 'Tokopedia',
        metric: 'Click-through Rate',
        result: '35% melhoria CTR',
        source: 'https://web.dev/tokopedia/',
        validated: true,
      },
      {
        company: 'Rakuten 24',
        metric: 'User Retention',
        result: '450% aumento retenção',
        source: 'https://web.dev/rakuten-24/',
        validated: true,
      },
    ],
    ssg: [
      {
        company: '1Password',
        metric: 'Build Time',
        result: '90% redução build time',
        source: 'https://blog.1password.com/new-extension-build-system/',
        validated: true,
      },
      {
        company: 'Sentry',
        metric: 'Bundle Size',
        result: '20% redução bundle',
        source:
          'https://sentry.engineering/blog/js-browser-sdk-bundle-size-matters',
        validated: true,
      },
    ],
    microFrontends: [
      {
        company: 'Facebook',
        metric: 'Requests',
        result: '60% redução requests',
        source: 'https://code.facebook.com/posts/557147474482256',
        validated: true,
      },
      {
        company: 'Shopify',
        metric: 'Loading',
        result: '50% melhoria carregamento',
        source:
          'https://shopify.engineering/how-17-lines-of-code-improved-shopify-com-loading-by-50',
        validated: true,
      },
    ],
    pwa: [
      {
        company: 'Goibibo',
        metric: 'Conversions',
        result: '60% melhoria conversões',
        source: 'https://web.dev/goibibo/',
        validated: true,
      },
      {
        company: 'Rakuten 24',
        metric: 'User Retention',
        result: '450% aumento retenção',
        source: 'https://web.dev/rakuten-24/',
        validated: true,
      },
    ],
    cleanArchitecture: [
      {
        company: 'Sentry',
        metric: 'Bundle Size',
        result: '35% redução bundle',
        source:
          'https://sentry.engineering/blog/session-replay-sdk-bundle-size-optimizations',
        validated: true,
      },
      {
        company: '1Password',
        metric: 'Build Time',
        result: '90% redução build time',
        source: 'https://blog.1password.com/new-extension-build-system/',
        validated: true,
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
          Análise comparativa baseada em cases reais validados do repositório
          oficial
        </Text>
      </div>

      {/* Disclaimer sobre métricas */}
      <Alert color="green" variant="light" icon={<IconCheck size={16} />}>
        <Text size="sm">
          <strong>✅ Métricas Validadas:</strong> Todas as métricas abaixo são
          baseadas em estudos técnicos validados do repositório oficial
          frontend-case-studies. Apenas métricas com fontes verificáveis são
          apresentadas.
        </Text>
      </Alert>

      {/* Real Cases by Architecture */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Cases Reais por Arquitetura (Validados)</Title>
              <Text c="dimmed">
                Exemplos práticos de empresas que implementaram cada arquitetura
                - baseados no repositório oficial
              </Text>
            </div>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            {Object.entries(validatedCases).map(([architecture, cases]) => (
              <Card key={architecture} withBorder p="md" radius="md">
                <Stack gap="md">
                  <Group>
                    <Badge variant="light" color="blue" size="lg">
                      {architecture.toUpperCase()}
                    </Badge>
                  </Group>

                  <Stack gap="sm">
                    {cases.map((case_, index) => (
                      <Card key={index} withBorder p="sm" radius="sm">
                        <Stack gap="xs">
                          <Group justify="space-between">
                            <Badge variant="light" color="green" size="xs">
                              {case_.company}
                            </Badge>
                            {case_.validated && (
                              <Badge variant="light" color="green" size="xs">
                                ✅ Validado
                              </Badge>
                            )}
                          </Group>
                          <Text size="sm" fw={600}>
                            {case_.metric}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {case_.result}
                          </Text>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Metrics Comparison */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconTrendingUp size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Comparação de Métricas</Title>
              <Text c="dimmed">
                Análise detalhada de cada métrica por arquitetura
              </Text>
            </div>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            {metrics.map((metric, index) => (
              <Card key={index} withBorder p="md" radius="md">
                <Stack gap="md">
                  <div>
                    <Title order={4} mb="xs">
                      {metric.name}
                    </Title>
                    {metric.description && (
                      <Text size="sm" c="dimmed">
                        {metric.description}
                      </Text>
                    )}
                  </div>

                  <Stack gap="sm">
                    {Object.entries(metric)
                      .filter(
                        ([key]) => key !== 'name' && key !== 'description'
                      )
                      .map(([arch, score]) => (
                        <Group key={arch} justify="space-between">
                          <Text size="sm" tt="capitalize">
                            {arch.replace(/([A-Z])/g, ' $1').trim()}
                          </Text>
                          <Badge
                            variant="light"
                            color={getScoreColor(score)}
                            size="sm"
                          >
                            {getScoreIcon(score)}
                            {score}
                          </Badge>
                        </Group>
                      ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Insights */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Insights Principais</Title>
              <Text c="dimmed">
                O que aprendemos com os cases reais validados
              </Text>
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
                Facebook reduziu 60% dos requests. Shopify melhorou 50% no
                carregamento. Performance vira dinheiro real.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="green">
                  <IconCheck size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Bundle Size Importa</Title>
                  <Text size="sm" c="dimmed">
                    Menor = mais rápido
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Sentry reduziu 35% no bundle size. 1Password reduziu 90% no
                build time. Otimização de bundle é fundamental.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="orange">
                  <IconTrendingUp size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>PWA Funciona</Title>
                  <Text size="sm" c="dimmed">
                    Conversões reais
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Goibibo melhorou 60% em conversões. Rakuten 24 aumentou 450% na
                retenção. PWA gera resultados reais.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="purple">
                  <IconCheck size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Validação Importa</Title>
                  <Text size="sm" c="dimmed">
                    Métricas reais
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Todas as métricas são baseadas em estudos técnicos validados do
                repositório oficial. Transparência é fundamental.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default ArchitectureComparison;
