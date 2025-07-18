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
} from '@tabler/icons-react';
import atomicExamples from '../../utils/code-examples/atomic-design.json';
import CodeExample from '../../components/CodeExample';

function AtomicDesign() {
  // atomicExamples já vem do JSON

  return (
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

      <Paper withBorder p="md" radius="md">
        <Text size="sm" c="dimmed">
          <strong>Como funciona:</strong> Os 5 níveis se constroem de baixo para
          cima. Átomos (Button, Input) se combinam em Moléculas (SearchBar,
          FormField). Moléculas formam Organismos (Header, ProductList).
          Organismos vão para Templates (layouts). Templates com conteúdo real
          viram Páginas. Cada nível reutiliza os anteriores.
        </Text>
      </Paper>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Por que vale a pena?
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Reutilização Máxima</Title>
                <Text size="sm">
                  Componentes pequenos se combinam. Menos código, mais
                  consistência.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconAtom size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Consistência Garantida</Title>
                <Text size="sm">
                  Mesmos átomos em todo lugar. Design system coeso, experiência
                  uniforme.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Manutenção Fácil</Title>
                <Text size="sm">
                  Muda um átomo, muda em todo lugar. Menos bugs, desenvolvimento
                  mais rápido.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>Design system é importante</List.Item>
              <List.Item>Consistência visual é crítica</List.Item>
              <List.Item>Múltiplos produtos/sites</List.Item>
              <List.Item>Time grande trabalhando junto</List.Item>
              <List.Item>Reutilização de componentes</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projeto pequeno (over-engineering)</List.Item>
              <List.Item>Protótipos rápidos</List.Item>
              <List.Item>Design único por página</List.Item>
              <List.Item>Time pequeno e ágil</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas & Como Evitar
        </Title>

        <Stack gap="xl">
          {/* Over-engineering */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🚫 Over-engineering
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você cria átomos para tudo.
                Componentes simples viram complexidade desnecessária.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Use atomic design quando faz
                sentido. Componentes simples não precisam ser átomos.
              </Text>
            </Stack>
          </Paper>

          {/* Deep Nesting */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🔄 Aninhamento Profundo
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos níveis de aninhamento.
                Componentes difíceis de entender e manter.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Mantenha no máximo 3-4 níveis.
                Considere criar organismos maiores.
              </Text>
            </Stack>
          </Paper>

          {/* Naming Conflicts */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📝 Conflitos de Nomenclatura
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Nomes de componentes confusos,
                difícil de encontrar, duplicação.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Use convenções claras, documente
                estrutura, evite duplicação.
              </Text>
            </Stack>
          </Paper>

          {/* Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              ⚡ Performance
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos componentes pequenos. Bundle
                grande, renderização lenta.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Use code splitting, lazy loading,
                otimize imports.
              </Text>
            </Stack>
          </Paper>

          {/* Documentation */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📚 Documentação
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Estrutura complexa sem documentação.
                Difícil de entender, usar incorretamente.
              </Text>

              <Text>
                <strong>Como evitar:</strong> Documente estrutura, use
                Storybook, mantenha exemplos.
              </Text>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References & Real Cases */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Referências & Casos Reais
        </Title>

        <Stack gap="xl">
          {/* References */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📚 Referências
            </Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Atomic Design"</strong> - Brad Frost
                </List.Item>
                <List.Item>
                  <strong>"Design Systems"</strong> - Alla Kholmatova
                </List.Item>
                <List.Item>
                  <strong>"Design Systems Handbook"</strong> - Various Authors
                </List.Item>
              </List>

              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a
                    href="https://bradfrost.com/blog/post/atomic-web-design/"
                    target="_blank"
                  >
                    Atomic Design - Brad Frost
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://storybook.js.org/" target="_blank">
                    Storybook - Documentação de componentes
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.designsystems.com/" target="_blank">
                    Design Systems - Recursos
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">Atomic Design na prática</Text>
            </div>
          </Group>

          <Text>
            Atomic Design é sobre uma coisa só:{' '}
            <strong>componentes organizados</strong>. Átomos → moléculas →
            organismos → templates → páginas. Use quando design system e
            reutilização importam.
          </Text>

          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre criar átomos para tudo. É
            sobre organizar componentes quando faz sentido. E você não
            enlouquece.
            <br />
            <strong>Dica:</strong> Comece com componentes básicos, evolua
            conforme necessário. Foque em reutilização e consistência.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

AtomicDesign.metadata = {
  title: 'Atomic Design',
  description:
    'Átomos, moléculas, organismos, templates, páginas. Design system estruturado.',
};

export default AtomicDesign;
