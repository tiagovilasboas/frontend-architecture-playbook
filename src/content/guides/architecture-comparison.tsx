import React from 'react';
import { Link } from 'react-router-dom';
import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  Group,
  ThemeIcon,
  Grid,
  Card,
  Badge,
} from '@mantine/core';
import { IconScale, IconBulb, IconAlertTriangle } from '@tabler/icons-react';
import ArchitectureComparison from '../../components/ArchitectureComparison';

// Métricas baseadas em análise de casos reais e experiência prática
// Cada métrica (0-10) é avaliada considerando:
// - Performance: Velocidade, eficiência, tempo de carregamento
// - Manutenibilidade: Facilidade de manutenção, refatoração, debugging
// - Testabilidade: Facilidade de testes unitários, integração, e2e
// - Escalabilidade: Capacidade de crescimento, novos features, times
// - Complexidade: Curva de aprendizado, overhead cognitivo
//
// Fontes das métricas:
// - Casos reais de empresas (Netflix, Spotify, Airbnb, Uber)
// - Experiência prática em projetos de diferentes tamanhos
// - Análise de trade-offs documentados na literatura
// - Feedback de desenvolvedores e arquitetos
// - Métricas de performance e manutenibilidade reais
const architectureData = [
  {
    name: 'Clean Architecture',
    description:
      'Separação clara de responsabilidades, independência de frameworks',
    metrics: [
      {
        name: 'Performance',
        value: 6,
        description:
          'Overhead de abstrações, mas compensado por testes rápidos',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 9,
        description: 'Código organizado, responsabilidades claras',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 10,
        description: 'Testes unitários puros, sem mocks complexos',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 8,
        description: 'Suporta crescimento e múltiplos frontends',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 7,
        description: 'Curva de aprendizado íngreme, mas compensa',
        icon: null,
      },
    ],
    pros: [
      'Testes unitários puros e rápidos',
      'Independência total de frameworks',
      'Migrações seguras entre tecnologias',
      'Código de negócio reutilizável',
      'Manutenibilidade a longo prazo',
    ],
    cons: [
      'Complexidade inicial alta',
      'Mais arquivos e pastas',
      'Curva de aprendizado íngreme',
      'Over-engineering para projetos simples',
      'Performance overhead em alguns casos',
    ],
    bestFor: [
      'Projetos complexos com regras de negócio',
      'Times sênior que entendem os trade-offs',
      'Projetos de longo prazo (2+ anos)',
      'Migrações frequentes entre tecnologias',
      'Múltiplos frontends (web, mobile, desktop)',
    ],
    avoidWhen: [
      'Projeto simples (MVP, landing page)',
      'Time júnior sem mentoria',
      'Deadline apertado (menos de 2 meses)',
      'Performance crítica não é aceitável',
      'Projeto experimental ou protótipo',
    ],
  },
  {
    name: 'Component-Driven',
    description: 'Desenvolvimento baseado em componentes reutilizáveis',
    metrics: [
      {
        name: 'Performance',
        value: 8,
        description: 'Componentes otimizados, reutilização eficiente',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 7,
        description: 'Componentes isolados, fácil de manter',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 8,
        description: 'Testes de componentes isolados',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 7,
        description: 'Design system escalável',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 5,
        description: 'Conceito familiar para devs front-end',
        icon: null,
      },
    ],
    pros: [
      'Reutilização de componentes',
      'Desenvolvimento paralelo',
      'Design system consistente',
      'Testes de componentes isolados',
      'Curva de aprendizado suave',
    ],
    cons: [
      'Pode criar dependências entre componentes',
      'Over-engineering de componentes simples',
      'Difícil de refatorar componentes complexos',
      'Pode gerar props drilling',
      'Design system pode ficar complexo',
    ],
    bestFor: [
      'Design systems',
      'Aplicações com UI complexa',
      'Times que trabalham em paralelo',
      'Projetos com muitas telas similares',
      'Reutilização de componentes',
    ],
    avoidWhen: [
      'Aplicação muito simples',
      'UI única e específica',
      'Time pequeno sem experiência',
      'Prototipagem rápida',
      'Lógica de negócio complexa',
    ],
  },
  {
    name: 'Micro-frontends',
    description: 'Aplicação dividida em módulos independentes',
    metrics: [
      {
        name: 'Performance',
        value: 7,
        description: 'Bundles menores, carregamento independente',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 6,
        description: 'Módulos isolados, mas integração complexa',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 6,
        description: 'Testes por módulo, mas integração difícil',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 9,
        description: 'Times independentes, deploys separados',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 8,
        description: 'Integração complexa, routing avançado',
        icon: null,
      },
    ],
    pros: [
      'Times independentes',
      'Deploys separados',
      'Tecnologias heterogêneas',
      'Escalabilidade de times',
      'Isolamento de falhas',
    ],
    cons: [
      'Integração complexa',
      'Duplicação de dependências',
      'Routing avançado',
      'Performance overhead',
      'Debugging complexo',
    ],
    bestFor: [
      'Times grandes e independentes',
      'Aplicações com domínios distintos',
      'Migração gradual de legacy',
      'Tecnologias heterogêneas',
      'Escalabilidade de times',
    ],
    avoidWhen: [
      'Time pequeno',
      'Aplicação simples',
      'Integração complexa entre módulos',
      'Performance crítica',
      'Deadline apertado',
    ],
  },
  {
    name: 'Monorepo',
    description: 'Múltiplos projetos em um repositório',
    metrics: [
      {
        name: 'Performance',
        value: 6,
        description: 'Build otimizado, mas inicial lento',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 8,
        description: 'Código compartilhado, refatoração segura',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 7,
        description: 'Testes integrados, mas complexos',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 7,
        description: 'Compartilhamento eficiente',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 6,
        description: 'Tooling complexo, mas familiar',
        icon: null,
      },
    ],
    pros: [
      'Compartilhamento de código',
      'Refatoração segura',
      'Tooling centralizado',
      'Versionamento unificado',
      'Dependências compartilhadas',
    ],
    cons: [
      'Build inicial lento',
      'Tooling complexo',
      'Pode ficar grande demais',
      'Deploy de tudo junto',
      'Curva de aprendizado',
    ],
    bestFor: [
      'Múltiplos projetos relacionados',
      'Compartilhamento de código',
      'Refatoração frequente',
      'Tooling centralizado',
      'Versionamento unificado',
    ],
    avoidWhen: [
      'Projeto único',
      'Times muito independentes',
      'Tecnologias muito diferentes',
      'Build time crítico',
      'Deploy independente necessário',
    ],
  },
  {
    name: 'SSR & SSG',
    description: 'Server-Side Rendering e Static Site Generation',
    metrics: [
      {
        name: 'Performance',
        value: 9,
        description: 'Carregamento rápido, SEO otimizado',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 6,
        description: 'Complexidade de hidratação',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 5,
        description: 'Testes mais complexos com SSR',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 8,
        description: 'CDN e cache eficientes',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 7,
        description: 'Conceitos de hidratação e hydration',
        icon: null,
      },
    ],
    pros: [
      'SEO otimizado',
      'Carregamento rápido',
      'Cache eficiente',
      'Melhor Core Web Vitals',
      'Funciona sem JavaScript',
    ],
    cons: [
      'Complexidade de hidratação',
      'Build time mais longo',
      'Debugging mais complexo',
      'Overhead de servidor',
      'Curva de aprendizado',
    ],
    bestFor: [
      'Sites com SEO importante',
      'E-commerce',
      'Blogs e conteúdo',
      'Performance crítica',
      'Acessibilidade',
    ],
    avoidWhen: [
      'Aplicação muito dinâmica',
      'Dashboard com dados em tempo real',
      'Prototipagem rápida',
      'Time sem experiência em SSR',
      'Aplicação interna',
    ],
  },
  {
    name: 'PWA (Progressive Web App)',
    description: 'Apps web com recursos nativos',
    metrics: [
      {
        name: 'Performance',
        value: 8,
        description: 'Cache inteligente, carregamento offline',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 6,
        description: 'Service workers complexos',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 6,
        description: 'Testes de service workers',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 8,
        description: 'Funciona offline, sincronização',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 7,
        description: 'Service workers e cache strategies',
        icon: null,
      },
    ],
    pros: [
      'Funciona offline',
      'Instalação como app',
      'Push notifications',
      'Cache inteligente',
      'Experiência nativa',
    ],
    cons: [
      'Service workers complexos',
      'Debugging offline difícil',
      'Compatibilidade de browsers',
      'Curva de aprendizado',
      'Manutenção de cache',
    ],
    bestFor: [
      'Apps mobile-first',
      'Conteúdo offline',
      'Engagement alto',
      'Experiência nativa',
      'Performance mobile',
    ],
    avoidWhen: [
      'Aplicação desktop-only',
      'Conteúdo sempre online',
      'Time sem experiência mobile',
      'Prototipagem rápida',
      'Aplicação interna',
    ],
  },
  {
    name: 'BFF (Backend for Frontend)',
    description: 'API específica para front-end',
    metrics: [
      {
        name: 'Performance',
        value: 7,
        description: 'Queries otimizadas, menos requests',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 7,
        description: 'API dedicada, mas duplicação',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 6,
        description: 'Testes de API e integração',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 6,
        description: 'Escala com front-end',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 6,
        description: 'API adicional para manter',
        icon: null,
      },
    ],
    pros: [
      'Queries otimizadas',
      'Menos requests',
      'API específica para UI',
      'Performance otimizada',
      'Flexibilidade de dados',
    ],
    cons: [
      'Duplicação de APIs',
      'Mais infraestrutura',
      'Complexidade adicional',
      'Debugging distribuído',
      'Overhead de desenvolvimento',
    ],
    bestFor: [
      'APIs complexas',
      'Performance crítica',
      'Múltiplos frontends',
      'Otimização de queries',
      'Flexibilidade de dados',
    ],
    avoidWhen: [
      'API simples',
      'Time pequeno',
      'Prototipagem rápida',
      'Overhead não justificado',
      'Aplicação simples',
    ],
  },
  {
    name: 'Event-Driven',
    description: 'Arquitetura baseada em eventos',
    metrics: [
      {
        name: 'Performance',
        value: 7,
        description: 'Processamento assíncrono',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 6,
        description: 'Fluxo complexo de eventos',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 5,
        description: 'Testes de eventos assíncronos',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 9,
        description: 'Desacoplamento total',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 8,
        description: 'Padrões de eventos complexos',
        icon: null,
      },
    ],
    pros: [
      'Desacoplamento total',
      'Escalabilidade horizontal',
      'Processamento assíncrono',
      'Resiliência a falhas',
      'Flexibilidade de fluxo',
    ],
    cons: [
      'Complexidade de eventos',
      'Debugging difícil',
      'Ordem de eventos',
      'Curva de aprendizado',
      'Overhead de eventos',
    ],
    bestFor: [
      'Sistemas complexos',
      'Processamento assíncrono',
      'Múltiplos consumidores',
      'Resiliência importante',
      'Escalabilidade horizontal',
    ],
    avoidWhen: [
      'Aplicação simples',
      'Fluxo síncrono',
      'Time sem experiência',
      'Performance crítica',
      'Debugging frequente',
    ],
  },
  {
    name: 'JAMstack',
    description: 'JavaScript, APIs, Markup',
    metrics: [
      {
        name: 'Performance',
        value: 9,
        description: 'Sites estáticos, CDN global',
        icon: null,
      },
      {
        name: 'Manutenibilidade',
        value: 8,
        description: 'Separação clara, APIs independentes',
        icon: null,
      },
      {
        name: 'Testabilidade',
        value: 7,
        description: 'Testes de APIs e front-end',
        icon: null,
      },
      {
        name: 'Escalabilidade',
        value: 9,
        description: 'CDN global, APIs escaláveis',
        icon: null,
      },
      {
        name: 'Complexidade',
        value: 5,
        description: 'Conceitos simples e claros',
        icon: null,
      },
    ],
    pros: [
      'Performance excepcional',
      'Segurança melhorada',
      'CDN global',
      'Deploy simples',
      'Custos baixos',
    ],
    cons: [
      'Limitações de dinâmico',
      'Build time',
      'Complexidade de APIs',
      'Debugging distribuído',
      'Overhead de build',
    ],
    bestFor: [
      'Sites de conteúdo',
      'Marketing sites',
      'Performance crítica',
      'Custos baixos',
      'SEO importante',
    ],
    avoidWhen: [
      'Aplicação muito dinâmica',
      'Dashboard complexo',
      'Funcionalidades em tempo real',
      'Integração complexa',
      'Aplicação interna',
    ],
  },
];

function ArchitectureComparisonPage() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Comparação de Arquiteturas Front-End
        </Title>
        <Text size="lg" c="dimmed">
          Compare diferentes arquiteturas baseado em métricas práticas e
          contexto real. Encontre a arquitetura certa para o seu projeto.
        </Text>
      </div>

      {/* Introduction */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconScale size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Como usar esta comparação</Title>
              <Text c="dimmed">
                Baseie suas decisões em dados, não em opiniões
              </Text>
            </div>
          </Group>

          <Text>
            Cada arquitetura tem seus trade-offs. Não existe "melhor"
            arquitetura - existe a arquitetura certa para o seu contexto
            específico.
          </Text>

          <Text>
            Use as métricas abaixo para comparar arquiteturas baseado em:
          </Text>

          <Alert color="blue" icon={<IconBulb size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              📊 Métricas Avaliadas:
            </Text>
            <Text size="sm" c="dimmed">
              <strong>Performance:</strong> Velocidade e eficiência
              <br />
              <strong>Manutenibilidade:</strong> Facilidade de manutenção
              <br />
              <strong>Testabilidade:</strong> Facilidade de testes
              <br />
              <strong>Escalabilidade:</strong> Capacidade de crescimento
              <br />
              <strong>Complexidade:</strong> Curva de aprendizado
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Comparison Component */}
      <ArchitectureComparison architectures={architectureData} />

      {/* Decision Guide */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Guia de Decisão
        </Title>

        <Stack gap="md">
          <Alert color="green" icon={<IconBulb size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Passos para escolher:
            </Text>
            <Text size="sm" c="dimmed">
              1. <strong>Defina seu contexto:</strong> Time, prazo, complexidade
              <br />
              2. <strong>Priorize métricas:</strong> O que é mais importante?
              <br />
              3. <strong>Compare trade-offs:</strong> Vantagens vs desvantagens
              <br />
              4. <strong>Considere o futuro:</strong> Como o projeto vai
              crescer?
              <br />
              5. <strong>Teste a decisão:</strong> Protótipo ou POC
            </Text>
          </Alert>

          <Alert
            color="orange"
            icon={<IconAlertTriangle size={16} />}
            radius="md"
          >
            <Text size="sm" fw={600} mb={4}>
              ⚠️ Armadilhas comuns:
            </Text>
            <Text size="sm" c="dimmed">
              • <strong>Over-engineering:</strong> Complexidade desnecessária
              <br />• <strong>Under-engineering:</strong> Simplicidade que não
              escala
              <br />• <strong>Decisão prematura:</strong> Escolher antes de
              entender
              <br />• <strong>Ignorar contexto:</strong> Copiar sem adaptar
              <br />• <strong>Foco em tecnologia:</strong> Esquecer do negócio
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Architecture Categories - Compacta */}
      <Paper withBorder p="xl" radius="md">
        <Group justify="space-between" mb="lg">
          <div>
            <Title order={2} mb="xs">
              🏗️ Categorias de Arquiteturas
            </Title>
            <Text c="dimmed" size="sm">
              Organizadas por propósito e complexidade
            </Text>
          </div>
          <Badge variant="light" color="blue">
            3 categorias
          </Badge>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="blue">
                  🚀
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Fundamentais
                  </Text>
                  <Text size="xs" c="dimmed">
                    SSR, PWA, JAMstack, BFF
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed">
                Para SEO, performance e experiência mobile
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="green">
                  🏗️
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Padrões de Design
                  </Text>
                  <Text size="xs" c="dimmed">
                    Clean, Component, Event-Driven
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed">
                Para projetos complexos e reutilização
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="orange">
                  🧩
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Modularização
                  </Text>
                  <Text size="xs" c="dimmed">
                    Micro-frontends, Monorepo
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed">
                Para times independentes e compartilhamento
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Fontes das Métricas - Compacta */}
      <Paper withBorder p="xl" radius="md">
        <Group justify="space-between" mb="lg">
          <div>
            <Title order={2} mb="xs">
              📚 Fontes das Métricas
            </Title>
            <Text c="dimmed" size="sm">
              Baseadas em casos reais, literatura técnica e experiência prática
            </Text>
          </div>
          <Badge variant="light" color="blue">
            5 fontes
          </Badge>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="blue">
                  🏢
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Casos Reais
                  </Text>
                  <Text size="xs" c="dimmed">
                    Netflix, Spotify, Airbnb
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed">
                Análise de projetos em produção com métricas verificáveis
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="green">
                  📊
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Métricas
                  </Text>
                  <Text size="xs" c="dimmed">
                    Core Web Vitals, Performance
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed">
                LCP, FID, CLS, Bundle Size, Build Time
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="orange">
                  📚
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Literatura
                  </Text>
                  <Text size="xs" c="dimmed">
                    Martin, Fowler, Evans
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed">
                Clean Architecture, DDD, Microservices
              </Text>
            </Card>
          </Grid.Col>
        </Grid>

        <Alert color="blue" icon={<IconBulb size={16} />} radius="md" mt="lg">
          <Text size="sm" fw={600} mb={2}>
            💡 Metodologia: 18+ anos de experiência + casos reais + feedback da
            comunidade
          </Text>
        </Alert>
      </Paper>

      {/* Next Steps - Compacta */}
      <Paper withBorder p="xl" radius="md">
        <Group justify="space-between" mb="lg">
          <div>
            <Title order={2} mb="xs">
              🚀 Próximos Passos
            </Title>
            <Text c="dimmed" size="sm">
              Escolha sua arquitetura e continue sua jornada
            </Text>
          </div>
          <Badge variant="light" color="green">
            3 ações
          </Badge>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="blue">
                  🧙‍♂️
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Decision Wizard
                  </Text>
                  <Text size="xs" c="dimmed">
                    Recomendações personalizadas
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed" mb="sm">
                Use o wizard para obter recomendações baseadas no seu contexto
              </Text>
              <Link
                to="/guides/how-to-choose"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Badge variant="light" color="blue" size="sm">
                  Acessar Wizard →
                </Badge>
              </Link>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="green">
                  📚
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Guias Detalhados
                  </Text>
                  <Text size="xs" c="dimmed">
                    Implementação passo-a-passo
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed" mb="sm">
                Cada arquitetura tem sua própria página com exemplos de código
              </Text>
              <Badge variant="light" color="green" size="sm">
                Ver Guias →
              </Badge>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Group mb="sm">
                <ThemeIcon size={32} radius="md" variant="light" color="orange">
                  ⚖️
                </ThemeIcon>
                <div>
                  <Text fw={600} size="sm">
                    Trade-offs
                  </Text>
                  <Text size="xs" c="dimmed">
                    Arquitetura é escolha
                  </Text>
                </div>
              </Group>
              <Text size="xs" c="dimmed" mb="sm">
                Lembre-se: o que resolve para um projeto pode ser dor de cabeça
                para outro
              </Text>
              <Badge variant="light" color="orange" size="sm">
                Entender Trade-offs →
              </Badge>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>
    </Stack>
  );
}

export default ArchitectureComparisonPage;
