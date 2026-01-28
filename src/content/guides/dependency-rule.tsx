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
  Code,
  Group,
  Badge,
  Box,
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
import GuideNavigation from '../../components/GuideNavigation';
import GuideCTA from '../../components/GuideCTA';
import DependencyRuleDiagram from '../../components/diagrams/DependencyRuleDiagram';

export default function DependencyRuleGuide() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="md">
      {/* Hero Section */}
      <section>
        <Stack align="center" ta="center" mb="md">
          <Title order={1} fw={800} size="3.5rem" mb="sm">
            Dependency Rule
          </Title>
          <Text size="xl" c="dimmed" mb="md" maw={800}>
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

          <Alert
            color="blue"
            variant="light"
            icon={<IconStack size={18} />}
            radius="md"
          >
            <Text size="sm" fw={500}>
              <strong>Dependency Rule = camadas de arquitetura.</strong> Trata
              de <strong>quem pode importar quem</strong> (direção das
              dependências). Não confunda com fluxograma de uma requisição —
              aqui o foco é a <strong>estrutura das camadas</strong> e os
              imports entre elas.
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

          {/* Diagrama Visual das Camadas - Canvas */}
          <Paper withBorder p="xl" radius="md" mt="lg">
            <Stack gap="xs" mb="md">
              <Title order={3} ta="center">
                Camadas de arquitetura: direção das dependências
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                As setas indicam <strong>quem pode depender de quem</strong>{' '}
                (imports), não o fluxo de execução de uma requisição.
              </Text>
            </Stack>

            <Stack gap="xl">
              {/* Diagrama Correto - Canvas (full width) */}
              <div>
                <Group mb="sm" justify="space-between" align="center">
                  <Badge size="lg" color="green" variant="light">
                    ✅ CORRETO
                  </Badge>
                  <Text size="sm" c="dimmed" fw={500}>
                    Dependências apontam para dentro (camadas internas)
                  </Text>
                </Group>
                <Box
                  style={{
                    marginLeft: 'calc(-1 * var(--mantine-spacing-xl))',
                    marginRight: 'calc(-1 * var(--mantine-spacing-xl))',
                    width: 'calc(100% + 2 * var(--mantine-spacing-xl))',
                  }}
                >
                  <DependencyRuleDiagram variant="correct" height={400} />
                </Box>
              </div>

              {/* Diagrama Incorreto - Canvas (full width) */}
              <div>
                <Group mb="sm" justify="space-between" align="center">
                  <Badge size="lg" color="red" variant="light">
                    ❌ INCORRETO
                  </Badge>
                  <Text size="sm" c="dimmed" fw={500}>
                    Dependências circulares ou invertidas = CAOS
                  </Text>
                </Group>
                <Box
                  style={{
                    marginLeft: 'calc(-1 * var(--mantine-spacing-xl))',
                    marginRight: 'calc(-1 * var(--mantine-spacing-xl))',
                    width: 'calc(100% + 2 * var(--mantine-spacing-xl))',
                  }}
                >
                  <DependencyRuleDiagram variant="incorrect" height={400} />
                </Box>
              </div>
            </Stack>

            <Alert color="blue" icon={<IconBulb size={16} />} mt="lg">
              <Text size="sm" fw={600} mb={4}>
                💡 Como identificar se está correto?
              </Text>
              <List size="sm">
                <List.Item>
                  <strong>Domain</strong> não tem imports de UI, Services ou
                  Repositories
                </List.Item>
                <List.Item>
                  <strong>Repository</strong> só importa Domain
                </List.Item>
                <List.Item>
                  <strong>Service</strong> pode importar Repository e Domain,
                  mas nunca UI
                </List.Item>
                <List.Item>
                  <strong>UI</strong> pode importar qualquer coisa, mas nunca
                  Database diretamente
                </List.Item>
              </List>
            </Alert>
          </Paper>
        </Stack>
      </Paper>
    </Stack>
  );

  // Why it matters Section
  const WhyItMattersSection = () => (
    <Stack gap="md">
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
    <Stack gap="md">
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
            A Dependency Rule aparece na prática na{' '}
            <strong>estrutura de pastas</strong> e nos <strong>imports</strong>{' '}
            entre camadas. Abaixo: como organizar e como validar.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="lg">
            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                1. Estrutura de Pastas
              </Title>
              <Code block style={{ fontSize: '11px' }} mb="sm">
                {`src/
├── domain/          ← Mais interno (não depende de nada)
│   ├── entities/
│   └── rules/
├── repositories/    ← Depende de domain
│   └── user.repository.ts
├── services/        ← Depende de domain + repositories
│   └── user.service.ts
└── ui/              ← Mais externo (pode usar tudo)
    ├── components/
    └── pages/`}
              </Code>
              <List size="sm" spacing="xs" mt="sm">
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
              <Code block style={{ fontSize: '11px' }} mb="sm">
                {`✅ CORRETO:
// domain/user.ts
export type User = { id: string; name: string };  // Sem imports externos!
export function createUser(data: any): User { ... }
export function getDisplayName(user: User): string { ... }

// repository/user.repository.ts
import { User, createUser } from '../domain/user';  // ✅ OK

// service/user.service.ts
import { User } from '../domain/user';
import { findUserById } from '../repository/...';  // ✅ OK

// ui/components/UserProfile.tsx
import { useUserService } from '../service/...';  // ✅ OK

❌ INCORRETO:
// domain/user.ts
import { Button } from '../ui/components';  // ❌ QUEBRADO!
import { getUserById } from '../service/...';  // ❌ QUEBRADO!

// repository/user.repository.ts
import { getUserById } from '../service/...';  // ❌ QUEBRADO!`}
              </Code>
              <List size="sm" spacing="xs" mt="sm">
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
    <Stack gap="md">
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
    <Stack gap="md">
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

  return (
    <Stack gap="xl">
      <MobileTabs items={tabs} defaultTab="overview" />
      <GuideNavigation currentGuide="dependency-rule" />
      <GuideCTA currentGuide="dependency-rule" />
    </Stack>
  );
}

DependencyRuleGuide.metadata = {
  title: 'Dependency Rule',
  description:
    'A regra mais importante de qualquer arquitetura. Se você quebrar essa, nenhuma arquitetura salva seu projeto do caos.',
  category: 'guides',
};
