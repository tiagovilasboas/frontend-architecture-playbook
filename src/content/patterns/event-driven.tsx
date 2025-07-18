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
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import eventDrivenExamples from '../../utils/code-examples/event-driven.json';

function EventDriven() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Event-Driven Architecture
        </Title>
        <Text size="lg" c="dimmed">
          Componentes se comunicam via eventos. Desacoplamento total,
          extensibilidade máxima, manutenção simplificada.
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
              <Text c="dimmed">Arquitetura baseada em eventos e mensagens</Text>
            </div>
          </Group>

          <Text>
            Event-Driven é sobre uma coisa só:{' '}
            <strong>componentes se comunicam via eventos</strong>.
          </Text>

          <Text>
            Pensa assim: ao invés de componentes chamarem funções diretamente,
            eles disparam eventos. Outros componentes escutam esses eventos e
            reagem conforme necessário.
          </Text>

          <Text>
            A regra é simples: <em>dispara evento, não chama função</em>.
            Desacoplamento total, extensibilidade máxima, manutenção
            simplificada.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconBolt
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Os 3 Conceitos Principais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">
                1
              </Badge>
              <div>
                <Title order={4}>Event Emitter</Title>
                <Text size="sm" c="dimmed">
                  Componente que dispara eventos. Não conhece quem vai escutar.
                </Text>
                <CodeExample
                  title={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-emitter'
                    )?.title || ''
                  }
                  code={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-emitter'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">
                2
              </Badge>
              <div>
                <Title order={4}>Event Listener</Title>
                <Text size="sm" c="dimmed">
                  Componente que escuta eventos. Reage quando evento acontece.
                </Text>
                <CodeExample
                  title={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-listener'
                    )?.title || ''
                  }
                  code={
                    eventDrivenExamples.find(
                      e => e.id === 'event-driven-listener'
                    )?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">
                3
              </Badge>
              <div>
                <Title order={4}>Event Bus</Title>
                <Text size="sm" c="dimmed">
                  Sistema que gerencia eventos. Conecta emitters e listeners.
                </Text>
                <CodeExample
                  title={
                    eventDrivenExamples.find(e => e.id === 'event-driven-bus')
                      ?.title || ''
                  }
                  code={
                    eventDrivenExamples.find(e => e.id === 'event-driven-bus')
                      ?.content || ''
                  }
                />
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

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
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Desacoplamento Total</Title>
                <Text size="sm">
                  Componentes não se conhecem, comunicação via eventos.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Extensibilidade</Title>
                <Text size="sm">
                  Adicione novos listeners sem modificar componentes existentes.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Manutenção Simplificada</Title>
                <Text size="sm">
                  Cada componente tem uma responsabilidade, fácil de testar e
                  debugar.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>Sistemas com muitos componentes</List.Item>
              <List.Item>Comunicação complexa entre partes</List.Item>
              <List.Item>Extensibilidade é importante</List.Item>
              <List.Item>Testabilidade é prioridade</List.Item>
              <List.Item>Desacoplamento é necessário</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Aplicações simples e pequenas</List.Item>
              <List.Item>Comunicação direta é suficiente</List.Item>
              <List.Item>Performance é crítica</List.Item>
              <List.Item>Debugging complexo é problema</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Exemplos Práticos no Front-End
        </Title>

        <Stack gap="xl">
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              🛒 E-commerce - Carrinho e Notificações
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com carrinho, notificações,
                analytics, estoque. Quando produto é adicionado, múltiplos
                sistemas precisam reagir.
                <br />
                <strong>Problema:</strong> Cada componente precisa conhecer
                todos os outros.
              </Text>

              <CodeExample
                title={
                  eventDrivenExamples.find(
                    e => e.id === 'event-driven-ecommerce'
                  )?.title || ''
                }
                code={
                  eventDrivenExamples.find(
                    e => e.id === 'event-driven-ecommerce'
                  )?.content || ''
                }
              />
            </Stack>
          </Paper>

          {/* Example 2: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">
              📊 Dashboard - Atualizações em Tempo Real
            </Title>

            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard com múltiplos widgets.
                Quando dados mudam, vários widgets precisam atualizar: gráficos,
                métricas, alertas, logs.
                <br />
                <strong>Problema:</strong> Cada widget precisa conhecer todos os
                outros.
              </Text>

              <CodeExample
                title={
                  eventDrivenExamples.find(
                    e => e.id === 'event-driven-dashboard'
                  )?.title || ''
                }
                code={
                  eventDrivenExamples.find(
                    e => e.id === 'event-driven-dashboard'
                  )?.content || ''
                }
              />
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          <Alert variant="light" color="red" title="🚨 Event Hell">
            <Text>
              <strong>Problema:</strong> Eventos disparando outros eventos,
              criando loops infinitos.
            </Text>
            <Text>
              <strong>Solução:</strong> Documente o fluxo de eventos, use
              prefixos claros, evite eventos em cascata.
            </Text>
          </Alert>

          <Alert variant="light" color="red" title="🚨 Memory Leaks">
            <Text>
              <strong>Problema:</strong> Event listeners não removidos causam
              vazamentos de memória.
            </Text>
            <Text>
              <strong>Solução:</strong> Sempre remova listeners no cleanup, use
              AbortController.
            </Text>
          </Alert>

          <Alert variant="light" color="red" title="🚨 Debugging Difícil">
            <Text>
              <strong>Problema:</strong> Fluxo de eventos difícil de rastrear e
              debugar.
            </Text>
            <Text>
              <strong>Solução:</strong> Use ferramentas de debugging, logs
              estruturados, documentação clara.
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
          Referências e Casos Reais
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4}>📚 Livros</Title>
            <List>
              <List.Item>
                "Event-Driven Architecture" - Various Authors
              </List.Item>
              <List.Item>
                "Designing Event-Driven Systems" - Ben Stopford
              </List.Item>
              <List.Item>
                "Building Event-Driven Microservices" - Adam Bellemare
              </List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4}>🛠️ Ferramentas</Title>
            <List>
              <List.Item>
                <strong>EventEmitter:</strong> Node.js built-in
              </List.Item>
              <List.Item>
                <strong>RxJS:</strong> Reactive programming
              </List.Item>
              <List.Item>
                <strong>Redux:</strong> State management com eventos
              </List.Item>
              <List.Item>
                <strong>Socket.io:</strong> Real-time events
              </List.Item>
            </List>
          </Card>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="md">
          <IconCheck
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Resumo - Event-Driven
        </Title>

        <Stack gap="md">
          <Text>
            <strong>Event-Driven é sobre:</strong> Componentes se comunicam via
            eventos, desacoplamento total, extensibilidade máxima.
          </Text>

          <Text>
            <strong>Use quando:</strong> Sistemas complexos, comunicação entre
            muitos componentes, extensibilidade é importante.
          </Text>

          <Text>
            <strong>Evite quando:</strong> Aplicações simples, comunicação
            direta é suficiente, performance é crítica.
          </Text>

          <Text>
            <strong>Principais benefícios:</strong> Desacoplamento total,
            extensibilidade, manutenção simplificada, testabilidade.
          </Text>

          <Text>
            <strong>Principais desafios:</strong> Event hell, memory leaks,
            debugging complexo, overhead de eventos.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default EventDriven;
