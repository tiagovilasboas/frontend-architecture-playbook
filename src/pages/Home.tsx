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
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/ui';
import { motion } from 'framer-motion';
import {
  IconRocket,
  IconShield,
  IconArrowRight,
  IconStar,
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

  return (
    <Box px={isMobile ? 'md' : 'md'} mt={0}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack gap={isMobile ? 'xl' : 'xl'}>
          {/* Hero Section - Profissional com Rede Neural de Fundo */}
          <motion.section variants={itemVariants}>
            <Box
              style={{
                position: 'relative',
                width: '100%',
                minHeight: isMobile ? 600 : 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Content - Organizado Verticalmente */}
              <Stack
                align="center"
                ta="center"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
                  width: '100%',
                }}
                gap={isMobile ? 'xl' : '2xl'}
              >
                {/* Title Section */}
                <Stack gap="md" align="center">
                  <HeroTitle
                    size={isSmallMobile ? '2rem' : isMobile ? '2.5rem' : '4rem'}
                    mb={0}
                    style={{
                      lineHeight: 1.1,
                      fontWeight: 800,
                    }}
                  >
                    Front-End Architecture Playbook
                  </HeroTitle>

                  <Text
                    size={isMobile ? 'lg' : 'xl'}
                    c="dimmed"
                    style={{
                      maxWidth: isMobile ? '100%' : 800,
                      lineHeight: 1.6,
                    }}
                  >
                    20 anos de experiência em arquitetura front-end
                  </Text>
                </Stack>

                {/* CTAs Section */}
                <Stack
                  gap="md"
                  w="100%"
                  style={{ maxWidth: isMobile ? '100%' : 500 }}
                >
                  <Button
                    component={Link}
                    to="/guides/how-to-choose"
                    size={isMobile ? 'lg' : 'lg'}
                    variant="filled"
                    fullWidth={isMobile}
                    leftSection={<IconRocket size={isMobile ? 24 : 20} />}
                    rightSection={<IconArrowRight size={isMobile ? 20 : 16} />}
                  >
                    Encontre sua Arquitetura
                  </Button>
                  <Button
                    component={Link}
                    to="/guides/dependency-rule"
                    size={isMobile ? 'lg' : 'lg'}
                    variant="light"
                    fullWidth={isMobile}
                    leftSection={<IconShield size={isMobile ? 24 : 20} />}
                  >
                    Ver Dependency Rule
                  </Button>
                </Stack>

                {/* Stats Section */}
                <SimpleGrid
                  cols={4}
                  spacing={isMobile ? 'md' : 'xl'}
                  w="100%"
                  style={{ maxWidth: isMobile ? '100%' : 800 }}
                >
                  <Stack gap={4} align="center">
                    <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="brand">
                      13+
                    </Text>
                    <Text size={isMobile ? 'xs' : 'sm'} c="dimmed" ta="center">
                      Arquiteturas
                    </Text>
                  </Stack>
                  <Stack gap={4} align="center">
                    <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="green">
                      20
                    </Text>
                    <Text size={isMobile ? 'xs' : 'sm'} c="dimmed" ta="center">
                      Anos Dev
                    </Text>
                  </Stack>
                  <Stack gap={4} align="center">
                    <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="orange">
                      50+
                    </Text>
                    <Text size={isMobile ? 'xs' : 'sm'} c="dimmed" ta="center">
                      Projetos
                    </Text>
                  </Stack>
                  <Stack gap={4} align="center">
                    <Text size={isMobile ? 'xl' : '2xl'} fw={700} c="purple">
                      16
                    </Text>
                    <Text size={isMobile ? 'xs' : 'sm'} c="dimmed" ta="center">
                      Casos Reais
                    </Text>
                  </Stack>
                </SimpleGrid>
              </Stack>
            </Box>
          </motion.section>

          {/* Value Proposition - Consolidado */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" ta="center">
              <Title order={2} size={isMobile ? 'h3' : 'h2'} mb={0}>
                Por que este Playbook?
              </Title>

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
                      color="blue"
                    >
                      <IconShield size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Evita Refatoração
                    </Title>
                    <Text
                      size={isMobile ? 'sm' : 'xs'}
                      c="dimmed"
                      style={{ lineHeight: 1.6 }}
                    >
                      Economize meses de dívida técnica
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
                      color="green"
                    >
                      <IconRocket size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Decisões Sólidas
                    </Title>
                    <Text
                      size={isMobile ? 'sm' : 'xs'}
                      c="dimmed"
                      style={{ lineHeight: 1.6 }}
                    >
                      Base para justificar escolhas técnicas
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
                      color="orange"
                    >
                      <IconBolt size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Experiência Real
                    </Title>
                    <Text
                      size={isMobile ? 'sm' : 'xs'}
                      c="dimmed"
                      style={{ lineHeight: 1.6 }}
                    >
                      20 anos convertidos em decisões práticas
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
                      color="purple"
                    >
                      <IconTarget size={isMobile ? 32 : 28} />
                    </ThemeIcon>
                    <Title order={3} size={isMobile ? 'h4' : 'h5'}>
                      Decision Wizard
                    </Title>
                    <Text
                      size={isMobile ? 'sm' : 'xs'}
                      c="dimmed"
                      style={{ lineHeight: 1.6 }}
                    >
                      Ferramenta interativa para escolher arquitetura
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </motion.section>

          {/* Quick Start Section - Mobile-First */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" ta="center">
              <Title order={2} mb={0} size={isMobile ? 'h3' : 'h2'}>
                <IconRocket
                  size={isMobile ? 28 : 32}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Comece Aqui
              </Title>

              <Stack gap="md" w="100%">
                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  component={Link}
                  to="/guides/dependency-rule"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Group gap="md" align="flex-start">
                    <Badge color="blue" variant="filled" size="lg" radius="xl">
                      1
                    </Badge>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Group gap="xs" align="center">
                        <IconBulb
                          size={isMobile ? 24 : 20}
                          color="var(--mantine-color-blue-6)"
                        />
                        <Text fw={600} size={isMobile ? 'md' : 'sm'}>
                          Dependency Rule
                        </Text>
                      </Group>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed">
                        Regra fundamental
                      </Text>
                      <Button
                        size={isMobile ? 'sm' : 'xs'}
                        variant="light"
                        color="blue"
                        rightSection={<IconArrowRight size={14} />}
                        mt="xs"
                      >
                        Ler
                      </Button>
                    </Stack>
                  </Group>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  component={Link}
                  to="/guides/how-to-choose"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Group gap="md" align="flex-start">
                    <Badge color="green" variant="filled" size="lg" radius="xl">
                      2
                    </Badge>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Group gap="xs" align="center">
                        <IconTarget
                          size={isMobile ? 24 : 20}
                          color="var(--mantine-color-green-6)"
                        />
                        <Text fw={600} size={isMobile ? 'md' : 'sm'}>
                          Decision Wizard
                        </Text>
                      </Group>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed">
                        Escolha sua arquitetura
                      </Text>
                      <Button
                        size={isMobile ? 'sm' : 'xs'}
                        variant="light"
                        color="green"
                        rightSection={<IconArrowRight size={14} />}
                        mt="xs"
                      >
                        Começar
                      </Button>
                    </Stack>
                  </Group>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  component={Link}
                  to="/guides/architecture-comparison"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Group gap="md" align="flex-start">
                    <Badge
                      color="orange"
                      variant="filled"
                      size="lg"
                      radius="xl"
                    >
                      3
                    </Badge>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Group gap="xs" align="center">
                        <IconScale
                          size={isMobile ? 24 : 20}
                          color="var(--mantine-color-orange-6)"
                        />
                        <Text fw={600} size={isMobile ? 'md' : 'sm'}>
                          Comparação Visual
                        </Text>
                      </Group>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed">
                        9 arquiteturas
                      </Text>
                      <Button
                        size={isMobile ? 'sm' : 'xs'}
                        variant="light"
                        color="orange"
                        rightSection={<IconArrowRight size={14} />}
                        mt="xs"
                      >
                        Comparar
                      </Button>
                    </Stack>
                  </Group>
                </Card>
              </Stack>
            </Stack>
          </motion.section>

          {/* Featured Content Section - Mobile-First */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" ta="center">
              <Title order={2} mb={0} size={isMobile ? 'h3' : 'h2'}>
                <IconStar
                  size={isMobile ? 28 : 32}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Conteúdo em Destaque
              </Title>

              <Stack gap="md" w="100%">
                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  component={Link}
                  to="/guides/architecture-comparison"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Group gap="md" align="flex-start">
                    <ThemeIcon
                      size={isMobile ? 48 : 40}
                      radius="md"
                      variant="light"
                      color="blue"
                    >
                      <IconScale size={isMobile ? 24 : 20} />
                    </ThemeIcon>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Text fw={600} size={isMobile ? 'md' : 'sm'}>
                        Comparação Visual
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed">
                        9 arquiteturas comparadas com métricas reais
                      </Text>
                      <Button
                        size={isMobile ? 'sm' : 'xs'}
                        variant="light"
                        rightSection={<IconArrowRight size={14} />}
                        mt="xs"
                      >
                        Ver
                      </Button>
                    </Stack>
                  </Group>
                </Card>

                <Card
                  withBorder
                  p={isMobile ? 'lg' : 'md'}
                  radius="md"
                  component={Link}
                  to="/guides/cases"
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <Group gap="md" align="flex-start">
                    <ThemeIcon
                      size={isMobile ? 48 : 40}
                      radius="md"
                      variant="light"
                      color="green"
                    >
                      <IconTrendingUp size={isMobile ? 24 : 20} />
                    </ThemeIcon>
                    <Stack gap="xs" style={{ flex: 1 }}>
                      <Text fw={600} size={isMobile ? 'md' : 'sm'}>
                        Casos Reais
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed">
                        16 empresas: Netflix, Spotify, Airbnb...
                      </Text>
                      <Button
                        size={isMobile ? 'sm' : 'xs'}
                        variant="light"
                        color="green"
                        rightSection={<IconArrowRight size={14} />}
                        mt="xs"
                      >
                        Ver
                      </Button>
                    </Stack>
                  </Group>
                </Card>
              </Stack>
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
                  Responde o wizard e descobre qual arquitetura faz sentido pro
                  seu projeto.
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
