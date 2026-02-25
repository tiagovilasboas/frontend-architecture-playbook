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
  IconCode,
  IconLock,
  IconFileText,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function StaffFundamentals() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Staff · Fundamentos
        </Title>
        <Text size="lg" c="dimmed">
          No nível Staff, os fundamentos (Dependency Rule, DRY, KISS, Clean
          Code, SRP, SoC) deixam de ser só "como escrever código" e viram base
          para revisão de arquitetura, definição de guardrails e critérios de
          qualidade do time. Você é quem exige que as boas práticas não sejam
          ignoradas.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que Staff faz com os fundamentos
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
            <strong>Revisar decisão de arquitetura</strong> à luz da Dependency
            Rule e da separação de responsabilidades — não só "feature
            funcionando".
          </List.Item>
          <List.Item>
            <strong>Definir guardrails:</strong> "não quebrar a Dependency
            Rule", "todo novo módulo segue SRP", "débito técnico tem limite e
            prazo".
          </List.Item>
          <List.Item>
            <strong>Critérios de code review:</strong> além de funcionalidade,
            checar DRY, KISS, segurança (validação, XSS) e padrões do time.
          </List.Item>
          <List.Item>
            <strong>Quando virar ADR:</strong> mudança que afeta princípio (ex.:
            inverter dependência, novo padrão de camadas) deve ser documentada.
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
            to="/guides/dependency-rule"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Dependency Rule</Text>
                <Text size="xs" c="dimmed">
                  A base de tudo. Use como guardrail e critério de revisão.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/best-practices/clean-code"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Clean Code e princípios</Text>
                <Text size="xs" c="dimmed">
                  DRY, KISS, YAGNI, SRP, SoC — padrões que o time não pode
                  ignorar.
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
                  Validação, XSS, padrões que viram critério de revisão.
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
                  Quando decisão de princípio vira documento.
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

StaffFundamentals.metadata = {
  title: 'Staff · Fundamentos',
  description:
    'Para Staff: usar fundamentos (Dependency Rule, Clean Code, SRP) como guardrails, critérios de revisão e quando exigir ADR.',
};
