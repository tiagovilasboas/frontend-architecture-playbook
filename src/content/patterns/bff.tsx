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
  IconApi,
} from '@tabler/icons-react';

export default function BFFArchitecture() {
  return (
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
              🚀 Performance brutal
            </Text>
            <Text size="sm">
              1 request em vez de 7. Menos latência, menos waterfalls, menos
              loading states.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🎯 Dados sob medida
            </Text>
            <Text size="sm">
              Mobile recebe 10KB. Desktop recebe 100KB. Cada um o que precisa.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔒 Security por design
            </Text>
            <Text size="sm">
              Frontend nunca fala direto com APIs críticas. BFF filtra e
              controla acesso.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🛠️ Frontend mais limpo
            </Text>
            <Text size="sm">
              Menos lógica de integração. Mais foco na UX e menos em transformar
              dados.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplo Prático */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="orange">
            <IconCode size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            💻 Exemplo Prático: Dashboard E-commerce
          </Title>
        </Group>

        <Text mb="md">
          Cenário: Dashboard que mostra{' '}
          <Text span fw={700}>
            vendas + inventário + reviews
          </Text>{' '}
          de 3 microservices diferentes.
        </Text>

        <Code block mb="md">
          {`// bff/routes/dashboard.ts (Node.js + Express)
app.get('/bff/dashboard/:userId', async (req, res) => {
  const { userId } = req.params
  
  try {
    // 🔥 BFF orquestra chamadas paralelas
    const [sales, inventory, reviews] = await Promise.all([
      salesService.getMetrics(userId, { period: '30d' }),
      inventoryService.getLowStock(userId),
      reviewsService.getRecent(userId, { limit: 5 })
    ])
    
    // 🎯 BFF agrega e transforma dados
    const dashboard = {
      summary: {
        totalSales: sales.reduce((sum, s) => sum + s.amount, 0),
        ordersCount: sales.length,
        avgRating: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
        lowStockItems: inventory.filter(item => item.quantity < 10).length
      },
      recentSales: sales.slice(0, 10).map(sale => ({
        id: sale.id,
        customerName: sale.customer.name,
        amount: sale.amount,
        date: sale.createdAt,
        status: mapSaleStatus(sale.status) // BFF faz transformação
      })),
      alerts: [
        ...inventory
          .filter(item => item.quantity < 5)
          .map(item => ({
            type: 'stock',
            message: \`\${item.name} está acabando (\${item.quantity} restantes)\`,
            priority: 'high'
          })),
        ...reviews
          .filter(review => review.rating <= 2)
          .map(review => ({
            type: 'review',
            message: \`Review negativa: \${review.comment}\`,
            priority: 'medium'
          }))
      ]
    }
    
    res.json(dashboard)
  } catch (error) {
    // BFF lida com falhas de microservices
    res.status(500).json({ 
      error: 'Dashboard temporariamente indisponível' 
    })
  }
})

// Frontend super limpo
function Dashboard() {
  const [dashboard, setDashboard] = useState(null)
  
  useEffect(() => {
    // ✅ Um request resolve tudo
    fetch(\`/bff/dashboard/\${userId}\`)
      .then(res => res.json())
      .then(setDashboard)
  }, [userId])
  
  if (!dashboard) return <Loading />
  
  return (
    <div>
      <MetricsCards data={dashboard.summary} />
      <SalesTable sales={dashboard.recentSales} />
      <AlertsPanel alerts={dashboard.alerts} />
    </div>
  )
}`}
        </Code>

        <Alert color="blue" icon={<IconBulb size={16} />}>
          <Text fw={600}>💡 O que o BFF fez:</Text>
          <List size="sm" mt="xs">
            <List.Item>Agregou dados de 3 services diferentes</List.Item>
            <List.Item>Transformou formatos inconsistentes</List.Item>
            <List.Item>Gerou insights (alertas, métricas)</List.Item>
            <List.Item>Tratou erros de forma transparente</List.Item>
            <List.Item>Entregou dados prontos pro UI</List.Item>
          </List>
        </Alert>
      </Paper>

      {/* BFF vs Alternativas */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          ⚖️ BFF vs Alternativas
        </Title>

        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="red" mb="sm">
              ❌ Direto nas APIs
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>7+ requests por tela</List.Item>
              <List.Item>Frontend vira spaghetti</List.Item>
              <List.Item>Lógica de negócio no client</List.Item>
              <List.Item>Security nightmare</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="orange" mb="sm">
              ⚠️ GraphQL
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Complexidade alta</List.Item>
              <List.Item>N+1 queries problem</List.Item>
              <List.Item>Overhead para casos simples</List.Item>
              <List.Item>Curva de aprendizado</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              ✅ BFF
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Controle total da API</List.Item>
              <List.Item>Otimizado por frontend</List.Item>
              <List.Item>Flexibilidade máxima</List.Item>
              <List.Item>Fácil de implementar</List.Item>
            </List>
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
              🏗️ Mais infraestrutura
            </Text>
            <Text size="sm" mb="xs">
              BFF é outro service pra manter. Deploy, monitoring, scaling, logs.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              Comece simples (Express + Redis) e evolua conforme necessário.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🔄 Duplicação de lógica
            </Text>
            <Text size="sm" mb="xs">
              Regras de negócio podem vazar pro BFF e duplicar com
              microservices.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              BFF só agrega e transforma. Lógica fica nos services.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              📊 Single point of failure
            </Text>
            <Text size="sm" mb="xs">
              BFF cai = frontend para. Ironicamente, pode reduzir
              disponibilidade.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              Circuit breakers, fallbacks, cache resiliente.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              ⏱️ Latência extra
            </Text>
            <Text size="sm" mb="xs">
              Mais um hop na rede. Frontend → BFF → Services.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              Cache agressivo, conexões keep-alive, deploy próximo.
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
              📺 Netflix
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{' '}
              700+ microservices, cada device precisava de dados diferentes
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              BFF específico para TV, mobile, web - cada um otimizado
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{' '}
              -60% requests, +40% performance, UX específica por device
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🎵 Spotify
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{' '}
              Apps mobile faziam 20+ requests pra montar playlist
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              BFF que agrega músicas + metadata + recommendations
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{' '}
              Tempo de carregamento de playlist: 3s → 500ms
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🚗 Uber
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{' '}
              Driver app e rider app precisavam de dados similares mas
              formatados diferente
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              BFF dedicado pra cada app com lógica específica de agregação
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{' '}
              Times independentes, deploy sem conflito, UX otimizada
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Implementação */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Stack Recomendado
        </Title>

        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Runtime
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Node.js:
                </Text>{' '}
                Express, Fastify, Koa
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Python:
                </Text>{' '}
                FastAPI, Flask
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Go:
                </Text>{' '}
                Gin, Echo, Fiber
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Rust:
                </Text>{' '}
                Axum, Warp
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Cache
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Redis:
                </Text>{' '}
                Cache distribuído
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Memcached:
                </Text>{' '}
                Cache simples
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  In-memory:
                </Text>{' '}
                Cache local
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  CDN:
                </Text>{' '}
                Cache de borda
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="orange" mb="sm">
              Ferramentas
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Docker:
                </Text>{' '}
                Deploy consistente
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  K8s:
                </Text>{' '}
                Orquestração
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Istio:
                </Text>{' '}
                Service mesh
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Jaeger:
                </Text>{' '}
                Distributed tracing
              </List.Item>
            </List>
          </Card>
        </Group>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="green">
            <IconCheck size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            📝 Resumo
          </Title>
        </Group>

        <Alert color="violet" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: 'italic' }}>
            "BFF é o garçom que traduz o que você quer pro chef da cozinha - e
            traz tudo numa bandeja só."
          </Text>

          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Use quando tem múltiplas APIs que não "conversam" bem</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Otimiza requests: 7 viram 1, dados sob medida por frontend
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Trade-off: performance vs complexidade de infraestrutura
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Netflix, Spotify, Uber usam - e você deveria considerar
              </Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

BFFArchitecture.metadata = {
  title: 'Backend-for-Frontend (BFF)',
  description:
    'Como criar uma API sob medida pro seu frontend, agregando dados de múltiplos services de forma otimizada.',
};
