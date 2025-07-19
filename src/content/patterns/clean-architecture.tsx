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
  Grid,
  Code,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconTestPipe,
  IconStack,
  IconGitBranch,
  IconClock,
  IconUsers,
  IconScale,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import codeExamples from '../../utils/code-examples/clean-architecture.json';

function CleanArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Clean Architecture no Front-End
        </Title>
        <Text size="lg" c="dimmed">
          Separação clara de responsabilidades, testes fáceis e independência de
          frameworks. Seu código de negócio sobrevive a qualquer mudança de
          tecnologia.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconStack size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">
                Arquitetura em camadas que protege sua lógica de negócio
              </Text>
            </div>
          </Group>

          <Text>
            Clean Architecture é sobre uma coisa só:{' '}
            <strong>
              seu código de negócio não pode depender de framework
            </strong>
            .
          </Text>

          <Text>
            Pensa assim: se amanhã o React virar pó, sua lógica de negócio tem
            que sobreviver. Se o Vue quebrar tudo na próxima versão, suas regras
            de negócio continuam funcionando.
          </Text>

          <Text>
            A regra é simples: <em>dependências apontam para dentro</em>. UI
            depende do negócio, API depende do negócio, mas negócio não depende
            de nada externo.
          </Text>
        </Stack>
      </Paper>

      {/* Implementation Example */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Title order={3} mb="sm">
            <IconCode
              size={24}
              style={{ verticalAlign: 'middle', marginRight: '8px' }}
            />
            Implementação Real
          </Title>

          <Text>
            Vamos ver como implementar Clean Architecture em um e-commerce real:
          </Text>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Estrutura de Pastas
                </Title>
                <Code block>
                  {`src/
├── domain/           # Entidades (núcleo)
│   ├── entities/
│   │   ├── Product.ts
│   │   └── Order.ts
│   └── usecases/
│       ├── CreateOrder.ts
│       └── GetProducts.ts
├── infrastructure/   # Adaptadores externos
│   ├── api/
│   │   └── ProductAPI.ts
│   └── storage/
│       └── LocalStorage.ts
├── presentation/     # UI (React)
│   ├── components/
│   └── pages/
└── shared/          # Utilitários
    └── types/`}
                </Code>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder p="md">
                <Title order={4} mb="sm">
                  Fluxo de Dados
                </Title>
                <Text size="sm" c="dimmed">
                  <strong>1.</strong> UI chama Use Case
                  <br />
                  <strong>2.</strong> Use Case usa Entity
                  <br />
                  <strong>3.</strong> Repository conecta com API
                  <br />
                  <strong>4.</strong> Dados voltam pela mesma rota
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>

      {/* Layers */}
      <div>
        <Title order={2} mb="lg">
          <IconStack
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          As 4 Camadas
        </Title>

        <Stack gap="md">
          {codeExamples.map((ex, idx) => (
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
            <strong>Como funciona:</strong> As camadas se comunicam de fora para
            dentro. O React component (Framework) chama o caso de uso (Use
            Case), que usa a entidade (Entity). O adaptador (Repository) conecta
            com o mundo externo. A regra é clara:{' '}
            <em>dependências apontam para dentro</em>.
          </Text>
        </Paper>
      </div>

      {/* Trade-offs Analysis */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconScale
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Trade-offs Detalhados
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} mb="sm">
                ✅ Vantagens
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Testes unitários puros e rápidos</List.Item>
                <List.Item>Independência total de frameworks</List.Item>
                <List.Item>Migrações seguras entre tecnologias</List.Item>
                <List.Item>Código de negócio reutilizável</List.Item>
                <List.Item>Manutenibilidade a longo prazo</List.Item>
                <List.Item>Onboarding de novos devs mais fácil</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} c="red" mb="sm">
                ❌ Desvantagens
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Complexidade inicial alta</List.Item>
                <List.Item>Mais arquivos e pastas</List.Item>
                <List.Item>Curva de aprendizado íngreme</List.Item>
                <List.Item>Over-engineering para projetos simples</List.Item>
                <List.Item>Performance overhead em alguns casos</List.Item>
                <List.Item>Debugging mais complexo</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Performance Impact */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconClock
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Impacto na Performance
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Title order={4} color="blue" mb="sm">
                Bundle Size
              </Title>
              <Text size="sm">
                <strong>+15-25%</strong> no bundle inicial devido às abstrações
              </Text>
              <Text size="xs" c="dimmed" mt="xs">
                Mitigação: Tree shaking e code splitting
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Title order={4} color="green" mb="sm">
                Runtime
              </Title>
              <Text size="sm">
                <strong>-5-10%</strong> overhead em operações simples
              </Text>
              <Text size="xs" c="dimmed" mt="xs">
                Compensado por testes mais rápidos
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Title order={4} color="orange" mb="sm">
                Development
              </Title>
              <Text size="sm">
                <strong>+30-50%</strong> tempo inicial de setup
              </Text>
              <Text size="xs" c="dimmed" mt="xs">
                Compensado pela manutenibilidade
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Team Considerations */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconUsers
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Considerações de Time
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} color="green" mb="sm">
                ✅ Time Sênior
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Entende os benefícios rapidamente</List.Item>
                <List.Item>Implementa corretamente desde o início</List.Item>
                <List.Item>Mantém consistência arquitetural</List.Item>
                <List.Item>Documenta decisões e padrões</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} color="orange" mb="sm">
                ⚠️ Time Júnior
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Precisa de mentoria intensiva</List.Item>
                <List.Item>Pode criar abstrações desnecessárias</List.Item>
                <List.Item>Curva de aprendizado de 2-3 meses</List.Item>
                <List.Item>Beneficia-se de templates e exemplos</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Por que vale a pena?
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconTestPipe size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Testes Fáceis</Title>
                <Text size="sm">
                  Sua lógica de negócio roda sem DOM. Testes unitários puros,
                  sem mocks complexos.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Independência de Framework</Title>
                <Text size="sm">
                  Troque React por Vue sem afetar regras de negócio. Migrações
                  mais seguras.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Manutenibilidade</Title>
                <Text size="sm">
                  Código organizado, responsabilidades claras. Menos bugs, mais
                  paz.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert color="green" icon={<IconCheck size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Use quando:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Projeto complexo com regras de negócio</List.Item>
              <List.Item>Time sênior que entende os trade-offs</List.Item>
              <List.Item>Projeto de longo prazo (2+ anos)</List.Item>
              <List.Item>Migrações frequentes entre tecnologias</List.Item>
              <List.Item>Testes são prioridade alta</List.Item>
              <List.Item>Múltiplos frontends (web, mobile, desktop)</List.Item>
            </List>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Evite quando:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Projeto simples (MVP, landing page)</List.Item>
              <List.Item>Time júnior sem mentoria</List.Item>
              <List.Item>Deadline apertado (menos de 2 meses)</List.Item>
              <List.Item>Performance crítica não é aceitável</List.Item>
              <List.Item>Projeto experimental ou protótipo</List.Item>
              <List.Item>Time pequeno (1-2 devs) sem experiência</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real-world Examples */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconGitBranch
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Exemplos do Mundo Real
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} color="green" mb="sm">
                ✅ Casos de Sucesso
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  <strong>Netflix:</strong> Migração React → Vue sem problemas
                </List.Item>
                <List.Item>
                  <strong>Spotify:</strong> Múltiplos clientes (web, mobile,
                  desktop)
                </List.Item>
                <List.Item>
                  <strong>Airbnb:</strong> Testes unitários cobrem 90% do código
                </List.Item>
                <List.Item>
                  <strong>Uber:</strong> Reutilização de lógica entre apps
                </List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder p="md">
              <Title order={4} color="red" mb="sm">
                ❌ Casos de Falha
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>
                  <strong>Startup X:</strong> Over-engineering para MVP simples
                </List.Item>
                <List.Item>
                  <strong>Agency Y:</strong> Time júnior sem mentoria adequada
                </List.Item>
                <List.Item>
                  <strong>Product Z:</strong> Performance crítica não
                  considerada
                </List.Item>
                <List.Item>
                  <strong>Company W:</strong> Falta de documentação e padrões
                </List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Implementation Checklist */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          <IconCheck
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Checklist de Implementação
        </Title>

        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Title order={4} color="blue" mb="sm">
                Fase 1: Setup
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Definir estrutura de pastas</List.Item>
                <List.Item>Criar interfaces base</List.Item>
                <List.Item>Configurar injeção de dependência</List.Item>
                <List.Item>Estabelecer padrões de nomenclatura</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Title order={4} color="green" mb="sm">
                Fase 2: Desenvolvimento
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Implementar entidades de negócio</List.Item>
                <List.Item>Criar casos de uso</List.Item>
                <List.Item>Desenvolver adaptadores</List.Item>
                <List.Item>Conectar com UI</List.Item>
              </List>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder p="md">
              <Title order={4} color="orange" mb="sm">
                Fase 3: Qualidade
              </Title>
              <List size="sm" spacing="xs">
                <List.Item>Escrever testes unitários</List.Item>
                <List.Item>Documentar decisões</List.Item>
                <List.Item>Revisar performance</List.Item>
                <List.Item>Treinar time</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Common Pitfalls */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              🚨 Over-engineering
            </Text>
            <Text size="sm" c="dimmed">
              Criar abstrações desnecessárias para problemas simples. Use YAGNI
              (You Aren't Gonna Need It) como guia.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              🚨 Dependências Circulares
            </Text>
            <Text size="sm" c="dimmed">
              Quebrar a regra de dependências. Use ferramentas como ESLint para
              detectar violações.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              🚨 Domínio Anêmico
            </Text>
            <Text size="sm" c="dimmed">
              Entidades sem comportamento, apenas dados. Coloque lógica de
              negócio nas entidades.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              🚨 Testando Tudo
            </Text>
            <Text size="sm" c="dimmed">
              Testar adaptadores e UI em vez de focar na lógica de negócio.
              Teste o que importa.
            </Text>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              🚨 Abstração Prematura
            </Text>
            <Text size="sm" c="dimmed">
              Criar interfaces antes de entender o domínio. Comece simples,
              evolua conforme necessário.
            </Text>
          </Alert>
        </Stack>
      </div>

      {/* References */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Referências
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Livros
            </Title>
            <List size="sm" c="dimmed">
              <List.Item>
                "Clean Architecture" - Robert C. Martin (Uncle Bob)
              </List.Item>
              <List.Item>"Domain-Driven Design" - Eric Evans</List.Item>
              <List.Item>
                "Patterns of Enterprise Application Architecture" - Martin
                Fowler
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Artigos
            </Title>
            <List size="sm" c="dimmed">
              <List.Item>
                <a
                  href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Clean Architecture - Uncle Bob
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="https://martinfowler.com/articles/microservices.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microservices - Martin Fowler
                </a>
              </List.Item>
              <List.Item>
                <a
                  href="https://khalilstemmler.com/articles/domain-driven-design/intro-to-ddd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Domain-Driven Design - Khalil Stemmler
                </a>
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">
              Ferramentas
            </Title>
            <List size="sm" c="dimmed">
              <List.Item>TypeScript - Tipagem forte</List.Item>
              <List.Item>Jest - Testes unitários</List.Item>
              <List.Item>
                ESLint - Detecção de dependências circulares
              </List.Item>
              <List.Item>InversifyJS - Injeção de dependência</List.Item>
            </List>
          </Card>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="lg">
          📋 Resumo
        </Title>

        <Stack gap="md">
          <Text>
            <strong>Clean Architecture</strong> é uma escolha arquitetural que
            prioriza a manutenibilidade e testabilidade em detrimento da
            simplicidade inicial.
          </Text>

          <Text>
            <strong>Use quando:</strong> Projeto complexo, time sênior, longo
            prazo, migrações frequentes.
          </Text>

          <Text>
            <strong>Evite quando:</strong> MVP simples, time júnior sem
            mentoria, deadline apertado, performance crítica.
          </Text>

          <Text>
            <strong>Lembre-se:</strong> A regra é clara - dependências apontam
            para dentro. Seu código de negócio não pode depender de framework.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default CleanArchitecture;
