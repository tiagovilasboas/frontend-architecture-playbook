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
  IconHexagon,
} from "@tabler/icons-react";

export default function HexagonalArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="indigo">
            <IconHexagon size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              ⬡ Hexagonal Architecture (Ports & Adapters)
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Clean Architecture mais flexível e menos dogmática
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          <Text span fw={700} c="indigo">
            Core da aplicação no centro
          </Text>
          , conectado ao mundo externo através de
          <Text span fw={700} c="blue">
            {" "}
            ports (interfaces)
          </Text>{" "}
          e{" "}
          <Text span fw={700} c="green">
            adapters (implementações)
          </Text>
          . Framework? Banco? API? Detalhes. Business logic não sabe que
          existem.
        </Text>

        <Code block>
          {`// ❌ Código acoplado
class UserController {
  async createUser(data) {
    // Business logic misturado com infra
    const user = await UserModel.create(data) // Mongoose específico
    await sendEmail(user.email)               // NodeMailer específico
    return res.json(user)                     // Express específico
  }
}

// ✅ Hexagonal - Business logic isolado
class UserService {
  constructor(userRepo, emailService) {
    this.userRepo = userRepo      // Port - interface
    this.emailService = emailService // Port - interface
  }
  
  async createUser(data) {
    const user = this.userRepo.save(data)     // Não sabe se é Mongo, SQL, etc
    await this.emailService.send(user.email)  // Não sabe se é SMTP, SES, etc
    return user                               // Pure business logic
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
            <Text fw={600} c="indigo" mb="sm">
              🔄 Migrações frequentes
            </Text>
            <Text>
              Troca MongoDB por PostgreSQL. Ou AWS por Azure. Business logic não
              muda.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="indigo" mb="sm">
              🧪 Testing crítico
            </Text>
            <Text>
              Mock de tudo é fácil. Unit tests rodam sem banco, sem API, sem
              nada.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="indigo" mb="sm">
              📈 Projeto longo
            </Text>
            <Text>
              5+ anos de vida. Vai trocar libs, frameworks, serviços. Core fica
              intacto.
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Ports vs Adapters */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🔌 Ports & Adapters na Prática
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Ports (Interfaces)
            </Badge>
            <Text size="sm" mb="md">
              Contratos que o core define
            </Text>
            <Code size="sm" mb="md">
              {`interface UserRepository {
  save(user: User): Promise<User>
  findById(id: string): Promise<User>
  findByEmail(email: string): Promise<User>
}

interface EmailService {
  send(to: string, subject: string, body: string): Promise<void>
}`}
            </Code>
            <Text size="xs" c="dimmed">
              Core só conhece interfaces, não implementações
            </Text>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Adapters (Implementações)
            </Badge>
            <Text size="sm" mb="md">
              Como conectar com mundo real
            </Text>
            <Code size="sm" mb="md">
              {`class MongoUserRepository implements UserRepository {
  async save(user: User) {
    return await UserModel.create(user)
  }
}

class SMTPEmailService implements EmailService {
  async send(to: string, subject: string, body: string) {
    return await nodemailer.sendMail({to, subject, html: body})
  }
}`}
            </Code>
            <Text size="xs" c="dimmed">
              Implementações específicas de cada tecnologia
            </Text>
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
              🔄 Flexibilidade total
            </Text>
            <Text size="sm">
              Trocar React por Vue? Express por Fastify? MongoDB por PostgreSQL?
              Core não muda.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🧪 Testing Paradise
            </Text>
            <Text size="sm">
              Mock qualquer coisa. Unit tests rodam em 10ms. Integration tests
              isolados.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              👥 Teams independentes
            </Text>
            <Text size="sm">
              Backend team muda infra. Frontend team muda UI. Core team foca em
              business.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplo Prático */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          💻 Exemplo: E-commerce Order System
        </Title>
        <Code block mb="md">
          {`// 🎯 Core - Business Logic (não sabe de nada externo)
class OrderService {
  constructor(
    private orderRepo: OrderRepository,    // Port
    private paymentService: PaymentService, // Port  
    private emailService: EmailService     // Port
  ) {}
  
  async processOrder(orderData: CreateOrderDTO) {
    // Pure business logic
    const order = new Order(orderData)
    
    if (!order.isValid()) {
      throw new Error('Invalid order')
    }
    
    // Usa ports - não sabe implementação
    const savedOrder = await this.orderRepo.save(order)
    const payment = await this.paymentService.charge(order.total, order.paymentMethod)
    
    if (payment.success) {
      order.markAsPaid()
      await this.orderRepo.update(order)
      await this.emailService.sendOrderConfirmation(order.customerEmail, order)
    }
    
    return order
  }
}

// 🔌 Ports - Interfaces que core define
interface OrderRepository {
  save(order: Order): Promise<Order>
  update(order: Order): Promise<Order>
  findById(id: string): Promise<Order>
}

interface PaymentService {
  charge(amount: number, method: PaymentMethod): Promise<PaymentResult>
}

// 🔧 Adapters - Implementações específicas
class PostgreSQLOrderRepository implements OrderRepository {
  async save(order: Order) {
    return await this.db.query('INSERT INTO orders...', order)
  }
}

class StripePaymentAdapter implements PaymentService {
  async charge(amount: number, method: PaymentMethod) {
    return await stripe.charges.create({
      amount: amount * 100,
      currency: 'brl',
      source: method.token
    })
  }
}

// 🏗️ Dependency Injection - Conecta tudo
const orderRepo = new PostgreSQLOrderRepository(db)
const paymentService = new StripePaymentAdapter(stripeClient)
const emailService = new SMTPEmailAdapter(nodemailer)

const orderService = new OrderService(orderRepo, paymentService, emailService)`}
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
              🏗️ Over-engineering
            </Text>
            <Text size="sm">
              CRUD simples não precisa disso. Use só quando complexidade
              justifica.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              📚 Learning curve
            </Text>
            <Text size="sm">
              Team precisa entender DI, interfaces, abstrações. Não é trivial.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🐌 Performance overhead
            </Text>
            <Text size="sm">
              Layers de abstração custam. Benchmarking é obrigatório.
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
              🏦 Banking Systems
            </Text>
            <Text size="sm" mb="xs">
              Core bancário isolado. Adapters para mainframe, APIs REST, mobile.
            </Text>
            <Text size="sm" c="green">
              15 anos sem reescrever business logic, só adapters
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🛒 E-commerce Platforms
            </Text>
            <Text size="sm" mb="xs">
              Same core. Adapters para PostgreSQL, MongoDB, Redis, Stripe,
              PayPal.
            </Text>
            <Text size="sm" c="green">
              Migração de infra sem downtime, zero bugs de business
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Alert color="indigo" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: "italic" }}>
            "Hexagonal: business logic no centro, resto é detalhe substituível."
          </Text>
          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Flexibilidade máxima: troca qualquer tecnologia externa
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Testing easier: mock tudo, test business logic isolado
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Trade-off: complexidade inicial vs flexibilidade futuro
              </Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

HexagonalArchitecture.metadata = {
  title: "Hexagonal Architecture",
  description:
    "Ports & Adapters - isola business logic no centro, conecta ao mundo externo via interfaces. Clean Architecture mais flexível.",
};
