import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconFolder, IconBrandGithub } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import monorepoExamples from '../../utils/code-examples/monorepo.json';

function Monorepo() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Monorepo
        </Title>
        <Text size="lg" c="dimmed">
          Um repositório, múltiplos projetos. Compartilhamento de código, 
          tooling centralizado, refatoração segura. Escalabilidade sem complexidade.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconFolder size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Um repositório que contém múltiplos projetos/pacotes</Text>
            </div>
          </Group>
          
          <Text>
            Monorepo é sobre uma coisa só: <strong>ter tudo num lugar só</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de ter 10 repositórios separados, você tem tudo num só. 
            Apps, libs, docs, tudo junto. Mas bem organizado e estruturado.
          </Text>
          
          <Text>
            A regra é simples: <em>compartilhamento fácil, tooling centralizado</em>. 
            Você refatora uma vez, todo mundo ganha. Você muda uma lib, todos os projetos atualizam.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
                      <IconBrandGithub size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 4 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Compartilhamento de Código</Title>
                <Text size="sm" c="dimmed">
                  Libs compartilhadas entre projetos. Muda uma vez, todo mundo ganha.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
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
                <Title order={4}>Tooling Centralizado</Title>
                <Text size="sm" c="dimmed">
                  ESLint, Prettier, TypeScript, testes. Configura uma vez, 
                  funciona em todo lugar.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
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
                <Title order={4}>Refatoração Segura</Title>
                <Text size="sm" c="dimmed">
                  Muda uma lib, vê o impacto em todos os projetos. 
                  Sem quebrar nada.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
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
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Versionamento Unificado</Title>
                <Text size="sm" c="dimmed">
                  Um commit pode afetar múltiplos projetos. 
                  Histórico completo, rastreabilidade total.
                </Text>
                <Stack gap="xl">
                  {monorepoExamples.map(example => (
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Menos Duplicação</Title>
                <Text size="sm">
                  Compartilha código entre projetos. Não reescreve, reutiliza.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconFolder size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Tooling Centralizado</Title>
                <Text size="sm">
                  Configura ESLint, Prettier, TypeScript uma vez. 
                  Funciona em todo lugar.
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
                <Title order={4}>Refatoração Segura</Title>
                <Text size="sm">
                  Muda uma lib, vê o impacto em todos os projetos. 
                  Sem quebrar nada.
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
              <List.Item>Múltiplos projetos relacionados</List.Item>
              <List.Item>Precisa compartilhar código</List.Item>
              <List.Item>Tooling centralizado é importante</List.Item>
              <List.Item>Refatoração frequente</List.Item>
              <List.Item>Time grande trabalhando junto</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projetos completamente independentes</List.Item>
              <List.Item>Time pequeno (complexidade desnecessária)</List.Item>
              <List.Item>Projetos com tecnologias muito diferentes</List.Item>
              <List.Item>Deploy independente é crítico</List.Item>
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
          {/* Example 1: Design System */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🎨 Design System - Componentes Compartilhados</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Design system com componentes reutilizáveis. 
                Web app, mobile app, admin panel usando os mesmos componentes.
                <br />
                <strong>Problema:</strong> Código duplicado, inconsistência visual, 
                difícil de manter.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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

          {/* Example 2: Full-Stack App */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚀 Full-Stack - Front-end + Back-end</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Aplicação full-stack com front-end React, 
                back-end Node.js, mobile React Native.
                <br />
                <strong>Problema:</strong> Tipos duplicados, validações diferentes, 
                difícil de sincronizar.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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

          {/* Example 3: Micro-frontends */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧩 Micro-frontends - Múltiplas Apps</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Micro-frontends com múltiplas aplicações. 
                Shell, catalog, cart, checkout, profile.
                <br />
                <strong>Problema:</strong> Configurações duplicadas, 
                tooling diferente, difícil de manter.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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
          {/* Giant Monorepo */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🐋 Monorepo Gigante</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você coloca tudo num repositório, 
                vira uma bagunça gigante. Impossível de navegar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Organize por domínio. 
                Use ferramentas como Nx, Lerna, Turborepo.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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

          {/* Circular Dependencies */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Dependências Circulares</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Pacotes dependendo uns dos outros. 
                Build quebra, deploy falha.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Estrutura hierárquica clara. 
                Use ferramentas que detectam dependências circulares.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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

          {/* Build Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🐌 Performance de Build</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Build lento, cache ineficiente, 
                rebuild desnecessário.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use Turborepo, Nx, ou Lerna. 
                Configure cache e build incremental.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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

          {/* Version Management */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📦 Gestão de Versões</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Versões descoordenadas, 
                dependências quebradas, deploy inconsistente.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ferramentas de versionamento. 
                Lerna, Changesets, ou versionamento manual coordenado.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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

          {/* Team Coordination */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">👥 Coordenação de Times</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Times sem coordenação. 
                Conflitos de merge, mudanças que quebram outros projetos.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> CI/CD robusto, testes em todos os projetos, 
                code review obrigatório.
              </Text>
              
              <Stack gap="xl">
                {monorepoExamples.map(example => (
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
                  <strong>"Monorepo Tools"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Large Scale JavaScript"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Monorepo Patterns"</strong> - Various Authors
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://monorepo.tools/" target="_blank">
                    Monorepo Tools - Site oficial
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://nx.dev/" target="_blank">
                    Nx - Monorepo build system
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://turborepo.com/" target="_blank">
                    Turborepo - High-performance build system
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam Monorepo:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Nx</strong> - Build system para monorepos
                </List.Item>
                <List.Item>
                  <strong>Turborepo</strong> - High-performance build system
                </List.Item>
                <List.Item>
                  <strong>Lerna</strong> - Tooling para monorepos
                </List.Item>
                <List.Item>
                  <strong>Rush</strong> - Microsoft's monorepo solution
                </List.Item>
                <List.Item>
                  <strong>Bazel</strong> - Google's build system
                </List.Item>
                <List.Item>
                  <strong>Yarn Workspaces</strong> - Package manager workspaces
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
              <Text c="dimmed">Monorepo na prática</Text>
            </div>
          </Group>
          
          <Text>
            Monorepo é sobre uma coisa só: <strong>ter tudo num lugar só</strong>. 
            Compartilhamento de código, tooling centralizado, refatoração segura. 
            Use quando tem múltiplos projetos relacionados e quer eficiência.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre colocar tudo num repositório. 
            É sobre organizar e compartilhar quando faz sentido. Mantenha a sanidade.
            <br />
            <strong>Dica:</strong> Comece pequeno, use ferramentas adequadas, 
            evolua conforme necessário.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

Monorepo.metadata = {
  title: 'Monorepo',
  description: 'Um repositório, múltiplos projetos. Compartilhamento de código e tooling centralizado.'
};

export default Monorepo;
