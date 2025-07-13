import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconDeviceMobile, IconBolt } from '@tabler/icons-react';

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
                <Code mt="xs" block>
{`<!-- HTML estático por padrão -->
<!DOCTYPE html>
<html>
<head>
  <title>Minha Loja</title>
  <meta name="description" content="Produtos incríveis">
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/produtos">Produtos</a>
      <a href="/contato">Contato</a>
    </nav>
  </header>
  
  <main>
    <h1>Bem-vindo à nossa loja</h1>
    <p>Encontre os melhores produtos aqui.</p>
    
    <!-- Ilha de interatividade -->
    <div id="carrinho"></div>
    
    <!-- Mais HTML estático -->
    <section>
      <h2>Produtos em Destaque</h2>
      <div class="produtos">
        <article>
          <h3>Produto 1</h3>
          <p>Descrição do produto...</p>
        </article>
      </div>
    </section>
  </main>
</body>
</html>

<!-- HTML puro, rápido, SEO perfeito`}
                </Code>
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
                <Code mt="xs" block>
{`// Ilha de carrinho
// components/Carrinho.jsx
function Carrinho() {
  const [items, setItems] = useState([]);
  
  const adicionarItem = (produto) => {
    setItems(prev => [...prev, produto]);
  };
  
  return (
    <div id="carrinho">
      <h3>Carrinho ({items.length})</h3>
      {items.map(item => (
        <div key={item.id}>
          {item.nome} - R$ {item.preco}
        </div>
      ))}
      <button onClick={() => finalizarCompra(items)}>
        Finalizar Compra
      </button>
    </div>
  );
}

// Ilha de busca
// components/Busca.jsx
function Busca() {
  const [termo, setTermo] = useState('');
  const [resultados, setResultados] = useState([]);
  
  const buscar = async (termo) => {
    const data = await fetch(\`/api/busca?q=\${termo}\`);
    setResultados(await data.json());
  };
  
  return (
    <div id="busca">
      <input 
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Buscar produtos..."
      />
      <button onClick={() => buscar(termo)}>Buscar</button>
      
      <div>
        {resultados.map(item => (
          <div key={item.id}>{item.nome}</div>
        ))}
      </div>
    </div>
  );
}

// JavaScript só onde precisa
// Interatividade isolada`}
                </Code>
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
                <Code mt="xs" block>
{`// Hidratação seletiva
// app.js
import { hydrateRoot } from 'react-dom/client';
import Carrinho from './components/Carrinho';
import Busca from './components/Busca';

// Hidrata apenas o carrinho
const carrinhoContainer = document.getElementById('carrinho');
if (carrinhoContainer) {
  hydrateRoot(carrinhoContainer, <Carrinho />);
}

// Hidrata apenas a busca
const buscaContainer = document.getElementById('busca');
if (buscaContainer) {
  hydrateRoot(buscaContainer, <Busca />);
}

// Resto da página permanece estático
// Performance máxima
// JavaScript mínimo

// Resultado:
// - HTML estático: 95% da página
// - JavaScript: apenas 5% (ilhas)
// - Performance: 10x melhor que SPA`}
                </Code>
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
              
              <Code block>
{`// ❌ RUIM - SPA
// Tudo JavaScript
// Carregamento lento
// SEO ruim

// ❌ RUIM - SSR
// Servidor renderiza tudo
// Overhead desnecessário
// Performance ruim

// ✅ BOM - Islands Architecture
// pages/blog/[slug].html
<!DOCTYPE html>
<html>
<head>
  <title>Como usar Islands Architecture</title>
  <meta name="description" content="Guia completo...">
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Como usar Islands Architecture</h1>
      <p>Islands Architecture é uma abordagem...</p>
      
      <h2>Benefícios</h2>
      <ul>
        <li>Performance máxima</li>
        <li>SEO perfeito</li>
        <li>JavaScript mínimo</li>
      </ul>
      
      <h2>Implementação</h2>
      <p>Para implementar Islands Architecture...</p>
    </article>
    
    <!-- Ilha de comentários -->
    <section id="comentarios">
      <h3>Comentários (0)</h3>
      <div id="lista-comentarios"></div>
      <form id="form-comentario">
        <textarea placeholder="Seu comentário..."></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2024 Meu Blog</p>
  </footer>
</body>
</html>

// components/Comentarios.jsx
function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  
  useEffect(() => {
    carregarComentarios();
  }, []);
  
  const carregarComentarios = async () => {
    const response = await fetch('/api/comentarios');
    const data = await response.json();
    setComentarios(data);
  };
  
  const enviarComentario = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/comentarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texto: novoComentario })
    });
    
    if (response.ok) {
      setNovoComentario('');
      carregarComentarios();
    }
  };
  
  return (
    <div>
      <h3>Comentários ({comentarios.length})</h3>
      
      <div>
        {comentarios.map(comentario => (
          <div key={comentario.id}>
            <strong>{comentario.autor}</strong>
            <p>{comentario.texto}</p>
            <small>{comentario.data}</small>
          </div>
        ))}
      </div>
      
      <form onSubmit={enviarComentario}>
        <textarea
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
          placeholder="Seu comentário..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

// app.js
import { hydrateRoot } from 'react-dom/client';
import Comentarios from './components/Comentarios';

// Hidrata apenas os comentários
const comentariosContainer = document.getElementById('comentarios');
if (comentariosContainer) {
  hydrateRoot(comentariosContainer, <Comentarios />);
}

// Resultado:
// - HTML estático: 95% da página
// - JavaScript: apenas comentários
// - Performance: 10x melhor
// - SEO: perfeito`}
              </Code>
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
              
              <Code block>
{`// ✅ BOM - Islands Architecture
// pages/produtos/[id].html
<!DOCTYPE html>
<html>
<head>
  <title>iPhone 13 - Loja Online</title>
  <meta name="description" content="iPhone 13 com 128GB...">
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/produtos">Produtos</a>
      <a href="/carrinho">Carrinho</a>
    </nav>
  </header>
  
  <main>
    <article class="produto">
      <h1>iPhone 13</h1>
      <img src="/images/iphone-13.jpg" alt="iPhone 13">
      
      <div class="info">
        <h2>Especificações</h2>
        <ul>
          <li>128GB de armazenamento</li>
          <li>Tela de 6.1 polegadas</li>
          <li>Câmera dupla de 12MP</li>
        </ul>
        
        <h2>Descrição</h2>
        <p>O iPhone 13 traz inovações incríveis...</p>
        
        <h2>Avaliações</h2>
        <div class="avaliacoes">
          <div class="estrelas">★★★★★</div>
          <p>4.8 de 5 estrelas (1.2k avaliações)</p>
        </div>
      </div>
      
      <!-- Ilha de carrinho -->
      <aside id="carrinho-produto">
        <div class="preco">R$ 4.999</div>
        <div class="quantidade">
          <label>Quantidade:</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button id="adicionar-carrinho">Adicionar ao Carrinho</button>
      </aside>
    </article>
    
    <!-- Ilha de produtos relacionados -->
    <section id="produtos-relacionados">
      <h2>Produtos Relacionados</h2>
      <div class="grid-produtos">
        <div class="produto-card">
          <img src="/images/iphone-12.jpg" alt="iPhone 12">
          <h3>iPhone 12</h3>
          <p>R$ 3.999</p>
        </div>
        <div class="produto-card">
          <img src="/images/airpods.jpg" alt="AirPods">
          <h3>AirPods</h3>
          <p>R$ 1.299</p>
        </div>
      </div>
    </section>
  </main>
</body>
</html>

// components/CarrinhoProduto.jsx
function CarrinhoProduto() {
  const [quantidade, setQuantidade] = useState(1);
  const [adicionando, setAdicionando] = useState(false);
  
  const adicionarAoCarrinho = async () => {
    setAdicionando(true);
    
    try {
      const response = await fetch('/api/carrinho', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          produtoId: window.produtoId,
          quantidade: quantidade
        })
      });
      
      if (response.ok) {
        // Atualiza contador do carrinho
        const contador = document.querySelector('.carrinho-contador');
        if (contador) {
          const atual = parseInt(contador.textContent) || 0;
          contador.textContent = atual + quantidade;
        }
        
        alert('Produto adicionado ao carrinho!');
      }
    } catch (error) {
      alert('Erro ao adicionar produto');
    } finally {
      setAdicionando(false);
    }
  };
  
  return (
    <aside>
      <div className="preco">R$ 4.999</div>
      <div className="quantidade">
        <label>Quantidade:</label>
        <select 
          value={quantidade}
          onChange={(e) => setQuantidade(parseInt(e.target.value))}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <button 
        onClick={adicionarAoCarrinho}
        disabled={adicionando}
      >
        {adicionando ? 'Adicionando...' : 'Adicionar ao Carrinho'}
      </button>
    </aside>
  );
}

// components/ProdutosRelacionados.jsx
function ProdutosRelacionados() {
  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    carregarProdutosRelacionados();
  }, []);
  
  const carregarProdutosRelacionados = async () => {
    const response = await fetch('/api/produtos-relacionados');
    const data = await response.json();
    setProdutos(data);
  };
  
  return (
    <section>
      <h2>Produtos Relacionados</h2>
      <div className="grid-produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button onClick={() => adicionarAoCarrinho(produto.id)}>
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// app.js
import { hydrateRoot } from 'react-dom/client';
import CarrinhoProduto from './components/CarrinhoProduto';
import ProdutosRelacionados from './components/ProdutosRelacionados';

// Hidrata carrinho do produto
const carrinhoContainer = document.getElementById('carrinho-produto');
if (carrinhoContainer) {
  hydrateRoot(carrinhoContainer, <CarrinhoProduto />);
}

// Hidrata produtos relacionados
const relacionadosContainer = document.getElementById('produtos-relacionados');
if (relacionadosContainer) {
  hydrateRoot(relacionadosContainer, <ProdutosRelacionados />);
}

// Resultado:
// - HTML estático: 90% da página
// - JavaScript: apenas carrinho e relacionados
// - Performance: excelente
// - SEO: perfeito`}
              </Code>
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
              
              <Code block>
{`// ✅ BOM - Islands Architecture
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
// - SEO: perfeito`}
              </Code>
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
              
              <Code block>
{`// ❌ RUIM - Tudo ilha
// components/Header.jsx
function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/produtos">Produtos</a>
        <a href="/contato">Contato</a>
      </nav>
    </header>
  );
}

// Desnecessário - é só HTML

// ✅ BOM - HTML estático
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/produtos">Produtos</a>
    <a href="/contato">Contato</a>
  </nav>
</header>

// Só ilha onde precisa de interatividade
// components/Carrinho.jsx
function Carrinho() {
  const [items, setItems] = useState([]);
  
  return (
    <div id="carrinho">
      <h3>Carrinho ({items.length})</h3>
      {/* Interatividade real */}
    </div>
  );
}

// JavaScript só onde precisa`}
              </Code>
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
              
              <Code block>
{`// ❌ RUIM - Estado compartilhado complexo
// Ilha 1: Carrinho
function Carrinho() {
  const [items, setItems] = useState([]);
  // Como compartilhar com outras ilhas?
}

// Ilha 2: Contador
function Contador() {
  // Como saber quantos items no carrinho?
}

// Complexo demais

// ✅ BOM - Eventos customizados
// components/Carrinho.jsx
function Carrinho() {
  const [items, setItems] = useState([]);
  
  const adicionarItem = (produto) => {
    const novosItems = [...items, produto];
    setItems(novosItems);
    
    // Dispara evento customizado
    window.dispatchEvent(new CustomEvent('carrinho-atualizado', {
      detail: { items: novosItems }
    }));
  };
  
  return (
    <div id="carrinho">
      <h3>Carrinho ({items.length})</h3>
      {/* ... */}
    </div>
  );
}

// components/Contador.jsx
function Contador() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const handleCarrinhoUpdate = (event) => {
      setCount(event.detail.items.length);
    };
    
    window.addEventListener('carrinho-atualizado', handleCarrinhoUpdate);
    
    return () => {
      window.removeEventListener('carrinho-atualizado', handleCarrinhoUpdate);
    };
  }, []);
  
  return <span>{count}</span>;
}

// Comunicação via eventos
// Estado isolado por ilha`}
              </Code>
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
              
              <Code block>
{`// ❌ RUIM - Build manual complexo
// webpack.config.js
module.exports = {
  entry: {
    carrinho: './components/Carrinho.jsx',
    busca: './components/Busca.jsx',
    comentarios: './components/Comentarios.jsx'
  },
  output: {
    filename: '[name].bundle.js'
  }
  // Configuração complexa
};

// ✅ BOM - Ferramenta especializada
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static'
});

// pages/produto.astro
---
// Dados estáticos
const produto = await getProduto();
---

<html>
  <head>
    <title>{produto.nome}</title>
  </head>
  <body>
    <h1>{produto.nome}</h1>
    <p>{produto.descricao}</p>
    
    <!-- Ilha React -->
    <Carrinho client:load />
    <Busca client:load />
  </body>
</html>

// Build automático
// Configuração simples
// Performance otimizada`}
              </Code>
            </Stack>
          </Paper>

          {/* SEO Issues */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔍 Problemas de SEO</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Conteúdo dinâmico nas ilhas. 
                Crawlers não veem conteúdo gerado por JavaScript.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Mantenha conteúdo importante no HTML estático. 
                Use ilhas só para interatividade.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Conteúdo dinâmico nas ilhas
// components/ProdutoDetalhes.jsx
function ProdutoDetalhes() {
  const [produto, setProduto] = useState(null);
  
  useEffect(() => {
    fetchProduto().then(setProduto);
  }, []);
  
  if (!produto) return <div>Carregando...</div>;
  
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      {/* Crawlers não veem isso */}
    </div>
  );
}

// SEO ruim

// ✅ BOM - HTML estático + ilhas
// HTML estático
<h1>iPhone 13</h1>
<p>O iPhone 13 traz inovações incríveis...</p>

<!-- Ilha só para interatividade -->
<div id="carrinho-produto">
  <CarrinhoProduto />
</div>

// Crawlers veem tudo
// SEO perfeito
// JavaScript só para interatividade`}
              </Code>
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
              
              <Code block>
{`// ❌ RUIM - Muitas ilhas pequenas
// Ilha 1: Contador
<div id="contador"><Contador /></div>

// Ilha 2: Busca
<div id="busca"><Busca /></div>

// Ilha 3: Filtros
<div id="filtros"><Filtros /></div>

// Ilha 4: Ordenação
<div id="ordenacao"><Ordenacao /></div>

// Múltiplos bundles
// Hidratação lenta

// ✅ BOM - Ilhas agrupadas
// components/ProdutosInterativos.jsx
function ProdutosInterativos() {
  return (
    <div id="produtos-interativos">
      <div className="controles">
        <Busca />
        <Filtros />
        <Ordenacao />
      </div>
      <div className="contador">
        <Contador />
      </div>
    </div>
  );
}

// Um bundle
// Hidratação mais rápida
// Performance melhor`}
              </Code>
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

          {/* Real Cases */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🏢 Casos Reais de Sucesso</Title>
            <Stack gap="md">
              
              <Card withBorder p="md">
                <Title order={4} mb="sm">Netflix</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Performance lenta, 
                  SEO ruim para páginas de filmes.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Islands Architecture com Next.js. 
                  HTML estático para conteúdo, ilhas para interatividade.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Performance 50% melhor, 
                  SEO perfeito, carregamento instantâneo.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Shopify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Lojas lentas, 
                  SEO ruim para produtos.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Islands para carrinho e busca. 
                  HTML estático para produtos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Performance melhor, 
                  SEO otimizado, conversão maior.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">GitHub</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Documentação lenta, 
                  busca não funcionava offline.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Islands para busca e navegação. 
                  HTML estático para documentação.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Documentação rápida, 
                  busca funcional, experiência melhor.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Stripe</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Dashboard lento, 
                  documentação não indexava.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Islands para dashboards. 
                  HTML estático para documentação.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Dashboard rápido, 
                  documentação indexável, SEO perfeito.
                </Text>
              </Card>
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
