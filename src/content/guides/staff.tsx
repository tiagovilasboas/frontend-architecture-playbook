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
  Alert,
} from '@mantine/core';
import {
  IconTarget,
  IconFileText,
  IconCheck,
  IconScale,
  IconTrendingUp,
  IconShield,
  IconRoute,
  IconCode,
  IconUsers,
  IconChartBar,
  IconShoppingCart,
  IconLanguage,
  IconLock,
  IconServer2,
  IconTools,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import GuideNavigation from '../../components/GuideNavigation';

export default function StaffGuide() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">
          Para Staff
        </Title>
        <Text size="lg" c="dimmed">
          No nível Staff o foco é decisão, alinhamento e referência. Você
          precisa trabalhar com performance e métricas, conhecer regras de
          negócio (e-commerce e o que impacta resultado), falar com o negócio em
          linguagem não técnica, dominar OKRs e ser o detentor das boas práticas
          e guardrails do time. Staff front-end de verdade conhece bem back-end,
          todas as práticas de segurança e protocolos (HTTP, REST, auth, OWASP),
          comunica com fluidez com back-end e com o time de front, e está
          antenado nas melhores ferramentas do mercado e nas novidades. Este
          guia é o hub: o que o playbook te oferece pra isso e o que mais você
          precisa dominar.
        </Text>
      </div>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          Staff por seção
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          O conteúdo avançado para Staff está segmentado por seção do playbook.
          Cada link leva ao que você precisa dominar naquela área: guardrails,
          métricas, evidência e práticas.
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/staff-fundamentals"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Staff · Fundamentos</Text>
                <Text size="xs" c="dimmed">
                  Guardrails, code review e quando exigir ADR.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/staff-ui"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Staff · Construindo UI</Text>
                <Text size="xs" c="dimmed">
                  Design system, estado e padrões de componentes.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/staff-entrega"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconChartBar size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Staff · Entrega</Text>
                <Text size="xs" c="dimmed">
                  Performance, métricas, OKRs e Core Web Vitals.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/staff-estrutura"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Staff · Estrutura</Text>
                <Text size="xs" c="dimmed">
                  Camadas, dependências, ADR e segurança.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/staff-escala"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconScale size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Staff · Escala</Text>
                <Text size="xs" c="dimmed">
                  Casos, comparação, migração e decisão com evidência.
                </Text>
              </div>
            </Group>
          </Card>
        </SimpleGrid>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O valor que você leva daqui (impacto prático)
        </Title>
        <Text mb="md" size="sm" c="dimmed">
          O playbook gera impacto quando você usa no dia a dia: não é só ler, é
          levar pra reunião, pro ADR e pro time.
        </Text>
        <List
          spacing="xs"
          icon={
            <ThemeIcon size={18} radius="xl" color="brand">
              <IconCheck size={10} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <strong>Antes de propor arquitetura:</strong> rode o Decision Wizard
            com o contexto do time e use a recomendação como ponto de partida (e
            documente no ADR).
          </List.Item>
          <List.Item>
            <strong>Na reunião com produto ou CTO:</strong> leve um caso com
            link do artigo (ex.: eBay 100ms, Spotify micro-frontends) em vez de
            opinião solta.
          </List.Item>
          <List.Item>
            <strong>Quando mudar padrão ou arquitetura:</strong> exija ADR com
            contexto, alternativas e consequências; assim o time e quem entrar
            depois sabem o porquê.
          </List.Item>
          <List.Item>
            <strong>Em code review e guardrails:</strong> use Dependency Rule,
            segurança e acessibilidade como critério, não só "feature
            funcionando".
          </List.Item>
        </List>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          Por que todo Staff deve gerar impacto e conhecer cases
        </Title>
        <Text mb="md">
          Staff gera impacto quando decisões técnicas viram resultado mensurável
          e quando o time e o negócio confiam na sua recomendação. Conhecer
          casos reais (como os 19 deste playbook) é uma das formas mais diretas:
          você deixa de falar em teoria e passa a mostrar "a Spotify fez X e
          ganhou Y; o eBay provou que 100ms = +0,5% Add to Cart".
        </Text>
        <Text size="sm" c="dimmed">
          Todo Staff deveria ter um repertório de casos na cabeça (ou nos
          favoritos) e usar como evidência em reunião, em ADR e em conversa com
          produto e CTO. Os 19 casos daqui são um ponto de partida; cada um tem
          link pro artigo original.
        </Text>
        <Anchor component={Link} to="/guides/cases" size="sm" mt="xs" fw={600}>
          Ver os 19 casos
        </Anchor>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que o playbook te dá (Decisão & Referência)
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
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
                  Quando usar cada uma, prós e contras. Base pra recomendar.
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
                <IconTrendingUp size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>19 Casos Reais</Text>
                <Text size="xs" c="dimmed">
                  Evidência com fonte. Leva o link pro artigo na reunião.
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
                <IconTarget size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Decision Wizard</Text>
                <Text size="xs" c="dimmed">
                  Recomendação por contexto. Ponto de partida pro time.
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
                  Documentar o porquê da decisão. Contexto pro futuro.
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
                  Como mudar sem big bang. Strangler, branch by abstraction.
                </Text>
              </div>
            </Group>
          </Card>
          <Card
            withBorder
            p="md"
            component={Link}
            to="/guides/security-business"
            style={{ textDecoration: 'none' }}
          >
            <Group gap="sm">
              <ThemeIcon size={36} radius="md" variant="light" color="brand">
                <IconShield size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Segurança & Negócio</Text>
                <Text size="xs" c="dimmed">
                  Priorizar e comunicar investimento em segurança.
                </Text>
              </div>
            </Group>
          </Card>
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
                  Métricas, Core Web Vitals e impacto em conversão.
                </Text>
              </div>
            </Group>
          </Card>
        </SimpleGrid>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconChartBar
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Performance, métricas e OKRs
        </Title>
        <Text mb="md">
          Staff tem que trabalhar com performance e métricas de forma constante.
          Não basta "a página tá rápida": você precisa saber Core Web Vitals
          (LCP, FID, CLS), ter números que o negócio entende (tempo de
          carregamento, taxa de conversão, bounce) e conectar decisão técnica a
          resultado. Casos como o eBay (100ms de atraso = -0,5% Add to Cart)
          existem pra você levar pra reunião.
        </Text>
        <Text mb="md" size="sm" c="dimmed">
          OKRs (Objectives and Key Results) são a linguagem de alinhamento em
          muitas empresas. Staff precisa entender os OKRs do negócio e do time,
          e traduzir o que a engenharia entrega em resultados mensuráveis.
          "Melhorar LCP em 20%" vira key result; "reduzir tempo de checkout"
          vira impacto em conversão. O playbook de Performance e os 19 casos te
          dão base pra propor metas e justificar investimento.
        </Text>
        <Anchor
          component={Link}
          to="/techniques/performance"
          size="sm"
          fw={600}
        >
          Guia de Performance
        </Anchor>
        <Text span size="sm" c="dimmed">
          {' '}
          ·{' '}
        </Text>
        <Anchor component={Link} to="/guides/cases" size="sm" fw={600}>
          19 casos (métricas com fonte)
        </Anchor>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconShoppingCart
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Regras de negócio e e-commerce
        </Title>
        <Text mb="md">
          Em e-commerce (e em muitos produtos digitais), existem regras que
          impactam o negócio diretamente: checkout que não pode travar, carrinho
          que não pode perder item, página de produto que precisa rankear no
          Google, tempo de resposta que afeta conversão. Staff precisa conhecer
          esse tipo de regra e o vocabulário do negócio: funil (aquisição →
          conversão → retenção), AOV (average order value), conversion rate,
          bounce, tempo no funil.
        </Text>
        <Text mb="md" size="sm" c="dimmed">
          Quando você discute arquitetura com produto ou CTO, "não podemos
          quebrar o checkout" ou "SEO é critério de sucesso" são restrições de
          negócio. Conhecer regras de e-commerce e métricas que impactam receita
          ajuda a priorizar (performance da PDP, resiliência do carrinho,
          tracking de conversão) e a falar na língua de quem segura a grana.
        </Text>
        <Anchor
          component={Link}
          to="/guides/security-business"
          size="sm"
          fw={600}
        >
          Segurança & Negócio
        </Anchor>
        <Text span size="sm" c="dimmed">
          {' '}
          ·{' '}
        </Text>
        <Anchor component={Link} to="/guides/cases" size="sm" fw={600}>
          Casos (e-commerce e métricas)
        </Anchor>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconServer2
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Back-end, segurança e protocolos
        </Title>
        <Text mb="md">
          Staff front-end de verdade conhece muito de back-end e todas as
          práticas de segurança. Não é sobre virar dev back-end: é sobre falar a
          mesma língua, desenhar contratos (API, eventos), entender custos e
          riscos. Você precisa manjar de protocolos (HTTP, REST, GraphQL,
          WebSockets), autenticação e autorização (OAuth, JWT, CORS), e das
          práticas que impactam o front (OWASP Top 10, XSS, CSRF, CSP, cookies
          seguros, HTTPS). Assim você comunica com fluidez com o time de
          back-end e define guardrails que protegem os dois lados.
        </Text>
        <Text size="sm" c="dimmed" mb="md">
          Segurança não é checklist de uma vez: é critério de revisão, padrões
          de contrato e quando escalar pro time de segurança ou produto. O
          playbook cobre Security Patterns e Segurança & Negócio; complemente
          com documentação de APIs do seu stack e guias OWASP quando for definir
          política pro time.
        </Text>
        <Anchor component={Link} to="/patterns/security" size="sm" fw={600}>
          Security Patterns
        </Anchor>
        <Text span size="sm" c="dimmed">
          {' '}
          ·{' '}
        </Text>
        <Anchor
          component={Link}
          to="/guides/security-business"
          size="sm"
          fw={600}
        >
          Segurança & Negócio
        </Anchor>
        <Text span size="sm" c="dimmed">
          {' '}
          ·{' '}
        </Text>
        <Anchor component={Link} to="/architectures/bff" size="sm" fw={600}>
          BFF (contrato front/back)
        </Anchor>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconTools
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Ferramentas e novidades do mercado
        </Title>
        <Text mb="md">
          Staff deve conhecer as melhores ferramentas do mercado e estar
          antenado nas novidades: frameworks, bundlers, runtimes, ferramentas de
          teste e de observabilidade, padrões que estão ganhando adoção e o que
          já está em declínio. Isso não é modismo: é poder recomendar com
          critério, avaliar trade-offs (ex.: migrar ou não pra X) e alinhar o
          time em cima de uma stack sustentável.
        </Text>
        <Text size="sm" c="dimmed" mb="md">
          Este playbook não lista "as top 10 ferramentas do ano" — isso muda
          rápido. O que a gente cobre é arquitetura, padrões e como decidir
          (Comparação, Decision Wizard, ADR, casos com fonte). Use isso como
          base e mantenha o hábito de ler tech blogs, release notes e discussões
          da comunidade (e, quando fizer sentido, provar em spike) antes de
          levar recomendação pro time.
        </Text>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          Três práticas que fazem diferença
        </Title>
        <Stack gap="lg">
          <Group gap="md" wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} radius="md" variant="light" color="brand">
              1
            </ThemeIcon>
            <div>
              <Text fw={600}>Justificar com caso e fonte</Text>
              <Text size="sm" c="dimmed">
                Em vez de "micro-frontends é melhor", use "a Spotify reduziu o
                bundle e ganhou deploys independentes; aqui está o artigo." Os
                19 casos do playbook servem pra isso. Link pro tech blog na mão
                na hora de falar com produto ou CTO.
              </Text>
              <Anchor component={Link} to="/guides/cases" size="sm" mt="xs">
                Ver casos
              </Anchor>
            </div>
          </Group>
          <Group gap="md" wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} radius="md" variant="light" color="brand">
              2
            </ThemeIcon>
            <div>
              <Text fw={600}>Documentar no ADR</Text>
              <Text size="sm" c="dimmed">
                Decisão importante vira ADR: contexto, alternativas,
                consequências. Em 6 meses ninguém lembra por que escolheu X. O
                ADR preserva isso e alinha quem entra no time depois.
              </Text>
              <Anchor component={Link} to="/guides/adr" size="sm" mt="xs">
                Ver guia ADR
              </Anchor>
            </div>
          </Group>
          <Group gap="md" wrap="nowrap" align="flex-start">
            <ThemeIcon size={40} radius="md" variant="light" color="brand">
              3
            </ThemeIcon>
            <div>
              <Text fw={600}>
                Falar com o negócio (e com back-end e front) de forma não
                técnica
              </Text>
              <Text size="sm" c="dimmed">
                Staff precisa conversar com produto, CTO e negócio em linguagem
                que eles entendem; e com o time de back-end e de front com
                fluidez — mesmo vocabulário, contratos claros, trade-offs
                explícitos. Em vez de "latência p99" ou "micro-frontends", fale
                em impacto: "página mais rápida = mais conversão", "deploy
                independente = menos risco de parar o site". Conheça OKRs do
                time e do negócio e conecte o que a engenharia entrega a
                resultados mensuráveis. O guia Segurança & Negócio traz exemplos
                de como comunicar risco, custo e benefício com stakeholders.
              </Text>
              <Anchor
                component={Link}
                to="/guides/security-business"
                size="sm"
                mt="xs"
              >
                Segurança & Negócio
              </Anchor>
            </div>
          </Group>
        </Stack>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="sm">
          Checklist antes de fechar uma decisão
        </Title>
        <List
          spacing="xs"
          icon={
            <ThemeIcon size={20} radius="xl" color="green">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            Temos um caso de referência ou evidência (artigo, métrica) que apoia
            a recomendação?
          </List.Item>
          <List.Item>
            Vamos documentar no ADR (contexto, alternativas, consequências)?
          </List.Item>
          <List.Item>
            Comunicamos o trade-off pro negócio (risco, custo, prazo) em
            linguagem não técnica?
          </List.Item>
          <List.Item>
            Consideramos impacto em performance, métricas e OKRs do
            time/negócio?
          </List.Item>
          <List.Item>
            Quando a decisão impacta API: alinhamos com back-end (contrato,
            versionamento, breaking changes)?
          </List.Item>
          <List.Item>
            Acessibilidade e segurança entram como critério de revisão e
            guardrail?
          </List.Item>
          <List.Item>
            Respeitamos os guardrails (fluxos críticos, testes, budgets) e
            reforçamos as boas práticas?
          </List.Item>
        </List>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="sm">
          <IconLanguage
            size={20}
            style={{ verticalAlign: 'middle', marginRight: 6 }}
          />
          Fale com o negócio (glossário rápido, linguagem não técnica)
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          Traduzir jargão técnico ajuda na reunião. Use impacto e resultado, não
          sigla:
        </Text>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
          <Text size="sm">
            <strong>Micro-frontends</strong> → times podendo deployar sem travar
            uns aos outros.
          </Text>
          <Text size="sm">
            <strong>Performance / Core Web Vitals</strong> → página mais rápida,
            mais conversão (eBay: 100ms = +0,5% Add to Cart).
          </Text>
          <Text size="sm">
            <strong>SSR / entrega no servidor</strong> → primeiro paint mais
            rápido e melhor pra SEO.
          </Text>
          <Text size="sm">
            <strong>Migração incremental (Strangler)</strong> → trocar o sistema
            aos poucos, sem parar o produto.
          </Text>
          <Text size="sm">
            <strong>OKRs</strong> → objetivos e resultados mensuráveis; alinhe o
            que o time entrega com os do negócio.
          </Text>
          <Text size="sm">
            <strong>Checkout / carrinho</strong> → regras de negócio que não
            podem quebrar; performance e resiliência aqui impactam receita.
          </Text>
        </SimpleGrid>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          <IconLock
            size={22}
            style={{ verticalAlign: 'middle', marginRight: 8 }}
          />
          Boas práticas e guardrails: você é o detentor
        </Title>
        <Text mb="md">
          Staff é quem define e defende as boas práticas e os guardrails do
          time. Não é burocracia: é garantir que o time não corte cantos que
          custam caro depois. Você é o detentor do "como a gente faz aqui" —
          Dependency Rule, revisão de código, quando algo vira ADR, limites de
          débito técnico, métricas de qualidade (cobertura, performance
          budgets).
        </Text>
        <Text mb="md" size="sm" c="dimmed">
          Guardrails são os limites que protegem o produto e o time: "não fazer
          deploy sem testes e2e nos fluxos críticos", "toda mudança de
          arquitetura vira ADR", "Core Web Vitals não podem regredir sem
          justificativa". Pensar em tudo isso é parte do papel: escolher o que é
          obrigatório, documentar e fazer valer sem virar gargalo. O playbook te
          dá a base técnica (Fundamentos, ADR, Performance); você traduz em
          padrões e critérios de revisão pro seu contexto.
        </Text>
        <List
          spacing="xs"
          icon={
            <ThemeIcon size={20} radius="xl" color="brand">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            Definir quando decisão vira ADR e como o time documenta.
          </List.Item>
          <List.Item>
            Revisar arquitetura e qualidade (Dependency Rule, SRP, segurança)
            além de "feature funcionando".
          </List.Item>
          <List.Item>
            Estabelecer métricas e budgets (performance, cobertura) e não deixar
            regredir sem critério.
          </List.Item>
          <List.Item>
            Proteger fluxos críticos de negócio (checkout, carrinho, login) com
            testes e resiliência.
          </List.Item>
        </List>
        <Anchor
          component={Link}
          to="/guides/dependency-rule"
          size="sm"
          mt="md"
          fw={600}
        >
          Dependency Rule
        </Anchor>
        <Text span size="sm" c="dimmed">
          {' '}
          ·{' '}
        </Text>
        <Anchor component={Link} to="/guides/adr" size="sm" fw={600}>
          ADR
        </Anchor>
        <Text span size="sm" c="dimmed">
          {' '}
          ·{' '}
        </Text>
        <Anchor
          component={Link}
          to="/techniques/performance"
          size="sm"
          fw={600}
        >
          Performance
        </Anchor>
      </Paper>

      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="md">
          O que mais um Staff precisa dominar
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          Além de decisão, evidência, performance, métricas e guardrails, Staff
          se apoia em código de qualidade e em soft skills. Este playbook cobre
          a parte técnica e como falar com o negócio; o resto você complementa
          por fora.
        </Text>
        <Stack gap="md">
          <Group gap="md" wrap="nowrap" align="flex-start">
            <ThemeIcon size={36} radius="md" variant="light" color="blue">
              <IconCode size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600} size="sm">
                Boas práticas de programação (avançadas)
              </Text>
              <Text size="xs" c="dimmed">
                Dependency Rule, DRY, KISS, YAGNI, Clean Code, SRP, SoC: no
                nível Staff você usa isso pra revisar decisão de arquitetura e
                qualidade do código, e pra definir os guardrails do time — não
                só pra escrever feature. O playbook tem tudo em Fundamentos e em
                Security Patterns.
              </Text>
              <Anchor
                component={Link}
                to="/guides/dependency-rule"
                size="xs"
                mt={4}
              >
                Dependency Rule
              </Anchor>
              <Text span size="xs" c="dimmed">
                {' '}
                ·{' '}
              </Text>
              <Anchor
                component={Link}
                to="/best-practices/clean-code"
                size="xs"
              >
                Clean Code
              </Anchor>
              <Text span size="xs" c="dimmed">
                {' '}
                ·{' '}
              </Text>
              <Anchor component={Link} to="/patterns/security" size="xs">
                Security Patterns
              </Anchor>
            </div>
          </Group>
          <Group gap="md" wrap="nowrap" align="flex-start">
            <ThemeIcon size={36} radius="md" variant="light" color="violet">
              <IconUsers size={20} />
            </ThemeIcon>
            <div>
              <Text fw={600} size="sm">
                Influência, mentoring e débito técnico
              </Text>
              <Text size="xs" c="dimmed">
                Influência sem autoridade (convencer sem ser tech lead direto),
                mentoring e facilitação de decisão são parte do dia a dia.
                Débito técnico: saber priorizar o que pagar primeiro, como
                comunicar pro negócio (risco, custo de manutenção) e quando
                incluir no roadmap. Complemente com livros e cursos de liderança
                técnica e product sense. O playbook cobre a base técnica e como
                falar com o negócio; você leva isso pro time.
              </Text>
            </div>
          </Group>
        </Stack>
      </Paper>

      <Alert color="blue" radius="md">
        <Text size="sm">
          <strong>Roteiro por nível:</strong> Se você quer ver o que estudar em
          cada etapa (Júnior, Pleno, Sênior, Staff), use o{' '}
          <Anchor component={Link} to="/guides/study-guide">
            Por onde começar (roteiro por senioridade)
          </Anchor>
          . Este guia aqui é o "o que fazer com isso" quando você já está no
          radar de Staff.
        </Text>
      </Alert>

      <GuideNavigation currentGuide="staff" />
    </Stack>
  );
}

StaffGuide.metadata = {
  title: 'Para Staff',
  description:
    'Hub para nível Staff: decisão com evidência, performance e métricas, OKRs, back-end e protocolos, segurança, ferramentas e novidades, regras de negócio, falar com negócio e com back-end/front, boas práticas e guardrails. Staff por seção (Fundamentos, UI, Entrega, Estrutura, Escala). Impacto prático e checklist.',
};
