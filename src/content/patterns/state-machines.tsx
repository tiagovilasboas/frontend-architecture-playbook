import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconSettings, IconBolt } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import stateMachinesExamples from '../../utils/code-examples/state-machines.json';

function StateMachines() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          State Machines
        </Title>
        <Text size="lg" c="dimmed">
          Estados previsíveis, transições claras, bugs impossíveis. 
          Lógica de negócio organizada, comportamento controlado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconSettings size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Máquinas de estado para controlar comportamento da aplicação</Text>
            </div>
          </Group>
          
          <Text>
            State Machines é sobre uma coisa só: <strong>estados previsíveis</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de variáveis soltas e lógica espalhada, 
            você tem estados bem definidos e transições claras. 
            Cada estado tem comportamentos específicos, cada transição tem regras.
          </Text>
          
          <Text>
            A regra é simples: <em>estado atual + evento = próximo estado</em>. 
            Sem surpresas, sem bugs impossíveis, comportamento controlado.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
                      <IconBolt size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Estados</Title>
                <Text size="sm" c="dimmed">
                  Condições bem definidas da aplicação. 
                  Cada estado tem comportamentos específicos.
                </Text>
                <Stack gap="xl">
                  {stateMachinesExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                     
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Eventos</Title>
                <Text size="sm" c="dimmed">
                  Ações que causam transições. 
                  Cada evento pode mudar o estado.
                </Text>
                <Stack gap="xl">
                  {stateMachinesExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                     
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Transições</Title>
                <Text size="sm" c="dimmed">
                  Regras que definem como mudar de estado. 
                  Cada transição tem condições e ações.
                </Text>
                <Stack gap="xl">
                  {stateMachinesExamples.map(example => (
                    <CodeExample
                      key={example.id}
                      title={example.title}
                      description={example.description}
                      code={example.content}
                     
                    />
                  ))}
                </Stack>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Por que vale a pena?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Comportamento Previsível</Title>
                <Text size="sm">
                  Estados bem definidos, transições claras. 
                  Sem surpresas, sem bugs impossíveis.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconSettings size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Lógica Organizada</Title>
                <Text size="sm">
                  Comportamento centralizado, regras claras. 
                  Fácil de entender e manter.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Testabilidade</Title>
                <Text size="sm">
                  Estados isolados, transições testáveis. 
                  Cobertura de testes completa.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>Formulários complexos</List.Item>
              <List.Item>Wizards/multi-step flows</List.Item>
              <List.Item>Autenticação e autorização</List.Item>
              <List.Item>Upload de arquivos</List.Item>
              <List.Item>Processos de pagamento</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Lógica simples (over-engineering)</List.Item>
              <List.Item>Estados independentes</List.Item>
              <List.Item>Comportamento linear</List.Item>
              <List.Item>Protótipos rápidos</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos no Front-End
        </Title>
        
        <Stack gap="xl">
          {/* Example 1: Form */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Formulário - Estados Complexos</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Formulário com validação, 
                envio assíncrono, feedback visual. Estados complexos.
                <br />
                <strong>Problema:</strong> Estados confusos, bugs impossíveis, 
                UX inconsistente.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>

          {/* Example 2: Authentication */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔐 Autenticação - Estados de Login</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Sistema de autenticação com login, 
                logout, refresh token. Estados complexos de sessão.
                <br />
                <strong>Problema:</strong> Estados de sessão confusos, 
                race conditions, bugs de segurança.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>

          {/* Example 3: File Upload */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📁 Upload de Arquivos - Estados de Progresso</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Upload de arquivos com progresso, 
                validação, retry. Estados complexos de upload.
                <br />
                <strong>Problema:</strong> Estados de upload confusos, 
                progresso inconsistente, UX ruim.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas & Como Evitar
        </Title>
        
        <Stack gap="xl">
          {/* Over-engineering */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚫 Over-engineering</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você usa state machine pra tudo. 
                Lógica simples vira complexidade desnecessária.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use state machines só quando estados são complexos. 
                Lógica simples não precisa de state machine.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>

          {/* Complex Transitions */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Transições Complexas</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Transições com muitas condições, 
                lógica complexa, difícil de entender.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Mantenha transições simples, 
                use guards para condições complexas.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>

          {/* State Explosion */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">💥 Explosão de Estados</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos estados, transições complexas, 
                máquina difícil de manter.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Agrupe estados relacionados, 
                use hierarquia, simplifique.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>

          {/* Side Effects */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚡ Side Effects</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Side effects misturados com transições, 
                lógica espalhada, difícil de testar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use actions para side effects, 
                mantenha transições puras.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>

          {/* Testing */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧪 Testes</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> State machines difíceis de testar, 
                cobertura baixa, bugs não detectados.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Teste cada transição, 
                use ferramentas de testing específicas.
              </Text>
              
              <Stack gap="xl">
                {stateMachinesExamples.map(example => (
                  <CodeExample
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.content}
                   
                  />
                ))}
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References & Real Cases */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Referências & Casos Reais
        </Title>
        
        <Stack gap="xl">
          {/* References */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📚 Referências</Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Statecharts"</strong> - David Harel
                </List.Item>
                <List.Item>
                  <strong>"Understanding State Machines"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"XState in Practice"</strong> - David Khourshid
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://xstate.js.org/" target="_blank">
                    XState - State machine library
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://stately.ai/" target="_blank">
                    Stately - State machine tools
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://statecharts.dev/" target="_blank">
                    Statecharts - Visual state machines
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">State Machines na prática</Text>
            </div>
          </Group>
          
          <Text>
            State Machines é sobre uma coisa só: <strong>estados previsíveis</strong>. 
            Estados bem definidos, transições claras, comportamento controlado. 
            Use quando estados são complexos e comportamento precisa ser previsível.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre usar state machine pra tudo. 
            É sobre usar quando estados são complexos. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com estados simples, evolua conforme necessário. 
            Foque em previsibilidade e simplicidade.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

StateMachines.metadata = {
  title: 'State Machines',
  description: 'Estados previsíveis, transições claras, bugs impossíveis. Lógica de negócio organizada.'
};

export default StateMachines;
