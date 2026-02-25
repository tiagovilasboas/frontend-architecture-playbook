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
import { IconCheck, IconChartBar, IconRocket } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function StaffEntrega() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Staff · Arquitetura de Entrega
        </Title>
        <Text size="lg" c="dimmed">
          Na entrega (SSR, SSG, JAMstack, PWA, performance), Staff trabalha com
          métricas, Core Web Vitals e impacto em conversão. Você conecta decisão
          técnica a resultado mensurável e a OKRs do negócio.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que Staff faz em Entrega
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
            <strong>Performance e métricas:</strong> Core Web Vitals (LCP, FID,
            CLS), tempo de carregamento. Casos com fonte (eBay 100ms = +0,5% Add
            to Cart).
          </List.Item>
          <List.Item>
            <strong>OKRs:</strong> traduzir entrega técnica em key results.
            Alinhar com objetivos do time e do negócio.
          </List.Item>
          <List.Item>
            <strong>Guardrails de entrega:</strong> performance budgets, não
            regredir Core Web Vitals sem justificativa.
          </List.Item>
          <List.Item>
            <strong>SSR/SSG/JAMstack/Islands:</strong> quando recomendar cada
            um, com evidência. Levar pro ADR e pro time.
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
            to="/techniques/performance"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconChartBar size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Performance</Text>
                <Text size="xs" c="dimmed">
                  Métricas, Core Web Vitals, impacto em conversão.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/cases"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconChartBar size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>19 Casos Reais</Text>
                <Text size="xs" c="dimmed">
                  Evidência com link do artigo.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/architectures/ssr-ssg"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconRocket size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>SSR & SSG</Text>
                <Text size="xs" c="dimmed">
                  Quando usar; primeiro paint e SEO.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/architectures/jamstack"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconRocket size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>JAMstack</Text>
                <Text size="xs" c="dimmed">
                  Decisão de entrega e conteúdo estático.
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

StaffEntrega.metadata = {
  title: 'Staff · Arquitetura de Entrega',
  description:
    'Para Staff: performance, métricas, OKRs, Core Web Vitals e guardrails de entrega (SSR, SSG, JAMstack).',
};
