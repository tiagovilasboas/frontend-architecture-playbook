import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  List,
  ThemeIcon,
  Group,
  Card,
  Badge,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconSettings2,
  IconSettings,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import featureFlagsExamples from '../../utils/code-examples/feature-flags.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function FeatureFlags() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Feature Flags
        </Title>
        <Text size="lg" c="dimmed">
          Controle dinâmico de funcionalidades. Deploy seguro, testes em
          produção, rollback instantâneo. O que acontece quando você quer mudar
          código sem fazer deploy.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconSettings2 size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Sistema que controla funcionalidades dinamicamente
              </Text>
            </div>
          </Group>

          <Text>
            Feature Flags é sobre uma coisa só:{' '}
            <strong>controlar funcionalidades sem fazer deploy</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de fazer deploy toda vez que quer
            ativar/desativar uma funcionalidade, você tem um sistema que
            controla isso dinamicamente. Novo código pode ficar dormindo até
            você decidir ativar.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>código sempre no ar, funcionalidade controlada por flag</em>.
            Deploy seguro, rollback instantâneo, testes em produção.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconSettings
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 4 Conceitos Principais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Feature Flags (Toggles)</Title>
                <Text size="sm" c="dimmed">
                  Variáveis que controlam se uma funcionalidade está ativa ou
                  não.
                </Text>
                <Text size="xs" c="blue" mb="xs">
                  Veja o exemplo real em{' '}
                  <b>/examples/feature-flags/use-feature-flag.ts</b>
                </Text>
                <CodeExample
                  title={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-use-flag'
                    )?.title || ''
                  }
                  code={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-use-flag'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Flag Providers</Title>
                <Text size="sm" c="dimmed">
                  Sistemas que gerenciam e distribuem flags. Local, API, CDN.
                </Text>
                <CodeExample
                  title={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-provider'
                    )?.title || ''
                  }
                  code={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-provider'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Targeting Rules</Title>
                <Text size="sm" c="dimmed">
                  Regras que determinam quem vê qual funcionalidade. Usuário,
                  localização, porcentagem.
                </Text>
                <CodeExample
                  title={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-targeting'
                    )?.title || ''
                  }
                  code={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-targeting'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">
                4
              </Badge>
              <div>
                <Title order={4}>Rollback & Monitoring</Title>
                <Text size="sm" c="dimmed">
                  Sistemas para desativar flags rapidamente e monitorar impacto.
                </Text>
                <CodeExample
                  title={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-rollback'
                    )?.title || ''
                  }
                  code={
                    featureFlagsExamples.find(
                      e => e.id === 'feature-flags-rollback'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>
        </Stack>
      </div>
    </Stack>
  );

  // Examples Section
  const ExamplesSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconBulb
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Casos Reais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Netflix</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Feature flags para testes A/B
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Teste de algoritmos de recomendação</List.Item>
                  <List.Item>
                    Rollback instantâneo em caso de problemas
                  </List.Item>
                  <List.Item>Deploy contínuo sem risco</List.Item>
                  <List.Item>Experimentos em produção</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconSettings2 size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Facebook</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Feature flags para funcionalidades
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Novos recursos gradualmente</List.Item>
                  <List.Item>Teste com usuários específicos</List.Item>
                  <List.Item>Rollback em segundos</List.Item>
                  <List.Item>Experimentos em larga escala</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Feature flags para vendas
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Novos métodos de pagamento</List.Item>
                  <List.Item>Teste de preços dinâmicos</List.Item>
                  <List.Item>Funcionalidades sazonais</List.Item>
                  <List.Item>Rollback rápido em caso de bugs</List.Item>
                </List>
              </div>
            </Group>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  // Pitfalls Section
  const PitfallsSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconAlertTriangle
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          <Alert color="red" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Flag debt
            </Text>
            <Text size="sm" c="dimmed">
              Flags antigas que nunca são removidas. Limpe flags desnecessárias
              regularmente.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Complexidade excessiva
            </Text>
            <Text size="sm" c="dimmed">
              Muitas flags podem complicar o código. Use apenas quando
              necessário.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Performance impact
            </Text>
            <Text size="sm" c="dimmed">
              Verificar flags pode impactar performance. Use cache e
              otimizações.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Limpe regularmente:</strong> Remova flags desnecessárias
              <br />
              <strong>Use com moderação:</strong> Só quando realmente necessário
              <br />
              <strong>Monitore performance:</strong> Cache e otimizações
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // References Section
  const ReferencesSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconCode
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Referências e Recursos
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Ferramentas
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>LaunchDarkly:</strong> Feature flag management
              </List.Item>
              <List.Item>
                <strong>Split.io:</strong> Feature flags and experimentation
              </List.Item>
              <List.Item>
                <strong>Unleash:</strong> Open-source feature flags
              </List.Item>
              <List.Item>
                <strong>Flagsmith:</strong> Feature flag platform
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Netflix:</strong> A/B testing and rollbacks
              </List.Item>
              <List.Item>
                <strong>Facebook:</strong> Gradual feature releases
              </List.Item>
              <List.Item>
                <strong>Amazon:</strong> Dynamic pricing and features
              </List.Item>
              <List.Item>
                <strong>Uber:</strong> Regional feature rollouts
              </List.Item>
            </List>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  const tabs = createArchitectureTabs(
    <OverviewSection />,
    <ImplementationSection />,
    <ExamplesSection />,
    <PitfallsSection />,
    <ReferencesSection />
  );

  return <MobileTabs items={tabs} defaultTab="overview" />;
}

export default FeatureFlags;
