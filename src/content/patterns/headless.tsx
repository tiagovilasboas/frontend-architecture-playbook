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
  IconDatabase,
} from "@tabler/icons-react";

export default function HeadlessArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="orange">
            <IconDatabase size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              🔌 Headless/API-First Architecture
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Separação igreja-estado entre content e apresentação
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          <Text span fw={700} c="orange">
            Backend que só serve dados
          </Text>{" "}
          +
          <Text span fw={700} c="blue">
            {" "}
            frontend que só renderiza
          </Text>
          . Zero acoplamento. CMS não dita como seu site vai parecer.
        </Text>

        <Code block>
          {`// ❌ CMS tradicional - WordPress, Drupal
Theme.php controla TUDO:
- Como dados são buscados
- Como HTML é gerado  
- Como CSS é aplicado
- Mudança = mexer no backend

// ✅ Headless - Strapi, Contentful, Sanity
Backend: { "title": "iPhone 15", "price": 4999 }
Frontend: fetch('/api/products') → React/Vue/Angular/qualquer coisa`}
        </Code>
      </Paper>

      {/* Quando usar? */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🎯 Quando usar?
        </Title>
        <Stack gap="md">
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              📱 Multi-channel
            </Text>
            <Text>
              Website + app mobile + smartwatch + Alexa. Mesmo conteúdo,
              interfaces diferentes.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              ⚡ Performance crítica
            </Text>
            <Text>
              Frontend otimizado sem bloat do CMS. CDN, SSG, cache agressivo.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              👥 Teams separados
            </Text>
            <Text>
              Devs fazem frontend. Content team mexe no CMS. Zero conflito.
            </Text>
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
              🚀 Performance brutal
            </Text>
            <Text size="sm">
              Frontend estático + CDN. Time to First Byte abaixo de 100ms.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔧 Tech stack livre
            </Text>
            <Text size="sm">
              Backend PHP, frontend React. Ou Django + Vue. Ou .NET + Angular.
              Tanto faz.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              📈 Escala independente
            </Text>
            <Text size="sm">
              CMS handle 1000 editors. Frontend serve 1M users. Cada um no seu
              ritmo.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplo Prático */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          💻 Exemplo: E-commerce Headless
        </Title>
        <Code block mb="md">
          {`// Strapi CMS - Backend que só serve dados
// Content-Type: Product
{
  "id": 1,
  "name": "iPhone 15",
  "price": 4999,
  "images": ["iphone1.jpg", "iphone2.jpg"],
  "description": "...",
  "category": { "name": "Smartphones" },
  "in_stock": true
}

// Next.js Frontend - Busca e renderiza
export async function getStaticProps() {
  const products = await fetch('${process.env.CMS_URL}/api/products')
    .then(res => res.json())
  
  return { props: { products } }
}

export default function ProductPage({ products }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard 
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.images[0]}
          inStock={product.in_stock}
        />
      ))}
    </div>
  )
}`}
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
              🔗 API dependency
            </Text>
            <Text size="sm">
              CMS cai = site para. Precisa de fallbacks e cache robusto.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              👁️ Preview complexo
            </Text>
            <Text size="sm">
              Content team não vê como vai ficar. Precisa build preview
              environment.
            </Text>
          </Alert>
          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🏗️ Mais infra
            </Text>
            <Text size="sm">
              2 sistemas pra manter em vez de 1. Deploy, monitoring, backup
              separados.
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
              👟 Nike
            </Text>
            <Text size="sm" mb="xs">
              Website + app + kiosks físicos. Contentful CMS + React frontends.
            </Text>
            <Text size="sm" c="green">
              +150% performance, content team 3x mais produtiva
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🥤 Red Bull
            </Text>
            <Text size="sm" mb="xs">
              40+ sites globais, mesmo CMS. Drupal headless + Gatsby.
            </Text>
            <Text size="sm" c="green">
              90% redução de tempo de deploy, sites carregam em 1s
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Stack */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Stack
        </Title>
        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              CMS Headless
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Strapi (open source)</List.Item>
              <List.Item>Contentful (SaaS)</List.Item>
              <List.Item>Sanity (real-time)</List.Item>
              <List.Item>Directus (SQL-based)</List.Item>
            </List>
          </Card>
          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Frontend
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>Next.js (React SSG)</List.Item>
              <List.Item>Nuxt.js (Vue SSG)</List.Item>
              <List.Item>Gatsby (GraphQL)</List.Item>
              <List.Item>SvelteKit (Svelte)</List.Item>
            </List>
          </Card>
        </Group>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="md">
        <Alert color="orange" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: "italic" }}>
            "Headless é liberdade: CMS cuida do conteúdo, frontend cuida da
            experiência."
          </Text>
          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Multi-channel: uma API, múltiplas interfaces</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Performance: frontend otimizado sem bloat</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Trade-off: flexibilidade vs complexidade de infra</Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

HeadlessArchitecture.metadata = {
  title: "Headless/API-First",
  description:
    "Separação total entre backend (dados) e frontend (apresentação) para performance máxima e flexibilidade de stack.",
};
