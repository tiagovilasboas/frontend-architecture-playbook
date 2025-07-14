import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconDeviceMobile, IconBolt } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import islandsExamples from '../../utils/code-examples/islands-architecture.json';

function IslandsArchitecture() {

  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Islands Architecture
        </Title>
        <Text size="lg" c="dimmed">
          HTML estático com ilhas de interatividade. Performance máxima, 
          SEO perfeito, JavaScript só onde precisa. O melhor dos dois mundos.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconDeviceMobile size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">HTML estático com ilhas de JavaScript interativo</Text>
            </div>
          </Group>
          
          <Text>
            Islands Architecture é sobre uma coisa só: <strong>JavaScript só onde precisa</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de SPA (tudo JavaScript) ou SSR (tudo servidor), 
            você tem HTML estático com pequenas ilhas de interatividade. 
            O resto é HTML puro, rápido e SEO-friendly.
          </Text>
          
          <Text>
            A regra é simples: <em>HTML estático por padrão, JavaScript só onde interatividade importa</em>. 
            Performance máxima, SEO perfeito, JavaScript mínimo.
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
                <Title order={4}>HTML Estático</Title>
                <Text size="sm" c="dimmed">
                  Base da página é HTML puro. Rápido, SEO-friendly, 
                  sem JavaScript desnecessário.
                </Text>
                <CodeExample 
                  title={islandsExamples.find(e => e.id === 'islands-html-static')?.title || ''}
                  code={islandsExamples.find(e => e.id === 'islands-html-static')?.content || ''}
                 
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Ilhas de Interatividade</Title>
                <Text size="sm" c="dimmed">
                  JavaScript só nos componentes que precisam de interatividade. 
                  Carrinho, busca, formulários.
                </Text>
                <CodeExample 
                  title={islandsExamples.find(e => e.id === 'islands-cart-island')?.title || ''}
                  code={islandsExamples.find(e => e.id === 'islands-cart-island')?.content || ''}
                 
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Hidratação Seletiva</Title>
                <Text size="sm" c="dimmed">
                  JavaScript hidrata apenas as ilhas. 
                  Resto da página permanece estático.
                </Text>
                <CodeExample 
                  title={islandsExamples.find(e => e.id === 'islands-hydration')?.title || ''}
                  code={islandsExamples.find(e => e.id === 'islands-hydration')?.content || ''}
                 
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
                <Title order={4}>Performance Máxima</Title>
                <Text size="sm">
                  HTML estático carrega instantaneamente. 
                  JavaScript só onde precisa.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconDeviceMobile size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>SEO Perfeito</Title>
                <Text size="sm">
                  HTML estático é indexável por padrão. 
                  Crawlers veem todo o conteúdo.
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
                <Title order={4}>JavaScript Mínimo</Title>
                <Text size="sm">
                  Bundle pequeno, carregamento rápido, 
                  menos bugs de JavaScript.
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
              <List.Item>Sites com muito conteúdo estático</List.Item>
              <List.Item>SEO é crítico</List.Item>
              <List.Item>Performance é prioridade</List.Item>
              <List.Item>Poucos componentes interativos</List.Item>
              <List.Item>Conteúdo que não muda frequentemente</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Aplicações com muita interatividade</List.Item>
              <List.Item>Dashboards complexos</List.Item>
              <List.Item>Apps com estado global complexo</List.Item>
              <List.Item>Muitos componentes dinâmicos</List.Item>
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
          {/* Example 1: Blog */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Blog - Conteúdo + Comentários</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Blog com artigos estáticos e sistema de comentários. 
                Conteúdo não muda, comentários são interativos.
                <br />
                <strong>Problema:</strong> SPA lento para conteúdo, 
                SSR desnecessário para comentários.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-blog-example')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-blog-example')?.content || ''}
               
              />
            </Stack>
          </Paper>

          {/* Example 2: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Produtos + Carrinho</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com páginas de produtos estáticas 
                e carrinho interativo. Produtos não mudam, carrinho é dinâmico.
                <br />
                <strong>Problema:</strong> SPA lento para produtos, 
                SSR desnecessário para carrinho.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-ecommerce-example')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-ecommerce-example')?.content || ''}
               
              />
            </Stack>
          </Paper>

          {/* Example 3: Documentation */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📚 Documentação - Conteúdo + Busca</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Documentação técnica com conteúdo estático 
                e busca interativa. Conteúdo não muda, busca é dinâmica.
                <br />
                <strong>Problema:</strong> SPA lento para documentação, 
                SSR desnecessário para busca.
              </Text>
              
              <CodeExample code={{ content: `// ✅ BOM - Islands Architecture
// pages/docs/getting-started.html
<!DOCTYPE html>
<html>
<head>
  <title>Getting Started - Documentação</title>
  <meta name="description" content="Guia de início rápido...">
</head>
<body>
  <header>
    <nav>
      <a href="/docs">Documentação</a>
      <a href="/api">API</a>
      <a href="/examples">Exemplos</a>
    </nav>
  </header>
  
  <main>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a href="/docs/installation">Instalação</a></li>
          <li><a href="/docs/getting-started">Getting Started</a></li>
          <li><a href="/docs/components">Componentes</a></li>
          <li><a href="/docs/advanced">Avançado</a></li>
        </ul>
      </nav>
    </aside>
    
    <article class="content">
      <h1>Getting Started</h1>
      
      <p>Bem-vindo à documentação da nossa biblioteca...</p>
      
      <h2>Instalação</h2>
      <p>Para começar, instale a biblioteca:</p>
      
      <pre><code>npm install minha-lib</code></pre>
      
      <h2>Uso Básico</h2>
      <p>Importe e use a biblioteca:</p>
      
      <pre><code>
import { Component } from 'minha-lib';

function App() {
  return <Component />;
}
      </code></pre>
      
      <h2>Configuração</h2>
      <p>Configure a biblioteca no seu projeto...</p>
    </article>
    
    <!-- Ilha de busca -->
    <div id="busca-docs">
      <input type="search" placeholder="Buscar na documentação...">
      <div id="resultados-busca"></div>
    </div>
  </main>
</body>
</html>

// components/BuscaDocs.jsx
function BuscaDocs() {
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);
  const [buscando, setBuscando] = useState(false);
  
  const buscar = async (termo) => {
    if (termo.length < 2) {
      setResultados([]);
      return;
    }
    
    setBuscando(true);
    
    try {
      const response = await fetch(\`/api/docs/busca?q=\${encodeURIComponent(termo)}\`);
      const data = await response.json();
      setResultados(data);
    } catch (error) {
      console.error('Erro na busca:', error);
    } finally {
      setBuscando(false);
    }
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      buscar(termo);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [termo]);
  
  return (
    <div>
      <input
        type="search"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Buscar na documentação..."
      />
      
      {buscando && <div>Buscando...</div>}
      
      {resultados.length > 0 && (
        <div>
          {resultados.map(resultado => (
            <div key={resultado.id}>
              <h4>{resultado.titulo}</h4>
              <p>{resultado.excerpt}</p>
              <a href={resultado.url}>Ler mais</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// app.js
import { hydrateRoot } from 'react-dom/client';
import BuscaDocs from './components/BuscaDocs';

// Hidrata apenas a busca
const buscaContainer = document.getElementById('busca-docs');
if (buscaContainer) {
  hydrateRoot(buscaContainer, <BuscaDocs />);
}

// Resultado:
// - HTML estático: 98% da página
// - JavaScript: apenas busca
// - Performance: máxima
// - SEO: perfeito` }} />
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
                <strong>Problema:</strong> Você transforma tudo em ilhas. 
                HTML simples vira JavaScript desnecessário.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ilhas só onde interatividade importa. 
                HTML estático para o resto.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-pitfall-everything-island')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-pitfall-everything-island')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* State Management */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Gestão de Estado</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Estado compartilhado entre ilhas. 
                Carrinho em uma ilha, contador em outra.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use eventos customizados, 
                localStorage, ou considere uma ilha maior.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-pitfall-shared-state')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-pitfall-shared-state')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* Build Complexity */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔧 Complexidade de Build</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Build complexo, múltiplos bundles, 
                configuração complicada.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ferramentas como Astro, 
                ou configure build simples.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-pitfall-complex-build')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-pitfall-complex-build')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* SEO Issues */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">�� Problemas de SEO</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Conteúdo dinâmico nas ilhas. 
                Crawlers não veem conteúdo gerado por JavaScript.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Mantenha conteúdo importante no HTML estático. 
                Use ilhas só para interatividade.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-pitfall-dynamic-content')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-pitfall-dynamic-content')?.content || ''}
              />
            </Stack>
          </Paper>

          {/* Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚡ Performance</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitas ilhas pequenas. 
                Múltiplos bundles, hidratação lenta.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Agrupe ilhas relacionadas, 
                use lazy loading, otimize bundles.
              </Text>
              
              <CodeExample 
                title={islandsExamples.find(e => e.id === 'islands-pitfall-many-small-islands')?.title || ''}
                code={islandsExamples.find(e => e.id === 'islands-pitfall-many-small-islands')?.content || ''}
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
                  <strong>"Islands Architecture"</strong> - Jason Miller
                </List.Item>
                <List.Item>
                  <strong>"Modern Web Development"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Performance Web"</strong> - Various Authors
                </List.Item>
              </List>
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://islands.speculation.wiki/" target="_blank">
                    Islands Architecture - Speculation Wiki
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://astro.build/" target="_blank">
                    Astro - Framework para Islands
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://fresh.deno.dev/" target="_blank">
                    Fresh - Deno framework com Islands
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
                <strong>Ferramentas que facilitam Islands Architecture:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Astro</strong> - Framework especializado em Islands
                </List.Item>
                <List.Item>
                  <strong>Fresh</strong> - Deno framework com Islands
                </List.Item>
                <List.Item>
                  <strong>Next.js</strong> - Suporte parcial a Islands
                </List.Item>
                <List.Item>
                  <strong>Nuxt.js</strong> - Vue com Islands
                </List.Item>
                <List.Item>
                  <strong>Marko</strong> - Framework com Islands
                </List.Item>
                <List.Item>
                  <strong>Qwik</strong> - Framework com resumability
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
              <Text c="dimmed">Islands Architecture na prática</Text>
            </div>
          </Group>
          
          <Text>
            Islands Architecture é sobre uma coisa só: <strong>JavaScript só onde precisa</strong>. 
            HTML estático por padrão, ilhas de interatividade. 
            Use quando performance e SEO importam.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre transformar tudo em ilhas. 
            É sobre usar HTML estático por padrão. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com HTML estático, adicione ilhas conforme necessário. 
            Foque em performance e simplicidade.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

IslandsArchitecture.metadata = {
  title: 'Islands Architecture',
  description: 'HTML estático com ilhas de interatividade. Performance máxima e SEO perfeito.'
};

export default IslandsArchitecture;
