import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconLayout, IconBolt } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import spaExamples from '../../utils/code-examples/spa.json';

function SPA() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Single Page Application (SPA)
        </Title>
        <Text size="lg" c="dimmed">
          Uma página, múltiplas rotas. JavaScript renderiza tudo, 
          navegação instantânea, experiência de app nativo.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconLayout size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Aplicação que roda em uma única página HTML</Text>
            </div>
          </Group>
          
          <Text>
            SPA é sobre uma coisa só: <strong>JavaScript renderiza tudo</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de servidor renderizar cada página, 
            você tem uma página HTML que carrega JavaScript. O JavaScript 
            renderiza diferentes componentes baseado na URL.
          </Text>
          
          <Text>
            A regra é simples: <em>uma página, múltiplas rotas, JavaScript controla tudo</em>. 
            Navegação instantânea, experiência de app nativo, sem reload.
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
                <Title order={4}>Uma Página HTML</Title>
                <Text size="sm" c="dimmed">
                  Página inicial que carrega JavaScript. 
                  O resto é renderizado pelo JavaScript.
                </Text>
                <CodeExample
                  title={spaExamples.find(e => e.id === 'spa-html-page')?.title || ''}
                  code={spaExamples.find(e => e.id === 'spa-html-page')?.content || ''}
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Roteamento Client-Side</Title>
                <Text size="sm" c="dimmed">
                  JavaScript gerencia rotas. URL muda, 
                  componente renderiza, sem reload.
                </Text>
                <CodeExample
                  title={spaExamples.find(e => e.id === 'spa-routing')?.title || ''}
                  code={spaExamples.find(e => e.id === 'spa-routing')?.content || ''}
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Estado Global</Title>
                <Text size="sm" c="dimmed">
                  Estado compartilhado entre componentes. 
                  Redux, Context, Zustand.
                </Text>
                <CodeExample
                  title={spaExamples.find(e => e.id === 'spa-state-management')?.title || ''}
                  code={spaExamples.find(e => e.id === 'spa-state-management')?.content || ''}
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
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Navegação Instantânea</Title>
                <Text size="sm">
                  Sem reload de página, transições suaves, 
                  experiência de app nativo.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconLayout size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Estado Persistente</Title>
                <Text size="sm">
                  Estado mantido entre navegações, 
                  dados compartilhados, UX fluida.
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
                <Title order={4}>Interatividade Rica</Title>
                <Text size="sm">
                  Animações, transições, feedback visual. 
                  Experiência moderna e responsiva.
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
              <List.Item>Aplicações com muita interatividade</List.Item>
              <List.Item>Dashboards e painéis administrativos</List.Item>
              <List.Item>Apps com estado complexo</List.Item>
              <List.Item>Experiência de app nativo é importante</List.Item>
              <List.Item>Navegação frequente entre páginas</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>SEO é crítico (conteúdo não indexa)</List.Item>
              <List.Item>Performance inicial é prioridade</List.Item>
              <List.Item>Sites de conteúdo estático</List.Item>
              <List.Item>Usuários com JavaScript desabilitado</List.Item>
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
          {/* Example 1: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Aplicação Complexa</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard administrativo com múltiplas seções, 
                gráficos interativos, filtros dinâmicos.
                <br />
                <strong>Problema:</strong> Navegação lenta, estado perdido, 
                experiência fragmentada.
              </Text>
              
              <CodeExample
                title={spaExamples.find(e => e.id === 'spa-dashboard-complex')?.title || ''}
                code={spaExamples.find(e => e.id === 'spa-dashboard-complex')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* Example 2: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Carrinho Persistente</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Loja online com carrinho de compras, 
                navegação entre produtos, checkout.
                <br />
                <strong>Problema:</strong> Carrinho perdido ao navegar, 
                experiência fragmentada.
              </Text>
              
              <CodeExample
                title={spaExamples.find(e => e.id === 'spa-ecommerce-cart')?.title || ''}
                code={spaExamples.find(e => e.id === 'spa-ecommerce-cart')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* Example 3: Social Media */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📱 Social Media - Feed Dinâmico</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Rede social com feed infinito, 
                notificações em tempo real, chat.
                <br />
                <strong>Problema:</strong> Feed recarrega, notificações perdidas, 
                experiência fragmentada.
              </Text>
              
              <CodeExample
                title={spaExamples.find(e => e.id === 'spa-social-media-feed')?.title || ''}
                code={spaExamples.find(e => e.id === 'spa-social-media-feed')?.content || ''}
              />
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas Comuns
        </Title>
        
        <Stack gap="md">
          <Alert variant="light" color="red" title="🚨 SEO - Conteúdo não indexa">
            <Text>
              <strong>Problema:</strong> JavaScript renderiza conteúdo, 
              crawlers não veem nada.
            </Text>
            <Text>
              <strong>Solução:</strong> SSR (Next.js), SSG (Gatsby), 
              ou SPA para conteúdo privado.
            </Text>
          </Alert>

          <Alert variant="light" color="red" title="🚨 Performance Inicial">
            <Text>
              <strong>Problema:</strong> Bundle grande, carregamento lento, 
              primeira renderização demora.
            </Text>
            <Text>
              <strong>Solução:</strong> Code splitting, lazy loading, 
              otimização de bundle.
            </Text>
          </Alert>

          <Alert variant="light" color="red" title="🚨 Complexidade de Estado">
            <Text>
              <strong>Problema:</strong> Estado global complexo, 
              difícil de gerenciar, bugs sutis.
            </Text>
            <Text>
              <strong>Solução:</strong> Redux Toolkit, Zustand, 
              Context API bem estruturado.
            </Text>
          </Alert>

          <Alert variant="light" color="red" title="🚨 JavaScript Desabilitado">
            <Text>
              <strong>Problema:</strong> Usuários sem JavaScript 
              não conseguem usar a aplicação.
            </Text>
            <Text>
              <strong>Solução:</strong> Progressive enhancement, 
              fallbacks para funcionalidades críticas.
            </Text>
          </Alert>
        </Stack>
      </div>

      {/* References */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Referências e Casos Reais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4}>📚 Livros</Title>
            <List>
              <List.Item>"Learning React" - Alex Banks</List.Item>
              <List.Item>"React Router v6" - Documentation</List.Item>
              <List.Item>"Redux Toolkit" - Official Guide</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4}>🌐 Casos Reais</Title>
            <List>
              <List.Item><strong>Netflix:</strong> SPA para streaming, navegação instantânea</List.Item>
              <List.Item><strong>Spotify:</strong> Player persistente, playlists dinâmicas</List.Item>
              <List.Item><strong>Gmail:</strong> Interface de email, múltiplas abas</List.Item>
              <List.Item><strong>Airbnb:</strong> Busca de acomodações, filtros complexos</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4}>🛠️ Ferramentas</Title>
            <List>
              <List.Item><strong>React Router:</strong> Roteamento client-side</List.Item>
              <List.Item><strong>Redux Toolkit:</strong> Gerenciamento de estado</List.Item>
              <List.Item><strong>Vite:</strong> Build tool rápida</List.Item>
              <List.Item><strong>React Query:</strong> Cache e sincronização</List.Item>
            </List>
          </Card>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Title order={2} mb="md">
          <IconCheck size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Resumo - SPA
        </Title>
        
        <Stack gap="md">
          <Text>
            <strong>SPA é sobre:</strong> JavaScript renderiza tudo, uma página HTML, 
            navegação instantânea, experiência de app nativo.
          </Text>
          
          <Text>
            <strong>Use quando:</strong> Aplicações interativas, dashboards, 
            apps com estado complexo, experiência fluida é importante.
          </Text>
          
          <Text>
            <strong>Evite quando:</strong> SEO é crítico, performance inicial é prioridade, 
            sites de conteúdo estático.
          </Text>
          
          <Text>
            <strong>Principais benefícios:</strong> Navegação instantânea, estado persistente, 
            interatividade rica, experiência moderna.
          </Text>
          
          <Text>
            <strong>Principais desafios:</strong> SEO, performance inicial, 
            complexidade de estado, dependência de JavaScript.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default SPA;
