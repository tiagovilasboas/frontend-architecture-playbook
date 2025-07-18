import {
  Title,
  Text,
  Stack,
  Paper,
  Code,
  Alert,
  List,
  ThemeIcon,
  Group,
  Card,
  Badge,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconServer,
  IconBolt,
} from '@tabler/icons-react';

function ServerSideRendering() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Server-Side Rendering (SSR)
        </Title>
        <Text size="lg" c="dimmed">
          Renderiza no servidor, serve HTML pronto. SEO perfeito, performance
          inicial rápida. O melhor dos dois mundos.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconServer size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Renderização no servidor antes de enviar para o cliente
              </Text>
            </div>
          </Group>

          <Text>
            SSR é sobre uma coisa só: <strong>renderizar no servidor</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés do browser carregar JavaScript e renderizar, o
            servidor já manda o HTML pronto. O cliente só hidrata e adiciona
            interatividade.
          </Text>

          <Text>
            A regra é simples: <em>servidor renderiza, cliente hidrata</em>. SEO
            perfeito, performance inicial rápida, interatividade mantida.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconBolt
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Como Funciona
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Servidor Renderiza</Title>
                <Text size="sm" c="dimmed">
                  React/Vue roda no servidor, gera HTML completo com dados.
                </Text>
                <Code mt="xs" block>
                  {`// Servidor renderiza
// pages/products/[id].js
export async function getServerSideProps({ params }) {
  const product = await fetchProduct(params.id);
  const reviews = await fetchReviews(params.id);
  
  return {
    props: {
      product,
      reviews,
      meta: {
        title: product.name,
        description: product.description,
      }
    }
  };
}

// React renderiza no servidor
function ProductPage({ product, reviews }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ReviewsList reviews={reviews} />
    </div>
  );
}

// HTML gerado no servidor
// <div><h1>iPhone 13</h1><p>Melhor iPhone...</p></div>`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Cliente Recebe HTML</Title>
                <Text size="sm" c="dimmed">
                  Browser recebe HTML pronto, renderiza instantaneamente.
                </Text>
                <Code mt="xs" block>
                  {`// Cliente recebe HTML pronto
<!DOCTYPE html>
<html>
<head>
  <title>iPhone 13 - Loja Online</title>
  <meta name="description" content="Melhor iPhone...">
</head>
<body>
  <div id="root">
    <div>
      <h1>iPhone 13</h1>
      <p>Melhor iPhone já feito...</p>
      <div class="reviews">
        <h2>Avaliações</h2>
        <div class="review">Excelente produto!</div>
      </div>
    </div>
  </div>
  <script src="/app.js"></script>
</body>
</html>

// HTML renderizado instantaneamente
// SEO perfeito
// Performance inicial rápida`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Cliente Hidrata</Title>
                <Text size="sm" c="dimmed">
                  JavaScript adiciona interatividade, mantém estado.
                </Text>
                <Code mt="xs" block>
                  {`// Cliente hidrata
// app.js carrega
ReactDOM.hydrate(
  <ProductPage 
    product={window.__INITIAL_DATA__.product}
    reviews={window.__INITIAL_DATA__.reviews}
  />,
  document.getElementById('root')
);

// Adiciona interatividade
function ProductPage({ product, reviews }) {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const addToCart = async () => {
    setIsAddingToCart(true);
    await addItemToCart(product.id, quantity);
    setIsAddingToCart(false);
  };
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addToCart} disabled={isAddingToCart}>
        {isAddingToCart ? 'Adicionando...' : 'Adicionar ao Carrinho'}
      </button>
      <ReviewsList reviews={reviews} />
    </div>
  );
}

// Interatividade mantida
// Estado preservado
// Performance otimizada`}
                </Code>
              </div>
            </Group>
          </Card>
        </Stack>

        <Paper withBorder p="md" radius="md" mt="lg">
          <Text size="sm" c="dimmed">
            <strong>Como funciona:</strong> O servidor renderiza o React/Vue e
            gera HTML completo com dados (Passo 1). O cliente recebe HTML pronto
            e renderiza instantaneamente (Passo 2). O JavaScript hidrata a
            página, adicionando interatividade sem perder o estado (Passo 3).
            Resultado: SEO perfeito + performance inicial rápida +
            interatividade mantida.
          </Text>
        </Paper>
      </div>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Por que vale a pena?
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>SEO Perfeito</Title>
                <Text size="sm">
                  Crawlers veem HTML completo. Meta tags dinâmicas, conteúdo
                  indexável.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconServer size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Performance Inicial Rápida</Title>
                <Text size="sm">
                  HTML pronto no primeiro request. Sem esperar JavaScript
                  carregar.
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
                <Title order={4}>Interatividade Mantida</Title>
                <Text size="sm">
                  JavaScript hidrata, adiciona interatividade. Melhor dos dois
                  mundos.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>SEO é crítico (e-commerce, blog, marketing)</List.Item>
              <List.Item>Performance inicial é importante</List.Item>
              <List.Item>Conteúdo dinâmico mas não em tempo real</List.Item>
              <List.Item>Dados precisam ser frescos a cada request</List.Item>
              <List.Item>Autenticação baseada em sessão</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Aplicações com muita interatividade</List.Item>
              <List.Item>Dados em tempo real (chat, dashboards)</List.Item>
              <List.Item>Conteúdo que não muda (sites estáticos)</List.Item>
              <List.Item>Orçamento limitado (custo de servidor)</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Exemplos Práticos no Front-End
        </Title>

        <Stack gap="xl">
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🛒 E-commerce - SEO Crítico
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com produtos, categorias,
                busca. SEO crítico para conversão.
                <br />
                <strong>Problema:</strong> SPA não indexa, performance inicial
                lenta, SEO ruim.
              </Text>

              <Code block>
                {`// ❌ RUIM - SPA puro
// JavaScript renderiza tudo
// Crawlers não veem produtos
// SEO ruim

// ✅ BOM - SSR
// pages/products/[id].js
export async function getServerSideProps({ params, query }) {
  const product = await fetchProduct(params.id);
  const relatedProducts = await fetchRelatedProducts(params.id);
  
  return {
    props: {
      product,
      relatedProducts,
      meta: {
        title: \`\${product.name} - Loja Online\`,
        description: product.description,
        image: product.images[0],
        price: product.price,
      }
    }
  };
}

// pages/categories/[slug].js
export async function getServerSideProps({ params }) {
  const category = await fetchCategory(params.slug);
  const products = await fetchProductsByCategory(params.slug);
  
  return {
    props: {
      category,
      products,
      meta: {
        title: \`\${category.name} - Produtos\`,
        description: category.description,
      }
    }
  };
}

// HTML renderizado no servidor
// SEO perfeito
// Performance inicial rápida
// Crawlers veem tudo`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Blog */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📝 Blog - Conteúdo Dinâmico
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Blog com artigos, comentários, busca.
                Conteúdo que muda, mas não em tempo real.
                <br />
                <strong>Problema:</strong> Conteúdo não indexa, performance
                inicial lenta.
              </Text>

              <Code block>
                {`// ❌ RUIM - SPA
// JavaScript renderiza artigos
// Crawlers não veem conteúdo
// SEO ruim

// ✅ BOM - SSR
// pages/blog/[slug].js
export async function getServerSideProps({ params, req }) {
  const post = await fetchPost(params.slug);
  const comments = await fetchComments(params.slug);
  const user = req.user; // Autenticação de sessão
  
  return {
    props: {
      post,
      comments,
      user,
      meta: {
        title: post.title,
        description: post.excerpt,
        author: post.author,
        publishedAt: post.publishedAt,
      }
    }
  };
}

// pages/blog/index.js
export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const posts = await fetchPosts({ page, limit: 10 });
  const totalPages = await getTotalPages();
  
  return {
    props: {
      posts,
      currentPage: page,
      totalPages,
      meta: {
        title: 'Blog - Artigos e Tutoriais',
        description: 'Últimos artigos sobre tecnologia',
      }
    }
  };
}

// HTML com conteúdo completo
// SEO perfeito
// Performance inicial rápida
// Autenticação de sessão`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📊 Dashboard - Dados Frescos
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard com métricas, gráficos,
                tabelas. Dados que precisam ser frescos.
                <br />
                <strong>Problema:</strong> Dados desatualizados, loading states
                longos.
              </Text>

              <Code block>
                {`// ❌ RUIM - SPA
// Loading state longo
// Dados podem estar desatualizados

// ✅ BOM - SSR
// pages/dashboard.js
export async function getServerSideProps({ req }) {
  const user = req.user;
  if (!user) {
    return { redirect: { destination: '/login' } };
  }
  
  const [metrics, recentOrders, topProducts] = await Promise.all([
    fetchMetrics(user.id),
    fetchRecentOrders(user.id),
    fetchTopProducts(user.id),
  ]);
  
  return {
    props: {
      user,
      metrics,
      recentOrders,
      topProducts,
      meta: {
        title: 'Dashboard - Painel de Controle',
        description: 'Suas métricas e dados',
      }
    }
  };
}

// pages/dashboard/analytics.js
export async function getServerSideProps({ req, query }) {
  const user = req.user;
  const { period = '30d' } = query;
  
  const analytics = await fetchAnalytics(user.id, period);
  
  return {
    props: {
      user,
      analytics,
      period,
      meta: {
        title: 'Analytics - Análise de Dados',
        description: 'Análise detalhada de performance',
      }
    }
  };
}

// Dados frescos a cada request
// Autenticação de sessão
// Performance inicial rápida
// SEO para páginas públicas`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas & Como Evitar
        </Title>

        <Stack gap="xl">
          {/* Server Load */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🐌 Carga no Servidor
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Servidor renderiza cada request.
                Carga alta, performance degrada com tráfego.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Use cache, ISR, ou considere SSG
                para conteúdo que não muda frequentemente.
              </Text>

              <Code block>
                {`// ❌ RUIM - Sem cache
// Cada request renderiza no servidor
// Carga alta, lento

// ✅ BOM - Com cache
// pages/products/[id].js
export async function getServerSideProps({ params, res }) {
  // Cache por 5 minutos
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  
  const product = await fetchProduct(params.id);
  
  return {
    props: { product }
  };
}

// Ou use ISR para conteúdo semi-dinâmico
// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);
  
  return {
    props: { post },
    revalidate: 3600, // Revalida a cada hora
  };
}

// Cache reduz carga
// Performance melhor
// Menos custo`}
              </Code>
            </Stack>
          </Paper>

          {/* Hydration Mismatch */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🔄 Mismatch de Hidratação
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> HTML do servidor diferente do
                cliente. Erros de hidratação, warnings no console.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Evite dados que mudam entre
                servidor e cliente. Use useEffect para dados dinâmicos.
              </Text>

              <Code block>
                {`// ❌ RUIM - Mismatch
function ProductPage({ product }) {
  const [price, setPrice] = useState(product.price);
  
  useEffect(() => {
    // Preço pode mudar no cliente
    fetchLatestPrice(product.id).then(setPrice);
  }, []);
  
  return <div>R$ {price}</div>;
}

// Servidor: R$ 100
// Cliente: R$ 95
// Mismatch!

// ✅ BOM - Sem mismatch
function ProductPage({ product }) {
  const [price, setPrice] = useState(null);
  
  useEffect(() => {
    // Só mostra preço quando carregar
    fetchLatestPrice(product.id).then(setPrice);
  }, []);
  
  return (
    <div>
      {price ? \`R$ \${price}\` : \`R$ \${product.price}\`}
    </div>
  );
}

// Ou use suppressHydrationWarning
function ProductPage({ product }) {
  return (
    <div suppressHydrationWarning>
      R$ {product.price}
    </div>
  );
}

// Sem mismatch
// Hidratação limpa`}
              </Code>
            </Stack>
          </Paper>

          {/* Bundle Size */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📦 Bundle Size
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> JavaScript ainda precisa carregar.
                Bundle grande = hidratação lenta.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Code splitting, lazy loading,
                otimize bundle size.
              </Text>

              <Code block>
                {`// ❌ RUIM - Bundle grande
// Todo JavaScript carrega de uma vez
// Hidratação lenta

// ✅ BOM - Code splitting
// pages/dashboard.js
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart'), {
  loading: () => <div>Carregando gráfico...</div>,
  ssr: false, // Não renderiza no servidor
});

const Analytics = dynamic(() => import('../components/Analytics'), {
  loading: () => <div>Carregando analytics...</div>,
});

function Dashboard({ data }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Chart data={data.chart} />
      <Analytics data={data.analytics} />
    </div>
  );
}

// JavaScript carrega sob demanda
// Hidratação mais rápida
// Performance melhor`}
              </Code>
            </Stack>
          </Paper>

          {/* API Calls */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🔗 Chamadas de API
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitas chamadas de API no servidor.
                Request lento, timeout.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Otimize queries, use cache,
                considere GraphQL para múltiplas APIs.
              </Text>

              <Code block>
                {`// ❌ RUIM - Muitas chamadas
export async function getServerSideProps() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
  const likes = await fetchLikes();
  const shares = await fetchShares();
  
  // 5 chamadas sequenciais = lento
}

// ✅ BOM - Otimizado
export async function getServerSideProps() {
  const [user, posts, comments, likes, shares] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
    fetchLikes(),
    fetchShares(),
  ]);
  
  // 5 chamadas paralelas = rápido
}

// Ou use GraphQL
const query = \`
  query DashboardData {
    user { id name }
    posts { id title }
    comments { id text }
    likes { id }
    shares { id }
  }
\`;

// Uma chamada, múltiplos dados
// Mais eficiente`}
              </Code>
            </Stack>
          </Paper>

          {/* Authentication */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🔐 Autenticação
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Autenticação complexa no servidor.
                Sessões, tokens, refresh tokens.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Use bibliotecas de auth, considere
                JWT ou session-based auth.
              </Text>

              <Code block>
                {`// ❌ RUIM - Auth manual
export async function getServerSideProps({ req }) {
  const token = req.cookies.token;
  if (!token) {
    return { redirect: { destination: '/login' } };
  }
  
  try {
    const user = await verifyToken(token);
    return { props: { user } };
  } catch (error) {
    return { redirect: { destination: '/login' } };
  }
}

// Complexo, propenso a erros

// ✅ BOM - Auth com biblioteca
// middleware.js
import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware(req) {
    // Auth automático
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// pages/dashboard.js
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  
  if (!session) {
    return { redirect: { destination: '/login' } };
  }
  
  return { props: { user: session.user } };
}

// Auth simplificado
// Menos bugs
// Mais seguro`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References & Real Cases */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Referências & Casos Reais
        </Title>

        <Stack gap="xl">
          {/* References */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📚 Referências
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Server-Side Rendering with React"</strong> - Various
                  Authors
                </List.Item>
                <List.Item>
                  <strong>"Next.js: The React Framework"</strong> - Vercel Team
                </List.Item>
                <List.Item>
                  <strong>"Universal JavaScript"</strong> - Various Authors
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://nextjs.org/" target="_blank">
                    Next.js - React framework com SSR
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://nuxtjs.org/" target="_blank">
                    Nuxt.js - Vue framework com SSR
                  </a>
                </List.Item>
                <List.Item>
                  <a
                    href="https://reactjs.org/docs/react-dom-server.html"
                    target="_blank"
                  >
                    React Server-Side Rendering
                  </a>
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
              <Text c="dimmed">SSR na prática</Text>
            </div>
          </Group>

          <Text>
            SSR é sobre uma coisa só: <strong>renderizar no servidor</strong>.
            SEO perfeito, performance inicial rápida, interatividade mantida.
            Use quando SEO e performance inicial importam.
          </Text>

          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre usar SSR pra tudo. É sobre
            usar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com páginas críticas de SEO, evolua
            conforme necessário. Foque em performance e SEO.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

ServerSideRendering.metadata = {
  title: 'Server-Side Rendering (SSR)',
  description:
    'Renderiza no servidor, serve HTML pronto. SEO perfeito e performance inicial rápida.',
};

export default ServerSideRendering;
