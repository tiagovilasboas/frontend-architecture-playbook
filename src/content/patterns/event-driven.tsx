import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconBroadcast, IconMessage } from '@tabler/icons-react';

function EventDriven() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Event-Driven Architecture
        </Title>
        <Text size="lg" c="dimmed">
          Componentes que se comunicam por eventos. Baixo acoplamento, alta coesão, 
          extensibilidade natural. O que acontece quando você não quer que tudo conheça tudo.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBroadcast size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Arquitetura onde componentes se comunicam por eventos</Text>
            </div>
          </Group>
          
          <Text>
            Event-Driven é sobre uma coisa só: <strong>componentes que não se conhecem se comunicam por eventos</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de um componente chamar diretamente outro, ele dispara um evento. 
            Quem quiser ouvir, ouve. Quem não quiser, ignora. Ninguém precisa conhecer ninguém.
          </Text>
          
          <Text>
            A regra é simples: <em>publique eventos, escute eventos, não conheça quem publica</em>. 
            Baixo acoplamento, alta coesão, extensibilidade natural.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconMessage size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Event Emitters (Publicadores)</Title>
                <Text size="sm" c="dimmed">
                  Componentes que disparam eventos. Button, Form, API calls.
                </Text>
                <Code mt="xs" block>
{`// Componente que dispara evento
function AddToCartButton({ product }) {
  const handleClick = () => {
    // Dispara evento, não chama função diretamente
    window.dispatchEvent(new CustomEvent('cart:add', {
      detail: { product, quantity: 1 }
    }));
  };

  return <button onClick={handleClick}>Adicionar</button>;
}`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Event Listeners (Ouvintes)</Title>
                <Text size="sm" c="dimmed">
                  Componentes que escutam eventos. Cart, Analytics, Notifications.
                </Text>
                <Code mt="xs" block>
{`// Componente que escuta evento
function CartWidget() {
  useEffect(() => {
    const handleAddToCart = (event) => {
      const { product, quantity } = event.detail;
      // Atualiza carrinho
      updateCart(product, quantity);
    };

    window.addEventListener('cart:add', handleAddToCart);
    return () => window.removeEventListener('cart:add', handleAddToCart);
  }, []);

  return <div>Items: {cartItems.length}</div>;
}`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Event Bus (Central de Eventos)</Title>
                <Text size="sm" c="dimmed">
                  Sistema central que gerencia eventos. Pode ser global ou local.
                </Text>
                <Code mt="xs" block>
{`// Event Bus centralizado
class EventBus {
  private listeners = new Map();

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  emit(event, data) {
    const callbacks = this.listeners.get(event) || [];
    callbacks.forEach(callback => callback(data));
  }
}

// Uso global
const eventBus = new EventBus();
eventBus.on('user:login', (user) => {
  // Múltiplos listeners podem reagir
  updateHeader(user);
  loadUserPreferences(user);
  trackAnalytics(user);
});`}
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
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Baixo Acoplamento</Title>
                <Text size="sm">
                  Componentes não precisam conhecer outros. Adicione funcionalidades sem mexer no código existente.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Extensibilidade</Title>
                <Text size="sm">
                  Adicione novos listeners sem modificar emissores. Plugins, analytics, logs.
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
                <Title order={4}>Testabilidade</Title>
                <Text size="sm">
                  Teste emissores e listeners isoladamente. Mocks simples, testes unitários limpos.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">✅ Use quando:</Title>
            <List>
              <List.Item>Múltiplos componentes precisam reagir a uma ação</List.Item>
              <List.Item>Quer adicionar funcionalidades sem modificar código existente</List.Item>
              <List.Item>Precisa de baixo acoplamento entre módulos</List.Item>
              <List.Item>Quer implementar plugins ou extensões</List.Item>
              <List.Item>Precisa de analytics, logs, tracking em vários pontos</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">❌ Evite quando:</Title>
            <List>
              <List.Item>Aplicação muito simples (overkill)</List.Item>
              <List.Item>Fluxo de dados linear e previsível</List.Item>
              <List.Item>Time pequeno que prefere simplicidade</List.Item>
              <List.Item>Performance crítica (eventos têm overhead)</List.Item>
            </List>
          </Card>
        </Stack>
      </div>

      {/* Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos no Front-End
        </Title>
        
        <Stack gap="xl">
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Múltiplas Reações</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Usuário adiciona produto ao carrinho. 
                Múltiplos componentes precisam reagir: carrinho, contador, analytics, 
                notificação, estoque.
                <br />
                <strong>Problema:</strong> Componente de botão precisa conhecer todos os outros.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Acoplamento direto
function AddToCartButton({ product }) {
  const { updateCart, updateCounter, trackAnalytics, showNotification, checkStock } = useCart();
  
  const handleClick = async () => {
    await updateCart(product);
    updateCounter();
    trackAnalytics('add_to_cart', product);
    showNotification('Produto adicionado!');
    await checkStock(product.id);
  };

  return <button onClick={handleClick}>Adicionar</button>;
}

// ✅ BOM - Event-Driven
function AddToCartButton({ product }) {
  const handleClick = () => {
    // Só dispara evento, não conhece ninguém
    window.dispatchEvent(new CustomEvent('cart:add', {
      detail: { product, quantity: 1 }
    }));
  };

  return <button onClick={handleClick}>Adicionar</button>;
}

// Listeners independentes
function CartWidget() {
  useEffect(() => {
    const handleAddToCart = (event) => {
      updateCart(event.detail.product);
    };
    window.addEventListener('cart:add', handleAddToCart);
    return () => window.removeEventListener('cart:add', handleAddToCart);
  }, []);
}

function AnalyticsTracker() {
  useEffect(() => {
    const handleAddToCart = (event) => {
      trackEvent('add_to_cart', event.detail.product);
    };
    window.addEventListener('cart:add', handleAddToCart);
    return () => window.removeEventListener('cart:add', handleAddToCart);
  }, []);
}

function NotificationSystem() {
  useEffect(() => {
    const handleAddToCart = (event) => {
      showToast('Produto adicionado ao carrinho!');
    };
    window.addEventListener('cart:add', handleAddToCart);
    return () => window.removeEventListener('cart:add', handleAddToCart);
  }, []);
}

// Adicione novos listeners sem modificar o botão
function StockChecker() {
  useEffect(() => {
    const handleAddToCart = async (event) => {
      await checkStock(event.detail.product.id);
    };
    window.addEventListener('cart:add', handleAddToCart);
    return () => window.removeEventListener('cart:add', handleAddToCart);
  }, []);
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Atualizações em Tempo Real</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard com múltiplos widgets. 
                Quando dados mudam, vários widgets precisam atualizar: gráficos, 
                métricas, alertas, logs.
                <br />
                <strong>Problema:</strong> Cada widget precisa conhecer todos os outros.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Prop drilling e callbacks
function Dashboard() {
  const [data, setData] = useState({});
  
  const handleDataUpdate = (newData) => {
    setData(newData);
    // Precisa chamar todos os widgets
    updateChart(newData);
    updateMetrics(newData);
    checkAlerts(newData);
    logActivity(newData);
  };

  return (
    <div>
      <DataFetcher onUpdate={handleDataUpdate} />
      <ChartWidget data={data} />
      <MetricsWidget data={data} />
      <AlertsWidget data={data} />
      <LogWidget data={data} />
    </div>
  );
}

// ✅ BOM - Event-Driven
function DataFetcher() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await fetchData();
      // Dispara evento, não conhece widgets
      window.dispatchEvent(new CustomEvent('data:updated', {
        detail: { data: newData, timestamp: Date.now() }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

function ChartWidget() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const handleDataUpdate = (event) => {
      setData(event.detail.data);
    };
    window.addEventListener('data:updated', handleDataUpdate);
    return () => window.removeEventListener('data:updated', handleDataUpdate);
  }, []);

  return <Chart data={data} />;
}

function MetricsWidget() {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const handleDataUpdate = (event) => {
      setData(event.detail.data);
    };
    window.addEventListener('data:updated', handleDataUpdate);
    return () => window.removeEventListener('data:updated', handleDataUpdate);
  }, []);

  return <Metrics data={data} />;
}

// Adicione novos widgets sem modificar DataFetcher
function AlertsWidget() {
  useEffect(() => {
    const handleDataUpdate = (event) => {
      checkAlerts(event.detail.data);
    };
    window.addEventListener('data:updated', handleDataUpdate);
    return () => window.removeEventListener('data:updated', handleDataUpdate);
  }, []);

  return <Alerts />;
}`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas e Como Evitar
        </Title>
        
        <Stack gap="xl">
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚨 Problemas Comuns</Title>
            
            <Stack gap="lg">
              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">1. Event Hell</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Eventos disparando outros eventos, criando loops infinitos.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Documente o fluxo de eventos, use prefixos claros, 
                  evite eventos em cascata.
                </Text>
                <Code mt="xs" block>
{`// ❌ RUIM - Event hell
window.addEventListener('cart:add', () => {
  window.dispatchEvent(new CustomEvent('analytics:track'));
});

window.addEventListener('analytics:track', () => {
  window.dispatchEvent(new CustomEvent('notification:show'));
});

// ✅ BOM - Evento único
window.addEventListener('cart:add', (event) => {
  // Tudo em um lugar
  trackAnalytics(event.detail);
  showNotification('Produto adicionado!');
});`}
                </Code>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">2. Memory Leaks</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Event listeners não removidos causam vazamentos de memória.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Sempre remova listeners no cleanup, use AbortController.
                </Text>
                <Code mt="xs" block>
{`// ❌ RUIM - Memory leak
useEffect(() => {
  window.addEventListener('data:update', handleUpdate);
  // Esqueceu de remover!
}, []);

// ✅ BOM - Cleanup correto
useEffect(() => {
  const handleUpdate = (event) => {
    setData(event.detail);
  };
  
  window.addEventListener('data:update', handleUpdate);
  return () => window.removeEventListener('data:update', handleUpdate);
}, []);

// ✅ MELHOR - AbortController
useEffect(() => {
  const controller = new AbortController();
  
  window.addEventListener('data:update', handleUpdate, {
    signal: controller.signal
  });
  
  return () => controller.abort();
}, []);`}
                </Code>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">3. Debugging Difícil</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Fluxo de eventos difícil de rastrear e debugar.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Use ferramentas de debugging, logs estruturados, 
                  documentação clara.
                </Text>
                <Code mt="xs" block>
{`// ✅ BOM - Debugging facilitado
class EventBus {
  emit(event, data) {
    console.log('📡 Event:', event, data);
    // Log estruturado
    this.listeners.get(event)?.forEach(callback => {
      try {
        callback(data);
      } catch (error) {
        console.error('❌ Event handler error:', error);
      }
    });
  }
}

// DevTools para eventos
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('cart:add', (event) => {
    console.log('🛒 Cart event:', event.detail);
  });
}`}
                </Code>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">4. Over-engineering</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Usar eventos para tudo, mesmo quando não precisa.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Use eventos só quando há múltiplos listeners 
                  ou baixo acoplamento é importante.
                </Text>
                <Code mt="xs" block>
{`// ❌ RUIM - Over-engineering
// Evento para uma coisa simples
window.dispatchEvent(new CustomEvent('button:click'));

// ✅ BOM - Simples quando apropriado
function SimpleButton({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

// ✅ BOM - Evento quando faz sentido
// Múltiplos componentes precisam reagir
window.dispatchEvent(new CustomEvent('user:login', { detail: user }));`}
                </Code>
              </Card>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References */}
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
                  <strong>"Event-Driven Architecture"</strong> - Hugh Taylor
                </List.Item>
                <List.Item>
                  <strong>"Patterns of Enterprise Application Architecture"</strong> - Martin Fowler
                </List.Item>
                <List.Item>
                  <strong>"Clean Architecture"</strong> - Robert C. Martin
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://martinfowler.com/articles/201701-event-driven.html" target="_blank">
                    Event-Driven Architecture - Martin Fowler
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://microservices.io/patterns/data/event-driven-architecture.html" target="_blank">
                    Event-Driven Architecture Patterns - Microservices.io
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.confluent.io/blog/event-driven-architecture/" target="_blank">
                    Event-Driven Architecture - Confluent
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
                <Title order={4} mb="sm">Netflix</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Sistema complexo de recomendações, 
                  múltiplos serviços precisavam reagir a mudanças de usuário.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Event-driven architecture para comunicação 
                  entre serviços de recomendação, analytics, personalização.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Baixo acoplamento, alta escalabilidade, 
                  novos serviços podem facilmente reagir a eventos.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Uber</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Sistema de ride-sharing com múltiplos 
                  componentes: mapa, preços, driver matching, pagamentos.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Event-driven para comunicação entre 
                  componentes da aplicação móvel e web.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Componentes independentes, 
                  atualizações em tempo real, extensibilidade.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Slack</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Aplicação web complexa com múltiplos 
                  widgets: chat, notificações, status, integrações.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Event-driven architecture para 
                  comunicação entre componentes da interface.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Interface responsiva, 
                  componentes independentes, fácil manutenção.
                </Text>
              </Card>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconCheck size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">Pontos-chave da Event-Driven Architecture</Text>
            </div>
          </Group>
          
          <List>
            <List.Item>
              <strong>Baixo acoplamento:</strong> Componentes não precisam conhecer outros
            </List.Item>
            <List.Item>
              <strong>Extensibilidade:</strong> Adicione funcionalidades sem modificar código existente
            </List.Item>
            <List.Item>
              <strong>Testabilidade:</strong> Teste emissores e listeners isoladamente
            </List.Item>
            <List.Item>
              <strong>Use quando:</strong> Múltiplos componentes precisam reagir a uma ação
            </List.Item>
            <List.Item>
              <strong>Evite:</strong> Aplicações simples ou quando performance é crítica
            </List.Item>
          </List>
          
          <Alert color="blue" title="💡 Dica">
            Event-Driven é sobre desacoplamento. Use quando quiser que componentes 
            se comuniquem sem se conhecerem. Mas não use para tudo - às vezes 
            uma função simples é melhor que um evento.
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

EventDriven.metadata = {
  title: 'Event-Driven Architecture',
  description: 'Componentes que se comunicam por eventos. Baixo acoplamento, alta coesão, extensibilidade natural.'
};

export default EventDriven; 