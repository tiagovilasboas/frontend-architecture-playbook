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
  IconHeart,
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
          {/* Hero Section - Mais direto */}
          <motion.section variants={itemVariants}>
            <Stack
              align="center"
              ta="center"
              mb={isMobile ? 'lg' : 'xl'}
              mt={0}
            >
              <Badge
                size={isMobile ? 'sm' : 'lg'}
                variant="light"
                color="brand"
                mb={isMobile ? 'xs' : 'md'}
              >
                <IconStar
                  size={isMobile ? 12 : 16}
                  style={{ marginRight: 8 }}
                />
                Guia Prático para Devs
              </Badge>

              <HeroTitle
                size={isSmallMobile ? '1.8rem' : isMobile ? '2.2rem' : '3.5rem'}
                mb={isMobile ? 'sm' : 'md'}
                style={{ lineHeight: isMobile ? 1.1 : 1.15 }}
              >
                Front-End Architecture Playbook
              </HeroTitle>

              <Text
                size={isMobile ? 'md' : 'xl'}
                c="dimmed"
                mb={isMobile ? 'md' : 'lg'}
                style={{
                  maxWidth: isMobile ? 340 : 600,
                  margin: '0 auto',
                  lineHeight: isMobile ? 1.4 : 1.6,
                }}
              >
                18 anos de front-end resumidos:{' '}
                <strong>arquitetura não é luxo, é sobrevivência</strong>.
                Escolha errada custa caro, escolha certa salva projeto.
              </Text>

              {isMobile ? (
                <Stack gap="sm" w="100%">
                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/guides/how-to-choose"
                      size="md"
                      variant="filled"
                      leftSection={<IconRocket size={16} />}
                      rightSection={<IconArrowRight size={12} />}
                      fullWidth
                    >
                      Encontre sua Arquitetura
                    </Button>
                  </motion.div>

                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/guides/dependency-rule"
                      size="md"
                      variant="light"
                      leftSection={<IconShield size={16} />}
                      fullWidth
                    >
                      Dependency Rule
                    </Button>
                  </motion.div>
                </Stack>
              ) : (
                <Group gap="lg" mt={0}>
                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/guides/how-to-choose"
                      size="lg"
                      variant="filled"
                      leftSection={<IconRocket size={20} />}
                      rightSection={<IconArrowRight size={16} />}
                    >
                      Encontre sua Arquitetura
                    </Button>
                  </motion.div>

                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/guides/dependency-rule"
                      size="lg"
                      variant="light"
                      leftSection={<IconShield size={20} />}
                    >
                      Dependency Rule
                    </Button>
                  </motion.div>
                </Group>
              )}

              <Alert
                color="brand"
                icon={<IconBulb size={isMobile ? 16 : 20} />}
                radius="md"
                mt="md"
                maw={isMobile ? 340 : 600}
              >
                <Text size={isMobile ? 'sm' : 'md'} fw={500}>
                  <strong>O segredo:</strong> esquece hype, respeita a{' '}
                  <Text
                    component={Link}
                    to="/guides/dependency-rule"
                    style={{
                      color: 'var(--mantine-color-accent-6)',
                      fontWeight: 600,
                      textDecoration: 'underline',
                    }}
                    span
                  >
                    Dependency Rule
                  </Text>
                  . Negócio nunca depende de framework.
                </Text>
              </Alert>
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

          {/* Content Grid - Mais direto */}
          <motion.section variants={itemVariants}>
            <Title order={2} mb="lg" ta="center">
              <IconTarget
                size={isMobile ? 24 : 32}
                style={{ verticalAlign: 'middle', marginRight: '8px' }}
              />
              O que tem aqui
            </Title>

            <SimpleGrid
              cols={{ base: 1, sm: 2 }}
              spacing={isMobile ? 'md' : 'lg'}
            >
              <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                <Stack gap="sm">
                  <Group gap="sm">
                    <ThemeIcon
                      size={isMobile ? 'lg' : 'xl'}
                      variant="light"
                      color="brand"
                    >
                      <IconBook size={isMobile ? 18 : 24} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Guias Práticos
                    </Title>
                  </Group>
                  <Text size={isMobile ? 'sm' : 'md'} c="dimmed">
                    <Link
                      to="/guides/how-to-choose"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      Decision wizard
                    </Link>{' '}
                    + regra fundamental de arquitetura. Zero teoria, só o que
                    funciona.
                  </Text>
                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/guides/how-to-choose"
                      size="sm"
                      variant="light"
                      leftSection={<IconRocket size={16} />}
                      fullWidth={isMobile}
                    >
                      Decision Wizard
                    </Button>
                  </motion.div>
                </Stack>
              </Card>

              <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                <Stack gap="sm">
                  <Group gap="sm">
                    <ThemeIcon
                      size={isMobile ? 'lg' : 'xl'}
                      variant="light"
                      color="green"
                    >
                      <IconHeart size={isMobile ? 18 : 24} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Boas Práticas
                    </Title>
                  </Group>
                  <Text size={isMobile ? 'sm' : 'md'} c="dimmed">
                    DRY, KISS, YAGNI, Clean Code. Os princípios que toda base
                    sólida precisa.
                  </Text>
                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/best-practices/dry"
                      size="sm"
                      variant="light"
                      leftSection={<IconCheck size={16} />}
                      fullWidth={isMobile}
                    >
                      Ver Princípios
                    </Button>
                  </motion.div>
                </Stack>
              </Card>

              <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                <Stack gap="sm">
                  <Group gap="sm">
                    <ThemeIcon
                      size={isMobile ? 'lg' : 'xl'}
                      variant="light"
                      color="blue"
                    >
                      <IconBuilding size={isMobile ? 18 : 24} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Arquiteturas
                    </Title>
                  </Group>
                  <Text size={isMobile ? 'sm' : 'md'} c="dimmed">
                    13 padrões testados: Clean Architecture, Micro-frontends,
                    Monorepo, SSR/SSG e mais.
                  </Text>
                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/architectures/clean-architecture"
                      size="sm"
                      variant="light"
                      leftSection={<IconStack size={16} />}
                      fullWidth={isMobile}
                    >
                      Ver Arquiteturas
                    </Button>
                  </motion.div>
                </Stack>
              </Card>

              <Card withBorder p={isMobile ? 'md' : 'lg'} radius="md">
                <Stack gap="sm">
                  <Group gap="sm">
                    <ThemeIcon
                      size={isMobile ? 'lg' : 'xl'}
                      variant="light"
                      color="purple"
                    >
                      <IconPuzzle size={isMobile ? 18 : 24} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h5' : 'h4'}>
                      Padrões & Técnicas
                    </Title>
                  </Group>
                  <Text size={isMobile ? 'sm' : 'md'} c="dimmed">
                    Design patterns, otimizações e técnicas específicas de
                    front-end.
                  </Text>
                  <motion.div {...mobileAnimationProps}>
                    <Button
                      component={Link}
                      to="/patterns/component-driven"
                      size="sm"
                      variant="light"
                      leftSection={<IconTools size={16} />}
                      fullWidth={isMobile}
                    >
                      Ver Padrões
                    </Button>
                  </motion.div>
                </Stack>
              </Card>
            </SimpleGrid>
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
                    description="18 anos convertidos em decisões práticas. Não é teoria."
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

          {/* Author - Mais simples */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg">
              <Group
                align="flex-start"
                gap={isMobile ? 'md' : 'xl'}
                style={{ flexDirection: isMobile ? 'column' : 'row' }}
              >
                <Avatar
                  src="https://avatars.githubusercontent.com/u/2006720?v=4"
                  size={isMobile ? 80 : 120}
                  radius="xl"
                />
                <div style={{ flex: 1 }}>
                  <Group align="center" mb="sm" wrap="wrap">
                    <Title order={3} size={isMobile ? 'h4' : 'h3'}>
                      Tiago Vilas Boas
                    </Title>
                    <Badge color="brand" variant="light">
                      Front-End Engineer
                    </Badge>
                  </Group>
                  <Text size={isMobile ? 'sm' : 'md'} mb="md" lh={1.6}>
                    18 anos transformando código em resultado. Turbinei
                    checkouts, simplifiquei KYC, salvei dashboards. Criador do
                    Ponto PJ e autor de "Código Bonito Não Paga Boleto".
                  </Text>
                  {isMobile ? (
                    <Stack gap="sm" w="100%">
                      <Button
                        component="a"
                        href="https://github.com/tiagovilasboas"
                        target="_blank"
                        size="sm"
                        variant="light"
                        leftSection={<IconBrandGithub size={16} />}
                        fullWidth
                      >
                        GitHub
                      </Button>
                      <Button
                        component="a"
                        href="https://www.linkedin.com/in/tiagovilasboas"
                        target="_blank"
                        size="sm"
                        variant="light"
                        leftSection={<IconBrandLinkedin size={16} />}
                        fullWidth
                      >
                        LinkedIn
                      </Button>
                    </Stack>
                  ) : (
                    <Group gap="sm">
                      <Button
                        component="a"
                        href="https://github.com/tiagovilasboas"
                        target="_blank"
                        size="sm"
                        variant="light"
                        leftSection={<IconBrandGithub size={16} />}
                      >
                        GitHub
                      </Button>
                      <Button
                        component="a"
                        href="https://www.linkedin.com/in/tiagovilasboas"
                        target="_blank"
                        size="sm"
                        variant="light"
                        leftSection={<IconBrandLinkedin size={16} />}
                      >
                        LinkedIn
                      </Button>
                    </Group>
                  )}
                </div>
              </Group>
            </Paper>
          </motion.section>
        </Stack>
      </motion.div>
    </Container>
  );
}
