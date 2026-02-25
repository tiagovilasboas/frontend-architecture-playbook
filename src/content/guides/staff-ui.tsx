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
import { IconCheck, IconPuzzle, IconPalette } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function StaffUI() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Staff · Construindo UI
        </Title>
        <Text size="lg" c="dimmed">
          Na seção de UI (componentes, estado, design system), Staff garante
          consistência, acessibilidade e padrões que o time segue. Você define
          como a gente constrói interfaces: design system como guardrail, estado
          previsível (state machines quando fizer sentido) e componentes
          reutilizáveis.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que Staff faz em Construindo UI
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
            <strong>Design system como guardrail:</strong> componentes base,
            tokens, acessibilidade — o time não inventa padrão novo sem alinhar.
          </List.Item>
          <List.Item>
            <strong>Estado e complexidade:</strong> quando exigir state machines
            ou fluxo explícito (wizards, formulários longos).
          </List.Item>
          <List.Item>
            <strong>Component-Driven e Atomic Design:</strong> definir nível de
            granularidade e quando quebrar componente.
          </List.Item>
          <List.Item>
            <strong>Event-Driven na UI:</strong> quando eventos entre módulos
            viram contrato e documentação.
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
            to="/architectures/spa"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconPuzzle size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Single Page Application</Text>
                <Text size="xs" c="dimmed">
                  Base da entrega de UI no cliente.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/patterns/component-driven"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconPuzzle size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Component-Driven Dev</Text>
                <Text size="xs" c="dimmed">
                  Construir como Lego; padrão que o time segue.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/patterns/atomic-design"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconPalette size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Atomic Design</Text>
                <Text size="xs" c="dimmed">
                  Estrutura do design system.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/techniques/state-machines"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconPuzzle size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>State Machines</Text>
                <Text size="xs" c="dimmed">
                  Estado previsível em fluxos complexos.
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

StaffUI.metadata = {
  title: 'Staff · Construindo UI',
  description:
    'Para Staff: design system como guardrail, estado e state machines, Component-Driven e Atomic Design no time.',
};
