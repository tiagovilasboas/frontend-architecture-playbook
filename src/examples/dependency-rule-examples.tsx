import { Code, Alert, Stack, Title, Text, Paper, Badge } from '@mantine/core';
import { IconCheck, IconX, IconBulb } from '@tabler/icons-react';

export function DependencyRuleExamples() {
  return (
    <Stack gap="xl">
      <Title order={2} mb="lg">
        <IconBulb size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Exemplos Práticos de Dependency Rule
      </Title>

      {/* Clean Architecture Example */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Clean Architecture - Dependency Rule Correta</Title>
          
          <div>
            <Badge color="green" mb="xs">✅ Correto</Badge>
            <Code block>
{`// UI Layer - PODE usar Service
function UserProfile({ userId }) {
  const { user, loading } = useUserService(userId);
  
  if (loading) return <Spinner />;
  return <div>{user.name}</div>;
}

// Service Layer - PODE usar Repository
function UserService() {
  const userRepo = new UserRepository();
  
  async getUser(id) {
    return await userRepo.findById(id);
  }
}

// Repository Layer - PODE usar Domain
function UserRepository() {
  async findById(id) {
    const data = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return new User(data); // Domain entity
  }
}

// Domain Layer - NUNCA usa camadas externas
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  
  // ✅ CORRETO: Domain só tem lógica de negócio
  getDisplayName() {
    return this.name.toUpperCase();
  }
}`}
            </Code>
          </div>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Dependências só apontam para baixo:</strong> UI → Service → Repository → Domain
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Broken Architecture Example */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Arquitetura Quebrada - Dependency Rule Violada</Title>
          
          <div>
            <Badge color="red" mb="xs">❌ Incorreto</Badge>
            <Code block>
{`// Domain Layer - QUEBRANDO A REGRA
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  
  // ❌ ERRADO: Domain usando UI
  render() {
    return <div>{this.name}</div>; // UI no domain!
  }
  
  // ❌ ERRADO: Domain usando Service
  async save() {
    const userService = new UserService(); // Service no domain!
    return await userService.saveUser(this);
  }
}

// Repository Layer - QUEBRANDO A REGRA
function UserRepository() {
  // ❌ ERRADO: Repository usando Service
  constructor() {
    this.userService = new UserService(); // Service no repository!
  }
  
  async findById(id) {
    return await this.userService.getUser(id); // Dependência circular!
  }
}

// Service Layer - QUEBRANDO A REGRA
function UserService() {
  // ❌ ERRADO: Service usando UI
  showUser(user) {
    return <UserCard user={user} />; // UI no service!
  }
}`}
            </Code>
          </div>

          <Alert color="red" icon={<IconX size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Dependências circulares:</strong> Domain → Service → UI → Domain = CAOS
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Real World Example */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Exemplo Real - E-commerce</Title>
          
          <div>
            <Badge color="green" mb="xs">✅ Implementação Correta</Badge>
            <Code block>
{`// UI Layer (React Component)
function ProductPage({ productId }) {
  const { product, addToCart, loading } = useProductService(productId);
  
  if (loading) return <Spinner />;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

// Service Layer (Business Logic)
function ProductService() {
  const productRepo = new ProductRepository();
  const cartRepo = new CartRepository();
  
  async getProduct(id) {
    return await productRepo.findById(id);
  }
  
  async addToCart(product) {
    const cart = await cartRepo.getCurrentCart();
    cart.addItem(product);
    return await cartRepo.save(cart);
  }
}

// Repository Layer (Data Access)
function ProductRepository() {
  async findById(id) {
    const data = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return new Product(data); // Domain entity
  }
}

// Domain Layer (Business Entities)
class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
  }
  
  // ✅ CORRETO: Lógica de negócio pura
  getFormattedPrice() {
    return \`R$ \${this.price.toFixed(2)}\`;
  }
  
  isOnSale() {
    return this.price < 100;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }
  
  addItem(product) {
    this.items.push(product);
  }
  
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}`}
            </Code>
          </div>

          <Alert color="brand" icon={<IconBulb size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Benefícios:</strong> Teste cada camada isoladamente, troque banco de dados sem afetar UI, 
              refatore com segurança.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Testing Example */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Testes com Dependency Rule</Title>
          
          <div>
            <Badge color="green" mb="xs">✅ Testes Isolados</Badge>
            <Code block>
{`// Teste do Domain (sem dependências externas)
describe('Product', () => {
  it('should format price correctly', () => {
    const product = new Product({ id: 1, name: 'Test', price: 99.99 });
    expect(product.getFormattedPrice()).toBe('R$ 99.99');
  });
  
  it('should detect sale items', () => {
    const product = new Product({ id: 1, name: 'Test', price: 50 });
    expect(product.isOnSale()).toBe(true);
  });
});

// Teste do Service (mock do Repository)
describe('ProductService', () => {
  it('should get product by id', async () => {
    const mockRepo = { findById: jest.fn() };
    const service = new ProductService(mockRepo);
    
    await service.getProduct(1);
    expect(mockRepo.findById).toHaveBeenCalledWith(1);
  });
});

// Teste do Repository (mock do banco)
describe('ProductRepository', () => {
  it('should find product by id', async () => {
    const mockDb = { query: jest.fn() };
    const repo = new ProductRepository(mockDb);
    
    await repo.findById(1);
    expect(mockDb.query).toHaveBeenCalledWith(
      'SELECT * FROM products WHERE id = ?', 
      [1]
    );
  });
});`}
            </Code>
          </div>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Resultado:</strong> Testes rápidos, mocks simples, bugs fáceis de encontrar.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
} 