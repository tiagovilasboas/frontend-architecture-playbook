import React from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Group,
  ThemeIcon,
  Alert,
  Card,
} from '@mantine/core';
import {
  IconTarget,
  IconRocket,
  IconBulb,
  IconCheckbox,
  IconTrendingUp,
  IconCode,
  IconBolt,
  IconGauge,
} from '@tabler/icons-react';
import { CaseCard, type Case } from '../../components/CaseCard';
import casesData from '../../data/cases.json';
import GuideNavigation from '../../components/GuideNavigation';
import GuideCTA from '../../components/GuideCTA';

export default function Cases() {
  const cases: Case[] = casesData;

  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Casos Reais: Quando Front-End Vira Dinheiro
        </Title>
        <Text size="lg" c="dimmed">
          16 empresas que provaram que performance não é frescura. Stack bonita
          não paga boleto, mas essas histórias sim.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconTarget size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Casos reais de empresas que aplicaram boas práticas com
                resultado
              </Text>
            </div>
          </Group>

          <Text>
            Aqui você vai ver <strong>16 casos reais</strong> onde devs
            resolveram problemas de verdade. Não é sobre "usar React ou Vue", é
            sobre <strong>fazer dinheiro com código</strong>.
          </Text>

          <Text>
            Cada empresa tinha um problema real: site lento, app travando,
            usuários abandonando. Eles resolveram com arquitetura, não com
            framework da moda.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>performance vira conversão, conversão vira dinheiro</em>. Stack
            bonita não paga boleto, mas essas histórias sim.
          </Text>
        </Stack>
      </Paper>

      {/* Cases Grid */}
      <div>
        <Title order={2} mb="lg">
          <IconTrendingUp
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 16 Casos que Viraram Dinheiro
        </Title>

        <Stack gap="lg">
          {cases.map((case_, index) => (
            <CaseCard key={case_.company} case_={case_} index={index} />
          ))}
        </Stack>
      </div>

      {/* Key Insights */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Principais Insights
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCheckbox size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Problema Real, Solução Real</Title>
                <Text size="sm">
                  Não é sobre "qual framework usar", é sobre resolver o problema
                  que está matando o negócio.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Arquitetura {'>'} Framework</Title>
                <Text size="sm">
                  Boas práticas são ferramentas, não religião. Use o que
                  resolve, não o que está na moda.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Métricas {'>'} Opiniões</Title>
                <Text size="sm">
                  Dados não mentem. Se não está medindo, está chutando.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* Technical Deep Dive */}
      <div>
        <Title order={2} mb="lg">
          <IconBolt
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Deep Dive Técnico: Performance que Vira Dinheiro
        </Title>

        <Stack gap="lg">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Lazy Loading & Code Splitting</Title>
                <Text size="sm">
                  Carregar só o que precisa, quando precisa. Bundle de 5MB virou
                  500KB. Usuário não espera, ele abandona.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconGauge size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Chunks Inteligentes</Title>
                <Text size="sm">
                  Dividir código em pedaços que fazem sentido. Vendor separado,
                  rotas lazy, componentes sob demanda. Cache otimizado.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Métricas Reais</Title>
                <Text size="sm">
                  Core Web Vitals, First Contentful Paint, Time to Interactive.
                  Se não está medindo, está chutando no escuro.
                </Text>
              </div>
            </Group>
          </Card>

          <Alert color="blue" icon={<IconBolt size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              💡 Dica Técnica:
            </Text>
            <Text size="sm">
              <strong>Lazy loading</strong> não é só React.lazy(). É
              arquitetura: carregar só o que o usuário vai usar. Bundle size é
              morte lenta.
            </Text>
          </Alert>
        </Stack>
      </div>

      {/* Conclusion */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="teal">
              <IconRocket size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Conclusão</Title>
              <Text c="dimmed">O que aprendemos com esses 16 casos reais</Text>
            </div>
          </Group>

          <Text>
            Esses <strong>16 casos reais</strong> mostram que{' '}
            <strong>performance vira dinheiro</strong>. Pinterest, Tinder,
            Slack, Uber, WhatsApp, Zoom, Figma e Discord - todos resolveram
            problemas reais.
          </Text>

          <Text>
            Não é sobre "qual framework usar", é sobre resolver o problema que
            está matando o negócio. Arquitetura certa + métricas reais =
            resultado garantido.
          </Text>

          <Alert color="yellow" icon={<IconRocket size={16} />} radius="md">
            <Text fw={600} size="lg" style={{ fontStyle: 'italic' }}>
              Stack bonita não paga boleto. Performance, UX e resultado de
              negócio sim.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Navigation */}
      <GuideNavigation currentGuide="cases" />
      <GuideCTA currentGuide="cases" />
    </Stack>
  );
}

Cases.metadata = {
  title: 'Casos Reais de Impacto',
  description:
    '16 exemplos reais de empresas como Pinterest, Tinder, Slack, Uber, WhatsApp, Zoom, Figma e Discord mostrando como boas práticas e arquitetura front-end geram resultados concretos em performance, conversão e experiência do usuário.',
};
