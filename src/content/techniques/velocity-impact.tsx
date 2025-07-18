import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
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
  IconTrendingUp,
  IconClock,
  IconCurrencyDollar,
  IconRocket,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';

export default function VelocityImpact() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <Paper withBorder p="xl">
        <Group>
          <ThemeIcon size="xl" variant="light" color="blue">
            <IconRocket />
          </ThemeIcon>
          <div>
            <Title order={1}>
              Quando Velocidade Gera Impacto e Vira Dinheiro
            </Title>
            <Text c="dimmed" size="lg">
              Por que velocidade de desenvolvimento não é só sobre entregar
              rápido, mas sobre capturar valor no mercado
            </Text>
          </div>
        </Group>
      </Paper>

      {/* O que é? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="blue" mr="sm">
            <IconTrendingUp />
          </ThemeIcon>
          O que é Velocity = Money?
        </Title>

        <Text size="lg" mb="md">
          Velocidade de desenvolvimento não é só sobre entregar features rápido.
          É sobre capturar oportunidades de mercado antes que a concorrência
          acorde.
        </Text>

        <Alert icon={<IconBulb />} color="blue" variant="light" mb="md">
          <Text size="sm">
            <strong>Regra de ouro:</strong> Se você não entrega rápido, alguém
            vai entregar por você. E esse alguém vai ficar com o dinheiro.
          </Text>
        </Alert>

        <Text>
          Enquanto você debate sobre qual arquitetura usar, tem startup lançando
          MVP e capturando usuários. Enquanto você refatora código "perfeito",
          tem empresa pivotando e dominando nichos. Enquanto você testa tudo,
          tem time validando hipóteses no mercado real.
        </Text>
      </Paper>

      {/* Por que vale a pena? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="green" mr="sm">
            <IconCurrencyDollar />
          </ThemeIcon>
          Por que Velocity = Money?
        </Title>

        <Stack gap="md">
          <Card withBorder>
            <Group>
              <ThemeIcon variant="light" color="green">
                <IconCheck />
              </ThemeIcon>
              <div>
                <Text fw={600}>Primeiro no mercado = Primeiro no bolso</Text>
                <Text size="sm" c="dimmed">
                  Quem chega primeiro pega os early adopters, feedback valioso e
                  vantagem competitiva
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
                <Text fw={600}>
                  Feedback loop mais rápido = Menos desperdício
                </Text>
                <Text size="sm" c="dimmed">
                  Cada semana que você demora é dinheiro jogado fora em features
                  que ninguém quer
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
                <Text fw={600}>Time to market = Time to profit</Text>
                <Text size="sm" c="dimmed">
                  Usuários pagando hoje valem mais que features perfeitas amanhã
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
                <Text fw={600}>Iteração rápida = Dominância de mercado</Text>
                <Text size="sm" c="dimmed">
                  Quem itera mais rápido aprende mais rápido e domina mais
                  rápido
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
          Casos Reais: Quem Entregou Rápido e Ficou Rico
        </Title>

        <Stack gap="lg">
          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Netflix
              </Badge>
              <Text fw={600}>MVP em 3 meses vs Blockbuster</Text>
            </Group>
            <Text size="sm" mt="sm">
              Netflix lançou streaming enquanto Blockbuster debatia sobre
              arquitetura de lojas físicas. Resultado? Netflix vale $200B+,
              Blockbuster faliu.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Spotify
              </Badge>
              <Text fw={600}>MVP em 6 meses vs Apple Music</Text>
            </Group>
            <Text size="sm" mt="sm">
              Spotify dominou streaming de música enquanto Apple debatia sobre
              DRM. Hoje Spotify tem 500M+ usuários, Apple Music chegou tarde.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Uber
              </Badge>
              <Text fw={600}>MVP em 4 meses vs Taxi tradicional</Text>
            </Group>
            <Text size="sm" mt="sm">
              Uber revolucionou mobilidade urbana enquanto táxis debatiam sobre
              regulamentação. Uber vale $70B+, táxis tradicionais em declínio.
            </Text>
          </Card>

          <Card withBorder>
            <Group>
              <Badge variant="light" color="orange">
                Airbnb
              </Badge>
              <Text fw={600}>MVP em 2 meses vs Hotéis</Text>
            </Group>
            <Text size="sm" mt="sm">
              Airbnb criou novo mercado enquanto hotéis debatiam sobre
              classificação estrelas. Airbnb vale $100B+, hotéis tradicionais em
              crise.
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
          Técnicas Práticas para Velocity = Money
        </Title>

        <Stack gap="lg">
          <div>
            <Text fw={600} mb="sm">
              1. MVP First, Perfection Later
            </Text>
            <CodeExample
              title="Exemplo: E-commerce MVP"
              description="Comece com o essencial, evolua com feedback"
              code={`// ❌ Perfeição primeiro (6 meses)
const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  const [reviews, setReviews] = useState<Review[]>();
  const [recommendations, setRecommendations] = useState<Product[]>();
  const [analytics, setAnalytics] = useState<Analytics>();
  const [seo, setSeo] = useState<SEO>();
  // ... mais 20 estados e 50 features
  
  return (
    <div>
      {/* 500 linhas de JSX perfeito */}
    </div>
  );
};

// ✅ MVP primeiro (2 semanas)
const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  
  return (
    <div>
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <button>Comprar</button>
    </div>
  );
};`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              2. Feature Flags para Deploy Seguro
            </Text>
            <CodeExample
              title="Exemplo: Deploy sem medo"
              description="Libere features gradualmente, roleback instantâneo"
              code={`// ✅ Deploy seguro com feature flags
const useFeatureFlag = (flag: string) => {
  return window.featureFlags?.[flag] ?? false;
};

const CheckoutPage = () => {
  const newCheckoutEnabled = useFeatureFlag('new-checkout');
  
  return (
    <div>
      {newCheckoutEnabled ? (
        <NewCheckoutFlow />
      ) : (
        <LegacyCheckoutFlow />
      )}
    </div>
  );
};

// Rollback instantâneo via dashboard
// Sem deploy, sem risco`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              3. Monorepo para Velocidade de Time
            </Text>
            <CodeExample
              title="Exemplo: Compartilhamento eficiente"
              description="Um repositório, múltiplos produtos, velocidade máxima"
              code={`// ✅ Monorepo structure
packages/
├── ui/           # Componentes compartilhados
├── auth/         # Lógica de autenticação
├── api/          # APIs compartilhadas
├── ecommerce/    # App principal
├── admin/        # Painel admin
└── mobile/       # App mobile

// Compartilhamento instantâneo
import { Button } from '@company/ui';
import { useAuth } from '@company/auth';
import { api } from '@company/api';

// Mudança em um lugar = todos atualizados
// Deploy coordenado = menos bugs`}
            />
          </div>

          <div>
            <Text fw={600} mb="sm">
              4. Code Splitting Inteligente
            </Text>
            <CodeExample
              title="Exemplo: Carregamento otimizado"
              description="Só carrega o que precisa, quando precisa"
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
        </Stack>
      </Paper>

      {/* Métricas que Importam */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <ThemeIcon variant="light" color="blue" mr="sm">
            <IconTrendingUp />
          </ThemeIcon>
          Métricas que Importam para Velocity = Money
        </Title>

        <Stack gap="md">
          <Card withBorder>
            <Text fw={600} mb="sm">
              🚀 Time to Market
            </Text>
            <List>
              <List.Item>Tempo do commit ao deploy</List.Item>
              <List.Item>Tempo do bug report ao fix</List.Item>
              <List.Item>Tempo da feature request ao launch</List.Item>
            </List>
          </Card>

          <Card withBorder>
            <Text fw={600} mb="sm">
              💰 Revenue Impact
            </Text>
            <List>
              <List.Item>Revenue por feature lançada</List.Item>
              <List.Item>Conversão antes/depois</List.Item>
              <List.Item>Churn rate por release</List.Item>
            </List>
          </Card>

          <Card withBorder>
            <Text fw={600} mb="sm">
              📈 User Engagement
            </Text>
            <List>
              <List.Item>DAU/MAU por feature</List.Item>
              <List.Item>Session duration</List.Item>
              <List.Item>Feature adoption rate</List.Item>
            </List>
          </Card>

          <Card withBorder>
            <Text fw={600} mb="sm">
              ⚡ Performance
            </Text>
            <List>
              <List.Item>Core Web Vitals</List.Item>
              <List.Item>Bundle size impact</List.Item>
              <List.Item>Load time por feature</List.Item>
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
          Armadilhas: Quando Velocity Vira Problema
        </Title>

        <Stack gap="lg">
          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Technical Debt Explosion:</strong> Velocidade sem
              qualidade vira bola de neve. Em 6 meses, você não consegue mais
              mexer no código.
            </Text>
          </Alert>

          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Burnout do Time:</strong> Velocidade constante sem pausa
              vira exaustão. Devs queimados não entregam nada.
            </Text>
          </Alert>

          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Features sem Validação:</strong> Entregar rápido features
              que ninguém quer é desperdício puro. Valide antes de codar.
            </Text>
          </Alert>

          <Alert icon={<IconAlertTriangle />} color="red" variant="light">
            <Text size="sm">
              <strong>Deploy Instável:</strong> Velocidade sem testes vira caos
              em produção. Downtime custa mais que velocidade.
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
          Resumo: Velocity = Money
        </Title>

        <Stack gap="md">
          <Text>
            <strong>
              Velocidade não é sobre correr, é sobre direção certa.
            </strong>
            Entregar rápido features que ninguém quer é desperdício. Entregar
            rápido features que resolvem problemas reais é dinheiro.
          </Text>

          <Text>
            <strong>Equilibre velocidade com qualidade.</strong>
            MVP primeiro, perfeição depois. Feature flags para segurança.
            Monorepo para eficiência. Code splitting para performance.
          </Text>

          <Text>
            <strong>Meça o que importa.</strong>
            Time to market, revenue impact, user engagement. Não só velocity,
            mas velocity que gera valor.
          </Text>

          <Alert icon={<IconBulb />} color="blue" variant="light">
            <Text size="sm">
              <strong>Lembre-se:</strong> Enquanto você debate sobre arquitetura
              perfeita, tem startup validando hipóteses no mercado real. Quem
              chega primeiro, fica com o dinheiro.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

VelocityImpact.metadata = {
  title: 'Quando Velocidade Gera Impacto e Vira Dinheiro',
  description:
    'Por que velocidade de desenvolvimento não é só sobre entregar rápido, mas sobre capturar valor no mercado antes da concorrência.',
};
