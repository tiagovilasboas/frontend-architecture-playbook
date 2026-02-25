import {
  Title,
  Text,
  Stack,
  Paper,
  Card,
  Group,
  ThemeIcon,
  Alert,
  List,
  Code,
} from '@mantine/core';
import {
  IconCheck,
  IconAlertTriangle,
  IconBulb,
  IconRocket,
  IconDatabase,
  IconCode,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function HeadlessArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="orange">
            <IconDatabase size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              🔌 Headless/API-First Architecture
            </Title>
            <Text size="xl" c="dimmed" mt="xs">
              Separação igreja-estado entre content e apresentação
            </Text>
          </div>
        </Group>
      </div>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="md">
        <Text size="lg" mb="md">
          <Text span fw={700} c="orange">
            Backend que só serve dados
          </Text>{' '}
          +
          <Text span fw={700} c="blue">
            {' '}
            frontend que só renderiza
          </Text>
          . Zero acoplamento. CMS não dita como seu site vai parecer.
        </Text>

        <Code block>
          {`// ❌ CMS tradicional - WordPress, Drupal
Theme.php controla TUDO:
- Como dados são buscados
- Como HTML é gerado  
- Como CSS é aplicado
- Mudança = mexer no backend

// ✅ Headless - Strapi, Contentful, Sanity
Backend: { "title": "iPhone 15", "price": 4999 }
Frontend: fetch('/api/products') → React/Vue/Angular/qualquer coisa`}
        </Code>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Quando usar? */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} size="h2" mb="md">
          🎯 Quando usar?
        </Title>
        <Stack gap="md">
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              📱 Multi-channel
            </Text>
            <Text>
              Website + app mobile + smartwatch + Alexa. Mesmo conteúdo,
              interfaces diferentes.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              ⚡ Performance crítica
            </Text>
            <Text>
              Frontend otimizado sem bloat do CMS. CDN, SSG, cache agressivo.
            </Text>
          </Card>
          <Card withBorder p="md">
            <Text fw={600} c="orange" mb="sm">
              👥 Teams separados
            </Text>
            <Text>
              Devs fazem frontend. Content team mexe no CMS. Zero conflito.
            </Text>
          </Card>
        </Stack>
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
              🚀 Performance brutal
            </Text>
            <Text size="sm">
              Frontend estático + CDN. Time to First Byte muito baixo.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              🔧 Tech stack livre
            </Text>
            <Text size="sm">
              Backend PHP, frontend React. Ou Django + Vue. Ou .NET + Angular.
              Tanto faz.
            </Text>
          </Alert>
          <Alert color="green" icon={<IconCheck size={16} />}>
            <Text fw={600} mb="xs">
              📈 Escala independente
            </Text>
            <Text size="sm">
              CMS escala para muitos editores. Frontend escala para muitos
              usuários. Cada um no seu ritmo.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // Examples Section
  const ExamplesSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconBulb
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Casos Reais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Streaming multi-plataforma</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Headless CMS para TV, mobile e web
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Website: React + Next.js</List.Item>
                  <List.Item>Mobile: React Native</List.Item>
                  <List.Item>TV: Custom framework</List.Item>
                  <List.Item>Mesmo conteúdo, interfaces diferentes</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconRocket size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Plataforma de conteúdo</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Headless CMS para editorial e mídia
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Web: React</List.Item>
                  <List.Item>Mobile: Native apps</List.Item>
                  <List.Item>Desktop: Electron</List.Item>
                  <List.Item>API-first para todos os clientes</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Headless para lojas online
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Website: Next.js</List.Item>
                  <List.Item>Mobile app: React Native</List.Item>
                  <List.Item>Admin: Vue.js</List.Item>
                  <List.Item>Performance otimizada</List.Item>
                </List>
              </div>
            </Group>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  // Pitfalls Section
  const PitfallsSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconAlertTriangle
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          <Alert color="red" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Complexidade de setup
            </Text>
            <Text size="sm" c="dimmed">
              Headless CMS requer mais configuração inicial. Use ferramentas
              como Strapi ou Contentful.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Dependência de APIs
            </Text>
            <Text size="sm" c="dimmed">
              Frontend depende de APIs externas. Implemente cache e fallbacks
              robustos.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Over-engineering
            </Text>
            <Text size="sm" c="dimmed">
              Headless para sites simples é overkill. Use apenas quando há
              múltiplas plataformas.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> CMS tradicional para sites
              básicos
              <br />
              <strong>Use ferramentas prontas:</strong> Strapi, Contentful,
              Sanity
              <br />
              <strong>Implemente cache:</strong> CDN e cache agressivo
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // References Section
  const ReferencesSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconCode
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Referências e Recursos
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Ferramentas
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Strapi:</strong> Open-source headless CMS
              </List.Item>
              <List.Item>
                <strong>Contentful:</strong> Cloud-based headless CMS
              </List.Item>
              <List.Item>
                <strong>Sanity:</strong> Real-time headless CMS
              </List.Item>
              <List.Item>
                <strong>Prismic:</strong> API-first CMS
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Shopify Hydrogen:</strong>{' '}
                <a
                  href="https://hydrogen.shopify.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Headless commerce framework
                </a>
              </List.Item>
              <List.Item>
                <strong>Strapi:</strong>{' '}
                <a
                  href="https://strapi.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open-source headless CMS
                </a>
              </List.Item>
              <List.Item>
                <strong>Contentful:</strong>{' '}
                <a
                  href="https://www.contentful.com/headless-cms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What is a Headless CMS?
                </a>
              </List.Item>
              <List.Item>
                <strong>Sanity:</strong>{' '}
                <a
                  href="https://www.sanity.io/headless-cms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Structured content platform
                </a>
              </List.Item>
            </List>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  const tabs = createArchitectureTabs(
    <OverviewSection />,
    <ImplementationSection />,
    <ExamplesSection />,
    <PitfallsSection />,
    <ReferencesSection />
  );

  return <MobileTabs items={tabs} defaultTab="overview" />;
}

HeadlessArchitecture.metadata = {
  title: 'Headless/API-First',
  description:
    'Separação total entre backend (dados) e frontend (apresentação) para performance máxima e flexibilidade de stack.',
};
