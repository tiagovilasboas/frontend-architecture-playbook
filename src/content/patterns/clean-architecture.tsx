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
  Grid,
  Code,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconStack,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import codeExamples from '../../utils/code-examples/clean-architecture.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function CleanArchitecture() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Clean Architecture no Front-End
        </Title>
        <Text size="lg" c="dimmed">
          Separação clara de responsabilidades, testes fáceis e independência de
          frameworks. Seu código de negócio sobrevive a qualquer mudança de
          tecnologia.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconStack size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Arquitetura em camadas que protege sua lógica de negócio
              </Text>
            </div>
          </Group>

          <Text>
            Clean Architecture é sobre uma coisa só:{' '}
            <strong>
              seu código de negócio não pode depender de framework
            </strong>
            .
          </Text>

          <Text>
            Pensa assim: se amanhã o React virar pó, sua lógica de negócio tem
            que sobreviver. Se o Vue quebrar tudo na próxima versão, suas regras
            de negócio continuam funcionando.
          </Text>

          <Text>
            A regra é simples: <em>dependências apontam para dentro</em>. UI
            depende do negócio, API depende do negócio, mas negócio não depende
            de nada externo.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Title order={3} mb="sm">
            <IconCode
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Implementação Real
          </Title>

          <Text>
            Vamos ver como implementar Clean Architecture em um e-commerce real:
          </Text>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Estrutura de Pastas
                </Title>
                <Code block>
                  {`src/
├── domain/           # Entidades (núcleo)
│   ├── entities/
│   │   ├── Product.ts
│   │   └── Order.ts
│   └── usecases/
│       ├── CreateOrder.ts
│       └── GetProducts.ts
├── infrastructure/   # Adaptadores externos
│   ├── api/
│   │   └── ProductAPI.ts
│   └── storage/
│       └── LocalStorage.ts
├── presentation/     # UI (React)
│   ├── components/
│   └── pages/
└── shared/          # Utilitários
    └── types/`}
                </Code>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Fluxo de Dados
                </Title>
                <Text size="sm" c="dimmed">
                  <strong>1.</strong> UI chama Use Case
                  <br />
                  <strong>2.</strong> Use Case usa Entity
                  <br />
                  <strong>3.</strong> Repository conecta com API
                  <br />
                  <strong>4.</strong> Dados voltam pela mesma rota
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>

      {/* Layers */}
      <div>
        <Title order={2} mb="lg">
          <IconStack
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          As 4 Camadas
        </Title>

        <Stack gap="md">
          {codeExamples.map((ex, idx) => (
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
                  color={['green', 'blue', 'orange', 'red'][idx] || 'gray'}
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
            <strong>Como funciona:</strong> As camadas se comunicam de fora para
            dentro. O React component (Framework) chama o caso de uso (Use
            Case), que usa a entidade (Entity). O adaptador (Repository) conecta
            com o mundo externo. A regra é clara:{' '}
            <em>dependências apontam para dentro</em>.
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
          Exemplos Práticos
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="sm">
                E-commerce
              </Title>
              <Text size="sm" c="dimmed" mb="md">
                Sistema de pedidos com regras complexas
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Entidade: Product, Order, User</List.Item>
                <List.Item>Use Case: CreateOrder, GetProducts</List.Item>
                <List.Item>Repository: ProductAPI, OrderAPI</List.Item>
                <List.Item>UI: ProductList, Checkout</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="sm">
                Dashboard
              </Title>
              <Text size="sm" c="dimmed" mb="md">
                Análise de dados com múltiplas fontes
              </Text>
              <List size="sm" spacing="xs">
                <List.Item>Entidade: Metric, Report, Filter</List.Item>
                <List.Item>Use Case: GetMetrics, GenerateReport</List.Item>
                <List.Item>Repository: AnalyticsAPI, CacheAPI</List.Item>
                <List.Item>UI: Chart, FilterPanel</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
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

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Alert color="red" icon={<IconAlertTriangle size={16} />} mb="md">
              <Text size="sm" fw={600} mb={4}>
                ❌ Over-engineering
              </Text>
              <Text size="sm" c="dimmed">
                Clean Architecture para um MVP simples é exagero. Use apenas
                quando a complexidade justifica.
              </Text>
            </Alert>

            <Alert
              color="orange"
              icon={<IconAlertTriangle size={16} />}
              mb="md"
            >
              <Text size="sm" fw={600} mb={4}>
                ❌ Dependências circulares
              </Text>
              <Text size="sm" c="dimmed">
                Quebrar a regra de dependências. Use Case não pode importar UI.
              </Text>
            </Alert>

            <Alert
              color="yellow"
              icon={<IconAlertTriangle size={16} />}
              mb="md"
            >
              <Text size="sm" fw={600} mb={4}>
                ❌ Domínio anêmico
              </Text>
              <Text size="sm" c="dimmed">
                Entidades só com getters/setters. Coloque lógica de negócio nas
                entidades.
              </Text>
            </Alert>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Alert color="green" icon={<IconCheck size={16} />} mb="md">
              <Text size="sm" fw={600} mb={4}>
                ✅ Como evitar
              </Text>
              <Text size="sm" c="dimmed">
                <strong>Comece simples:</strong> Adicione camadas conforme
                necessário
                <br />
                <strong>Teste as dependências:</strong> Use ferramentas como
                dependency-cruiser
                <br />
                <strong>Pense no domínio:</strong> Entidades devem ter
                comportamento
              </Text>
            </Alert>
          </Grid.Col>
        </Grid>
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

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="sm">
                Livros
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  <strong>Clean Architecture</strong> - Robert C. Martin
                </List.Item>
                <List.Item>
                  <strong>Domain-Driven Design</strong> - Eric Evans
                </List.Item>
                <List.Item>
                  <strong>Clean Code</strong> - Robert C. Martin
                </List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="sm">
                Artigos e Casos
              </Title>
              <List size="sm" spacing="xs">
              <List.Item>
                      <strong>Uncle Bob:</strong>{' '}
                      <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank" rel="noopener noreferrer">The Clean Architecture</a>
                    </List.Item>
                    <List.Item>
                      <strong>Khalil Stemmler:</strong>{' '}
                      <a href="https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/" target="_blank" rel="noopener noreferrer">Organizing App Logic</a>
                    </List.Item>
                    <List.Item>
                      <strong>Bulletproof React:</strong>{' '}
                      <a href="https://github.com/alan2207/bulletproof-react" target="_blank" rel="noopener noreferrer">Project Structure Guide</a>
                    </List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
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

export default CleanArchitecture;
