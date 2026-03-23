import {
  Title,
  Stack,
  Text,
  Button,
  Group,
  Paper,
  Box,
  SimpleGrid,
  Badge,
  Card,
  ThemeIcon,
  Flex,
  Code,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/ui';
import { motion } from 'framer-motion';
import {
  IconRocket,
  IconShield,
  IconArrowRight,
  IconTarget,
  IconTrendingUp,
  IconBolt,
  IconScale,
  IconExternalLink,
  IconTerminal2,
} from '@tabler/icons-react';
import { useBreakpoints } from '../hooks/useBreakpoints.ts';
import casesData from '../data/cases.json';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Home() {
  const { isMobile, isSmallMobile } = useBreakpoints();

  return (
    <Box
      mt={0}
      w="100%"
      maw={isMobile ? '100%' : '90%'}
      mx="auto"
      px={isMobile ? undefined : 'md'}
      style={
        isMobile
          ? {
              // Lateral mínimo: só safe-area (notch); sem padding extra
              paddingLeft: 'env(safe-area-inset-left, 0px)',
              paddingRight: 'env(safe-area-inset-right, 0px)',
            }
          : undefined
      }
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack gap={isMobile ? 'xl' : 'xl'} w="100%">
          {/* Hero Section – Next.js-style: title, tagline, description, two CTAs, command line */}
          <motion.section variants={itemVariants}>
            <Box
              className="hero-section"
              style={{
                position: 'relative',
                width: '100%',
                // Mobile: altura pelo conteúdo + respiro (evita bloco vazio ou apertado)
                minHeight: isMobile ? undefined : 480,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Stack
                align="center"
                ta="center"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  maxWidth: 720,
                  // Mobile: gutter legível sem “grudar” no vidro; desktop mantém só vertical
                  padding: isMobile
                    ? undefined
                    : '3.5rem max(1rem, env(safe-area-inset-left)) 3.5rem max(1rem, env(safe-area-inset-right))',
                  paddingTop: isMobile
                    ? 'max(1.75rem, env(safe-area-inset-top))'
                    : undefined,
                  paddingBottom: isMobile ? '2rem' : undefined,
                  paddingLeft: isMobile
                    ? 'env(safe-area-inset-left, 0px)'
                    : undefined,
                  paddingRight: isMobile
                    ? 'env(safe-area-inset-right, 0px)'
                    : undefined,
                }}
                gap={isMobile ? 'md' : 'xl'}
              >
                <HeroTitle
                  size={
                    isSmallMobile
                      ? '1.5rem'
                      : isMobile
                        ? 'clamp(1.5rem, 5.5vw, 1.85rem)'
                        : '3rem'
                  }
                  mb={0}
                  style={{
                    lineHeight: 1.2,
                    fontWeight: 800,
                    maxWidth: '100%',
                    letterSpacing: '-0.02em',
                    overflowWrap: 'break-word',
                  }}
                >
                  Front-End Architecture Playbook
                </HeroTitle>

                <Text
                  size={isMobile ? 'sm' : 'lg'}
                  fw={600}
                  style={{ lineHeight: 1.45 }}
                  maw={560}
                >
                  Do fundamento à decisão, com fonte em tudo.
                </Text>

                <Text
                  size={isMobile ? 'xs' : 'md'}
                  c="dimmed"
                  style={{ lineHeight: 1.6 }}
                  maw={540}
                >
                  Guias na ordem que faz sentido estudar, casos reais com link
                  dos artigos, wizard de recomendação e ADR em 2 páginas.{' '}
                  <Text span fw={600} inherit>
                    Só o que você consegue ler e usar.
                  </Text>
                </Text>

                {isMobile ? (
                  <Stack gap="sm" w="100%" mx="auto" align="stretch">
                    <Button
                      component={Link}
                      to="/guides/how-to-choose"
                      size="md"
                      radius="md"
                      variant="filled"
                      color="green"
                      fullWidth
                      leftSection={<IconRocket size={18} />}
                    >
                      Encontre sua Arquitetura
                    </Button>
                    <Button
                      component={Link}
                      to="/guides/dependency-rule"
                      size="md"
                      radius="md"
                      variant="default"
                      color="green"
                      fullWidth
                    >
                      Dependency Rule
                    </Button>
                  </Stack>
                ) : (
                  <Group gap="sm" justify="center" wrap="wrap">
                    <Button
                      component={Link}
                      to="/guides/how-to-choose"
                      size="lg"
                      radius="md"
                      variant="filled"
                      color="green"
                      leftSection={<IconRocket size={18} />}
                    >
                      Encontre sua Arquitetura
                    </Button>
                    <Button
                      component={Link}
                      to="/guides/dependency-rule"
                      size="lg"
                      radius="md"
                      variant="default"
                      color="green"
                    >
                      Dependency Rule
                    </Button>
                  </Group>
                )}

                <Box
                  component={Link}
                  to="/guides/dependency-rule"
                  className={
                    isMobile
                      ? 'hero-command hero-command--mobile'
                      : 'hero-command'
                  }
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    maxWidth: '100%',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? 6 : undefined,
                    flexWrap: isMobile ? 'wrap' : 'nowrap',
                  }}
                >
                  <IconTerminal2
                    size={isMobile ? 18 : 16}
                    style={{ flexShrink: 0 }}
                  />
                  <Code
                    block={false}
                    fz={isMobile ? 'xs' : 'sm'}
                    style={{
                      textAlign: isMobile ? 'center' : 'inherit',
                      wordBreak: 'break-all',
                      lineHeight: 1.4,
                    }}
                  >
                    {isMobile
                      ? '→ /guides/dependency-rule'
                      : 'Comece por aqui → /guides/dependency-rule'}
                  </Code>
                </Box>
              </Stack>
            </Box>
          </motion.section>

          {/* ⟩ Comece aqui (Quick Start) */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" w="100%">
              <Title
                order={2}
                size={isMobile ? 'h3' : 'h2'}
                mb={0}
                style={{ fontWeight: 700 }}
              >
                ⟩ Bora começar
              </Title>
              <SimpleGrid
                cols={{ base: 1, sm: 3 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
                style={{ alignItems: 'stretch' }}
              >
                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'lg'}
                  radius="lg"
                  component={Link}
                  to="/guides/dependency-rule"
                  className="comece-aqui-card"
                  styles={{
                    root: {
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    },
                  }}
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap" align="flex-start">
                      <ThemeIcon
                        size={48}
                        radius="md"
                        variant="light"
                        color="green"
                      >
                        <IconShield size={26} />
                      </ThemeIcon>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'} lh={1.2}>
                        Dependency Rule
                      </Text>
                    </Group>
                    <Text
                      size={isMobile ? 'md' : 'sm'}
                      c="dimmed"
                      lh={1.5}
                      style={{ flex: 1 }}
                    >
                      Dependências só apontam pra dentro. A base de tudo.
                    </Text>
                    <Group
                      gap={6}
                      fw={600}
                      style={{ pointerEvents: 'none' }}
                      c="green.6"
                    >
                      <Text size="sm">Ler o guia</Text>
                      <IconArrowRight size={16} />
                    </Group>
                  </Stack>
                </Card>
                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'lg'}
                  radius="lg"
                  component={Link}
                  to="/guides/how-to-choose"
                  className="comece-aqui-card"
                  styles={{
                    root: {
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    },
                  }}
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap" align="flex-start">
                      <ThemeIcon
                        size={48}
                        radius="md"
                        variant="light"
                        color="green"
                      >
                        <IconTarget size={26} />
                      </ThemeIcon>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'} lh={1.2}>
                        Decision Wizard
                      </Text>
                    </Group>
                    <Text
                      size={isMobile ? 'md' : 'sm'}
                      c="dimmed"
                      lh={1.5}
                      style={{ flex: 1 }}
                    >
                      Responde umas perguntas e leva uma recomendação pro time.
                    </Text>
                    <Group
                      gap={6}
                      fw={600}
                      style={{ pointerEvents: 'none' }}
                      c="green.6"
                    >
                      <Text size="sm">Começar o wizard</Text>
                      <IconArrowRight size={16} />
                    </Group>
                  </Stack>
                </Card>
                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'lg'}
                  radius="lg"
                  component={Link}
                  to="/guides/architecture-comparison"
                  className="comece-aqui-card"
                  styles={{
                    root: {
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    },
                  }}
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap" align="flex-start">
                      <ThemeIcon
                        size={48}
                        radius="md"
                        variant="light"
                        color="green"
                      >
                        <IconScale size={26} />
                      </ThemeIcon>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'} lh={1.2}>
                        Comparação Visual
                      </Text>
                    </Group>
                    <Text
                      size={isMobile ? 'md' : 'sm'}
                      c="dimmed"
                      lh={1.5}
                      style={{ flex: 1 }}
                    >
                      Tudo lado a lado: quando usar, prós, contras e o que
                      importa na prática.
                    </Text>
                    <Group
                      gap={6}
                      fw={600}
                      style={{ pointerEvents: 'none' }}
                      c="green.6"
                    >
                      <Text size="sm">Ver comparação</Text>
                      <IconArrowRight size={16} />
                    </Group>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* ⟩ O que tem aqui (What It Does) */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" w="100%">
              <Title
                order={2}
                size={isMobile ? 'h3' : 'h2'}
                mb={0}
                style={{ fontWeight: 700 }}
              >
                ⟩ O que tem pra você
              </Title>
              <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing="md"
                w="100%"
              >
                {[
                  {
                    icon: <IconRocket size={28} />,
                    title: 'Jornada em 6 blocos',
                    desc: 'Do básico à decisão, na ordem que faz sentido. Código, trade-offs e link do artigo respectivo quando existir.',
                  },
                  {
                    icon: <IconTrendingUp size={28} />,
                    title: '19 casos com link',
                    desc: 'Netflix, eBay, Shopify e outros. Cada caso com link do artigo respectivo. Você lê e tira suas conclusões.',
                  },
                  {
                    icon: <IconTarget size={28} />,
                    title: 'Decision Wizard',
                    desc: 'Responde umas perguntas e leva uma recomendação pro time. Bom ponto de partida pro ADR.',
                  },
                  {
                    icon: <IconShield size={28} />,
                    title: 'ADR e migração',
                    desc: 'Documentar a decisão e migrar incrementalmente, sem big bang.',
                  },
                  {
                    icon: <IconBolt size={28} />,
                    title: 'Só fonte que dá pra checar',
                    desc: 'Tudo citável. Nada de métrica que você não consiga abrir e ler.',
                  },
                  {
                    icon: <IconScale size={28} />,
                    title: '30+ exemplos de código',
                    desc: 'Código que você copia, adapta e leva pro seu projeto.',
                  },
                ].map(({ icon, title, desc }) => (
                  <Card
                    key={title}
                    withBorder
                    p="lg"
                    radius="lg"
                    h="100%"
                    style={{ transition: 'box-shadow 0.2s ease' }}
                  >
                    <Stack gap="md">
                      <Group
                        gap="sm"
                        align="flex-start"
                        wrap="nowrap"
                        justify="flex-start"
                      >
                        <ThemeIcon
                          size={48}
                          radius="md"
                          variant="light"
                          color="green"
                          style={{ flexShrink: 0 }}
                        >
                          {icon}
                        </ThemeIcon>
                        <Text
                          fw={700}
                          size="sm"
                          style={{ minWidth: 0 }}
                          lh={1.2}
                        >
                          {title}
                        </Text>
                      </Group>
                      <Text size="md" c="dimmed" lh={1.5}>
                        {desc}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* ⟩ Casos reais com fonte */}
          <motion.section variants={itemVariants}>
            <Paper
              withBorder
              p={isMobile ? 'xs' : 'xl'}
              radius="lg"
              className="cases-section"
            >
              <Stack gap={isMobile ? 'lg' : 'xl'} align="center">
                <Stack gap="xs" align="center" ta="center">
                  <Title
                    order={2}
                    size={isMobile ? 'h3' : 'h2'}
                    mb={0}
                    style={{ fontWeight: 700 }}
                  >
                    ⟩ 19 casos reais com link do artigo
                  </Title>
                  <Text
                    size={isMobile ? 'sm' : 'md'}
                    c="dimmed"
                    maw={560}
                    lh={1.6}
                  >
                    Netflix, Spotify, Airbnb, eBay e mais: como cada um resolveu
                    desafio de arquitetura. Cada caso tem o link do artigo
                    original — você abre, lê e leva pro seu contexto.
                  </Text>
                </Stack>

                <Box
                  style={{
                    width: '100%',
                    maxWidth: 560,
                    padding: isMobile ? 6 : 24,
                    borderRadius: 12,
                    background: 'var(--mantine-color-default-hover)',
                    border: '1px solid var(--mantine-color-default-border)',
                  }}
                >
                  <Flex gap="xs" wrap="wrap" justify="center" align="center">
                    {(casesData as { company: string; icon: string }[])
                      .slice(0, 10)
                      .map(c => (
                        <Group
                          key={c.company}
                          gap={6}
                          wrap="nowrap"
                          style={{
                            padding: '6px 12px',
                            borderRadius: 8,
                            background: 'var(--mantine-color-body)',
                            border:
                              '1px solid var(--mantine-color-default-border)',
                          }}
                        >
                          <Text
                            span
                            style={{ fontSize: '1.125rem' }}
                            aria-hidden
                          >
                            {c.icon}
                          </Text>
                          <Text size="sm" fw={600}>
                            {c.company}
                          </Text>
                        </Group>
                      ))}
                    <Text size="sm" fw={600} c="dimmed">
                      +9
                    </Text>
                  </Flex>
                </Box>

                <Button
                  component={Link}
                  to="/guides/cases"
                  size={isMobile ? 'md' : 'lg'}
                  variant="filled"
                  color="green"
                  radius="md"
                  rightSection={<IconExternalLink size={18} />}
                >
                  Ver todos os 19 casos
                </Button>
              </Stack>
            </Paper>
          </motion.section>

          {/* Por que isso te ajuda */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" ta="center">
              <Title
                order={2}
                size={isMobile ? 'h3' : 'h2'}
                mb={0}
                style={{ fontWeight: 700 }}
              >
                ⟩ Por que isso te ajuda
              </Title>
              <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw="90%">
                Você consegue justificar escolha com caso e fonte, evitar
                refatoração à toa e falar a mesma língua que o time e quem
                segura a grana.
              </Text>

              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
              >
                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'md'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 60 : 50}
                      radius="xl"
                      variant="light"
                    >
                      <IconShield size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Menos retrabalho
                    </Title>
                    <Text
                      size={isMobile ? 'md' : 'sm'}
                      c="dimmed"
                      style={{ lineHeight: 1.6 }}
                    >
                      Escolher com critério desde o começo poupa tempo. Quando
                      precisar mudar, tem guia de migração incremental.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'md'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 60 : 50}
                      radius="xl"
                      variant="light"
                    >
                      <IconTarget size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Argumento na reunião
                    </Title>
                    <Text
                      size={isMobile ? 'md' : 'sm'}
                      c="dimmed"
                      style={{ lineHeight: 1.6 }}
                    >
                      Trade-offs e fontes por decisão. O wizard te dá uma
                      recomendação; você leva pro ADR e pro time.
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* ⟩ Conteúdo em destaque */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" w="100%">
              <Stack gap="xs" align="center" ta="center">
                <Title
                  order={2}
                  mb={0}
                  size={isMobile ? 'h3' : 'h2'}
                  style={{ fontWeight: 700 }}
                >
                  ⟩ Destaques
                </Title>
                <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw="90%">
                  Dois que mais ajudam na hora de decidir: comparação de
                  arquiteturas e os casos com link dos artigos respectivos.
                </Text>
              </Stack>

              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
                style={{ alignItems: 'stretch' }}
              >
                {/* Cases em primeiro – destaque principal */}
                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'md'}
                  radius="lg"
                  component={Link}
                  to="/guides/cases"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  className="destaque-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon size={48} radius="md" variant="light">
                        <IconTrendingUp size={26} />
                      </ThemeIcon>
                      <Badge variant="filled" size="sm" radius="sm">
                        Destaque
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        19 Casos Reais de Mercado
                      </Text>
                      <Text
                        size={isMobile ? 'md' : 'sm'}
                        c="dimmed"
                        style={{ lineHeight: 1.5 }}
                      >
                        Cada caso com link do artigo respectivo. Você abre, lê e
                        leva pro seu contexto.
                      </Text>
                    </Stack>
                    <Group gap={4} fw={500} style={{ pointerEvents: 'none' }}>
                      <Text size="sm">Ver todos os casos</Text>
                      <IconArrowRight size={14} />
                    </Group>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'xs' : 'md'}
                  radius="lg"
                  component={Link}
                  to="/guides/architecture-comparison"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  className="destaque-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon size={48} radius="md" variant="light">
                        <IconScale size={26} />
                      </ThemeIcon>
                      <Badge variant="light" size="sm" radius="sm">
                        Comparação
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Comparação Visual de Arquiteturas
                      </Text>
                      <Text
                        size={isMobile ? 'md' : 'sm'}
                        c="dimmed"
                        style={{ lineHeight: 1.5 }}
                      >
                        Tudo lado a lado: quando usar, prós, contras e o que
                        importa na hora de decidir.
                      </Text>
                    </Stack>
                    <Group gap={4} fw={500} style={{ pointerEvents: 'none' }}>
                      <Text size="sm">Ver comparação</Text>
                      <IconArrowRight size={14} />
                    </Group>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* Final CTA - Simplificado */}
          <motion.section variants={itemVariants}>
            <Paper
              withBorder
              p={isMobile ? 'xs' : 'md'}
              radius="lg"
              ta="center"
            >
              <Stack gap={isMobile ? 'md' : 'sm'} align="center">
                <Title order={2} size={isMobile ? 'h4' : 'h3'}>
                  Não sabe por onde começar?
                </Title>
                <Text
                  size={isMobile ? 'sm' : 'md'}
                  c="dimmed"
                  style={{ lineHeight: 1.6 }}
                >
                  Responde umas perguntas no wizard e leva uma recomendação pro
                  seu contexto.
                </Text>
                <Button
                  component={Link}
                  to="/guides/how-to-choose"
                  size={isMobile ? 'lg' : 'md'}
                  variant="filled"
                  color="green"
                  fullWidth={isMobile}
                  leftSection={<IconRocket size={isMobile ? 20 : 18} />}
                  rightSection={<IconArrowRight size={isMobile ? 18 : 16} />}
                >
                  Começar o wizard
                </Button>
              </Stack>
            </Paper>
          </motion.section>
        </Stack>
      </motion.div>
    </Box>
  );
}
