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
  IconStack3,
} from "@tabler/icons-react";

export default function LayeredArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="teal">
            <IconStack3 size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              📚 Layered Architecture
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Clean Architecture sem a complexidade - direto ao ponto
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          <Text span fw={700} c="teal">
            Camadas empilhadas
          </Text>
          : Presentation → Business → Data. Cada uma só fala com a de baixo.
          Simples, direto, funciona.
          <Text span fw={700} c="blue">
            Clean Architecture para mortais
          </Text>
          .
        </Text>

        <Code block>
          {`// 📱 Presentation Layer
class ProductController {
  constructor(private productService: ProductService) {}
  
  async getProducts(req, res) {
    const products = await this.productService.getAllProducts()
    res.json(products)
  }
}

// 💼 Business Layer  
class ProductService {
  constructor(private productRepo: ProductRepository) {}
  
  async getAllProducts() {
    const products = await this.productRepo.findAll()
    return products.filter(p => p.isActive)  // Business rule
  }
}

// 🗄️ Data Layer
class ProductRepository {
  async findAll() {
    return await db.collection('products').find().toArray()
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
            <Text fw={600} c="teal" mb="sm">
              🚀 Projetos médios
            </Text>
            <Text>
              Complexidade média. Não é CRUD, mas não é rocket science. Sweet
              spot.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="teal" mb="sm">
              👥 Team júnior/misto
            </Text>
            <Text>
              Entende fácil. Presentation, business, data. Conceitos claros.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="teal" mb="sm">
              ⏰ Deadline apertado
            </Text>
            <Text>
              Menos ceremony que Clean. Mais estrutura que bagunça.
              Produtividade alta.
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* As 3 Camadas */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          📚 As 3 Camadas Clássicas
        </Title>
        <Stack gap="lg">
          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="blue" size="lg">
                Presentation
              </Badge>
              <Text fw={600}>Controllers, Views, APIs</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Recebe requests, formata responses
            </Text>
            <Code size="sm" mb="md">
              {`// Express.js controller
app.get('/api/orders', async (req, res) => {
  const orders = await orderService.getOrdersByUser(req.user.id)
  res.json(orders.map(o => ({
    id: o.id,
    total: o.total,
    status: o.status,
    createdAt: o.createdAt
  })))
})`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>HTTP/GraphQL endpoints</List.Item>
              <List.Item>Input validation</List.Item>
              <List.Item>Response formatting</List.Item>
              <List.Item>Authentication/Authorization</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="green" size="lg">
                Business
              </Badge>
              <Text fw={600}>Services, Use Cases, Domain Logic</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Regras de negócio, validações, orquestração
            </Text>
            <Code size="sm" mb="md">
              {`class OrderService {
  async createOrder(userId: string, items: CartItem[]) {
    // Business rules
    if (items.length === 0) throw new Error('Empty cart')
    
    const user = await this.userRepo.findById(userId)
    if (!user.isActive) throw new Error('Inactive user')
    
    const total = items.reduce((sum, item) => sum + item.price, 0)
    if (total > user.creditLimit) throw new Error('Credit limit exceeded')
    
    // Orchestration
    const order = new Order(userId, items, total)
    await this.orderRepo.save(order)
    await this.emailService.sendOrderConfirmation(user.email, order)
    
    return order
  }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Business rules enforcement</List.Item>
              <List.Item>Use case orchestration</List.Item>
              <List.Item>Cross-cutting concerns</List.Item>
              <List.Item>Domain logic</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="orange" size="lg">
                Data
              </Badge>
              <Text fw={600}>Repositories, DAOs, External APIs</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Acesso a dados, persistência, integrações
            </Text>
            <Code size="sm" mb="md">
              {`class OrderRepository {
  async save(order: Order) {
    return await this.db.transaction(async (tx) => {
      const savedOrder = await tx.orders.create(order)
      
      for (const item of order.items) {
        await tx.orderItems.create({
          orderId: savedOrder.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price
        })
      }
      
      return savedOrder
    })
  }
  
  async findByUserId(userId: string) {
    return await this.db.orders.findMany({
      where: { userId },
      include: { items: true }
    })
  }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Database operations</List.Item>
              <List.Item>External API calls</List.Item>
              <List.Item>File system access</List.Item>
              <List.Item>Cache management</List.Item>
            </List>
          </Card>
        </Stack>
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
              📖 Simplicidade
            </Text>
            <Text size="sm">
              Todo mundo entende. Apresentação, negócio, dados. Linear, óbvio.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🚀 Produtividade alta
            </Text>
            <Text size="sm">
              Menos ceremony que Clean. Mais estrutura que bagunça. Sweet spot.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              👥 Onboarding fácil
            </Text>
            <Text size="sm">
              Dev novo entende em 1 dia. Padrão familiar, conceitos claros.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Layered vs Clean */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          ⚖️ Layered vs Clean Architecture
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="teal" mb="sm">
              Layered
            </Badge>
            <List size="sm" spacing={4} mb="md">
              <List.Item>3 camadas simples</List.Item>
              <List.Item>Dependência top-down</List.Item>
              <List.Item>Fácil de entender</List.Item>
              <List.Item>Rápido de implementar</List.Item>
              <List.Item>Menos flexível</List.Item>
            </List>
            <Text size="xs" c="dimmed">
              Melhor para: projetos médios, teams mistos, deadlines apertados
            </Text>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Clean
            </Badge>
            <List size="sm" spacing={4} mb="md">
              <List.Item>4+ camadas complexas</List.Item>
              <List.Item>Dependency Inversion</List.Item>
              <List.Item>Curva de aprendizado</List.Item>
              <List.Item>Setup inicial pesado</List.Item>
              <List.Item>Flexibilidade máxima</List.Item>
            </List>
            <Text size="xs" c="dimmed">
              Melhor para: projetos grandes, teams sêniores, long-term
              maintenance
            </Text>
          </Card>
        </Group>
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
              🔗 Tight coupling
            </Text>
            <Text size="sm">
              Camadas ficam muito dependentes. Mudança em uma quebra outras.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              💧 Business logic leak
            </Text>
            <Text size="sm">
              Regras de negócio vazam pra presentation ou data. Fica bagunçado.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🧪 Testing difícil
            </Text>
            <Text size="sm">
              Sem dependency inversion, mock é mais complicado. Integration
              tests pesados.
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
              🏢 Enterprise Apps
            </Text>
            <Text size="sm" mb="xs">
              CRMs, ERPs, dashboards internos. Funcionalidade &gt;
              flexibilidade.
            </Text>
            <Text size="sm" c="green">
              Desenvolvimento rápido, manutenção estável por anos
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              📊 Business Applications
            </Text>
            <Text size="sm" mb="xs">
              Sistemas de gestão, relatórios, workflows. Regras claras e
              estáveis.
            </Text>
            <Text size="sm" c="green">
              Produtividade alta, onboarding de devs em dias
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Stack */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Stack Típico
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Backend
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Express.js + TypeScript</List.Item>
              <List.Item>Spring Boot + Java</List.Item>
              <List.Item>ASP.NET Core + C#</List.Item>
              <List.Item>Django + Python</List.Item>
            </List>
          </Card>
          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Database
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>PostgreSQL + Prisma</List.Item>
              <List.Item>MySQL + Sequelize</List.Item>
              <List.Item>MongoDB + Mongoose</List.Item>
              <List.Item>SQL Server + Entity Framework</List.Item>
            </List>
          </Card>
        </Group>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Alert color="teal" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: "italic" }}>
            "Layered: o KISS principle aplicado à arquitetura. Simples,
            funciona, todo mundo entende."
          </Text>
          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>3 camadas: Presentation → Business → Data</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Simplicidade vs flexibilidade: chose simplicity</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Sweet spot para projetos médios e teams mistos</Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

LayeredArchitecture.metadata = {
  title: "Layered Architecture",
  description:
    "Arquitetura em 3 camadas clássica: Presentation, Business, Data. Simples, produtiva, funciona.",
};
