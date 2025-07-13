import { Title, Text, Stack, Paper, Container, Alert, Button, Group, SimpleGrid } from '@mantine/core';
import { IconBulb, IconRocket, IconCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Lazy load the DecisionWizard component
const DecisionWizard = lazy(() => import('../../components/interactive/DecisionWizard.tsx'));

export default function HowToChoose() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Container size="lg" px={isMobile ? 'xs' : 'md'}>
      <Stack gap={isMobile ? 'sm' : 'xl'}>
        {/* Hero Section */}
        <section>
          <Stack align="center" ta="center" mb={isMobile ? 'md' : 'xl'}>
            <Title order={1} fw={700} size={isMobile ? '1.7rem' : '2.5rem'} mb={isMobile ? 'sm' : 'md'}>
              Como Escolher sua Arquitetura Front-End
            </Title>
            <Text size={isMobile ? 'md' : 'lg'} c="dimmed" maw={800}>
              Não existe arquitetura perfeita. Existe a arquitetura certa para o seu contexto. 
              Vamos descobrir qual faz sentido para o seu projeto.
            </Text>
          </Stack>
        </section>

        {/* Decision Wizard */}
        <section>
          <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="lg">
            <Stack gap={isMobile ? 'sm' : 'lg'}>
              <Stack align="center" ta="center" mb={isMobile ? 'sm' : 'md'}>
                <Title order={2} mb={isMobile ? 'xs' : 'sm'} size={isMobile ? '1.2rem' : undefined}>
                  <IconRocket size={isMobile ? 20 : 32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  Decision Wizard
                </Title>
                <Text size={isMobile ? 'sm' : 'lg'} c="dimmed" maw={600}>
                  Responde algumas perguntas e descobre qual arquitetura faz mais sentido para o seu projeto.
                </Text>
              </Stack>
              
              <Suspense fallback={<LoadingOverlay visible />}>
                <DecisionWizard />
              </Suspense>
            </Stack>
          </Paper>
        </section>

        {/* Tips Section */}
        <section>
          <Title order={2} mb={isMobile ? 'md' : 'lg'} ta="center" size={isMobile ? '1.2rem' : undefined}>
            <IconBulb size={isMobile ? 20 : 32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Dicas Importantes
          </Title>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={isMobile ? 'sm' : 'lg'}>
            <Alert color="blue" icon={<IconCheck size={isMobile ? 16 : 20} />} radius="md">
              <Text size={isMobile ? 'sm' : 'md'} fw={600} mb={isMobile ? 2 : 'sm'}>Comece Simples</Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                Não over-engineer desde o início. Escolha a arquitetura que resolve seu problema atual, 
                não o problema que você acha que vai ter no futuro.
              </Text>
            </Alert>

            <Alert color="green" icon={<IconCheck size={isMobile ? 16 : 20} />} radius="md">
              <Text size={isMobile ? 'sm' : 'md'} fw={600} mb={isMobile ? 2 : 'sm'}>Considere o Time</Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                A arquitetura tem que fazer sentido para o seu time. Se ninguém entende, 
                não vai dar certo, mesmo que seja tecnicamente perfeita.
              </Text>
            </Alert>

            <Alert color="orange" icon={<IconCheck size={isMobile ? 16 : 20} />} radius="md">
              <Text size={isMobile ? 'sm' : 'md'} fw={600} mb={isMobile ? 2 : 'sm'}>Pense no Futuro</Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                Mas não muito. Escolha algo que você consegue evoluir sem refatorar tudo. 
                Clean Architecture é ótima pra isso.
              </Text>
            </Alert>

            <Alert color="purple" icon={<IconCheck size={isMobile ? 16 : 20} />} radius="md">
              <Text size={isMobile ? 'sm' : 'md'} fw={600} mb={isMobile ? 2 : 'sm'}>Teste na Prática</Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                Não acredite só no que lê. Teste a arquitetura em um projeto pequeno primeiro. 
                Só assim você vai saber se funciona pra você.
              </Text>
            </Alert>
          </SimpleGrid>
        </section>

        {/* CTA Section */}
        <section>
          <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="lg" ta="center">
            <Stack gap={isMobile ? 'sm' : 'md'} align="center">
              <Title order={2} size={isMobile ? '1.2rem' : undefined}>Ainda com dúvidas?</Title>
              <Text size={isMobile ? 'sm' : 'lg'} c="dimmed" maw={500}>
                Dá uma olhada nos exemplos práticos e casos de uso de cada arquitetura.
              </Text>
              <Group gap={isMobile ? 'sm' : 'md'}>
                <Button 
                  component={Link} 
                  to="/patterns/clean-architecture" 
                  variant="filled"
                  leftSection={<IconRocket size={isMobile ? 12 : 16} />}
                  size={isMobile ? 'sm' : 'md'}
                >
                  Ver Clean Architecture
                </Button>
                <Button 
                  component={Link} 
                  to="/patterns/component-driven" 
                  variant="light"
                  leftSection={<IconRocket size={isMobile ? 12 : 16} />}
                  size={isMobile ? 'sm' : 'md'}
                >
                  Ver Component-Driven
                </Button>
              </Group>
            </Stack>
          </Paper>
        </section>
      </Stack>
    </Container>
  );
}

HowToChoose.metadata = {
  title: 'Como Escolher sua Arquitetura Front-End',
  description: 'Perguntas práticas para encontrar a melhor arquitetura para o seu contexto.'
};
