import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconBolt, IconCloud } from '@tabler/icons-react';

function JAMstack() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          JAMstack
        </Title>
        <Text size="lg" c="dimmed">
          JavaScript, APIs, Markup. Sites estáticos, performance máxima, 
          segurança de sobra. Deploy simples, escalabilidade automática.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBolt size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">JavaScript, APIs, Markup - arquitetura moderna para web</Text>
            </div>
          </Group>
          
          <Text>
            JAMstack é sobre uma coisa só: <strong>separar front-end de back-end</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de servidor renderizando páginas, você tem sites estáticos 
            servidos por CDN, com JavaScript fazendo a mágica e APIs fornecendo dados.
          </Text>
          
          <Text>
            A regra é simples: <em>pre-renderiza tudo, serve estático, 
            JavaScript adiciona interatividade</em>. Performance máxima, segurança de sobra.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconCloud size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Pilares
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">J</Badge>
              <div>
                <Title order={4}>JavaScript</Title>
                <Text size="sm" c="dimmed">
                  Interatividade no cliente. React, Vue, vanilla JS. 
                  Tudo que roda no browser.
                </Text>
                <Code mt="xs" block>
{`// JavaScript no cliente
function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Chama API para buscar dados
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">A</Badge>
              <div>
                <Title order={4}>APIs</Title>
                <Text size="sm" c="dimmed">
                  Dados e funcionalidades via APIs. REST, GraphQL, 
                  serverless functions.
                </Text>
                <Code mt="xs" block>
{`// APIs para dados e funcionalidades
// REST API
GET /api/products
POST /api/orders
PUT /api/users/123

// GraphQL
query {
  products {
    id
    name
    price
  }
}

// Serverless Functions
export default function handler(req, res) {
  // Lógica de negócio
  res.json({ data: 'result' });
}`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">M</Badge>
              <div>
                <Title order={4}>Markup</Title>
                <Text size="sm" c="dimmed">
                  HTML pré-renderizado. Gatsby, Next.js, Nuxt. 
                  Sites estáticos servidos por CDN.
                </Text>
                <Code mt="xs" block>
{`// HTML pré-renderizado
<!DOCTYPE html>
<html>
<head>
  <title>Meu Site</title>
  <meta name="description" content="Site JAMstack">
</head>
<body>
  <div id="root">
    <h1>Bem-vindo</h1>
    <p>Site estático servido por CDN</p>
  </div>
  <script src="/app.js"></script>
</body>
</html>

// Servido por CDN
// Performance máxima
// SEO perfeito`}
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
                <Title order={4}>Performance Máxima</Title>
                <Text size="sm">
                  Sites estáticos servidos por CDN. Carregamento instantâneo, 
                  sem servidor para processar.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCloud size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Segurança de Soba</Title>
                <Text size="sm">
                  Sem servidor = sem superfície de ataque. 
                  APIs isoladas, menos vulnerabilidades.
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
                <Title order={4}>Escalabilidade Automática</Title>
                <Text size="sm">
                  CDN escala automaticamente. Milhões de usuários, 
                  sem configurar servidores.
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
              <List.Item>Sites de conteúdo (blog, marketing)</List.Item>
              <List.Item>Performance é crítica</List.Item>
              <List.Item>SEO é importante</List.Item>
              <List.Item>Orçamento limitado (hosting barato)</List.Item>
              <List.Item>Segurança é prioridade</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Aplicações com muita lógica de negócio</List.Item>
              <List.Item>Dados em tempo real</List.Item>
              <List.Item>Autenticação complexa</List.Item>
              <List.Item>Integrações com sistemas legados</List.Item>
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
          {/* Example 1: Blog */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Blog - Conteúdo Estático</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Blog com artigos, categorias, busca. 
                Conteúdo que não muda frequentemente.
                <br />
                <strong>Problema:</strong> Servidor lento, SEO ruim, 
                custo alto de hosting.
              </Text>
              
              <Code block>
{`// ❌ RUIM - WordPress tradicional
// Servidor PHP + MySQL
// Cada página renderizada no servidor
// Lento, inseguro, caro

// ✅ BOM - JAMstack
// Gatsby/Next.js + Headless CMS
// Build gera HTML estático
// Servido por CDN

// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(\`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  \`);
  
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: \`/blog/\${node.slug}\`,
      component: path.resolve(\`./src/templates/blog-post.js\`),
      context: {
        slug: node.slug,
      },
    });
  });
};

// Build gera HTML estático
// Deploy na Netlify/Vercel
// CDN serve instantaneamente
// SEO perfeito
// Custo mínimo`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Performance Crítica</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com produtos, carrinho, checkout. 
                Performance crítica para conversão.
                <br />
                <strong>Problema:</strong> Servidor lento, abandono de carrinho, 
                SEO ruim.
              </Text>
              
              <Code block>
{`// ❌ RUIM - E-commerce tradicional
// Servidor renderiza cada página
// Lento, inseguro, caro

// ✅ BOM - JAMstack E-commerce
// Next.js + Stripe + Headless CMS

// pages/products/[slug].js
export async function getStaticPaths() {
  const products = await fetchProducts();
  
  const paths = products.map(product => ({
    params: { slug: product.slug }
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.slug);
  
  return {
    props: { product },
    revalidate: 3600 // Revalida a cada hora
  };
}

// pages/api/create-checkout-session.js
export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    mode: 'payment',
    success_url: \`\${req.headers.origin}/success\`,
    cancel_url: \`\${req.headers.origin}/cancel\`,
  });
  
  res.json({ id: session.id });
}

// HTML pré-renderizado
// JavaScript para interatividade
// APIs para funcionalidades
// Performance máxima
// SEO perfeito`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Portfolio */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🎨 Portfolio - Simplicidade e Performance</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Portfolio pessoal com projetos, 
                contato, blog. Simplicidade e performance.
                <br />
                <strong>Problema:</strong> Complexidade desnecessária, 
                custo alto, manutenção difícil.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Portfolio complexo
// WordPress + plugins
// Lento, inseguro, difícil de manter

// ✅ BOM - JAMstack Portfolio
// Astro + Markdown + Netlify

// src/pages/projects/[slug].astro
---
export async function getStaticPaths() {
  const projects = await Astro.glob('../content/projects/*.md');
  
  return projects.map(project => ({
    params: { slug: project.frontmatter.slug },
    props: { project }
  }));
}

const { project } = Astro.props;
---

<html>
  <head>
    <title>{project.frontmatter.title}</title>
  </head>
  <body>
    <h1>{project.frontmatter.title}</h1>
    <div set:html={project.body} />
    
    <script>
      // Interatividade no cliente
      document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        // Envia para API
      });
    </script>
  </body>
</html>

// Markdown para conteúdo
// HTML estático para performance
// JavaScript para interatividade
// Deploy simples na Netlify
// Custo zero`}
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
          {/* Over-engineering */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚫 Over-engineering</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você usa JAMstack pra tudo, 
                até pra aplicações que precisam de servidor. Vira uma bagunça.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use JAMstack quando faz sentido. 
                Sites de conteúdo, marketing, portfolios. Não pra tudo.
              </Text>
              
              <Code block>
{`// ❌ RUIM - JAMstack pra tudo
// Dashboard admin em JAMstack
// Aplicação de chat em JAMstack
// Sistema de pagamentos em JAMstack

// Complexidade desnecessária

// ✅ BOM - JAMstack quando faz sentido
// Blog - JAMstack ✅
// Portfolio - JAMstack ✅
// Site de marketing - JAMstack ✅
// Dashboard admin - SPA/SSR ❌
// Chat app - WebSocket/SSR ❌

// Use a ferramenta certa pro problema certo`}
              </Code>
            </Stack>
          </Paper>

          {/* Build Time */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⏱️ Build Time Excessivo</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Build demora horas, 
                deploy lento, desenvolvimento travado.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Otimize build, use incremental builds, 
                considere ISR (Incremental Static Regeneration).
              </Text>
              
              <Code block>
{`// ❌ RUIM - Build lento
// Gatsby build - 30 minutos
// Next.js build - 45 minutos
// Deploy demora muito

// ✅ BOM - Build otimizado
// next.config.js
module.exports = {
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

// pages/[slug].js
export async function getStaticProps({ params }) {
  return {
    props: { data },
    revalidate: 60, // Revalida a cada minuto
  };
}

// Build incremental
// Deploy rápido
// Desenvolvimento fluido`}
              </Code>
            </Stack>
          </Paper>

          {/* Dynamic Content */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Conteúdo Dinâmico</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Conteúdo que muda frequentemente. 
                Build a cada mudança, deploy constante.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ISR, client-side fetching, 
                ou considere SSR para conteúdo muito dinâmico.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Build a cada mudança
// Conteúdo muda -> Build -> Deploy
// Deploy constante, lento

// ✅ BOM - Estratégias híbridas
// pages/products/[id].js
export async function getStaticProps({ params }) {
  const product = await fetchProduct(params.id);
  
  return {
    props: { product },
    revalidate: 3600, // Revalida a cada hora
  };
}

// pages/dashboard.js
export default function Dashboard() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Client-side fetching para dados dinâmicos
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{/* Dashboard dinâmico */}</div>;
}

// ISR para conteúdo semi-dinâmico
// Client-side para dados em tempo real`}
              </Code>
            </Stack>
          </Paper>

          {/* SEO Issues */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔍 Problemas de SEO</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> JavaScript renderiza conteúdo. 
                Crawlers não veem nada, SEO ruim.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Pre-renderiza conteúdo importante, 
                use SSR para páginas críticas de SEO.
              </Text>
              
              <Code block>
{`// ❌ RUIM - SPA puro
// Tudo renderizado no cliente
// Crawlers não veem conteúdo

// ✅ BOM - Pre-renderização
// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);
  
  return {
    props: {
      post,
      meta: {
        title: post.title,
        description: post.excerpt,
        image: post.coverImage,
      },
    },
  };
}

// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/blog/:slug',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

// HTML pré-renderizado
// Meta tags dinâmicas
// SEO perfeito`}
              </Code>
            </Stack>
          </Paper>

          {/* API Complexity */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔗 Complexidade de APIs</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitas APIs, complexidade de integração, 
                difícil de manter e debugar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Simplifique APIs, use GraphQL, 
                considere BFF (Backend for Frontend).
              </Text>
              
              <Code block>
{`// ❌ RUIM - Muitas APIs
// /api/products
// /api/categories  
// /api/users
// /api/orders
// /api/payments
// /api/shipping

// Complexidade de integração

// ✅ BOM - APIs simplificadas
// GraphQL
const typeDefs = \`
  type Product {
    id: ID!
    name: String!
    category: Category!
    variants: [Variant!]!
  }
  
  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
\`;

// Uma API, múltiplos dados
// Queries específicas
// Menos requests
// Mais eficiente`}
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
                  <strong>"JAMstack: The Definitive Guide"</strong> - Mathias Biilmann
                </List.Item>
                <List.Item>
                  <strong>"Modern Web Development"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Static Site Generators"</strong> - Various Authors
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://jamstack.org/" target="_blank">
                    JAMstack - Site oficial
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.gatsbyjs.com/" target="_blank">
                    Gatsby - Static site generator
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://nextjs.org/" target="_blank">
                    Next.js - React framework
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
                <Title order={4} mb="sm">Netlify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Deploy complexo, performance ruim, 
                  custo alto de hosting.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> JAMstack com Gatsby. 
                  Deploy automático, performance máxima.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy em segundos, 
                  performance excepcional, custo mínimo.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Smashing Magazine</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> WordPress lento, 
                  SEO ruim, manutenção difícil.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Migração para JAMstack. 
                  Gatsby + Headless CMS.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Performance 10x melhor, 
                  SEO perfeito, manutenção simples.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">React</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Site lento, 
                  documentação difícil de navegar.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> JAMstack com Docusaurus. 
                  Documentação estática, performance máxima.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Site rápido, 
                  documentação excelente, SEO perfeito.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Vercel</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Deploy complexo, 
                  performance inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> JAMstack com Next.js. 
                  Deploy automático, edge functions.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy instantâneo, 
                  performance global, custo mínimo.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam JAMstack:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Gatsby</strong> - Static site generator para React
                </List.Item>
                <List.Item>
                  <strong>Next.js</strong> - React framework com SSR/SSG
                </List.Item>
                <List.Item>
                  <strong>Nuxt.js</strong> - Vue framework com SSR/SSG
                </List.Item>
                <List.Item>
                  <strong>Astro</strong> - Framework para conteúdo
                </List.Item>
                <List.Item>
                  <strong>Netlify</strong> - Deploy e hosting
                </List.Item>
                <List.Item>
                  <strong>Vercel</strong> - Deploy e hosting
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
              <Text c="dimmed">JAMstack na prática</Text>
            </div>
          </Group>
          
          <Text>
            JAMstack é sobre uma coisa só: <strong>separar front-end de back-end</strong>. 
            Sites estáticos, performance máxima, segurança de sobra. 
            Use quando performance e simplicidade importam.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre usar JAMstack pra tudo. 
            É sobre usar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com sites simples, evolua conforme necessário. 
            Foque em performance e simplicidade.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

JAMstack.metadata = {
  title: 'JAMstack',
  description: 'JavaScript, APIs, Markup. Sites estáticos com performance máxima e segurança de sobra.'
};

export default JAMstack;
