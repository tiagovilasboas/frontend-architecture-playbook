import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconSettings2, IconSettings } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import featureFlagsExamples from '../../utils/code-examples/feature-flags.json';

function FeatureFlags() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Feature Flags
        </Title>
        <Text size="lg" c="dimmed">
          Controle dinâmico de funcionalidades. Deploy seguro, testes em produção, 
          rollback instantâneo. O que acontece quando você quer mudar código sem fazer deploy.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconSettings2 size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Sistema que controla funcionalidades dinamicamente</Text>
            </div>
          </Group>
          
          <Text>
            Feature Flags é sobre uma coisa só: <strong>controlar funcionalidades sem fazer deploy</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de fazer deploy toda vez que quer ativar/desativar uma funcionalidade, 
            você tem um sistema que controla isso dinamicamente. Novo código pode ficar dormindo 
            até você decidir ativar.
          </Text>
          
          <Text>
            A regra é simples: <em>código sempre no ar, funcionalidade controlada por flag</em>. 
            Deploy seguro, rollback instantâneo, testes em produção.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconSettings size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 4 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Feature Flags (Toggles)</Title>
                <Text size="sm" c="dimmed">
                  Variáveis que controlam se uma funcionalidade está ativa ou não.
                </Text>
                <Text size="xs" c="blue" mb="xs">
                  Veja o exemplo real em <b>/examples/feature-flags/use-feature-flag.ts</b>
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-use-flag')?.title || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-use-flag')?.content || ''}
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Flag Providers</Title>
                <Text size="sm" c="dimmed">
                  Sistemas que gerenciam e distribuem flags. Local, API, CDN.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-provider')?.title || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-provider')?.content || ''}
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Targeting Rules</Title>
                <Text size="sm" c="dimmed">
                  Regras que determinam quem vê qual funcionalidade. Usuário, localização, porcentagem.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-targeting')?.title || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-targeting')?.content || ''}
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Rollback & Monitoring</Title>
                <Text size="sm" c="dimmed">
                  Sistemas para desativar flags rapidamente e monitorar impacto.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-rollback')?.title || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-rollback')?.content || ''}
                />
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
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Deploy Seguro</Title>
                <Text size="sm">
                  Código sempre no ar, funcionalidade controlada. Rollback instantâneo se der problema.
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
                <Title order={4}>Testes em Produção</Title>
                <Text size="sm">
                  Teste novas funcionalidades com usuários reais. A/B testing, gradual rollout.
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
                <Title order={4}>Flexibilidade</Title>
                <Text size="sm">
                  Ative/desative funcionalidades sem deploy. Controle por usuário, região, horário.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">✅ Use quando:</Title>
            <List>
              <List.Item>Quer fazer deploy seguro sem risco</List.Item>
              <List.Item>Precisa testar funcionalidades em produção</List.Item>
              <List.Item>Quer fazer gradual rollout de features</List.Item>
              <List.Item>Precisa de rollback instantâneo</List.Item>
              <List.Item>Quer controlar features por usuário/região</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">❌ Evite quando:</Title>
            <List>
              <List.Item>Aplicação muito simples (overkill)</List.Item>
              <List.Item>Time pequeno que prefere simplicidade</List.Item>
              <List.Item>Funcionalidades nunca mudam</List.Item>
              <List.Item>Performance crítica (flags têm overhead)</List.Item>
            </List>
          </Card>
        </Stack>
      </div>

      {/* Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos no Front-End
        </Title>
        
        <Stack gap="xl">
          {featureFlagsExamples.map(example => (
            <CodeExample
              key={example.id}
              title={example.title}
              description={example.description}
              code={example.content}
            />
          ))}
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas e Como Evitar
        </Title>
        
        <Stack gap="xl">
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚨 Problemas Comuns</Title>
            
            <Stack gap="lg">
              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">1. Flag Hell</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Muitas flags, código difícil de entender, 
                  lógica espalhada por toda aplicação.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Centralize lógica de flags, use padrões 
                  consistentes, documente flags.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-flag-hell')?.title || ''}
                  description={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-flag-hell')?.description || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-flag-hell')?.content || ''}
                />
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">2. Dead Code</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Código de features antigas nunca removido, 
                  aplicação fica pesada e confusa.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Limpe flags antigas, use timeouts, 
                  documente quando remover.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-dead-code')?.title || ''}
                  description={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-dead-code')?.description || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-dead-code')?.content || ''}
                />
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">3. Performance Issues</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Muitas chamadas para API de flags, 
                  aplicação fica lenta.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Cache flags, batch requests, 
                  carregue flags no início.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-many-calls')?.title || ''}
                  description={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-many-calls')?.description || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-many-calls')?.content || ''}
                />
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">4. Testing Complexity</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Testes ficam complexos com múltiplas 
                  combinações de flags.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Mock flags nos testes, 
                  teste cada variante isoladamente.
                </Text>
                <CodeExample
                  title={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-complex-tests')?.title || ''}
                  description={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-complex-tests')?.description || ''}
                  code={featureFlagsExamples.find(e => e.id === 'feature-flags-pitfall-complex-tests')?.content || ''}
                />
              </Card>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References */}
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
                  <strong>"Feature Toggles (aka Feature Flags)"</strong> - Martin Fowler
                </List.Item>
                <List.Item>
                  <strong>"Continuous Delivery"</strong> - Jez Humble & David Farley
                </List.Item>
                <List.Item>
                  <strong>"The Pragmatic Programmer"</strong> - Andrew Hunt & David Thomas
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://martinfowler.com/articles/feature-toggles.html" target="_blank">
                    Feature Toggles - Martin Fowler
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://launchdarkly.com/blog/" target="_blank">
                    Feature Flag Best Practices - LaunchDarkly
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.split.io/blog/" target="_blank">
                    Feature Flag Strategies - Split.io
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
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconCheck size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">Pontos-chave dos Feature Flags</Text>
            </div>
          </Group>
          
          <List>
            <List.Item>
              <strong>Deploy seguro:</strong> Código sempre no ar, funcionalidade controlada
            </List.Item>
            <List.Item>
              <strong>Testes em produção:</strong> Teste com usuários reais, gradual rollout
            </List.Item>
            <List.Item>
              <strong>Rollback instantâneo:</strong> Desative flags em segundos, não em minutos
            </List.Item>
            <List.Item>
              <strong>Use quando:</strong> Quer deploy seguro ou testes em produção
            </List.Item>
            <List.Item>
              <strong>Evite:</strong> Aplicações simples ou quando performance é crítica
            </List.Item>
          </List>
          
          <Alert color="blue" title="💡 Dica">
            Feature Flags são sobre controle. Use quando quiser mudar comportamento 
            sem fazer deploy. Mas não use para tudo - às vezes um deploy simples 
            é melhor que uma flag complexa.
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

FeatureFlags.metadata = {
  title: 'Feature Flags',
  description: 'Controle dinâmico de funcionalidades. Deploy seguro, testes em produção, rollback instantâneo.'
};

export default FeatureFlags; 