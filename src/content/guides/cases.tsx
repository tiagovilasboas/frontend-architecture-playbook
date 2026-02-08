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
  IconTrendingUp,
  IconCode,
  IconBolt,
  IconGauge,
} from '@tabler/icons-react';
import { CaseCard, type Case } from '../../components/CaseCard';
import casesData from '../../data/cases.json';
import GuideNavigation from '../../components/GuideNavigation';

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
          15 empresas que provaram que performance não é frescura. Stack bonita
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
            Aqui você vai ver <strong>15 casos reais</strong> onde devs
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
          Os Casos que Viraram Dinheiro
        </Title>

        <Stack gap="lg">
          {cases.map((case_, index) => (
            <CaseCard key={case_.company} case_={case_} index={index} />
          ))}
        </Stack>
      </div>

      {/* Key Insights */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Insights Principais</Title>
              <Text c="dimmed">O que aprendemos com esses 15 casos reais</Text>
            </div>
          </Group>

          <Text>
            <strong>Performance é dinheiro.</strong> Empresas que investiram em
            otimização de bundle, carregamento e memória viram impacto direto em
            retenção e conversão. Cada segundo conta.
          </Text>

          <Text>
            <strong>Escala importa.</strong> Plataformas com base de usuários
            massiva dependem de arquitetura frontend sólida para funcionar.
          </Text>

          <Text>
            <strong>UX é conversão.</strong> Testes A/B, otimização de requests
            e experiências progressivas (PWA) resultam em mais engajamento e
            mais receita.
          </Text>

          <Alert color="yellow" icon={<IconBolt size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              💡 Dica Técnica:
            </Text>
            <Text size="sm">
              <strong>Performance não é opcional</strong> em qualquer escala.
              Cada segundo a mais de carregamento impacta conversão e retenção.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Deep Dive Técnico */}
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
                  Carregar só o que precisa, quando precisa. Bundles menores =
                  carregamento mais rápido. Usuário não espera, ele abandona.
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
              <Text c="dimmed">O que aprendemos com esses 15 casos reais</Text>
            </div>
          </Group>

          <Text>
            Esses <strong>15 casos reais</strong> mostram que{' '}
            <strong>performance vira dinheiro</strong>. Netflix, Shopify,
            Airbnb, Figma, Notion, Atlassian, Vercel e outras - todos
            resolveram problemas reais com arquitetura frontend.
          </Text>

          <Text>
            Não é sobre "qual framework usar", é sobre resolver o problema que
            está matando o negócio. Arquitetura certa + métricas reais =
            impacto mensurável.
          </Text>

          <Alert color="yellow" icon={<IconRocket size={16} />} radius="md">
            <Text fw={600} size="lg" style={{ fontStyle: 'italic' }}>
              Stack bonita não paga boleto. Performance, UX e resultado de
              negócio sim.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* References */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="gray">
              <IconCode size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Referências</Title>
              <Text c="dimmed">Fontes dos casos e estudos técnicos</Text>
            </div>
          </Group>

          <Text>
            Todos os casos apresentados são baseados em dados reais e estudos
            técnicos publicados pelas próprias empresas. Os links de cada caso
            direcionam para seções específicas do repositório{' '}
            <strong>Frontend Case Studies</strong>.
          </Text>

          <Alert color="blue" icon={<IconCode size={16} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              📚 Fonte Principal:
            </Text>
            <Text size="sm">
              <strong>Frontend Case Studies</strong> - Repositório com mais de
              200 estudos de caso de empresas reais:{' '}
              <a
                href="https://github.com/andrew--r/frontend-case-studies"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--mantine-color-blue-6)' }}
              >
                github.com/andrew--r/frontend-case-studies
              </a>
            </Text>
          </Alert>

          <Text size="sm" c="dimmed">
            Este repositório é uma coleção curada de estudos de caso técnicos e
            artigos de engenharia publicados diretamente pelas empresas nos seus
            tech blogs oficiais. Todos os 15 casos acima incluem link direto
            para a fonte original.
          </Text>
        </Stack>
      </Paper>

      {/* Navigation */}
      <GuideNavigation currentGuide="cases" />
    </Stack>
  );
}

Cases.metadata = {
  title: 'Casos Reais de Impacto',
  description:
    '15 casos reais de empresas como Netflix, Shopify, Airbnb, Figma, Notion e outras. Cada caso com link para o artigo ou tech blog original.',
};
