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
  IconApps,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import microFrontendsExamples from '../../utils/code-examples/micro-frontends.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function MicroFrontends() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Micro-Frontends
        </Title>
        <Text size="lg" c="dimmed">
          Quebre aplicações grandes em pedaços menores. Times independentes,
          tecnologias heterogêneas, deploy separado. Escalabilidade real.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconApps size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Arquitetura que quebra aplicações grandes em micro-aplicações
              </Text>
            </div>
          </Group>

          <Text>
            Micro-Frontends é sobre uma coisa só:{' '}
            <strong>quebrar aplicações grandes em pedaços menores</strong>.
          </Text>

          <Text>
            Pensa assim: você tem uma aplicação gigante com 50 desenvolvedores.
            Torna-se difícil de gerenciar. Com Micro-Frontends, você quebra em 5
            aplicações menores, cada uma com seu time, sua tecnologia, seu
            deploy.
          </Text>

          <Text>
            A regra é simples: <em>cada micro-frontend é independente</em>. Time
            A não depende do Time B, tecnologia A não depende da tecnologia B.
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
          <IconApps
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 4 Conceitos Principais
        </Title>

        <Stack gap="md">
          {microFrontendsExamples.map((ex, idx) => (
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
            <strong>Como funciona:</strong> Cada micro-frontend é uma aplicação
            independente com seu time, tecnologia e deploy. O Shell (container)
            orquestra tudo, carregando os micro-frontends conforme necessário.
            Times trabalham sem depender uns dos outros, mas a integração
            precisa ser bem planejada.
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
                <Title order={4}>Netflix</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Plataforma de streaming com múltiplos times
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Time de busca independente</List.Item>
                  <List.Item>Time de player independente</List.Item>
                  <List.Item>Time de recomendações independente</List.Item>
                  <List.Item>Deploy independente por funcionalidade</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconApps size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Spotify</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Player de música com funcionalidades complexas
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Time de player independente</List.Item>
                  <List.Item>Time de playlists independente</List.Item>
                  <List.Item>Time de descoberta independente</List.Item>
                  <List.Item>Tecnologias diferentes por time</List.Item>
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
                  Loja online com múltiplas funcionalidades
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Time de catálogo independente</List.Item>
                  <List.Item>Time de checkout independente</List.Item>
                  <List.Item>Time de pagamento independente</List.Item>
                  <List.Item>Time de reviews independente</List.Item>
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
              ❌ Complexidade desnecessária
            </Text>
            <Text size="sm" c="dimmed">
              Micro-frontends para projetos pequenos é over-engineering. Use
              apenas quando a complexidade justifica.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Integração complexa
            </Text>
            <Text size="sm" c="dimmed">
              Coordenar múltiplos micro-frontends pode ser complicado. Precisa
              de um Shell bem planejado.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Performance overhead
            </Text>
            <Text size="sm" c="dimmed">
              Carregar múltiplos bundles pode impactar performance. Otimize
              carregamento e cache.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Monorepo antes de micro-frontends
              <br />
              <strong>Planeje integração:</strong> Shell bem arquitetado
              <br />
              <strong>Otimize performance:</strong> Lazy loading e code
              splitting
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
              Artigos e Casos
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Netflix:</strong> Micro-frontends em produção
              </List.Item>
              <List.Item>
                <strong>Spotify:</strong> Arquitetura de micro-apps
              </List.Item>
              <List.Item>
                <strong>Amazon:</strong> Single Page Application vs
                Micro-frontends
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Ferramentas
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Module Federation:</strong> Webpack 5
              </List.Item>
              <List.Item>
                <strong>Single-SPA:</strong> Framework para micro-frontends
              </List.Item>
              <List.Item>
                <strong>Nx:</strong> Monorepo com micro-frontends
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

MicroFrontends.metadata = {
  title: 'Micro-frontends',
  description:
    'Quebre aplicações grandes em pedaços pequenos. Times independentes, tecnologias diferentes, deploy separado.',
};

export default MicroFrontends;
