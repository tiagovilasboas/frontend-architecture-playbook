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
  IconApps,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import microFrontendsExamples from '../../utils/code-examples/micro-frontends.json';
import MobileTabs from '../../components/MobileTabs';
import { createArchitectureTabs } from '../../components/MobileTabsHelpers';

function MicroFrontends() {
  // Overview Section
  const OverviewSection = () => (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Micro-Frontends
        </Title>
        <Text size="lg" c="dimmed">
          Quebre aplicações grandes em pedaços menores. Times independentes,
          tecnologias heterogêneas, deploy separado. Escalabilidade real.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconApps size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Arquitetura que quebra aplicações grandes em micro-aplicações
              </Text>
            </div>
          </Group>

          <Text>
            Micro-Frontends dividem uma aplicação em{' '}
            <strong>micro-apps independentes com deploys separados</strong>.
            Cada time é dono de uma vertical (feature), do componente ao deploy.
          </Text>

          <Text>
            A decisão #1 é <strong>como os micro-frontends se comunicam</strong>:
            shared state via Custom Events ou shared store? Como evitar CSS
            leaking entre apps? Como rotear entre apps de times diferentes?
            Essas são as perguntas reais que definem o sucesso da arquitetura.
          </Text>

          <Text>
            A regra de ouro: <em>se você tem menos de 3 times, monorepo é
            melhor</em>. Micro-frontends resolvem problemas organizacionais
            (times autônomos), não problemas técnicos. O overhead de
            infraestrutura é real.
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
          <IconApps
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 4 Conceitos Principais
        </Title>

        <Stack gap="md">
          {microFrontendsExamples.map((ex, idx) => (
            <Card
              withBorder
              p="md"
              key={ex.title}
              w="100%"
              style={{ minWidth: 0, width: '100%' }}
            >
              <Group w="100%" style={{ minWidth: 0, width: '100%' }}>
                <Badge
                  size="lg"
                  variant="light"
                  color={['green', 'blue', 'orange', 'red'][idx] || 'gray'}
                >
                  {idx + 1}
                </Badge>
                <div style={{ flex: 1, width: '100%' }}>
                  <Title order={4}>{ex.title}</Title>
                  <Text size="sm" c="dimmed">
                    {ex.description}
                  </Text>
                  <CodeExample title={ex.title} code={ex.code} />
                </div>
              </Group>
            </Card>
          ))}
        </Stack>

        <Paper withBorder p="md" radius="md" mt="lg">
          <Text size="sm" c="dimmed">
            <strong>Como funciona:</strong> Cada micro-frontend é uma aplicação
            independente com seu time, tecnologia e deploy. O Shell (container)
            orquestra tudo, carregando os micro-frontends conforme necessário.
            Times trabalham sem depender uns dos outros, mas a integração
            precisa ser bem planejada.
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
                <Title order={4}>Plataforma de streaming</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Múltiplos times, múltiplas features
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Time de busca independente</List.Item>
                  <List.Item>Time de player independente</List.Item>
                  <List.Item>Time de recomendações independente</List.Item>
                  <List.Item>Deploy independente por funcionalidade</List.Item>
                </List>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconApps size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Player de mídia</Title>
                <Text size="sm" c="dimmed" mb="sm">
                  Funcionalidades complexas por domínio
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Time de player independente</List.Item>
                  <List.Item>Time de playlists independente</List.Item>
                  <List.Item>Time de descoberta independente</List.Item>
                  <List.Item>Tecnologias diferentes por time</List.Item>
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
                  Loja online com múltiplas funcionalidades
                </Text>
                <List size="sm" spacing="xs">
                  <List.Item>Time de catálogo independente</List.Item>
                  <List.Item>Time de checkout independente</List.Item>
                  <List.Item>Time de pagamento independente</List.Item>
                  <List.Item>Time de reviews independente</List.Item>
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
              ❌ CSS Leaking entre apps
            </Text>
            <Text size="sm" c="dimmed">
              Estilos de um micro-frontend afetam outro. Soluções: Shadow DOM
              (isolamento real, mas perde CSS global), CSS Modules com prefixo
              por app, ou Tailwind com prefixo (ex: <code>app1-</code>).
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Shared state entre apps
            </Text>
            <Text size="sm" c="dimmed">
              Se dois apps precisam do mesmo estado (user logado, carrinho),
              as opções são: Custom Events (simples, sem type safety), shared
              npm package com store (acoplamento de versão), ou API como
              fonte de verdade (mais requests, mais correto).
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Bundle duplicado (React carrega 3x)
            </Text>
            <Text size="sm" c="dimmed">
              Cada micro-frontend traz seu próprio React, Lodash, etc. Module
              Federation resolve com <code>shared</code> config, mas exige
              versões compatíveis. Singleton mode é essencial.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Roteamento cross-app
            </Text>
            <Text size="sm" c="dimmed">
              Quem controla a URL? O shell app precisa delegar rotas para cada
              micro-frontend. single-spa resolve, mas adiciona complexidade.
              Alternativa: cada app é um SPA em path prefix (/checkout/*).
            </Text>
          </Alert>

          <Alert color="green" icon={<IconCheck size={16} />} mb="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Quando NÃO usar
            </Text>
            <Text size="sm" c="dimmed">
              <strong>{'< 3 times independentes:'}</strong> Monorepo resolve
              <br />
              <strong>{'< 50 devs:'}</strong> O overhead não compensa
              <br />
              <strong>Sem CI/CD maduro:</strong> Deploy independente exige
              preview deploys, rollback por app e feature flags
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
              Artigos e Casos
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                      <strong>Martin Fowler:</strong>{' '}
                      <a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank" rel="noopener noreferrer">Micro Frontends</a>
                    </List.Item>
                    <List.Item>
                      <strong>Module Federation:</strong>{' '}
                      <a href="https://module-federation.io/" target="_blank" rel="noopener noreferrer">Documentação oficial</a>
                    </List.Item>
                    <List.Item>
                      <strong>Single-SPA:</strong>{' '}
                      <a href="https://single-spa.js.org/" target="_blank" rel="noopener noreferrer">Framework para micro frontends</a>
                    </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Ferramentas
            </Title>
            <List size="sm" spacing="xs">
              <List.Item>
                <strong>Module Federation:</strong> Webpack 5
              </List.Item>
              <List.Item>
                <strong>Single-SPA:</strong> Framework para micro-frontends
              </List.Item>
              <List.Item>
                <strong>Nx:</strong> Monorepo com micro-frontends
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

MicroFrontends.metadata = {
  title: 'Micro-frontends',
  description:
    'Quebre aplicações grandes em pedaços pequenos. Times independentes, tecnologias diferentes, deploy separado.',
};

export default MicroFrontends;
