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
  IconFolder,
  IconBrandGithub,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import monorepoExamples from '../../utils/code-examples/monorepo.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function Monorepo() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Monorepo
        </Title>
        <Text size="lg" c="dimmed">
          Um repositório, múltiplos projetos. Compartilhamento de código,
          tooling centralizado, refatoração segura. Escalabilidade sem
          complexidade.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconFolder size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Um repositório que contém múltiplos projetos/pacotes
              </Text>
            </div>
          </Group>

          <Text>
            Monorepo é sobre uma coisa só:{' '}
            <strong>ter tudo num lugar só</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de ter 10 repositórios separados, você tem
            tudo num só. Apps, libs, docs, tudo junto. Mas bem organizado e
            estruturado.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>compartilhamento fácil, tooling centralizado</em>. Você refatora
            uma vez, todo mundo ganha. Você muda uma lib, todos os projetos
            atualizam.
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
          <IconBrandGithub
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 4 Conceitos Principais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Compartilhamento de Código</Title>
                <Text size="sm" c="dimmed">
                  Libs compartilhadas entre projetos. Muda uma vez, todo mundo
                  ganha.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Tooling Centralizado</Title>
                <Text size="sm" c="dimmed">
                  ESLint, Prettier, TypeScript, testes. Configura uma vez,
                  funciona em todo lugar.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Refatoração Segura</Title>
                <Text size="sm" c="dimmed">
                  Muda uma lib, vê o impacto em todos os projetos. Sem quebrar
                  nada.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">
                4
              </Badge>
              <div>
                <Title order={4}>Versionamento Unificado</Title>
                <Text size="sm" c="dimmed">
                  Um commit pode afetar múltiplos projetos. Histórico completo,
                  rastreabilidade total.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                    />
                  ))}
                </Stack>
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
                <Title order={4}>Google</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Monorepo gigante com bilhões de linhas
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Um repositório para todo código</List.Item>
                  <List.Item>Compartilhamento de bibliotecas</List.Item>
                  <List.Item>Refatoração segura em larga escala</List.Item>
                  <List.Item>Tooling centralizado</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconBrandGithub size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Facebook/Meta</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Monorepo para produtos sociais
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>React, React Native, Instagram</List.Item>
                  <List.Item>Compartilhamento de componentes</List.Item>
                  <List.Item>Deploy unificado</List.Item>
                  <List.Item>Versionamento coordenado</List.Item>
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
                <Title order={4}>Netflix</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Monorepo para streaming
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Múltiplas plataformas (TV, mobile, web)</List.Item>
                  <List.Item>Compartilhamento de lógica de negócio</List.Item>
                  <List.Item>Deploy independente</List.Item>
                  <List.Item>Testes centralizados</List.Item>
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
              ❌ Build times longos
            </Text>
            <Text size="sm" c="dimmed">
              Monorepos grandes podem ter builds muito lentos. Use build
              incremental e cache.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Complexidade de permissões
            </Text>
            <Text size="sm" c="dimmed">
              Múltiplos times podem conflitar. Use CODEOWNERS e branch
              protection.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Dependências circulares
            </Text>
            <Text size="sm" c="dimmed">
              Projetos podem criar dependências circulares. Use ferramentas como
              nx ou lerna.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece pequeno:</strong> Monorepo simples antes de
              complexo
              <br />
              <strong>Use ferramentas:</strong> Nx, Lerna, Turborepo
              <br />
              <strong>Organize bem:</strong> Estrutura clara e documentada
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
                <strong>Nx:</strong> Build system para monorepos
              </List.Item>
              <List.Item>
                <strong>Lerna:</strong> Gerenciamento de pacotes
              </List.Item>
              <List.Item>
                <strong>Turborepo:</strong> Build system rápido
              </List.Item>
              <List.Item>
                <strong>Yarn Workspaces:</strong> Workspaces nativos
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Google:</strong> Monorepo gigante
              </List.Item>
              <List.Item>
                <strong>Facebook/Meta:</strong> Produtos sociais
              </List.Item>
              <List.Item>
                <strong>Netflix:</strong> Streaming multiplataforma
              </List.Item>
              <List.Item>
                <strong>Uber:</strong> Apps de mobilidade
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

export default Monorepo;
