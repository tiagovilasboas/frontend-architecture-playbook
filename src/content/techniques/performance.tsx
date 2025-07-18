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
  IconGauge,
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

      {/* O que é? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="blue" mr="sm">
            <IconGauge />
          </ThemeIcon>
          O que é Performance Real?
        </Title>

        <Text size="lg" mb="md">
          Performance não é frescura. É <strong>sobrevivência</strong>. Usuário
          abandona em 3 segundos se o site não carrega. Bundle de 5MB = morte
          lenta.
        </Text>

        <Alert icon={<IconBulb />} color="blue" variant="light" mb="md">
          <Text size="sm">
            <strong>Regra de ouro:</strong> Carregue só o que precisa, quando
            precisa. Stack bonita não paga boleto, mas performance sim.
          </Text>
        </Alert>

        <Text>
          Aqui você vai ver técnicas que <strong>funcionam de verdade</strong>:
          code splitting, lazy loading, chunks inteligentes e métricas que
          importam. Não é sobre "qual framework usar", é sobre{' '}
          <strong>carregar só o que precisa</strong>.
        </Text>
      </Paper>

      {/* Por que vale a pena? */}
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

      {/* Casos Reais */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="orange" mr="sm">
            <IconCode />
          </ThemeIcon>
          Casos Reais: Quem Otimizou e Ficou Rico
        </Title>

        <Stack gap="lg">
          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Pinterest
              </Badge>
              <Text fw={600}>2.5MB → 200KB inicial</Text>
            </Group>
            <Text size="sm" mt="sm">
              Pinterest otimizou bundle de 2.5MB para 200KB inicial. Resultado?
              40% mais engajamento, 60% mais conversões.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Tinder
              </Badge>
              <Text fw={600}>4MB → 500KB inicial</Text>
            </Group>
            <Text size="sm" mt="sm">
              Tinder reduziu bundle de 4MB para 500KB. Resultado? 50% mais
              matches, 30% mais tempo no app.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                WhatsApp Web
              </Badge>
              <Text fw={600}>3MB → 300KB inicial</Text>
            </Group>
            <Text size="sm" mt="sm">
              WhatsApp Web otimizou de 3MB para 300KB. Resultado? 70% mais
              usuários ativos, 80% menos abandono.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Amazon
              </Badge>
              <Text fw={600}>100ms de delay = 1% menos vendas</Text>
            </Group>
            <Text size="sm" mt="sm">
              Amazon descobriu que 100ms de delay = 1% menos vendas. Performance
              vira dinheiro direto no bolso.
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
  link.rel = 'prefetch';
  link.href = '/checkout.js';
  document.head.appendChild(link);
};

// Usuário vê produto → preload checkout
// Usuário vai para checkout → já carregado`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              2. Lazy Loading Estratégico
            </Text>
            <CodeExample
              title="Exemplo: Lazy Loading de Imagens"
              description="Carregar imagens só quando necessário"
              code={`// ✅ Lazy loading de imagens
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <img 
      ref={imgRef}
      src={isLoaded ? src : 'placeholder.jpg'} 
      alt={alt}
      loading="lazy"
    />
  );
};

// ✅ Lazy loading de componentes
const HeavyChart = lazy(() => import('./components/HeavyChart'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));

// Só carrega quando usuário realmente precisa`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              3. Chunks Inteligentes no Vite
            </Text>
            <CodeExample
              title="Exemplo: Configuração de Chunks"
              description="Dividir código em pedaços otimizados"
              code={`// ✅ vite.config.ts - Chunks inteligentes
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - estáveis para cache
          'vendor-react': ['react', 'react-dom'],
          'vendor-mantine': ['@mantine/core', '@mantine/hooks'],
          'vendor-icons': ['@tabler/icons-react'],
          
          // Feature chunks - por funcionalidade
          'feature-dashboard': ['./src/pages/Dashboard.tsx'],
          'feature-profile': ['./src/pages/Profile.tsx'],
          'feature-products': ['./src/pages/Products.tsx'],
          
          // Component chunks - componentes pesados
          'components-charts': ['./src/components/Chart.tsx'],
          'components-video': ['./src/components/VideoPlayer.tsx']
        }
      }
    }
  }
});

// Resultado: Bundle inicial de 5MB → 200KB
// Cache otimizado, updates rápidos`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              4. Métricas que Importam
            </Text>
            <CodeExample
              title="Exemplo: Performance Monitoring"
              description="Medir o que realmente importa"
              code={`// ✅ Performance monitoring real
const usePerformanceMetrics = () => {
  useEffect(() => {
    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'LCP') {
          console.log('LCP:', entry.startTime);
          // LCP < 2.5s = bom
        }
        if (entry.name === 'FID') {
          console.log('FID:', entry.processingStart - entry.startTime);
          // FID < 100ms = bom
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    
    return () => observer.disconnect();
  }, []);
};

// ✅ Bundle size monitoring
const checkBundleSize = () => {
  const scripts = document.querySelectorAll('script[src]');
  let totalSize = 0;
  
  scripts.forEach(script => {
    const size = script.getAttribute('data-size') || '0';
    totalSize += parseInt(size);
  });
  
  console.log('Total bundle size:', totalSize, 'KB');
  // < 200KB = bom, > 500KB = problema
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
              <List.Item>FID (First Input Delay) {'<'} 100ms</List.Item>
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
