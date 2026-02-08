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
  IconPuzzle,
  IconLego,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import codeExamples from '../../utils/code-examples/component-driven.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function ComponentDriven() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Component-Driven Development
        </Title>
        <Text size="lg" c="dimmed">
          Construa interfaces como Lego. Componentes reutilizáveis, composição
          poderosa, design systems que realmente funcionam. Menos código, mais
          resultado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconPuzzle size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Desenvolvimento baseado em componentes reutilizáveis
              </Text>
            </div>
          </Group>

          <Text>
            Component-Driven é sobre uma coisa só:{' '}
            <strong>construir interfaces como Lego</strong>.
          </Text>

          <Text>
            Pensa assim: você tem peças pequenas (botões, inputs), combina elas
            em peças médias (formulários, cards), e depois monta telas inteiras.
            Cada peça funciona sozinha e pode ser reutilizada.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>componentes são independentes e reutilizáveis</em>. Você pode
            testar cada um isoladamente, trocar um sem afetar os outros.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconLego
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 3 Conceitos Principais
        </Title>

        <Stack gap="md">
          {codeExamples.slice(0, 3).map((ex, idx) => (
            <Card
              withBorder
              p="md"
              key={ex.title}
              w="100%"
              style={{ minWidth: 0, width: '100%' }}
            >
              <Group w="100%" style={{ minWidth: 0, width: '100%' }}>
                <Badge
                  size="lg"
                  variant="light"
                  color={['green', 'blue', 'orange'][idx] || 'gray'}
                >
                  {idx + 1}
                </Badge>
                <div style={{ flex: 1, width: '100%' }}>
                  <Title order={4}>{ex.title}</Title>
                  <Text size="sm" c="dimmed">
                    {ex.description}
                  </Text>
                  <CodeExample title={ex.title} code={ex.code} />
                </div>
              </Group>
            </Card>
          ))}
        </Stack>

        <Paper withBorder p="md" radius="md" mt="lg">
          <Text size="sm" c="dimmed">
            <strong>Como funciona:</strong> Componentes atômicos (Button, Input)
            se juntam em componentes maiores (Form, Card). Cada componente é
            testado isoladamente e pode ser reutilizado em qualquer lugar. A
            mudança em um componente se reflete em todos os lugares onde ele é
            usado.
          </Text>
        </Paper>
      </div>
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
                <Title order={4}>Design Systems</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Componentes padronizados para toda a empresa
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Material-UI (Google)</List.Item>
                  <List.Item>Ant Design (Alibaba)</List.Item>
                  <List.Item>Chakra UI (Independente)</List.Item>
                  <List.Item>Mantine (Independente)</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconPuzzle size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Componentes reutilizáveis para produtos
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>ProductCard reutilizável</List.Item>
                  <List.Item>Button com variações</List.Item>
                  <List.Item>Form components padronizados</List.Item>
                  <List.Item>Modal e Drawer consistentes</List.Item>
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
                <Title order={4}>Dashboard</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Componentes para análise de dados
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Chart components reutilizáveis</List.Item>
                  <List.Item>Table com sorting/filtering</List.Item>
                  <List.Item>Metric cards padronizados</List.Item>
                  <List.Item>Filter components consistentes</List.Item>
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
              ❌ Over-abstraction
            </Text>
            <Text size="sm" c="dimmed">
              Criar componentes muito genéricos que não resolvem problemas
              específicos. Use YAGNI como guia.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Props explosion
            </Text>
            <Text size="sm" c="dimmed">
              Componentes com muitas props se tornam difíceis de usar. Use
              composition over configuration.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Inconsistência
            </Text>
            <Text size="sm" c="dimmed">
              Componentes sem padrões claros criam inconsistência visual.
              Documente e padronize.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Componentes específicos antes de
              genéricos
              <br />
              <strong>Use composition:</strong> Children props em vez de muitas
              props
              <br />
              <strong>Documente padrões:</strong> Storybook e documentação clara
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
                <strong>Storybook:</strong> Documentação de componentes
              </List.Item>
              <List.Item>
                <strong>Chromatic:</strong> Visual testing
              </List.Item>
              <List.Item>
                <strong>Figma:</strong> Design system integration
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                      <strong>Storybook:</strong>{' '}
                      <a href="https://storybook.js.org/tutorials/design-systems-for-developers/" target="_blank" rel="noopener noreferrer">Design Systems for Developers</a>
                    </List.Item>
                    <List.Item>
                      <strong>Chromatic:</strong>{' '}
                      <a href="https://www.chromatic.com/blog/component-driven-development/" target="_blank" rel="noopener noreferrer">Component Driven Development</a>
                    </List.Item>
                    <List.Item>
                      <strong>Brad Frost:</strong>{' '}
                      <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noopener noreferrer">Atomic Web Design</a>
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

ComponentDriven.metadata = {
  title: 'Component-Driven Development',
  description:
    'Construa interfaces como Lego com componentes reutilizáveis e composição poderosa.',
};

export default ComponentDriven;
