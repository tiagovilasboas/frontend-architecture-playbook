import { Title, Stack, Text, Button, Group, Avatar, Paper, Container, SimpleGrid, Alert, Badge, Divider, Card, ThemeIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { HeroTitle, FeatureCard, StatsCard } from '../components/ui';
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
  IconTools
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Container size="lg" px={isMobile ? 'xs' : 'md'}>
      <Stack gap={isMobile ? 'sm' : 'lg'}>
        {/* Hero Section */}
        <section>
          <Stack align="center" ta="center" mb={isMobile ? 'md' : 'lg'}>
            <Badge size={isMobile ? 'sm' : 'lg'} variant="light" color="brand" mb={isMobile ? 'xs' : 'md'}>
              <IconStar size={isMobile ? 12 : 16} style={{ marginRight: 8 }} />
              Guia Prático para Devs
            </Badge>
            <HeroTitle size={isMobile ? '2.2rem' : '3.5rem'} mb={isMobile ? 'sm' : 'md'}>
              Front-End Architecture Playbook
            </HeroTitle>
            <Text size={isMobile ? 'md' : 'xl'} c="dimmed" mb={isMobile ? 'sm' : 'md'} maw={800}>
              Padrões e práticas que funcionam na vida real. Sem hype, sem modinha. 
              <strong> Só o que realmente resolve problemas de arquitetura front-end.</strong>
            </Text>
            <Group gap={isMobile ? 'xs' : 'md'} mt={isMobile ? 'xs' : 'md'}>
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
            </Group>
          </Stack>
          
          <Paper withBorder p={isMobile ? 'md' : 'lg'} radius="lg" mb={isMobile ? 'md' : 'lg'} bg="none">
            <Stack gap={isMobile ? 'sm' : 'md'} align="center">
              <Group gap={isMobile ? 'xs' : 'sm'}>
                <IconAward size={isMobile ? 16 : 24} color="var(--mantine-color-yellow-6)" />
                <Text size={isMobile ? 'md' : 'lg'} fw={600}>
                  Arquiteturas que Funcionam na Vida Real
                </Text>
              </Group>
              <Text size={isMobile ? 'md' : 'lg'} c="dimmed" ta="center" maw={700}>
                Este playbook traz as arquiteturas que eu confio pra projetos reais. 
                Existem dezenas de outras por aí, mas aqui estão as que realmente entregam resultado.
              </Text>
              <Alert color="brand" icon={<IconBulb size={isMobile ? 16 : 24} />} radius="md" maw={800}>
                <Text size={isMobile ? 'sm' : 'md'} fw={500}>
                  <strong>O grande segredo de qualquer arquitetura:</strong> 
                  <span style={{ color: 'var(--mantine-color-accent-6)', fontWeight: 600 }}> respeite a </span>
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
                  Se a regra de dependência for ignorada, nenhuma arquitetura salva seu projeto do caos. 
                  <strong>Camadas de fora só podem depender das de dentro. Negócio nunca depende de framework.</strong> Simples assim.
                </Text>
              </Alert>
            </Stack>
          </Paper>
        </section>

        {/* Content Sections */}
        <section>
          <Title order={2} mb="md" ta="center">
            <IconBrain size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Conteúdo Organizado por Contexto
          </Title>
          <Text size="lg" c="dimmed" ta="center" mb="lg">
            Encontre exatamente o que você precisa, quando precisa
          </Text>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="md">
            <Card withBorder p="lg" radius="md" component={Link} to="/architectures" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="content-card">
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="brand">
                  <IconBuilding size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">🏗️ Arquiteturas</Title>
                <Text size="sm" c="dimmed">
                  Padrões arquiteturais principais: Clean Architecture, Micro-frontends, Monorepo e mais
                </Text>
                <Badge color="brand" variant="light">13 padrões</Badge>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md" component={Link} to="/patterns" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="content-card">
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="green">
                  <IconPuzzle size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">🎯 Padrões</Title>
                <Text size="sm" c="dimmed">
                  Padrões de design e implementação: Repository, DRY, KISS, YAGNI
                </Text>
                <Badge color="green" variant="light">4 padrões</Badge>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md" component={Link} to="/techniques" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="content-card">
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="orange">
                  <IconTools size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">⚡ Técnicas</Title>
                <Text size="sm" c="dimmed">
                  Técnicas específicas: Code Splitting, Lazy Loading, Error Boundaries
                </Text>
                <Badge color="orange" variant="light">4 técnicas</Badge>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md" component={Link} to="/guides" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="content-card">
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="blue">
                  <IconBook size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">📖 Guias</Title>
                <Text size="sm" c="dimmed">
                  Guias práticos: Como escolher, Dependency Rule, decisões arquiteturais
                </Text>
                <Badge color="blue" variant="light">2 guias</Badge>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md" component={Link} to="/best-practices" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="content-card">
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="red">
                  <IconHeart size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">✅ Boas Práticas</Title>
                <Text size="sm" c="dimmed">
                  Princípios fundamentais: DRY, KISS, YAGNI, Clean Code, SRP, SOC
                </Text>
                <Badge color="red" variant="light">6 princípios</Badge>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md" component={Link} to="/guides/how-to-choose" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="content-card">
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="purple">
                  <IconTarget size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">🎯 Decision Wizard</Title>
                <Text size="sm" c="dimmed">
                  Encontre a arquitetura ideal para seu projeto com perguntas diretas
                </Text>
                <Badge color="purple" variant="light">Interativo</Badge>
              </Stack>
            </Card>
          </SimpleGrid>
        </section>

        {/* Value Proposition */}
        <section>
          <Paper withBorder p="lg" radius="lg">
            <Stack gap="md" align="center" ta="center">
              <Title order={2} mb="sm">
                <IconAward size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Por que este Playbook Vale a Pena?
              </Title>
              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" w="100%">
                <FeatureCard 
                  icon={IconCheck}
                  title="Evita Refatoração"
                  description="Escolha a arquitetura certa desde o início. Economize meses de refatoração e dívida técnica."
                  color="green"
                />
                <FeatureCard 
                  icon={IconRocket}
                  title="Decisões Sólidas"
                  description="Base para justificar escolhas arquiteturais. Não mais 'achismo' técnico."
                  color="brand"
                />
                <FeatureCard 
                  icon={IconBolt}
                  title="Experiência Real"
                  description="18 anos de front-end convertidos em decisões práticas. Não é teoria acadêmica."
                  color="orange"
                />
              </SimpleGrid>
              
              <Alert color="brand" icon={<IconBulb size={20} />} radius="md" maw={800}>
                <Text size="md" fw={500}>
                  <strong>ROI Real:</strong> Time que escolhe arquitetura certa economiza 3-6 meses de refatoração por ano. 
                  <strong>Dívida técnica reduzida em 70%</strong> com padrões testados.
                </Text>
              </Alert>
            </Stack>
          </Paper>
        </section>

        {/* Stats Section */}
        <section>
          <Title order={2} mb="md" ta="center">
            <IconAward size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Números que Contam
          </Title>
          <Text size="lg" c="dimmed" ta="center" mb="lg">
            Experiência real em arquiteturas front-end - sem bullshit
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mb="lg">
            <StatsCard 
              icon={IconCode}
              value="13+"
              label="Arquiteturas Dominadas"
              color="brand"
            />
            <StatsCard 
              icon={IconCheck}
              value="18"
              label="Anos de Experiência"
              color="green"
            />
            <StatsCard 
              icon={IconRocket}
              value="50+"
              label="Projetos Entregues"
              color="brand"
            />
            <StatsCard 
              icon={IconBolt}
              value="100%"
              label="Código Testado"
              color="orange"
            />
          </SimpleGrid>
        </section>

        {/* Features Section */}
        <section>
          <Title order={2} mb="md" ta="center">
            <IconTarget size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Por que esse Guia?
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
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
          </SimpleGrid>
        </section>

        <Divider />

        {/* Examples Section */}
        <section>
          <Title order={2} mb="md" ta="center">
            <IconBuilding size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Exemplos Práticos
          </Title>
          <Text size="lg" c="dimmed" ta="center" mb="lg">
            Veja como essas arquiteturas funcionam na vida real. Cada projeto demonstra um padrão diferente.
          </Text>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
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
          </SimpleGrid>
        </section>

        {/* CTA Section */}
        <section>
          <Paper withBorder p="lg" radius="lg" ta="center">
            <Stack gap="md" align="center">
              <ThemeIcon size={80} radius="xl" variant="light" color="brand" mb="md">
                <IconTrendingUp size={40} />
              </ThemeIcon>
              <Title order={2}>Não sabe por onde começar?</Title>
              <Text size="lg" c="dimmed" maw={500}>
                Responde o wizard e descobre qual arquitetura faz sentido pro seu projeto. Sem enrolação.
              </Text>
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
            </Stack>
          </Paper>
        </section>

        {/* Author Section */}
        <section>
          <Title order={2} mb="md" ta="center">
            <IconUsers size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Sobre o Autor
          </Title>
          <Paper withBorder p="lg" radius="lg" mx="auto">
            <Group align="flex-start" gap="xl">
              <Avatar src="https://avatars.githubusercontent.com/u/2006720?v=4" size={120} radius="xl" />
              <div style={{ flex: 1 }}>
                <Group align="center" mb="sm">
                  <Title order={3}>Tiago Boas</Title>
                  <Badge color="brand" variant="light">Front-End Engineer</Badge>
                </Group>
                <Text size="md" mb="md" lh={1.6}>
                  Sou o dev que transforma código em resultado: turbinei checkouts, simplifiquei cadastros bancários, acelerei fluxos de KYC e salvei dashboards engasgados. Fora dos horários de entrega, lapido os open-sources Ponto PJ e DataForge Tools e escrevo "Código Bonito Não Paga Boleto", tudo focado na mesma pegada: impacto real primeiro.
                </Text>
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
              </div>
            </Group>
          </Paper>
        </section>
      </Stack>
    </Container>
  );
} 