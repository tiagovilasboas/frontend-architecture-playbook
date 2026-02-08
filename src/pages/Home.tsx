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
                  padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
                  width: '100%',
                  maxWidth: 900,
                }}
                gap={isMobile ? 'xl' : '2xl'}
              >
                <Stack gap="md" align="center">
                  <HeroTitle
                    size={isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '3.5rem'}
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
                    O guia que faz coisas de verdade.
                  </Text>

                  <Text
                    size={isMobile ? 'sm' : 'md'}
                    c="dimmed"
                    style={{
                      maxWidth: isMobile ? '100%' : 520,
                      lineHeight: 1.5,
                    }}
                  >
                    Jornada em 6 blocos. 19 casos com link pro artigo. Wizard pra decidir. ADR em 2 páginas.
                  </Text>
                  <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                    Tudo com fonte. Dá pra levar pra reunião.
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
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0} style={{ fontWeight: 700 }}>
                ⟩ Comece aqui
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={isMobile ? 'md' : 'lg'} w="100%" style={{ alignItems: 'stretch' }}>
                <Card withBorder p={isMobile ? 'lg' : 'md'} radius="lg" component={Link} to="/guides/dependency-rule" style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="comece-aqui-card">
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge color="brand" variant="filled" size="xl" radius="xl">1</Badge>
                      <ThemeIcon size={44} radius="md" variant="light" color="brand"><IconShield size={24} /></ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>Dependency Rule</Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>Dependências só apontam pra dentro. Base de qualquer arquitetura.</Text>
                    </Stack>
                    <Button size="sm" variant="light" color="brand" rightSection={<IconArrowRight size={14} />} fullWidth>Ler o guia</Button>
                  </Stack>
                </Card>
                <Card withBorder p={isMobile ? 'lg' : 'md'} radius="lg" component={Link} to="/guides/how-to-choose" style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="comece-aqui-card">
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge color="brand" variant="filled" size="xl" radius="xl">2</Badge>
                      <ThemeIcon size={44} radius="md" variant="light" color="brand"><IconTarget size={24} /></ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>Decision Wizard</Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>Perguntas sobre seu projeto e você leva uma recomendação pro time.</Text>
                    </Stack>
                    <Button size="sm" variant="light" color="brand" rightSection={<IconArrowRight size={14} />} fullWidth>Começar o wizard</Button>
                  </Stack>
                </Card>
                <Card withBorder p={isMobile ? 'lg' : 'md'} radius="lg" component={Link} to="/guides/architecture-comparison" style={{ textDecoration: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} className="comece-aqui-card">
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge color="brand" variant="filled" size="xl" radius="xl">3</Badge>
                      <ThemeIcon size={44} radius="md" variant="light" color="brand"><IconScale size={24} /></ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>Comparação Visual</Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>Quando usar cada uma, prós, contras e o que importa na prática.</Text>
                    </Stack>
                    <Button size="sm" variant="light" color="brand" rightSection={<IconArrowRight size={14} />} fullWidth>Ver comparação</Button>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* ⟩ O que tem aqui (What It Does) */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" w="100%">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0} style={{ fontWeight: 700 }}>
                ⟩ O que tem aqui
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" w="100%">
                {[
                  { icon: <IconRocket size={28} />, title: 'Jornada em 6 blocos', desc: 'Do fundamento à decisão. Código, trade-offs e link pro tech blog.' },
                  { icon: <IconTrendingUp size={28} />, title: '19 casos reais', desc: 'Netflix, eBay, Shopify e outros. Cada um com link pro artigo.' },
                  { icon: <IconTarget size={28} />, title: 'Decision Wizard', desc: 'Responde perguntas e leva recomendação de arquitetura pro time.' },
                  { icon: <IconShield size={28} />, title: 'ADR e migração', desc: 'Como documentar decisões e migrar sem big bang.' },
                  { icon: <IconBolt size={28} />, title: '100% fontes reais', desc: 'Tudo citável. Nada de métrica que não dá pra checar.' },
                  { icon: <IconScale size={28} />, title: '30+ code examples', desc: 'Exemplos que você pode copiar e adaptar.' },
                ].map(({ icon, title, desc }) => (
                  <Card key={title} withBorder p="md" radius="md" h="100%">
                    <Stack gap="sm">
                      <ThemeIcon size={48} radius="md" variant="light" color="brand">{icon}</ThemeIcon>
                      <Text fw={600} size="sm">{title}</Text>
                      <Text size="xs" c="dimmed" lh={1.4}>{desc}</Text>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* ⟩ Quem já fez */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'lg' : 'xl'} radius="lg" style={{ background: 'var(--mantine-color-accent-0)', borderColor: 'var(--mantine-color-accent-3)', borderWidth: 2 }}>
              <Stack gap={isMobile ? 'md' : 'lg'} align="center">
                <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0} style={{ fontWeight: 700 }}>
                  ⟩ Quem já fez
                </Title>
                <Stack gap={4} align="center" ta="center">
                  <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw={560}>
                    Netflix, eBay, Shopify, Zalando e outros. Cada caso com link pro artigo ou tech blog deles. E-commerce, streaming, redes sociais.
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
                    .map((c) => (
                      <Group key={c.company} gap={6} wrap="nowrap">
                        <Text span style={{ fontSize: '1.25rem' }} aria-hidden>
                          {c.icon}
                        </Text>
                        <Text size="sm" fw={500} c="dimmed">
                          {c.company}
                        </Text>
                      </Group>
                    ))}
                  <Text size="sm" c="dimmed">
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

          {/* Value Proposition - Consolidado */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" ta="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0} style={{ fontWeight: 700 }}>
                ⟩ Por que usar
              </Title>
              <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw={560}>
                Você consegue justificar escolhas com casos e fontes, evita refatoração desnecessária e fala a mesma língua que o time (e quem decide orçamento).
              </Text>

              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
              >
                <Card withBorder p={isMobile ? 'lg' : 'md'} radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={isMobile ? 60 : 50} radius="xl" variant="light" color="brand">
                      <IconShield size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Menos refatoração depois
                    </Title>
                    <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.6 }}>
                      Escolher certo desde o começo poupa tempo. E quando precisar mudar, tem guia de migração incremental.
                    </Text>
                  </Stack>
                </Card>

                <Card withBorder p={isMobile ? 'lg' : 'md'} radius="md" h="100%">
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon size={isMobile ? 60 : 50} radius="xl" variant="light" color="brand">
                      <IconTarget size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Argumento na reunião
                    </Title>
                    <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.6 }}>
                      Trade-offs e fontes por decisão. Tem até wizard que sugere arquitetura pro seu contexto, e você leva o resultado pro ADR.
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
                <Title order={2} mb={0} size={isMobile ? 'h3' : 'h2'} style={{ fontWeight: 700 }}>
                  ⟩ Conteúdo em destaque
                </Title>
                <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw={520}>
                  Dois destes que mais ajudam na hora de decidir: comparação de arquiteturas e os 19 casos com link pro artigo.
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
                      <ThemeIcon size={48} radius="md" variant="light" color="accent">
                        <IconTrendingUp size={26} />
                      </ThemeIcon>
                      <Badge variant="filled" color="accent" size="sm" radius="sm">
                        Destaque
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        19 Casos Reais de Mercado
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>
                        Netflix, eBay, Shopify, Etsy, Zalando e mais. Cada um com link pro artigo.
                      </Text>
                    </Stack>
                    <Button
                      size="sm"
                      variant="light"
                      color="accent"
                      rightSection={<IconArrowRight size={14} />}
                      fullWidth
                    >
                      Ver todos os casos
                    </Button>
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
                      <ThemeIcon size={48} radius="md" variant="light" color="brand">
                        <IconScale size={26} />
                      </ThemeIcon>
                      <Badge variant="light" color="brand" size="sm" radius="sm">
                        Comparação
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Comparação Visual de Arquiteturas
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>
                        Tudo lado a lado: quando usar, prós, contras e o que importa na hora de decidir.
                      </Text>
                    </Stack>
                    <Button
                      size="sm"
                      variant="light"
                      color="brand"
                      rightSection={<IconArrowRight size={14} />}
                      fullWidth
                    >
                      Ver comparação
                    </Button>
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
                  c="dimmed"
                  style={{ lineHeight: 1.6 }}
                >
                  Responde umas perguntas no wizard e vê qual arquitetura faz mais sentido pro seu projeto.
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
                  Encontre sua Arquitetura
                </Button>
              </Stack>
            </Paper>
          </motion.section>
        </Stack>
      </motion.div>
    </Box>
  );
}
