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
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconFileText,
  IconRocket,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';
import GuideNavigation from '../../components/GuideNavigation';

export default function ADRGuide() {
  const OverviewSection = () => (
    <Stack gap="md">
      <section>
        <Title order={1} mb="sm">
          ADR - Architecture Decision Records
        </Title>
        <Text size="lg" c="dimmed">
          Documente decisões arquiteturais para que o time futuro entenda o
          porquê, não só o quê.
        </Text>
      </section>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} mb="sm">
            <IconBulb
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            O que é um ADR?
          </Title>
          <Text>
            Um <strong>Architecture Decision Record</strong> é um documento
            curto que captura uma decisão arquitetural importante junto com seu{' '}
            <strong>contexto</strong>, <strong>alternativas consideradas</strong>
            , e <strong>consequências</strong>. O objetivo é criar um registro
            histórico que explica <em>por que</em> a decisão foi tomada, não
            apenas o que foi decidido.
          </Text>

          <Alert color="blue" icon={<IconBulb size={16} />}>
            <Text size="sm">
              <strong>Por que isso importa?</strong> 6 meses depois, ninguém
              lembra por que escolheram Redux ao invés de Zustand. O ADR
              preserva o contexto da decisão para o time futuro (que pode ser
              você mesmo).
            </Text>
          </Alert>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder p="md">
              <Group gap="xs" mb="xs">
                <ThemeIcon size="md" variant="light" color="green">
                  <IconCheck size={14} />
                </ThemeIcon>
                <Text fw={600} size="sm">
                  Quando usar ADR
                </Text>
              </Group>
              <List size="sm" spacing="xs">
                <List.Item>Escolha de framework ou biblioteca</List.Item>
                <List.Item>Mudança de padrão arquitetural</List.Item>
                <List.Item>Adoção de nova ferramenta de build</List.Item>
                <List.Item>Estratégia de deploy ou CI/CD</List.Item>
                <List.Item>Decisões de breaking change</List.Item>
              </List>
            </Card>

            <Card withBorder p="md">
              <Group gap="xs" mb="xs">
                <ThemeIcon size="md" variant="light" color="red">
                  <IconAlertTriangle size={14} />
                </ThemeIcon>
                <Text fw={600} size="sm">
                  Quando NÃO usar
                </Text>
              </Group>
              <List size="sm" spacing="xs">
                <List.Item>Escolha de nome de variável</List.Item>
                <List.Item>Bug fix simples</List.Item>
                <List.Item>Refactoring sem mudança de interface</List.Item>
                <List.Item>Atualização de patch version</List.Item>
                <List.Item>Decisões facilmente reversíveis</List.Item>
              </List>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>
            <IconFileText
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Anatomia de um ADR
          </Title>

          <Text>
            Um ADR segue uma estrutura fixa e curta. A regra de ouro:{' '}
            <strong>se não cabe em 1-2 páginas, está longo demais</strong>.
          </Text>

          <Card withBorder p="md">
            <Stack gap="xs">
              <Badge color="blue" variant="light">
                Template
              </Badge>
              <Text fw={600}>Título: ADR-001 - Adotar Zustand para state management</Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  <strong>Status:</strong> Aceito | Proposto | Depreciado | Substituído por ADR-XXX
                </List.Item>
                <List.Item>
                  <strong>Data:</strong> 2025-02-08
                </List.Item>
                <List.Item>
                  <strong>Contexto:</strong> O app tem estado global espalhado em 15 contextos React. Re-renders desnecessários impactam performance. Precisamos de state management centralizado.
                </List.Item>
                <List.Item>
                  <strong>Decisão:</strong> Adotar Zustand como state manager global.
                </List.Item>
                <List.Item>
                  <strong>Alternativas:</strong> Redux Toolkit (mais boilerplate, overkill para nosso caso), Jotai (atômico, mas time não tem experiência), Context API (causando os re-renders atuais).
                </List.Item>
                <List.Item>
                  <strong>Consequências:</strong> Bundle +2KB gzip. Time precisa aprender selectors e subscribeWithSelector. Migração gradual possível (coexiste com Context). Em 3 meses avaliar se reduziu re-renders em métricas reais.
                </List.Item>
              </List>
            </Stack>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  const ImplementationSection = () => (
    <Stack gap="md">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>
            <IconCode
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Como implementar ADRs no time
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder p="md">
              <Text fw={600} mb="xs">1. Onde guardar</Text>
              <Code block>{`docs/
└── adr/
    ├── 001-zustand-state-management.md
    ├── 002-remix-migration.md
    ├── 003-monorepo-turborepo.md
    └── template.md`}</Code>
              <Text size="sm" c="dimmed" mt="xs">
                Versionado junto com o código no mesmo repo.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Text fw={600} mb="xs">2. Processo</Text>
              <List size="sm" spacing="xs">
                <List.Item>
                  <strong>Propor:</strong> Abra um PR com o ADR em status "Proposto"
                </List.Item>
                <List.Item>
                  <strong>Discutir:</strong> Review no PR (como qualquer código)
                </List.Item>
                <List.Item>
                  <strong>Aceitar:</strong> Merge muda status para "Aceito"
                </List.Item>
                <List.Item>
                  <strong>Evoluir:</strong> Nunca delete. Marque como "Substituído por ADR-XXX"
                </List.Item>
              </List>
            </Card>
          </SimpleGrid>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />}>
            <Text size="sm">
              <strong>Armadilha comum:</strong> ADRs que viram documentação
              extensa. Se precisou de mais de 2 páginas, provavelmente é um RFC
              (Request for Comments), não um ADR. ADR é decisão, não design doc.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>Exemplos reais de ADRs em frontend</Title>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            <Card withBorder p="md">
              <Badge color="green" variant="light" mb="xs">Aceito</Badge>
              <Text fw={600} size="sm">ADR-001: Migrar de CRA para Vite</Text>
              <Text size="xs" c="dimmed" mt="xs">
                Contexto: build de 45s, HMR lento. Vite reduz para ~3s. Trade-off: config manual de proxy e env vars.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Badge color="green" variant="light" mb="xs">Aceito</Badge>
              <Text fw={600} size="sm">ADR-002: Adotar TanStack Query</Text>
              <Text size="xs" c="dimmed" mt="xs">
                Contexto: useEffect + useState para fetch em 40+ componentes. Cache manual quebrava. TQ resolve cache, retry, e invalidation.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Badge color="orange" variant="light" mb="xs">Substituído</Badge>
              <Text fw={600} size="sm">ADR-003: Redux para state global</Text>
              <Text size="xs" c="dimmed" mt="xs">
                Substituído por ADR-007: migrar para Zustand. Contexto mudou - app menor que o previsto, Redux era overkill.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>
    </Stack>
  );

  const ExamplesSection = () => (
    <Stack gap="md">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>
            <IconCode
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Template Markdown completo
          </Title>

          <Code block>{`# ADR-{NUMBER}: {TÍTULO DA DECISÃO}

## Status
Proposto | Aceito | Depreciado | Substituído por ADR-XXX

## Data
YYYY-MM-DD

## Contexto
Descreva o problema ou necessidade que motivou esta decisão.
Inclua constraints técnicos e de negócio relevantes.

## Decisão
O que foi decidido. Seja específico.

## Alternativas Consideradas

### Opção A: {nome}
- Prós: ...
- Contras: ...

### Opção B: {nome}
- Prós: ...
- Contras: ...

## Consequências

### Positivas
- ...

### Negativas
- ...

### Riscos
- ...

## Referências
- Links para docs, artigos, ou discussões relevantes`}</Code>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>Referências</Title>
          <List spacing="xs" size="sm">
            <List.Item>
              <a
                href="https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documenting Architecture Decisions - Michael Nygard (artigo original)
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://adr.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADR GitHub Organization - Ferramentas e templates
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://github.com/joelparkerhenderson/architecture-decision-record"
                target="_blank"
                rel="noopener noreferrer"
              >
                Architecture Decision Record collection - Joel Parker Henderson
              </a>
            </List.Item>
          </List>
        </Stack>
      </Paper>

      <GuideNavigation currentGuide="adr" />
    </Stack>
  );

  const tabs = createArchitectureTabs(
    <OverviewSection />,
    <ImplementationSection />,
    <ExamplesSection />
  );

  return <MobileTabs items={tabs} defaultTab="overview" />;
}

ADRGuide.metadata = {
  title: 'ADR - Architecture Decision Records',
  description:
    'Como documentar decisões arquiteturais com ADRs. Template, processo, e exemplos reais para times frontend.',
};
