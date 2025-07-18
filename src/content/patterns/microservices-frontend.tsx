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
} from '@tabler/icons-react';

export default function MicroservicesFrontendArchitecture() {
  return (
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
            <Code size="sm" mb="md">
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
            <Code size="sm" mb="md">
              {`// webpack.config.js - Module Federation
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    userApp: 'user@http://localhost:3001/remoteEntry.js',
    orderApp: 'order@http://localhost:3002/remoteEntry.js'
  }
})

// Shell carrega dinamicamente  
const UserProfile = React.lazy(() => import('userApp/UserProfile'))
const OrderHistory = React.lazy(() => import('orderApp/OrderHistory'))

function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <UserProfile userId={currentUser.id} />
      <OrderHistory userId={currentUser.id} />
    </Suspense>
  )
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>✅ Deploy independente, tech diversity</List.Item>
              <List.Item>❌ Runtime complexity, network dependency</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="orange" size="lg">
                Iframe
              </Badge>
              <Text fw={600}>Isolamento total</Text>
            </Group>
            <Text size="sm" c="dimmed" mb="md">
              Cada micro-frontend como iframe
            </Text>
            <Code size="sm" mb="md">
              {`// Shell com iframes
function Dashboard() {
  return (
    <Layout>
      <iframe 
        src="https://user-frontend.company.com/profile" 
        width="100%" 
        height="400px"
        title="User Profile"
      />
      <iframe 
        src="https://order-frontend.company.com/history"
        width="100%" 
        height="600px"
        title="Order History" 
      />
    </Layout>
  )
}`}
            </Code>
            <List size="sm" spacing={4}>
              <List.Item>✅ Isolamento perfeito, zero coupling</List.Item>
              <List.Item>
                ❌ UX ruim, SEO problem, performance overhead
              </List.Item>
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
              👥 Team autonomy
            </Text>
            <Text size="sm">
              Cada time domina seu pedaço. Deploy, stack, roadmap independentes.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🚀 Deploy velocity
            </Text>
            <Text size="sm">
              Payment team não espera User team. Features chegam mais rápido.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔧 Technology diversity
            </Text>
            <Text size="sm">
              React experts fazem React. Vue experts fazem Vue. Best tool for
              job.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              📈 Scaling organization
            </Text>
            <Text size="sm">
              30 devs num repo = merge hell. 5 times com 6 devs = produtividade.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplo Prático */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          💻 Exemplo: E-commerce Multi-team
        </Title>
        <Code block mb="md">
          {`// 🏗️ Shell App - orquestra micro-frontends
// apps/shell/src/App.tsx
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ModuleRegistry } from './moduleRegistry'

// Lazy load micro-frontends
const UserApp = React.lazy(() => import('userApp/App'))
const CatalogApp = React.lazy(() => import('catalogApp/App')) 
const CartApp = React.lazy(() => import('cartApp/App'))
const OrderApp = React.lazy(() => import('orderApp/App'))

function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  
  // Global state management via context
  const globalState = {
    user,
    cart,
    updateUser: setUser,
    updateCart: setCart
  }
  
  return (
    <GlobalStateProvider value={globalState}>
      <BrowserRouter>
        <Layout>
          <Header />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/profile/*" element={<UserApp />} />
              <Route path="/products/*" element={<CatalogApp />} />
              <Route path="/cart" element={<CartApp />} />
              <Route path="/orders/*" element={<OrderApp />} />
            </Routes>
          </Suspense>
          <Footer />
        </Layout>
      </BrowserRouter>
    </GlobalStateProvider>
  )
}

// 👤 User Micro-frontend (React + TypeScript)
// apps/user/src/App.tsx
export default function UserApp() {
  const { user, updateUser } = useGlobalState()
  
  return (
    <Routes>
      <Route path="/profile" element={<UserProfile user={user} />} />
      <Route path="/settings" element={<UserSettings user={user} onUpdate={updateUser} />} />
      <Route path="/addresses" element={<AddressBook user={user} />} />
    </Routes>
  )
}

// 🛒 Cart Micro-frontend (Vue 3 + Composition API) 
// apps/cart/src/App.vue
<template>
  <div>
    <CartItems :items="cart.items" @update="updateCartItems" />
    <CartSummary :total="cart.total" />
    <CheckoutButton @click="startCheckout" />
  </div>
</template>

<script setup>
import { inject } from 'vue'

const globalState = inject('globalState')
const { cart, updateCart } = globalState

const updateCartItems = (newItems) => {
  updateCart({ ...cart, items: newItems })
}

const startCheckout = () => {
  // Cross-app navigation
  window.location.href = '/orders/checkout'
}
</script>

// 📦 Order Micro-frontend (Svelte + SvelteKit)
// apps/order/src/App.svelte
<script>
  import { onMount } from 'svelte'
  import { globalState } from './stores/global.js'
  
  let orders = []
  
  onMount(async () => {
    orders = await fetchUserOrders($globalState.user.id)
  })
</script>

<main>
  <OrderHistory {orders} />
  <OrderTracking />
</main>

// 🔧 Module Federation Config
// apps/shell/webpack.config.js
const ModuleFederationPlugin = require('@module-federation/webpack')

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        userApp: process.env.NODE_ENV === 'production' 
          ? 'userApp@https://user.company.com/remoteEntry.js'
          : 'userApp@http://localhost:3001/remoteEntry.js',
        catalogApp: process.env.NODE_ENV === 'production'
          ? 'catalogApp@https://catalog.company.com/remoteEntry.js' 
          : 'catalogApp@http://localhost:3002/remoteEntry.js',
        cartApp: 'cartApp@http://localhost:3003/remoteEntry.js',
        orderApp: 'orderApp@http://localhost:3004/remoteEntry.js'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@company/design-system': { singleton: true }
      }
    })
  ]
}

// 📡 Cross-app Communication
// libs/event-bus/src/index.ts
class MicroFrontendEventBus {
  private events = new Map<string, Function[]>()
  
  emit(event: string, data: any) {
    const handlers = this.events.get(event) || []
    handlers.forEach(handler => handler(data))
  }
  
  on(event: string, handler: Function) {
    const handlers = this.events.get(event) || []
    this.events.set(event, [...handlers, handler])
  }
  
  off(event: string, handler: Function) {
    const handlers = this.events.get(event) || []
    this.events.set(event, handlers.filter(h => h !== handler))
  }
}

export const eventBus = new MicroFrontendEventBus()

// Usage across micro-frontends
eventBus.emit('cart:item-added', { productId: '123', quantity: 2 })
eventBus.on('user:logged-out', () => {
  // Clear cart, redirect to login, etc
})`}
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
              🕸️ Integration complexity
            </Text>
            <Text size="sm">
              Cross-app communication, shared state, routing. Complexity
              explode.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              📦 Bundle duplication
            </Text>
            <Text size="sm">
              Cada app carrega React, libs comuns. Network overhead
              significativo.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🔧 DevEx overhead
            </Text>
            <Text size="sm">
              Local development = 5 apps rodando. Build, test, debug mais
              complexo.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🎨 UX inconsistency
            </Text>
            <Text size="sm">
              Design system não garantido. User experience fragmentada.
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
              🛒 Amazon
            </Text>
            <Text size="sm" mb="xs">
              Times autônomos por categoria: Books, Electronics, Fashion. Deploy
              independente.
            </Text>
            <Text size="sm" c="green">
              Teams escalaram de 10 → 1000+ devs sem perder velocidade
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              💰 Klarna
            </Text>
            <Text size="sm" mb="xs">
              Banking app: cada feature financeira é micro-frontend separado.
            </Text>
            <Text size="sm" c="green">
              Deploy 100+ times/day, zero downtime, regulation compliance
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🏢 Microsoft Office
            </Text>
            <Text size="sm" mb="xs">
              Word, Excel, PowerPoint como micro-frontends no Office 365.
            </Text>
            <Text size="sm" c="green">
              Teams independentes, tech stacks diferentes, shared shell
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Patterns de Sucesso */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🎯 Patterns de Sucesso
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Communication
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Event bus global</List.Item>
              <List.Item>Shared context/state</List.Item>
              <List.Item>URL-based navigation</List.Item>
              <List.Item>PostMessage API</List.Item>
            </List>
          </Card>
          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Governance
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Design system mandatório</List.Item>
              <List.Item>API contracts bem definidos</List.Item>
              <List.Item>Shared libraries versioned</List.Item>
              <List.Item>E2E testing strategy</List.Item>
            </List>
          </Card>
        </Group>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Alert color="yellow" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: 'italic' }}>
            "Microservices Frontend: Conway's Law aplicado conscientemente.
            Organização define arquitetura."
          </Text>
          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Use quando: 30+ devs, domínios separados, deploy independente
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Team autonomy vs integration complexity</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Governance forte é obrigatório: design system, contracts,
                testing
              </Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

MicroservicesFrontendArchitecture.metadata = {
  title: 'Microservices Frontend',
  description:
    'Arquitetura distribuída onde cada domínio tem seu próprio frontend. Times autônomos, deploys independentes, tech diversity.',
};
