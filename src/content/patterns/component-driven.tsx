import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconPuzzle, IconLego } from '@tabler/icons-react';

function ComponentDriven() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Component-Driven Development
        </Title>
        <Text size="lg" c="dimmed">
          Construa interfaces como Lego. Componentes reutilizáveis, composição poderosa, 
          design systems que realmente funcionam. Menos código, mais resultado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconPuzzle size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Desenvolvimento baseado em componentes reutilizáveis</Text>
            </div>
          </Group>
          
          <Text>
            Component-Driven é sobre uma coisa só: <strong>construir interfaces como Lego</strong>.
          </Text>
          
          <Text>
            Pensa assim: você tem peças pequenas (botões, inputs), junta elas em peças médias 
            (formulários, cards), e depois monta telas inteiras. Cada peça funciona sozinha.
          </Text>
          
          <Text>
            A regra é simples: <em>componentes são independentes e reutilizáveis</em>. 
            Você pode testar cada um isoladamente, trocar um sem afetar os outros.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconLego size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Componentes Atômicos</Title>
                <Text size="sm" c="dimmed">
                  Peças pequenas e reutilizáveis. Button, Input, Badge. Cada um faz uma coisa só.
                </Text>
                <Text size="xs" c="blue" mb="xs">
                  Veja o exemplo real em <b>/examples/component-driven/button.tsx</b>
                </Text>
                <Code mt="xs" block>
{`import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      style={{
        background: variant === 'primary' ? '#228be6' : '#e9ecef',
        color: variant === 'primary' ? '#fff' : '#222',
        border: 'none',
        borderRadius: 4,
        padding: '8px 16px',
        fontWeight: 600,
        cursor: 'pointer',
      }}
      {...props}
    />
  );
}
`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Reutilização</Title>
                <Text size="sm" c="dimmed">
                  Mesmo componente em vários lugares. Muda uma vez, muda em todo lugar.
                </Text>
                <Code mt="xs" block>
{`// Um componente, vários usos
<Button>Salvar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="danger">Excluir</Button>
<Button size="small">Ver mais</Button>

// Muda o CSS do Button, muda em todo lugar
// Não precisa caçar cada botão da aplicação`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Isolamento</Title>
                <Text size="sm" c="dimmed">
                  Cada componente funciona sozinho. Testa isoladamente, não quebra os outros.
                </Text>
                <Code mt="xs" block>
{`// Componente isolado
function UserCard({ user }) {
  return (
    <Card>
      <Avatar src={user.avatar} />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </Card>
  );
}

// Funciona sozinho, não depende de nada externo
// Pode testar isoladamente
// Pode usar em qualquer lugar`}
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Menos Código</Title>
                <Text size="sm">
                  Reutiliza componentes, não reescreve. Uma mudança, todo lugar atualiza.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconPuzzle size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Desenvolvimento Rápido</Title>
                <Text size="sm">
                  Monta telas como Lego. Componentes prontos, só juntar.
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
                <Title order={4}>Consistência Visual</Title>
                <Text size="sm">
                  Mesmos componentes = mesma aparência. Design system automático.
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
              <List.Item>Interface complexa com muitas telas</List.Item>
              <List.Item>Time grande trabalhando junto</List.Item>
              <List.Item>Precisa de consistência visual</List.Item>
              <List.Item>Vai reutilizar componentes</List.Item>
              <List.Item>Design system é importante</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projeto pequeno (over-engineering)</List.Item>
              <List.Item>Só uma tela simples</List.Item>
              <List.Item>Protótipo rápido</List.Item>
              <List.Item>Time muito pequeno</List.Item>
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
            <Title order={3} mb="md">🛒 E-commerce - Sistema de Produtos</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> E-commerce com produtos, carrinho, checkout. 
                Muitas telas, componentes repetidos.
                <br />
                <strong>Problema:</strong> Código duplicado, inconsistência visual, 
                impossível de manter.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Sem componentes
function ProductPage() {
  return (
    <div>
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="price">R$ {product.price}</div>
        <button className="btn btn-primary">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

function CartPage() {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} />
          <h3>{item.name}</h3>
          <p>R$ {item.price}</p>
          <button className="btn btn-primary">Remover</button>
        </div>
      ))}
    </div>
  );
}

// Código duplicado, estilos inconsistentes, impossível de manter

// ✅ BOM - Com componentes
function ProductCard({ product, onAddToCart }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice value={product.price} />
        <AddToCartButton onClick={() => onAddToCart(product)} />
      </ProductInfo>
    </Card>
  );
}

function ProductPage() {
  return (
    <ProductCard 
      product={product} 
      onAddToCart={handleAddToCart} 
    />
  );
}

function CartPage() {
  return (
    <div>
      {items.map(item => (
        <ProductCard 
          key={item.id}
          product={item} 
          onAddToCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
}

// Mesmo componente, reutilizado, consistente, fácil de manter`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Métricas Reutilizáveis</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Dashboard com métricas, gráficos, cards. 
                Muitas visualizações similares.
                <br />
                <strong>Problema:</strong> Cada métrica escrita do zero, 
                inconsistência visual, difícil de manter.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Sem componentes
function SalesDashboard() {
  return (
    <div>
      <div className="metric-card">
        <h3>Vendas Hoje</h3>
        <div className="metric-value">R$ 15.420</div>
        <div className="metric-change positive">+12%</div>
      </div>
      
      <div className="metric-card">
        <h3>Usuários Ativos</h3>
        <div className="metric-value">1.234</div>
        <div className="metric-change negative">-3%</div>
      </div>
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div>
      <div className="metric-card">
        <h3>Taxa de Conversão</h3>
        <div className="metric-value">2.4%</div>
        <div className="metric-change positive">+0.5%</div>
      </div>
    </div>
  );
}

// Código duplicado, estilos inconsistentes

// ✅ BOM - Com componentes
function MetricCard({ title, value, change, type = 'default' }) {
  return (
    <Card>
      <Title order={4}>{title}</Title>
      <Text size="xl" fw={700}>{value}</Text>
      <Text 
        size="sm" 
        c={change > 0 ? 'green' : 'red'}
      >
        {change > 0 ? '+' : ''}{change}%
      </Text>
    </Card>
  );
}

function SalesDashboard() {
  return (
    <div>
      <MetricCard 
        title="Vendas Hoje"
        value="R$ 15.420"
        change={12}
      />
      <MetricCard 
        title="Usuários Ativos"
        value="1.234"
        change={-3}
      />
    </div>
  );
}

function AnalyticsDashboard() {
  return (
    <div>
      <MetricCard 
        title="Taxa de Conversão"
        value="2.4%"
        change={0.5}
      />
    </div>
  );
}

// Componente reutilizado, consistente, fácil de manter`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Form System */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Formulários - Sistema de Inputs</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Formulários complexos com validação, 
                máscaras, diferentes tipos de input.
                <br />
                <strong>Problema:</strong> Cada input escrito do zero, 
                validação inconsistente, difícil de manter.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Sem componentes
function UserForm() {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input 
          type="text" 
          className="form-input"
          onChange={handleNameChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <label>Email</label>
        <input 
          type="email" 
          className="form-input"
          onChange={handleEmailChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <label>Telefone</label>
        <input 
          type="tel" 
          className="form-input"
          onChange={handlePhoneChange}
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
    </form>
  );
}

// Código repetitivo, validação inconsistente

// ✅ BOM - Com componentes
function FormInput({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  mask 
}) {
  return (
    <div>
      <label>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        className={\`form-input \${error ? 'error' : ''}\`}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

function UserForm() {
  return (
    <form>
      <FormInput 
        label="Nome"
        value={formData.name}
        onChange={handleNameChange}
        error={errors.name}
      />
      
      <FormInput 
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleEmailChange}
        error={errors.email}
      />
      
      <FormInput 
        label="Telefone"
        type="tel"
        value={formData.phone}
        onChange={handlePhoneChange}
        error={errors.phone}
        mask="(00) 00000-0000"
      />
    </form>
  );
}

// Componente reutilizado, validação consistente, fácil de manter`}
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
          {/* Over-abstraction */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚫 Abstração Excessiva</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você cria componentes pra tudo, 
                até pra coisas que só aparecem uma vez. Vira uma bagunça.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Só crie componente quando vai reutilizar. 
                Se só aparece uma vez, deixa inline mesmo.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Abstração excessiva
function UserNameDisplay({ name }) {
  return <span>{name}</span>;
}

function UserEmailDisplay({ email }) {
  return <span>{email}</span>;
}

// ✅ BOM - Só abstrai quando precisa
function UserCard({ user }) {
  return (
    <Card>
      <span>{user.name}</span>
      <span>{user.email}</span>
    </Card>
  );
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Props Drilling */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Props Drilling</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você passa props por 5 níveis de componentes 
                só pra chegar no que precisa. Vira uma bagunça.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use Context, Redux, ou reorganize componentes. 
                Não passe props desnecessárias.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Props drilling
function App({ user }) {
  return <Header user={user} />;
}

function Header({ user }) {
  return <Nav user={user} />;
}

function Nav({ user }) {
  return <UserMenu user={user} />;
}

function UserMenu({ user }) {
  return <UserAvatar user={user} />;
}

// ✅ BOM - Context ou reorganização
function App({ user }) {
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function UserAvatar() {
  const user = useContext(UserContext);
  return <Avatar src={user.avatar} />;
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Giant Components */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🐋 Componentes Gigantes</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Um componente com 500 linhas, 
                fazendo tudo. Impossível de testar e manter.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Quebre em componentes menores. 
                Cada um com uma responsabilidade só.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Componente gigante
function ProductPage() {
  // 500 linhas de código
  // Renderiza tudo
  // Lógica de negócio
  // Validações
  // Estados
  // Efeitos
  return <div>...</div>;
}

// ✅ BOM - Componentes pequenos
function ProductPage() {
  return (
    <div>
      <ProductHeader />
      <ProductGallery />
      <ProductInfo />
      <ProductActions />
      <ProductReviews />
    </div>
  );
}

function ProductHeader() {
  return <div>...</div>;
}

function ProductGallery() {
  return <div>...</div>;
}

// Cada um com uma responsabilidade só`}
              </Code>
            </Stack>
          </Paper>

          {/* Inconsistent Props */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🎭 Props Inconsistentes</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Mesmo componente com props diferentes 
                em cada lugar. Impossível de reutilizar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Padronize props. Use interfaces TypeScript. 
                Documente o que cada prop faz.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Props inconsistentes
<Button onClick={handleClick}>Salvar</Button>
<Button onPress={handlePress}>Cancelar</Button>
<Button handleClick={handleClick}>Excluir</Button>

// ✅ BOM - Props padronizadas
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

<Button onClick={handleClick}>Salvar</Button>
<Button onClick={handleCancel} variant="secondary">Cancelar</Button>
<Button onClick={handleDelete} variant="danger">Excluir</Button>`}
              </Code>
            </Stack>
          </Paper>

          {/* No Testing */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧪 Sem Testes</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Componentes sem testes. 
                Quebra uma coisa, quebra tudo. Impossível de refatorar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Teste cada componente isoladamente. 
                Use Storybook pra documentar e testar visualmente.
              </Text>
              
              <Code block>
{`// ✅ BOM - Testando componentes
describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});

// Storybook para testes visuais
export const Primary = () => <Button variant="primary">Button</Button>;
export const Secondary = () => <Button variant="secondary">Button</Button>;`}
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
                  <strong>"Component Design"</strong> - Nathan Curtis
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
                    Storybook - Documentação de Componentes
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.uxpin.com/studio/blog/design-systems-vs-component-libraries/" target="_blank">
                    Design Systems vs Component Libraries
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
                <Title order={4} mb="sm">Airbnb</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Interface inconsistente, 
                  cada tela feita do zero. Impossível de manter.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Design system com componentes reutilizáveis. 
                  DLS (Design Language System).
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento 60% mais rápido, 
                  consistência visual em toda plataforma.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplas plataformas (web, mobile, desktop) 
                  com interfaces diferentes.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Componentes reutilizáveis entre plataformas. 
                  Design system centralizado.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Experiência consistente, 
                  desenvolvimento mais rápido.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Shopify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Polaris design system. 
                  Muitos desenvolvedores, interfaces inconsistentes.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Componentes reutilizáveis com documentação. 
                  Storybook para testes visuais.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento padronizado, 
                  menos bugs de interface.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Microsoft</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Fluent UI. Múltiplos produtos, 
                  interfaces diferentes.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Sistema de componentes reutilizáveis. 
                  Design tokens para consistência.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Experiência unificada, 
                  desenvolvimento mais eficiente.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam Component-Driven:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Storybook</strong> - Documentação e testes visuais
                </List.Item>
                <List.Item>
                  <strong>React DevTools</strong> - Debug de componentes
                </List.Item>
                <List.Item>
                  <strong>Styled Components</strong> - CSS-in-JS para componentes
                </List.Item>
                <List.Item>
                  <strong>Emotion</strong> - CSS-in-JS performático
                </List.Item>
                <List.Item>
                  <strong>Framer Motion</strong> - Animações de componentes
                </List.Item>
                <List.Item>
                  <strong>React Testing Library</strong> - Testes de componentes
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
              <Text c="dimmed">Component-Driven na prática</Text>
            </div>
          </Group>
          
          <Text>
            Component-Driven é sobre uma coisa só: <strong>construir interfaces como Lego</strong>. 
            Reutilize componentes, mantenha consistência, desenvolva mais rápido. 
            Use quando tem interface complexa e quer menos código.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre criar componentes pra tudo. 
            É sobre reutilizar o que realmente se repete. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com componentes pequenos, evolua conforme necessário. 
            Teste cada componente isoladamente.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

ComponentDriven.metadata = {
  title: 'Component-Driven Development',
  description: 'Construa interfaces como Lego com componentes reutilizáveis e composição poderosa.'
};

export default ComponentDriven;
