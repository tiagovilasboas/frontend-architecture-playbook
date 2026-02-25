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
  Anchor,
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

export default function DependencyRuleGuide() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="md">
      {/* Topo alinhado à esquerda, como nas outras páginas de conteúdo */}
      <section>
        <Title order={1} mb="sm">
          Dependency Rule
        </Title>
        <Text size="lg" c="dimmed">
          Camada de fora pode usar a de dentro; camada de dentro nunca usa a de
          fora.
        </Text>
      </section>

      {/* O que é a Dependency Rule */}
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
            Pense no código como uma <strong>cebola</strong>: camadas em volta
            umas das outras. Seu código tem <strong>camadas</strong>: a tela é a
            camada mais de fora, depois vêm as regras de negócio, quem acessa
            dados, e no centro o núcleo. A regra:{' '}
            <strong>
              camada de fora pode importar a de dentro; camada de dentro nunca
              importa a de fora
            </strong>
            . Essa regra é a chave para todas as arquiteturas. Se você dominar
            ela, pode inclusive criar a sua própria.
          </Text>
          <Text size="sm" c="dimmed">
            A ideia foi formalizada por{' '}
            <strong>Robert C. Martin (Uncle Bob)</strong> no artigo{' '}
            <Anchor
              href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
              target="_blank"
              rel="noopener noreferrer"
              inherit
            >
              The Clean Architecture
            </Anchor>{' '}
            e no livro <strong>Clean Architecture</strong>.
          </Text>

          <Alert color="brand" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Resumo:</strong> Camada de fora pode usar a de dentro.
              Camada de dentro não puxe nada de fora. Só isso.
            </Text>
          </Alert>

          <Alert
            color="blue"
            variant="light"
            icon={<IconStack size={18} />}
            radius="md"
          >
            <Text size="sm" fw={500}>
              A regra fala de <strong>quem pode importar quem</strong> no código
              (a direção dos imports). Não é o fluxo do clique do usuário.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconShield size={18} />} radius="md">
            <Text size="sm" fw={500}>
              <strong>
                A regra de dependência é a chave para todas as arquiteturas.
              </strong>{' '}
              MVC, Clean Architecture, hexagonal, em camadas: todas respeitam a
              mesma ideia. Uncle Bob (Robert C. Martin) formalizou isso em Clean
              Architecture: &quot;Nada em um círculo interno pode saber nada
              sobre algo em um círculo externo.&quot; Se você souber aplicá-la,
              pode até inventar a sua própria arquitetura.
            </Text>
          </Alert>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon
                    size={50}
                    radius="md"
                    variant="light"
                    color="green"
                  >
                    <IconArrowDown size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Pode Depender
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Camada de fora pode usar a de dentro. Exemplo: a tela (fora)
                  importa as regras de negócio (dentro), que importam quem
                  acessa dados (mais dentro), que importa o núcleo (centro).
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon size={50} radius="md" variant="light" color="red">
                    <IconX size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Nunca Depender
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Camada de dentro nunca importa a de fora. O núcleo não importa
                  tela nem regras de negócio. Quem acessa dados não importa
                  regras de negócio. Se importar, tudo fica grudado.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Diagramas ASCII: direção das dependências */}
          <Paper withBorder p="xl" radius="md" mt="lg">
            <Stack gap="xs" mb="md">
              <Title order={3} ta="center">
                Direção das dependências (quem pode importar quem)
              </Title>
              <Text size="sm" c="dimmed" ta="center">
                Como na cebola: seta sempre da camada de fora para a de dentro.
                Nunca da camada de dentro para a de fora.
              </Text>
            </Stack>

            <Stack gap="xl">
              {/* Diagrama CORRETO - ASCII */}
              <Box>
                <Group mb="sm" justify="space-between" align="center">
                  <Badge size="lg" color="green" variant="light">
                    ✅ CORRETO
                  </Badge>
                  <Text size="sm" c="dimmed" fw={500}>
                    Dependências só apontam para dentro
                  </Text>
                </Group>
                <Code
                  block
                  style={{ fontSize: '13px', lineHeight: 1.5 }}
                  mt="xs"
                >
                  {`    ┌─────────────────────────────────────────┐
    │  UI (páginas, componentes)              │  ← mais externo
    │  pode importar: Service, Repo, Domain    │
    └───────────────────┬─────────────────────┘
                        │ depende de
                        ▼
    ┌─────────────────────────────────────────┐
    │  Service (regras de negócio)             │
    │  pode importar: Repository, Domain       │
    └───────────────────┬─────────────────────┘
                        │ depende de
                        ▼
    ┌─────────────────────────────────────────┐
    │  Repository (acesso a dados)             │
    │  pode importar: Domain                   │
    └───────────────────┬─────────────────────┘
                        │ depende de
                        ▼
    ┌─────────────────────────────────────────┐
    │  Domain (entidades, regras puras)        │  ← mais interno
    │  NÃO importa nada de outras camadas     │
    └─────────────────────────────────────────┘`}
                </Code>
              </Box>

              {/* Diagrama INCORRETO - ASCII */}
              <Box>
                <Group mb="sm" justify="space-between" align="center">
                  <Badge size="lg" color="red" variant="light">
                    ❌ INCORRETO
                  </Badge>
                  <Text size="sm" c="dimmed" fw={500}>
                    Dependência invertida ou circular = CAOS
                  </Text>
                </Group>
                <Code
                  block
                  style={{ fontSize: '13px', lineHeight: 1.5 }}
                  mt="xs"
                >
                  {`    ┌─────────────────────────────────────────┐
    │  Domain                                 │
    │  importa UI ou Service  ← ❌ QUEBRADO!   │
    └───────────────────┬─────────────────────┘
                        │ (não pode apontar para fora)
                        ▼
    ┌─────────────────────────────────────────┐
    │  UI / Service                            │
    └─────────────────────────────────────────┘

    Se o Domain começar a importar UI ou Service,
    você perde o controle: fica preso ao framework e
    testar fica bem mais difícil.`}
                </Code>
              </Box>
            </Stack>

            <Alert color="blue" icon={<IconBulb size={16} />} mt="lg">
              <Text size="sm" fw={600} mb={4}>
                💡 Como saber se você está seguindo?
              </Text>
              <List size="sm">
                <List.Item>
                  <strong>Núcleo (domain)</strong>: não importa tela, regras de
                  negócio nem acesso a dados. Só tipos e regras puras.
                </List.Item>
                <List.Item>
                  <strong>Parte que acessa dados (repository)</strong>: só
                  importa o núcleo (e talvez lib de banco).
                </List.Item>
                <List.Item>
                  <strong>Parte das regras de negócio (service)</strong>: pode
                  importar quem acessa dados e o núcleo. Nunca a tela.
                </List.Item>
                <List.Item>
                  <strong>Tela (UI)</strong>: pode importar o que precisar
                  (regras, etc.). Não acessa banco direto.
                </List.Item>
              </List>
            </Alert>

            <Title order={3} mt="xl" mb="sm">
              Exemplos de camadas (a mesma regra)
            </Title>
            <Text size="sm" c="dimmed" mb="md">
              A regra da cebola vale em qualquer modelo de camadas. Três
              exemplos:
            </Text>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Card withBorder p="md" radius="md">
                <Text fw={600} size="sm" mb="xs">
                  MVC (ex.: Angular 1 / AngularJS)
                </Text>
                <Text size="xs" c="dimmed" mb="sm">
                  Model, View, Controller. View (fora) pode usar Controller e
                  Model. Controller (meio) pode usar Model. Model (dentro) não
                  usa View nem Controller.
                </Text>
                <Code block style={{ fontSize: '11px', lineHeight: 1.35 }}>
                  {`View     → Controller, Model
Controller → Model
Model      → NÃO importa os outros`}
                </Code>
              </Card>
              <Card withBorder p="md" radius="md">
                <Text fw={600} size="sm" mb="xs">
                  Camadas clássicas (3-tier)
                </Text>
                <Text size="xs" c="dimmed" mb="sm">
                  Apresentação (fora), Negócio (meio), Dados (dentro). Cada uma
                  só usa a de dentro.
                </Text>
                <Code block style={{ fontSize: '11px', lineHeight: 1.35 }}>
                  {`Apresentação → Negócio, Dados
Negócio      → Dados
Dados       → NÃO importa os outros`}
                </Code>
              </Card>
              <Card withBorder p="md" radius="md">
                <Text fw={600} size="sm" mb="xs">
                  Next.js (exemplo simples)
                </Text>
                <Text size="xs" c="dimmed" mb="sm">
                  app/ e components/ são a tela (fora). lib/services é regra de
                  negócio. lib/repositories acessa dados. lib/domain é o núcleo.
                  Imports sempre para dentro.
                </Text>
                <Code block style={{ fontSize: '10px', lineHeight: 1.3 }}>
                  {`app/
  page.tsx        → importa de lib/services
components/
  UserCard.tsx    → importa de lib/services
lib/
  services/       → importa de lib/repositories, lib/domain
  repositories/   → importa de lib/domain
  domain/         → NÃO importa app, components, lib`}
                </Code>
              </Card>
            </SimpleGrid>
            <Text size="xs" c="dimmed" mt="sm">
              Em todos os casos: camada de fora pode usar a de dentro; camada de
              dentro nunca usa a de fora.
            </Text>
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
            Por que essa regra importa tanto?
          </Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon
                    size={50}
                    radius="md"
                    variant="light"
                    color="green"
                  >
                    <IconShield size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Independência
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Seu núcleo de negócio não fica amarrado a React, Vue ou banco.
                  Um dia você troca a tela ou o banco e o que importa continua
                  intacto.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconCode size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Testar fica simples
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Você testa cada pedaço isolado. Menos mock, menos dor de
                  cabeça, e quando quebrar algo, você acha o culpado rápido.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon
                    size={50}
                    radius="md"
                    variant="light"
                    color="orange"
                  >
                    <IconStack size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Flexibilidade
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Quer mudar uma camada? Você muda sem derrubar o resto.
                  Refatorar deixa de ser um jogo de dominó.
                </Text>
              </Stack>
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
            No dia a dia, a regra aparece na{' '}
            <strong>estrutura de pastas</strong> e em{' '}
            <strong>quem importa quem</strong>. Abaixo: como organizar e como
            checar se está certo.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="lg">
            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                1. Estrutura de Pastas (ASCII)
              </Title>
              <Code block style={{ fontSize: '12px', lineHeight: 1.4 }} mb="sm">
                {`src/
├── domain/           ← mais interno (não importa nada de fora)
│   ├── entities/
│   └── rules/
├── repositories/    ← importa só domain
│   └── user.repository.ts
├── services/        ← importa domain + repositories
│   └── user.service.ts
└── ui/               ← mais externo (pode importar tudo)
    ├── components/
    └── pages/`}
              </Code>
              <Text size="xs" c="dimmed" mt="xs">
                Como na cebola: tela (fora) importa regras de negócio (dentro),
                que importa quem acessa dados (mais dentro), que importa o
                núcleo (centro). Sempre para dentro.
              </Text>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                2. Mantenha a direção
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  Imports sempre de fora para dentro (como na cebola)
                </List.Item>
                <List.Item>
                  Camada de fora (tela) pode usar a de dentro (regras, dados,
                  núcleo)
                </List.Item>
                <List.Item>Camada de dentro nunca usa a de fora</List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                3. Valide Imports (exemplo ASCII de fluxo)
              </Title>
              <Code
                block
                style={{ fontSize: '11px', lineHeight: 1.35 }}
                mb="sm"
              >
                {`✅ CORRETO (imports só para dentro):

  domain/user.ts
  → export type User; export createUser();   (zero imports de outras camadas)

  repository/user.repository.ts
  → import { User, createUser } from '../domain/user';   ✅

  service/user.service.ts
  → import { User } from '../domain/user';
  → import { findUserById } from '../repository/...';  ✅

  ui/UserProfile.tsx
  → import { useUserService } from '../service/...';   ✅

❌ INCORRETO:

  domain/user.ts
  → import { Button } from '../ui/...';      ❌
  → import { getUserById } from '../service/...';  ❌

  repository/user.repository.ts
  → import { getUserById } from '../service/...';  ❌`}
              </Code>
              <List size="sm" spacing="xs" mt="sm">
                <List.Item>
                  Núcleo: nenhum import de tela, regras de negócio ou acesso a
                  dados
                </List.Item>
                <List.Item>Quem acessa dados: só importa o núcleo</List.Item>
                <List.Item>
                  Vale usar ESLint (ex.: eslint-plugin-import) para pegar
                  deslizes
                </List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                4. Teste cada pedaço sozinho
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  Teste cada parte separada (núcleo, regras de negócio, etc.)
                </List.Item>
                <List.Item>Use mocks leves para o que está “fora”</List.Item>
                <List.Item>O núcleo deve rodar sem tela e sem banco</List.Item>
                <List.Item>
                  As regras de negócio devem rodar sem banco (simulando quem
                  acessa dados)
                </List.Item>
              </List>
            </Card>
          </SimpleGrid>

          <Alert color="brand" icon={<IconBulb size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Dica:</strong> Não precisa refatorar tudo de uma vez.
              Escolha um módulo, aplique a regra ali, e vá expandindo. Um pedaço
              bem feito vale mais que o projeto todo entrelaçado.
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
            O que você ganha ao seguir a regra
          </Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon
                    size={50}
                    radius="md"
                    variant="light"
                    color="green"
                  >
                    <IconCode size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Testes rápidos
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Cada parte você testa sozinha. Menos mock, testes que rodam em
                  milissegundos e você dorme tranquilo.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconStack size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Refatorar sem medo
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  Quer trocar framework ou banco? Você troca sem derrubar tudo.
                  Uma parte muda, o resto continua estável.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="md" radius="md">
              <Stack gap="md">
                <Group gap="sm" wrap="nowrap" align="flex-start">
                  <ThemeIcon
                    size={50}
                    radius="md"
                    variant="light"
                    color="orange"
                  >
                    <IconShield size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5" style={{ marginTop: 0 }}>
                    Seu core livre
                  </Title>
                </Group>
                <Text size="sm" c="dimmed">
                  A lógica que importa não fica presa a React, Vue ou banco.
                  Amanhã você troca a ferramenta e o núcleo segue igual.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              No fim das contas: código que você consegue manter, testar e
              evoluir sem passar raiva. Menos bug, mais clareza, refatoração sem
              susto.
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
            Código como uma cebola:{' '}
            <strong>
              camada de fora pode usar a de dentro; camada de dentro nunca usa a
              de fora
            </strong>
            . Seguir isso deixa o código previsível. Ignorar vira bagunça.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" w="100%">
            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                ✅ Leve na cabeça
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  Camada de fora pode usar a de dentro; de dentro nunca usa a de
                  fora
                </List.Item>
                <List.Item>Como uma cebola: sempre para dentro</List.Item>
                <List.Item>Teste cada camada sozinha</List.Item>
              </List>
            </Card>

            <Card withBorder p="md" radius="md">
              <Title order={4} size="h5" mb="md">
                ❌ Evite
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  Importar tela ou regras de negócio no núcleo
                </List.Item>
                <List.Item>
                  Regras de negócio dentro de quem acessa dados
                </List.Item>
                <List.Item>Framework ou lib de tela no núcleo</List.Item>
                <List.Item>Ciclos: A importa B, B importa A</List.Item>
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
              Regra de ouro:{' '}
              <strong>
                camada de fora pode usar a de dentro; camada de dentro nunca usa
                a de fora
              </strong>
              . Como uma cebola.
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
    'Código como uma cebola: camada de fora pode usar a de dentro; camada de dentro nunca usa a de fora. Simples assim.',
  category: 'guides',
};
