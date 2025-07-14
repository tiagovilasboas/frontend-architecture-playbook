import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconBolt, IconCloud } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import jamstackExamples from '../../utils/code-examples/jamstack.json';

function JAMstack() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          JAMstack
        </Title>
        <Text size="lg" c="dimmed">
          JavaScript, APIs, Markup. Sites estáticos, performance máxima, 
          segurança de sobra. Deploy simples, escalabilidade automática.
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
              <Text c="dimmed">JavaScript, APIs, Markup - arquitetura moderna para web</Text>
            </div>
          </Group>
          
          <Text>
            JAMstack é sobre uma coisa só: <strong>separar front-end de back-end</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de servidor renderizando páginas, você tem sites estáticos 
            servidos por CDN, com JavaScript fazendo a mágica e APIs fornecendo dados.
          </Text>
          
          <Text>
            A regra é simples: <em>pre-renderiza tudo, serve estático, 
            JavaScript adiciona interatividade</em>. Performance máxima, segurança de sobra.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconCloud size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Pilares
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">J</Badge>
              <div>
                <Title order={4}>JavaScript</Title>
                <Text size="sm" c="dimmed">
                  Interatividade no cliente. React, Vue, vanilla JS. 
                  Tudo que roda no browser.
                </Text>
                <CodeExample 
  title={jamstackExamples.find(e => e.id === 'jamstack-javascript-client')?.title || ''}
  code={jamstackExamples.find(e => e.id === 'jamstack-javascript-client')?.content || ''}
/>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">A</Badge>
              <div>
                <Title order={4}>APIs</Title>
                <Text size="sm" c="dimmed">
                  Dados e funcionalidades via APIs. REST, GraphQL, 
                  serverless functions.
                </Text>
                <CodeExample 
  title={jamstackExamples.find(e => e.id === 'jamstack-apis')?.title || ''}
  code={jamstackExamples.find(e => e.id === 'jamstack-apis')?.content || ''}
/>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">M</Badge>
              <div>
                <Title order={4}>Markup</Title>
                <Text size="sm" c="dimmed">
                  HTML pré-renderizado. Gatsby, Next.js, Nuxt. 
                  Sites estáticos servidos por CDN.
                </Text>
                <CodeExample 
                  title={jamstackExamples.find(e => e.id === 'jamstack-html-prerendered')?.title || ''}
                  code={jamstackExamples.find(e => e.id === 'jamstack-html-prerendered')?.content || ''}
                />
              </div>
            </Group>
          </Card>
        </Stack>
        
        <Paper withBorder p="md" radius="md" mt="lg">
          <Text size="sm" c="dimmed">
            <strong>Como funciona:</strong> O HTML é pré-renderizado no build e servido por CDN (Markup). 
            JavaScript adiciona interatividade no cliente (JavaScript). APIs fornecem dados e funcionalidades (APIs). 
            Resultado: performance máxima, segurança de sobra, escalabilidade automática.
          </Text>
        </Paper>
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
                <Title order={4}>Performance Máxima</Title>
                <Text size="sm">
                  Sites estáticos servidos por CDN. Carregamento instantâneo, 
                  sem servidor para processar.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCloud size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Segurança de Soba</Title>
                <Text size="sm">
                  Sem servidor = sem superfície de ataque. 
                  APIs isoladas, menos vulnerabilidades.
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
                <Title order={4}>Escalabilidade Automática</Title>
                <Text size="sm">
                  CDN escala automaticamente. Milhões de usuários, 
                  sem configurar servidores.
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
              <List.Item>Sites de conteúdo (blog, marketing)</List.Item>
              <List.Item>Performance é crítica</List.Item>
              <List.Item>SEO é importante</List.Item>
              <List.Item>Orçamento limitado (hosting barato)</List.Item>
              <List.Item>Segurança é prioridade</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Aplicações com muita lógica de negócio</List.Item>
              <List.Item>Dados em tempo real</List.Item>
              <List.Item>Autenticação complexa</List.Item>
              <List.Item>Integrações com sistemas legados</List.Item>
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
          {jamstackExamples.slice(8).map((ex, idx) => (
            <Paper withBorder p="xl" radius="md" key={ex.title}>
              <Title order={3} mb="md">
                {['📝', '🛒', '🎨'][idx]} {ex.title.split(' - ')[1]}
              </Title>
              
              <Stack gap="md">
                <Text>
                  <strong>Cenário:</strong> {ex.description}
                  <br />
                  <strong>Problema:</strong> {ex.description.includes('WordPress') ? 
                    'Servidor lento, SEO ruim, custo alto de hosting.' :
                    ex.description.includes('E-commerce') ?
                    'Servidor lento, abandono de carrinho, SEO ruim.' :
                    'Complexidade desnecessária, custo alto, manutenção difícil.'
                  }
                </Text>
                
                <CodeExample title={ex.title} code={ex.code || ''} />
              </Stack>
            </Paper>
          ))}
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
                <strong>Problema:</strong> Você usa JAMstack pra tudo, 
                até pra aplicações que precisam de servidor. Vira uma bagunça.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use JAMstack quando faz sentido. 
                Sites de conteúdo, marketing, portfolios. Não pra tudo.
              </Text>
              
              <CodeExample 
                title={jamstackExamples.find(e => e.id === 'jamstack-pitfall-wrong-use')?.title || ''}
                code={jamstackExamples.find(e => e.id === 'jamstack-pitfall-wrong-use')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* Build Time */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⏱️ Build Time Excessivo</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Build demora horas, 
                deploy lento, desenvolvimento travado.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Otimize build, use incremental builds, 
                considere ISR (Incremental Static Regeneration).
              </Text>
              
              <CodeExample 
                title={jamstackExamples.find(e => e.id === 'jamstack-pitfall-slow-build')?.title || ''}
                code={jamstackExamples.find(e => e.id === 'jamstack-pitfall-slow-build')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* Dynamic Content */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Conteúdo Dinâmico</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Conteúdo que muda frequentemente. 
                Build a cada mudança, deploy constante.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ISR, client-side fetching, 
                ou considere SSR para conteúdo muito dinâmico.
              </Text>
              
              <CodeExample 
                title={jamstackExamples.find(e => e.id === 'jamstack-pitfall-dynamic-content')?.title || ''}
                code={jamstackExamples.find(e => e.id === 'jamstack-pitfall-dynamic-content')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* SEO Issues */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔍 Problemas de SEO</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> JavaScript renderiza conteúdo. 
                Crawlers não veem nada, SEO ruim.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Pre-renderiza conteúdo importante, 
                use SSR para páginas críticas de SEO.
              </Text>
              
              <CodeExample 
                title={jamstackExamples.find(e => e.id === 'jamstack-pitfall-seo-issues')?.title || ''}
                code={jamstackExamples.find(e => e.id === 'jamstack-pitfall-seo-issues')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* API Complexity */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔗 Complexidade de APIs</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitas APIs, complexidade de integração, 
                difícil de manter e debugar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Simplifique APIs, use GraphQL, 
                considere BFF (Backend for Frontend).
              </Text>
              
              <CodeExample 
                title={jamstackExamples.find(e => e.id === 'jamstack-pitfall-api-complexity')?.title || ''}
                code={jamstackExamples.find(e => e.id === 'jamstack-pitfall-api-complexity')?.content || ''}
              />
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
                  <strong>"JAMstack: The Definitive Guide"</strong> - Mathias Biilmann
                </List.Item>
                <List.Item>
                  <strong>"Modern Web Development"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Static Site Generators"</strong> - Various Authors
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://jamstack.org/" target="_blank">
                    JAMstack - Site oficial
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.gatsbyjs.com/" target="_blank">
                    Gatsby - Static site generator
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://nextjs.org/" target="_blank">
                    Next.js - React framework
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
                <strong>Ferramentas que facilitam JAMstack:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Gatsby</strong> - Static site generator para React
                </List.Item>
                <List.Item>
                  <strong>Next.js</strong> - React framework com SSR/SSG
                </List.Item>
                <List.Item>
                  <strong>Nuxt.js</strong> - Vue framework com SSR/SSG
                </List.Item>
                <List.Item>
                  <strong>Astro</strong> - Framework para conteúdo
                </List.Item>
                <List.Item>
                  <strong>Netlify</strong> - Deploy e hosting
                </List.Item>
                <List.Item>
                  <strong>Vercel</strong> - Deploy e hosting
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
              <Text c="dimmed">JAMstack na prática</Text>
            </div>
          </Group>
          
          <Text>
            JAMstack é sobre uma coisa só: <strong>separar front-end de back-end</strong>. 
            Sites estáticos, performance máxima, segurança de sobra. 
            Use quando performance e simplicidade importam.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre usar JAMstack pra tudo. 
            É sobre usar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com sites simples, evolua conforme necessário. 
            Foque em performance e simplicidade.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

JAMstack.metadata = {
  title: 'JAMstack',
  description: 'JavaScript, APIs, Markup. Sites estáticos com performance máxima e segurança de sobra.'
};

export default JAMstack;
