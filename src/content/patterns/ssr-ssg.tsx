import React from 'react';
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
  IconCode,
  IconCheck,
  IconAlertTriangle,
  IconBulb,
  IconRocket,
  IconStack,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function SSRSSGArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="blue">
            <IconCode size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              🚀 Server-Side Rendering (SSR) & Static Site Generation (SSG)
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Se você liga pra SEO, você usa SSR
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="blue">
            <IconStack size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            🤔 O que é?
          </Title>
        </Group>

        <Text size="lg" mb="md">
          Imagine o seguinte: você abre um site e{' '}
          <Text span fw={700} c="blue">
            vê o conteúdo na mesma hora
          </Text>
          , não aquela tela branca seguida de loading. Isso é SSR/SSG
          funcionando.
        </Text>

        <Text mb="lg">
          <Text span fw={700}>
            SSR
          </Text>{' '}
          renderiza o HTML no servidor a cada request.
          <Text span fw={700}>
            {' '}
            SSG
          </Text>{' '}
          gera o HTML em build time. Ambos entregam conteúdo pronto pro browser,
          não JavaScript que vai construir a página.
        </Text>

        <Code block>
          {`// ❌ SPA tradicional - browser recebe isso:
<div id="root"></div>
<script src="app.js"></script>
// User vê tela branca até JS carregar e executar

// ✅ SSR/SSG - browser recebe isso:
<div id="root">
  <h1>Produtos em Promoção</h1>
  <div class="product-grid">
    <article>
      <h2>iPhone 15</h2>
      <p>R$ 4.999</p>
    </article>
  </div>
</div>
// User vê conteúdo IMEDIATAMENTE`}
        </Code>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* SSR vs SSG */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          ⚖️ SSR vs SSG: Quando usar cada um?
        </Title>

        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="blue" size="lg">
                SSR
              </Badge>
              <Text fw={600}>Renderização no servidor</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              Cada request gera HTML novo
            </Text>

            <Text fw={600} size="sm" mb="xs">
              Use quando:
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>Conteúdo muda frequentemente</List.Item>
              <List.Item>Dados personalizados por user</List.Item>
              <List.Item>Real-time ou quase real-time</List.Item>
              <List.Item>Dashboard, feeds, carrinho</List.Item>
            </List>

            <Text fw={600} size="sm" mb="xs">
              Evite quando:
            </Text>
            <List size="sm" spacing={4}>
              <List.Item>Server costs são críticos</List.Item>
              <List.Item>Traffic altíssimo (Reddit, etc)</List.Item>
              <List.Item>Conteúdo é estático</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="green" size="lg">
                SSG
              </Badge>
              <Text fw={600}>Geração estática</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              HTML gerado em build time
            </Text>

            <Text fw={600} size="sm" mb="xs">
              Use quando:
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>Conteúdo é estático</List.Item>
              <List.Item>Blog, documentação</List.Item>
              <List.Item>Landing pages</List.Item>
              <List.Item>Performance é crítica</List.Item>
            </List>

            <Text fw={600} size="sm" mb="xs">
              Evite quando:
            </Text>
            <List size="sm" spacing={4}>
              <List.Item>Conteúdo muda constantemente</List.Item>
              <List.Item>Dados personalizados</List.Item>
              <List.Item>Real-time features</List.Item>
            </List>
          </Card>
        </Group>
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
              🛒 E-commerce
            </Text>
            <Text>
              SEO é crítico. Cada segundo a mais = conversão a menos. Google
              precisa indexar produtos.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              📰 Blogs/Content Sites
            </Text>
            <Text>
              Core Web Vitals impactam ranking. Conteúdo precisa ser descobrível
              por crawlers.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              🏢 Landing Pages
            </Text>
            <Text>
              Primeira impressão decide tudo. Zero tolerância pra tela branca ou
              loading.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              📱 Mobile-first
            </Text>
            <Text>
              Redes lentas, devices limitados. HTML pronto é sempre mais rápido
              que JS + render.
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
                <Title order={4}>Plataforma de streaming</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  SSR para performance e SEO de catálogo
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>SSR para páginas de filme</List.Item>
                  <List.Item>SEO para descoberta de conteúdo</List.Item>
                  <List.Item>Performance em redes lentas</List.Item>
                  <List.Item>Core Web Vitals otimizados</List.Item>
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
                <Title order={4}>Vercel</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Plataforma com SSG por padrão
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Next.js com SSG automático</List.Item>
                  <List.Item>Deploy estático global</List.Item>
                  <List.Item>Performance máxima</List.Item>
                  <List.Item>CDN distribuído</List.Item>
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
                  SEO crítico para conversão
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>SSR para páginas de produto</List.Item>
                  <List.Item>SSG para categorias</List.Item>
                  <List.Item>SEO para motores de busca</List.Item>
                  <List.Item>Performance para mobile</List.Item>
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
              Complexidade desnecessária
            </Text>
            <Text size="sm" c="dimmed">
              SSR/SSG para apps internos ou dashboards simples é
              over-engineering. Use apenas quando SEO/performance são críticos.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Server costs
            </Text>
            <Text size="sm" c="dimmed">
              SSR aumenta custos de servidor. SSG pode ter build times longos.
              Calcule ROI antes de implementar.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Hydration issues
            </Text>
            <Text size="sm" c="dimmed">
              Diferenças entre server e client podem causar erros. Teste
              thoroughly e use proper hydration.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> SPA antes de SSR/SSG
              <br />
              <strong>Meça performance:</strong> Core Web Vitals
              <br />
              <strong>Teste hydration:</strong> Server/client consistency
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
              Artigos e Case Studies
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>The New York Times:</strong>{' '}
                <a
                  href="https://open.nytimes.com/enhancing-the-new-york-times-web-performance-with-react-18-d6f91a7c5af8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enhancing Web Performance with React 18
                </a>
              </List.Item>
              <List.Item>
                <strong>Patreon:</strong>{' '}
                <a
                  href="https://www.patreon.com/posts/migrating-to-110743498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Migrating to Next.js: Inside a No-Downtime Architecture
                  Overhaul
                </a>
              </List.Item>
              <List.Item>
                <strong>DoorDash:</strong>{' '}
                <a
                  href="https://doordash.engineering/2022/03/29/improving-web-page-performance-at-doordash-through-server-side-rendering/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Improving Web Page Performance Through SSR with Next.js
                </a>
              </List.Item>
              <List.Item>
                <strong>Airbnb:</strong>{' '}
                <a
                  href="https://medium.com/airbnb-engineering/improving-performance-with-http-streaming-ba9e72c66408"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Improving Performance with HTTP Streaming
                </a>
              </List.Item>
              <List.Item>
                <strong>Yelp:</strong>{' '}
                <a
                  href="https://engineeringblog.yelp.com/2022/02/server-side-rendering-at-scale.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Side Rendering at Scale
                </a>
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Frameworks
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Next.js:</strong> SSR e SSG automático
              </List.Item>
              <List.Item>
                <strong>Nuxt.js:</strong> Vue com SSR/SSG
              </List.Item>
              <List.Item>
                <strong>Gatsby:</strong> SSG para React
              </List.Item>
              <List.Item>
                <strong>Astro:</strong> Islands architecture
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

SSRSSGArchitecture.metadata = {
  title: 'SSR & SSG',
  description:
    'Server-Side Rendering e Static Site Generation - como entregar conteúdo instantâneo e SEO que funciona de verdade.',
};
