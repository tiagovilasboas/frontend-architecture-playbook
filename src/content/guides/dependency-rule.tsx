import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  List,
  ThemeIcon,
  Card,
  SimpleGrid,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconStack,
  IconArrowDown,
  IconX,
  IconShield,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

export default function DependencyRuleGuide() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <section>
        <Stack align="center" ta="center" mb="xl">
          <Title order={1} fw={800} size="3.5rem" mb="md">
            Dependency Rule
          </Title>
          <Text size="xl" c="dimmed" mb="lg" maw={800}>
            A regra mais importante de qualquer arquitetura. Se você ignorar
            isso,
            <strong>
              {' '}
              nenhuma arquitetura consegue salvar seu projeto do caos.
            </strong>
          </Text>
        </Stack>
      </section>

      {/* What is Dependency Rule */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} mb="sm">
            <IconBulb
              size={32}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            O que é a Dependency Rule?
          </Title>
          <Text size="lg" c="dimmed">
            A Dependency Rule é simples:{' '}
            <strong>dependências só apontam para dentro</strong>. Camadas
            externas podem depender das internas, mas nunca o contrário.
          </Text>

          <Alert color="brand" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Regra Simples:</strong> Se você está na camada de fora,
              você pode usar qualquer coisa das camadas de dentro. Se você está
              na camada de dentro, você NUNCA pode usar nada das camadas de
              fora.
            </Text>
          </Alert>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <ThemeIcon
                  size={50}
                  radius="md"
                  variant="light"
                  color="green"
                  mb="sm"
                >
                  <IconArrowDown size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">
                  ✅ Pode Depender
                </Title>
                <Text size="sm" c="dimmed">
                  Camadas externas podem usar camadas internas. UI pode usar
                  services, services podem usar repositories, etc.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <ThemeIcon
                  size={50}
                  radius="md"
                  variant="light"
                  color="red"
                  mb="sm"
                >
                  <IconX size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">
                  ❌ Nunca Depender
                </Title>
                <Text size="sm" c="dimmed">
                  Camadas internas NUNCA usam camadas externas. Domain não usa
                  UI, repositories não usam services, etc.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Stack>
  );

  // Why it matters Section
  const WhyItMattersSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} mb="sm">
            <IconAlertTriangle
              size={32}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Por que a Dependency Rule é Crucial?
          </Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="green"
                mb="sm"
              >
                <IconShield size={25} />
              </ThemeIcon>
              <Title order={4} size="h5">
                Independência
              </Title>
              <Text size="sm" c="dimmed">
                Seu negócio não depende de framework. Troque React por Vue,
                troque banco de dados, troque UI - seu core sobrevive.
              </Text>
            </Card>

            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="blue"
                mb="sm"
              >
                <IconCode size={25} />
              </ThemeIcon>
              <Title order={4} size="h5">
                Testabilidade
              </Title>
              <Text size="sm" c="dimmed">
                Teste cada camada isoladamente. Mocks simples, testes rápidos,
                bugs fáceis de encontrar.
              </Text>
            </Card>

            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="orange"
                mb="sm"
              >
                <IconStack size={25} />
              </ThemeIcon>
              <Title order={4} size="h5">
                Flexibilidade
              </Title>
              <Text size="sm" c="dimmed">
                Mude uma camada sem afetar as outras. Refatoração segura,
                evolução sem medo.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} mb="sm">
            <IconCode
              size={32}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Como Implementar na Prática
          </Title>

          <Text size="lg" c="dimmed">
            A Dependency Rule não é teoria, é prática. Vamos ver como aplicar no
            seu projeto.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                1. Estrutura de Pastas
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Domain (mais interno)</List.Item>
                <List.Item>Services (usa Domain)</List.Item>
                <List.Item>Repositories (usa Domain)</List.Item>
                <List.Item>UI (usa Services/Repositories)</List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                2. Estabeleça Direção
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Dependências só apontam para baixo</List.Item>
                <List.Item>UI pode usar Services</List.Item>
                <List.Item>Services podem usar Repositories</List.Item>
                <List.Item>Repositories podem usar Domain</List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                3. Valide Imports
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Verifique imports em cada arquivo</List.Item>
                <List.Item>Domain não importa UI</List.Item>
                <List.Item>Repository não importa Service</List.Item>
                <List.Item>Use ESLint para detectar</List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                4. Teste Isoladamente
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Teste cada camada separadamente</List.Item>
                <List.Item>Mocks simples para camadas externas</List.Item>
                <List.Item>Domain deve ser testável sem UI</List.Item>
                <List.Item>Services devem ser testáveis sem DB</List.Item>
              </List>
            </Card>
          </SimpleGrid>

          <Alert color="brand" icon={<IconBulb size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Dica:</strong> Comece pequeno. Aplique a regra em um
              módulo, depois expanda. É melhor ter uma parte bem arquitetada do
              que tudo quebrado.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // Benefits Section
  const BenefitsSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} mb="sm">
            <IconShield
              size={32}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Benefícios de Seguir a Dependency Rule
          </Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="green"
                mb="sm"
              >
                <IconCode size={25} />
              </ThemeIcon>
              <Title order={4} size="h5">
                Testes Rápidos
              </Title>
              <Text size="sm" c="dimmed">
                Teste cada camada isoladamente. Mocks simples, testes que rodam
                em milissegundos.
              </Text>
            </Card>

            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="blue"
                mb="sm"
              >
                <IconStack size={25} />
              </ThemeIcon>
              <Title order={4} size="h5">
                Refatoração Segura
              </Title>
              <Text size="sm" c="dimmed">
                Mude uma camada sem afetar as outras. Troque framework, troque
                banco, sem medo.
              </Text>
            </Card>

            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="orange"
                mb="sm"
              >
                <IconShield size={25} />
              </ThemeIcon>
              <Title order={4} size="h5">
                Independência
              </Title>
              <Text size="sm" c="dimmed">
                Seu negócio não depende de tecnologia. Troque React por Vue, seu
                core sobrevive.
              </Text>
            </Card>
          </SimpleGrid>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Resultado:</strong> Código que você consegue manter,
              testar e evoluir sem dor de cabeça. Menos bugs, mais paz,
              refatoração sem medo.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // Summary Section
  const SummarySection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} mb="sm">
            <IconBulb
              size={32}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Resumo
          </Title>

          <Text size="lg" c="dimmed" maw={800}>
            A <strong>Dependency Rule</strong> é a regra mais importante de
            qualquer arquitetura. Se você ignorar essa regra, nenhuma
            arquitetura consegue salvar seu projeto do caos.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" w="100%">
            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                ✅ Lembre-se
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Dependências só apontam para dentro</List.Item>
                <List.Item>Camadas externas podem usar internas</List.Item>
                <List.Item>Camadas internas NUNCA usam externas</List.Item>
                <List.Item>Teste cada camada isoladamente</List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                ❌ Evite
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>UI no domain</List.Item>
                <List.Item>Service no repository</List.Item>
                <List.Item>Framework no domain</List.Item>
                <List.Item>Dependências circulares</List.Item>
              </List>
            </Card>
          </SimpleGrid>

          <Alert
            color="brand"
            icon={<IconShield size={20} />}
            radius="md"
            maw={800}
          >
            <Text size="md" fw={500}>
              <strong>Regra de Ouro:</strong> Se você está na camada de fora,
              você pode usar qualquer coisa das camadas de dentro. Se você está
              na camada de dentro, você NUNCA pode usar nada das camadas de
              fora.
              <strong>Simples assim.</strong>
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // Create tabs
  const tabs = createArchitectureTabs(
    <OverviewSection />,
    <ImplementationSection />,
    <WhyItMattersSection />,
    <BenefitsSection />,
    <SummarySection />
  );

  return <MobileTabs items={tabs} defaultTab="overview" />;
}

DependencyRuleGuide.metadata = {
  title: 'Dependency Rule',
  description:
    'A regra mais importante de qualquer arquitetura. Se você quebrar essa, nenhuma arquitetura salva seu projeto do caos.',
  category: 'guides',
};
