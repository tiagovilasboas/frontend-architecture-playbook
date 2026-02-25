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
          {`// 📱 Presentation Layer (React Component)
function ProductList() {
  const { products, isLoading } = useProducts()
  if (isLoading) return <Spinner />
  return products.map(p => <ProductCard key={p.id} product={p} />)
}

// 💼 Business Layer (Custom Hook / Service)
function useProducts() {
  const { data, isLoading } = useQuery(['products'], productApi.getAll)
  const products = data?.filter(p => p.isActive) ?? []  // Business rule
  return { products, isLoading }
}

// 🗄️ Data Layer (API Client)
const productApi = {
  getAll: () => fetch('/api/products').then(r => r.json()),
  getById: (id: string) => fetch(\`/api/products/\${id}\`).then(r => r.json()),
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
              <Text fw={600}>Components, Pages, UI</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Renderiza UI, captura eventos do usuário
            </Text>
            <Code block mb="md">
              {`// React component (Presentation)
function OrderList() {
  const { orders, isLoading } = useOrders()
  
  if (isLoading) return <Skeleton />
  
  return orders.map(order => (
    <OrderCard
      key={order.id}
      total={order.total}
      status={order.status}
      date={order.createdAt}
    />
  ))
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>React components e pages</List.Item>
              <List.Item>Event handlers e forms</List.Item>
              <List.Item>Layout e formatação</List.Item>
              <List.Item>Routing e navegação</List.Item>
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
            <Code block mb="md">
              {`// Custom hook (Business Layer)
function useCreateOrder() {
  const mutation = useMutation(orderApi.create)
  
  const createOrder = (items: CartItem[]) => {
    // Business rules
    if (items.length === 0) throw new Error('Carrinho vazio')
    
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    if (total < 10) throw new Error('Pedido mínimo: R$10')
    
    return mutation.mutateAsync({ items, total })
  }
  
  return { createOrder, isLoading: mutation.isPending }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Regras de negócio em hooks</List.Item>
              <List.Item>Validações e transformações</List.Item>
              <List.Item>Orquestração de estado</List.Item>
              <List.Item>Lógica de domínio</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="orange" size="lg">
                Data
              </Badge>
              <Text fw={600}>API Clients, Adapters, Storage</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Comunicação com APIs, cache, localStorage
            </Text>
            <Code block mb="md">
              {`// API client (Data Layer)
const orderApi = {
  create: (data: CreateOrderDTO) =>
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(r => r.json()),

  getByUser: (userId: string) =>
    fetch(\`/api/orders?user=\${userId}\`).then(r => r.json()),
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Fetch / Axios API clients</List.Item>
              <List.Item>localStorage / sessionStorage</List.Item>
              <List.Item>Cache com React Query / SWR</List.Item>
              <List.Item>Adapters para APIs externas</List.Item>
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
              Anemic domain model
            </Text>
            <Text size="sm" c="dimmed">
              Business logic vaza para services. Mantenha lógica no domínio.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Fat controllers
            </Text>
            <Text size="sm" c="dimmed">
              Componentes fazem muito. Delegue lógica para hooks e services.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Circular dependencies
            </Text>
            <Text size="sm" c="dimmed">
              Camadas dependem umas das outras. Mantenha dependência
              unidirecional.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Mantenha lógica no domínio:</strong> Rich domain model
              <br />
              <strong>Componentes magros:</strong> Só UI e eventos
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
                <strong>Frameworks:</strong> React, Next.js, Vue
              </List.Item>
              <List.Item>
                <strong>Testing:</strong> Vitest, Jest, Testing Library
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
                <strong>Martin Fowler:</strong>{' '}
                <a
                  href="https://martinfowler.com/bliki/PresentationDomainDataLayering.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Presentation Domain Data Layering
                </a>
              </List.Item>
              <List.Item>
                <strong>Bulletproof React:</strong>{' '}
                <a
                  href="https://github.com/alan2207/bulletproof-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Feature-based layered structure
                </a>
              </List.Item>
              <List.Item>
                <strong>Eric Elliott:</strong>{' '}
                <a
                  href="https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Software Architecture Patterns
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

LayeredArchitecture.metadata = {
  title: 'Layered Architecture',
  description:
    'Arquitetura em 3 camadas clássica: Presentation, Business, Data. Simples, produtiva, funciona.',
};
