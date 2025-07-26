import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Group,
  ThemeIcon,
  Alert,
  Card,
  List,
  Timeline,
  SimpleGrid,
} from '@mantine/core';
import {
  IconRocket,
  IconTarget,
  IconCheck,
  IconBulb,
  IconTrendingUp,
  IconCode,
  IconUsers,
  IconGauge,
} from '@tabler/icons-react';
import GuideNavigation from '../../components/GuideNavigation';

export default function ImplementationRoadmap() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Roadmap de Implementação: Como Empresas Reais Fizeram
        </Title>
        <Text size="lg" c="dimmed">
          Baseado em cases reais de Netflix, Spotify, Pinterest, Tinder e
          outros. Como implementar arquitetura front-end que escala.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconRocket size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Roadmap prático baseado em implementações reais
              </Text>
            </div>
          </Group>

          <Text>
            Este roadmap é baseado em <strong>cases reais</strong> de empresas
            que implementaram arquiteturas front-end com sucesso. Não é teoria,
            é prática pura.
          </Text>

          <Text>
            Cada fase tem <strong>métricas reais</strong>, problemas reais e
            soluções reais. Como Netflix otimizou para Smart TVs, como Spotify
            modularizou o web player, como Pinterest virou PWA.
          </Text>

          <Alert color="yellow" icon={<IconBulb size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              💡 Dica Técnica:
            </Text>
            <Text size="sm">
              <strong>Implementação gradual</strong> é melhor que big bang.
              Netflix começou com performance, depois escalou. Spotify
              modularizou aos poucos. Pinterest testou PWA antes de migrar tudo.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Phase 1: Foundation */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconTarget size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Fase 1: Fundação (0-3 meses)</Title>
              <Text c="dimmed">Performance e métricas básicas</Text>
            </div>
          </Group>

          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Performance Audit"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Pinterest fez: audit completo de performance
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  Bundle analyzer (Pinterest: 2.5MB → 200KB)
                </List.Item>
                <List.Item>Core Web Vitals (Netflix: 30s → 9s TTI)</List.Item>
                <List.Item>Mobile performance (Tinder: -25% crashes)</List.Item>
                <List.Item>User experience metrics</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Métricas de Negócio"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Google fez: métricas que importam
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Conversion rate (Google: 41 tons de azul)</List.Item>
                <List.Item>User engagement (Pinterest: +44% receita)</List.Item>
                <List.Item>Bounce rate (Walmart: +98% conversões)</List.Item>
                <List.Item>Session duration</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Infraestrutura Básica"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Spotify fez: base sólida
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>CI/CD pipeline (Spotify: deploys diários)</List.Item>
                <List.Item>Monitoring (Slack: -60% travamentos)</List.Item>
                <List.Item>Error tracking</List.Item>
                <List.Item>Performance monitoring</List.Item>
              </List>
            </Timeline.Item>
          </Timeline>

          <Alert color="green" icon={<IconTrendingUp size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              🎯 Resultado Esperado:
            </Text>
            <Text size="sm">
              <strong>Performance 20-30% melhor</strong>, métricas claras, base
              sólida para próximas fases. Como Pinterest: 40% redução tempo de
              carregamento.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Phase 2: Optimization */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconGauge size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Fase 2: Otimização (3-6 meses)</Title>
              <Text c="dimmed">Otimizações específicas baseadas em dados</Text>
            </div>
          </Group>

          <Timeline active={2} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Code Splitting"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Spotify fez: modularização inteligente
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  Route-based splitting (Spotify: 5MB → 2MB)
                </List.Item>
                <List.Item>Component lazy loading</List.Item>
                <List.Item>Vendor chunk optimization</List.Item>
                <List.Item>Dynamic imports</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Caching Strategy"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Netflix fez: cache inteligente
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Service workers (Pinterest: PWA completo)</List.Item>
                <List.Item>CDN optimization</List.Item>
                <List.Item>Browser caching</List.Item>
                <List.Item>API response caching</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Bundle Optimization"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Tinder fez: bundle enxuto
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Tree shaking (Tinder: -30% crashes)</List.Item>
                <List.Item>Minification</List.Item>
                <List.Item>Compression (Gzip/Brotli)</List.Item>
                <List.Item>Dead code elimination</List.Item>
              </List>
            </Timeline.Item>
          </Timeline>

          <Alert color="blue" icon={<IconGauge size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              🎯 Resultado Esperado:
            </Text>
            <Text size="sm">
              <strong>Bundle 50-70% menor</strong>, carregamento 40-60% mais
              rápido. Como Spotify: tempo até primeiro play -40%.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Phase 3: Architecture */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="purple">
              <IconCode size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Fase 3: Arquitetura (6-12 meses)</Title>
              <Text c="dimmed">
                Arquitetura escalável baseada em necessidades
              </Text>
            </div>
          </Group>

          <Timeline active={3} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Micro Frontends"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Spotify fez: modularização completa
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  Module federation (Spotify: player independente)
                </List.Item>
                <List.Item>Shared dependencies</List.Item>
                <List.Item>Independent deployments</List.Item>
                <List.Item>Team autonomy</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Clean Architecture"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Slack fez: separação de responsabilidades
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Domain separation (Slack: -50% memória)</List.Item>
                <List.Item>Dependency inversion</List.Item>
                <List.Item>Testability improvement</List.Item>
                <List.Item>Maintainability</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="PWA Implementation"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Pinterest fez: PWA completo
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Service workers (Pinterest: +44% receita)</List.Item>
                <List.Item>Offline capabilities</List.Item>
                <List.Item>App-like experience</List.Item>
                <List.Item>Push notifications</List.Item>
              </List>
            </Timeline.Item>
          </Timeline>

          <Alert color="purple" icon={<IconCode size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              🎯 Resultado Esperado:
            </Text>
            <Text size="sm">
              <strong>Arquitetura escalável</strong>, times autônomos,
              performance otimizada. Como Slack: 50% menos memória, Uber: 70%
              redução renderização.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Phase 4: Scale */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="orange">
              <IconUsers size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Fase 4: Escala (12+ meses)</Title>
              <Text c="dimmed">Otimizações para milhões de usuários</Text>
            </div>
          </Group>

          <Timeline active={4} bulletSize={24} lineWidth={2}>
            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Global Optimization"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Netflix fez: escala global
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>CDN global (Netflix: 200M+ dispositivos)</List.Item>
                <List.Item>Edge computing</List.Item>
                <List.Item>Regional optimization</List.Item>
                <List.Item>Load balancing</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Advanced Caching"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como WhatsApp fez: cache inteligente
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  Multi-level caching (WhatsApp: 2B+ usuários)
                </List.Item>
                <List.Item>Predictive loading</List.Item>
                <List.Item>Smart prefetching</List.Item>
                <List.Item>Cache invalidation</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Performance Monitoring"
            >
              <Text size="sm" c="dimmed" mb="md">
                Como Uber fez: monitoramento real-time
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  Real user monitoring (Uber: 10x mais motoristas)
                </List.Item>
                <List.Item>Performance budgets</List.Item>
                <List.Item>Alerting systems</List.Item>
                <List.Item>A/B testing</List.Item>
              </List>
            </Timeline.Item>
          </Timeline>

          <Alert color="orange" icon={<IconUsers size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              🎯 Resultado Esperado:
            </Text>
            <Text size="sm">
              <strong>Suporte a milhões de usuários</strong>, performance
              consistente, monitoramento proativo. Como WhatsApp: 2B+ usuários,
              Netflix: 200M+ dispositivos.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Real Cases Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconTrendingUp size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Cases Reais de Implementação</Title>
              <Text c="dimmed">
                Como empresas reais implementaram cada fase
              </Text>
            </div>
          </Group>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr
                  style={{
                    borderBottom: '1px solid var(--mantine-color-gray-3)',
                  }}
                >
                  <th style={{ padding: '12px', textAlign: 'left' }}>
                    Empresa
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 1</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 2</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 3</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 4</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>
                    Resultado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>
                    Pinterest
                  </td>
                  <td style={{ padding: '12px' }}>Performance audit</td>
                  <td style={{ padding: '12px' }}>PWA implementation</td>
                  <td style={{ padding: '12px' }}>Service workers</td>
                  <td style={{ padding: '12px' }}>Global CDN</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    +44% receita
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Netflix</td>
                  <td style={{ padding: '12px' }}>Smart TV optimization</td>
                  <td style={{ padding: '12px' }}>Bundle splitting</td>
                  <td style={{ padding: '12px' }}>Micro frontends</td>
                  <td style={{ padding: '12px' }}>Global scale</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    200M+ dispositivos
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Spotify</td>
                  <td style={{ padding: '12px' }}>Web player audit</td>
                  <td style={{ padding: '12px' }}>Code splitting</td>
                  <td style={{ padding: '12px' }}>Module federation</td>
                  <td style={{ padding: '12px' }}>Performance monitoring</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    500M+ usuários
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Slack</td>
                  <td style={{ padding: '12px' }}>Memory optimization</td>
                  <td style={{ padding: '12px' }}>Virtual scrolling</td>
                  <td style={{ padding: '12px' }}>Clean architecture</td>
                  <td style={{ padding: '12px' }}>Real-time sync</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    -50% memória
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Uber</td>
                  <td style={{ padding: '12px' }}>Map performance</td>
                  <td style={{ padding: '12px' }}>Canvas rendering</td>
                  <td style={{ padding: '12px' }}>Real-time updates</td>
                  <td style={{ padding: '12px' }}>Global optimization</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    100M+ usuários
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Stack>
      </Paper>

      {/* Key Learnings */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="teal">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Principais Aprendizados</Title>
              <Text c="dimmed">O que aprendemos com os cases reais</Text>
            </div>
          </Group>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="blue">
                  <IconTarget size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Implementação Gradual</Title>
                  <Text size="sm" c="dimmed">
                    Não faça tudo de uma vez
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Pinterest começou com performance audit, depois PWA. Spotify
                modularizou aos poucos. Netflix otimizou por dispositivo.
                Implementação gradual funciona.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="green">
                  <IconGauge size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Métricas Reais</Title>
                  <Text size="sm" c="dimmed">
                    Meça o que importa
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Google mediu cliques, Pinterest mediu receita, Netflix mediu
                TTI. Cada empresa mediu o que importava para seu negócio.
                Métricas de negócio {'>'} métricas técnicas.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="orange">
                  <IconUsers size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Escala Progressiva</Title>
                  <Text size="sm" c="dimmed">
                    Cresça conforme necessário
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                WhatsApp começou simples, depois escalou para 2B usuários.
                Netflix otimizou para Smart TVs, depois global. Slack otimizou
                memória, depois performance. Escale conforme cresce.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Group mb="md">
                <ThemeIcon size={40} radius="md" variant="light" color="purple">
                  <IconCode size={20} />
                </ThemeIcon>
                <div>
                  <Title order={4}>Arquitetura Certa</Title>
                  <Text size="sm" c="dimmed">
                    Resolve problemas reais
                  </Text>
                </div>
              </Group>
              <Text size="sm">
                Pinterest precisava SEO + performance = PWA. Netflix precisava
                escala = SPA otimizado. Spotify precisava modularização = Micro
                frontends. Arquitetura resolve problemas específicos.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Navigation */}
      <GuideNavigation currentGuide="implementation-roadmap" />
    </Stack>
  );
}

ImplementationRoadmap.metadata = {
  title: 'Roadmap de Implementação',
  description:
    'Roadmap prático baseado em cases reais de Netflix, Spotify, Pinterest, Tinder, Slack, Uber e outros. Como implementar arquitetura front-end que escala com métricas reais e resultados comprovados.',
};
