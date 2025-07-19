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
  IconDeviceMobile,
  IconBolt,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import islandsExamples from '../../utils/code-examples/islands-architecture.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function IslandsArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Islands Architecture
        </Title>
        <Text size="lg" c="dimmed">
          HTML estático com ilhas de interatividade. Performance máxima, SEO
          perfeito, JavaScript só onde precisa. O melhor dos dois mundos.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconDeviceMobile size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                HTML estático com ilhas de JavaScript interativo
              </Text>
            </div>
          </Group>

          <Text>
            Islands Architecture é sobre uma coisa só:{' '}
            <strong>JavaScript só onde precisa</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de SPA (tudo JavaScript) ou SSR (tudo
            servidor), você tem HTML estático com pequenas ilhas de
            interatividade. O resto é HTML puro, rápido e SEO-friendly.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>
              HTML estático por padrão, JavaScript só onde interatividade
              importa
            </em>
            . Performance máxima, SEO perfeito, JavaScript mínimo.
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
          <IconBolt
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 3 Conceitos Principais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>HTML Estático</Title>
                <Text size="sm" c="dimmed">
                  Base da página é HTML puro. Rápido, SEO-friendly, sem
                  JavaScript desnecessário.
                </Text>
                <CodeExample
                  title={
                    islandsExamples.find(e => e.id === 'islands-html-static')
                      ?.title || ''
                  }
                  code={
                    islandsExamples.find(e => e.id === 'islands-html-static')
                      ?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Ilhas de Interatividade</Title>
                <Text size="sm" c="dimmed">
                  JavaScript só nos componentes que precisam de interatividade.
                  Carrinho, busca, formulários.
                </Text>
                <CodeExample
                  title={
                    islandsExamples.find(e => e.id === 'islands-cart-island')
                      ?.title || ''
                  }
                  code={
                    islandsExamples.find(e => e.id === 'islands-cart-island')
                      ?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Hidratação Seletiva</Title>
                <Text size="sm" c="dimmed">
                  JavaScript hidrata apenas as ilhas. Resto da página permanece
                  estático.
                </Text>
                <CodeExample
                  title={
                    islandsExamples.find(e => e.id === 'islands-hydration')
                      ?.title || ''
                  }
                  code={
                    islandsExamples.find(e => e.id === 'islands-hydration')
                      ?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>
        </Stack>
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
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Catálogo estático com ilhas interativas
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Catálogo: HTML estático</List.Item>
                  <List.Item>Carrinho: Ilha interativa</List.Item>
                  <List.Item>Busca: Ilha interativa</List.Item>
                  <List.Item>Filtros: Ilha interativa</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconDeviceMobile size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Blog/News</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Conteúdo estático com comentários interativos
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Artigos: HTML estático</List.Item>
                  <List.Item>Comentários: Ilha interativa</List.Item>
                  <List.Item>Newsletter: Ilha interativa</List.Item>
                  <List.Item>Social sharing: Ilha interativa</List.Item>
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
                  Layout estático com widgets interativos
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Layout: HTML estático</List.Item>
                  <List.Item>Gráficos: Ilhas interativas</List.Item>
                  <List.Item>Filtros: Ilha interativa</List.Item>
                  <List.Item>Notificações: Ilha interativa</List.Item>
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
              ❌ Complexidade de hidratação
            </Text>
            <Text size="sm" c="dimmed">
              Hidratar ilhas pode ser complexo. Use frameworks como Astro ou
              Fresh que facilitam isso.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Estado compartilhado
            </Text>
            <Text size="sm" c="dimmed">
              Compartilhar estado entre ilhas pode ser difícil. Use URL params
              ou localStorage.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Over-engineering
            </Text>
            <Text size="sm" c="dimmed">
              Islands para sites simples é overkill. Use apenas quando há
              componentes realmente interativos.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Use frameworks:</strong> Astro, Fresh, Marko
              <br />
              <strong>Identifique ilhas:</strong> Apenas componentes interativos
              <br />
              <strong>Mantenha simples:</strong> HTML estático por padrão
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
                <strong>Astro:</strong> Framework Islands por excelência
              </List.Item>
              <List.Item>
                <strong>Fresh:</strong> Islands para Deno
              </List.Item>
              <List.Item>
                <strong>Marko:</strong> Islands para Node.js
              </List.Item>
              <List.Item>
                <strong>Qwik:</strong> Resumability e Islands
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Netflix:</strong> Performance em dispositivos
              </List.Item>
              <List.Item>
                <strong>Shopify:</strong> E-commerce com Islands
              </List.Item>
              <List.Item>
                <strong>Medium:</strong> Blog com comentários interativos
              </List.Item>
              <List.Item>
                <strong>GitHub:</strong> Documentação com exemplos interativos
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

export default IslandsArchitecture;
