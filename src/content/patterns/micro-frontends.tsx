import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconApps, IconBuilding } from '@tabler/icons-react';

function MicroFrontends() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Micro-frontends
        </Title>
        <Text size="lg" c="dimmed">
          Quebre aplicações grandes em pedaços pequenos. Times independentes, 
          tecnologias diferentes, deploy separado. Escalabilidade real.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconApps size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Arquitetura que quebra front-ends grandes em pedaços pequenos</Text>
            </div>
          </Group>
          
          <Text>
            Micro-frontends é sobre uma coisa só: <strong>quebrar aplicações grandes em pedaços pequenos</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de uma aplicação gigante que todo mundo mexe, 
            você tem várias aplicações pequenas, cada uma com seu time, sua tecnologia, seu deploy.
          </Text>
          
          <Text>
            A regra é simples: <em>cada micro-frontend é independente</em>. 
            Pode usar React, Vue, Angular, o que quiser. Pode fazer deploy quando quiser.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconBuilding size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 4 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Independência de Times</Title>
                <Text size="sm" c="dimmed">
                  Cada micro-frontend tem seu time. Não precisa esperar ninguém.
                </Text>
                <Code mt="xs" block>
{`// Time A - Responsável pelo checkout
// Pode usar React, fazer deploy quando quiser
// Não depende do time B

// Time B - Responsável pelo catálogo  
// Pode usar Vue, fazer deploy quando quiser
// Não depende do time A

// Time C - Responsável pelo carrinho
// Pode usar Angular, fazer deploy quando quiser
// Não depende de ninguém`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Tecnologias Heterogêneas</Title>
                <Text size="sm" c="dimmed">
                  Cada micro-frontend pode usar tecnologia diferente. 
                  React, Vue, Angular, vanilla JS.
                </Text>
                <Code mt="xs" block>
{`// Micro-frontend A - React
function CheckoutApp() {
  return <div>Checkout em React</div>;
}

// Micro-frontend B - Vue
new Vue({
  el: '#catalog',
  template: '<div>Catálogo em Vue</div>'
});

// Micro-frontend C - Angular
@Component({
  selector: 'app-cart',
  template: '<div>Carrinho em Angular</div>'
})`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Deploy Independente</Title>
                <Text size="sm" c="dimmed">
                  Cada micro-frontend faz deploy separado. 
                  Não precisa esperar ninguém.
                </Text>
                <Code mt="xs" block>
{`// Deploy do checkout
git push origin main
# Deploy automático do checkout

// Deploy do catálogo  
git push origin main
# Deploy automático do catálogo

// Deploy do carrinho
git push origin main  
# Deploy automático do carrinho

// Cada um independente, sem afetar os outros`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Integração via Shell</Title>
                <Text size="sm" c="dimmed">
                  Shell (container) orquestra os micro-frontends. 
                  Carrega e integra tudo.
                </Text>
                <Code mt="xs" block>
{`// Shell (container)
function App() {
  return (
    <div>
      <Header />
      <MicroFrontend 
        name="catalog"
        host="https://catalog.example.com"
      />
      <MicroFrontend 
        name="cart"
        host="https://cart.example.com"
      />
      <Footer />
    </div>
  );
}`}
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Times Independentes</Title>
                <Text size="sm">
                  Cada time trabalha sem depender dos outros. 
                  Não precisa esperar, não quebra ninguém.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconApps size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Tecnologias Flexíveis</Title>
                <Text size="sm">
                  Use React, Vue, Angular, o que quiser. 
                  Cada micro-frontend com sua tecnologia.
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
                <Title order={4}>Deploy Rápido</Title>
                <Text size="sm">
                  Deploy independente. Muda um micro-frontend, 
                  não afeta os outros.
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
              <List.Item>Time grande (10+ desenvolvedores)</List.Item>
              <List.Item>Diferentes tecnologias necessárias</List.Item>
              <List.Item>Deploy independente é importante</List.Item>
              <List.Item>Aplicação muito grande e complexa</List.Item>
              <List.Item>Times com responsabilidades distintas</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Time pequeno (menos de 5 devs)</List.Item>
              <List.Item>Aplicação simples</List.Item>
              <List.Item>Protótipo ou MVP</List.Item>
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
            <Title order={3} mb="md">🛒 E-commerce - Times Especializados</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce grande com times especializados. 
                Catálogo, carrinho, checkout, perfil do usuário.
                <br />
                <strong>Problema:</strong> Time gigante, deploy lento, 
                uma mudança quebra tudo.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Monolito
// Aplicação gigante, 50 desenvolvedores
// Deploy demora 2 horas
// Uma mudança quebra tudo
// Time de 50 pessoas

// ✅ BOM - Micro-frontends
// Time A - Catálogo (10 devs)
// Time B - Carrinho (8 devs)  
// Time C - Checkout (12 devs)
// Time D - Perfil (6 devs)

// Shell (container)
function EcommerceApp() {
  return (
    <div>
      <Header />
      <MicroFrontend 
        name="catalog"
        host="https://catalog.example.com"
        team="Team A"
      />
      <MicroFrontend 
        name="cart"
        host="https://cart.example.com"
        team="Team B"
      />
      <MicroFrontend 
        name="checkout"
        host="https://checkout.example.com"
        team="Team C"
      />
      <Footer />
    </div>
  );
}

// Cada time independente
// Deploy em 5 minutos
// Uma mudança não afeta os outros`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Módulos Especializados</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard complexo com módulos especializados. 
                Analytics, relatórios, configurações, usuários.
                <br />
                <strong>Problema:</strong> Módulos diferentes, tecnologias diferentes, 
                times diferentes.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Monolito
// Dashboard gigante
// React + Angular + Vue misturados
// Deploy demora 1 hora
// Time de 30 pessoas

// ✅ BOM - Micro-frontends
// Analytics Team - React + D3
function AnalyticsApp() {
  return (
    <div>
      <Charts />
      <Metrics />
      <Reports />
    </div>
  );
}

// Reports Team - Vue + Chart.js
new Vue({
  el: '#reports',
  template: '<div>Relatórios em Vue</div>'
});

// Settings Team - Angular
@Component({
  selector: 'app-settings',
  template: '<div>Configurações em Angular</div>'
})

// Shell (container)
function DashboardApp() {
  return (
    <div>
      <Sidebar />
      <MicroFrontend 
        name="analytics"
        host="https://analytics.example.com"
      />
      <MicroFrontend 
        name="reports"
        host="https://reports.example.com"
      />
      <MicroFrontend 
        name="settings"
        host="https://settings.example.com"
      />
    </div>
  );
}

// Cada módulo independente
// Tecnologias diferentes
// Times especializados`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Admin Panel */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚙️ Admin Panel - Funcionalidades Independentes</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Painel administrativo com funcionalidades distintas. 
                Gestão de usuários, configurações, logs, backup.
                <br />
                <strong>Problema:</strong> Funcionalidades diferentes, 
                responsabilidades diferentes, times diferentes.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Monolito
// Admin panel gigante
// Tudo misturado
// Deploy demora 3 horas
// Time de 20 pessoas

// ✅ BOM - Micro-frontends
// User Management Team - React
function UserManagementApp() {
  return (
    <div>
      <UserList />
      <UserForm />
      <Permissions />
    </div>
  );
}

// Settings Team - Vue
new Vue({
  el: '#settings',
  template: '<div>Configurações em Vue</div>'
});

// Logs Team - Angular
@Component({
  selector: 'app-logs',
  template: '<div>Logs em Angular</div>'
});

// Backup Team - Vanilla JS
function BackupApp() {
  return <div>Backup em Vanilla JS</div>;
}

// Shell (container)
function AdminPanelApp() {
  return (
    <div>
      <AdminHeader />
      <MicroFrontend 
        name="users"
        host="https://users.example.com"
      />
      <MicroFrontend 
        name="settings"
        host="https://settings.example.com"
      />
      <MicroFrontend 
        name="logs"
        host="https://logs.example.com"
      />
      <MicroFrontend 
        name="backup"
        host="https://backup.example.com"
      />
    </div>
  );
}

// Cada funcionalidade independente
// Times especializados
// Deploy rápido`}
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
          {/* Over-fragmentation */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚫 Fragmentação Excessiva</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você cria micro-frontends pra tudo, 
                até pra componentes simples. Vira uma bagunça.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Só quebre quando faz sentido. 
                Micro-frontend deve ter responsabilidade clara e independente.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Fragmentação excessiva
// Micro-frontend para cada componente
<MicroFrontend name="header" />
<MicroFrontend name="sidebar" />
<MicroFrontend name="footer" />
<MicroFrontend name="button" />
<MicroFrontend name="input" />

// ✅ BOM - Quebra por domínio
<MicroFrontend name="catalog" />
<MicroFrontend name="cart" />
<MicroFrontend name="checkout" />
<MicroFrontend name="profile" />

// Cada um com responsabilidade clara`}
              </Code>
            </Stack>
          </Paper>

          {/* Shared State */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Estado Compartilhado</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Estado compartilhado entre micro-frontends. 
                Vira dependência, quebra a independência.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Cada micro-frontend gerencia seu estado. 
                Use eventos ou APIs para comunicação.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Estado compartilhado
// Redux global compartilhado
const store = createStore({
  catalog: catalogReducer,
  cart: cartReducer,
  checkout: checkoutReducer
});

// Todos dependem do mesmo store

// ✅ BOM - Estado independente
// Cada micro-frontend com seu estado
function CatalogApp() {
  const [products, setProducts] = useState([]);
  // Estado próprio
}

function CartApp() {
  const [items, setItems] = useState([]);
  // Estado próprio
}

// Comunicação via eventos
window.addEventListener('addToCart', (event) => {
  // Adiciona ao carrinho
});

window.dispatchEvent(new CustomEvent('addToCart', {
  detail: { product }
}));`}
              </Code>
            </Stack>
          </Paper>

          {/* Performance Issues */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🐌 Problemas de Performance</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos micro-frontends carregando ao mesmo tempo. 
                Bundle size gigante, carregamento lento.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Lazy loading, code splitting, 
                carregamento sob demanda.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Carregamento síncrono
function App() {
  return (
    <div>
      <MicroFrontend name="catalog" />
      <MicroFrontend name="cart" />
      <MicroFrontend name="checkout" />
      <MicroFrontend name="profile" />
    </div>
  );
}

// Todos carregam de uma vez

// ✅ BOM - Lazy loading
function App() {
  const [activeModule, setActiveModule] = useState('catalog');
  
  return (
    <div>
      <Navigation onModuleChange={setActiveModule} />
      {activeModule === 'catalog' && (
        <MicroFrontend name="catalog" />
      )}
      {activeModule === 'cart' && (
        <MicroFrontend name="cart" />
      )}
      {activeModule === 'checkout' && (
        <MicroFrontend name="checkout" />
      )}
    </div>
  );
}

// Carrega só o que precisa`}
              </Code>
            </Stack>
          </Paper>

          {/* Integration Complexity */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔗 Complexidade de Integração</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Integração complexa entre micro-frontends. 
                Routing, comunicação, estilos inconsistentes.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Shell bem definido, 
                padrões de comunicação, design system compartilhado.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Integração complexa
// Cada micro-frontend com seu routing
// Comunicação via props drilling
// Estilos diferentes

// ✅ BOM - Shell bem definido
// Shell gerencia routing
function Shell() {
  const [route, setRoute] = useState('/');
  
  return (
    <div>
      <Navigation onRouteChange={setRoute} />
      {route === '/catalog' && <CatalogApp />}
      {route === '/cart' && <CartApp />}
      {route === '/checkout' && <CheckoutApp />}
    </div>
  );
}

// Comunicação via eventos
window.addEventListener('navigate', (event) => {
  setRoute(event.detail.route);
});

// Design system compartilhado
const sharedStyles = {
  colors: { primary: '#007bff' },
  spacing: { sm: '8px', md: '16px' }
};`}
              </Code>
            </Stack>
          </Paper>

          {/* Team Coordination */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">👥 Coordenação de Times</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Times sem coordenação. 
                APIs diferentes, padrões diferentes, caos total.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Documentação clara, 
                padrões definidos, comunicação frequente.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Sem coordenação
// Time A - API REST
fetch('/api/products')

// Time B - GraphQL
query { products { id name } }

// Time C - gRPC
client.getProducts()

// ✅ BOM - Padrões definidos
// API Gateway centralizado
const apiGateway = {
  products: '/api/v1/products',
  cart: '/api/v1/cart',
  checkout: '/api/v1/checkout'
};

// Todos usam o mesmo padrão
fetch(apiGateway.products)
fetch(apiGateway.cart)
fetch(apiGateway.checkout)

// Documentação clara
// Comunicação frequente
// Padrões definidos`}
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
                  <strong>"Micro Frontends in Action"</strong> - Michael Geers
                </List.Item>
                <List.Item>
                  <strong>"Building Micro-frontends"</strong> - Luca Mezzalira
                </List.Item>
                <List.Item>
                  <strong>"Microservices Patterns"</strong> - Chris Richardson
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://micro-frontends.org/" target="_blank">
                    Micro Frontends - Site oficial
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank">
                    Micro Frontends - Martin Fowler
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://single-spa.js.org/" target="_blank">
                    Single-spa - Framework para micro-frontends
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
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Aplicação web gigante, 
                  times grandes, deploy lento.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Micro-frontends por funcionalidade. 
                  Times independentes, deploy rápido.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy em minutos, 
                  times independentes, desenvolvimento mais rápido.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">IKEA</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> E-commerce complexo, 
                  múltiplos países, funcionalidades distintas.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Micro-frontends por região/funcionalidade. 
                  Times locais, tecnologias flexíveis.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Experiência localizada, 
                  desenvolvimento descentralizado.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">DAZN</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Streaming platform, 
                  múltiplas plataformas, funcionalidades complexas.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Micro-frontends por funcionalidade. 
                  Player, catálogo, pagamentos independentes.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy independente, 
                  desenvolvimento paralelo, menos bugs.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Upwork</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Marketplace complexo, 
                  funcionalidades distintas, times grandes.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Micro-frontends por domínio. 
                  Busca, perfil, pagamentos independentes.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Times independentes, 
                  deploy rápido, desenvolvimento escalável.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam Micro-frontends:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Single-spa</strong> - Framework para micro-frontends
                </List.Item>
                <List.Item>
                  <strong>Module Federation</strong> - Webpack 5 para micro-frontends
                </List.Item>
                <List.Item>
                  <strong>qiankun</strong> - Framework baseado em single-spa
                </List.Item>
                <List.Item>
                  <strong>Piral</strong> - Framework para micro-frontends
                </List.Item>
                <List.Item>
                  <strong>Open Components</strong> - Componentes distribuídos
                </List.Item>
                <List.Item>
                  <strong>Nx</strong> - Monorepo para micro-frontends
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
              <Text c="dimmed">Micro-frontends na prática</Text>
            </div>
          </Group>
          
          <Text>
            Micro-frontends é sobre uma coisa só: <strong>quebrar aplicações grandes em pedaços pequenos</strong>. 
            Times independentes, tecnologias flexíveis, deploy rápido. 
            Use quando tem time grande e quer escalabilidade real.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre criar micro-frontends pra tudo. 
            É sobre quebrar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com poucos micro-frontends, evolua conforme necessário. 
            Foque na independência real dos times.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

MicroFrontends.metadata = {
  title: 'Micro-frontends',
  description: 'Quebre aplicações grandes em pedaços pequenos com times independentes e deploy separado.'
};

export default MicroFrontends;
