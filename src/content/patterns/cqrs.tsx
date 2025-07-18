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
} from "@mantine/core";
import {
  IconCheck,
  IconAlertTriangle,
  IconBulb,
  IconRocket,
  IconGitFork,
} from "@tabler/icons-react";

export default function CQRSArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="pink">
            <IconGitFork size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              🔀 CQRS Frontend
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Read diferente de write - performance e clareza
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          <Text span fw={700} c="pink">
            Separar leitura de escrita
          </Text>
          . Commands (write) fazem mudanças. Queries (read) buscam dados.
          <Text span fw={700} c="blue">
            Dois modelos diferentes
          </Text>
          , otimizados pra cada caso. Performance e clareza de
          responsabilidades.
        </Text>

        <Code block>
          {`// ❌ CRUD tradicional - mesmo modelo pra tudo
class UserController {
  async getUsers() {
    return User.findAll({ include: ['orders', 'profile', 'settings'] })
  }
  
  async updateUser(id, data) {
    return User.update(data, { where: { id } })
  }
}

// ✅ CQRS - separado por responsabilidade
// 📖 Read Model - otimizado pra leitura
class UserQueries {
  async getUsersForList() {
    return await db.query('SELECT id, name, email FROM users_view')
  }
  
  async getUserProfile(id) {
    return await cache.get(\`user:\${id}\`) || 
           await db.query('SELECT * FROM user_profile_view WHERE id = ?', [id])
  }
}

// ✏️ Write Model - otimizado pra escrita
class UserCommands {
  async updateUserProfile(command: UpdateUserCommand) {
    await this.validateCommand(command)
    await this.applyBusinessRules(command)
    
    const event = await User.update(command.data)
    await this.publishEvent('USER_UPDATED', event)
  }
}`}
        </Code>
      </Paper>

      {/* Quando usar? */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🎯 Quando usar?
        </Title>
        <Stack gap="md">
          <Card withBorder p="md">
            <Text fw={600} c="pink" mb="sm">
              📊 Read/Write imbalance
            </Text>
            <Text>
              1000 reads pra cada write. Otimizar cada um separadamente.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="pink" mb="sm">
              🔄 Complex business logic
            </Text>
            <Text>
              Writes têm regras complexas. Reads são simples. Misturar complica.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="pink" mb="sm">
              ⚡ Performance crítica
            </Text>
            <Text>
              Dashboards, analytics, real-time feeds. Read model específico pro
              caso.
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Command vs Query */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          ⚖️ Commands vs Queries
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="red" size="lg">
                Commands
              </Badge>
              <Text fw={600}>Write Model</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Faz mudanças no sistema
            </Text>
            <Code size="sm" mb="md">
              {`class CreateOrderCommand {
  constructor(
    public userId: string,
    public items: CartItem[],
    public paymentMethod: string
  ) {}
}

class OrderCommandHandler {
  async handle(command: CreateOrderCommand) {
    // Validações
    const user = await this.userRepo.findById(command.userId)
    if (!user.isActive) throw new Error('User inactive')
    
    // Business rules
    const total = command.items.reduce((sum, item) => sum + item.price, 0)
    if (total > user.creditLimit) throw new Error('Credit exceeded')
    
    // Persist
    const order = new Order(command.userId, command.items, total)
    await this.orderRepo.save(order)
    
    // Events
    await this.eventBus.publish(new OrderCreated(order))
    
    return order.id
  }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Foco em business rules</List.Item>
              <List.Item>Validações complexas</List.Item>
              <List.Item>Side effects (events, emails)</List.Item>
              <List.Item>Normalmente retorna ID ou void</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="blue" size="lg">
                Queries
              </Badge>
              <Text fw={600}>Read Model</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Busca dados do sistema
            </Text>
            <Code size="sm" mb="md">
              {`class GetOrdersQuery {
  constructor(
    public userId: string,
    public status?: OrderStatus,
    public limit: number = 20
  ) {}
}

class OrderQueryHandler {
  async handle(query: GetOrdersQuery) {
    // Otimizado pra leitura - views, cache, indexes
    return await this.readModel.query(\`
      SELECT 
        o.id,
        o.total,
        o.status,
        o.created_at,
        COUNT(oi.id) as items_count
      FROM orders_view o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      WHERE o.user_id = ? 
        AND (\${query.status ? 'o.status = ?' : '1=1'})
      GROUP BY o.id
      ORDER BY o.created_at DESC
      LIMIT ?
    \`, [query.userId, query.status, query.limit])
  }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Foco em performance</List.Item>
              <List.Item>Views otimizadas</List.Item>
              <List.Item>Cache agressivo</List.Item>
              <List.Item>Sempre retorna dados</List.Item>
            </List>
          </Card>
        </Group>
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
              ⚡ Performance otimizada
            </Text>
            <Text size="sm">
              Read model com cache, views, indexes. Write model com validações
              focadas.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🧩 Separation of concerns
            </Text>
            <Text size="sm">
              Lógica de escrita não mistura com lógica de leitura. Clareza
              total.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              📈 Scalability independent
            </Text>
            <Text size="sm">
              Scale read e write separadamente. Read replicas, write master.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              👥 Team autonomy
            </Text>
            <Text size="sm">
              Frontend team otimiza queries. Backend team foca em business
              logic.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplo Prático */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          💻 Exemplo: E-commerce Dashboard
        </Title>
        <Code block mb="md">
          {`// 📊 Read Model - Dashboard Analytics
class DashboardQueries {
  async getSalesMetrics(period: string) {
    // Cache primeiro (Redis)
    const cached = await this.cache.get(\`metrics:\${period}\`)
    if (cached) return cached
    
    // Query otimizada com views pré-computadas
    const metrics = await this.readDB.query(\`
      SELECT 
        DATE(created_at) as date,
        SUM(total) as revenue,
        COUNT(*) as orders,
        AVG(total) as avg_order_value,
        COUNT(DISTINCT user_id) as unique_customers
      FROM orders_analytics_view 
      WHERE created_at >= ?
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    \`, [this.getPeriodStart(period)])
    
    // Cache por 1 hora
    await this.cache.set(\`metrics:\${period}\`, metrics, 3600)
    return metrics
  }
  
  async getTopProducts(limit: number = 10) {
    return await this.readDB.query(\`
      SELECT 
        p.name,
        p.category,
        SUM(oi.quantity) as total_sold,
        SUM(oi.quantity * oi.price) as revenue
      FROM product_sales_view p
      JOIN order_items oi ON p.id = oi.product_id
      WHERE oi.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
      GROUP BY p.id
      ORDER BY total_sold DESC
      LIMIT ?
    \`, [limit])
  }
}

// ✏️ Write Model - Order Processing
class OrderCommands {
  async createOrder(command: CreateOrderCommand) {
    // Validation
    await this.validateOrder(command)
    
    // Business logic
    const order = new Order({
      userId: command.userId,
      items: command.items,
      total: this.calculateTotal(command.items),
      paymentMethod: command.paymentMethod
    })
    
    // Apply business rules
    await this.applyDiscounts(order)
    await this.checkInventory(order)
    await this.validateCreditLimit(order)
    
    // Persist
    const savedOrder = await this.orderRepo.save(order)
    
    // Side effects
    await this.inventoryService.reserveItems(order.items)
    await this.paymentService.processPayment(order)
    await this.emailService.sendOrderConfirmation(order)
    
    // Events para read model sync
    await this.eventBus.publish(new OrderCreated(savedOrder))
    
    return savedOrder.id
  }
  
  async updateOrderStatus(orderId: string, status: OrderStatus) {
    const order = await this.orderRepo.findById(orderId)
    
    // Business rules for status transition
    if (!this.isValidTransition(order.status, status)) {
      throw new Error('Invalid status transition')
    }
    
    order.updateStatus(status)
    await this.orderRepo.save(order)
    
    // Publish event para sync read model
    await this.eventBus.publish(new OrderStatusUpdated(order))
  }
}

// 🔄 Event Handlers - Sync Read Model
class OrderEventHandlers {
  async onOrderCreated(event: OrderCreated) {
    // Update analytics view
    await this.analyticsRepo.updateSalesMetrics(event.order)
    
    // Update product sales view  
    await this.productRepo.updateSalesData(event.order.items)
    
    // Invalidate related caches
    await this.cache.deletePattern('metrics:*')
    await this.cache.deletePattern(\`user:\${event.order.userId}:*\`)
  }
  
  async onOrderStatusUpdated(event: OrderStatusUpdated) {
    // Update order view
    await this.orderViewRepo.updateStatus(event.order.id, event.order.status)
    
    // Update customer journey analytics
    await this.analyticsRepo.trackStatusChange(event.order)
  }
}

// React Hook para CQRS
function useOrderCQRS() {
  const [metrics, setMetrics] = useState(null)
  const [isCreatingOrder, setIsCreatingOrder] = useState(false)
  
  // Query side
  const fetchMetrics = async (period: string) => {
    const data = await orderQueries.getSalesMetrics(period)
    setMetrics(data)
  }
  
  // Command side  
  const createOrder = async (orderData: CreateOrderData) => {
    setIsCreatingOrder(true)
    try {
      const orderId = await orderCommands.createOrder(orderData)
      
      // Optimistic update do read model (opcional)
      await fetchMetrics('today')
      
      return orderId
    } finally {
      setIsCreatingOrder(false)
    }
  }
  
  return {
    // Queries
    metrics,
    fetchMetrics,
    
    // Commands
    createOrder,
    isCreatingOrder
  }
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
              🔄 Eventual consistency
            </Text>
            <Text size="sm">
              Write model atualiza, read model demora pra sincronizar. Users
              veem dados antigos.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🏗️ Complexidade extra
            </Text>
            <Text size="sm">
              Dois modelos, eventos, sync. Overhead pra casos simples.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🐛 Data inconsistency
            </Text>
            <Text size="sm">
              Event handlers falham, read model fica out of sync. Monitoring
              obrigatório.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              📚 Learning curve
            </Text>
            <Text size="sm">
              Team precisa entender commands, queries, events, eventual
              consistency.
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
              📊 Trading Platforms
            </Text>
            <Text size="sm" mb="xs">
              Writes (trades) são críticos e complexos. Reads (charts,
              positions) são high-frequency.
            </Text>
            <Text size="sm" c="green">
              Separação permite otimizar cada lado independente, performance
              crítica
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🛒 E-commerce Giants
            </Text>
            <Text size="sm" mb="xs">
              Commands (checkout) têm business rules. Queries (catalog, search)
              são pure performance.
            </Text>
            <Text size="sm" c="green">
              Scale read replicas pra catalog, write master pra orders
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              📈 Analytics Dashboards
            </Text>
            <Text size="sm" mb="xs">
              Writes (events) são simples. Reads (aggregations, reports) são
              complexos.
            </Text>
            <Text size="sm" c="green">
              Read model otimizado com views, cache, pre-computed metrics
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Implementação */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Stack CQRS
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Frontend
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>TanStack Query (reads)</List.Item>
              <List.Item>RTK Mutation (writes)</List.Item>
              <List.Item>SWR + Axios</List.Item>
              <List.Item>Apollo GraphQL</List.Item>
            </List>
          </Card>
          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Backend
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>MediatR (.NET)</List.Item>
              <List.Item>NestJS + CQRS</List.Item>
              <List.Item>EventStore + Projections</List.Item>
              <List.Item>Kafka + Event Sourcing</List.Item>
            </List>
          </Card>
        </Group>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Alert color="pink" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: "italic" }}>
            "CQRS: optimize reads for speed, optimize writes for correctness."
          </Text>
          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Commands: business logic + validation. Queries: performance +
                cache
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Scale independente: read replicas vs write master</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Trade-off: performance vs eventual consistency</Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

CQRSArchitecture.metadata = {
  title: "CQRS Frontend",
  description:
    "Command Query Responsibility Segregation - separa leitura de escrita para performance e clareza de responsabilidades.",
};
