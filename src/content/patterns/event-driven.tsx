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
          Ações como dados, estado como resposta. useReducer, Zustand com
          subscribe, XState, e Server-Sent Events - as formas reais de fazer
          event-driven no frontend React.
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
            Event-Driven no frontend moderno é sobre{' '}
            <strong>tratar ações do usuário como dados tipados</strong> e reagir
            a mudanças de estado de forma declarativa.
          </Text>

          <Text>
            No React, isso se manifesta de 3 formas: <strong>useReducer</strong>{' '}
            (dispatch de ações tipadas), <strong>Zustand/Redux</strong>{' '}
            (subscriptions reativas), e <strong>XState</strong> (máquinas de
            estado com eventos). Para real-time, usamos SSE ou WebSockets
            integrados com React Query.
          </Text>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />}>
            <Text size="sm">
              <strong>Atenção:</strong> Muitos tutoriais recomendam{' '}
              <code>window.dispatchEvent(new CustomEvent(...))</code> para
              comunicação entre componentes React. Isso é um{' '}
              <strong>anti-pattern</strong> — bypassa o ciclo de renderização,
              não tem type safety, e cria dependências invisíveis. Use as
              abordagens abaixo.
            </Text>
          </Alert>
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
                <Title order={4}>useReducer + Context</Title>
                <Text size="sm" c="dimmed">
                  Ações tipadas como eventos. O dispatch é o event emitter nativo do React.
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
                <Title order={4}>Zustand subscribe</Title>
                <Text size="sm" c="dimmed">
                  Side-effects reativos. Reage a mudanças de estado como eventos.
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
                <Title order={4}>XState (State Machines)</Title>
                <Text size="sm" c="dimmed">
                  Eventos tipados + transições explícitas. Para fluxos complexos.
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
                <Title order={4}>Checkout multi-step</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  XState: transições explícitas, impossível ficar em estado inválido
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Estados: cart → shipping → payment → processing → success</List.Item>
                  <List.Item>Eventos tipados: NEXT, BACK, SUBMIT, PAYMENT_SUCCESS</List.Item>
                  <List.Item>Visualizável com Stately Studio</List.Item>
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
                <Title order={4}>Dashboard real-time</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  SSE + React Query: dados atualizam automaticamente
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>EventSource escuta eventos do servidor</List.Item>
                  <List.Item>Invalida queries quando dados mudam</List.Item>
                  <List.Item>Componentes usam useQuery normal - não sabem que é real-time</List.Item>
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
                <Title order={4}>Analytics desacoplado</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Zustand subscribe: side-effects sem acoplar componentes
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Store muda → subscriber reage automaticamente</List.Item>
                  <List.Item>Componente não sabe que analytics existe</List.Item>
                  <List.Item>Adicionar/remover tracking sem tocar em UI</List.Item>
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
              ❌ window.dispatchEvent em React
            </Text>
            <Text size="sm" c="dimmed">
              Bypassa o React, zero type safety, dependências invisíveis.
              Use useReducer, Zustand ou XState em vez disso.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Over-engineering com XState
            </Text>
            <Text size="sm" c="dimmed">
              Nem todo estado precisa de state machine. useState + useReducer
              resolvem 90% dos casos. Use XState para fluxos com 4+ estados e
              transições complexas.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Subscribers esquecidos no Zustand
            </Text>
            <Text size="sm" c="dimmed">
              subscribe() fora de componentes vive para sempre. Em testes,
              isso causa memory leaks. Retorne o unsubscribe e limpe em
              useEffect.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como escolher
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Estado simples:</strong> useState/useReducer
              <br />
              <strong>Estado global + side-effects:</strong> Zustand subscribe
              <br />
              <strong>Fluxos complexos:</strong> XState
              <br />
              <strong>Real-time do servidor:</strong> SSE + React Query
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
                <strong>XState:</strong>{' '}
                <a href="https://xstate.js.org/" target="_blank" rel="noopener noreferrer">State machines para JavaScript</a>
              </List.Item>
              <List.Item>
                <strong>Zustand:</strong>{' '}
                <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noopener noreferrer">State management leve com subscribe</a>
              </List.Item>
              <List.Item>
                <strong>TanStack Query:</strong>{' '}
                <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer">Server state + invalidation</a>
              </List.Item>
              <List.Item>
                <strong>Stately Studio:</strong>{' '}
                <a href="https://stately.ai/" target="_blank" rel="noopener noreferrer">Visual editor para XState</a>
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                      <strong>Martin Fowler:</strong>{' '}
                      <a href="https://martinfowler.com/articles/201701-event-driven.html" target="_blank" rel="noopener noreferrer">What do you mean by Event-Driven?</a>
                    </List.Item>
                    <List.Item>
                      <strong>EventEmitter3:</strong>{' '}
                      <a href="https://github.com/primus/eventemitter3" target="_blank" rel="noopener noreferrer">Biblioteca de eventos leve</a>
                    </List.Item>
                    <List.Item>
                      <strong>RxJS:</strong>{' '}
                      <a href="https://rxjs.dev/" target="_blank" rel="noopener noreferrer">Reactive Extensions para JavaScript</a>
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
