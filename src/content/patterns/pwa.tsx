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
  IconCode,
  IconCheck,
  IconAlertTriangle,
  IconBulb,
  IconRocket,
  IconStack,
  IconDeviceMobile,
} from "@tabler/icons-react";

export default function PWAArchitecture() {
  return (
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
          Imagine abrir uma página web que{" "}
          <Text span fw={700} c="cyan">
            funciona offline
          </Text>
          , pode ser{" "}
          <Text span fw={700} c="blue">
            instalada na tela inicial
          </Text>{" "}
          e manda{" "}
          <Text span fw={700} c="green">
            notificações push
          </Text>
          . Isso é PWA.
        </Text>

        <Text mb="lg">
          É a web tentando competir com apps nativos usando{" "}
          <Text span fw={700}>
            Service Workers
          </Text>
          ,
          <Text span fw={700}>
            {" "}
            Web App Manifest
          </Text>{" "}
          e{" "}
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
              User precisa acessar rápido e frequente. Tipo WhatsApp Web,
              Instagram, Twitter.
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

            <Code size="sm" mb="md">
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
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  )
})`}
            </Code>

            <List size="sm" spacing={4}>
              <List.Item>Cache inteligente de recursos</List.Item>
              <List.Item>Funcionalidade offline</List.Item>
              <List.Item>Background sync e push notifications</List.Item>
              <List.Item>Proxy entre app e network</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="green" size="lg">
                Web App Manifest
              </Badge>
              <Text fw={600}>A cara do app</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              JSON que define como o app aparece quando instalado
            </Text>

            <Code size="sm" mb="md">
              {`// manifest.json
{
  "name": "Meu E-commerce",
  "short_name": "Shop",
  "description": "Loja online que funciona offline",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png", 
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`}
            </Code>

            <List size="sm" spacing={4}>
              <List.Item>Ícone na tela inicial</List.Item>
              <List.Item>Splash screen customizada</List.Item>
              <List.Item>Remove barra do browser</List.Item>
              <List.Item>Define cores e tema</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Group gap="sm" mb="sm">
              <Badge variant="light" color="violet" size="lg">
                APIs Modernas
              </Badge>
              <Text fw={600}>Superpowers do browser</Text>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              Push notifications, camera, geolocation, device APIs
            </Text>

            <Code size="sm" mb="md">
              {`// Push Notifications
// Pede permissão
const permission = await Notification.requestPermission()

// Escuta messages do service worker
navigator.serviceWorker.addEventListener('message', (event) => {
  if (event.data.type === 'PUSH_RECEIVED') {
    showNotification(event.data.payload)
  }
})

// Background Sync - faz requests quando voltar online
navigator.serviceWorker.ready.then(registration => {
  registration.sync.register('background-sync')
})`}
            </Code>

            <List size="sm" spacing={4}>
              <List.Item>Push notifications</List.Item>
              <List.Item>Background sync</List.Item>
              <List.Item>Camera e geolocation</List.Item>
              <List.Item>Add to home screen</List.Item>
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
              📱 Mobile experience nativa
            </Text>
            <Text size="sm">
              Instala sem App Store. Carrega instant. Funciona offline. User nem
              percebe que é web.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🚀 Performance brutal
            </Text>
            <Text size="sm">
              Cache strategy agressiva. Segundo acesso é quase instantâneo. App
              shell carrega em 200ms.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              💰 Cost-effective
            </Text>
            <Text size="sm">
              Uma codebase = iOS + Android + Desktop. Não precisa manter 3 teams
              diferentes.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔄 Engagement maior
            </Text>
            <Text size="sm">
              Push notifications + ícone na home = user volta mais. Pinterest
              viu +103% engagement.
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
            💻 Exemplo Prático: To-Do App Offline
          </Title>
        </Group>

        <Text mb="md">
          Cenário: App de tarefas que funciona{" "}
          <Text span fw={700}>
            offline
          </Text>{" "}
          e sincroniza quando voltar{" "}
          <Text span fw={700}>
            online
          </Text>
          .
        </Text>

        <Code block mb="md">
          {`// App.jsx - PWA com cache strategy
import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  
  useEffect(() => {
    // Carrega todos do cache primeiro (fast)
    loadTodosFromCache().then(setTodos)
    
    // Depois tenta buscar frescos (se online)
    if (isOnline) {
      fetch('/api/todos')
        .then(res => res.json())
        .then(freshTodos => {
          setTodos(freshTodos)
          // Cache pra próxima vez
          saveTodosToCache(freshTodos)
        })
    }
    
    // Escuta mudanças de conectividade
    const handleOnline = () => {
      setIsOnline(true)
      syncPendingTodos() // Sincroniza changes offline
    }
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', () => setIsOnline(false))
    
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', () => setIsOnline(false))
    }
  }, [])
  
  const addTodo = async (text) => {
    const newTodo = { id: Date.now(), text, completed: false }
    
    // Otimistic update (UX responsiva)
    setTodos(prev => [...prev, newTodo])
    
    if (isOnline) {
      // Online: salva no servidor
      try {
        await fetch('/api/todos', {
          method: 'POST',
          body: JSON.stringify(newTodo)
        })
      } catch (error) {
        // Se falhar, marca pra sync depois
        savePendingChange('add', newTodo)
      }
    } else {
      // Offline: marca pra sync quando voltar online
      savePendingChange('add', newTodo)
    }
    
    // Sempre salva no cache local
    saveTodosToCache([...todos, newTodo])
  }
  
  return (
    <div>
      <div className="status">
        {isOnline ? '🟢 Online' : '🔴 Offline'}
      </div>
      
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
      
      {/* Service Worker registration */}
      <PWAInstallPrompt />
    </div>
  )
}

// sw.js - Service Worker com cache strategy
const CACHE_NAME = 'todos-v1'

// Cache Strategy: Cache First para static assets
self.addEventListener('fetch', (event) => {
  const { request } = event
  
  if (request.url.includes('/static/')) {
    // Static files: cache first
    event.respondWith(
      caches.match(request)
        .then(response => response || fetch(request))
    )
  } else if (request.url.includes('/api/todos')) {
    // API calls: network first, fallback to cache
    event.respondWith(
      fetch(request)
        .then(response => {
          // Salva successful responses no cache
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseClone))
          }
          return response
        })
        .catch(() => {
          // Se network falha, serve do cache
          return caches.match(request)
        })
    )
  }
})

// Background Sync - sincroniza quando voltar online
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(syncPendingTodos())
  }
})`}
        </Code>

        <Alert color="blue" icon={<IconBulb size={16} />}>
          <Text fw={600}>💡 O que acontece:</Text>
          <List size="sm" mt="xs">
            <List.Item>App carrega instant (cache)</List.Item>
            <List.Item>Funciona offline completamente</List.Item>
            <List.Item>Changes são persistidos localmente</List.Item>
            <List.Item>Sync automático quando voltar online</List.Item>
            <List.Item>UX sempre responsiva (optimistic updates)</List.Item>
          </List>
        </Alert>
      </Paper>

      {/* Cache Strategies */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🗄️ Cache Strategies que Funcionam
        </Title>

        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Cache First
            </Badge>
            <Text size="sm" mb="md">
              Cache → Network (se miss)
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>CSS, JS, imagens</List.Item>
              <List.Item>Assets que não mudam</List.Item>
              <List.Item>Performance máxima</List.Item>
            </List>
            <Text size="xs" c="dimmed">
              Use para: static files
            </Text>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Network First
            </Badge>
            <Text size="sm" mb="md">
              Network → Cache (se fail)
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>API calls críticas</List.Item>
              <List.Item>Dados que mudam</List.Item>
              <List.Item>Fallback resiliente</List.Item>
            </List>
            <Text size="xs" c="dimmed">
              Use para: dynamic data
            </Text>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="orange" mb="sm">
              Stale While Revalidate
            </Badge>
            <Text size="sm" mb="md">
              Cache + Background Update
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>Response instant do cache</List.Item>
              <List.Item>Update em background</List.Item>
              <List.Item>Best of both worlds</List.Item>
            </List>
            <Text size="xs" c="dimmed">
              Use para: content sites
            </Text>
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
              🍎 iOS Safari Limitations
            </Text>
            <Text size="sm" mb="xs">
              iOS ainda é problemático. Push notifications limitadas, install
              prompt inconsistente.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              Graceful degradation. Funciona, mas sem algumas features.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🗄️ Cache Hell
            </Text>
            <Text size="sm" mb="xs">
              Cache muito agressivo = user não vê updates. Cache pouco =
              performance ruim.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              Versioning no cache name. Clear caches antigos no update.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🔧 Debugging Nightmare
            </Text>
            <Text size="sm" mb="xs">
              Service Worker bugs são infernais. Roda em background, estado
              inconsistente.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              DevTools PWA tab. Logs extensivos. Clear storage frequente.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              ⚡ Battery Drain
            </Text>
            <Text size="sm" mb="xs">
              Background sync e push notifications podem drenar bateria se
              abusados.
            </Text>
            <Text size="sm" c="dimmed">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              Sync inteligente. Push notifications relevantes apenas.
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
              📌 Pinterest
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{" "}
              Mobile web tinha 40% menos engagement que app nativo
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              PWA completa com offline, push notifications, install prompt
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{" "}
              +103% mobile engagement, +50% ad revenue, -60% bundle size
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              ☕ Starbucks
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{" "}
              App mobile pesado, muitos users não baixavam
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              PWA para ordering system que funciona offline
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{" "}
              2x daily active users, ordering experience nativa
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🏨 Trivago
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{" "}
              Site mobile lento em conexões ruins (mercados emergentes)
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{" "}
              PWA com cache agressivo e offline-first approach
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{" "}
              +97% engagement increase, -84% time to interactive
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Ferramentas */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Stack PWA
        </Title>

        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              Frameworks
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Workbox:
                </Text>{" "}
                Service Worker toolkit (Google)
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  PWA Builder:
                </Text>{" "}
                Microsoft's PWA tools
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Next.js:
                </Text>{" "}
                Built-in PWA support
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Vite PWA:
                </Text>{" "}
                Plugin pra Vite
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              Testing
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Lighthouse:
                </Text>{" "}
                PWA audit score
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  PWA Builder:
                </Text>{" "}
                Validation tools
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Chrome DevTools:
                </Text>{" "}
                Service Worker debugging
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Workbox:
                </Text>{" "}
                Cache debugging
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="orange" mb="sm">
              Deploy
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  HTTPS:
                </Text>{" "}
                Obrigatório para Service Workers
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  CDN:
                </Text>{" "}
                Cache global pra assets
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  HTTP/2:
                </Text>{" "}
                Push de recursos críticos
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Compression:
                </Text>{" "}
                gzip/brotli pra bundles
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

        <Alert color="cyan" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: "italic" }}>
            "PWA é web tentando ser nativo - e conseguindo. Offline, fast,
            installable."
          </Text>

          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Use quando mobile experience e offline são críticos</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Service Workers + Manifest + APIs modernas = app experience
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Trade-off: complexidade vs cross-platform reach</Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>Pinterest, Starbucks, Trivago provaram que funciona</Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

PWAArchitecture.metadata = {
  title: "Progressive Web Apps (PWA)",
  description:
    "Como criar web apps que funcionam offline, instalam como nativos e competem com App Store usando Service Workers e APIs modernas.",
};
