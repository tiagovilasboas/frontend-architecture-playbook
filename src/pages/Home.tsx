import {
  Title,
  Stack,
  Text,
  Button,
  Group,
  Avatar,
  Paper,
  Container,
  SimpleGrid,
  Alert,
  Badge,
  Card,
  ThemeIcon,
  Accordion,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { HeroTitle, FeatureCard, StatsCard } from '../components/ui';
import { motion } from 'framer-motion';
import {
  IconRocket,
  IconBrandGithub,
  IconShield,
  IconArrowRight,
  IconBrandLinkedin,
  IconStar,
  IconAward,
  IconCheck,
  IconCode,
  IconBook,
  IconBuilding,
  IconPuzzle,
  IconTools,
  IconStack,
  IconBulb,
  IconTarget,
  IconTrendingUp,
  IconBolt,
  IconScale,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

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
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 400px)');

  // Helper para desabilitar animações em mobile
  const mobileAnimationProps = isMobile
    ? {}
    : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  return (
    <Container size="lg" px={isMobile ? 'xs' : 'md'} mt={0}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack gap={isMobile ? 'md' : 'xl'}>
          {/* Hero Section - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Stack
              align="center"
              ta="center"
              mb={isMobile ? 'xl' : '2xl'}
              mt={0}
              gap={isMobile ? 'md' : 'lg'}
            >
              <HeroTitle
                size={isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '4rem'}
                mb={0}
                style={{ lineHeight: 1.1, fontWeight: 800 }}
              >
                Front-End Architecture Playbook
              </HeroTitle>

              <Text
                size={isMobile ? 'lg' : 'xl'}
                c="dimmed"
                mb={0}
                style={{
                  maxWidth: isMobile ? '100%' : 800,
                  margin: '0 auto',
                  lineHeight: 1.6,
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                }}
              >
                20 anos de front-end resumidos:{' '}
                <strong style={{ color: 'var(--mantine-color-text)' }}>
                  arquitetura não é luxo, é sobrevivência
                </strong>
                . Escolha errada custa caro, escolha certa salva projeto.
              </Text>

              <Group gap="md" mt="md">
                <motion.div {...mobileAnimationProps}>
                  <Button
                    component={Link}
                    to="/guides/how-to-choose"
                    size={isMobile ? 'md' : 'lg'}
                    variant="filled"
                    leftSection={<IconRocket size={isMobile ? 18 : 20} />}
                    rightSection={<IconArrowRight size={isMobile ? 14 : 16} />}
                  >
                    Encontre sua Arquitetura
                  </Button>
                </motion.div>
                <motion.div {...mobileAnimationProps}>
                  <Button
                    component={Link}
                    to="/guides/dependency-rule"
                    size={isMobile ? 'md' : 'lg'}
                    variant="light"
                    leftSection={<IconShield size={isMobile ? 18 : 20} />}
                  >
                    Dependency Rule
                  </Button>
                </motion.div>
              </Group>

              {/* Stats inline - estilo moltbot */}
              <SimpleGrid
                cols={{ base: 2, sm: 4 }}
                spacing={isMobile ? 'md' : 'xl'}
                mt={isMobile ? 'xl' : '2xl'}
                w="100%"
                style={{ maxWidth: 800 }}
              >
                <Stack gap={4} align="center">
                  <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="brand">
                    13+
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Arquiteturas
                  </Text>
                </Stack>
                <Stack gap={4} align="center">
                  <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="green">
                    20
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Anos Dev
                  </Text>
                </Stack>
                <Stack gap={4} align="center">
                  <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="orange">
                    50+
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Projetos
                  </Text>
                </Stack>
                <Stack gap={4} align="center">
                  <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="purple">
                    16
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Casos Reais
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* Why Choose Section - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'lg' : 'xl'} align="center" ta="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0}>
                Por que escolher este Playbook?
              </Title>
              <Text
                size={isMobile ? 'md' : 'lg'}
                c="dimmed"
                maw={isMobile ? '100%' : 700}
                mb="xl"
              >
                Um guia prático de arquitetura front-end construído com base em
                experiência real e casos de uso comprovados.
              </Text>

              <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
              >
                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="blue"
                    >
                      <IconShield size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Evita Refatoração
                    </Title>
                    <Text size="sm" c="dimmed">
                      Escolha certa desde o início. Economize meses de dívida
                      técnica e evite refatorações custosas.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="green"
                    >
                      <IconRocket size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Decisões Sólidas
                    </Title>
                    <Text size="sm" c="dimmed">
                      Base para justificar escolhas. Não mais 'achismo' técnico,
                      mas decisões fundamentadas em métricas reais.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="orange"
                    >
                      <IconBolt size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Experiência Real
                    </Title>
                    <Text size="sm" c="dimmed">
                      20 anos convertidos em decisões práticas. Não é teoria,
                      são casos reais de empresas como Netflix, Spotify e
                      Airbnb.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="purple"
                    >
                      <IconTarget size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Decision Wizard
                    </Title>
                    <Text size="sm" c="dimmed">
                      Ferramenta interativa que ajuda a escolher a arquitetura
                      ideal baseada no seu contexto específico.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="teal"
                    >
                      <IconScale size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Comparação Visual
                    </Title>
                    <Text size="sm" c="dimmed">
                      Compare 9 arquiteturas com métricas visuais. Análise
                      detalhada de trade-offs e casos de uso.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="red"
                    >
                      <IconTrendingUp size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Casos Reais
                    </Title>
                    <Text size="sm" c="dimmed">
                      16 empresas, resultados reais. Veja como Netflix, Spotify,
                      Airbnb e outros resolveram problemas reais.
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* Quick Start Section */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg">
              <Stack gap="md" align="center" ta="center">
                <Title order={2} mb="sm">
                  <IconRocket
                    size={isMobile ? 24 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Comece Aqui
                </Title>

                <SimpleGrid
                  cols={{ base: 1, md: 4 }}
                  spacing={isMobile ? 'sm' : 'md'}
                  w="100%"
                >
                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="sm" align="center" ta="center">
                      <Badge color="blue" variant="light">
                        1
                      </Badge>
                      <IconBulb size={isMobile ? 20 : 24} />
                      <Text fw={600}>Dependency Rule</Text>
                      <Text size="sm" c="dimmed">
                        Regra fundamental
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/dependency-rule"
                        size="sm"
                        variant="light"
                        color="blue"
                      >
                        Ler
                      </Button>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="sm" align="center" ta="center">
                      <Badge color="green" variant="light">
                        2
                      </Badge>
                      <IconTarget size={isMobile ? 20 : 24} />
                      <Text fw={600}>Decision Wizard</Text>
                      <Text size="sm" c="dimmed">
                        Escolha sua arquitetura
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/how-to-choose"
                        size="sm"
                        variant="light"
                        color="green"
                      >
                        Começar
                      </Button>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="sm" align="center" ta="center">
                      <Badge color="orange" variant="light">
                        3
                      </Badge>
                      <IconScale size={isMobile ? 20 : 24} />
                      <Text fw={600}>Comparação</Text>
                      <Text size="sm" c="dimmed">
                        Analise métricas
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/architecture-comparison"
                        size="sm"
                        variant="light"
                        color="orange"
                      >
                        Comparar
                      </Button>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="sm" align="center" ta="center">
                      <Badge color="purple" variant="light">
                        16
                      </Badge>
                      <IconTrendingUp size={isMobile ? 20 : 24} />
                      <Text fw={600}>Casos Reais</Text>
                      <Text size="sm" c="dimmed">
                        Prova de ROI
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/cases"
                        size="sm"
                        variant="light"
                        color="purple"
                      >
                        Ver Casos
                      </Button>
                    </Stack>
                  </Card>
                </SimpleGrid>
              </Stack>
            </Paper>
          </motion.section>

          {/* Interactive Tools Section */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg">
              <Stack gap="md" align="center" ta="center">
                <Title order={2} mb="sm">
                  <IconTools
                    size={isMobile ? 24 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Ferramentas Interativas
                </Title>

                <Text
                  size={isMobile ? 'md' : 'lg'}
                  c="dimmed"
                  maw={isMobile ? 340 : 600}
                >
                  Não é só teoria. Use as ferramentas para tomar decisões
                  práticas.
                </Text>

                <SimpleGrid
                  cols={{ base: 1, md: 2 }}
                  spacing={isMobile ? 'md' : 'lg'}
                  w="100%"
                >
                  <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                    <Stack gap="sm" align="center" ta="center">
                      <ThemeIcon
                        size={isMobile ? 50 : 60}
                        radius="xl"
                        variant="light"
                        color="blue"
                      >
                        <IconTarget size={isMobile ? 25 : 30} />
                      </ThemeIcon>
                      <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                        Decision Wizard v3.0
                      </Title>
                      <Text size="sm" c="dimmed" ta="center">
                        6 perguntas para encontrar sua arquitetura ideal.
                        Recomendações baseadas em contexto real.
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/how-to-choose"
                        size="md"
                        variant="filled"
                        color="blue"
                      >
                        Começar Wizard
                      </Button>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                    <Stack gap="sm" align="center" ta="center">
                      <ThemeIcon
                        size={isMobile ? 50 : 60}
                        radius="xl"
                        variant="light"
                        color="green"
                      >
                        <IconScale size={isMobile ? 25 : 30} />
                      </ThemeIcon>
                      <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                        Comparação Visual
                      </Title>
                      <Text size="sm" c="dimmed" ta="center">
                        Compare 9 arquiteturas com métricas visuais. Análise
                        detalhada de trade-offs e casos de uso.
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/architecture-comparison"
                        size="md"
                        variant="filled"
                        color="green"
                      >
                        Ver Comparação
                      </Button>
                    </Stack>
                  </Card>
                </SimpleGrid>
              </Stack>
            </Paper>
          </motion.section>

          {/* Analogia da Rodovia - Versão concisa */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg">
              <Stack gap="md" align="center" ta="center">
                <Group justify="center" gap={isMobile ? 'xs' : 'sm'}>
                  <IconBuilding size={isMobile ? 20 : 28} />
                  <Title order={2} size={isMobile ? 'h4' : 'h3'}>
                    Arquitetura é como Rodovia
                  </Title>
                </Group>

                <Text
                  size={isMobile ? 'md' : 'lg'}
                  c="dimmed"
                  lh={1.6}
                  maw={isMobile ? 340 : 600}
                >
                  <strong>Rodovia bem planejada:</strong> pistas largas,
                  sinalização clara, saídas estratégicas.
                  <br />
                  <strong>Software bem arquitetado:</strong> componentes
                  desacoplados, testes automatizados, pontos de extensão.
                </Text>

                <SimpleGrid
                  cols={{ base: 1, sm: 3 }}
                  spacing={isMobile ? 'sm' : 'md'}
                  w="100%"
                  mt="sm"
                >
                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="xs" align="center" ta="center">
                      <ThemeIcon
                        size={isMobile ? 'md' : 'lg'}
                        variant="light"
                        color="green"
                      >
                        <IconRocket size={isMobile ? 16 : 20} />
                      </ThemeIcon>
                      <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                        Pistas Largas
                      </Text>
                      <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                        = componentes desacoplados
                      </Text>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="xs" align="center" ta="center">
                      <ThemeIcon
                        size={isMobile ? 'md' : 'lg'}
                        variant="light"
                        color="orange"
                      >
                        <IconShield size={isMobile ? 16 : 20} />
                      </ThemeIcon>
                      <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                        Radares
                      </Text>
                      <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                        = testes automatizados
                      </Text>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'sm' : 'md'} radius="md">
                    <Stack gap="xs" align="center" ta="center">
                      <ThemeIcon
                        size={isMobile ? 'md' : 'lg'}
                        variant="light"
                        color="purple"
                      >
                        <IconPuzzle size={isMobile ? 16 : 20} />
                      </ThemeIcon>
                      <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                        Saídas
                      </Text>
                      <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                        = pontos de extensão
                      </Text>
                    </Stack>
                  </Card>
                </SimpleGrid>

                <Alert
                  color="brand"
                  icon={<IconBulb size={isMobile ? 16 : 20} />}
                  radius="md"
                  mt="md"
                >
                  <Text size={isMobile ? 'sm' : 'md'}>
                    <strong>Sem base sólida:</strong> bugs, deploy quebrado,
                    time estressado.
                    <strong> Com base sólida:</strong> features voam, usuário
                    nem imagina o perrengue que você evitou.
                  </Text>
                </Alert>
              </Stack>
            </Paper>
          </motion.section>

          {/* What Can You Learn Section - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'lg' : 'xl'} align="center" ta="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0}>
                O que você pode aprender
              </Title>
              <Text
                size={isMobile ? 'md' : 'lg'}
                c="dimmed"
                maw={isMobile ? '100%' : 700}
                mb="xl"
              >
                Conteúdo prático para arquitetura front-end, desde fundamentos
                até padrões avançados.
              </Text>

              <SimpleGrid
                cols={{ base: 1, sm: 2, md: 4 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
              >
                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="blue"
                    >
                      <IconBook size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Guias Práticos
                    </Title>
                    <Text size="sm" c="dimmed">
                      Decision wizard + regra fundamental de arquitetura. Zero
                      teoria, só o que funciona.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="green"
                    >
                      <IconCheck size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Boas Práticas
                    </Title>
                    <Text size="sm" c="dimmed">
                      DRY, KISS, YAGNI, Clean Code. Os princípios que toda base
                      sólida precisa.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="orange"
                    >
                      <IconStack size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Arquiteturas
                    </Title>
                    <Text size="sm" c="dimmed">
                      13 padrões testados: Clean Architecture, Micro-frontends,
                      Monorepo, SSR/SSG e mais.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'md' : 'lg'}
                  radius="md"
                  h="100%"
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="purple"
                    >
                      <IconPuzzle size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Padrões & Técnicas
                    </Title>
                    <Text size="sm" c="dimmed">
                      Design patterns, otimizações e técnicas específicas de
                      front-end.
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* Built for Developers Section - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="lg">
              <Stack gap={isMobile ? 'lg' : 'xl'}>
                <Title
                  order={2}
                  size={isMobile ? 'h3' : 'h2'}
                  ta="center"
                  mb={0}
                >
                  Construído para Desenvolvedores
                </Title>
                <Text
                  size={isMobile ? 'md' : 'lg'}
                  c="dimmed"
                  ta="center"
                  maw={700}
                  mx="auto"
                  mb="xl"
                >
                  Uma base técnica robusta para automação séria de arquitetura
                  front-end.
                </Text>

                <SimpleGrid
                  cols={{ base: 1, md: 2 }}
                  spacing={isMobile ? 'md' : 'xl'}
                >
                  <Stack gap="md">
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Arquitetura Core
                    </Title>
                    <Stack gap="xs">
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-blue-6)"
                        />
                        <Text size="sm">TypeScript-first</Text>
                      </Group>
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-green-6)"
                        />
                        <Text size="sm">Pure functions & types</Text>
                      </Group>
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-orange-6)"
                        />
                        <Text size="sm">Dependency Rule enforcement</Text>
                      </Group>
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-purple-6)"
                        />
                        <Text size="sm">Layered architecture patterns</Text>
                      </Group>
                    </Stack>
                  </Stack>

                  <Stack gap="md">
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Stack Tecnológico
                    </Title>
                    <Stack gap="xs">
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-blue-6)"
                        />
                        <Text size="sm">React + TypeScript</Text>
                      </Group>
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-green-6)"
                        />
                        <Text size="sm">Mantine UI</Text>
                      </Group>
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-orange-6)"
                        />
                        <Text size="sm">Vite build system</Text>
                      </Group>
                      <Group gap="sm">
                        <IconCode
                          size={20}
                          color="var(--mantine-color-purple-6)"
                        />
                        <Text size="sm">React Router</Text>
                      </Group>
                    </Stack>
                  </Stack>
                </SimpleGrid>
              </Stack>
            </Paper>
          </motion.section>

          {/* How It Works Section - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'lg' : 'xl'} align="center" ta="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0}>
                Como Funciona
              </Title>
              <Text
                size={isMobile ? 'md' : 'lg'}
                c="dimmed"
                maw={isMobile ? '100%' : 700}
                mb="xl"
              >
                Uma arquitetura poderosa que conecta você às melhores práticas
                de front-end.
              </Text>

              <Paper
                withBorder
                p={isMobile ? 'md' : 'xl'}
                radius="lg"
                style={{ width: '100%', maxWidth: 800 }}
              >
                <SimpleGrid
                  cols={{ base: 1, sm: 4 }}
                  spacing={isMobile ? 'md' : 'lg'}
                  verticalSpacing={isMobile ? 'md' : 'lg'}
                >
                  <Stack gap="sm" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="blue"
                    >
                      <IconCode size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                      Você
                    </Text>
                    <Text size="xs" c="dimmed">
                      Desenvolvedor
                    </Text>
                  </Stack>

                  <Stack gap="sm" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="green"
                    >
                      <IconTarget size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                      Decision Wizard
                    </Text>
                    <Text size="xs" c="dimmed">
                      Escolha sua arquitetura
                    </Text>
                  </Stack>

                  <Stack gap="sm" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="orange"
                    >
                      <IconBook size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                      Playbook
                    </Text>
                    <Text size="xs" c="dimmed">
                      Guias práticos
                    </Text>
                  </Stack>

                  <Stack gap="sm" align="center" ta="center">
                    <ThemeIcon
                      size={isMobile ? 50 : 60}
                      radius="xl"
                      variant="light"
                      color="purple"
                    >
                      <IconRocket size={isMobile ? 28 : 32} />
                    </ThemeIcon>
                    <Text fw={600} size={isMobile ? 'sm' : 'md'}>
                      Resultado
                    </Text>
                    <Text size="xs" c="dimmed">
                      Arquitetura sólida
                    </Text>
                  </Stack>
                </SimpleGrid>

                <Group justify="center" mt="xl" gap="xs">
                  <Text size="sm" c="dimmed">
                    🔒 Baseada em experiência real
                  </Text>
                  <Text size="sm" c="dimmed">
                    ⚡ Decisões fundamentadas
                  </Text>
                  <Text size="sm" c="dimmed">
                    🛠️ Ferramentas práticas
                  </Text>
                </Group>
              </Paper>
            </Stack>
          </motion.section>

          {/* Featured Content Section */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg">
              <Stack gap="md">
                <Title order={2} ta="center" mb="lg">
                  <IconStar
                    size={isMobile ? 24 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Conteúdo em Destaque
                </Title>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
                  <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                    <Stack gap="sm">
                      <Group>
                        <ThemeIcon
                          size={isMobile ? 35 : 40}
                          radius="md"
                          variant="light"
                          color="blue"
                        >
                          <IconScale size={isMobile ? 18 : 20} />
                        </ThemeIcon>
                        <div>
                          <Text fw={600} size={isMobile ? 'md' : 'lg'}>
                            Comparação Visual
                          </Text>
                          <Text size="sm" c="dimmed">
                            9 arquiteturas comparadas
                          </Text>
                        </div>
                      </Group>
                      <Text size="sm" c="dimmed">
                        Métricas de performance, manutenibilidade, testabilidade
                        e escalabilidade. Análise visual com trade-offs
                        detalhados.
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/architecture-comparison"
                        size="sm"
                        variant="light"
                      >
                        Ver Comparação
                      </Button>
                    </Stack>
                  </Card>

                  <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                    <Stack gap="sm">
                      <Group>
                        <ThemeIcon
                          size={isMobile ? 35 : 40}
                          radius="md"
                          variant="light"
                          color="green"
                        >
                          <IconTrendingUp size={isMobile ? 18 : 20} />
                        </ThemeIcon>
                        <div>
                          <Text fw={600} size={isMobile ? 'md' : 'lg'}>
                            Casos Reais
                          </Text>
                          <Text size="sm" c="dimmed">
                            16 empresas, resultados reais
                          </Text>
                        </div>
                      </Group>
                      <Text size="sm" c="dimmed">
                        Netflix, Spotify, Airbnb, Pinterest, Tinder, Slack,
                        Uber, WhatsApp, Zoom, Figma, Discord, Google,
                        Booking.com, Twitter, Walmart, GOV.UK. Como eles
                        resolveram problemas reais com arquitetura front-end.
                      </Text>
                      <Button
                        component={Link}
                        to="/guides/cases"
                        size="sm"
                        variant="light"
                        color="green"
                      >
                        Ver Casos
                      </Button>
                    </Stack>
                  </Card>
                </SimpleGrid>
              </Stack>
            </Paper>
          </motion.section>

          {/* Value Proposition - Mais conciso */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg">
              <Stack gap="md" align="center" ta="center">
                <Title order={2} mb="sm">
                  <IconAward
                    size={isMobile ? 24 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Por que vale a pena?
                </Title>

                <SimpleGrid
                  cols={{ base: 1, sm: 3 }}
                  spacing={isMobile ? 'sm' : 'md'}
                  w="100%"
                >
                  <FeatureCard
                    icon={IconCheck}
                    title="Evita Refatoração"
                    description="Escolha certa desde o início. Economize meses de dívida técnica."
                    color="green"
                    style={{ padding: isMobile ? 12 : 20 }}
                    iconSize={isMobile ? 28 : 40}
                  />
                  <FeatureCard
                    icon={IconRocket}
                    title="Decisões Sólidas"
                    description="Base para justificar escolhas. Não mais 'achismo' técnico."
                    color="brand"
                    style={{ padding: isMobile ? 12 : 20 }}
                    iconSize={isMobile ? 28 : 40}
                  />
                  <FeatureCard
                    icon={IconBolt}
                    title="Experiência Real"
                    description="20 anos convertidos em decisões práticas. Não é teoria."
                    color="orange"
                    style={{ padding: isMobile ? 12 : 20 }}
                    iconSize={isMobile ? 28 : 40}
                  />
                </SimpleGrid>

                <Alert
                  color="brand"
                  icon={<IconBulb size={isMobile ? 16 : 20} />}
                  radius="md"
                  mt="md"
                >
                  <Text size={isMobile ? 'sm' : 'md'} fw={500}>
                    <strong>ROI Real:</strong> Time que escolhe arquitetura
                    certa economiza 3-6 meses de refatoração por ano.
                    <strong> Dívida técnica reduzida significativamente</strong>
                    .
                  </Text>
                </Alert>
              </Stack>
            </Paper>
          </motion.section>

          {/* Stats - Mais simples */}
          <motion.section variants={itemVariants}>
            <SimpleGrid
              cols={{ base: 2, sm: 4 }}
              spacing={isMobile ? 'sm' : 'md'}
            >
              <StatsCard
                icon={IconCode}
                value="13+"
                label="Arquiteturas"
                color="brand"
                layout="auto"
              />
              <StatsCard
                icon={IconCheck}
                value="18"
                label="Anos Dev"
                color="green"
                layout="auto"
              />
              <StatsCard
                icon={IconRocket}
                value="50+"
                label="Projetos"
                color="brand"
                layout="auto"
              />
              <StatsCard
                icon={IconBolt}
                value="100%"
                label="Testado"
                color="orange"
                layout="auto"
              />
            </SimpleGrid>
          </motion.section>

          {/* CTA */}
          <motion.section variants={itemVariants}>
            <Paper
              withBorder
              p={isMobile ? 'md' : 'lg'}
              radius="lg"
              ta="center"
            >
              <Stack gap="md" align="center">
                <ThemeIcon
                  size={isMobile ? 60 : 80}
                  radius="xl"
                  variant="light"
                  color="brand"
                >
                  <IconTrendingUp size={isMobile ? 30 : 40} />
                </ThemeIcon>
                <Title order={2} size={isMobile ? 'h3' : 'h2'}>
                  Não sabe por onde começar?
                </Title>
                <Text size={isMobile ? 'md' : 'lg'} c="dimmed" maw={500}>
                  Responde o wizard e descobre qual arquitetura faz sentido pro
                  seu projeto.
                </Text>
                <motion.div {...mobileAnimationProps}>
                  <Button
                    component={Link}
                    to="/guides/how-to-choose"
                    size="lg"
                    variant="filled"
                    leftSection={<IconRocket size={20} />}
                    rightSection={<IconArrowRight size={16} />}
                    fullWidth={isMobile}
                  >
                    Encontre sua Arquitetura
                  </Button>
                </motion.div>
              </Stack>
            </Paper>
          </motion.section>

          {/* FAQ Section - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'lg' : 'xl'} align="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} ta="center" mb={0}>
                Perguntas Frequentes
              </Title>
              <Text
                size={isMobile ? 'md' : 'lg'}
                c="dimmed"
                ta="center"
                maw={isMobile ? '100%' : 700}
                mb="xl"
              >
                Tudo que você precisa saber sobre o Front-End Architecture
                Playbook
              </Text>

              <Paper
                withBorder
                p={isMobile ? 'md' : 'lg'}
                radius="lg"
                style={{ width: '100%', maxWidth: 800 }}
              >
                <Accordion variant="separated" radius="md">
                  <Accordion.Item value="what-is">
                    <Accordion.Control>
                      <Text fw={600}>
                        O que é o Front-End Architecture Playbook?
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed">
                        É um guia prático de arquitetura front-end construído
                        com base em 20 anos de experiência real. Inclui
                        ferramentas interativas como o Decision Wizard,
                        comparações visuais de arquiteturas, e casos reais de
                        empresas como Netflix, Spotify e Airbnb.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="free">
                    <Accordion.Control>
                      <Text fw={600}>O playbook é gratuito?</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed">
                        Sim, o playbook é completamente gratuito e open-source.
                        Todo o conteúdo está disponível sem custos, incluindo o
                        Decision Wizard e todas as comparações de arquiteturas.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="start">
                    <Accordion.Control>
                      <Text fw={600}>Por onde começar?</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed" mb="sm">
                        Recomendamos começar pela{' '}
                        <Text
                          component={Link}
                          to="/guides/dependency-rule"
                          c="brand"
                          fw={600}
                          span
                        >
                          Dependency Rule
                        </Text>
                        , a regra fundamental de arquitetura. Depois, use o{' '}
                        <Text
                          component={Link}
                          to="/guides/how-to-choose"
                          c="brand"
                          fw={600}
                          span
                        >
                          Decision Wizard
                        </Text>{' '}
                        para encontrar a arquitetura ideal para seu projeto.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="architectures">
                    <Accordion.Control>
                      <Text fw={600}>
                        Quantas arquiteturas estão documentadas?
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed">
                        O playbook documenta 13+ arquiteturas testadas,
                        incluindo Clean Architecture, Micro-frontends, Monorepo,
                        SSR/SSG, PWA, BFF, Hexagonal Architecture, e mais. Cada
                        uma com análise detalhada de trade-offs e casos de uso.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="cases">
                    <Accordion.Control>
                      <Text fw={600}>
                        Quais empresas estão nos casos reais?
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed">
                        Documentamos 16 empresas incluindo Netflix, Spotify,
                        Airbnb, Pinterest, Tinder, Slack, Uber, WhatsApp, Zoom,
                        Figma, Discord, Google, Booking.com, Twitter, Walmart e
                        GOV.UK. Cada caso mostra como resolveram problemas reais
                        com arquitetura front-end.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>

                  <Accordion.Item value="contribute">
                    <Accordion.Control>
                      <Text fw={600}>Posso contribuir com o projeto?</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm" c="dimmed">
                        Sim! O projeto é open-source e aceita contribuições.
                        Visite nosso{' '}
                        <Text
                          component="a"
                          href="https://github.com/tiagovilasboas/frontend-architecture-playbook"
                          target="_blank"
                          c="brand"
                          fw={600}
                          span
                        >
                          GitHub
                        </Text>{' '}
                        para ver como contribuir.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Paper>
            </Stack>
          </motion.section>

          {/* Author - Estilo Moltbot */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'lg' : 'xl'} align="center" ta="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0}>
                Construído por Engenheiros Comprovados
              </Title>
              <Text
                size={isMobile ? 'md' : 'lg'}
                c="dimmed"
                maw={isMobile ? '100%' : 700}
                mb="xl"
              >
                Software open-source apoiado por uma equipe experiente e
                comunidade ativa
              </Text>

              <Paper
                withBorder
                p={isMobile ? 'md' : 'xl'}
                radius="lg"
                style={{ width: '100%', maxWidth: 800 }}
              >
                <Group
                  align="flex-start"
                  gap={isMobile ? 'md' : 'xl'}
                  style={{ flexDirection: isMobile ? 'column' : 'row' }}
                >
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/2006720?v=4"
                    size={isMobile ? 100 : 140}
                    radius="xl"
                  />
                  <div style={{ flex: 1 }}>
                    <Group align="center" mb="sm" wrap="wrap">
                      <Title order={3} size={isMobile ? 'h4' : 'h3'}>
                        Tiago Vilas Boas
                      </Title>
                      <Badge color="brand" variant="light" size="lg">
                        Front-End Engineer
                      </Badge>
                    </Group>
                    <Text size={isMobile ? 'sm' : 'md'} mb="md" lh={1.6}>
                      <strong>
                        20 anos transformando código em resultado.
                      </strong>{' '}
                      Turbinei checkouts, simplifiquei KYC, salvei dashboards.
                      Criador do Ponto PJ e autor de "Código Bonito Não Paga
                      Boleto".
                    </Text>
                    <Text size="sm" c="dimmed" mb="md">
                      O Playbook representa a visão de arquitetura front-end
                      baseada em experiência real—combinando décadas de
                      experiência com as melhores práticas da indústria.
                    </Text>
                    <Group gap="sm">
                      <Button
                        component="a"
                        href="https://github.com/tiagovilasboas"
                        target="_blank"
                        size={isMobile ? 'sm' : 'md'}
                        variant="light"
                        leftSection={
                          <IconBrandGithub size={isMobile ? 16 : 18} />
                        }
                      >
                        GitHub
                      </Button>
                      <Button
                        component="a"
                        href="https://www.linkedin.com/in/tiagovilasboas"
                        target="_blank"
                        size={isMobile ? 'sm' : 'md'}
                        variant="light"
                        leftSection={
                          <IconBrandLinkedin size={isMobile ? 16 : 18} />
                        }
                      >
                        LinkedIn
                      </Button>
                    </Group>
                  </div>
                </Group>
              </Paper>
            </Stack>
          </motion.section>
        </Stack>
      </motion.div>
    </Container>
  );
}
