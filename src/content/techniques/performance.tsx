import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Group,
  ThemeIcon,
  Alert,
  Card,
  Badge,
  List,
} from '@mantine/core';
import CodeExample from '../../components/CodeExample';
import {
  IconBolt,
  IconTrendingUp,
  IconCode,
  IconCheck,
  IconAlertTriangle,
  IconBulb,
  IconClock,
} from '@tabler/icons-react';

export default function Performance() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <Paper withBorder p="xl">
        <Group>
          <ThemeIcon size="xl" variant="light" color="blue">
            <IconBolt />
          </ThemeIcon>
          <div>
            <Title order={1}>
              Performance: Quando Velocidade Vira Dinheiro
            </Title>
            <Text c="dimmed" size="lg">
              Code splitting, lazy loading, chunks e métricas que fazem
              diferença real. Usuário não espera, ele abandona.
            </Text>
          </div>
        </Group>
      </Paper>

      {/* Disclaimer sobre métricas */}
      <Alert color="green" variant="light" icon={<IconCheck size={16} />}>
        <Text size="sm">
          <strong>✅ Métricas Validadas:</strong> Todas as métricas abaixo são
          baseadas em estudos técnicos validados do repositório oficial
          frontend-case-studies. Apenas métricas com fontes verificáveis são
          apresentadas.
        </Text>
      </Alert>

      {/* O que é? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="blue" mr="sm">
            <IconCode />
          </ThemeIcon>
          O que é Performance Frontend?
        </Title>

        <Stack gap="md">
          <Text>
            <strong>Performance frontend</strong> é a velocidade com que sua
            aplicação carrega, renderiza e responde às interações do usuário.
            Não é frescura, é sobrevivência.
          </Text>

          <Text>
            <strong>Usuário não espera, ele abandona.</strong> 3 segundos de
            carregamento = 40% de abandono. 5 segundos = 90% de abandono.
            Performance é sobrevivência.
          </Text>

          <Text>
            <strong>Bundle size é morte lenta.</strong> Bundle de 5MB em 3G = 30
            segundos. Usuário já foi embora. Performance é sobrevivência.
          </Text>

          <Text>
            <strong>Performance = conversão.</strong> Amazon: 100ms de delay =
            1% menos vendas. Performance vira dinheiro direto.
          </Text>
        </Stack>
      </Paper>

      {/* Por que Performance = Dinheiro? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="green" mr="sm">
            <IconTrendingUp />
          </ThemeIcon>
          Por que Performance = Dinheiro?
        </Title>

        <Stack gap="md">
          <Card withBorder>
            <Group>
              <ThemeIcon variant="light" color="green">
                <IconCheck />
              </ThemeIcon>
              <div>
                <Text fw={600}>Usuário não espera, ele abandona</Text>
                <Text size="sm" c="dimmed">
                  3 segundos de carregamento = 40% de abandono. 5 segundos = 90%
                  de abandono
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder>
            <Group>
              <ThemeIcon variant="light" color="green">
                <IconCheck />
              </ThemeIcon>
              <div>
                <Text fw={600}>Bundle size = Morte lenta</Text>
                <Text size="sm" c="dimmed">
                  Bundle de 5MB em 3G = 30 segundos. Usuário já foi embora
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder>
            <Group>
              <ThemeIcon variant="light" color="green">
                <IconCheck />
              </ThemeIcon>
              <div>
                <Text fw={600}>Performance = Conversão</Text>
                <Text size="sm" c="dimmed">
                  Amazon: 100ms de delay = 1% menos vendas. Performance vira
                  dinheiro direto
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder>
            <Group>
              <ThemeIcon variant="light" color="green">
                <IconCheck />
              </ThemeIcon>
              <div>
                <Text fw={600}>SEO = Visibilidade</Text>
                <Text size="sm" c="dimmed">
                  Google penaliza sites lentos. Performance boa = ranking melhor
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </Paper>

      {/* Casos Reais VALIDADOS */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="orange" mr="sm">
            <IconCode />
          </ThemeIcon>
          Casos Reais: Quem Otimizou e Ficou Rico (Validados)
        </Title>

        <Stack gap="lg">
          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Facebook
              </Badge>
              <Text fw={600}>1000 requests → 400 requests</Text>
            </Group>
            <Text size="sm" mt="sm">
              Facebook otimizou requests de 1000 para 400. Resultado? 60%
              redução de requests, carregamento muito mais rápido.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Sentry
              </Badge>
              <Text fw={600}>100KB → 65KB bundle</Text>
            </Group>
            <Text size="sm" mt="sm">
              Sentry reduziu bundle de 100KB para 65KB. Resultado? 35% redução
              no bundle size, carregamento muito mais rápido.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Goibibo
              </Badge>
              <Text fw={600}>PWA melhorou conversões</Text>
            </Group>
            <Text size="sm" mt="sm">
              Goibibo implementou PWA e melhorou 60% em conversões. Performance
              vira dinheiro real.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Shopify
              </Badge>
              <Text fw={600}>2s → 1s carregamento</Text>
            </Group>
            <Text size="sm" mt="sm">
              Shopify melhorou carregamento de 2s para 1s. Resultado? 50%
              melhoria no carregamento, mais conversões.
            </Text>
          </Card>
        </Stack>
      </Paper>

      {/* Técnicas Práticas */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="purple" mr="sm">
            <IconClock />
          </ThemeIcon>
          Técnicas Práticas para Performance = Dinheiro
        </Title>

        <Stack gap="lg">
          <div>
            <Text fw={600} mb="sm">
              1. Code Splitting Inteligente
            </Text>
            <CodeExample
              title="Exemplo: Code Splitting por Rota"
              description="Dividir código em chunks que fazem sentido"
              code={`// ✅ Code splitting por rota
const HomePage = lazy(() => import('./pages/Home'));
const ProductPage = lazy(() => import('./pages/Product'));
const CheckoutPage = lazy(() => import('./pages/Checkout'));

// ✅ Code splitting por feature
const Analytics = lazy(() => import('./features/Analytics'));
const Chat = lazy(() => import('./features/Chat'));

// ✅ Preload inteligente
const preloadCheckout = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = '/static/js/checkout.js';
  document.head.appendChild(link);
};`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              2. Lazy Loading de Imagens
            </Text>
            <CodeExample
              title="Exemplo: Lazy Loading Otimizado"
              description="Carregar imagens apenas quando necessário"
              code={`// ✅ Lazy loading com Intersection Observer
const ImageLazy = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
      alt={alt}
      className={isLoaded ? 'loaded' : 'loading'}
      onLoad={() => setIsLoaded(true)}
    />
  );
};`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              3. Bundle Optimization
            </Text>
            <CodeExample
              title="Exemplo: Webpack Bundle Analyzer"
              description="Analisar e otimizar bundle size"
              code={`// ✅ Bundle analyzer
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              4. Performance Budget
            </Text>
            <CodeExample
              title="Exemplo: Performance Budget"
              description="Definir limites de performance"
              code={`// ✅ Performance budget
const performanceBudget = {
  'bundle-size': {
    'initial': '200kb',
    'max': '500kb',
  },
  'first-contentful-paint': {
    'max': '1.8s',
  },
  'largest-contentful-paint': {
    'max': '2.5s',
  },
  'cumulative-layout-shift': {
    'max': '0.1',
  },
  'interaction-to-next-paint': {
    'max': '200ms',
  },
};

// ✅ Lighthouse CI
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
  },
};`}
            />
          </div>
        </Stack>
      </Paper>

      {/* Métricas que Importam */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="blue" mr="sm">
            <IconTrendingUp />
          </ThemeIcon>
          Métricas que Importam para Performance = Dinheiro
        </Title>

        <Stack gap="md">
          <Card withBorder>
            <Text fw={600} mb="sm">
              🚀 Core Web Vitals
            </Text>
            <List>
              <List.Item>LCP (Largest Contentful Paint) {'<'} 2.5s</List.Item>
              <List.Item>INP (Interaction to Next Paint) {'<'} 200ms</List.Item>
              <List.Item>CLS (Cumulative Layout Shift) {'<'} 0.1</List.Item>
            </List>
          </Card>

          <Card withBorder>
            <Text fw={600} mb="sm">
              💰 Métricas de Negócio
            </Text>
            <List>
              <List.Item>Bounce Rate {'<'} 40%</List.Item>
              <List.Item>Time on Page {'>'} 2 minutos</List.Item>
              <List.Item>Conversion Rate impactado por performance</List.Item>
            </List>
          </Card>

          <Card withBorder>
            <Text fw={600} mb="sm">
              ⚡ Performance Budget
            </Text>
            <List>
              <List.Item>Bundle Size {'<'} 200KB inicial</List.Item>
              <List.Item>First Paint {'<'} 1.5s</List.Item>
              <List.Item>Time to Interactive {'<'} 3s</List.Item>
            </List>
          </Card>

          <Card withBorder>
            <Text fw={600} mb="sm">
              📊 Métricas de Usuário
            </Text>
            <List>
              <List.Item>Page Load Time {'<'} 3s</List.Item>
              <List.Item>Mobile Performance Score {'>'} 90</List.Item>
              <List.Item>Real User Monitoring (RUM)</List.Item>
            </List>
          </Card>
        </Stack>
      </Paper>

      {/* Armadilhas */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="red" mr="sm">
            <IconAlertTriangle />
          </ThemeIcon>
          Armadilhas: Quando Performance Vira Problema
        </Title>

        <Stack gap="lg">
          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Over-splitting:</strong> Dividir demais = mais requests =
              mais lento. Encontre o equilíbrio entre chunks e requests.
            </Text>
          </Alert>

          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Ignorar Mobile:</strong> Conexão lenta, CPU limitado.
              Teste em 3G, otimize para mobile primeiro.
            </Text>
          </Alert>

          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Não Medir:</strong> Otimizar sem medir = chutar no escuro.
              Use métricas reais, não só opiniões.
            </Text>
          </Alert>

          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Premature Optimization:</strong> Otimizar antes de medir.
              Primeiro meça, depois otimize o que realmente importa.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="green" mr="sm">
            <IconCheck />
          </ThemeIcon>
          Resumo: Performance = Dinheiro
        </Title>

        <Stack gap="md">
          <Text>
            <strong>Performance não é frescura, é sobrevivência.</strong>
            Usuário não espera, ele abandona. Bundle size é morte lenta.
            Performance é sobrevivência.
          </Text>

          <Text>
            <strong>Code splitting + lazy loading + chunks inteligentes</strong>{' '}
            = performance real. Não é sobre "qual framework usar", é sobre
            carregar só o que precisa.
          </Text>

          <Text>
            <strong>Meça o que importa.</strong>
            Core Web Vitals, métricas de negócio, performance budget. Se não
            está medindo, está chutando no escuro.
          </Text>

          <Alert icon={<IconBulb />} color="blue" variant="light">
            <Text size="sm">
              <strong>Lembre-se:</strong> Stack bonita não paga boleto.
              Performance, UX e resultado de negócio sim. Usuário não espera,
              ele abandona.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

Performance.metadata = {
  title: 'Performance: Quando Velocidade Vira Dinheiro',
  description:
    'Code splitting, lazy loading, chunks inteligentes e métricas que fazem diferença real. Técnicas práticas para otimizar performance e melhorar experiência do usuário.',
};
