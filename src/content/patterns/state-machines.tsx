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
  IconSettings,
  IconBolt,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import stateMachinesExamples from '../../utils/code-examples/state-machines.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function StateMachines() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          State Machines
        </Title>
        <Text size="lg" c="dimmed">
          Estados previsíveis, transições claras, bugs impossíveis. Lógica de
          negócio organizada, comportamento controlado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconSettings size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Máquinas de estado para controlar comportamento da aplicação
              </Text>
            </div>
          </Group>

          <Text>
            State Machines é sobre uma coisa só:{' '}
            <strong>estados previsíveis</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de variáveis soltas e lógica espalhada, você
            tem estados bem definidos e transições claras. Cada estado tem
            comportamentos específicos, cada transição tem regras.
          </Text>

          <Text>
            A regra é simples: <em>estado atual + evento = próximo estado</em>.
            Sem surpresas, sem bugs impossíveis, comportamento controlado.
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
                <Title order={4}>Estados</Title>
                <Text size="sm" c="dimmed">
                  Condições bem definidas da aplicação. Cada estado tem
                  comportamentos específicos.
                </Text>
                <Stack gap="xl">
                  {stateMachinesExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Eventos</Title>
                <Text size="sm" c="dimmed">
                  Ações que causam transições. Cada evento pode mudar o estado.
                </Text>
                <Stack gap="xl">
                  {stateMachinesExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Transições</Title>
                <Text size="sm" c="dimmed">
                  Regras que definem como mudar de estado. Cada transição tem
                  condições e ações.
                </Text>
                <Stack gap="xl">
                  {stateMachinesExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
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
                <Title order={4}>E-commerce Checkout</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Estados do processo de compra
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Cart → Payment → Confirmation</List.Item>
                  <List.Item>Estados bem definidos</List.Item>
                  <List.Item>Transições controladas</List.Item>
                  <List.Item>Sem estados inválidos</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconSettings size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Formulários</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Estados de validação
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Empty → Validating → Valid/Invalid</List.Item>
                  <List.Item>Comportamento previsível</List.Item>
                  <List.Item>Feedback claro</List.Item>
                  <List.Item>Estados impossíveis</List.Item>
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
                <Title order={4}>Game Logic</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Estados do jogo
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Menu → Playing → Paused → Game Over</List.Item>
                  <List.Item>Transições claras</List.Item>
                  <List.Item>Comportamento controlado</List.Item>
                  <List.Item>Bugs impossíveis</List.Item>
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
              ❌ Over-engineering
            </Text>
            <Text size="sm" c="dimmed">
              State machines para problemas simples. Use apenas quando há
              estados complexos.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Estados inválidos
            </Text>
            <Text size="sm" c="dimmed">
              Estados que não deveriam existir. Defina todos os estados
              possíveis e transições.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Complexidade desnecessária
            </Text>
            <Text size="sm" c="dimmed">
              Muitos estados podem complicar. Mantenha simples e claro.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Use quando necessário:</strong> Estados complexos apenas
              <br />
              <strong>Defina todos os estados:</strong> Não deixe estados
              inválidos
              <br />
              <strong>Mantenha simples:</strong> Menos estados, mais clareza
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
                <strong>XState:</strong> State machine library for JavaScript
              </List.Item>
              <List.Item>
                <strong>Robot:</strong> Functional, immutable finite state
                machines
              </List.Item>
              <List.Item>
                <strong>Redux Toolkit:</strong> State management with reducers
              </List.Item>
              <List.Item>
                <strong>Zustand:</strong> Simple state management
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Netflix:</strong> Video player states
              </List.Item>
              <List.Item>
                <strong>Spotify:</strong> Music player states
              </List.Item>
              <List.Item>
                <strong>Uber:</strong> Ride booking states
              </List.Item>
              <List.Item>
                <strong>Airbnb:</strong> Booking flow states
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

export default StateMachines;
