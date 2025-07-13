import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconDeviceMobile, IconWifi } from '@tabler/icons-react';

function ProgressiveWebApps() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Progressive Web Apps (PWA)
        </Title>
        <Text size="lg" c="dimmed">
          Web apps que parecem nativas. Offline, push notifications, 
          instalação. Performance e experiência de app.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconDeviceMobile size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Web apps com recursos de apps nativos</Text>
            </div>
          </Group>
          
          <Text>
            PWA é sobre uma coisa só: <strong>web que parece app nativo</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de site normal, você tem um app que funciona offline, 
            envia notificações, instala na tela inicial. Tudo isso com web technologies.
          </Text>
          
          <Text>
            A regra é simples: <em>performance, offline, nativo</em>. 
            Usuário não sabe se é web ou app. E não deveria importar.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconWifi size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Pilares
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Service Workers</Title>
                <Text size="sm" c="dimmed">
                  JavaScript que roda em background. Cache, offline, 
                  intercepta requests.
                </Text>
                <Code mt="xs" block>
{`// public/sw.js
const CACHE_NAME = 'my-app-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/app.js',
  '/images/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna cache se disponível
        if (response) {
          return response;
        }
        
        // Senão, busca na rede
        return fetch(event.request);
      })
  );
});

// Funciona offline
// Cache inteligente
// Performance melhor`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Web App Manifest</Title>
                <Text size="sm" c="dimmed">
                  Configuração do app. Ícone, nome, cores, 
                  comportamento de instalação.
                </Text>
                <Code mt="xs" block>
{`// public/manifest.json
{
  "name": "Minha App",
  "short_name": "App",
  "description": "Uma app incrível",
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
}

// Permite instalação
// Parece app nativo
// Ícones na tela inicial`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>HTTPS</Title>
                <Text size="sm" c="dimmed">
                  Segurança obrigatória. Service workers só funcionam 
                  em HTTPS.
                </Text>
                <Code mt="xs" block>
{`// Service workers só funcionam em HTTPS
// https://meuapp.com ✅
// http://meuapp.com ❌

// Certificado SSL obrigatório
// Segurança garantida
// Funcionalidades PWA disponíveis

// Localhost funciona para desenvolvimento
// http://localhost:3000 ✅ (desenvolvimento)
// https://meuapp.com ✅ (produção)`}
                </Code>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Por que vale a pena?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconWifi size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Funciona Offline</Title>
                <Text size="sm">
                  Service workers cacheam recursos. App funciona 
                  mesmo sem internet.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconDeviceMobile size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Parece App Nativo</Title>
                <Text size="sm">
                  Instala na tela inicial, ícones, splash screen. 
                  Experiência de app real.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Performance Otimizada</Title>
                <Text size="sm">
                  Cache inteligente, carregamento rápido, 
                  menos requests à rede.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>App que precisa funcionar offline</List.Item>
              <List.Item>Experiência de app nativo é importante</List.Item>
              <List.Item>Performance é crítica</List.Item>
              <List.Item>Engagement é importante (notificações)</List.Item>
              <List.Item>Usuários mobile são maioria</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Sites informativos simples</List.Item>
              <List.Item>Funcionalidades offline não importam</List.Item>
              <List.Item>Usuários desktop são maioria</List.Item>
              <List.Item>Orçamento limitado (complexidade extra)</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos no Front-End
        </Title>
        
        <Stack gap="xl">
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Offline Shopping</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce que funciona offline. 
                Usuário pode navegar produtos, adicionar ao carrinho, 
                finalizar quando voltar online.
                <br />
                <strong>Problema:</strong> Site não funciona sem internet, 
                perda de vendas, experiência ruim.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Site normal
// Sem internet = site quebra
// Usuário perde carrinho
// Experiência ruim

// ✅ BOM - PWA E-commerce
// public/sw.js
const CACHE_NAME = 'ecommerce-v1';
const urlsToCache = [
  '/',
  '/products',
  '/cart',
  '/styles/main.css',
  '/scripts/app.js',
  '/api/products' // Cache produtos
];

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    // Cache API calls
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request)
            .then(response => {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
              return response;
            });
        })
    );
  }
});

// pages/products/[id].js
export default function ProductPage({ product }) {
  const [isOffline, setIsOffline] = useState(false);
  
  useEffect(() => {
    // Detecta status offline
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  const addToCart = async () => {
    try {
      await addItemToCart(product.id);
      showNotification('Produto adicionado!');
    } catch (error) {
      // Salva localmente se offline
      saveToLocalCart(product);
      showNotification('Salvo para adicionar quando online');
    }
  };
  
  return (
    <div>
      {isOffline && (
        <Alert color="yellow" title="Modo Offline">
          Algumas funcionalidades podem estar limitadas
        </Alert>
      )}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={addToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

// Funciona offline
// Cache produtos
// Salva carrinho localmente
// Sincroniza quando online`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Social Media */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📱 Social Media - Notificações</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> App social com notificações push. 
                Usuário recebe notificações de likes, comentários, 
                novos seguidores.
                <br />
                <strong>Problema:</strong> Sem notificações, 
                engagement baixo, usuário não volta.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Site normal
// Sem notificações
// Usuário não volta
// Engagement baixo

// ✅ BOM - PWA Social
// public/sw.js
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Nova notificação', options)
  );
});

// components/NotificationPermission.js
function NotificationPermission() {
  const [permission, setPermission] = useState('default');
  
  const requestPermission = async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
    
    if (result === 'granted') {
      // Registra service worker
      const registration = await navigator.serviceWorker.register('/sw.js');
      
      // Inscreve para push notifications
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY)
      });
      
      // Envia subscription para servidor
      await fetch('/api/push/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  };
  
  return (
    <div>
      {permission === 'default' && (
        <button onClick={requestPermission}>
          Ativar Notificações
        </button>
      )}
      {permission === 'granted' && (
        <div>✅ Notificações ativadas</div>
      )}
    </div>
  );
}

// Notificações push
// Engagement maior
// Usuário volta mais`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Productivity App */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📋 Productivity - Sincronização</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> App de produtividade (todo, notes). 
                Funciona offline, sincroniza quando online.
                <br />
                <strong>Problema:</strong> Dados perdidos offline, 
                sincronização complexa.
              </Text>
              
              <Code block>
{`// ❌ RUIM - App normal
// Não funciona offline
// Dados perdidos
// Sincronização manual

// ✅ BOM - PWA Productivity
// utils/offlineStorage.js
class OfflineStorage {
  constructor() {
    this.dbName = 'productivity-app';
    this.version = 1;
  }
  
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Store para todos
        const todosStore = db.createObjectStore('todos', { keyPath: 'id' });
        todosStore.createIndex('syncStatus', 'syncStatus', { unique: false });
        
        // Store para notes
        const notesStore = db.createObjectStore('notes', { keyPath: 'id' });
        notesStore.createIndex('syncStatus', 'syncStatus', { unique: false });
      };
    });
  }
  
  async saveTodo(todo) {
    const db = await this.init();
    const transaction = db.transaction(['todos'], 'readwrite');
    const store = transaction.objectStore('todos');
    
    todo.syncStatus = 'pending';
    await store.put(todo);
  }
  
  async getTodos() {
    const db = await this.init();
    const transaction = db.transaction(['todos'], 'readonly');
    const store = transaction.objectStore('todos');
    
    return store.getAll();
  }
}

// components/TodoApp.js
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const storage = new OfflineStorage();
  
  useEffect(() => {
    loadTodos();
    
    const handleOnline = () => {
      setIsOnline(true);
      syncData();
    };
    
    const handleOffline = () => {
      setIsOnline(false);
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  const loadTodos = async () => {
    const localTodos = await storage.getTodos();
    setTodos(localTodos);
  };
  
  const addTodo = async (text) => {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    await storage.saveTodo(todo);
    setTodos(prev => [...prev, todo]);
  };
  
  const syncData = async () => {
    const pendingTodos = todos.filter(todo => todo.syncStatus === 'pending');
    
    for (const todo of pendingTodos) {
      try {
        await fetch('/api/todos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo)
        });
        
        // Marca como sincronizado
        todo.syncStatus = 'synced';
        await storage.saveTodo(todo);
      } catch (error) {
        console.error('Erro ao sincronizar:', error);
      }
    }
  };
  
  return (
    <div>
      {!isOnline && (
        <Alert color="yellow" title="Modo Offline">
          Dados salvos localmente
        </Alert>
      )}
      
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.todo.value;
        addTodo(text);
        e.target.todo.value = '';
      }}>
        <input name="todo" placeholder="Nova tarefa..." />
        <button type="submit">Adicionar</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            {todo.syncStatus === 'pending' && ' ⏳'}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Funciona offline
// Sincronização automática
// Dados nunca perdidos
// Experiência fluida`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas & Como Evitar
        </Title>
        
        <Stack gap="xl">
          {/* Cache Strategy */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🗂️ Estratégia de Cache</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Cache desatualizado, 
                usuário vê conteúdo antigo, confusão.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use estratégias de cache inteligentes. 
                Cache-first para recursos estáticos, network-first para dados.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Cache simples
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// Sempre retorna cache se disponível
// Conteúdo pode estar desatualizado

// ✅ BOM - Estratégia inteligente
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    // Network-first para APIs
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open('api-cache')
            .then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // Cache-first para recursos estáticos
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});

// Dados sempre frescos
// Recursos estáticos em cache
// Performance otimizada`}
              </Code>
            </Stack>
          </Paper>

          {/* Storage Limits */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">💾 Limites de Storage</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Cache muito grande, 
                storage cheio, app para de funcionar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Implemente limpeza de cache, 
                monitore uso de storage.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Cache infinito
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache')
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Cache cresce infinitamente
// Storage pode encher

// ✅ BOM - Cache com limpeza
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Limpa caches antigos
// Monitora uso de storage
const checkStorage = async () => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const estimate = await navigator.storage.estimate();
    const usagePercent = (estimate.usage / estimate.quota) * 100;
    
    if (usagePercent > 80) {
      // Limpa cache antigo
      const cache = await caches.open(CACHE_NAME);
      const keys = await cache.keys();
      const oldKeys = keys.slice(0, Math.floor(keys.length / 2));
      await Promise.all(oldKeys.map(key => cache.delete(key)));
    }
  }
};

// Storage controlado
// App sempre funciona`}
              </Code>
            </Stack>
          </Paper>

          {/* Offline UX */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📱 UX Offline</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Usuário não sabe que está offline, 
                funcionalidades quebram, experiência confusa.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Indique status offline, 
                mostre funcionalidades disponíveis.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Sem indicação offline
function App() {
  return (
    <div>
      <h1>Minha App</h1>
      <button onClick={fetchData}>Carregar Dados</button>
    </div>
  );
}

// Usuário não sabe que está offline
// Botão quebra sem aviso

// ✅ BOM - UX offline clara
function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [offlineData, setOfflineData] = useState([]);
  
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Carrega dados offline
    loadOfflineData();
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  const loadOfflineData = async () => {
    const data = await getOfflineData();
    setOfflineData(data);
  };
  
  return (
    <div>
      {isOffline && (
        <Alert color="yellow" title="Modo Offline" mb="md">
          Algumas funcionalidades podem estar limitadas. 
          Dados salvos localmente.
        </Alert>
      )}
      
      <h1>Minha App</h1>
      
      {isOffline ? (
        <div>
          <h2>Dados Offline</h2>
          <ul>
            {offlineData.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <p>Dados atualizados quando online</p>
        </div>
      ) : (
        <button onClick={fetchData}>Carregar Dados</button>
      )}
    </div>
  );
}

// Status offline claro
// Funcionalidades disponíveis
// Experiência consistente`}
              </Code>
            </Stack>
          </Paper>

          {/* Push Notifications */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔔 Notificações Push</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Notificações irritantes, 
                usuário desinstala, permissão negada.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Peça permissão no momento certo, 
                permita customização, seja relevante.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Notificação agressiva
// Pede permissão na primeira visita
// Notificações irrelevantes
// Usuário desinstala

// ✅ BOM - Notificações inteligentes
function NotificationManager() {
  const [permission, setPermission] = useState('default');
  
  const requestPermission = async () => {
    // Só pede após usuário interagir
    const result = await Notification.requestPermission();
    setPermission(result);
    
    if (result === 'granted') {
      // Salva preferências
      localStorage.setItem('notifications', 'enabled');
      
      // Registra para push
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: VAPID_PUBLIC_KEY
      });
      
      // Envia para servidor
      await fetch('/api/push/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription)
      });
    }
  };
  
  const showNotification = (title, options) => {
    if (permission === 'granted') {
      // Verifica se usuário está ativo
      if (!document.hasFocus()) {
        new Notification(title, {
          ...options,
          requireInteraction: false,
          silent: false
        });
      }
    }
  };
  
  return (
    <div>
      {permission === 'default' && (
        <button onClick={requestPermission}>
          Ativar Notificações Importantes
        </button>
      )}
    </div>
  );
}

// Permissão no momento certo
// Notificações relevantes
// Usuário não irrita`}
              </Code>
            </Stack>
          </Paper>

          {/* Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚡ Performance</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> PWA lenta, service worker pesado, 
                cache muito grande.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Otimize service worker, 
                use cache eficiente, monitore performance.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Service worker pesado
// Cache tudo
// Service worker grande
// Performance ruim

// ✅ BOM - Service worker otimizado
// public/sw.js
const CACHE_NAME = 'app-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Cache apenas recursos críticos
const STATIC_URLS = [
  '/',
  '/styles/critical.css',
  '/scripts/app.js'
];

// Cache dinâmico limitado
const MAX_DYNAMIC_ITEMS = 50;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_URLS))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    // Network-first para APIs
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE)
            .then(cache => {
              cache.put(event.request, responseClone);
              // Limita cache dinâmico
              cache.keys().then(keys => {
                if (keys.length > MAX_DYNAMIC_ITEMS) {
                  cache.delete(keys[0]);
                }
              });
            });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first para recursos estáticos
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});

// Cache otimizado
// Performance melhor
// Storage controlado`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References & Real Cases */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Referências & Casos Reais
        </Title>
        
        <Stack gap="xl">
          {/* References */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📚 Referências</Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Progressive Web Apps"</strong> - Dean Hume
                </List.Item>
                <List.Item>
                  <strong>"Building Progressive Web Apps"</strong> - Tal Ater
                </List.Item>
                <List.Item>
                  <strong>"Service Workers"</strong> - Various Authors
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://web.dev/progressive-web-apps/" target="_blank">
                    Google Web Dev - PWA Guide
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank">
                    MDN - Progressive Web Apps
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.pwabuilder.com/" target="_blank">
                    PWA Builder - Ferramenta oficial
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Real Cases */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🏢 Casos Reais de Sucesso</Title>
            <Stack gap="md">
              
              <Card withBorder p="md">
                <Title order={4} mb="sm">Twitter</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> App lento, não funcionava offline, 
                  engagement baixo.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache inteligente, 
                  notificações push, funcionamento offline.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 65% menos uso de dados, 
                  75% mais engagement, 20% mais tweets.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Uber</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> App pesado, lento em conexões ruins, 
                  não funcionava offline.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache de mapas, 
                  funcionamento offline básico.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 50% mais rápido, 
                  funciona em conexões lentas.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Pinterest</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Site lento, não funcionava offline, 
                  experiência mobile ruim.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache de imagens, 
                  funcionamento offline, notificações.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 40% mais engagement, 
                  60% mais tempo no site.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> App pesado, não funcionava offline, 
                  experiência inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> PWA com cache de músicas, 
                  funcionamento offline, notificações.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> 30% mais rápido, 
                  funciona offline, mais engagement.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam PWA:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Workbox</strong> - Service worker library
                </List.Item>
                <List.Item>
                  <strong>PWA Builder</strong> - Ferramenta oficial
                </List.Item>
                <List.Item>
                  <strong>Lighthouse</strong> - Auditoria PWA
                </List.Item>
                <List.Item>
                  <strong>Next.js PWA</strong> - Plugin para Next.js
                </List.Item>
                <List.Item>
                  <strong>Vite PWA</strong> - Plugin para Vite
                </List.Item>
                <List.Item>
                  <strong>Web Push</strong> - Notificações push
                </List.Item>
              </List>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">PWA na prática</Text>
            </div>
          </Group>
          
          <Text>
            PWA é sobre uma coisa só: <strong>web que parece app nativo</strong>. 
            Offline, notificações, instalação. Performance e experiência de app. 
            Use quando experiência mobile e engagement importam.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre fazer PWA pra tudo. 
            É sobre usar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com funcionalidades offline básicas, 
            evolua conforme necessário. Foque em performance e UX.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

ProgressiveWebApps.metadata = {
  title: 'Progressive Web Apps (PWA)',
  description: 'Web apps que parecem nativas. Offline, push notifications, instalação.'
};

export default ProgressiveWebApps; 