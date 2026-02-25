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
  IconApi,
  IconStack,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function BFFArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="violet">
            <IconApi size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              🔌 Backend-for-Frontend (BFF)
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Uma API sob medida pro seu front
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="violet">
            <IconStack size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            🤔 O que é?
          </Title>
        </Group>

        <Text size="lg" mb="md">
          Sabe quando você tem 5 APIs diferentes e precisa fazer{' '}
          <Text span fw={700} c="violet">
            7 requests
          </Text>{' '}
          pra montar uma tela? BFF é uma camada que{' '}
          <Text span fw={700} c="blue">
            agrega, transforma e otimiza
          </Text>{' '}
          dados especificamente pro seu frontend.
        </Text>

        <Text mb="lg">
          É tipo ter um{' '}
          <Text span fw={700}>
            garçom exclusivo
          </Text>{' '}
          que conhece exatamente como você gosta do seu pedido, em vez de ir
          direto na cozinha negociar com 5 chefs diferentes.
        </Text>

        <Code block>
          {`// ❌ Sem BFF - Frontend vira spaghetti de requests
useEffect(() => {
  Promise.all([
    fetch('/api/users/123'),           // User service
    fetch('/api/orders/user/123'),     // Order service  
    fetch('/api/payments/user/123'),   // Payment service
    fetch('/api/shipping/user/123'),   // Shipping service
    fetch('/api/reviews/user/123')     // Review service
  ]).then(([user, orders, payments, shipping, reviews]) => {
    // 🔥 Agora precisa juntar tudo no frontend
    const profile = {
      ...user,
      totalSpent: payments.reduce((sum, p) => sum + p.amount, 0),
      ordersCount: orders.length,
      // ... mais lógica de agregação
    }
  })
}, [])

// ✅ Com BFF - Um request resolve tudo
useEffect(() => {
  fetch('/bff/user-profile/123')
    .then(profile => setProfile(profile))
    // BFF já agregou, transformou e otimizou tudo
}, [])`}
        </Code>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Arquitetura Visual */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🏗️ Como funciona na prática?
        </Title>

        <Code block mb="md">
          {`┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React App     │    │   Vue Mobile    │    │   Next.js Web   │
│                 │    │                 │    │                 │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          │              ┌───────┴──────────────────────┘
          │              │
          ▼              ▼
  ┌─────────────────────────────────────────────────────────────┐
  │                    BFF Layer                                │
  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
  │  │  Mobile BFF │  │ Desktop BFF │  │   Admin Panel BFF   │ │
  │  │             │  │             │  │                     │ │
  │  │ • Lean data │  │ • Full data │  │ • Analytics data    │ │
  │  │ • Optimized │  │ • Rich UI   │  │ • Bulk operations   │ │
  │  └─────────────┘  └─────────────┘  └─────────────────────┘ │
  └─────────────────────┬───────────────────────────────────────┘
                        │
          ┌─────────────┼─────────────────────────────┐
          ▼             ▼             ▼               ▼
  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
  │ User Service│ │Order Service│ │Payment API  │ │Shipping API │
  │             │ │             │ │             │ │             │
  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘`}
        </Code>

        <Alert color="blue" icon={<IconBulb size={16} />}>
          <Text fw={600}>💡 A mágica do BFF:</Text>
          <List size="sm" mt="xs">
            <List.Item>Cada frontend tem sua API otimizada</List.Item>
            <List.Item>BFF faz agregação, cache e transformação</List.Item>
            <List.Item>Microservices continuam independentes</List.Item>
            <List.Item>Frontend não conhece complexidade interna</List.Item>
          </List>
        </Alert>
      </Paper>

      {/* Quando usar? */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="orange">
            <IconBulb size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            🎯 Quando usar?
          </Title>
        </Group>

        <Stack gap="md">
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              🏢 Múltiplas APIs internas
            </Text>
            <Text>
              Microservices que não "conversam" bem. Cada um tem sua estrutura,
              versionamento, formato.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              📱 Mobile vs Desktop
            </Text>
            <Text>
              App mobile precisa de dados otimizados. Web desktop quer tudo
              detalhado. Mesma API não serve.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              🔄 Over/Under-fetching
            </Text>
            <Text>
              GraphQL é overkill mas REST genérica traz dados demais ou de menos
              pro que você precisa.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              🎭 APIs de terceiros
            </Text>
            <Text>
              Stripe, PayPal, AWS - cada uma com formato diferente. BFF
              normaliza tudo.
            </Text>
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Multi-device (TV, mobile, web)</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Um BFF por tipo de dispositivo
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>TV BFF: dados otimizados para TV</List.Item>
                  <List.Item>Mobile BFF: dados para app</List.Item>
                  <List.Item>Web BFF: dados para browser</List.Item>
                  <List.Item>Agregação de múltiplos serviços</List.Item>
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
                <Title order={4}>Multi-domínio (features isoladas)</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Um BFF por domínio de negócio
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Player BFF: agrega dados de playback</List.Item>
                  <List.Item>Search BFF: agrega dados de busca</List.Item>
                  <List.Item>Profile BFF: agrega dados do usuário</List.Item>
                  <List.Item>Normalização de APIs externas</List.Item>
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
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  BFF para diferentes funcionalidades
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Catalog BFF: dados de produtos</List.Item>
                  <List.Item>Checkout BFF: dados de pagamento</List.Item>
                  <List.Item>User BFF: dados de usuário</List.Item>
                  <List.Item>Integração com APIs de pagamento</List.Item>
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
              Duplicação de lógica
            </Text>
            <Text size="sm" c="dimmed">
              BFFs podem duplicar lógica de negócio. Use shared libraries ou
              microservices bem definidos.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Complexidade de deploy
            </Text>
            <Text size="sm" c="dimmed">
              Múltiplos BFFs = múltiplos deploys. Use CI/CD automatizado e
              versionamento consistente.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Over-engineering
            </Text>
            <Text size="sm" c="dimmed">
              BFF para projetos simples é overkill. Use apenas quando há
              múltiplas APIs ou frontends.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Uma API antes de múltiplas
              <br />
              <strong>Compartilhe código:</strong> Libraries entre BFFs
              <br />
              <strong>Automatize deploy:</strong> CI/CD para todos os BFFs
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
                <strong>Apollo Server:</strong> GraphQL BFF
              </List.Item>
              <List.Item>
                <strong>Express.js:</strong> REST BFF simples
              </List.Item>
              <List.Item>
                <strong>Fastify:</strong> BFF de alta performance
              </List.Item>
              <List.Item>
                <strong>NestJS:</strong> BFF com TypeScript
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Sam Newman:</strong>{' '}
                <a
                  href="https://samnewman.io/patterns/architectural/bff/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backends For Frontends (original)
                </a>
              </List.Item>
              <List.Item>
                <strong>Phil Calçado:</strong>{' '}
                <a
                  href="https://philcalcado.com/2015/09/18/the_back_end_for_front_end_pattern_bff.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The BFF Pattern
                </a>
              </List.Item>
              <List.Item>
                <strong>Next.js:</strong>{' '}
                <a
                  href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Actions como BFF
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

BFFArchitecture.metadata = {
  title: 'Backend-for-Frontend (BFF)',
  description:
    'Como criar uma API sob medida pro seu frontend, agregando dados de múltiplos services de forma otimizada.',
};
