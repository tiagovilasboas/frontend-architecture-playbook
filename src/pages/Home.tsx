import { Title, Stack, Text, Button, Group, Avatar, Paper, Container, SimpleGrid, Card, ThemeIcon, Alert, Badge, Divider } from '@mantine/core';
import { Link } from 'react-router-dom';
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
  IconBrandTwitter
} from '@tabler/icons-react';

export default function Home() {
  return (
    <Container size="lg">
      <Stack gap="xl">
        {/* Hero Section */}
        <section>
          <Stack align="center" ta="center" mb="xl">
            <Badge size="lg" variant="light" color="brand" mb="md">
              <IconStar size={16} style={{ marginRight: 8 }} />
              Guia Prático para Devs
            </Badge>
            <Title order={1} fw={800} size="3.5rem" mb="md" style={{ 
              background: 'linear-gradient(135deg, var(--mantine-color-brand-6) 0%, var(--mantine-color-accent-6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Front-End Architecture Playbook
            </Title>
            <Text size="xl" c="dimmed" mb="lg" maw={800}>
              Padrões e práticas que funcionam na vida real. Sem hype, sem modinha. 
              <strong> Só o que realmente resolve problemas de arquitetura front-end.</strong>
            </Text>
            <Group gap="md" mt="md">
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
              <Button 
                component="a" 
                href="https://github.com/tiagovilasboas" 
                target="_blank"
                size="lg" 
                variant="light"
                leftSection={<IconBrandGithub size={20} />}
              >
                Ver Projetos
              </Button>
            </Group>
          </Stack>
          
          <Paper withBorder p="xl" radius="lg" mb="xl" bg="none">
            <Stack gap="lg" align="center">
              <Group gap="xs">
                <IconAward size={24} color="var(--mantine-color-yellow-6)" />
                <Text size="lg" fw={600}>
                  Arquiteturas Testadas em Projetos Reais
                </Text>
              </Group>
              <Text size="lg" c="dimmed" ta="center" maw={700}>
                Este playbook traz as arquiteturas mais conhecidas e que, na minha experiência, realmente entregam resultado. 
                Existem dezenas de outras, mas aqui estão as que eu confio pra projetos reais.
              </Text>
              <Alert color="brand" icon={<IconBulb size={24} />} radius="md" maw={800}>
                <Text size="md" fw={500}>
                  <strong>O grande segredo de qualquer arquitetura:</strong> 
                  <span style={{ color: 'var(--mantine-color-accent-6)', fontWeight: 600 }}> respeite a <b>Dependency Rule</b></span>. 
                  Se a regra de dependência for ignorada, nenhuma arquitetura salva seu projeto do caos. 
                  <strong>Camadas de fora só podem depender das de dentro. Negócio nunca depende de framework.</strong> Simples assim.
                </Text>
              </Alert>
            </Stack>
          </Paper>
        </section>

        {/* Value Proposition */}
        <section>
          <Paper withBorder p="xl" radius="lg">
            <Stack gap="lg" align="center" ta="center">
              <Title order={2} mb="sm">
                <IconAward size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                Por que este Playbook Vale a Pena?
              </Title>
              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" w="100%">
                <Card withBorder p="md" radius="md" ta="center">
                  <ThemeIcon size={50} radius="md" variant="light" color="green" mb="sm">
                    <IconCheck size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5">Evita Refatoração</Title>
                  <Text size="sm" c="dimmed">
                    Escolha a arquitetura certa desde o início. Economize meses de refatoração e dívida técnica.
                  </Text>
                </Card>

                <Card withBorder p="md" radius="md" ta="center">
                  <ThemeIcon size={50} radius="md" variant="light" color="brand" mb="sm">
                    <IconRocket size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5">Decisões Sólidas</Title>
                  <Text size="sm" c="dimmed">
                    Base para justificar escolhas arquiteturais. Não mais "achismo" técnico.
                  </Text>
                </Card>

                <Card withBorder p="md" radius="md" ta="center">
                  <ThemeIcon size={50} radius="md" variant="light" color="orange" mb="sm">
                    <IconBolt size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5">Experiência Real</Title>
                  <Text size="sm" c="dimmed">
                    18 anos de front-end convertidos em decisões práticas. Não é teoria acadêmica.
                  </Text>
                </Card>
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
          <Title order={2} mb="lg" ta="center">
            <IconAward size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Experiência Real
          </Title>
          <Text size="lg" c="dimmed" ta="center" mb="xl">
            Números que comprovam a experiência prática em arquiteturas front-end
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb="xl">
            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon size={50} radius="md" variant="light" color="brand" mb="sm">
                <IconCode size={25} />
              </ThemeIcon>
              <Title order={3} size="h4">12+</Title>
              <Text size="sm" c="dimmed">Arquiteturas Dominadas</Text>
            </Card>
            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon size={50} radius="md" variant="light" color="green" mb="sm">
                <IconCheck size={25} />
              </ThemeIcon>
              <Title order={3} size="h4">18</Title>
              <Text size="sm" c="dimmed">Anos de Experiência</Text>
            </Card>
            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon size={50} radius="md" variant="light" color="brand" mb="sm">
                <IconRocket size={25} />
              </ThemeIcon>
              <Title order={3} size="h4">50+</Title>
              <Text size="sm" c="dimmed">Projetos Entregues</Text>
            </Card>
            <Card withBorder p="md" radius="md" ta="center">
              <ThemeIcon size={50} radius="md" variant="light" color="orange" mb="sm">
                <IconBolt size={25} />
              </ThemeIcon>
              <Title order={3} size="h4">100%</Title>
              <Text size="sm" c="dimmed">Código Testado</Text>
            </Card>
          </SimpleGrid>
        </section>

        {/* Features Section */}
        <section>
          <Title order={2} mb="lg" ta="center">
            <IconTarget size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Por que este Guia?
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Card withBorder p="xl" radius="md" style={{ position: 'relative', overflow: 'hidden' }}>
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

            <Card withBorder p="xl" radius="md" style={{ position: 'relative', overflow: 'hidden' }}>
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

            <Card withBorder p="xl" radius="md" style={{ position: 'relative', overflow: 'hidden' }}>
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
          <Title order={2} mb="lg" ta="center">
            <IconBuilding size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Exemplos Práticos
          </Title>
          <Text size="lg" c="dimmed" ta="center" mb="xl">
            Veja como essas arquiteturas funcionam na vida real. Cada projeto demonstra um padrão diferente.
          </Text>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/ponto-pj" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
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

            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/react-vite-boilerplate" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
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

            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/betalent-desafio-frontend" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
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

            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/react-layered-boilerplate" target="_blank" style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }} className="project-card">
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
          <Paper withBorder p="xl" radius="lg" ta="center">
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
          <Title order={2} mb="lg" ta="center">
            <IconUsers size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Sobre o Autor
          </Title>
          <Paper withBorder p="xl" radius="lg" mx="auto">
            <Group align="flex-start" gap="xl">
              <Avatar src="https://avatars.githubusercontent.com/u/2006720?v=4" size={120} radius="xl" />
              <div style={{ flex: 1 }}>
                <Group align="center" mb="sm">
                  <Title order={3}>Tiago Boas</Title>
                  <Badge color="brand" variant="light">Front-End Engineer</Badge>
                </Group>
                <Text size="md" mb="md" lh={1.6}>
                  Sou front-end engineer há <strong>18 anos</strong>, focado em React, TypeScript e arquitetura escalável.
                </Text>
                <Text size="md" mb="md" lh={1.6}>
                  Já liderei squads em bancos digitais, fintechs e SaaS, sempre guiado por métricas de negócio.
                </Text>
                <Alert color="green" icon={<IconCheck size={22} />} radius="md" mb="md" maw={600}>
                  <Text size="md" fw={600}>
                    Criei <b>módulos reutilizáveis para Smart TVs (LG, Samsung)</b>, acelerei <b>checkouts de e-commerce</b> <span style={{ color: 'var(--mantine-color-green-7)' }}>(redução de 40% no abandono)</span>, otimizei <b>dashboards de analytics</b> <span style={{ color: 'var(--mantine-color-green-7)' }}>(+60% performance)</span> e entreguei <b>microserviços Go</b> que salvaram um MVP em tempo recorde <span style={{ color: 'var(--mantine-color-green-7)' }}>(2 semanas vs 3 meses estimado)</span>.
                  </Text>
                </Alert>
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
                  <Button 
                    component="a" 
                    href="https://twitter.com/tiagovilasboas" 
                    target="_blank" 
                    size="sm" 
                    variant="light"
                    leftSection={<IconBrandTwitter size={16} />}
                  >
                    Twitter
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