import { Title, Stack, Text, Button, Group, Avatar, Paper, Container, SimpleGrid, Alert, Badge, Divider, Card, ThemeIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { HeroTitle, FeatureCard, StatsCard, HighwayAnimation } from '../components/ui';
import { motion } from 'framer-motion';
import { 
  IconBook, 
  IconBulb, 
  IconRocket, 
  IconBrandGithub, 
  IconCode, 
  IconLayersOff, 
  IconPuzzle,
  IconTarget,
  IconShield,
  IconTrendingUp,
  IconBuilding,
  IconBolt,
  IconUsers,
  IconCheck,
  IconStar,
  IconAward,
  IconArrowRight,
  IconBrandLinkedin,
  IconHeart,
  IconBrain,
  IconTools,
  IconStack
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const heroVariants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const
    }
  }
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  
  return (
    <Container size="lg" px={isMobile ? 'xs' : 'md'}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Stack gap={isMobile ? 'sm' : 'lg'}>
          {/* Hero Section */}
          <motion.section variants={heroVariants}>
            <Stack align="center" ta="center" mb={isMobile ? 'md' : 'lg'}>
              <motion.div variants={floatingVariants} animate="animate">
                <Badge size={isMobile ? 'sm' : 'lg'} variant="light" color="brand" mb={isMobile ? 'xs' : 'md'}>
                  <IconStar size={isMobile ? 12 : 16} style={{ marginRight: 8 }} />
                  Guia Prático para Devs
                </Badge>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <HeroTitle size={isMobile ? '2.2rem' : '3.5rem'} mb={isMobile ? 'sm' : 'md'}>
                  Front-End Architecture Playbook
                </HeroTitle>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Text size={isMobile ? 'md' : 'xl'} c="dimmed" mb={isMobile ? 'sm' : 'md'} maw={800}>
                  Sabe aquele código que vira um inferno de manter? Então, quase sempre é culpa de arquitetura ruim. Não é papo de arquiteto, é dor real de dev. <strong>Arquitetura não é luxo, é sobrevivência.</strong>
                </Text>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Group gap={isMobile ? 'xs' : 'md'} mt={isMobile ? 'xs' : 'md'}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      component={Link} 
                      to="/guides/how-to-choose" 
                      size={isMobile ? 'md' : 'lg'} 
                      variant="filled"
                      leftSection={<IconRocket size={isMobile ? 16 : 20} />}
                      rightSection={<IconArrowRight size={isMobile ? 12 : 16} />}
                    >
                      Encontre sua Arquitetura
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      component={Link} 
                      to="/guides/dependency-rule" 
                      size={isMobile ? 'md' : 'lg'} 
                      variant="light"
                      leftSection={<IconShield size={isMobile ? 16 : 20} />}
                      rightSection={<IconArrowRight size={isMobile ? 12 : 16} />}
                    >
                      Dependency Rule
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      component="a" 
                      href="https://github.com/tiagovilasboas/frontend-architecture-playbook" 
                      target="_blank"
                      size={isMobile ? 'md' : 'lg'} 
                      variant="outline"
                      leftSection={<IconBrandGithub size={isMobile ? 16 : 20} />}
                    >
                      Ver repositório no GitHub
                    </Button>
                  </motion.div>
                </Group>
              </motion.div>
            </Stack>
            
            <motion.div variants={itemVariants}>
              <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg" mb={isMobile ? 'md' : 'lg'} bg="none">
                <Stack gap={isMobile ? 'sm' : 'md'} align="center">
                  <Group gap={isMobile ? 'xs' : 'sm'}>
                    <motion.div variants={pulseVariants} animate="animate">
                      <IconAward size={isMobile ? 16 : 24} color="var(--mantine-color-yellow-6)" />
                    </motion.div>
                    <Text size={isMobile ? 'md' : 'lg'} fw={600}>
                      Por que Arquitetura Importa (de verdade)
                    </Text>
                    <Text size={isMobile ? 'md' : 'lg'} c="dimmed" ta="center" maw={700}>
                      18 anos de front-end me ensinaram uma coisa: <strong>escolha errada de arquitetura custa caro.</strong> 
                      E não é só dinheiro: é tempo, paciência, saúde mental e até sua reputação no time.
                    </Text>
                  </Group>
                  <Alert color="brand" icon={<IconBulb size={isMobile ? 16 : 24} />} radius="md" maw={800}>
                    <Text size={isMobile ? 'sm' : 'md'} fw={500}>
                      <strong>O segredo de qualquer arquitetura:</strong> esquece hype, esquece modinha. <span style={{ color: 'var(--mantine-color-accent-6)', fontWeight: 600 }}>Respeita a</span>
                      <Text 
                        component={Link} 
                        to="/guides/dependency-rule" 
                        style={{ 
                          color: 'var(--mantine-color-accent-6)', 
                          fontWeight: 600, 
                          textDecoration: 'underline',
                          cursor: 'pointer'
                        }}
                        span
                      >
                        <b>Dependency Rule</b>
                      </Text>
                      <span style={{ color: 'var(--mantine-color-accent-6)', fontWeight: 600 }}>.</span> 
                      Se você ignora isso, pode usar o framework da moda, pode ter CI/CD, pode ter micro-frontend... vai dar ruim igual. <strong>Negócio nunca depende de framework.</strong> Simples assim.
                    </Text>
                  </Alert>
                </Stack>
              </Paper>
            </motion.div>
          </motion.section>

          {/* Arquitetura como Rodovia */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p="xl" radius="lg">
              <Stack gap="lg" align="center" ta="center">
                <Title order={2} mb="md" size="h3">
                  <IconBuilding size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  Arquitetura de Software é como Projetar uma Rodovia
                </Title>
                
                {/* Highway Animation - Dentro da seção */}
                <HighwayAnimation />
                
                <Text size="lg" c="dimmed" maw={900} lh={1.8}>
                  Arquitetura de software front‑end é tipo rodovia: se nasce torta, estreita ou sem sinalização, o trânsito vira caos. Não adianta culpar o motorista depois.
                </Text>

                <Text size="lg" c="dimmed" maw={900} lh={1.8} fw={600}>
                  No código é igual. Se a base é ruim, não tem dev sênior que salve.
                </Text>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" w="100%" mt="md">
                  <Card withBorder p="md" radius="md">
                    <Stack gap="sm">
                      <Group gap="sm">
                        <ThemeIcon size="lg" variant="light" color="green">
                          <IconRocket size={20} />
                        </ThemeIcon>
                        <Text fw={600} size="md">Pistas largas e bem asfaltadas</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        ⇒ componentes desacoplados, performance na veia.
                      </Text>
                    </Stack>
                  </Card>

                  <Card withBorder p="md" radius="md">
                    <Stack gap="sm">
                      <Group gap="sm">
                        <ThemeIcon size="lg" variant="light" color="blue">
                          <IconBook size={20} />
                        </ThemeIcon>
                        <Text fw={600} size="md">Placas claras</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        ⇒ documentação enxuta que orienta cada rota sem confundir ninguém.
                      </Text>
                    </Stack>
                  </Card>

                  <Card withBorder p="md" radius="md">
                    <Stack gap="sm">
                      <Group gap="sm">
                        <ThemeIcon size="lg" variant="light" color="orange">
                          <IconShield size={20} />
                        </ThemeIcon>
                        <Text fw={600} size="md">Radares e lombadas</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        ⇒ testes automatizados que evitam acidentes em produção.
                      </Text>
                    </Stack>
                  </Card>

                  <Card withBorder p="md" radius="md">
                    <Stack gap="sm">
                      <Group gap="sm">
                        <ThemeIcon size="lg" variant="light" color="purple">
                          <IconPuzzle size={20} />
                        </ThemeIcon>
                        <Text fw={600} size="md">Saídas estratégicas</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        ⇒ pontos de extensão e refatoração previstos desde o início.
                      </Text>
                    </Stack>
                  </Card>

                  <Card withBorder p="md" radius="md" style={{ gridColumn: 'span 2' }}>
                    <Stack gap="sm">
                      <Group gap="sm">
                        <ThemeIcon size="lg" variant="light" color="red">
                          <IconTools size={20} />
                        </ThemeIcon>
                        <Text fw={600} size="md">Manutenção constante</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        ⇒ monitoramento e alertas que tapam os buracos antes de virarem crateras.
                      </Text>
                    </Stack>
                  </Card>
                </SimpleGrid>

                <Alert color="brand" icon={<IconBulb size={20} />} radius="md" maw={900}>
                  <Text size="md" lh={1.6}>
                    Quando esses elementos faltam, o resultado é sempre o mesmo: gargalo, retrabalho, bug bizarro, deploy travado, time estressado. Já quando a arquitetura é bem pensada, ninguém nem percebe: tudo flui, entrega chega no prazo, e o usuário nem imagina o perrengue que você evitou.
                  </Text>
                </Alert>
              </Stack>
            </Paper>
          </motion.section>

          {/* Content Sections */}
          <motion.section variants={itemVariants}>
            <Title order={2} mb="md" ta="center">
              <IconBrain size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              O que você vai encontrar aqui
            </Title>
            <Text size="lg" c="dimmed" ta="center" mb="lg">
              Conteúdo organizado por contexto de uso
            </Text>
            
            <Paper withBorder p="lg" radius="lg">
              <Stack gap="md">
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
                  <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <div>
                      <Title order={3} size="h4" mb="sm">
                        <IconBook size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                        Guias Práticos
                      </Title>
                      <Text size="sm" c="dimmed" mb="md">
                        Aprenda a escolher a arquitetura certa e entenda a Dependency Rule - a regra fundamental de qualquer arquitetura.
                      </Text>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          component={Link} 
                          to="/guides/how-to-choose" 
                          size="sm" 
                          variant="light"
                          leftSection={<IconRocket size={16} />}
                        >
                          Decision Wizard
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <div>
                      <Title order={3} size="h4" mb="sm">
                        <IconHeart size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                        Boas Práticas
                      </Title>
                      <Text size="sm" c="dimmed" mb="md">
                        Princípios fundamentais: DRY, KISS, YAGNI, Clean Code, SRP, SOC. Base para qualquer projeto.
                      </Text>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          component={Link} 
                          to="/best-practices/dry" 
                          size="sm" 
                          variant="light"
                          leftSection={<IconCheck size={16} />}
                        >
                          Ver Princípios
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <div>
                      <Title order={3} size="h4" mb="sm">
                        <IconBuilding size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                        Arquiteturas
                      </Title>
                      <Text size="sm" c="dimmed" mb="md">
                        13 padrões arquiteturais testados: Clean Architecture, Micro-frontends, Monorepo, SPA, SSR/SSG e mais.
                      </Text>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          component={Link} 
                          to="/architectures/clean-architecture" 
                          size="sm" 
                          variant="light"
                          leftSection={<IconStack size={16} />}
                        >
                          Ver Arquiteturas
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <div>
                      <Title order={3} size="h4" mb="sm">
                        <IconPuzzle size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                        Padrões & Técnicas
                      </Title>
                      <Text size="sm" c="dimmed" mb="md">
                        Padrões de design, técnicas de implementação e otimizações específicas para front-end.
                      </Text>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          component={Link} 
                          to="/patterns/component-driven" 
                          size="sm" 
                          variant="light"
                          leftSection={<IconTools size={16} />}
                        >
                          Ver Padrões
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </SimpleGrid>
              </Stack>
            </Paper>
          </motion.section>

          {/* Value Proposition */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p="lg" radius="lg">
              <Stack gap="md" align="center" ta="center">
                <Title order={2} mb="sm">
                  <IconAward size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  Por que este Playbook Vale a Pena?
                </Title>
                
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" w="100%">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <FeatureCard 
                      icon={IconCheck}
                      title="Evita Refatoração"
                      description="Escolha a arquitetura certa desde o início. Economize meses de refatoração e dívida técnica."
                      color="green"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <FeatureCard 
                      icon={IconRocket}
                      title="Decisões Sólidas"
                      description="Base para justificar escolhas arquiteturais. Não mais 'achismo' técnico."
                      color="brand"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <FeatureCard 
                      icon={IconBolt}
                      title="Experiência Real"
                      description="18 anos de front-end convertidos em decisões práticas. Não é teoria acadêmica."
                      color="orange"
                    />
                  </motion.div>
                </SimpleGrid>
                
                <Alert color="brand" icon={<IconBulb size={20} />} radius="md" maw={800}>
                  <Text size="md" fw={500}>
                    <strong>ROI Real:</strong> Time que escolhe arquitetura certa economiza 3-6 meses de refatoração por ano. 
                    <strong>Dívida técnica reduzida em 70%</strong> com padrões testados.
                  </Text>
                </Alert>
              </Stack>
            </Paper>
          </motion.section>

          {/* Stats Section */}
          <motion.section variants={itemVariants}>
            <Title order={2} mb="md" ta="center">
              <IconAward size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Números que Contam
            </Title>
            <Text size="lg" c="dimmed" ta="center" mb="lg">
              Experiência real em arquiteturas front-end - sem bullshit
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mb="lg">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <StatsCard 
                  icon={IconCode}
                  value="13+"
                  label="Arquiteturas Dominadas"
                  color="brand"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <StatsCard 
                  icon={IconCheck}
                  value="18"
                  label="Anos de Experiência"
                  color="green"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <StatsCard 
                  icon={IconRocket}
                  value="50+"
                  label="Projetos Entregues"
                  color="brand"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <StatsCard 
                  icon={IconBolt}
                  value="100%"
                  label="Código Testado"
                  color="orange"
                />
              </motion.div>
            </SimpleGrid>
          </motion.section>

          {/* Features Section */}
          <motion.section variants={itemVariants}>
            <Title order={2} mb="md" ta="center">
              <IconTarget size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Por que esse Guia?
            </Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--mantine-color-brand-6), var(--mantine-color-accent-6))'
                  }} />
                  <Stack align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="brand">
                      <IconBook size={30} />
                    </ThemeIcon>
                    <Title order={3} size="h4">Corta o Ruído</Title>
                    <Text size="sm" c="dimmed">
                      O ecossistema front-end é uma bagunça. Aqui você encontra só o que realmente importa.
                    </Text>
                  </Stack>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--mantine-color-green-6), var(--mantine-color-teal-6))'
                  }} />
                  <Stack align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="green">
                      <IconBulb size={30} />
                    </ThemeIcon>
                    <Title order={3} size="h4">Padrões Testados</Title>
                    <Text size="sm" c="dimmed">
                      Esquece modinha. Aqui só tem o que funciona na prática, em projetos reais.
                    </Text>
                  </Stack>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" style={{ position: 'relative', overflow: 'hidden' }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--mantine-color-orange-6), var(--mantine-color-red-6))'
                  }} />
                  <Stack align="center" ta="center">
                    <ThemeIcon size={60} radius="md" variant="light" color="orange">
                      <IconRocket size={30} />
                    </ThemeIcon>
                    <Title order={3} size="h4">Decisões Sólidas</Title>
                    <Text size="sm" c="dimmed">
                      Não vai mais escolher arquitetura no chute. Aqui você tem base pra decidir certo.
                    </Text>
                  </Stack>
                </Card>
              </motion.div>
            </SimpleGrid>
          </motion.section>

          <Divider />

          {/* Examples Section */}
          <motion.section variants={itemVariants}>
            <Title order={2} mb="md" ta="center">
              <IconBuilding size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Exemplos Práticos
            </Title>
            <Text size="lg" c="dimmed" ta="center" mb="lg">
              Veja como essas arquiteturas funcionam na vida real. Cada projeto demonstra um padrão diferente.
            </Text>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" component="a" href="https://github.com/tiagovilasboas/ponto-pj" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <Group>
                        <ThemeIcon size={50} radius="md" variant="light" color="green">
                          <IconShield size={25} />
                        </ThemeIcon>
                        <div>
                          <Title order={3} size="h4">Ponto PJ</Title>
                          <Text size="sm" c="dimmed">Clean Architecture + PWA</Text>
                        </div>
                      </Group>
                      <Badge color="green" variant="light">Live</Badge>
                    </Group>
                    <Text size="sm">
                      Aplicação real de controle de ponto. Clean Architecture bem implementada, com separação clara de camadas, repositories e services.
                    </Text>
                    <Group gap="xs">
                      <Badge size="sm" variant="light">React</Badge>
                      <Badge size="sm" variant="light">TypeScript</Badge>
                      <Badge size="sm" variant="light">PWA</Badge>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" component="a" href="https://github.com/tiagovilasboas/react-vite-boilerplate" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <Group>
                        <ThemeIcon size={50} radius="md" variant="light" color="brand">
                          <IconBolt size={25} />
                        </ThemeIcon>
                        <div>
                          <Title order={3} size="h4">React Vite Boilerplate</Title>
                          <Text size="sm" c="dimmed">Estrutura Simples</Text>
                        </div>
                      </Group>
                      <Badge color="brand" variant="light">Template</Badge>
                    </Group>
                    <Text size="sm">
                      Template para projetos pequenos/médios. Estrutura básica mas bem organizada, ideal para times pequenos e MVP.
                    </Text>
                    <Group gap="xs">
                      <Badge size="sm" variant="light">Vite</Badge>
                      <Badge size="sm" variant="light">React</Badge>
                      <Badge size="sm" variant="light">TypeScript</Badge>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" component="a" href="https://github.com/tiagovilasboas/betalent-desafio-frontend" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <Group>
                        <ThemeIcon size={50} radius="md" variant="light" color="purple">
                          <IconPuzzle size={25} />
                        </ThemeIcon>
                        <div>
                          <Title order={3} size="h4">Betaltent Desafio</Title>
                          <Text size="sm" c="dimmed">Component-Driven</Text>
                        </div>
                      </Group>
                      <Badge color="purple" variant="light">Demo</Badge>
                    </Group>
                    <Text size="sm">
                      Foco em componentes bem estruturados. Demonstra Atomic Design e component composition em ação.
                    </Text>
                    <Group gap="xs">
                      <Badge size="sm" variant="light">Components</Badge>
                      <Badge size="sm" variant="light">Atomic Design</Badge>
                      <Badge size="sm" variant="light">Storybook</Badge>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card withBorder p="lg" radius="md" component="a" href="https://github.com/tiagovilasboas/react-layered-boilerplate" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <Group>
                        <ThemeIcon size={50} radius="md" variant="light" color="orange">
                          <IconLayersOff size={25} />
                        </ThemeIcon>
                        <div>
                          <Title order={3} size="h4">React Layered Boilerplate</Title>
                          <Text size="sm" c="dimmed">Arquitetura em Camadas</Text>
                        </div>
                      </Group>
                      <Badge color="orange" variant="light">Template</Badge>
                    </Group>
                    <Text size="sm">
                      Template para projetos médios/grandes. Separação clara de responsabilidades e dependency injection.
                    </Text>
                    <Group gap="xs">
                      <Badge size="sm" variant="light">Layered</Badge>
                      <Badge size="sm" variant="light">DI</Badge>
                      <Badge size="sm" variant="light">Enterprise</Badge>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </SimpleGrid>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants}>
            <Paper withBorder p="lg" radius="lg" ta="center">
              <Stack gap="md" align="center">
                <motion.div variants={pulseVariants} animate="animate">
                  <ThemeIcon size={80} radius="xl" variant="light" color="brand" mb="md">
                    <IconTrendingUp size={40} />
                  </ThemeIcon>
                </motion.div>
                <Title order={2}>Não sabe por onde começar?</Title>
                <Text size="lg" c="dimmed" maw={500}>
                  Responde o wizard e descobre qual arquitetura faz sentido pro seu projeto. Sem enrolação.
                </Text>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              </Stack>
            </Paper>
          </motion.section>

          {/* Author Section */}
          <motion.section variants={itemVariants}>
            <Title order={2} mb="md" ta="center">
              <IconUsers size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Sobre o Autor
            </Title>
            <Paper withBorder p="lg" radius="lg" mx="auto">
              <Group align="flex-start" gap="xl">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Avatar src="https://avatars.githubusercontent.com/u/2006720?v=4" size={120} radius="xl" />
                </motion.div>
                <div style={{ flex: 1 }}>
                  <Group align="center" mb="sm">
                    <Title order={3}>Tiago Boas</Title>
                    <Badge color="brand" variant="light">Front-End Engineer</Badge>
                  </Group>
                  <Text size="md" mb="md" lh={1.6}>
                    Sou o dev que transforma código em resultado: turbinei checkouts, simplifiquei cadastros bancários, acelerei fluxos de KYC e salvei dashboards engasgados. Fora dos horários de entrega, lapido os open-sources Ponto PJ e DataForge Tools e escrevo "Código Bonito Não Paga Boleto", tudo focado na mesma pegada: impacto real primeiro.
                  </Text>
                  <Group gap="sm">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    </motion.div>
                  </Group>
                </div>
              </Group>
            </Paper>
          </motion.section>
        </Stack>
      </motion.div>
    </Container>
  );
} 