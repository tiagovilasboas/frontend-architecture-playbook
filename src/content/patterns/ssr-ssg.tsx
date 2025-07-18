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

export default function SSRSSGArchitecture() {
  return (
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
              ✅ Use quando:
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>Conteúdo muda frequentemente</List.Item>
              <List.Item>Dados personalizados por user</List.Item>
              <List.Item>Real-time ou quase real-time</List.Item>
              <List.Item>Dashboard, feeds, carrinho</List.Item>
            </List>

            <Text fw={600} size="sm" mb="xs">
              ❌ Evite quando:
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
              ✅ Use quando:
            </Text>
            <List size="sm" spacing={4} mb="md">
              <List.Item>Conteúdo muda pouco</List.Item>
              <List.Item>Performance é crítica</List.Item>
              <List.Item>Escala alta com CDN</List.Item>
              <List.Item>Blog, docs, marketing</List.Item>
            </List>

            <Text fw={600} size="sm" mb="xs">
              ❌ Evite quando:
            </Text>
            <List size="sm" spacing={4}>
              <List.Item>Conteúdo personalizado</List.Item>
              <List.Item>Dados em tempo real</List.Item>
              <List.Item>Build time fica longo demais</List.Item>
            </List>
          </Card>
        </Group>
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
              🏃‍♂️ Performance inicial brutal
            </Text>
            <Text size="sm">
              First Contentful Paint em 300ms vs 3s. User vê conteúdo AGORA.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔍 SEO que funciona de verdade
            </Text>
            <Text size="sm">
              Google indexa tudo na primeira passada. Não fica esperando
              JavaScript executar.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              📱 Mobile que não trava
            </Text>
            <Text size="sm">
              HTML é sempre mais leve que JS bundle. Funciona até em celular de
              2015.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              💰 Core Web Vitals = mais conversão
            </Text>
            <Text size="sm">
              Google favorece sites rápidos. Site rápido = mais traffic = mais
              vendas.
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
            💻 Exemplo Prático: E-commerce
          </Title>
        </Group>

        <Text mb="md">
          Cenário: página de produto que precisa ser{' '}
          <Text span fw={700}>
            rápida
          </Text>{' '}
          e{' '}
          <Text span fw={700}>
            indexável
          </Text>
          .
        </Text>

        <Code block mb="md">
          {`// pages/produtos/[slug].tsx (Next.js)
import { GetServerSideProps } from 'next'

interface Produto {
  id: string
  nome: string
  preco: number
  imagens: string[]
  estoque: number
}

interface Props {
  produto: Produto
}

export default function PaginaProduto({ produto }: Props) {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <img src={produto.imagens[0]} alt={produto.nome} />
      <p>R$ {produto.preco}</p>
      
      {/* JavaScript vai fazer hydration depois */}
      <button 
  onClick={() => adicionarCarrinho(produto.id)}
  aria-label="Adicionar produto ao carrinho"
>
        Comprar ({produto.estoque} disponíveis)
      </button>
    </div>
  )
}

// 🔥 Executa NO SERVIDOR a cada request
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Busca dados fresh do banco
  const produto = await buscarProduto(params?.slug as string)
  
  if (!produto) {
    return { notFound: true }
  }
  
  return {
    props: { produto }
  }
}

function adicionarCarrinho(produtoId: string) {
  // Código que roda só no cliente após hydration
  fetch('/api/carrinho', {
    method: 'POST',
    body: JSON.stringify({ produtoId })
  })
}`}
        </Code>

        <Alert color="blue" icon={<IconBulb size={16} />}>
          <Text fw={600}>💡 O que acontece:</Text>
          <List size="sm" mt="xs">
            <List.Item>User acessa /produtos/iphone-15</List.Item>
            <List.Item>Servidor busca dados do produto</List.Item>
            <List.Item>Servidor renderiza HTML completo</List.Item>
            <List.Item>Browser recebe HTML pronto</List.Item>
            <List.Item>User vê produto IMEDIATAMENTE</List.Item>
            <List.Item>JavaScript hidrata pra interatividade</List.Item>
          </List>
        </Alert>
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
              🔥 Hydration Mismatch
            </Text>
            <Text size="sm" mb="xs">
              Servidor renderiza uma coisa, cliente renderiza outra. React fica
              louco.
            </Text>
            <Code size="sm">
              {`// ❌ Problemático - Date() muda entre server e client
<p>Agora são {new Date().toLocaleString()}</p>

// ✅ Solução - useEffect para conteúdo dinâmico
const [agora, setAgora] = useState<Date>()
useEffect(() => setAgora(new Date()), [])`}
            </Code>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              💸 Server Costs
            </Text>
            <Text size="sm">
              SSR custa mais que SSG. Cada request = CPU + RAM. Escala vertical
              é cara.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🐌 TTFB vs FCP Trade-off
            </Text>
            <Text size="sm">
              Time to First Byte fica maior (servidor renderizando). Mas First
              Contentful Paint fica menor.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text fw={600} mb="xs">
              🔄 Complexidade de Estado
            </Text>
            <Text size="sm">
              Estado inicial do servidor precisa bater com o cliente. Dados de
              sessão, auth, etc.
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
              🛒 Shopify Plus
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{' '}
              Lojas grandes com catálogos imensos tinham SEO ruim
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              SSG para produtos + SSR para carrinho/checkout
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{' '}
              +40% organic traffic, -50% bounce rate
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              📰 The Guardian
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{' '}
              Notícias competindo no Google, mobile lento
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              SSR para artigos + cache agressivo
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{' '}
              Core Web Vitals no verde, +30% page views
            </Text>
          </Card>

          <Card withBorder p="md">
            <Text fw={600} c="blue" mb="sm">
              🏢 Vercel (próprio site)
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Problema:
              </Text>{' '}
              Landing pages competindo por "deploy frontend"
            </Text>
            <Text size="sm" mb="xs">
              <Text span fw={600}>
                Solução:
              </Text>{' '}
              SSG + Edge Functions para personalização
            </Text>
            <Text size="sm" c="green">
              <Text span fw={600}>
                Resultado:
              </Text>{' '}
              Lighthouse 100, +200% conversion de landing
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Ferramentas */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🛠️ Ferramentas que Funcionam
        </Title>

        <Group grow align="flex-start" gap="lg">
          <Card withBorder p="md">
            <Badge variant="light" color="blue" mb="sm">
              SSR
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Next.js:
                </Text>{' '}
                getServerSideProps
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Nuxt.js:
                </Text>{' '}
                server-side rendering
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  SvelteKit:
                </Text>{' '}
                server routes
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Remix:
                </Text>{' '}
                loader functions
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Badge variant="light" color="green" mb="sm">
              SSG
            </Badge>
            <List size="sm" spacing={4}>
              <List.Item>
                <Text span fw={600}>
                  Next.js:
                </Text>{' '}
                getStaticProps
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Gatsby:
                </Text>{' '}
                GraphQL + build
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  11ty:
                </Text>{' '}
                templating + data
              </List.Item>
              <List.Item>
                <Text span fw={600}>
                  Astro:
                </Text>{' '}
                islands architecture
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

        <Alert color="blue" icon={<IconBulb size={16} />} radius="md">
          <Text fw={600} size="lg" mb="md" style={{ fontStyle: 'italic' }}>
            "Se você compete no Google ou liga pra Core Web Vitals, SSR/SSG não
            é opcional - é obrigatório."
          </Text>

          <List spacing="sm">
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                <Text span fw={600}>
                  SSR:
                </Text>{' '}
                conteúdo dinâmico, dados personalizados
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                <Text span fw={600}>
                  SSG:
                </Text>{' '}
                conteúdo estático, performance máxima
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>
                Performance inicial brutal vs complexidade de hydration
              </Text>
            </List.Item>
            <List.Item
              icon={
                <IconCheck size={14} color="var(--mantine-color-green-6)" />
              }
            >
              <Text>SEO e Core Web Vitals resolvidos de vez</Text>
            </List.Item>
          </List>
        </Alert>
      </Paper>
    </Stack>
  );
}

SSRSSGArchitecture.metadata = {
  title: 'SSR & SSG',
  description:
    'Server-Side Rendering e Static Site Generation - como entregar conteúdo instantâneo e SEO que funciona de verdade.',
};
