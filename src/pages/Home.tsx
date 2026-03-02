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
    <Box px={isMobile ? 'md' : 'md'} mt={0}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack gap={isMobile ? 'xl' : 'xl'}>
          {/* Hero Section */}
          <motion.section variants={itemVariants}>
            <Box
              style={{
                position: 'relative',
                width: '100%',
                minHeight: isMobile ? 420 : 520,
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
                  padding: isMobile ? '3rem 0' : '4rem 0',
                  width: '100%',
                  maxWidth: 900,
                }}
                gap={isMobile ? 'xl' : '2xl'}
              >
                <Stack gap="md" align="center">
                  <HeroTitle
                    size={
                      isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '3.5rem'
                    }
                    mb={0}
                    style={{
                      lineHeight: 1.15,
                      fontWeight: 800,
                      maxWidth: '100%',
                    }}
                  >
                    Front-End Architecture Playbook
                  </HeroTitle>

                  <Text
                    size={isMobile ? 'lg' : 'xl'}
                    fw={600}
                    style={{
                      maxWidth: isMobile ? '100%' : 560,
                      lineHeight: 1.4,
                    }}
                  >
                    Do fundamento à decisão, com fonte em tudo.
                  </Text>

                  <Text
                    size={isMobile ? 'sm' : 'md'}
                    c="gray.4"
                    style={{
                      maxWidth: isMobile ? '100%' : 520,
                      lineHeight: 1.5,
                    }}
                  >
                    Guias na ordem que faz sentido estudar, casos reais com link
                    dos artigos respectivos, wizard pra te dar uma recomendação
                    e ADR em 2 páginas. Nada de métrica que não dá pra checar.
                    Só o que você consegue ler e usar.
                  </Text>
                </Stack>

                <Group gap="md" justify="center" wrap="wrap">
                  <Button
                    component={Link}
                    to="/guides/how-to-choose"
                    size="lg"
                    variant="filled"
                    color="brand"
                    leftSection={<IconRocket size={20} />}
                    rightSection={<IconArrowRight size={18} />}
                  >
                    Encontre sua Arquitetura
                  </Button>
                  <Button
                    component={Link}
                    to="/guides/dependency-rule"
                    size="lg"
                    variant="subtle"
                    color="brand"
                  >
                    Dependency Rule
                  </Button>
                </Group>
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
                  p={isMobile ? 'lg' : 'md'}
                  radius="lg"
                  component={Link}
                  to="/guides/dependency-rule"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  className="comece-aqui-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge
                        color="brand"
                        variant="filled"
                        size="xl"
                        radius="xl"
                      >
                        1
                      </Badge>
                      <ThemeIcon
                        size={44}
                        radius="md"
                        variant="light"
                        color="brand"
                      >
                        <IconShield size={24} />
                      </ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Dependency Rule
                      </Text>
                      <Text
                        size={isMobile ? 'sm' : 'xs'}
                        c="gray.4"
                        style={{ lineHeight: 1.5 }}
                      >
                        Dependências só apontam pra dentro. A base de tudo.
                      </Text>
                    </Stack>
                    <Group
                      gap={4}
                      c="brand.6"
                      fw={500}
                      style={{ pointerEvents: 'none' }}
                    >
                      <Text size="sm">Ler o guia</Text>
                      <IconArrowRight size={14} />
                    </Group>
                  </Stack>
                </Card>
                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="lg"
                  component={Link}
                  to="/guides/how-to-choose"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  className="comece-aqui-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge
                        color="brand"
                        variant="filled"
                        size="xl"
                        radius="xl"
                      >
                        2
                      </Badge>
                      <ThemeIcon
                        size={44}
                        radius="md"
                        variant="light"
                        color="brand"
                      >
                        <IconTarget size={24} />
                      </ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Decision Wizard
                      </Text>
                      <Text
                        size={isMobile ? 'sm' : 'xs'}
                        c="gray.4"
                        style={{ lineHeight: 1.5 }}
                      >
                        Responde umas perguntas e leva uma recomendação pro
                        time.
                      </Text>
                    </Stack>
                    <Group
                      gap={4}
                      c="brand.6"
                      fw={500}
                      style={{ pointerEvents: 'none' }}
                    >
                      <Text size="sm">Começar o wizard</Text>
                      <IconArrowRight size={14} />
                    </Group>
                  </Stack>
                </Card>
                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="lg"
                  component={Link}
                  to="/guides/architecture-comparison"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  className="comece-aqui-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge
                        color="brand"
                        variant="filled"
                        size="xl"
                        radius="xl"
                      >
                        3
                      </Badge>
                      <ThemeIcon
                        size={44}
                        radius="md"
                        variant="light"
                        color="brand"
                      >
                        <IconScale size={24} />
                      </ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Comparação Visual
                      </Text>
                      <Text
                        size={isMobile ? 'sm' : 'xs'}
                        c="gray.4"
                        style={{ lineHeight: 1.5 }}
                      >
                        Tudo lado a lado: quando usar, prós, contras e o que
                        importa na prática.
                      </Text>
                    </Stack>
                    <Group
                      gap={4}
                      c="brand.6"
                      fw={500}
                      style={{ pointerEvents: 'none' }}
                    >
                      <Text size="sm">Ver comparação</Text>
                      <IconArrowRight size={14} />
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
                  <Card key={title} withBorder p="md" radius="md" h="100%">
                    <Stack gap="sm">
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
                          color="brand"
                          style={{ flexShrink: 0 }}
                        >
                          {icon}
                        </ThemeIcon>
                        <Text fw={600} size="sm" style={{ minWidth: 0 }}>
                          {title}
                        </Text>
                      </Group>
                      <Text size="xs" c="gray.4" lh={1.4}>
                        {desc}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* ⟩ Casos com fonte */}
          <motion.section variants={itemVariants}>
            <Paper
              withBorder
              p={isMobile ? 'lg' : 'xl'}
              radius="lg"
              style={{
                background: 'var(--mantine-color-accent-0)',
                borderColor: 'var(--mantine-color-accent-3)',
                borderWidth: 2,
              }}
            >
              <Stack gap={isMobile ? 'md' : 'lg'} align="center">
                <Title
                  order={2}
                  size={isMobile ? 'h3' : 'h2'}
                  mb={0}
                  style={{ fontWeight: 700 }}
                >
                  ⟩ Casos com link dos artigos respectivos
                </Title>
                <Stack gap={4} align="center" ta="center">
                  <Text size={isMobile ? 'sm' : 'md'} c="gray.4" maw={560}>
                    Netflix, eBay, Shopify, Zalando e outros publicaram como
                    fazem. Cada caso aqui tem o link do artigo respectivo. Não é
                    resumo solto, é onde você abre e lê.
                  </Text>
                </Stack>

                <Flex
                  gap="sm"
                  wrap="wrap"
                  justify="center"
                  align="center"
                  style={{ minHeight: 44 }}
                >
                  {(casesData as { company: string; icon: string }[])
                    .slice(0, 10)
                    .map(c => (
                      <Group key={c.company} gap={6} wrap="nowrap">
                        <Text span style={{ fontSize: '1.25rem' }} aria-hidden>
                          {c.icon}
                        </Text>
                        <Text size="sm" fw={500} c="gray.4">
                          {c.company}
                        </Text>
                      </Group>
                    ))}
                  <Text size="sm" c="gray.4">
                    +9
                  </Text>
                </Flex>

                <Button
                  component={Link}
                  to="/guides/cases"
                  size={isMobile ? 'md' : 'lg'}
                  variant="filled"
                  color="accent"
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
              <Text size={isMobile ? 'sm' : 'md'} c="gray.4" maw={560}>
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
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 60 : 50}
                      radius="xl"
                      variant="light"
                      color="brand"
                    >
                      <IconShield size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Menos retrabalho
                    </Title>
                    <Text
                      size={isMobile ? 'sm' : 'xs'}
                      c="gray.4"
                      style={{ lineHeight: 1.6 }}
                    >
                      Escolher com critério desde o começo poupa tempo. Quando
                      precisar mudar, tem guia de migração incremental.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 60 : 50}
                      radius="xl"
                      variant="light"
                      color="brand"
                    >
                      <IconTarget size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Argumento na reunião
                    </Title>
                    <Text
                      size={isMobile ? 'sm' : 'xs'}
                      c="gray.4"
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
                <Text size={isMobile ? 'sm' : 'md'} c="gray.4" maw={520}>
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
                  p={isMobile ? 'lg' : 'md'}
                  radius="lg"
                  component={Link}
                  to="/guides/cases"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    borderColor: 'var(--mantine-color-accent-4)',
                    borderWidth: 2,
                  }}
                  className="destaque-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon
                        size={48}
                        radius="md"
                        variant="light"
                        color="accent"
                      >
                        <IconTrendingUp size={26} />
                      </ThemeIcon>
                      <Badge
                        variant="filled"
                        color="accent"
                        size="sm"
                        radius="sm"
                      >
                        Destaque
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        19 Casos Reais de Mercado
                      </Text>
                      <Text
                        size={isMobile ? 'sm' : 'xs'}
                        c="gray.4"
                        style={{ lineHeight: 1.5 }}
                      >
                        Cada caso com link do artigo respectivo. Você abre, lê e
                        leva pro seu contexto.
                      </Text>
                    </Stack>
                    <Group
                      gap={4}
                      c="accent.6"
                      fw={500}
                      style={{ pointerEvents: 'none' }}
                    >
                      <Text size="sm">Ver todos os casos</Text>
                      <IconArrowRight size={14} />
                    </Group>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
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
                      <ThemeIcon
                        size={48}
                        radius="md"
                        variant="light"
                        color="brand"
                      >
                        <IconScale size={26} />
                      </ThemeIcon>
                      <Badge
                        variant="light"
                        color="brand"
                        size="sm"
                        radius="sm"
                      >
                        Comparação
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Comparação Visual de Arquiteturas
                      </Text>
                      <Text
                        size={isMobile ? 'sm' : 'xs'}
                        c="gray.4"
                        style={{ lineHeight: 1.5 }}
                      >
                        Tudo lado a lado: quando usar, prós, contras e o que
                        importa na hora de decidir.
                      </Text>
                    </Stack>
                    <Group
                      gap={4}
                      c="brand.6"
                      fw={500}
                      style={{ pointerEvents: 'none' }}
                    >
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
              p={isMobile ? 'lg' : 'md'}
              radius="lg"
              ta="center"
            >
              <Stack gap={isMobile ? 'md' : 'sm'} align="center">
                <Title order={2} size={isMobile ? 'h4' : 'h3'}>
                  Não sabe por onde começar?
                </Title>
                <Text
                  size={isMobile ? 'sm' : 'md'}
                  c="gray.4"
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
