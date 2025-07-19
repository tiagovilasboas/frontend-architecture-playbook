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
  IconStack3,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function LayeredArchitecture() {
  // Overview Section
  const OverviewSection = () => (
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
            <Code mb="md">
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
            <Code mb="md">
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
              <Text fw={600}>Repositories, DAOs, Database</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Persistência, queries, acesso a dados
            </Text>
            <Code mb="md">
              {`class OrderRepository {
  async save(order: Order) {
    return await db.collection('orders').insertOne(order)
  }
  
  async findByUser(userId: string) {
    return await db.collection('orders')
      .find({ userId })
      .sort({ createdAt: -1 })
      .toArray()
  }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Database operations</List.Item>
              <List.Item>External APIs</List.Item>
              <List.Item>File system access</List.Item>
              <List.Item>Cache management</List.Item>
            </List>
          </Card>
        </Stack>
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
                <IconStack3 size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce Platform</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Separação clara de responsabilidades
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Presentation: REST APIs, admin panel</List.Item>
                  <List.Item>Business: Order processing, inventory</List.Item>
                  <List.Item>Data: Product catalog, user management</List.Item>
                  <List.Item>Escalabilidade e manutenibilidade</List.Item>
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
                <Title order={4}>Content Management</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  WordPress-like system
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Presentation: Admin UI, public site</List.Item>
                  <List.Item>Business: Content workflow, permissions</List.Item>
                  <List.Item>Data: Articles, media, users</List.Item>
                  <List.Item>
                    Flexibilidade para diferentes tipos de conteúdo
                  </List.Item>
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
                <Title order={4}>SaaS Dashboard</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Analytics e métricas
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Presentation: Charts, tables, filters</List.Item>
                  <List.Item>
                    Business: Data aggregation, calculations
                  </List.Item>
                  <List.Item>Data: Metrics, events, user data</List.Item>
                  <List.Item>Performance otimizada</List.Item>
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
              ❌ Anemic domain model
            </Text>
            <Text size="sm" c="dimmed">
              Business logic vaza para services. Mantenha lógica no domínio.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Fat controllers
            </Text>
            <Text size="sm" c="dimmed">
              Controllers fazem muito. Delegue para services.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Circular dependencies
            </Text>
            <Text size="sm" c="dimmed">
              Camadas dependem umas das outras. Mantenha dependência
              unidirecional.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Mantenha lógica no domínio:</strong> Rich domain model
              <br />
              <strong>Controllers magros:</strong> Só routing e formatação
              <br />
              <strong>Dependência unidirecional:</strong> Presentation →
              Business → Data
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
                <strong>Frameworks:</strong> Express.js, Fastify, Koa
              </List.Item>
              <List.Item>
                <strong>Testing:</strong> Jest, Mocha, Supertest
              </List.Item>
              <List.Item>
                <strong>Architecture:</strong> Clean Architecture, DDD
              </List.Item>
              <List.Item>
                <strong>Patterns:</strong> Repository, Service Layer
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>GitHub:</strong> API design
              </List.Item>
              <List.Item>
                <strong>Stripe:</strong> Payment processing
              </List.Item>
              <List.Item>
                <strong>Shopify:</strong> E-commerce platform
              </List.Item>
              <List.Item>
                <strong>Discord:</strong> Real-time communication
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

LayeredArchitecture.metadata = {
  title: 'Layered Architecture',
  description:
    'Arquitetura em 3 camadas clássica: Presentation, Business, Data. Simples, produtiva, funciona.',
};
