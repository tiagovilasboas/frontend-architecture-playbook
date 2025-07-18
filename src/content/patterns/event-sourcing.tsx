import {
  Title,
  Text,
  Stack,
  Paper,
  Card,
  Group,
  ThemeIcon,
  Badge,
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
} from '@tabler/icons-react';

export default function EventSourcingArchitecture() {
  return (
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
          {`// Event Store - onde eventos vivem
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
  
  const timeTravel = (pointInTime: number) => {
    const eventsUntil = events.filter(e => e.timestamp <= pointInTime)
    const historicalState = eventStore.replay(eventsUntil, initialCartState)
    setState(historicalState)
  }
  
  return (
    <div>
      <CartItems items={state.items} onRemove={removeItem} />
      <CartTotal total={state.total} />
      
      {/* Debug: Event History */}
      <EventHistory 
        events={events} 
        onTimeTravel={timeTravel}
        currentState={state}
      />
    </div>
  )
}`}
        </Code>
      </Paper>

      {/* Por que vale a pena? */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="green">
            <IconCheck size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            💚 Por que vale a pena?
          </Title>
        </Group>
        <Stack gap="md">
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🕰️ Time travel debugging
            </Text>
            <Text size="sm">
              Bug aconteceu ontem? Replay exato da sequência. Debug paradise.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              📊 Analytics completo
            </Text>
            <Text size="sm">
              User journey completo. Cada clique, cada decisão. BI team ama.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔄 Undo/Redo natural
            </Text>
            <Text size="sm">
              Voltar no tempo é só replay até ponto anterior. Figma-level UX.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🛡️ Auditoria built-in
            </Text>
            <Text size="sm">
              Compliance de graça. Toda mudança tem timestamp + user + reason.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplo Prático */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          💻 Exemplo: Editor Colaborativo
        </Title>
        <Code block mb="md">
          {`// Document com Event Sourcing
class DocumentEventSourcing {
  constructor() {
    this.events = []
    this.subscribers = []
    this.currentState = { content: "", cursors: {} }
  }
  
  // Commands que geram eventos
  insertText(position: number, text: string, userId: string) {
    const event = {
      type: 'TEXT_INSERTED',
      timestamp: Date.now(),
      userId,
      data: { position, text, length: text.length }
    }
    
    this.appendEvent(event)
    return event
  }
  
  deleteText(position: number, length: number, userId: string) {
    const event = {
      type: 'TEXT_DELETED', 
      timestamp: Date.now(),
      userId,
      data: { position, length, deletedText: this.getTextAt(position, length) }
    }
    
    this.appendEvent(event)
    return event
  }
  
  moveCursor(userId: string, position: number) {
    const event = {
      type: 'CURSOR_MOVED',
      timestamp: Date.now(), 
      userId,
      data: { position }
    }
    
    this.appendEvent(event)
    return event
  }
  
  // Event application
  applyEvent(state: DocumentState, event: Event): DocumentState {
    switch (event.type) {
      case 'TEXT_INSERTED':
        return {
          ...state,
          content: this.insertAt(state.content, event.data.position, event.data.text)
        }
      
      case 'TEXT_DELETED':
        return {
          ...state,
          content: this.deleteAt(state.content, event.data.position, event.data.length)
        }
      
      case 'CURSOR_MOVED':
        return {
          ...state,
          cursors: {
            ...state.cursors,
            [event.userId]: event.data.position
          }
        }
        
      default:
        return state
    }
  }
  
  // Time travel para qualquer ponto
  getStateAt(timestamp: number): DocumentState {
    const eventsUntil = this.events.filter(e => e.timestamp <= timestamp)
    return eventsUntil.reduce((state, event) => this.applyEvent(state, event), initialState)
  }
  
  // Conflict resolution automática
  resolveConflicts(events: Event[]): Event[] {
    // Operational Transform baseado em eventos
    return events.sort((a, b) => a.timestamp - b.timestamp)
      .reduce((resolved, event) => {
        const transformedEvent = this.transformEvent(event, resolved)
        return [...resolved, transformedEvent]
      }, [])
  }
}

// React Hook para Event Sourcing
function useEventSourcing(aggregateId: string) {
  const [state, setState] = useState(initialState)
  const [events, setEvents] = useState<Event[]>([])
  
  const dispatch = useCallback((command: Command) => {
    const event = commandToEvent(command)
    
    // Optimistic update
    setState(prev => applyEvent(prev, event))
    setEvents(prev => [...prev, event])
    
    // Sync com servidor
    eventStore.append(event).catch(error => {
      // Rollback on error
      setEvents(prev => prev.filter(e => e.id !== event.id))
      setState(prev => replay(events.filter(e => e.id !== event.id)))
    })
  }, [events])
  
  const timeTravel = useCallback((timestamp: number) => {
    const snapshot = getStateAt(timestamp)
    setState(snapshot)
  }, [events])
  
  return { state, dispatch, timeTravel, events }
}`}
        </Code>
      </Paper>

      {/* Armadilhas */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="red">
            <IconAlertTriangle size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            ⚠️ Armadilhas
          </Title>
        </Group>
        <Stack gap="md">
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              💾 Storage explosion
            </Text>
            <Text size="sm">
              Cada clique vira evento. TB de dados rapidinho. Snapshots +
              cleanup obrigatório.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🐌 Performance degradation
            </Text>
            <Text size="sm">
              Replay de 10K eventos é lento. Snapshots a cada 100-1000 eventos.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🔄 Eventual consistency
            </Text>
            <Text size="sm">
              Events chegam fora de ordem. Conflict resolution é complexo.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🧠 Mental model
            </Text>
            <Text size="sm">
              Team precisa pensar em eventos, não estado. Curva de aprendizado.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Cases Reais */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="violet">
            <IconRocket size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            🚀 Cases Reais
          </Title>
        </Group>
        <Stack gap="md">
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🎨 Figma
            </Text>
            <Text size="sm" mb="xs">
              Design colaborativo. Cada ação é evento. Undo/redo perfeito,
              conflict resolution automático.
            </Text>
            <Text size="sm" c="green">
              Time travel debugging, real-time collaboration, version history
              natural
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              📝 Linear
            </Text>
            <Text size="sm" mb="xs">
              Issue tracking. Toda mudança de status, comment, assignment é
              evento.
            </Text>
            <Text size="sm" c="green">
              Audit trail completo, activity feed automático, analytics
              detalhado
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              💰 Banking Apps
            </Text>
            <Text size="sm" mb="xs">
              Transações como eventos. Compliance, auditoria, dispute
              resolution.
            </Text>
            <Text size="sm" c="green">
              Regulamentação atendida, debug de fraudes, reconstituição de
              cenários
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Implementação */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Stack Event Sourcing
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Frontend
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Redux + Redux Toolkit</List.Item>
              <List.Item>Zustand + immer</List.Item>
              <List.Item>Jotai + atoms</List.Item>
              <List.Item>Custom Event Store</List.Item>
            </List>
          </Card>
          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Backend
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>EventStore DB</List.Item>
              <List.Item>Apache Kafka</List.Item>
              <List.Item>AWS EventBridge</List.Item>
              <List.Item>Custom with PostgreSQL</List.Item>
            </List>
          </Card>
        </Group>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Alert color="grape" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: 'italic' }}>
            "Event Sourcing: cada ação conta uma história. E histórias não
            mentem."
          </Text>
          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Auditoria completa: toda mudança tem contexto e timestamp
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Debug poderoso: replay exato de qualquer cenário</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Trade-off: poder vs complexidade de storage/performance
              </Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

EventSourcingArchitecture.metadata = {
  title: 'Event Sourcing Frontend',
  description:
    'Arquitetura baseada em eventos para auditoria completa, time travel debugging e undo/redo natural.',
};
