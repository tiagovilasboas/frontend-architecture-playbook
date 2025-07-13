import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconLayout, IconBolt } from '@tabler/icons-react';

function SPA() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Single Page Application (SPA)
        </Title>
        <Text size="lg" c="dimmed">
          Uma página, múltiplas rotas. JavaScript renderiza tudo, 
          navegação instantânea, experiência de app nativo.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconLayout size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Aplicação que roda em uma única página HTML</Text>
            </div>
          </Group>
          
          <Text>
            SPA é sobre uma coisa só: <strong>JavaScript renderiza tudo</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de servidor renderizar cada página, 
            você tem uma página HTML que carrega JavaScript. O JavaScript 
            renderiza diferentes componentes baseado na URL.
          </Text>
          
          <Text>
            A regra é simples: <em>uma página, múltiplas rotas, JavaScript controla tudo</em>. 
            Navegação instantânea, experiência de app nativo, sem reload.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
                      <IconBolt size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Uma Página HTML</Title>
                <Text size="sm" c="dimmed">
                  Página inicial que carrega JavaScript. 
                  O resto é renderizado pelo JavaScript.
                </Text>
                <Code mt="xs" block>
{`<!-- index.html - Única página HTML -->
<!DOCTYPE html>
<html>
<head>
  <title>Minha SPA</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div id="root">
    <!-- JavaScript renderiza aqui -->
  </div>
  
  <script src="/app.js"></script>
</body>
</html>

// app.js - JavaScript controla tudo
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// Uma página HTML
// JavaScript renderiza tudo
// Sem reload de página`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Roteamento Client-Side</Title>
                <Text size="sm" c="dimmed">
                  JavaScript gerencia rotas. URL muda, 
                  componente renderiza, sem reload.
                </Text>
                <Code mt="xs" block>
{`// Roteamento client-side
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhes />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

// URL muda
// Componente renderiza
// Sem reload de página
// Navegação instantânea`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Estado Global</Title>
                <Text size="sm" c="dimmed">
                  Estado compartilhado entre componentes. 
                  Redux, Context, Zustand.
                </Text>
                <Code mt="xs" block>
{`// Estado global compartilhado
import { createStore } from 'redux';

const initialState = {
  user: null,
  cart: [],
  theme: 'light'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cart: [...state.cart, action.payload] 
      };
    case 'TOGGLE_THEME':
      return { 
        ...state, 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// Estado compartilhado
// Componentes acessam
// Mudanças refletem em todo lugar`}
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
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Navegação Instantânea</Title>
                <Text size="sm">
                  Sem reload de página, transições suaves, 
                  experiência de app nativo.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconLayout size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Estado Persistente</Title>
                <Text size="sm">
                  Estado mantido entre navegações, 
                  dados compartilhados, UX fluida.
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
                <Title order={4}>Interatividade Rica</Title>
                <Text size="sm">
                  Animações, transições, feedback visual. 
                  Experiência moderna e responsiva.
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
              <List.Item>Aplicações com muita interatividade</List.Item>
              <List.Item>Dashboards e painéis administrativos</List.Item>
              <List.Item>Apps com estado complexo</List.Item>
              <List.Item>Experiência de app nativo é importante</List.Item>
              <List.Item>Navegação frequente entre páginas</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>SEO é crítico (conteúdo não indexa)</List.Item>
              <List.Item>Performance inicial é prioridade</List.Item>
              <List.Item>Sites de conteúdo estático</List.Item>
              <List.Item>Usuários com JavaScript desabilitado</List.Item>
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
          {/* Example 1: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Aplicação Complexa</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard administrativo com múltiplas seções, 
                gráficos interativos, filtros dinâmicos.
                <br />
                <strong>Problema:</strong> Navegação lenta, estado perdido, 
                experiência fragmentada.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Múltiplas páginas
// Cada seção é uma página separada
// Reload a cada navegação
// Estado perdido
// Experiência fragmentada

// ✅ BOM - SPA Dashboard
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="dashboard">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

// components/Sidebar.jsx
function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <nav>
      <div 
        className={location.pathname === '/' ? 'active' : ''}
        onClick={() => navigate('/')}
      >
        Overview
      </div>
      <div 
        className={location.pathname === '/analytics' ? 'active' : ''}
        onClick={() => navigate('/analytics')}
      >
        Analytics
      </div>
      <div 
        className={location.pathname === '/users' ? 'active' : ''}
        onClick={() => navigate('/users')}
      >
        Users
      </div>
    </nav>
  );
}

// components/Analytics.jsx
function Analytics() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchAnalytics(filters).then(setData);
  }, [filters]);
  
  return (
    <div>
      <Filters onChange={setFilters} />
      <Charts data={data} />
      <Table data={data} />
    </div>
  );
}

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import analyticsReducer from './analyticsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    analytics: analyticsReducer
  }
});

// Navegação instantânea
// Estado persistente
// Experiência fluida`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Estado Complexo</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com carrinho, favoritos, 
                histórico de compras. Estado compartilhado.
                <br />
                <strong>Problema:</strong> Carrinho perdido, estado inconsistente, 
                UX ruim.
              </Text>
              
              <Code block>
{`// ✅ BOM - SPA E-commerce
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produto/:id" element={<ProdutoDetalhes />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

// contexts/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
      
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
      
    case 'CLEAR_CART':
      return { ...state, items: [] };
      
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}

// components/ProdutoDetalhes.jsx
function ProdutoDetalhes() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [produto, setProduto] = useState(null);
  
  useEffect(() => {
    fetchProduto(id).then(setProduto);
  }, [id]);
  
  const adicionarAoCarrinho = () => {
    dispatch({ type: 'ADD_ITEM', payload: produto });
  };
  
  if (!produto) return <div>Carregando...</div>;
  
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>R$ {produto.preco}</p>
      <button onClick={adicionarAoCarrinho}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

// components/Header.jsx
function Header() {
  const { state } = useCart();
  const navigate = useNavigate();
  
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity, 
    0
  );
  
  return (
    <header>
      <div onClick={() => navigate('/')}>Logo</div>
      <nav>
        <div onClick={() => navigate('/produtos')}>Produtos</div>
        <div onClick={() => navigate('/carrinho')}>
          Carrinho ({itemCount})
        </div>
      </nav>
    </header>
  );
}

// Estado compartilhado
// Carrinho persistente
// Navegação instantânea`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Social Media */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📱 Social Media - Feed Dinâmico</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> App social com feed, perfil, 
                mensagens. Conteúdo dinâmico, estado complexo.
                <br />
                <strong>Problema:</strong> Feed lento, estado perdido, 
                experiência fragmentada.
              </Text>
              
              <Code block>
{`// ✅ BOM - SPA Social Media
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/perfil/:username" element={<Perfil />} />
            <Route path="/mensagens" element={<Mensagens />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
          <Navigation />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

// components/Feed.jsx
function Feed() {
  const { data: posts, isLoading, refetch } = useQuery(
    'posts',
    fetchPosts,
    { staleTime: 5 * 60 * 1000 } // 5 minutos
  );
  
  const likeMutation = useMutation(likePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });
  
  const handleLike = (postId) => {
    likeMutation.mutate(postId);
  };
  
  if (isLoading) return <div>Carregando...</div>;
  
  return (
    <div className="feed">
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onLike={handleLike}
        />
      ))}
    </div>
  );
}

// components/Post.jsx
function Post({ post, onLike }) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    onLike(post.id);
  };
  
  return (
    <div className="post">
      <div className="header">
        <img src={post.author.avatar} alt={post.author.name} />
        <span>{post.author.name}</span>
      </div>
      
      <div className="content">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="" />}
      </div>
      
      <div className="actions">
        <button 
          onClick={handleLike}
          className={isLiked ? 'liked' : ''}
        >
          ❤️ {likeCount}
        </button>
        <button>💬 {post.commentCount}</button>
        <button>📤 Compartilhar</button>
      </div>
    </div>
  );
}

// components/Navigation.jsx
function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <nav className="bottom-nav">
      <div 
        className={location.pathname === '/' ? 'active' : ''}
        onClick={() => navigate('/')}
      >
        🏠 Feed
      </div>
      <div 
        className={location.pathname === '/mensagens' ? 'active' : ''}
        onClick={() => navigate('/mensagens')}
      >
        💬 Mensagens
      </div>
      <div 
        className={location.pathname.startsWith('/perfil') ? 'active' : ''}
        onClick={() => navigate('/perfil/me')}
      >
        👤 Perfil
      </div>
    </nav>
  );
}

// Feed dinâmico
// Estado persistente
// Navegação instantânea`}
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
          {/* SEO Issues */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔍 Problemas de SEO</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> JavaScript renderiza conteúdo. 
                Crawlers não veem nada, SEO ruim.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use SSR, SSG, ou considere 
                outras arquiteturas para conteúdo público.
              </Text>
              
              <Code block>
{`// ❌ RUIM - SPA puro
// JavaScript renderiza tudo
// Crawlers não veem conteúdo
// SEO ruim

// ✅ BOM - SPA com SSR
// Next.js ou similar
// Servidor renderiza HTML inicial
// JavaScript hidrata depois

// pages/produtos/[id].js
export async function getServerSideProps({ params }) {
  const produto = await fetchProduto(params.id);
  
  return {
    props: {
      produto,
      meta: {
        title: produto.nome,
        description: produto.descricao
      }
    }
  };
}

// Ou use SSG
export async function getStaticProps({ params }) {
  const produto = await fetchProduto(params.id);
  
  return {
    props: { produto },
    revalidate: 3600
  };
}

// HTML pré-renderizado
// SEO perfeito
// JavaScript hidrata depois`}
              </Code>
            </Stack>
          </Paper>

          {/* Bundle Size */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📦 Bundle Size</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Bundle JavaScript muito grande. 
                Carregamento lento, performance ruim.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use code splitting, lazy loading, 
                otimize bundle size.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Bundle grande
// Tudo carrega de uma vez
// Performance ruim

// ✅ BOM - Code splitting
import { lazy, Suspense } from 'react';

const Analytics = lazy(() => import('./Analytics'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/analytics" 
        element={
          <Suspense fallback={<div>Carregando...</div>}>
            <Analytics />
          </Suspense>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <Suspense fallback={<div>Carregando...</div>}>
            <Settings />
          </Suspense>
        } 
      />
    </Routes>
  );
}

// Bundle dividido
// Carregamento sob demanda
// Performance melhor`}
              </Code>
            </Stack>
          </Paper>

          {/* State Management */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Gestão de Estado</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Estado espalhado, difícil de gerenciar, 
                bugs de estado inconsistente.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ferramentas de state management, 
                centralize estado global.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Estado espalhado
// Cada componente gerencia seu estado
// Difícil de compartilhar
// Bugs de inconsistência

// ✅ BOM - Estado centralizado
// store/index.js
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    ui: uiReducer
  }
});

// components/UserProfile.jsx
function UserProfile() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const updateProfile = (data) => {
    dispatch(updateUser(data));
  };
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => updateProfile({ name: 'Novo Nome' })}>
        Atualizar
      </button>
    </div>
  );
}

// Estado centralizado
// Fácil de compartilhar
// Consistente`}
              </Code>
            </Stack>
          </Paper>

          {/* Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚡ Performance</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> JavaScript pesado, 
                carregamento lento, interação lenta.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Otimize JavaScript, 
                use virtualização, implemente caching.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Performance ruim
// Renderiza tudo de uma vez
// Lista grande = lento

// ✅ BOM - Performance otimizada
// components/VirtualizedList.jsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Item item={items[index]} />
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  );
}

// Virtualização
// Renderiza só o visível
// Performance excelente`}
              </Code>
            </Stack>
          </Paper>

          {/* Accessibility */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">♿ Acessibilidade</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> JavaScript controla tudo. 
                Screen readers não funcionam, navegação por teclado quebra.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use HTML semântico, 
                implemente ARIA, teste com screen readers.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Acessibilidade ruim
// divs para tudo
// Sem semântica
// Screen readers não funcionam

// ✅ BOM - Acessibilidade boa
function Navigation() {
  return (
    <nav role="navigation" aria-label="Menu principal">
      <ul>
        <li>
          <a href="/" aria-current={location.pathname === '/' ? 'page' : undefined}>
            Home
          </a>
        </li>
        <li>
          <a href="/produtos" aria-current={location.pathname === '/produtos' ? 'page' : undefined}>
            Produtos
          </a>
        </li>
      </ul>
    </nav>
  );
}

// HTML semântico
// ARIA labels
// Screen readers funcionam`}
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
                  <strong>"Single Page Applications"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"React in Action"</strong> - Mark Tielens Thomas
                </List.Item>
                <List.Item>
                  <strong>"Vue.js in Action"</strong> - Erik Hanchett
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://reactjs.org/" target="_blank">
                    React - Biblioteca para SPAs
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://vuejs.org/" target="_blank">
                    Vue.js - Framework progressivo
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://angular.io/" target="_blank">
                    Angular - Framework completo
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
                <Title order={4} mb="sm">Gmail</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Email lento, recarregamento constante, 
                  experiência fragmentada.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> SPA com AJAX. 
                  Navegação instantânea, estado persistente.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Email rápido, 
                  experiência fluida, revolucionou webmail.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Google Maps</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Mapas lentos, recarregamento, 
                  experiência ruim.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> SPA com AJAX. 
                  Navegação instantânea, interação rica.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Mapas responsivos, 
                  experiência de app nativo.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Facebook</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Feed lento, recarregamento, 
                  experiência fragmentada.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> SPA com React. 
                  Feed dinâmico, navegação instantânea.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Feed rápido, 
                  experiência fluida, engagement maior.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Twitter</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Timeline lenta, recarregamento, 
                  experiência ruim.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> SPA com React. 
                  Timeline dinâmica, navegação instantânea.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Timeline rápida, 
                  experiência fluida, mais engagement.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam SPAs:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>React</strong> - Biblioteca para interfaces
                </List.Item>
                <List.Item>
                  <strong>Vue.js</strong> - Framework progressivo
                </List.Item>
                <List.Item>
                  <strong>Angular</strong> - Framework completo
                </List.Item>
                <List.Item>
                  <strong>React Router</strong> - Roteamento para React
                </List.Item>
                <List.Item>
                  <strong>Vue Router</strong> - Roteamento para Vue
                </List.Item>
                <List.Item>
                  <strong>Redux</strong> - State management
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
              <Text c="dimmed">SPA na prática</Text>
            </div>
          </Group>
          
          <Text>
            SPA é sobre uma coisa só: <strong>JavaScript renderiza tudo</strong>. 
            Uma página HTML, múltiplas rotas, navegação instantânea. 
            Use quando interatividade e experiência de app nativo importam.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre usar SPA pra tudo. 
            É sobre usar quando interatividade importa. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com aplicações interativas, 
            evolua conforme necessário. Foque em performance e UX.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

SPA.metadata = {
  title: 'Single Page Application (SPA)',
  description: 'Uma página, múltiplas rotas. JavaScript renderiza tudo, navegação instantânea.'
};

export default SPA;
