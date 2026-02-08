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
  Timeline,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconArrowRight,
  IconRocket,
  IconX,
} from '@tabler/icons-react';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';
import GuideNavigation from '../../components/GuideNavigation';

export default function MigrationStrategiesGuide() {
  const OverviewSection = () => (
    <Stack gap="md">
      <section>
        <Title order={1} mb="sm">
          Estratégias de Migração
        </Title>
        <Text size="lg" c="dimmed">
          Como evoluir uma arquitetura frontend sem parar tudo e reescrever do
          zero.
        </Text>
      </section>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>
            <IconBulb
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Por que migração gradual?
          </Title>

          <Text>
            A tentação de &ldquo;reescrever tudo do zero&rdquo; é forte, mas na
            prática a maioria dos big rewrites falha. O negócio não para
            enquanto o time reescreve, features novas continuam chegando, e o
            novo sistema precisa atingir paridade antes de substituir o antigo.
          </Text>

          <Alert color="red" icon={<IconAlertTriangle size={16} />}>
            <Text size="sm">
              <strong>A regra de ouro:</strong> Se a migração demora mais de 3
              meses, ela provavelmente nunca termina. Prefira estratégias
              incrementais que entregam valor a cada sprint.
            </Text>
          </Alert>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder p="md">
              <Group gap="xs" mb="xs">
                <ThemeIcon size="md" variant="light" color="red">
                  <IconX size={14} />
                </ThemeIcon>
                <Text fw={600} size="sm">Big Rewrite (evite)</Text>
              </Group>
              <List size="sm" spacing="xs">
                <List.Item>Meses sem entregar valor</List.Item>
                <List.Item>Feature parity é um alvo móvel</List.Item>
                <List.Item>Risco alto de cancelamento</List.Item>
                <List.Item>Time dividido: manutenção + novo</List.Item>
              </List>
            </Card>

            <Card withBorder p="md">
              <Group gap="xs" mb="xs">
                <ThemeIcon size="md" variant="light" color="green">
                  <IconCheck size={14} />
                </ThemeIcon>
                <Text fw={600} size="sm">Migração Gradual (prefira)</Text>
              </Group>
              <List size="sm" spacing="xs">
                <List.Item>Valor entregue a cada sprint</List.Item>
                <List.Item>Risco isolado por componente</List.Item>
                <List.Item>Rollback fácil se algo falhar</List.Item>
                <List.Item>Time aprende enquanto migra</List.Item>
              </List>
            </Card>
          </SimpleGrid>
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
            Strangler Fig Pattern
          </Title>

          <Text>
            Inspirado na figueira estranguladora: o novo sistema cresce{' '}
            <strong>ao redor</strong> do antigo, substituindo peça por peça até
            que o legado não exista mais. É a estratégia mais segura para
            migrações grandes.
          </Text>

          <Timeline active={4} bulletSize={24} lineWidth={2}>
            <Timeline.Item title="1. Identifique a fronteira">
              <Text size="sm" c="dimmed">
                Encontre um boundary claro entre o sistema antigo e o novo.
                Pode ser uma rota, um componente, ou uma feature inteira.
              </Text>
            </Timeline.Item>
            <Timeline.Item title="2. Crie um proxy/router">
              <Text size="sm" c="dimmed">
                Um router que direciona tráfego: rotas migradas vão para o
                novo sistema, o resto continua no antigo.
              </Text>
            </Timeline.Item>
            <Timeline.Item title="3. Migre uma rota por vez">
              <Text size="sm" c="dimmed">
                Comece pela rota de menor risco. Valide em produção. Repita.
              </Text>
            </Timeline.Item>
            <Timeline.Item title="4. Expanda gradualmente">
              <Text size="sm" c="dimmed">
                A cada sprint, migre mais rotas. O sistema antigo encolhe
                naturalmente.
              </Text>
            </Timeline.Item>
            <Timeline.Item title="5. Remova o legado">
              <Text size="sm" c="dimmed">
                Quando a última rota migrar, delete o código antigo.
              </Text>
            </Timeline.Item>
          </Timeline>

          <Code block>{`// Exemplo: Router proxy para strangler fig
// O novo app Next.js serve rotas migradas
// O legado CRA serve o resto via iframe ou redirect

// next.config.js
module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          // Rotas NÃO migradas → proxy para app legado
          source: '/:path*',
          destination: 'https://legacy-app.internal/:path*',
        },
      ],
    };
  },
};

// Rotas migradas ficam em pages/ normalmente
// /dashboard → Next.js (migrado)
// /settings → Legado (via rewrite)
// /profile  → Next.js (migrado)
// /admin    → Legado (via rewrite)`}</Code>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>
            <IconArrowRight
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Parallel Run
          </Title>

          <Text>
            Ambos os sistemas rodam simultaneamente em produção. O antigo serve
            o usuário, o novo roda em &ldquo;shadow mode&rdquo; processando as
            mesmas requests. Compare resultados para validar antes de trocar.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder p="md">
              <Text fw={600} mb="xs">Quando usar</Text>
              <List size="sm" spacing="xs">
                <List.Item>Migração de lógica de negócio crítica</List.Item>
                <List.Item>Sistema financeiro ou de pagamento</List.Item>
                <List.Item>Quando erros são inaceitáveis</List.Item>
              </List>
            </Card>

            <Card withBorder p="md">
              <Text fw={600} mb="xs">Trade-offs</Text>
              <List size="sm" spacing="xs">
                <List.Item>Dobro de infra durante a migração</List.Item>
                <List.Item>Complexidade de comparação de outputs</List.Item>
                <List.Item>Tempo limitado (custo operacional alto)</List.Item>
              </List>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>
            <IconRocket
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Branch by Abstraction
          </Title>

          <Text>
            Crie uma <strong>abstração</strong> (interface/adapter) entre o
            código que consome e o código que será substituído. Troque a
            implementação por trás da abstração sem afetar os consumidores.
          </Text>

          <Code block>{`// Antes: código acoplado ao fetch direto
const users = await fetch('/api/users').then(r => r.json());

// Step 1: Crie abstração
interface UserRepository {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User>;
}

// Step 2: Implemente com o código atual (legado)
class FetchUserRepository implements UserRepository {
  async getAll() {
    return fetch('/api/users').then(r => r.json());
  }
  async getById(id: string) {
    return fetch(\`/api/users/\${id}\`).then(r => r.json());
  }
}

// Step 3: Implemente a nova versão
class GraphQLUserRepository implements UserRepository {
  async getAll() {
    const { data } = await client.query({ query: GET_USERS });
    return data.users;
  }
  async getById(id: string) {
    const { data } = await client.query({
      query: GET_USER,
      variables: { id },
    });
    return data.user;
  }
}

// Step 4: Troque via feature flag
const userRepo: UserRepository = featureFlag('graphql-users')
  ? new GraphQLUserRepository()
  : new FetchUserRepository();`}</Code>

          <Alert color="blue" icon={<IconBulb size={16} />}>
            <Text size="sm">
              Combine <strong>Branch by Abstraction</strong> com{' '}
              <strong>Feature Flags</strong> para controlar a migração em
              produção sem deploy. Rollback instantâneo se algo falhar.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  const ExamplesSection = () => (
    <Stack gap="md">
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>Checklist de migração</Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder p="md">
              <Text fw={600} mb="xs">Antes de começar</Text>
              <List size="sm" spacing="xs">
                <List.Item>Métricas do sistema atual documentadas (baseline)</List.Item>
                <List.Item>Critérios de sucesso definidos</List.Item>
                <List.Item>ADR documentando a decisão de migrar</List.Item>
                <List.Item>Rollback plan testado</List.Item>
                <List.Item>Feature flags configurados</List.Item>
              </List>
            </Card>

            <Card withBorder p="md">
              <Text fw={600} mb="xs">Durante a migração</Text>
              <List size="sm" spacing="xs">
                <List.Item>Uma rota/componente por vez</List.Item>
                <List.Item>Cada passo validado em produção</List.Item>
                <List.Item>Métricas comparadas com baseline</List.Item>
                <List.Item>Zero downtime (ambos sistemas coexistem)</List.Item>
                <List.Item>Código legado removido após validação</List.Item>
              </List>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>Qual estratégia usar?</Title>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            <Card withBorder p="md">
              <Badge color="green" variant="light" mb="xs">Strangler Fig</Badge>
              <Text size="sm" fw={600} mb="xs">Melhor para:</Text>
              <Text size="sm" c="dimmed">
                Migração de framework (CRA → Next.js, Angular → React).
                Migração de rotas inteiras. Quando o boundary é claro.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Badge color="blue" variant="light" mb="xs">Branch by Abstraction</Badge>
              <Text size="sm" fw={600} mb="xs">Melhor para:</Text>
              <Text size="sm" c="dimmed">
                Troca de biblioteca (REST → GraphQL, Redux → Zustand).
                Quando a interface pública não muda. Migração interna.
              </Text>
            </Card>

            <Card withBorder p="md">
              <Badge color="violet" variant="light" mb="xs">Parallel Run</Badge>
              <Text size="sm" fw={600} mb="xs">Melhor para:</Text>
              <Text size="sm" c="dimmed">
                Sistemas críticos (pagamento, auth). Quando erros são
                inaceitáveis. Validação antes de trocar.
              </Text>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2}>Referências</Title>
          <List spacing="xs" size="sm">
            <List.Item>
              <a
                href="https://martinfowler.com/bliki/StranglerFigApplication.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strangler Fig Application - Martin Fowler
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://martinfowler.com/bliki/BranchByAbstraction.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Branch By Abstraction - Martin Fowler
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://martinfowler.com/bliki/ParallelChange.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Parallel Change (expand-contract) - Martin Fowler
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://shopify.engineering/remixing-shopifys-admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Remixing Shopify's Admin - Strangler fig em produção real
              </a>
            </List.Item>
          </List>
        </Stack>
      </Paper>

      <GuideNavigation currentGuide="migration-strategies" />
    </Stack>
  );

  const tabs = createArchitectureTabs(
    <OverviewSection />,
    <ImplementationSection />,
    <ExamplesSection />
  );

  return <MobileTabs items={tabs} defaultTab="overview" />;
}

MigrationStrategiesGuide.metadata = {
  title: 'Estratégias de Migração',
  description:
    'Strangler Fig, Branch by Abstraction, Parallel Run: como migrar arquitetura frontend sem big rewrite. Com exemplos de código e checklist.',
};
