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
  IconBolt,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import eventDrivenExamples from '../../utils/code-examples/event-driven.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function EventDriven() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Event-Driven Architecture
        </Title>
        <Text size="lg" c="dimmed">
          Componentes se comunicam via eventos. Desacoplamento total,
          extensibilidade máxima, manutenção simplificada.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBolt size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Arquitetura baseada em eventos e mensagens</Text>
            </div>
          </Group>

          <Text>
            Event-Driven é sobre uma coisa só:{' '}
            <strong>componentes se comunicam via eventos</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de componentes chamarem funções diretamente,
            eles disparam eventos. Outros componentes escutam esses eventos e
            reagem conforme necessário.
          </Text>

          <Text>
            A regra é simples: <em>dispara evento, não chama função</em>.
            Desacoplamento total, extensibilidade máxima, manutenção
            simplificada.
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
          <IconBolt
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 3 Conceitos Principais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Event Emitter</Title>
                <Text size="sm" c="dimmed">
                  Componente que dispara eventos. Não conhece quem vai escutar.
                </Text>
                <CodeExample
                  title={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-emitter'
                    )?.title || ''
                  }
                  code={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-emitter'
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
                <Title order={4}>Event Listener</Title>
                <Text size="sm" c="dimmed">
                  Componente que escuta eventos. Reage quando evento acontece.
                </Text>
                <CodeExample
                  title={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-listener'
                    )?.title || ''
                  }
                  code={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-listener'
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
                <Title order={4}>Event Bus</Title>
                <Text size="sm" c="dimmed">
                  Sistema que gerencia eventos. Conecta emitters e listeners.
                </Text>
                <CodeExample
                  title={
                    eventDrivenExamples.find(e => e.id === 'event-driven-bus')
                      ?.title || ''
                  }
                  code={
                    eventDrivenExamples.find(e => e.id === 'event-driven-bus')
                      ?.content || ''
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
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Eventos para diferentes ações do usuário
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>user:added_to_cart</List.Item>
                  <List.Item>user:completed_purchase</List.Item>
                  <List.Item>user:viewed_product</List.Item>
                  <List.Item>user:searched_products</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Dashboard</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Eventos para atualizações em tempo real
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>data:updated</List.Item>
                  <List.Item>user:logged_in</List.Item>
                  <List.Item>system:error_occurred</List.Item>
                  <List.Item>notification:received</List.Item>
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
                <Title order={4}>Formulários</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Eventos para validação e feedback
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>form:field_changed</List.Item>
                  <List.Item>form:validation_failed</List.Item>
                  <List.Item>form:submitted</List.Item>
                  <List.Item>form:reset</List.Item>
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
              ❌ Debugging difícil
            </Text>
            <Text size="sm" c="dimmed">
              Eventos assíncronos são difíceis de debugar. Use logging e
              ferramentas de tracing.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Memory leaks
            </Text>
            <Text size="sm" c="dimmed">
              Listeners não removidos causam memory leaks. Sempre remova
              listeners quando componente desmonta.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Ordem de execução
            </Text>
            <Text size="sm" c="dimmed">
              Eventos podem executar em ordem imprevisível. Use prioridades ou
              sequenciamento quando necessário.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Use logging:</strong> Trace todos os eventos
              <br />
              <strong>Cleanup listeners:</strong> Remove no unmount
              <br />
              <strong>Teste isoladamente:</strong> Unit tests para eventos
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
                <strong>EventEmitter:</strong> Node.js built-in
              </List.Item>
              <List.Item>
                <strong>RxJS:</strong> Reactive programming
              </List.Item>
              <List.Item>
                <strong>Redux:</strong> State management com eventos
              </List.Item>
              <List.Item>
                <strong>Zustand:</strong> Lightweight state management
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Netflix:</strong> Event-driven microservices
              </List.Item>
              <List.Item>
                <strong>Uber:</strong> Real-time event processing
              </List.Item>
              <List.Item>
                <strong>Airbnb:</strong> Booking event system
              </List.Item>
              <List.Item>
                <strong>Spotify:</strong> Music recommendation events
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

export default EventDriven;
