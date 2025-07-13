import { Title, Stack, Text, Button, Group, Avatar, Paper, Container, SimpleGrid, Card, ThemeIcon, Alert } from '@mantine/core';
import { Link } from 'react-router-dom';
import { 
  IconBook, 
  IconBulb, 
  IconRocket, 
  IconUser, 
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
  IconCheck
} from '@tabler/icons-react';

export default function Home() {
  return (
    <Container size="lg">
      <Stack gap="xl">
        {/* Hero Section */}
        <section>
          <Stack align="center" ta="center" mb="xl">
            <ThemeIcon size={120} radius="xl" variant="light" color="brand" mb="md">
              <IconCode size={60} />
            </ThemeIcon>
            <Title order={1} fw={700} size="3rem" mb="md">
              Front-End Architecture Playbook
            </Title>
            <Text size="xl" c="dimmed" mb="lg">
              Padrões e práticas que funcionam na vida real. Sem hype, sem modinha. Só o que realmente resolve problemas de arquitetura front-end.
            </Text>
          </Stack>
          <Paper withBorder p="lg" radius="md" mb="xl" bg="none">
            <Stack gap="sm" align="center">
              <Text size="lg" fw={600}>
                Este playbook traz as arquiteturas mais conhecidas e que, na minha experiência, realmente entregam resultado. Existem dezenas de outras, mas aqui estão as que eu confio pra projetos reais.
              </Text>
              <Alert color="blue" icon={<IconBulb size={24} />} radius="md" mt="md" maw={700}>
                <Text size="md" fw={500}>
                  <strong>O grande segredo de qualquer arquitetura:</strong> <span style={{ color: 'var(--mantine-color-blue-7)' }}>respeite a <b>Dependency Rule</b></span>. Se a regra de dependência for ignorada, nenhuma arquitetura salva seu projeto do caos. Camadas de fora só podem depender das de dentro. Negócio nunca depende de framework. Simples assim.
                </Text>
              </Alert>
            </Stack>
          </Paper>
        </section>



        {/* Features Section */}
        <section>
          <Title order={2} mb="lg" ta="center">
            <IconTarget size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Por que este Guia?
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Card withBorder p="xl" radius="md">
              <Stack align="center" ta="center">
                <ThemeIcon size={60} radius="md" variant="light" color="blue">
                  <IconBook size={30} />
                </ThemeIcon>
                <Title order={3} size="h4">Corta o Ruído</Title>
                <Text size="sm" c="dimmed">
                  O ecossistema front-end é uma bagunça. Aqui você encontra só o que realmente importa.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="xl" radius="md">
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

            <Card withBorder p="xl" radius="md">
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
            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/ponto-pj" target="_blank" style={{ textDecoration: 'none' }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="green">
                    <IconShield size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">Ponto PJ</Title>
                    <Text size="sm" c="dimmed">Clean Architecture + PWA</Text>
                  </div>
                </Group>
                <Text size="sm">
                  Aplicação real de controle de ponto. Clean Architecture bem implementada, com separação clara de camadas, repositories e services.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/react-vite-boilerplate" target="_blank" style={{ textDecoration: 'none' }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="blue">
                    <IconBolt size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">React Vite Boilerplate</Title>
                    <Text size="sm" c="dimmed">Estrutura Simples</Text>
                  </div>
                </Group>
                <Text size="sm">
                  Template para projetos pequenos/médios. Estrutura básica mas bem organizada, ideal para times pequenos e MVP.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/betalent-desafio-frontend" target="_blank" style={{ textDecoration: 'none' }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="purple">
                    <IconPuzzle size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">Betaltent Desafio</Title>
                    <Text size="sm" c="dimmed">Component-Driven</Text>
                  </div>
                </Group>
                <Text size="sm">
                  Foco em componentes bem estruturados. Demonstra Atomic Design e component composition em ação.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="xl" radius="md" component="a" href="https://github.com/tiagovilasboas/react-layered-boilerplate" target="_blank" style={{ textDecoration: 'none' }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} radius="md" variant="light" color="orange">
                    <IconLayersOff size={25} />
                  </ThemeIcon>
                  <div>
                    <Title order={3} size="h4">React Layered Boilerplate</Title>
                    <Text size="sm" c="dimmed">Arquitetura em Camadas</Text>
                  </div>
                </Group>
                <Text size="sm">
                  Template para projetos médios/grandes. Separação clara de responsabilidades e dependency injection.
                </Text>
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
              <Avatar src="https://avatars.githubusercontent.com/u/2006720?v=4" size={100} radius="xl" />
              <div style={{ flex: 1 }}>
                <Title order={3} mb="sm">Tiago Boas</Title>
                <Text size="md" mb="md" lh={1.6}>
                  Sou front-end engineer há 18 anos, focado em React, TypeScript e arquitetura escalável.
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
                    leftSection={<IconUser size={16} />}
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