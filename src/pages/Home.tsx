import { Title, Stack, Text, Button, Group, Avatar, Paper, Container } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container size="lg">
      <Stack gap="xl">
        <section>
          <Title order={1} fw={700}>Arquitetura Front-End Moderna</Title>
          <Text size="lg" c="dimmed" maw={640}>
            Uma coleção selecionada de padrões e práticas testadas em batalha para construir aplicações front-end modernas, sustentáveis e escaláveis.
          </Text>
        </section>

        <section>
          <Title order={2} mb="sm">Por que este Guia?</Title>
          <Text mb="xs">O cenário front-end evolui em um ritmo alucinante, gerando complexidade e fatiga na tomada de decisões. Este guia foi criado para ser sua bússola, ajudando você a:</Text>
          <ul style={{ marginLeft: '1.2rem' }}>
            <li><Text> <strong>Navegar na Complexidade:</strong> cortar o ruído do ecossistema e entender os prós e contras de cada padrão.</Text></li>
            <li><Text> <strong>Focar em Padrões Testados:</strong> esquecer modinhas e adotar estratégias arquitetônicas robustas.</Text></li>
            <li><Text> <strong>Construir com Confiança:</strong> projetar sistemas escaláveis e sustentáveis.</Text></li>
          </ul>
        </section>

        <section>
          <Title order={2} mb="sm">Não sabe por onde começar?</Title>
          <Text mb="md">Use nosso guia interativo para encontrar o padrão que melhor se adapta às suas necessidades.</Text>
          <Button component={Link} to="/guides/how-to-choose" size="md">Encontre sua Arquitetura</Button>
        </section>

        <section>
          <Title order={2} mb="md">Sobre o Autor</Title>
          <Paper withBorder p="md" radius="md" maw={680}>
            <Group align="flex-start">
              <Avatar src="https://avatars.githubusercontent.com/u/2006720?v=4" size={80} radius="xl" />
              <div>
                <Title order={3} mb={4}>Tiago Boas</Title>
                <Text size="sm" mb="sm">Sou front-end engineer há 18 anos, focado em React, TypeScript e arquitetura escalável. Já liderei squads em bancos digitais, fintechs e SaaS, sempre guiado por métricas de negócio.</Text>
                <Group gap="xs">
                  <Button component="a" href="https://github.com/tiagovilasboas" target="_blank" size="xs" variant="light">GitHub</Button>
                  <Button component="a" href="https://www.linkedin.com/in/tiagovilasboas" target="_blank" size="xs" variant="light">LinkedIn</Button>
                </Group>
              </div>
            </Group>
          </Paper>
        </section>
      </Stack>
    </Container>
  );
} 