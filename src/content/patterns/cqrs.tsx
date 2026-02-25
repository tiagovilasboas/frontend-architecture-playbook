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
  IconGitFork,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function CQRSArchitecture() {
  // Overview Section
  const OverviewSection = () => (
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
            <Code block mb="md">
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
            <Code block mb="md">
              {`class GetOrdersQuery {
  constructor(
    public userId: string,
    public status?: OrderStatus,
    public limit: number = 20
  ) {}
}

class OrderQueryHandler {
  async handle(query: GetOrdersQuery) {
    // Otimizado pra leitura
    const sql = \`
      SELECT o.id, o.total, o.status, o.created_at,
             u.name as user_name
      FROM orders o
      JOIN users u ON o.user_id = u.id
      WHERE o.user_id = ?
      \${query.status ? 'AND o.status = ?' : ''}
      ORDER BY o.created_at DESC
      LIMIT ?
    \`
    
    const params = [query.userId]
    if (query.status) params.push(query.status)
    params.push(query.limit)
    
    return await this.db.query(sql, params)
  }
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>Foco em performance</List.Item>
              <List.Item>Queries otimizadas</List.Item>
              <List.Item>Cache quando possível</List.Item>
              <List.Item>Retorna dados prontos</List.Item>
            </List>
          </Card>
        </Group>
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
                <IconRocket size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Separação de leitura e escrita
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>
                    Commands: Criar pedido, atualizar estoque
                  </List.Item>
                  <List.Item>
                    Queries: Listar produtos, buscar pedidos
                  </List.Item>
                  <List.Item>Performance otimizada para cada caso</List.Item>
                  <List.Item>Business rules isoladas</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconGitFork size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Dashboard Analytics</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Queries otimizadas para relatórios
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Commands: Atualizar métricas</List.Item>
                  <List.Item>Queries: Relatórios complexos</List.Item>
                  <List.Item>Cache para queries pesadas</List.Item>
                  <List.Item>Performance crítica</List.Item>
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
                <Title order={4}>Social Media</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Feed otimizado para leitura
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Commands: Criar post, like</List.Item>
                  <List.Item>Queries: Feed, timeline, busca</List.Item>
                  <List.Item>Read model específico</List.Item>
                  <List.Item>Cache agressivo</List.Item>
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
              Over-engineering
            </Text>
            <Text size="sm" c="dimmed">
              CQRS para aplicações simples. Use apenas quando há complexidade
              real.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Eventual consistency
            </Text>
            <Text size="sm" c="dimmed">
              Read e write models podem ficar desincronizados. Implemente sync.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Complexidade desnecessária
            </Text>
            <Text size="sm" c="dimmed">
              Muitos handlers e models. Mantenha simples quando possível.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Use quando necessário:</strong> Complexidade real apenas
              <br />
              <strong>Implemente sync:</strong> Eventual consistency
              <br />
              <strong>Mantenha simples:</strong> Não over-engineer
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
                <strong>MediatR:</strong> Command/Query separation
              </List.Item>
              <List.Item>
                <strong>Axon Framework:</strong> CQRS implementation
              </List.Item>
              <List.Item>
                <strong>EventStore:</strong> Event sourcing with CQRS
              </List.Item>
              <List.Item>
                <strong>NestJS:</strong> Built-in CQRS support
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
                  href="https://martinfowler.com/bliki/CQRS.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CQRS
                </a>
              </List.Item>
              <List.Item>
                <strong>Greg Young:</strong>{' '}
                <a
                  href="https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CQRS Documents
                </a>
              </List.Item>
              <List.Item>
                <strong>TanStack Query:</strong>{' '}
                <a
                  href="https://tanstack.com/query/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CQRS no frontend (read/write separation)
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

CQRSArchitecture.metadata = {
  title: 'CQRS Frontend',
  description:
    'Command Query Responsibility Segregation - separa leitura de escrita para performance e clareza de responsabilidades.',
};
