import React, { useState } from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  Group,
  Grid,
  Card,
  Badge,
  Select,
  Button,
  List,
  ThemeIcon,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconTarget,
  IconInfoCircle,
} from '@tabler/icons-react';
import GuideNavigation from '../../components/GuideNavigation';

// Métricas baseadas em análise de padrões arquiteturais e trade-offs documentados
// Cada métrica (0-10) é avaliada considerando:
// - Performance: Velocidade, eficiência, tempo de carregamento
// - Manutenibilidade: Facilidade de manutenção, refatoração, debugging
// - Testabilidade: Facilidade de testes unitários, integração, e2e
// - Escalabilidade: Capacidade de crescimento, novos features, times
// - Complexidade: Curva de aprendizado, overhead cognitivo
//
// Fontes das métricas:
// - Casos reais documentados em cases.json (com links verificáveis)
// - Core Web Vitals e métricas de performance padrão da indústria
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
  const [selectedArchitectures, setSelectedArchitectures] = useState<string[]>(
    []
  );
  const [comparisonType, setComparisonType] = useState<
    'pros' | 'cons' | 'bestFor' | 'avoidWhen'
  >('pros');

  const handleComparisonTypeChange = (
    value: 'pros' | 'cons' | 'bestFor' | 'avoidWhen'
  ) => {
    setComparisonType(value);
  };

  const getComparisonData = () => {
    if (selectedArchitectures.length === 0) {
      return null;
    }

    const selectedArch = architectureData.find(
      arch => arch.name === selectedArchitectures[0]
    );
    if (!selectedArch) {
      return null;
    }

    const comparison = {
      [comparisonType]:
        selectedArch[comparisonType as keyof typeof selectedArch],
    };

    if (selectedArchitectures.length > 1) {
      const secondArch = architectureData.find(
        arch => arch.name === selectedArchitectures[1]
      );
      if (secondArch) {
        comparison[`${comparisonType}2`] =
          secondArch[comparisonType as keyof typeof secondArch];
      }
    }

    return comparison;
  };

  const comparison = getComparisonData();

  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Comparação de Arquiteturas Front-End
        </Title>
        <Text size="lg" c="dimmed">
          Compare arquiteturas de forma direta e prática. Encontre a certa para
          seu projeto.
        </Text>
      </div>

      {/* Metrics Source */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconInfoCircle
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Origem das Métricas
        </Title>

        <Text c="dimmed" mb="lg">
          Estas métricas são específicas para <strong>front-end</strong> e
          baseadas em casos reais.
        </Text>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Alert color="blue" icon={<IconTarget size={16} />} radius="md">
              <Text size="sm" fw={600} mb={4}>
                📊 Fontes das Métricas:
              </Text>
              <Text size="sm" c="dimmed">
                • <strong>Casos reais:</strong> 15 cases com links verificáveis
                <br />• <strong>Core Web Vitals:</strong> LCP, INP, CLS
                <br />• <strong>Performance:</strong> Bundle size, build time
                <br />• <strong>Referências:</strong> Artigos de engenharia
                verificáveis
                <br />• <strong>Feedback da comunidade:</strong> Devs e
                arquitetos
              </Text>
            </Alert>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Alert color="green" icon={<IconBulb size={16} />} radius="md">
              <Text size="sm" fw={600} mb={4}>
                🎯 Foco Front-End:
              </Text>
              <Text size="sm" c="dimmed">
                • <strong>Performance:</strong> Tempo de carregamento,
                renderização
                <br />• <strong>Manutenibilidade:</strong> Facilidade de
                refatorar código
                <br />• <strong>Testabilidade:</strong> Testes unitários e e2e
                <br />• <strong>Escalabilidade:</strong> Crescimento do time e
                features
                <br />• <strong>Complexidade:</strong> Curva de aprendizado
                front-end
              </Text>
            </Alert>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Interactive Comparator */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconTarget
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Comparador Interativo
        </Title>

        <Text c="dimmed" mb="lg">
          Selecione até 2 arquiteturas para comparar detalhadamente.
        </Text>

        {/* Architecture Selection */}
        <Group gap="md" mb="lg">
          <Select
            label="Primeira arquitetura"
            placeholder="Escolha uma arquitetura"
            data={architectureData.map(arch => ({
              value: arch.name,
              label: arch.name,
            }))}
            value={selectedArchitectures[0] || null}
            onChange={value => {
              if (value) {
                setSelectedArchitectures(prev =>
                  [value, ...prev.filter(name => name !== value)].slice(0, 2)
                );
              }
            }}
            style={{ flex: 1 }}
          />
          <Select
            label="Segunda arquitetura (opcional)"
            placeholder="Escolha uma arquitetura"
            data={architectureData.map(arch => ({
              value: arch.name,
              label: arch.name,
            }))}
            value={selectedArchitectures[1] || null}
            onChange={value => {
              if (value) {
                setSelectedArchitectures(prev =>
                  [...prev.filter(name => name !== value), value].slice(0, 2)
                );
              }
            }}
            style={{ flex: 1 }}
          />
        </Group>

        {/* Comparison Type Selector */}
        {selectedArchitectures.length > 0 && (
          <Group gap="xs" mb="lg">
            <Text size="sm" fw={600}>
              Comparar por:
            </Text>
            <Button
              variant={comparisonType === 'pros' ? 'filled' : 'light'}
              color="green"
              size="sm"
              leftSection={<span>✅</span>}
              onClick={() => handleComparisonTypeChange('pros')}
            >
              Vantagens
            </Button>
            <Button
              variant={comparisonType === 'cons' ? 'filled' : 'light'}
              color="red"
              size="sm"
              leftSection={<span>❌</span>}
              onClick={() => handleComparisonTypeChange('cons')}
            >
              Desvantagens
            </Button>
            <Button
              variant={comparisonType === 'bestFor' ? 'filled' : 'light'}
              color="blue"
              size="sm"
              leftSection={<span>🎯</span>}
              onClick={() => handleComparisonTypeChange('bestFor')}
            >
              Melhor para
            </Button>
            <Button
              variant={comparisonType === 'avoidWhen' ? 'filled' : 'light'}
              color="orange"
              size="sm"
              leftSection={<span>⚠️</span>}
              onClick={() => handleComparisonTypeChange('avoidWhen')}
            >
              Evite quando
            </Button>
          </Group>
        )}

        {/* Comparison Results */}
        {comparison && (
          <Grid>
            {selectedArchitectures.map(archName => {
              const arch = architectureData.find(a => a.name === archName);
              if (!arch) return null;

              const comparisonData = arch[
                comparisonType as keyof typeof arch
              ] as string[];
              const avgScore =
                arch.metrics.reduce((sum, m) => sum + m.value, 0) /
                arch.metrics.length;

              // Define colors based on comparison type
              const getComparisonColor = () => {
                switch (comparisonType) {
                  case 'pros':
                    return 'green';
                  case 'cons':
                    return 'red';
                  case 'bestFor':
                    return 'blue';
                  case 'avoidWhen':
                    return 'orange';
                  default:
                    return 'gray';
                }
              };

              const getComparisonIcon = () => {
                switch (comparisonType) {
                  case 'pros':
                    return '✅';
                  case 'cons':
                    return '❌';
                  case 'bestFor':
                    return '🎯';
                  case 'avoidWhen':
                    return '⚠️';
                  default:
                    return '•';
                }
              };

              return (
                <Grid.Col
                  key={archName}
                  span={{
                    base: 12,
                    md: selectedArchitectures.length === 1 ? 12 : 6,
                  }}
                >
                  <Card withBorder p="lg" style={{ height: '100%' }}>
                    {/* Header with metrics */}
                    <Group justify="space-between" mb="md">
                      <Title order={4} c={getComparisonColor()}>
                        {archName}
                      </Title>
                      <Badge
                        variant="filled"
                        color={
                          avgScore >= 7
                            ? 'green'
                            : avgScore >= 5
                              ? 'blue'
                              : 'red'
                        }
                        size="lg"
                      >
                        {avgScore.toFixed(1)}/10
                      </Badge>
                    </Group>

                    {/* Quick metrics overview */}
                    <Group gap="xs" mb="lg" wrap="wrap">
                      {arch.metrics.map(metric => (
                        <Badge
                          key={metric.name}
                          variant="light"
                          color={
                            metric.value >= 7
                              ? 'green'
                              : metric.value >= 5
                                ? 'yellow'
                                : 'red'
                          }
                          size="sm"
                        >
                          {metric.name}: {metric.value}/10
                        </Badge>
                      ))}
                    </Group>

                    {/* Comparison type indicator */}
                    <Alert
                      color={getComparisonColor()}
                      icon={<IconInfoCircle size={16} />}
                      radius="md"
                      mb="md"
                    >
                      <Text size="sm" fw={600}>
                        {comparisonType === 'pros' &&
                          'Vantagens desta arquitetura'}
                        {comparisonType === 'cons' &&
                          'Desvantagens desta arquitetura'}
                        {comparisonType === 'bestFor' &&
                          'Melhor para estes cenários'}
                        {comparisonType === 'avoidWhen' && 'Evite nestes casos'}
                      </Text>
                    </Alert>

                    {/* Comparison items */}
                    <List size="sm" spacing="xs">
                      {comparisonData.map((item, idx) => (
                        <List.Item
                          key={idx}
                          icon={
                            <ThemeIcon
                              variant="light"
                              color={getComparisonColor()}
                              size="sm"
                            >
                              {getComparisonIcon()}
                            </ThemeIcon>
                          }
                        >
                          <Text size="sm" fw={500}>
                            {item}
                          </Text>
                        </List.Item>
                      ))}
                    </List>

                    {/* Quick summary */}
                    <Alert color="gray" variant="light" radius="md" mt="md">
                      <Text size="xs" c="dimmed">
                        <strong>Resumo:</strong> {comparisonData.length} pontos
                        de{' '}
                        {comparisonType === 'pros'
                          ? 'vantagem'
                          : comparisonType === 'cons'
                            ? 'desvantagem'
                            : comparisonType === 'bestFor'
                              ? 'aplicação ideal'
                              : 'evitar'}{' '}
                        identificados.
                      </Text>
                    </Alert>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        )}

        {selectedArchitectures.length === 0 && (
          <Alert color="blue" icon={<IconInfoCircle size={16} />} radius="md">
            <Text size="sm">
              Selecione pelo menos uma arquitetura para ver a comparação
              detalhada.
            </Text>
          </Alert>
        )}
      </Paper>

      {/* Simple Decision Guide */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconBulb
            size={24}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Como Escolher
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Alert color="green" icon={<IconBulb size={16} />} radius="md">
              <Text size="sm" fw={600} mb={4}>
                ✅ Escolha por:
              </Text>
              <Text size="sm" c="dimmed">
                • <strong>Performance:</strong> Se velocidade é crítica
                <br />• <strong>Manutenibilidade:</strong> Se vai crescer muito
                <br />• <strong>Testabilidade:</strong> Se qualidade é
                prioridade
                <br />• <strong>Escalabilidade:</strong> Se o time vai aumentar
                <br />• <strong>Complexidade:</strong> Se o time é júnior
              </Text>
            </Alert>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Alert
              color="orange"
              icon={<IconAlertTriangle size={16} />}
              radius="md"
            >
              <Text size="sm" fw={600} mb="4">
                ⚠️ Cuidado com:
              </Text>
              <Text size="sm" c="dimmed">
                • <strong>Over-engineering:</strong> Complexidade desnecessária
                <br />• <strong>Under-engineering:</strong> Simplicidade que não
                escala
                <br />• <strong>Decisão prematura:</strong> Escolher antes de
                entender
                <br />• <strong>Ignorar contexto:</strong> Copiar sem adaptar
              </Text>
            </Alert>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Navigation */}
      <GuideNavigation currentGuide="architecture-comparison" />
    </Stack>
  );
}

export default ArchitectureComparisonPage;
