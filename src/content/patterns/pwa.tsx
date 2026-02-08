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
  IconDeviceMobile,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function PWAArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="cyan">
            <IconDeviceMobile size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              📱 Progressive Web Apps (PWA)
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Web que se comporta como app nativo
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Group gap="sm" mb="md">
          <ThemeIcon size="lg" radius="md" variant="light" color="cyan">
            <IconStack size={20} />
          </ThemeIcon>
          <Title order={2} size="h2">
            🤔 O que é?
          </Title>
        </Group>

        <Text size="lg" mb="md">
          Imagine abrir uma página web que{' '}
          <Text span fw={700} c="cyan">
            funciona offline
          </Text>
          , pode ser{' '}
          <Text span fw={700} c="blue">
            instalada na tela inicial
          </Text>{' '}
          e manda{' '}
          <Text span fw={700} c="green">
            notificações push
          </Text>
          . Isso é PWA.
        </Text>

        <Text mb="lg">
          É a web tentando competir com apps nativos usando{' '}
          <Text span fw={700}>
            Service Workers
          </Text>
          ,
          <Text span fw={700}>
            {' '}
            Web App Manifest
          </Text>{' '}
          e{' '}
          <Text span fw={700}>
            APIs modernas do browser
          </Text>
          . O resultado? App experience sem App Store.
        </Text>

        <Code block>
          {`// ❌ App tradicional
<div id="app">Carregando...</div>
<!-- Se offline = tela branca da morte -->

// ✅ PWA com Service Worker
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    // Online: busca dados frescos
    // Offline: serve do cache
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    )
  }
})

// Resultado: funciona offline, instala como app, push notifications`}
        </Code>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Pilares do PWA */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🏗️ Os 3 Pilares do PWA
        </Title>

        <Stack gap="lg">
          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="blue" size="lg">
                Service Workers
              </Badge>
              <Text fw={600}>O cérebro offline</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              JavaScript que roda em background, intercepta requests
            </Text>

            <Code mb="md">
              {`// sw.js - Service Worker básico
const CACHE_NAME = 'app-v1'
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/api/essentials'
]

// Instala e cacheia recursos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})

// Intercepta requests e serve do cache se offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  )
})`}
            </Code>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="green" size="lg">
                Web App Manifest
              </Badge>
              <Text fw={600}>Metadados do app</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              JSON que define como o app aparece quando instalado
            </Text>

            <Code mb="md">
              {`// manifest.json
{
  "name": "Meu App PWA",
  "short_name": "App",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}`}
            </Code>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="orange" size="lg">
                HTTPS
              </Badge>
              <Text fw={600}>Segurança obrigatória</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              Service Workers só funcionam em HTTPS (ou localhost)
            </Text>

            <Code mb="md">
              {`// Registra o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrado:', registration)
      })
      .catch(error => {
        console.log('SW falhou:', error)
      })
  })
}`}
            </Code>
          </Card>
        </Stack>
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
              📱 Mobile-first experience
            </Text>
            <Text>
              User precisa acessar rápido e frequente. Apps de mensagem,
              redes sociais, ferramentas de produtividade.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              🌐 Conectividade ruim
            </Text>
            <Text>
              Mercados emergentes, transporte público, áreas rurais. Offline é
              obrigatório.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              🔄 Engagement crítico
            </Text>
            <Text>
              Push notifications, ícone na home screen, load time brutal. User
              retention matters.
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              💰 Budget vs App Store
            </Text>
            <Text>
              Não quer (ou pode) desenvolver app nativo. Uma codebase que roda
              everywhere.
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
                <Title order={4}>Rede social lite</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  PWA para substituir app nativo em mercados emergentes
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Melhoria significativa em conversões</List.Item>
                  <List.Item>Funciona offline</List.Item>
                  <List.Item>Push notifications</List.Item>
                  <List.Item>Instala na home screen</List.Item>
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
                <Title order={4}>Starbucks</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  PWA para pedidos e pagamentos
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Funciona offline</List.Item>
                  <List.Item>Push para status do pedido</List.Item>
                  <List.Item>Pagamento via PWA</List.Item>
                  <List.Item>Carregamento mais rápido que app nativo</List.Item>
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
                <Title order={4}>App de serviço on-demand</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  PWA leve para redes 2G/3G
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Funciona em conexões lentas</List.Item>
                  <List.Item>Menor que app nativo</List.Item>
                  <List.Item>Instalação rápida</List.Item>
                  <List.Item>Offline para mapas</List.Item>
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
              ❌ Complexidade de cache
            </Text>
            <Text size="sm" c="dimmed">
              Gerenciar cache é complicado. Cache velho = bugs. Cache novo =
              storage cheio. Precisa de estratégia clara.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Browser support
            </Text>
            <Text size="sm" c="dimmed">
              Service Workers não funcionam em todos os browsers. iOS Safari tem
              limitações. Precisa de fallback.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Debugging difícil
            </Text>
            <Text size="sm" c="dimmed">
              Service Workers são difíceis de debugar. Cache não limpa fácil.
              Updates podem não funcionar.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Cache básico antes de complexo
              <br />
              <strong>Teste browsers:</strong> iOS, Android, desktop
              <br />
              <strong>Debug tools:</strong> Chrome DevTools, Lighthouse
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
                <strong>Workbox:</strong> Service Worker library
              </List.Item>
              <List.Item>
                <strong>Lighthouse:</strong> PWA audit
              </List.Item>
              <List.Item>
                <strong>PWA Builder:</strong> Generate manifest
              </List.Item>
              <List.Item>
                <strong>Chrome DevTools:</strong> Service Worker debugging
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                      <strong>web.dev:</strong>{' '}
                      <a href="https://web.dev/explore/progressive-web-apps" target="_blank" rel="noopener noreferrer">Progressive Web Apps (Google)</a>
                    </List.Item>
                    <List.Item>
                      <strong>MDN:</strong>{' '}
                      <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">PWA Guide</a>
                    </List.Item>
                    <List.Item>
                      <strong>Workbox:</strong>{' '}
                      <a href="https://developer.chrome.com/docs/workbox" target="_blank" rel="noopener noreferrer">Service Worker Toolkit</a>
                    </List.Item>
                    <List.Item>
                      <strong>PWA Stats:</strong>{' '}
                      <a href="https://www.pwastats.com/" target="_blank" rel="noopener noreferrer">Casos reais com métricas</a>
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

PWAArchitecture.metadata = {
  title: 'Progressive Web Apps (PWA)',
  description:
    'Como criar web apps que funcionam offline, instalam como nativos e competem com App Store usando Service Workers e APIs modernas.',
};
