import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  List,
  ThemeIcon,
  Group,
  Card,
  Badge,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconBolt,
  IconCloud,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import jamstackExamples from '../../utils/code-examples/jamstack.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function JAMstack() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          JAMstack
        </Title>
        <Text size="lg" c="dimmed">
          JavaScript, APIs, Markup. Sites estáticos, performance máxima,
          segurança de sobra. Deploy simples, escalabilidade automática.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBolt size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                JavaScript, APIs, Markup - arquitetura moderna para web
              </Text>
            </div>
          </Group>

          <Text>
            JAMstack é sobre uma coisa só:{' '}
            <strong>separar front-end de back-end</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de servidor renderizando páginas, você tem
            sites estáticos servidos por CDN, com JavaScript fazendo a mágica e
            APIs fornecendo dados.
          </Text>

          <Text>
            A regra é simples:{' '}
            <em>
              pre-renderiza tudo, serve estático, JavaScript adiciona
              interatividade
            </em>
            . Performance máxima, segurança de sobra.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );

  // Implementation Section
  const ImplementationSection = () => (
    <Stack gap="xl">
      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconCloud
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 3 Pilares
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                J
              </Badge>
              <div>
                <Title order={4}>JavaScript</Title>
                <Text size="sm" c="dimmed">
                  Interatividade no cliente. React, Vue, vanilla JS. Tudo que
                  roda no browser.
                </Text>
                <CodeExample
                  title={
                    jamstackExamples.find(
                      e => e.id === 'jamstack-javascript-client'
                    )?.title || ''
                  }
                  code={
                    jamstackExamples.find(
                      e => e.id === 'jamstack-javascript-client'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                A
              </Badge>
              <div>
                <Title order={4}>APIs</Title>
                <Text size="sm" c="dimmed">
                  Dados e funcionalidades via APIs. REST, GraphQL, serverless
                  functions.
                </Text>
                <CodeExample
                  title={
                    jamstackExamples.find(e => e.id === 'jamstack-apis')
                      ?.title || ''
                  }
                  code={
                    jamstackExamples.find(e => e.id === 'jamstack-apis')
                      ?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                M
              </Badge>
              <div>
                <Title order={4}>Markup</Title>
                <Text size="sm" c="dimmed">
                  HTML pré-renderizado. Gatsby, Next.js, Nuxt. Sites estáticos
                  servidos por CDN.
                </Text>
                <CodeExample
                  title={
                    jamstackExamples.find(
                      e => e.id === 'jamstack-html-prerendered'
                    )?.title || ''
                  }
                  code={
                    jamstackExamples.find(
                      e => e.id === 'jamstack-html-prerendered'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>
        </Stack>

        <Paper withBorder p="md" radius="md" mt="lg">
          <Text size="sm" c="dimmed">
            <strong>Como funciona:</strong> O HTML é pré-renderizado no build e
            servido por CDN (Markup). JavaScript adiciona interatividade no
            cliente (JavaScript). APIs fornecem dados e funcionalidades (APIs).
            Resultado: performance máxima, segurança de sobra, escalabilidade
            automática.
          </Text>
        </Paper>
      </div>
    </Stack>
  );

  // Examples Section
  const ExamplesSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconBulb
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Casos Reais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Netlify</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Plataforma JAMstack por excelência
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Deploy automático via Git</List.Item>
                  <List.Item>CDN global para performance</List.Item>
                  <List.Item>Serverless functions</List.Item>
                  <List.Item>Form handling sem backend</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Smashing Magazine</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Blog migrado para JAMstack
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Performance significativamente melhor</List.Item>
                  <List.Item>SEO otimizado</List.Item>
                  <List.Item>Deploy em segundos</List.Item>
                  <List.Item>Menor custo de infraestrutura</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>E-commerce</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Lojas online com JAMstack
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Catálogo estático pré-renderizado</List.Item>
                  <List.Item>Checkout via APIs</List.Item>
                  <List.Item>Performance para SEO</List.Item>
                  <List.Item>Escalabilidade automática</List.Item>
                </List>
              </div>
            </Group>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  // Pitfalls Section
  const PitfallsSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconAlertTriangle
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          <Alert color="red" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Build times longos
            </Text>
            <Text size="sm" c="dimmed">
              Sites grandes podem ter build times de 10+ minutos. Use
              incremental builds e cache.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Dados dinâmicos
            </Text>
            <Text size="sm" c="dimmed">
              Conteúdo que muda constantemente precisa de rebuilds frequentes.
              Use ISR ou client-side fetching.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Complexidade de deploy
            </Text>
            <Text size="sm" c="dimmed">
              Múltiplas APIs e serviços podem complicar o deploy. Use
              ferramentas como Netlify ou Vercel.
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Como evitar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Comece simples:</strong> Site estático antes de APIs
              <br />
              <strong>Otimize builds:</strong> Incremental builds e cache
              <br />
              <strong>Use ISR:</strong> Incremental Static Regeneration
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );

  // References Section
  const ReferencesSection = () => (
    <Stack gap="xl">
      <Paper withBorder p="xl" radius="md">
        <Title order={3} mb="lg">
          <IconCode
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Referências e Recursos
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Ferramentas
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Netlify:</strong> Deploy e hosting JAMstack
              </List.Item>
              <List.Item>
                <strong>Vercel:</strong> Deploy automático
              </List.Item>
              <List.Item>
                <strong>Gatsby:</strong> Static site generator
              </List.Item>
              <List.Item>
                <strong>Next.js:</strong> React com SSG
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Casos de Sucesso
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                      <strong>Jamstack.org:</strong>{' '}
                      <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">O que é JAMstack</a>
                    </List.Item>
                    <List.Item>
                      <strong>Netlify:</strong>{' '}
                      <a href="https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/" target="_blank" rel="noopener noreferrer">Static Site Generators</a>
                    </List.Item>
                    <List.Item>
                      <strong>Astro:</strong>{' '}
                      <a href="https://docs.astro.build/en/concepts/why-astro/" target="_blank" rel="noopener noreferrer">Why Astro (Islands + JAMstack)</a>
                    </List.Item>
                    <List.Item>
                      <strong>Next.js:</strong>{' '}
                      <a href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation" target="_blank" rel="noopener noreferrer">Static Site Generation</a>
                    </List.Item>
            </List>
          </Card>
        </Stack>
      </Paper>
    </Stack>
  );

  const tabs = createArchitectureTabs(
    <OverviewSection />,
    <ImplementationSection />,
    <ExamplesSection />,
    <PitfallsSection />,
    <ReferencesSection />
  );

  return <MobileTabs items={tabs} defaultTab="overview" />;
}

export default JAMstack;
