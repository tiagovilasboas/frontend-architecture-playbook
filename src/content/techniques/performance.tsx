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
} from '@mantine/core';
import CodeExample from '../../components/CodeExample';
import {
  IconBolt,
  IconGauge,
  IconTrendingUp,
  IconCode,
  IconRocket,
  IconCheck,
  IconAlertTriangle,
  IconBulb,
} from '@tabler/icons-react';

export default function Performance() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Performance: Quando Velocidade Vira Dinheiro
        </Title>
        <Text size="lg" c="dimmed">
          Code splitting, lazy loading, chunks e métricas que fazem diferença
          real. Usuário não espera, ele abandona.
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
              <Text c="dimmed">
                Técnicas de otimização que fazem diferença real em performance
              </Text>
            </div>
          </Group>

          <Text>
            Performance não é frescura. É <strong>sobrevivência</strong>.
            Usuário abandona em 3 segundos se o site não carrega. Bundle de 5MB
            = morte lenta.
          </Text>

          <Text>
            Aqui você vai ver técnicas que <strong>funcionam de verdade</strong>
            : code splitting, lazy loading, chunks inteligentes e métricas que
            importam.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>carregue só o que precisa, quando precisa</em>. Stack bonita não
            paga boleto, mas performance sim.
          </Text>
        </Stack>
      </Paper>

      {/* Code Splitting */}
      <div>
        <Title order={2} mb="lg">
          <IconCode
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Code Splitting: Dividir para Conquistar
        </Title>

        <Stack gap="lg">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Por que Code Splitting?</Title>
                <Text size="sm">
                  Bundle de 5MB = morte lenta. Usuário abandona em 3 segundos.
                  Dividir código em pedaços inteligentes é sobrevivência, não
                  otimização.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconGauge size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Estratégias que Funcionam</Title>
                <Text size="sm">
                  <strong>Route-based:</strong> Cada rota = chunk separado.
                  <strong>Component-based:</strong> Componentes pesados sob
                  demanda.
                  <strong>Vendor splitting:</strong> Dependências em chunks
                  estáveis.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Resultados Reais</Title>
                <Text size="sm">
                  Pinterest: 2.5MB → 200KB inicial. Tinder: 4MB → 500KB.
                  WhatsApp Web: 3MB → 300KB. Usuário não espera, ele abandona.
                </Text>
              </div>
            </Group>
          </Card>

          <Alert color="yellow" icon={<IconCode size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              ⚡ Regra de Ouro:
            </Text>
            <Text size="sm">
              <strong>Carregue só o que precisa, quando precisa.</strong>
              Bundle size é morte lenta. Code splitting é sobrevivência.
            </Text>
          </Alert>
        </Stack>
      </div>

      {/* Lazy Loading */}
      <div>
        <Title order={2} mb="lg">
          <IconRocket
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Lazy Loading: Carregamento Inteligente
        </Title>

        <Stack gap="lg">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>React.lazy() não é suficiente</Title>
                <Text size="sm">
                  Lazy loading é arquitetura, não só React.lazy(). Carregar só o
                  que o usuário vai usar. Bundle size é morte lenta.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconGauge size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Estratégias Práticas</Title>
                <Text size="sm">
                  <strong>Route-based:</strong> Cada rota = componente lazy.
                  <strong>Component-based:</strong> Componentes pesados sob
                  demanda.
                  <strong>Image lazy:</strong> Intersection Observer para
                  imagens.
                </Text>
              </div>
            </Group>
          </Card>

          <CodeExample
            title="Lazy Loading Prático"
            description="Exemplos de lazy loading para rotas, componentes e imagens"
            code={`// Route-based lazy loading
const UserProfile = React.lazy(() => import('./pages/UserProfile'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'))

// Component-based lazy loading  
const HeavyChart = React.lazy(() => import('./components/HeavyChart'))
const VideoPlayer = React.lazy(() => import('./components/VideoPlayer'))

// Image lazy loading
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef()
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true)
          observer.disconnect()
        }
      }
    )
    
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])
  
  return (
    <img 
      ref={imgRef}
      src={isLoaded ? src : 'placeholder.jpg'} 
      alt={alt}
    />
  )
}`}
          />
        </Stack>
      </div>

      {/* Chunks Inteligentes */}
      <div>
        <Title order={2} mb="lg">
          <IconGauge
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Chunks Inteligentes: Dividir com Cabeça
        </Title>

        <Stack gap="lg">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Vendor Splitting</Title>
                <Text size="sm">
                  Separar dependências em chunks estáveis. React, Mantine,
                  bibliotecas grandes ficam em chunks separados para cache
                  otimizado.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconGauge size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Route-based Chunks</Title>
                <Text size="sm">
                  Cada rota = chunk separado. Dashboard, perfil, produtos.
                  Usuário carrega só o que vai usar.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Cache Strategy</Title>
                <Text size="sm">
                  Vendor chunks com hash estável. App chunks com hash dinâmico.
                  Cache otimizado, updates rápidos.
                </Text>
              </div>
            </Group>
          </Card>

          <CodeExample
            title="Chunks Inteligentes no Vite"
            description="Configuração de chunks para vendor, features e componentes"
            code={`// vite.config.ts - Chunks inteligentes
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
})`}
          />
        </Stack>
      </div>

      {/* Métricas Reais */}
      <div>
        <Title order={2} mb="lg">
          <IconTrendingUp
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Métricas que Importam
        </Title>

        <Stack gap="lg">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconGauge size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Core Web Vitals</Title>
                <Text size="sm">
                  <strong>LCP:</strong> Largest Contentful Paint {'<'} 2.5s.
                  <strong>FID:</strong> First Input Delay {'<'} 100ms.
                  <strong>CLS:</strong> Cumulative Layout Shift {'<'} 0.1.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Métricas de Negócio</Title>
                <Text size="sm">
                  <strong>Bounce Rate:</strong> Usuários que saem sem interagir.
                  <strong>Time on Page:</strong> Tempo de permanência.
                  <strong>Conversion Rate:</strong> Taxa de conversão.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Performance Budget</Title>
                <Text size="sm">
                  <strong>Bundle Size:</strong> {'<'} 200KB inicial.
                  <strong>First Paint:</strong> {'<'} 1.5s.
                  <strong>Time to Interactive:</strong> {'<'} 3s.
                </Text>
              </div>
            </Group>
          </Card>

          <Alert color="blue" icon={<IconBulb size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              📊 Dica de Métricas:
            </Text>
            <Text size="sm">
              <strong>Se não está medindo, está chutando.</strong>
              Use Lighthouse, WebPageTest, Real User Monitoring. Dados não
              mentem.
            </Text>
          </Alert>
        </Stack>
      </div>

      {/* Armadilhas */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="red">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Over-splitting</Title>
                <Text size="sm">
                  Dividir demais = mais requests = mais lento. Encontre o
                  equilíbrio entre chunks e requests.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="red">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Ignorar Mobile</Title>
                <Text size="sm">
                  Conexão lenta, CPU limitado. Teste em 3G, otimize para mobile
                  primeiro.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="red">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Não Medir</Title>
                <Text size="sm">
                  Otimizar sem medir = chutar no escuro. Use métricas reais, não
                  só opiniões.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* Conclusão */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="teal">
              <IconRocket size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Conclusão</Title>
              <Text c="dimmed">Performance que vira dinheiro</Text>
            </div>
          </Group>

          <Text>
            <strong>Code splitting + lazy loading + chunks inteligentes</strong>{' '}
            = performance real. Usuário não espera, ele abandona.
          </Text>

          <Text>
            Não é sobre "qual framework usar", é sobre{' '}
            <strong>carregar só o que precisa</strong>. Bundle size é morte
            lenta. Performance é sobrevivência.
          </Text>

          <Alert color="yellow" icon={<IconRocket size={16} />} radius="md">
            <Text fw={600} size="lg" style={{ fontStyle: 'italic' }}>
              Stack bonita não paga boleto. Performance, UX e resultado de
              negócio sim.
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
