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
  IconAtom,
  IconBolt,
  IconCode,
} from '@tabler/icons-react';
import atomicExamples from '../../utils/code-examples/atomic-design.json';
import CodeExample from '../../components/CodeExample';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function AtomicDesign() {
  // atomicExamples já vem do JSON

  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Atomic Design
        </Title>
        <Text size="lg" c="dimmed">
          Átomos, moléculas, organismos, templates, páginas. Design system
          estruturado, componentes reutilizáveis.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconAtom size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Metodologia para criar design systems estruturados
              </Text>
            </div>
          </Group>
          <Text>
            Atomic Design é sobre uma coisa só:{' '}
            <strong>componentes organizados</strong>.
          </Text>
          <Text>
            Pensa assim: ao invés de criar componentes aleatórios, você segue
            uma hierarquia clara: átomos → moléculas → organismos → templates →
            páginas. Cada nível é construído com os níveis anteriores.
          </Text>
          <Text>
            A regra é simples:{' '}
            <em>
              componentes pequenos se combinam para formar componentes maiores
            </em>
            . Reutilização máxima, consistência garantida, manutenção fácil.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Concepts - OS 5 NÍVEIS */}
      <div>
        <Title order={2} mb="lg">
          <IconBolt
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 5 Níveis
        </Title>
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Átomos</Title>
                <Text size="sm" c="dimmed">
                  Componentes básicos. Botões, inputs, labels, ícones. Não podem
                  ser divididos em componentes menores.
                </Text>
              </div>
            </Group>
          </Card>
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Moléculas</Title>
                <Text size="sm" c="dimmed">
                  Combinação de átomos. Search bar, form field, card.
                  Funcionalidade específica.
                </Text>
              </div>
            </Group>
          </Card>
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Organismos</Title>
                <Text size="sm" c="dimmed">
                  Combinação de moléculas. Header, footer, product list. Seções
                  complexas da interface.
                </Text>
              </div>
            </Group>
          </Card>
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">
                4
              </Badge>
              <div>
                <Title order={4}>Templates</Title>
                <Text size="sm" c="dimmed">
                  Layout da página. Estrutura sem conteúdo real. Wireframes com
                  organismos.
                </Text>
              </div>
            </Group>
          </Card>
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="purple">
                5
              </Badge>
              <div>
                <Title order={4}>Páginas</Title>
                <Text size="sm" c="dimmed">
                  Templates com conteúdo real. Páginas específicas. Instâncias
                  dos templates.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      <Paper withBorder p="md" radius="md">
        <Text size="sm" c="dimmed">
          <strong>Como funciona:</strong> Os 5 níveis se constroem de baixo para
          cima. Átomos (Button, Input) se combinam em Moléculas (SearchBar,
          FormField). Moléculas formam Organismos (Header, ProductList).
          Organismos vão para Templates (layouts). Templates com conteúdo real
          viram Páginas. Cada nível reutiliza os anteriores.
        </Text>
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
                <Title order={4}>Material Design</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Google's design system
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Átomos: Buttons, inputs, icons</List.Item>
                  <List.Item>Moléculas: Cards, chips, dialogs</List.Item>
                  <List.Item>Organismos: App bars, navigation</List.Item>
                  <List.Item>Templates: Layout patterns</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Ant Design</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Alibaba's design system
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Átomos: Basic components</List.Item>
                  <List.Item>Moléculas: Form components</List.Item>
                  <List.Item>Organismos: Layout components</List.Item>
                  <List.Item>Templates: Page layouts</List.Item>
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
                <Title order={4}>Shopify Polaris</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Shopify's design system
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Átomos: Foundation components</List.Item>
                  <List.Item>Moléculas: Interactive components</List.Item>
                  <List.Item>Organismos: Complex components</List.Item>
                  <List.Item>Templates: Page structures</List.Item>
                </List>
              </div>
            </Group>
          </Card>
        </Stack>
      </Paper>

      {/* Exemplos Dinâmicos do JSON */}
      <Stack gap="xl">
        {atomicExamples.map((ex, idx) => (
          <CodeExample
            key={ex.title || idx}
            title={ex.title || ''}
            description={ex.description || undefined}
            code={{ content: ex.code }}
          />
        ))}
      </Stack>
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
              ❌ Over-abstraction
            </Text>
            <Text size="sm" c="dimmed">
              Criar átomos demais pode complicar. Use apenas quando há
              reutilização real.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Rigidez excessiva
            </Text>
            <Text size="sm" c="dimmed">
              Seguir Atomic Design rigidamente pode limitar criatividade. Use
              como guia, não regra.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Complexidade desnecessária
            </Text>
            <Text size="sm" c="dimmed">
              Para projetos pequenos, Atomic Design pode ser overkill. Use
              apenas quando há muitos componentes.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Átomos básicos primeiro
              <br />
              <strong>Use como guia:</strong> Não seja rígido
              <br />
              <strong>Foque na reutilização:</strong> Só abstraia quando
              necessário
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
                <strong>Storybook:</strong> Component documentation
              </List.Item>
              <List.Item>
                <strong>Figma:</strong> Design system tools
              </List.Item>
              <List.Item>
                <strong>Bit:</strong> Component-driven development
              </List.Item>
              <List.Item>
                <strong>Styleguide:</strong> Component libraries
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Material Design:</strong> Google's design system
              </List.Item>
              <List.Item>
                <strong>Ant Design:</strong> Alibaba's design system
              </List.Item>
              <List.Item>
                <strong>Shopify Polaris:</strong> E-commerce design system
              </List.Item>
              <List.Item>
                <strong>IBM Carbon:</strong> Enterprise design system
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

export default AtomicDesign;
