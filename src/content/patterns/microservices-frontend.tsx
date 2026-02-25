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
  IconNetworkOff,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function MicroservicesFrontendArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="yellow">
            <IconNetworkOff size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              🕸️ Microservices Frontend
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Dividir pra conquistar - times, deploys, responsabilidades
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          <Text span fw={700} c="yellow">
            Frontend espelhando backend
          </Text>
          : cada microservice tem seu próprio frontend. Times autônomos, deploys
          independentes, tecnologias diferentes.
          <Text span fw={700} c="blue">
            Conway's Law
          </Text>{' '}
          aplicado conscientemente.
        </Text>

        <Code block>
          {`// ❌ Monolito Frontend - tudo junto
src/
├── components/
│   ├── UserProfile/
│   ├── OrderHistory/  
│   ├── PaymentMethods/
│   ├── ProductCatalog/
│   └── ShoppingCart/
└── pages/
    ├── dashboard.tsx  // 5 teams mexendo no mesmo arquivo
    └── checkout.tsx   // Deploy = tudo junto

// ✅ Microservices Frontend - separado por domínio
user-service-frontend/     (Team: Auth & Profile)
├── src/components/UserProfile/
├── src/pages/profile.tsx  
└── deploy: frontend-user.vercel.app

order-service-frontend/    (Team: Orders & History)  
├── src/components/OrderHistory/
├── src/pages/orders.tsx
└── deploy: frontend-orders.vercel.app

payment-service-frontend/  (Team: Payments)
├── src/components/PaymentMethods/
├── src/pages/payments.tsx
└── deploy: frontend-payments.vercel.app

// Shell App - orquestra tudo
shell-app/
├── src/
│   ├── shell.tsx          // Layout + navigation
│   └── moduleRegistry.ts  // Registra micro-frontends
└── deploy: main-app.vercel.app`}
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
            <Text fw={600} c="yellow" mb="sm">
              👥 Times grandes (30+ devs)
            </Text>
            <Text>
              Conway's Law: arquitetura vai espelhar organização. Aceite e
              otimize pra isso.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="yellow" mb="sm">
              🏢 Domínios diferentes
            </Text>
            <Text>
              User, Order, Payment, Catalog. Business domains naturalmente
              separados.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="yellow" mb="sm">
              ⚡ Deploy independente
            </Text>
            <Text>
              Payment team deploy sem quebrar User. Zero coordination overhead.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="yellow" mb="sm">
              🔧 Tech diversity
            </Text>
            <Text>
              React, Vue, Angular no mesmo app. Team escolhe stack que domina.
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Estratégias de Composição */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🧩 Estratégias de Composição
        </Title>
        <Stack gap="lg">
          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="blue" size="lg">
                Build-time
              </Badge>
              <Text fw={600}>NPM packages</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Micro-frontends como bibliotecas
            </Text>
            <Code block mb="md">
              {`// Shell app - instala micro-frontends
{
  "dependencies": {
    "@company/user-frontend": "^1.2.0",
    "@company/order-frontend": "^2.1.0", 
    "@company/payment-frontend": "^1.0.5"
  }
}

// Shell renders micro-frontends
import { UserProfile } from '@company/user-frontend'
import { OrderHistory } from '@company/order-frontend'

function Dashboard() {
  return (
    <Layout>
      <UserProfile userId={currentUser.id} />
      <OrderHistory userId={currentUser.id} />
    </Layout>
  )
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>✅ Type safety, bundle optimization</List.Item>
              <List.Item>❌ Deploy coupling, versioning hell</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="green" size="lg">
                Runtime
              </Badge>
              <Text fw={600}>Module Federation / Single-SPA</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Carregar micro-frontends dinamicamente
            </Text>
            <Code block mb="md">
              {`// webpack.config.js - Module Federation
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    userApp: 'user@http://localhost:3001/remoteEntry.js',
    orderApp: 'order@http://localhost:3002/remoteEntry.js'
  }
})

// Shell carrega dinamicamente
const UserApp = React.lazy(() => import('userApp/UserProfile'))
const OrderApp = React.lazy(() => import('orderApp/OrderHistory'))`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>✅ Deploy independente, runtime loading</List.Item>
              <List.Item>❌ Complexidade, performance overhead</List.Item>
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Streaming de Música</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Cenário: plataforma com player, busca e biblioteca
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>
                    Cada feature em seu próprio micro-frontend
                  </List.Item>
                  <List.Item>Times independentes por domínio</List.Item>
                  <List.Item>Deploy independente por feature</List.Item>
                  <List.Item>Shell app orquestra carregamento</List.Item>
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
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Cenário: catálogo, checkout e conta separados
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Catálogo: navegação e busca</List.Item>
                  <List.Item>Checkout: fluxo de pagamento isolado</List.Item>
                  <List.Item>Conta: perfil e pedidos</List.Item>
                  <List.Item>Times autônomos por domínio de negócio</List.Item>
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
                <Title order={4}>Dashboard Corporativo</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Cenário: múltiplos módulos de diferentes times
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Módulos carregados sob demanda</List.Item>
                  <List.Item>Cada time mantém seu módulo</List.Item>
                  <List.Item>Shared design system entre módulos</List.Item>
                  <List.Item>Versionamento independente</List.Item>
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
              Complexidade excessiva
            </Text>
            <Text size="sm" c="dimmed">
              Micro-frontends para times pequenos é overkill. Use apenas quando
              há múltiplos times independentes.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Performance degradada
            </Text>
            <Text size="sm" c="dimmed">
              Múltiplos bundles, carregamento lento. Use code splitting e lazy
              loading.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Inconsistência de UX
            </Text>
            <Text size="sm" c="dimmed">
              Diferentes tecnologias podem criar UX inconsistente. Use design
              system compartilhado.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Monolito antes de micro-frontends
              <br />
              <strong>Use design system:</strong> Consistência visual
              <br />
              <strong>Otimize performance:</strong> Code splitting e lazy
              loading
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
                <strong>Module Federation:</strong> Webpack 5
              </List.Item>
              <List.Item>
                <strong>Single-SPA:</strong> Framework micro-frontends
              </List.Item>
              <List.Item>
                <strong>Nx:</strong> Monorepo com micro-frontends
              </List.Item>
              <List.Item>
                <strong>Bit:</strong> Component-driven development
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Artigos e Referências
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Martin Fowler:</strong>{' '}
                <a
                  href="https://martinfowler.com/articles/micro-frontends.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Micro Frontends
                </a>
              </List.Item>
              <List.Item>
                <strong>Module Federation:</strong>{' '}
                <a
                  href="https://module-federation.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentação oficial
                </a>
              </List.Item>
              <List.Item>
                <strong>micro-frontends.org:</strong>{' '}
                <a
                  href="https://micro-frontends.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guia completo
                </a>
              </List.Item>
              <List.Item>
                <strong>Luca Mezzalira:</strong>{' '}
                <a
                  href="https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Building Micro-Frontends (O'Reilly)
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

MicroservicesFrontendArchitecture.metadata = {
  title: 'Microservices Frontend',
  description:
    'Arquitetura distribuída onde cada domínio tem seu próprio frontend. Times autônomos, deploys independentes, tech diversity.',
};
