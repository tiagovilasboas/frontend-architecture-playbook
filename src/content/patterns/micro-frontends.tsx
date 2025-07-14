import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconApps, IconBuilding } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';

function MicroFrontends() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Micro-frontends
        </Title>
        <Text size="lg" c="dimmed">
          Quebre aplicações grandes em pedaços pequenos. Times independentes, 
          tecnologias diferentes, deploy separado. Escalabilidade real.
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
              <Text c="dimmed">Arquitetura que quebra front-ends grandes em pedaços pequenos</Text>
            </div>
          </Group>
          <Text>
            Micro-frontends é sobre uma coisa só: <strong>quebrar aplicações grandes em pedaços pequenos</strong>.
          </Text>
          <Text>
            Pensa assim: ao invés de uma aplicação gigante que todo mundo mexe, 
            você tem várias aplicações pequenas, cada uma com seu time, sua tecnologia, seu deploy.
          </Text>
          <Text>
            A regra é simples: <em>cada micro-frontend é independente</em>. 
            Pode usar React, Vue, Angular, o que quiser. Pode fazer deploy quando quiser.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconBuilding size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 4 Conceitos Principais
        </Title>
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Independência de Times</Title>
                <Text size="sm" c="dimmed">
                  Cada micro-frontend tem seu time. Não precisa esperar ninguém.
                </Text>
                <CodeExample
                  title="Independência de Times"
                  code="Independência de Times"
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Tecnologias Heterogêneas</Title>
                <Text size="sm" c="dimmed">
                  Cada micro-frontend pode usar tecnologia diferente. 
                  React, Vue, Angular, vanilla JS.
                </Text>
                <CodeExample
                  title="Tecnologias Heterogêneas"
                  code="Tecnologias Heterogêneas"
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Deploy Independente</Title>
                <Text size="sm" c="dimmed">
                  Cada micro-frontend faz deploy separado. 
                  Não precisa esperar ninguém.
                </Text>
                <CodeExample
                  title="Deploy Independente"
                  code="Deploy Independente"
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Integração via Shell</Title>
                <Text size="sm" c="dimmed">
                  Shell (container) orquestra os micro-frontends. 
                  Carrega e integra tudo.
                </Text>
                <CodeExample
                  title="Integração via Shell"
                  code="Integração via Shell"
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Times Independentes</Title>
                <Text size="sm">
                  Cada time trabalha sem depender dos outros. 
                  Não precisa esperar, não quebra ninguém.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconApps size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Tecnologias Flexíveis</Title>
                <Text size="sm">
                  Use React, Vue, Angular, o que quiser. 
                  Cada micro-frontend com sua tecnologia.
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
                <Title order={4}>Deploy Rápido</Title>
                <Text size="sm">
                  Deploy independente. Muda um micro-frontend, 
                  não afeta os outros.
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
              <List.Item>Time grande (10+ desenvolvedores)</List.Item>
              <List.Item>Diferentes tecnologias necessárias</List.Item>
              <List.Item>Deploy independente é importante</List.Item>
              <List.Item>Aplicação muito grande e complexa</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projeto pequeno (over-engineering)</List.Item>
              <List.Item>Time pequeno e ágil</List.Item>
              <List.Item>Design system não é prioridade</List.Item>
              <List.Item>Integração entre times é simples</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas & Como Evitar
        </Title>
        <Stack gap="xl">
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚫 Over-engineering</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Micro-frontends para tudo. 
                Complexidade desnecessária, overhead de integração.
              </Text>
              <Text>
                <strong>Como evitar:</strong> Use micro-frontends só quando faz sentido. 
                Não quebre demais, mantenha o equilíbrio.
              </Text>
            </Stack>
          </Paper>

          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Integração Difícil</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Integração entre micro-frontends é difícil. 
                Comunicação, roteamento, estado global.
              </Text>
              <Text>
                <strong>Como evitar:</strong> Use eventos customizados, 
                contratos claros, evite dependências circulares.
              </Text>
            </Stack>
          </Paper>

          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧩 UX Fragmentada</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Cada micro-frontend com UX diferente. 
                Usuário percebe a diferença, experiência ruim.
              </Text>
              <Text>
                <strong>Como evitar:</strong> Use design system compartilhado, 
                guidelines de UX, integração visual.
              </Text>
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
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📚 Referências</Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Building Micro Frontends"</strong> - Luca Mezzalira
                </List.Item>
                <List.Item>
                  <strong>"Micro Frontends in Action"</strong> - Michael Geers
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank">
                    Micro-frontends - Martin Fowler
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://micro-frontends.org/" target="_blank">
                    Micro-frontends.org
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.thoughtworks.com/radar/techniques/micro-frontends" target="_blank">
                    ThoughtWorks Tech Radar
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>

          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🏢 Casos Reais de Sucesso</Title>
            <Stack gap="md">
              <Card withBorder p="md">
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Produto gigante, múltiplos times, deploy lento.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Micro-frontends para cada área do app.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploys independentes, evolução rápida, UX consistente.
                </Text>
              </Card>
              <Card withBorder p="md">
                <Title order={4} mb="sm">Itaú</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Vários produtos, times grandes, tecnologias diferentes.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Micro-frontends com shell orquestrador.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Escalabilidade, deploys rápidos, times autônomos.
                </Text>
              </Card>
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
              <Text c="dimmed">Micro-frontends na prática</Text>
            </div>
          </Group>
          <Text>
            Micro-frontends é sobre quebrar aplicações grandes em pedaços pequenos. 
            Cada time com seu pedaço, sua stack, seu deploy. 
            Use quando escala, autonomia e independência são prioridade.
          </Text>
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é para todo projeto. 
            Use quando realmente precisa de escala e autonomia.
            <br />
            <strong>Dica:</strong> Comece pequeno, evolua conforme necessário. 
            Foque em integração e experiência do usuário.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

MicroFrontends.metadata = {
  title: 'Micro-frontends',
  description: 'Quebre aplicações grandes em pedaços pequenos. Times independentes, tecnologias diferentes, deploy separado.'
};

export default MicroFrontends;
