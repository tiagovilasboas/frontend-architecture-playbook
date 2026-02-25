import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  List,
  ThemeIcon,
  Group,
  Anchor,
  Card,
  SimpleGrid,
} from '@mantine/core';
import {
  IconCheck,
  IconTrendingUp,
  IconScale,
  IconRoute,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function StaffEscala() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Staff · Escala & Times
        </Title>
        <Text size="lg" c="dimmed">
          Em escala (monorepo, micro-frontends, BFF, headless, feature flags),
          Staff decide com evidência: casos reais, comparação de arquiteturas e
          estratégias de migração. Você leva recomendação pro time e pro ADR,
          não opinião.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que Staff faz em Escala
        </Title>
        <List
          spacing="sm"
          icon={
            <ThemeIcon size={20} radius="xl" color="brand">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <strong>Decisão com caso e fonte:</strong> micro-frontends,
            monorepo, BFF — usar os 19 casos e a comparação de arquiteturas. "A
            Spotify fez X; o artigo diz Y." Levar link do artigo na reunião.
          </List.Item>
          <List.Item>
            <strong>Comparação e trade-offs:</strong> quando usar monorepo vs
            multi-repo, micro-frontends vs módulos, BFF vs API direta. O guia de
            Comparação e o Decision Wizard ajudam; você traduz pro contexto do
            time.
          </List.Item>
          <List.Item>
            <strong>Migração sem big bang:</strong> Strangler, branch by
            abstraction. Definir estratégia e documentar no ADR. O time não pode
            ficar preso em rewrite infinito.
          </List.Item>
          <List.Item>
            <strong>Feature flags e headless:</strong> quando são solução de
            escala (rollout, A/B, múltiplos canais) e como guardrail de deploy e
            negócio.
          </List.Item>
        </List>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          Conteúdo do playbook nesta seção
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/cases"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>19 Casos Reais</Text>
                <Text size="xs" c="dimmed">
                  Evidência com link do artigo. Base pra decisão de escala.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/architecture-comparison"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconScale size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Comparação de Arquiteturas</Text>
                <Text size="xs" c="dimmed">
                  Quando usar cada uma, prós e contras.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/how-to-choose"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconScale size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Decision Wizard</Text>
                <Text size="xs" c="dimmed">
                  Recomendação por contexto; ponto de partida pro ADR.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/migration-strategies"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconRoute size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Estratégias de Migração</Text>
                <Text size="xs" c="dimmed">
                  Strangler, branch by abstraction — sem big bang.
                </Text>
              </div>
            </Group>
          </Card>
        </SimpleGrid>
      </Paper>

      <Anchor component={Link} to="/guides/staff" size="sm" fw={600}>
        ← Voltar ao hub Para Staff
      </Anchor>
      <GuideNavigation currentGuide="staff" />
    </Stack>
  );
}

StaffEscala.metadata = {
  title: 'Staff · Escala & Times',
  description:
    'Para Staff: decisão de escala com evidência (casos, comparação), migração incremental e quando usar cada arquitetura.',
};
