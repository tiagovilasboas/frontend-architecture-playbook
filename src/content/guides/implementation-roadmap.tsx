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
          Roadmap de Implementação
        </Title>
        <Text size="lg" c="dimmed">
          4 fases práticas para evoluir a arquitetura frontend, da
          performance básica à escala global. Cada fase com métricas
          e checklists concretos.
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
            Cada fase tem <strong>checklists concretos</strong>, ferramentas
            recomendadas, e critérios claros de quando avançar para a próxima.
          </Text>

          <Alert color="yellow" icon={<IconBulb size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              💡 Dica Técnica:
            </Text>
            <Text size="sm">
              <strong>Implementação gradual</strong> é melhor que big bang.
              Comece por performance (ganhos imediatos), depois modularize
              (ganhos de equipe), depois escale (ganhos de infraestrutura).
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
                Passo 1: mapeie os gargalos antes de otimizar
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Bundle analyzer para identificar gargalos</List.Item>
                <List.Item>Core Web Vitals (LCP, INP, CLS)</List.Item>
                <List.Item>Mobile performance e estabilidade</List.Item>
                <List.Item>User experience metrics</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Métricas de Negócio"
            >
              <Text size="sm" c="dimmed" mb="md">
                Conecte performance a métricas de negócio
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Conversion rate e testes A/B</List.Item>
                <List.Item>User engagement e receita</List.Item>
                <List.Item>Bounce rate e taxa de abandono</List.Item>
                <List.Item>Session duration</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Infraestrutura Básica"
            >
              <Text size="sm" c="dimmed" mb="md">
                CI/CD e observabilidade desde o dia 1
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>CI/CD pipeline com deploys frequentes</List.Item>
                <List.Item>Monitoring e alertas proativos</List.Item>
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
              <strong>Performance significativamente melhor</strong>, métricas
              claras, base sólida para próximas fases. Redução de bundle,
              carregamento mais rápido.
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
                Carregue só o que o usuário precisa agora
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Route-based splitting</List.Item>
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
                Múltiplas camadas de cache reduzem requests
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Service workers e PWA</List.Item>
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
                Cada KB a menos é performance ganha
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Tree shaking</List.Item>
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
              <strong>Bundle significativamente menor</strong>, carregamento
              mais rápido. Code splitting e tree shaking fazem a diferença.
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
                Quando times independentes justificam o overhead
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  Module federation para deploys independentes
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
                Regras de negócio isoladas de UI e infraestrutura
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Domain separation</List.Item>
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
                App-like experience sem App Store
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Service workers e offline</List.Item>
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
              performance otimizada. Deploys independentes e métricas por domínio.
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
                CDN + edge computing para latência mínima
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>CDN global e distribuição geográfica</List.Item>
                <List.Item>Edge caching</List.Item>
                <List.Item>Load balancing</List.Item>
                <List.Item>Auto-scaling</List.Item>
                <List.Item>Monitoring e observabilidade</List.Item>
              </List>
            </Timeline.Item>

            <Timeline.Item
              bullet={<IconCheck size={16} />}
              title="Advanced Caching"
            >
              <Text size="sm" c="dimmed" mb="md">
                Cache hierárquico: memória → SW → CDN → origin
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Multi-level caching</List.Item>
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
                Medir continuamente, alertar proativamente
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Real user monitoring (RUM)</List.Item>
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
              consistente, monitoramento proativo. Infraestrutura global com
              observabilidade completa.
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
                    Cenário
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 1</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 2</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 3</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Fase 4</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>
                    Foco
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>
                    E-commerce
                  </td>
                  <td style={{ padding: '12px' }}>Core Web Vitals</td>
                  <td style={{ padding: '12px' }}>PWA + Service Workers</td>
                  <td style={{ padding: '12px' }}>Micro-frontends por domínio</td>
                  <td style={{ padding: '12px' }}>CDN + edge caching</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    Conversão + SEO
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Streaming</td>
                  <td style={{ padding: '12px' }}>Bundle audit</td>
                  <td style={{ padding: '12px' }}>Code splitting agressivo</td>
                  <td style={{ padding: '12px' }}>Module federation</td>
                  <td style={{ padding: '12px' }}>Multi-device optimization</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    TTI + modularização
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>SaaS / Dashboard</td>
                  <td style={{ padding: '12px' }}>Memory profiling</td>
                  <td style={{ padding: '12px' }}>Virtual scrolling</td>
                  <td style={{ padding: '12px' }}>Clean architecture</td>
                  <td style={{ padding: '12px' }}>Real-time sync</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    Memória + UX
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Real-time</td>
                  <td style={{ padding: '12px' }}>Render profiling</td>
                  <td style={{ padding: '12px' }}>Canvas / WebGL</td>
                  <td style={{ padding: '12px' }}>WebSocket architecture</td>
                  <td style={{ padding: '12px' }}>Global load balancing</td>
                  <td
                    style={{ padding: '12px', color: 'green', fontWeight: 500 }}
                  >
                    Latência mínima
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
              <Text c="dimmed">Padrões que se repetem em projetos bem-sucedidos</Text>
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
                Comece por performance (ganhos imediatos e mensuráveis),
                depois modularize o código, depois escale a infra. Cada
                fase valida a anterior antes de avançar.
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
                LCP importa para e-commerce, TTI importa para SaaS, INP
                importa para apps interativos. Escolha as métricas que
                impactam o negócio, não as que são fáceis de medir.
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
                Não otimize para escala que você ainda não tem. Monolito
                bem-feito escala mais que micro-frontends mal-feitos.
                Adicione complexidade só quando a dor justificar.
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
                SEO pesado? SSR/SSG. Times independentes? Micro-frontends.
                App offline? PWA. Real-time? WebSocket + canvas. Cada
                arquitetura resolve um problema específico, não todos.
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
    'Roadmap em 4 fases para evoluir a arquitetura frontend: performance, otimização, arquitetura e escala. Com checklists, ferramentas e critérios de avanço.',
};
