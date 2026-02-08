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
import { useBreakpoints } from '../hooks/useBreakpoints.ts';

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
                minHeight: isMobile ? 560 : 680,
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
                <Badge
                  size="lg"
                  variant="light"
                  color="brand"
                  radius="md"
                  style={{ letterSpacing: '0.02em' }}
                >
                  Guia prático de arquitetura front-end
                </Badge>

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
                    c="dimmed"
                    style={{
                      maxWidth: isMobile ? '100%' : 640,
                      lineHeight: 1.6,
                    }}
                  >
                    Escolha a arquitetura certa e evite refatoração. Baseado em casos reais e fontes verificáveis.
                  </Text>
                </Stack>

                <Group
                  gap="md"
                  justify="center"
                  wrap="wrap"
                  style={{ maxWidth: isMobile ? '100%' : 420 }}
                >
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
                    variant="light"
                    color="brand"
                    leftSection={<IconShield size={20} />}
                  >
                    Dependency Rule
                  </Button>
                </Group>

                <SimpleGrid
                  cols={4}
                  spacing={isMobile ? 'md' : 'xl'}
                  w="100%"
                  style={{ maxWidth: 720 }}
                >
                  {[
                    { value: '13+', label: 'Arquiteturas', c: 'brand' as const },
                    { value: '19', label: 'Casos Reais', c: 'accent' as const },
                    { value: '30+', label: 'Code Examples', c: 'brand' as const },
                    { value: '100%', label: 'Fontes Reais', c: 'accent' as const },
                  ].map(({ value, label, c }) => (
                    <motion.div
                      key={label}
                      variants={itemVariants}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Stack gap={4} align="center">
                        <Text
                          size={isMobile ? 'xl' : '2xl'}
                          fw={700}
                          c={c}
                          style={{ lineHeight: 1 }}
                        >
                          {value}
                        </Text>
                        <Text
                          size={isMobile ? 'xs' : 'sm'}
                          c="dimmed"
                          ta="center"
                        >
                          {label}
                        </Text>
                      </Stack>
                    </motion.div>
                  ))}
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
                      color="brand"
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
                      color="brand"
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
                      color="brand"
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
                      Padrões validados com fontes e artigos reais
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

          {/* Comece Aqui - 3 passos claros */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" w="100%">
              <Stack gap="xs" align="center" ta="center">
                <Title order={2} mb={0} size={isMobile ? 'h3' : 'h2'}>
                  <IconRocket
                    size={isMobile ? 28 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Comece Aqui
                </Title>
                <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw={520}>
                  Três passos para entender arquitetura, escolher a certa e comparar opções.
                </Text>
              </Stack>

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
                      <Badge color="brand" variant="filled" size="xl" radius="xl">
                        1
                      </Badge>
                      <ThemeIcon size={44} radius="md" variant="light" color="brand">
                        <IconBulb size={24} />
                      </ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Dependency Rule
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>
                        A regra mais importante: dependências só apontam para dentro. Base de qualquer arquitetura.
                      </Text>
                    </Stack>
                    <Button
                      size="sm"
                      variant="light"
                      color="brand"
                      rightSection={<IconArrowRight size={14} />}
                      fullWidth
                    >
                      Ler o guia
                    </Button>
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
                      <Badge color="brand" variant="filled" size="xl" radius="xl">
                        2
                      </Badge>
                      <ThemeIcon size={44} radius="md" variant="light" color="brand">
                        <IconTarget size={24} />
                      </ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Decision Wizard
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>
                        Responda poucas perguntas e receba a recomendação de arquitetura para o seu contexto.
                      </Text>
                    </Stack>
                    <Button
                      size="sm"
                      variant="light"
                      color="brand"
                      rightSection={<IconArrowRight size={14} />}
                      fullWidth
                    >
                      Começar o wizard
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
                  className="comece-aqui-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <Badge color="brand" variant="filled" size="xl" radius="xl">
                        3
                      </Badge>
                      <ThemeIcon size={44} radius="md" variant="light" color="brand">
                        <IconScale size={24} />
                      </ThemeIcon>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Comparação Visual
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>
                        9 arquiteturas lado a lado: quando usar, prós, contras e métricas reais.
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

          {/* Conteúdo em Destaque */}
          <motion.section variants={itemVariants}>
            <Stack gap={isMobile ? 'md' : 'lg'} align="center" w="100%">
              <Stack gap="xs" align="center" ta="center">
                <Title order={2} mb={0} size={isMobile ? 'h3' : 'h2'}>
                  <IconStar
                    size={isMobile ? 28 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Conteúdo em Destaque
                </Title>
                <Text size={isMobile ? 'sm' : 'md'} c="dimmed" maw={520}>
                  Guias e casos que mais ajudam a tomar decisão: comparação de arquiteturas e exemplos reais de mercado.
                </Text>
              </Stack>

              <SimpleGrid
                cols={{ base: 1, sm: 2 }}
                spacing={isMobile ? 'md' : 'lg'}
                w="100%"
                style={{ alignItems: 'stretch' }}
              >
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
                        9 arquiteturas lado a lado: quando usar, prós, contras, métricas e trade-offs. Ideal para decidir com critério.
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
                  }}
                  className="destaque-card"
                >
                  <Stack gap="md" h="100%">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon size={48} radius="md" variant="light" color="brand">
                        <IconTrendingUp size={26} />
                      </ThemeIcon>
                      <Badge variant="light" color="brand" size="sm" radius="sm">
                        Casos reais
                      </Badge>
                    </Group>
                    <Stack gap={4} style={{ flex: 1 }}>
                      <Text fw={700} size={isMobile ? 'md' : 'sm'}>
                        Casos Reais de Mercado
                      </Text>
                      <Text size={isMobile ? 'sm' : 'xs'} c="dimmed" style={{ lineHeight: 1.5 }}>
                        19 casos reais com links para artigos e tech blogs originais. Arquiteturas que funcionam em produção.
                      </Text>
                    </Stack>
                    <Button
                      size="sm"
                      variant="light"
                      color="brand"
                      rightSection={<IconArrowRight size={14} />}
                      fullWidth
                    >
                      Ver casos
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
