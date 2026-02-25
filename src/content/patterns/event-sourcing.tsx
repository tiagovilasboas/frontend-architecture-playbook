import {
  Title,
  Text,
  Stack,
  Paper,
  Card,
  Group,
  ThemeIcon,
  Alert,
  List,
  Code,
} from '@mantine/core';
import {
  IconCheck,
  IconAlertTriangle,
  IconBulb,
  IconRocket,
  IconHistory,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function EventSourcingArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="grape">
            <IconHistory size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              📜 Event Sourcing Frontend
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Toda ação é um evento - debug e auditoria que funciona
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          Em vez de salvar{' '}
          <Text span fw={700} c="grape">
            estado atual
          </Text>
          , salva
          <Text span fw={700} c="blue">
            {' '}
            sequência de eventos
          </Text>{' '}
          que levaram até ele. Quer saber como chegou aqui? Replay dos eventos.{' '}
          <Text span fw={700} c="green">
            Time travel debugging
          </Text>{' '}
          de graça.
        </Text>

        <Code block>
          {`// ❌ State tradicional - só o resultado final
const user = {
  id: 1,
  name: "João Silva",
  email: "joao@email.com",
  credits: 1500
}

// ✅ Event Sourcing - toda a história
const events = [
  { type: 'USER_REGISTERED', data: { name: "João Silva", email: "joao@email.com" } },
  { type: 'EMAIL_UPDATED', data: { newEmail: "joao@email.com", oldEmail: "joao@gmail.com" } },
  { type: 'CREDITS_ADDED', data: { amount: 1000, reason: "signup_bonus" } },
  { type: 'CREDITS_SPENT', data: { amount: 500, product: "premium_plan" } },
  { type: 'CREDITS_ADDED', data: { amount: 1000, reason: "referral_bonus" } }
]

// Estado atual = replay de todos os eventos
const currentState = events.reduce(applyEvent, initialState)`}
        </Code>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Quando usar? */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🎯 Quando usar?
        </Title>
        <Stack gap="md">
          <Card withBorder p="md">
            <Text fw={600} c="grape" mb="sm">
              🕵️ Auditoria crítica
            </Text>
            <Text>
              Finanças, saúde, compliance. Precisa provar como chegou no
              resultado.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="grape" mb="sm">
              🔄 Undo/Redo complexo
            </Text>
            <Text>
              Editores colaborativos, design tools. Voltar no tempo não é
              opcional.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="grape" mb="sm">
              🐛 Debug nightmare
            </Text>
            <Text>
              "Como esse bug aconteceu?" Replay exato da sequência que quebrou.
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Como funciona */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          ⚙️ Como funciona na prática?
        </Title>
        <Code block mb="md">
          {`// Types e interfaces
interface CartItem {
  id: string
  name: string
  price: number
}

interface CartState {
  items: CartItem[]
  total: number
  discount?: number
}

interface Event {
  id: string
  type: string
  aggregateId: string
  data: any
  timestamp: number
  userId: string
}

// Estado inicial
const initialCartState: CartState = {
  items: [],
  total: 0
}

// Event Store - onde eventos vivem
class EventStore {
  private events: Event[] = []
  
  append(event: Event) {
    event.timestamp = Date.now()
    event.id = generateId()
    this.events.push(event)
    this.notifySubscribers(event)
  }
  
  getEvents(aggregateId?: string): Event[] {
    return aggregateId 
      ? this.events.filter(e => e.aggregateId === aggregateId)
      : this.events
  }
  
  replay(events: Event[], initialState: any) {
    return events.reduce((state, event) => 
      this.applyEvent(state, event), initialState
    )
  }
}

// Event Dispatcher - aplica eventos
class ShoppingCartEventHandler {
  applyEvent(state: CartState, event: Event): CartState {
    switch (event.type) {
      case 'ITEM_ADDED':
        return {
          ...state,
          items: [...state.items, event.data.item],
          total: state.total + event.data.item.price
        }
      
      case 'ITEM_REMOVED':
        return {
          ...state,
          items: state.items.filter(item => item.id !== event.data.itemId),
          total: state.total - event.data.price
        }
      
      case 'DISCOUNT_APPLIED':
        return {
          ...state,
          discount: event.data.discount,
          total: state.total * (1 - event.data.discount)
        }
      
      default:
        return state
    }
  }
}

// Instâncias
const eventStore = new EventStore()
const eventHandler = new ShoppingCartEventHandler()
const currentUser = { id: 'user-123' }

// Component que usa Event Sourcing
function ShoppingCart() {
  const [state, setState] = useState(initialCartState)
  const [events, setEvents] = useState<Event[]>([])
  
  const dispatch = (event: Event) => {
    // Salva evento
    eventStore.append(event)
    setEvents(prev => [...prev, event])
    
    // Aplica ao estado
    setState(prev => eventHandler.applyEvent(prev, event))
  }
  
  const addItem = (item: CartItem) => {
    dispatch({
      type: 'ITEM_ADDED',
      aggregateId: 'cart-123',
      data: { item },
      userId: currentUser.id
    })
  }
  
  const removeItem = (itemId: string) => {
    dispatch({
      type: 'ITEM_REMOVED',
      aggregateId: 'cart-123',
      data: { itemId },
      userId: currentUser.id
    })
  }
  
  // Time travel - voltar no tempo
  const goBackInTime = (eventIndex: number) => {
    const eventsUntilIndex = events.slice(0, eventIndex)
    const newState = eventHandler.replay(eventsUntilIndex, initialCartState)
    setState(newState)
  }
  
  return (
    <div>
      <h2>Cart Total: $\\{state.total}</h2>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - $\\{item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
      {/* Event Timeline */}
      <div>
        <h3>Event History</h3>
        {events.map((event, index) => (
          <div key={event.id}>
            <button onClick={() => goBackInTime(index)}>
              Go back to event {index}
            </button>
            <span>{event.type} - {JSON.stringify(event.data)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}`}
        </Code>
      </Paper>
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
                <IconHistory size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Banking Systems</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Auditoria completa de transações
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Eventos: DEPOSIT, WITHDRAW, TRANSFER</List.Item>
                  <List.Item>Auditoria completa de cada transação</List.Item>
                  <List.Item>Compliance e regulamentações</List.Item>
                  <List.Item>Debug de transações problemáticas</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconRocket size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Collaborative Editors</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Edição colaborativa em tempo real
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Eventos: INSERT, DELETE, FORMAT</List.Item>
                  <List.Item>Undo/Redo perfeito</List.Item>
                  <List.Item>Collaborative editing</List.Item>
                  <List.Item>Conflict resolution</List.Item>
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
                <Title order={4}>Gaming</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Replay de partidas
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Eventos: MOVE, ATTACK, ITEM_USE</List.Item>
                  <List.Item>Replay de partidas completas</List.Item>
                  <List.Item>Debug de bugs</List.Item>
                  <List.Item>Anti-cheat systems</List.Item>
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
              Performance issues
            </Text>
            <Text size="sm" c="dimmed">
              Muitos eventos podem impactar performance. Use snapshots e
              otimizações.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Complexidade excessiva
            </Text>
            <Text size="sm" c="dimmed">
              Event Sourcing para problemas simples. Use apenas quando
              necessário.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Event schema evolution
            </Text>
            <Text size="sm" c="dimmed">
              Mudanças no schema de eventos podem quebrar replay. Versioning é
              crucial.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Use snapshots:</strong> Para performance
              <br />
              <strong>Version events:</strong> Para evolução
              <br />
              <strong>Use quando necessário:</strong> Auditoria crítica apenas
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
                <strong>EventStore:</strong> Event sourcing database
              </List.Item>
              <List.Item>
                <strong>Axon Framework:</strong> Event sourcing framework
              </List.Item>
              <List.Item>
                <strong>Apache Kafka:</strong> Event streaming platform
              </List.Item>
              <List.Item>
                <strong>Redux Toolkit:</strong> State management with events
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
                <a
                  href="https://martinfowler.com/eaaDev/EventSourcing.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event Sourcing
                </a>
              </List.Item>
              <List.Item>
                <strong>Greg Young:</strong>{' '}
                <a
                  href="https://www.youtube.com/watch?v=8JKjvY4etTY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CQRS and Event Sourcing (talk)
                </a>
              </List.Item>
              <List.Item>
                <strong>Redux Toolkit:</strong>{' '}
                <a
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Event-driven state no frontend
                </a>
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

EventSourcingArchitecture.metadata = {
  title: 'Event Sourcing Frontend',
  description:
    'Arquitetura baseada em eventos para auditoria completa, time travel debugging e undo/redo natural.',
};
