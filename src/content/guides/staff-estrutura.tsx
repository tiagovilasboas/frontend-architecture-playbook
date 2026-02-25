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
  IconBuilding,
  IconFileText,
  IconLock,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function StaffEstrutura() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Staff · Estrutura de Código
        </Title>
        <Text size="lg" c="dimmed">
          Na estrutura (Clean Architecture, camadas, hexagonal, repositórios,
          segurança), Staff define como o código é organizado e onde cada coisa
          vive. Você é o detentor dos guardrails de camadas e dependências.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que Staff faz em Estrutura
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
            <strong>Guardrails de camadas:</strong> dependências só apontam pra
            dentro (Dependency Rule). Nenhum atalho que quebra a arquitetura sem
            ADR.
          </List.Item>
          <List.Item>
            <strong>Quando documentar no ADR:</strong> mudança de estrutura
            (nova camada, inversão de dependência, hexagonal) vira ADR com
            contexto e alternativas.
          </List.Item>
          <List.Item>
            <strong>Repositórios e segurança:</strong> padrões de acesso a dados
            e segurança como critério de revisão e guardrail.
          </List.Item>
          <List.Item>
            <strong>Revisar além da feature:</strong> em code review, checar se
            respeita a estrutura e não introduz dependência proibida.
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
            to="/architectures/clean-architecture"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconBuilding size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Clean Architecture</Text>
                <Text size="xs" c="dimmed">
                  Separação de responsabilidades e dependências.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/architectures/layered"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconBuilding size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Layered Architecture</Text>
                <Text size="xs" c="dimmed">
                  Camadas e fluxo de dependência.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/architectures/hexagonal"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconBuilding size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Hexagonal</Text>
                <Text size="xs" c="dimmed">
                  Ports and Adapters no front.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/adr"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconFileText size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>ADR</Text>
                <Text size="xs" c="dimmed">
                  Documentar decisão de estrutura.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/patterns/security"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconLock size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Security Patterns</Text>
                <Text size="xs" c="dimmed">
                  Padrões que viram critério de revisão.
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

StaffEstrutura.metadata = {
  title: 'Staff · Estrutura de Código',
  description:
    'Para Staff: guardrails de camadas, quando documentar no ADR, revisão de estrutura e segurança.',
};
