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
  IconHexagon,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function HexagonalArchitecture() {
  // Overview Section
  const OverviewSection = () => (
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
            {' '}
            ports (interfaces)
          </Text>{' '}
          e{' '}
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
            <Code block mb="md">
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
            <Code block mb="md">
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
                <IconHexagon size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce Platform</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Migração de tecnologias
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Core: Business logic isolado</List.Item>
                  <List.Item>Ports: Payment, Inventory, Shipping</List.Item>
                  <List.Item>Adapters: Stripe, PayPal, AWS S3</List.Item>
                  <List.Item>Migração sem afetar core</List.Item>
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
                <Title order={4}>Banking System</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Testabilidade crítica
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Core: Transaction logic</List.Item>
                  <List.Item>
                    Ports: Account, Transaction, Notification
                  </List.Item>
                  <List.Item>Adapters: Database, SMS, Email</List.Item>
                  <List.Item>Unit tests sem dependências</List.Item>
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
                <Title order={4}>SaaS Platform</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Projeto de longo prazo
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Core: Subscription logic</List.Item>
                  <List.Item>Ports: User, Billing, Analytics</List.Item>
                  <List.Item>Adapters: Multiple providers</List.Item>
                  <List.Item>Evolução sem quebrar core</List.Item>
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
              Hexagonal para projetos simples. Use apenas quando há complexidade
              real.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Interface explosion
            </Text>
            <Text size="sm" c="dimmed">
              Muitas interfaces podem complicar. Mantenha foco no essencial.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Performance overhead
            </Text>
            <Text size="sm" c="dimmed">
              Muitas abstrações podem impactar performance. Use com moderação.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Use quando necessário:</strong> Complexidade real apenas
              <br />
              <strong>Mantenha simples:</strong> Interfaces essenciais
              <br />
              <strong>Monitore performance:</strong> Abstrações com moderação
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
                <strong>Dependency Injection:</strong> Inversify, Awilix
              </List.Item>
              <List.Item>
                <strong>Testing:</strong> Jest, Mockito, TestContainers
              </List.Item>
              <List.Item>
                <strong>Architecture:</strong> Clean Architecture, DDD
              </List.Item>
              <List.Item>
                <strong>Frameworks:</strong> NestJS, Spring Boot
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Alistair Cockburn:</strong>{' '}
                <a
                  href="https://alistair.cockburn.us/hexagonal-architecture/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hexagonal Architecture (original)
                </a>
              </List.Item>
              <List.Item>
                <strong>Netflix Tech Blog:</strong>{' '}
                <a
                  href="https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ready for Changes with Hexagonal Architecture
                </a>
              </List.Item>
              <List.Item>
                <strong>Herberto Graca:</strong>{' '}
                <a
                  href="https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DDD, Hexagonal, Clean - How I Put It Together
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

HexagonalArchitecture.metadata = {
  title: 'Hexagonal Architecture',
  description:
    'Ports & Adapters - isola business logic no centro, conecta ao mundo externo via interfaces. Clean Architecture mais flexível.',
};
