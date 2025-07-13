import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconAtom, IconBolt } from '@tabler/icons-react';

function AtomicDesign() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Atomic Design
        </Title>
        <Text size="lg" c="dimmed">
          Átomos, moléculas, organismos, templates, páginas. 
          Design system estruturado, componentes reutilizáveis.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconAtom size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Metodologia para criar design systems estruturados</Text>
            </div>
          </Group>
          
          <Text>
            Atomic Design é sobre uma coisa só: <strong>componentes organizados</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de criar componentes aleatórios, 
            você segue uma hierarquia clara: átomos → moléculas → organismos → templates → páginas. 
            Cada nível é construído com os níveis anteriores.
          </Text>
          
          <Text>
            A regra é simples: <em>componentes pequenos se combinam para formar componentes maiores</em>. 
            Reutilização máxima, consistência garantida, manutenção fácil.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
                      <IconBolt size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 5 Níveis
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Átomos</Title>
                <Text size="sm" c="dimmed">
                  Componentes básicos. Botões, inputs, labels, ícones. 
                  Não podem ser divididos em componentes menores.
                </Text>
                <Code mt="xs" block>
{`// components/atoms/Button.tsx
function Button({ children, variant = 'primary', ...props }) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// components/atoms/Input.tsx
function Input({ label, ...props }) {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
}

// components/atoms/Icon.tsx
function Icon({ name, size = 16 }) {
  return (
    <span className={\`icon icon-\${name}\`} style={{ fontSize: size }}>
      {getIcon(name)}
    </span>
  );
}

// Componentes básicos
// Não podem ser divididos
// Reutilizáveis em todo lugar`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Moléculas</Title>
                <Text size="sm" c="dimmed">
                  Combinação de átomos. Search bar, form field, card. 
                  Funcionalidade específica.
                </Text>
                <Code mt="xs" block>
{`// components/molecules/SearchBar.tsx
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

function SearchBar({ onSearch, placeholder }) {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      <Button type="submit">
        <Icon name="search" />
      </Button>
    </form>
  );
}

// components/molecules/FormField.tsx
import { Input } from '../atoms/Input';
import { Icon } from '../atoms/Icon';

function FormField({ label, error, icon, ...props }) {
  return (
    <div className="form-field">
      <Input 
        label={label}
        {...props}
      />
      {icon && <Icon name={icon} />}
      {error && <span className="error">{error}</span>}
    </div>
  );
}

// Combinação de átomos
// Funcionalidade específica
// Reutilizável`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Organismos</Title>
                <Text size="sm" c="dimmed">
                  Combinação de moléculas. Header, footer, product list. 
                  Seções complexas da interface.
                </Text>
                <Code mt="xs" block>
{`// components/organisms/Header.tsx
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { SearchBar } from '../molecules/SearchBar';
import { UserMenu } from '../molecules/UserMenu';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
        <Navigation />
      </div>
      
      <div className="header-center">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="header-right">
        <UserMenu />
      </div>
    </header>
  );
}

// components/organisms/ProductList.tsx
import { ProductCard } from '../molecules/ProductCard';
import { FilterBar } from '../molecules/FilterBar';

function ProductList({ products, filters }) {
  return (
    <div className="product-list">
      <FilterBar filters={filters} />
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Combinação de moléculas
// Seções complexas
// Funcionalidade completa`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Templates</Title>
                <Text size="sm" c="dimmed">
                  Layout da página. Estrutura sem conteúdo real. 
                  Wireframes com organismos.
                </Text>
                <Code mt="xs" block>
{`// templates/ProductPage.tsx
import { Header } from '../organisms/Header';
import { ProductList } from '../organisms/ProductList';
import { Sidebar } from '../organisms/Sidebar';
import { Footer } from '../organisms/Footer';

function ProductPageTemplate() {
  return (
    <div className="product-page">
      <Header />
      
      <main className="main-content">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        
        <section className="content">
          <ProductList />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

// Layout da página
// Estrutura sem conteúdo
// Wireframe com organismos`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="purple">5</Badge>
              <div>
                <Title order={4}>Páginas</Title>
                <Text size="sm" c="dimmed">
                  Templates com conteúdo real. Páginas específicas. 
                  Instâncias dos templates.
                </Text>
                <Code mt="xs" block>
{`// pages/ProductsPage.tsx
import ProductPageTemplate from '../templates/ProductPageTemplate';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    fetchProducts(filters).then(setProducts);
  }, [filters]);
  
  return (
    <ProductPageTemplate
      products={products}
      filters={filters}
      onFilterChange={setFilters}
    />
  );
}

// Template com conteúdo real
// Página específica
// Instância do template`}
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
                <Title order={4}>Reutilização Máxima</Title>
                <Text size="sm">
                  Componentes pequenos se combinam. 
                  Menos código, mais consistência.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconAtom size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Consistência Garantida</Title>
                <Text size="sm">
                  Mesmos átomos em todo lugar. 
                  Design system coeso, experiência uniforme.
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
                <Title order={4}>Manutenção Fácil</Title>
                <Text size="sm">
                  Muda um átomo, muda em todo lugar. 
                  Menos bugs, desenvolvimento mais rápido.
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
              <List.Item>Design system é importante</List.Item>
              <List.Item>Consistência visual é crítica</List.Item>
              <List.Item>Múltiplos produtos/sites</List.Item>
              <List.Item>Time grande trabalhando junto</List.Item>
              <List.Item>Reutilização de componentes</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projeto pequeno (over-engineering)</List.Item>
              <List.Item>Protótipos rápidos</List.Item>
              <List.Item>Design único por página</List.Item>
              <List.Item>Time pequeno e ágil</List.Item>
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
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Design System Completo</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com múltiplas páginas, 
                componentes reutilizáveis, design consistente.
                <br />
                <strong>Problema:</strong> Componentes duplicados, 
                inconsistência visual, manutenção difícil.
              </Text>
              
              <Code block>
{`// ✅ BOM - Atomic Design E-commerce

// ÁTOMOS
// components/atoms/Button.tsx
function Button({ children, variant = 'primary', size = 'medium', ...props }) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// components/atoms/Price.tsx
function Price({ value, currency = 'BRL', size = 'medium' }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency
  }).format(value);
  
  return (
    <span className={\`price price-\${size}\`}>
      {formattedPrice}
    </span>
  );
}

// MOLÉCULAS
// components/molecules/ProductCard.tsx
import { Button } from '../atoms/Button';
import { Price } from '../atoms/Price';
import { Image } from '../atoms/Image';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Image src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <Price value={product.price} />
      <Button onClick={() => onAddToCart(product)}>
        Adicionar ao Carrinho
      </Button>
    </div>
  );
}

// components/molecules/SearchBar.tsx
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  
  return (
    <div className="search-bar">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar produtos..."
      />
      <Button onClick={() => onSearch(query)}>
        <Icon name="search" />
      </Button>
    </div>
  );
}

// ORGANISMOS
// components/organisms/ProductGrid.tsx
import { ProductCard } from '../molecules/ProductCard';

function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// components/organisms/Header.tsx
import { Logo } from '../atoms/Logo';
import { SearchBar } from '../molecules/SearchBar';
import { Navigation } from '../molecules/Navigation';
import { CartIcon } from '../molecules/CartIcon';

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar onSearch={handleSearch} />
      <Navigation />
      <CartIcon count={cartItems.length} />
    </header>
  );
}

// TEMPLATES
// templates/ProductPageTemplate.tsx
import { Header } from '../organisms/Header';
import { ProductGrid } from '../organisms/ProductGrid';
import { Sidebar } from '../organisms/Sidebar';
import { Footer } from '../organisms/Footer';

function ProductPageTemplate({ products, filters, onAddToCart }) {
  return (
    <div className="product-page">
      <Header />
      
      <main className="main-content">
        <aside className="sidebar">
          <Sidebar filters={filters} />
        </aside>
        
        <section className="content">
          <ProductGrid 
            products={products}
            onAddToCart={onAddToCart}
          />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

// PÁGINAS
// pages/ProductsPage.tsx
import ProductPageTemplate from '../templates/ProductPageTemplate';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    fetchProducts(filters).then(setProducts);
  }, [filters]);
  
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  return (
    <ProductPageTemplate
      products={products}
      filters={filters}
      onAddToCart={handleAddToCart}
    />
  );
}

// Reutilização máxima
// Consistência garantida
// Manutenção fácil`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Componentes Complexos</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard com múltiplos widgets, 
                gráficos, tabelas. Componentes complexos reutilizáveis.
                <br />
                <strong>Problema:</strong> Widgets duplicados, 
                inconsistência visual, desenvolvimento lento.
              </Text>
              
              <Code block>
{`// ✅ BOM - Atomic Design Dashboard

// ÁTOMOS
// components/atoms/Card.tsx
function Card({ children, title, variant = 'default' }) {
  return (
    <div className={\`card card-\${variant}\`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// components/atoms/Stat.tsx
function Stat({ label, value, trend }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      {trend && (
        <div className={\`stat-trend stat-trend-\${trend.type}\`}>
          {trend.value}%
        </div>
      )}
    </div>
  );
}

// MOLÉCULAS
// components/molecules/Chart.tsx
import { Card } from '../atoms/Card';

function Chart({ data, type = 'line', title }) {
  return (
    <Card title={title}>
      <div className="chart">
        {/* Renderiza gráfico baseado no tipo */}
        {type === 'line' && <LineChart data={data} />}
        {type === 'bar' && <BarChart data={data} />}
        {type === 'pie' && <PieChart data={data} />}
      </div>
    </Card>
  );
}

// components/molecules/DataTable.tsx
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';

function DataTable({ data, columns, title }) {
  return (
    <Card title={title}>
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {columns.map(column => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

// ORGANISMOS
// components/organisms/StatsGrid.tsx
import { Stat } from '../atoms/Stat';

function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map(stat => (
        <Stat key={stat.id} {...stat} />
      ))}
    </div>
  );
}

// components/organisms/DashboardWidget.tsx
import { Chart } from '../molecules/Chart';
import { DataTable } from '../molecules/DataTable';

function DashboardWidget({ type, data, config }) {
  if (type === 'chart') {
    return <Chart {...config} data={data} />;
  }
  
  if (type === 'table') {
    return <DataTable {...config} data={data} />;
  }
  
  return null;
}

// TEMPLATES
// templates/DashboardTemplate.tsx
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';
import { StatsGrid } from '../organisms/StatsGrid';
import { DashboardWidget } from '../organisms/DashboardWidget';

function DashboardTemplate({ stats, widgets }) {
  return (
    <div className="dashboard">
      <Header />
      
      <div className="dashboard-content">
        <Sidebar />
        
        <main className="main-content">
          <StatsGrid stats={stats} />
          
          <div className="widgets-grid">
            {widgets.map(widget => (
              <DashboardWidget 
                key={widget.id}
                {...widget}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// PÁGINAS
// pages/AnalyticsPage.tsx
import DashboardTemplate from '../templates/DashboardTemplate';

function AnalyticsPage() {
  const [stats, setStats] = useState([]);
  const [widgets, setWidgets] = useState([]);
  
  useEffect(() => {
    fetchAnalytics().then(data => {
      setStats(data.stats);
      setWidgets(data.widgets);
    });
  }, []);
  
  return (
    <DashboardTemplate
      stats={stats}
      widgets={widgets}
    />
  );
}

// Componentes reutilizáveis
// Consistência visual
// Desenvolvimento rápido`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Blog */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Blog - Conteúdo Estruturado</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Blog com artigos, comentários, 
                sidebar. Conteúdo estruturado e reutilizável.
                <br />
                <strong>Problema:</strong> Componentes duplicados, 
                inconsistência visual, manutenção difícil.
              </Text>
              
              <Code block>
{`// ✅ BOM - Atomic Design Blog

// ÁTOMOS
// components/atoms/Tag.tsx
function Tag({ children, variant = 'default' }) {
  return (
    <span className={\`tag tag-\${variant}\`}>
      {children}
    </span>
  );
}

// components/atoms/Avatar.tsx
function Avatar({ src, alt, size = 'medium' }) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={\`avatar avatar-\${size}\`}
    />
  );
}

// MOLÉCULAS
// components/molecules/ArticleCard.tsx
import { Card } from '../atoms/Card';
import { Tag } from '../atoms/Tag';
import { Avatar } from '../atoms/Avatar';

function ArticleCard({ article }) {
  return (
    <Card>
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      
      <div className="article-meta">
        <Avatar src={article.author.avatar} alt={article.author.name} />
        <span>{article.author.name}</span>
        <span>{article.date}</span>
      </div>
      
      <div className="article-tags">
        {article.tags.map(tag => (
          <Tag key={tag} variant="secondary">
            {tag}
          </Tag>
        ))}
      </div>
    </Card>
  );
}

// components/molecules/Comment.tsx
import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';

function Comment({ comment }) {
  return (
    <div className="comment">
      <Avatar src={comment.author.avatar} alt={comment.author.name} />
      
      <div className="comment-content">
        <div className="comment-header">
          <strong>{comment.author.name}</strong>
          <span>{comment.date}</span>
        </div>
        
        <p>{comment.content}</p>
        
        <div className="comment-actions">
          <Button variant="text" size="small">
            Responder
          </Button>
          <Button variant="text" size="small">
            Curtir
          </Button>
        </div>
      </div>
    </div>
  );
}

// ORGANISMOS
// components/organisms/ArticleList.tsx
import { ArticleCard } from '../molecules/ArticleCard';

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

// components/organisms/CommentSection.tsx
import { Comment } from '../molecules/Comment';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

function CommentSection({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState('');
  
  return (
    <div className="comment-section">
      <h3>Comentários ({comments.length})</h3>
      
      <div className="comment-form">
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Adicione um comentário..."
        />
        <Button onClick={() => onAddComment(newComment)}>
          Comentar
        </Button>
      </div>
      
      <div className="comments-list">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

// TEMPLATES
// templates/BlogTemplate.tsx
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';
import { Footer } from '../organisms/Footer';

function BlogTemplate({ children }) {
  return (
    <div className="blog">
      <Header />
      
      <main className="main-content">
        <div className="content">
          {children}
        </div>
        
        <aside className="sidebar">
          <Sidebar />
        </aside>
      </main>
      
      <Footer />
    </div>
  );
}

// PÁGINAS
// pages/ArticlePage.tsx
import BlogTemplate from '../templates/BlogTemplate';
import { CommentSection } from '../organisms/CommentSection';

function ArticlePage({ article, comments }) {
  return (
    <BlogTemplate>
      <article className="article">
        <h1>{article.title}</h1>
        <div className="article-meta">
          <Avatar src={article.author.avatar} alt={article.author.name} />
          <span>{article.author.name}</span>
          <span>{article.date}</span>
        </div>
        
        <div className="article-content">
          {article.content}
        </div>
        
        <div className="article-tags">
          {article.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </article>
      
      <CommentSection comments={comments} />
    </BlogTemplate>
  );
}

// Conteúdo estruturado
// Componentes reutilizáveis
// Manutenção fácil`}
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
                <strong>Problema:</strong> Você cria átomos para tudo. 
                Componentes simples viram complexidade desnecessária.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use atomic design quando faz sentido. 
                Componentes simples não precisam ser átomos.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Over-engineering
// components/atoms/Text.tsx
function Text({ children, size = 'medium', weight = 'normal' }) {
  return (
    <span className={\`text text-\${size} text-\${weight}\`}>
      {children}
    </span>
  );
}

// Desnecessário - é só um span

// ✅ BOM - Uso apropriado
// components/atoms/Button.tsx
function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={\`btn btn-\${variant}\`} {...props}>
      {children}
    </button>
  );
}

// Componente real
// Funcionalidade específica
// Reutilizável`}
              </Code>
            </Stack>
          </Paper>

          {/* Deep Nesting */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Aninhamento Profundo</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos níveis de aninhamento. 
                Componentes difíceis de entender e manter.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Mantenha no máximo 3-4 níveis. 
                Considere criar organismos maiores.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Aninhamento profundo
// Página → Template → Organismo → Molécula → Átomo → Átomo → Átomo
// 7 níveis de aninhamento!

// ✅ BOM - Aninhamento controlado
// Página → Template → Organismo → Molécula
// 4 níveis máximo

// components/organisms/ProductCard.tsx
function ProductCard({ product }) {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Price value={product.price} />
      <Button onClick={() => addToCart(product)}>
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
}

// Aninhamento simples
// Fácil de entender
// Fácil de manter`}
              </Code>
            </Stack>
          </Paper>

          {/* Naming Conflicts */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Conflitos de Nomenclatura</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Nomes de componentes confusos, 
                difícil de encontrar, duplicação.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use convenções claras, 
                documente estrutura, evite duplicação.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Nomes confusos
// components/atoms/Button.tsx
// components/molecules/Button.tsx
// components/organisms/Button.tsx

// Qual usar? Confuso!

// ✅ BOM - Convenções claras
// components/atoms/Button.tsx - Botão básico
// components/molecules/ButtonGroup.tsx - Grupo de botões
// components/organisms/ButtonBar.tsx - Barra de botões

// Ou use prefixos
// components/atoms/BaseButton.tsx
// components/molecules/IconButton.tsx
// components/organisms/ButtonBar.tsx

// Nomes claros
// Fácil de encontrar
// Sem duplicação`}
              </Code>
            </Stack>
          </Paper>

          {/* Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚡ Performance</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos componentes pequenos. 
                Bundle grande, renderização lenta.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use code splitting, 
                lazy loading, otimize imports.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Muitos imports
// Cada componente importa átomos
// Bundle grande

// ✅ BOM - Imports otimizados
// components/atoms/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';

// components/molecules/ProductCard.tsx
import { Button, Input, Card } from '../atoms';

// Ou use lazy loading
const ProductCard = lazy(() => import('../molecules/ProductCard'));

// Bundle menor
// Performance melhor
// Carregamento sob demanda`}
              </Code>
            </Stack>
          </Paper>

          {/* Documentation */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📚 Documentação</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Estrutura complexa sem documentação. 
                Difícil de entender, usar incorretamente.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Documente estrutura, 
                use Storybook, mantenha exemplos.
              </Text>
              
              <Code block>
{`// ✅ BOM - Documentação clara
// README.md
# Design System

## Estrutura
- atoms/ - Componentes básicos (Button, Input, etc.)
- molecules/ - Combinação de átomos (SearchBar, Card, etc.)
- organisms/ - Seções complexas (Header, ProductList, etc.)
- templates/ - Layouts (ProductPage, Dashboard, etc.)
- pages/ - Páginas específicas

## Convenções
- Use TypeScript para todos os componentes
- Mantenha props simples e reutilizáveis
- Documente com Storybook
- Teste todos os componentes

// .storybook/main.js
module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials']
};

// components/atoms/Button.stories.tsx
export default {
  title: 'Atoms/Button',
  component: Button
};

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary'
  }
};

// Documentação clara
// Exemplos práticos
// Fácil de usar`}
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
                  <strong>"Atomic Design"</strong> - Brad Frost
                </List.Item>
                <List.Item>
                  <strong>"Design Systems"</strong> - Alla Kholmatova
                </List.Item>
                <List.Item>
                  <strong>"Design Systems Handbook"</strong> - Various Authors
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank">
                    Atomic Design - Brad Frost
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://storybook.js.org/" target="_blank">
                    Storybook - Documentação de componentes
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.designsystems.com/" target="_blank">
                    Design Systems - Recursos
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
                <Title order={4} mb="sm">Salesforce</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos produtos, 
                  inconsistência visual, desenvolvimento lento.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Lightning Design System. 
                  Atomic design com componentes reutilizáveis.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento 50% mais rápido, 
                  consistência visual, melhor UX.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Airbnb</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos produtos, 
                  inconsistência visual, manutenção difícil.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Design system com atomic design. 
                  Componentes reutilizáveis em todos os produtos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento mais rápido, 
                  consistência visual, melhor manutenção.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Microsoft</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos produtos, 
                  inconsistência visual, desenvolvimento lento.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Fluent Design System. 
                  Atomic design com componentes reutilizáveis.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento mais rápido, 
                  consistência visual, melhor UX.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">IBM</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos produtos, 
                  inconsistência visual, manutenção difícil.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Carbon Design System. 
                  Atomic design com componentes reutilizáveis.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento mais rápido, 
                  consistência visual, melhor manutenção.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam Atomic Design:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Storybook</strong> - Documentação de componentes
                </List.Item>
                <List.Item>
                  <strong>Figma</strong> - Design de componentes
                </List.Item>
                <List.Item>
                  <strong>Sketch</strong> - Design de componentes
                </List.Item>
                <List.Item>
                  <strong>React</strong> - Biblioteca para componentes
                </List.Item>
                <List.Item>
                  <strong>Vue.js</strong> - Framework para componentes
                </List.Item>
                <List.Item>
                  <strong>Angular</strong> - Framework para componentes
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
              <Text c="dimmed">Atomic Design na prática</Text>
            </div>
          </Group>
          
          <Text>
            Atomic Design é sobre uma coisa só: <strong>componentes organizados</strong>. 
            Átomos → moléculas → organismos → templates → páginas. 
            Use quando design system e reutilização importam.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre criar átomos para tudo. 
            É sobre organizar componentes quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com componentes básicos, evolua conforme necessário. 
            Foque em reutilização e consistência.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

AtomicDesign.metadata = {
  title: 'Atomic Design',
  description: 'Átomos, moléculas, organismos, templates, páginas. Design system estruturado.'
};

export default AtomicDesign;
