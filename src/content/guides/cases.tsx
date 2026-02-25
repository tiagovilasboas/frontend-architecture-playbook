import {
  Title,
  Text,
  Stack,
  Paper,
  Group,
  ThemeIcon,
  Alert,
  Card,
  Badge,
  SimpleGrid,
  Anchor,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import {
  IconTarget,
  IconRocket,
  IconBulb,
  IconTrendingUp,
  IconCode,
  IconBolt,
  IconGauge,
  IconBook,
  IconPuzzle,
} from '@tabler/icons-react';
import { CaseCard, type Case } from '../../components/CaseCard';
import casesData from '../../data/cases.json';
import GuideNavigation from '../../components/GuideNavigation';

export default function Cases() {
  const cases: Case[] = casesData;

  return (
    <Stack gap="xl">
      {/* Hero – Casos Reais: Quando Front-End Vira Dinheiro */}
      <Paper
        withBorder
        p={{ base: 'lg', sm: 'xl' }}
        radius="lg"
        style={{
          background: 'var(--mantine-color-accent-0)',
          borderColor: 'var(--mantine-color-accent-4)',
          borderWidth: 2,
        }}
      >
        <Stack gap="md">
          <Badge
            size="lg"
            variant="filled"
            color="accent"
            radius="md"
            w="fit-content"
          >
            19 casos · fontes verificáveis
          </Badge>
          <Title order={1}>Casos Reais: Quando Front-End Vira Dinheiro</Title>
          <Text size="lg" c="dimmed" maw={620}>
            Empresas que provaram que performance não é frescura. Cada caso com
            link para o artigo ou tech blog original: e-commerce, streaming,
            redes sociais e mais.
          </Text>
          <Text size="sm" c="dimmed" fs="italic">
            Stack bonita não paga boleto. Essas histórias sim.
          </Text>
        </Stack>
      </Paper>

      {/* Por que esses casos existem – arquitetura + este material */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="brand">
              <IconBook size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Por que casos assim existem?</Title>
              <Text c="dimmed">
                Boa arquitetura + os conceitos deste playbook
              </Text>
            </div>
          </Group>

          <Text>
            Casos como os que você vai ver aqui <strong>só acontecem</strong>{' '}
            quando se junta <strong>decisão arquitetural certa</strong> com os
            conceitos que este material traz: dependency rule, padrões de
            entrega (SSR, PWA, micro-frontends), performance, migração gradual e
            métricas reais.
          </Text>

          <Alert color="blue" icon={<IconPuzzle size={20} />} radius="md">
            <Text fw={600} size="sm" mb="xs">
              O que este playbook tem a ver com isso?
            </Text>
            <Text size="sm">
              Cada caso abaixo usa, na prática,{' '}
              <strong>partes do que você encontra neste guia</strong>: Clean
              Architecture, BFF, code splitting, feature flags, PWA, monorepo,
              estratégias de migração. Não é coincidência: é a mesma base que
              permite que front-end vire dinheiro em produção.
            </Text>
          </Alert>

          <Card withBorder p="md">
            <Text fw={600} size="sm" mb="xs">
              Como usar no seu time
            </Text>
            <Text size="xs" c="dimmed">
              Leve o link do caso para a reunião quando defender investimento em
              performance ou arquitetura. Cite em ADRs (“como no caso da
              Shopify…”). Use números e fontes reais em propostas para negócio —
              stack bonita não paga boleto, esses casos sim.
            </Text>
          </Card>

          <Text size="sm" c="dimmed">
            Use os links ao lado para aprofundar nos temas que aparecem nos
            casos:
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            <Anchor component={Link} to="/guides/dependency-rule" size="sm">
              Dependency Rule
            </Anchor>
            <Anchor component={Link} to="/guides/how-to-choose" size="sm">
              Como Escolher Arquitetura
            </Anchor>
            <Anchor
              component={Link}
              to="/guides/architecture-comparison"
              size="sm"
            >
              Comparação de Arquiteturas
            </Anchor>
            <Anchor
              component={Link}
              to="/guides/implementation-roadmap"
              size="sm"
            >
              Roadmap de Implementação
            </Anchor>
            <Anchor
              component={Link}
              to="/guides/migration-strategies"
              size="sm"
            >
              Estratégias de Migração
            </Anchor>
            <Anchor component={Link} to="/techniques/performance" size="sm">
              Performance
            </Anchor>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Para Staff: impacto e conhecer cases */}
      <Paper
        withBorder
        p="xl"
        radius="lg"
        style={{ borderColor: 'var(--mantine-color-brand-5)', borderWidth: 2 }}
      >
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="brand">
              <IconTarget size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>
                Para Staff: todo Staff deve gerar impacto e conhecer cases
              </Title>
              <Text c="dimmed">
                Casos são evidência. Use na reunião, no ADR e na conversa com
                negócio.
              </Text>
            </div>
          </Group>
          <Text>
            No nível Staff, impacto vem quando decisões técnicas viram resultado
            mensurável e quando produto e CTO confiam na sua recomendação.
            Conhecer casos reais (como estes 19) é uma das formas mais diretas:
            você para de falar em teoria e mostra "a Netflix fez X nas Smart
            TVs; o eBay provou que 100ms = +0,5% Add to Cart". Todo Staff
            deveria ter um repertório de casos na cabeça e usar como evidência.
            Cada card abaixo tem link pro artigo original.
          </Text>
          <Anchor component={Link} to="/guides/staff" size="sm" fw={600}>
            Ver hub Para Staff
          </Anchor>
        </Stack>
      </Paper>

      {/* O que é (resumido) */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconTarget size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que você vai ver</Title>
              <Text c="dimmed">
                19 casos reais com problema, solução e link para a fonte
              </Text>
            </div>
          </Group>

          <Text>
            Em cada card: <strong>desafio</strong>, <strong>solução</strong>,
            práticas usadas e resultado. Não é sobre "React ou Vue", é sobre{' '}
            <strong>fazer dinheiro com código</strong>. Performance vira
            conversão, conversão vira dinheiro.
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
              <Text c="dimmed">O que aprendemos com esses 19 casos reais</Text>
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
              <Text c="dimmed">O que aprendemos com esses 19 casos reais</Text>
            </div>
          </Group>

          <Text>
            Esses <strong>19 casos reais</strong> mostram que{' '}
            <strong>performance vira dinheiro</strong>. Netflix, Shopify, eBay,
            Etsy, Zalando, Airbnb, Figma, Notion, Atlassian e outras - todos
            resolveram problemas reais com arquitetura frontend.
          </Text>

          <Text>
            Não é sobre "qual framework usar", é sobre resolver o problema que
            está matando o negócio. Arquitetura certa + métricas reais = impacto
            mensurável.
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
            tech blogs oficiais. Todos os 19 casos acima incluem link direto
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
    '19 casos reais de empresas como Netflix, Shopify, eBay, Etsy, Zalando, Airbnb, Figma e outras. Cada caso com link para o artigo ou tech blog original.',
};
