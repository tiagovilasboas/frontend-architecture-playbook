import {
  Title,
  Text,
  Stack,
  Paper,
  Container,
  Alert,
  Button,
  Group,
  SimpleGrid,
} from '@mantine/core';
import { IconBulb, IconRocket, IconCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Lazy load the DecisionWizard component
const DecisionWizard = lazy(
  () => import('../../components/interactive/DecisionWizard.tsx')
);

export default function HowToChoose() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Container size="lg" px={isMobile ? 'xs' : 'md'}>
      <Stack gap={isMobile ? 'sm' : 'xl'}>
        {/* Hero Section */}
        <section>
          <Stack align="center" ta="center" mb={isMobile ? 'sm' : 'md'}>
            <Title
              order={1}
              fw={700}
              size={isMobile ? '1.7rem' : '2.5rem'}
              mb={isMobile ? 'xs' : 'sm'}
            >
              Como Escolher sua Arquitetura Front-End
            </Title>
            <Text size={isMobile ? 'md' : 'lg'} c="dimmed" maw={800}>
              Não existe arquitetura perfeita. Existe a arquitetura certa para o
              seu contexto. Vamos descobrir qual faz sentido para o seu projeto.
            </Text>
          </Stack>
        </section>

        {/* Decision Wizard */}
        <section>
          <Paper withBorder p={isMobile ? 'xs' : 'md'} radius="lg">
            <Stack gap={isMobile ? 'sm' : 'lg'}>
              <Stack align="center" ta="center" mb={isMobile ? 'sm' : 'md'}>
                <Title
                  order={2}
                  mb={isMobile ? 'xs' : 'sm'}
                  size={isMobile ? '1.2rem' : undefined}
                >
                  <IconRocket
                    size={isMobile ? 20 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Decision Wizard v3.0
                </Title>
                <Text
                  size={isMobile ? 'xs' : 'lg'}
                  c="dimmed"
                  maw={isMobile ? '90vw' : 600}
                  mb={isMobile ? 0 : undefined}
                  lineClamp={isMobile ? 2 : undefined}
                >
                  6 perguntas para encontrar sua arquitetura ideal - agora com
                  todas as 15 arquiteturas disponíveis.
                </Text>
              </Stack>

              <Suspense fallback={<LoadingOverlay visible />}>
                <DecisionWizard />
              </Suspense>
            </Stack>
          </Paper>
        </section>

        {/* Context Matters Section */}
        <section>
          <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="lg">
            <Stack gap={isMobile ? 'sm' : 'lg'}>
              <Stack align="center" ta="center" mb={isMobile ? 'sm' : 'md'}>
                <Title
                  order={2}
                  mb={isMobile ? 'xs' : 'sm'}
                  size={isMobile ? '1.2rem' : undefined}
                >
                  <IconBulb
                    size={isMobile ? 20 : 32}
                    style={{ verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Mas, ó: Contexto é Tudo
                </Title>
              </Stack>

              <Alert
                color="orange"
                icon={<IconCheck size={isMobile ? 16 : 20} />}
                radius="md"
              >
                <Text
                  size={isMobile ? 'sm' : 'md'}
                  fw={600}
                  mb={isMobile ? 2 : 'sm'}
                >
                  Isso aqui não tá escrito em pedra
                </Text>
                <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                  Arquitetura não é receita de bolo. O que faz sentido pra um
                  MVP pode virar um inferno num SaaS gigante, e o que parece
                  overkill pra um projeto pequeno pode salvar sua pele quando o
                  negócio explode.
                </Text>
              </Alert>

              <Text
                size={isMobile ? 'sm' : 'md'}
                c="dimmed"
                ta="center"
                maw={700}
              >
                Antes de sair copiando padrão, tenta entender o máximo possível
                do negócio:
              </Text>

              <SimpleGrid
                cols={{ base: 1, md: 2 }}
                spacing={isMobile ? 'sm' : 'md'}
              >
                <Stack gap="xs">
                  <Text size={isMobile ? 'sm' : 'md'} fw={600}>
                    📈 Pra onde esse projeto quer ir?
                  </Text>
                  <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                    Vai crescer rápido? Precisa escalar pra milhares de usuários
                    ou é mais nicho?
                  </Text>
                </Stack>

                <Stack gap="xs">
                  <Text size={isMobile ? 'sm' : 'md'} fw={600}>
                    👥 O time é grande ou só você?
                  </Text>
                  <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                    Micro-frontends fazem sentido com 10+ devs, mas são overkill
                    pra 2 pessoas.
                  </Text>
                </Stack>

                <Stack gap="xs">
                  <Text size={isMobile ? 'sm' : 'md'} fw={600}>
                    🔗 Precisa integrar com muita coisa?
                  </Text>
                  <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                    APIs externas, sistemas legados, múltiplos backends? Isso
                    muda tudo.
                  </Text>
                </Stack>

                <Stack gap="xs">
                  <Text size={isMobile ? 'sm' : 'md'} fw={600}>
                    ⏰ Tem prazo apertado?
                  </Text>
                  <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                    Clean Architecture é ótima, mas se você tem 2 semanas, vai
                    com SPA mesmo.
                  </Text>
                </Stack>
              </SimpleGrid>

              <Alert
                color="blue"
                icon={<IconBulb size={isMobile ? 16 : 20} />}
                radius="md"
              >
                <Text
                  size={isMobile ? 'sm' : 'md'}
                  fw={600}
                  mb={isMobile ? 2 : 'sm'}
                >
                  Essas perguntas são só um ponto de partida
                </Text>
                <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                  O segredo é ajustar a arquitetura conforme o projeto evolui.
                  Não existe bala de prata, existe contexto.
                </Text>
              </Alert>
            </Stack>
          </Paper>
        </section>

        {/* Tips Section */}
        <section>
          <Title
            order={2}
            mb={isMobile ? 'md' : 'lg'}
            ta="center"
            size={isMobile ? '1.2rem' : undefined}
          >
            <IconBulb
              size={isMobile ? 20 : 32}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Dicas Importantes
          </Title>
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            spacing={isMobile ? 'sm' : 'lg'}
          >
            <Alert
              color="blue"
              icon={<IconCheck size={isMobile ? 16 : 20} />}
              radius="md"
            >
              <Text
                size={isMobile ? 'sm' : 'md'}
                fw={600}
                mb={isMobile ? 2 : 'sm'}
              >
                Comece Simples
              </Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                Não over-engineer desde o início. Escolha a arquitetura que
                resolve seu problema atual, não o problema que você acha que vai
                ter no futuro.
              </Text>
            </Alert>

            <Alert
              color="green"
              icon={<IconCheck size={isMobile ? 16 : 20} />}
              radius="md"
            >
              <Text
                size={isMobile ? 'sm' : 'md'}
                fw={600}
                mb={isMobile ? 2 : 'sm'}
              >
                Considere o Time
              </Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                A arquitetura tem que fazer sentido para o seu time. Se ninguém
                entende, não vai dar certo, mesmo que seja tecnicamente
                perfeita.
              </Text>
            </Alert>

            <Alert
              color="orange"
              icon={<IconCheck size={isMobile ? 16 : 20} />}
              radius="md"
            >
              <Text
                size={isMobile ? 'sm' : 'md'}
                fw={600}
                mb={isMobile ? 2 : 'sm'}
              >
                Pense no Futuro
              </Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                Mas não muito. Escolha algo que você consegue evoluir sem
                refatorar tudo. Clean Architecture é ótima pra isso.
              </Text>
            </Alert>

            <Alert
              color="purple"
              icon={<IconCheck size={isMobile ? 16 : 20} />}
              radius="md"
            >
              <Text
                size={isMobile ? 'sm' : 'md'}
                fw={600}
                mb={isMobile ? 2 : 'sm'}
              >
                Teste na Prática
              </Text>
              <Text size={isMobile ? 'xs' : 'sm'} c="dimmed">
                Não acredite só no que lê. Teste a arquitetura em um projeto
                pequeno primeiro. Só assim você vai saber se funciona pra você.
              </Text>
            </Alert>
          </SimpleGrid>
        </section>

        {/* CTA Section */}
        <section>
          <Paper withBorder p={isMobile ? 'md' : 'xl'} radius="lg" ta="center">
            <Stack gap={isMobile ? 'sm' : 'md'} align="center">
              <Title order={2} size={isMobile ? '1.2rem' : undefined}>
                Ainda com dúvidas?
              </Title>
              <Text size={isMobile ? 'sm' : 'lg'} c="dimmed" maw={500}>
                Dá uma olhada nos exemplos práticos e casos de uso de cada
                arquitetura.
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
  description:
    'Perguntas práticas para encontrar a melhor arquitetura para o seu contexto.',
};
