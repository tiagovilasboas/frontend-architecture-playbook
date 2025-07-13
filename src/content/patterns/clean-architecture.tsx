import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconTestPipe, IconStack } from '@tabler/icons-react';

function CleanArchitecture() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Clean Architecture no Front-End
        </Title>
        <Text size="lg" c="dimmed">
          Separação clara de responsabilidades, testes fáceis e independência de frameworks. 
          Seu código de negócio sobrevive a qualquer mudança de tecnologia.
        </Text>
      </div>

            {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconStack size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Arquitetura em camadas que protege sua lógica de negócio</Text>
            </div>
          </Group>
          
          <Text>
            Clean Architecture é sobre uma coisa só: <strong>seu código de negócio não pode depender de framework</strong>.
          </Text>
          
          <Text>
            Pensa assim: se amanhã o React virar pó, sua lógica de negócio tem que sobreviver. 
            Se o Vue quebrar tudo na próxima versão, suas regras de negócio continuam funcionando.
          </Text>
          
          <Text>
            A regra é simples: <em>dependências apontam para dentro</em>. 
            UI depende do negócio, API depende do negócio, mas negócio não depende de porra nenhuma.
          </Text>
        </Stack>
      </Paper>

      {/* Layers */}
      <div>
                 <Title order={2} mb="lg">
           <IconStack size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
           As 4 Camadas
         </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Entidades (Entities)</Title>
                <Text size="sm" c="dimmed">
                  Regras de negócio puras. User, Order, Product. Sem dependências externas.
                </Text>
                <Text size="xs" c="blue" mb="xs">
                  {/* Referência ao exemplo real */}
                  Veja o exemplo real em <b>/examples/clean-architecture/user-entity.ts</b>
                </Text>
                <Code mt="xs" block>
{`export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    private active: boolean = true
  ) {}

  isActive(): boolean {
    return this.active;
  }
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
                <Title order={4}>Casos de Uso (Use Cases)</Title>
                <Text size="sm" c="dimmed">
                  Orquestram as entidades. CreateUser, ProcessOrder. Lógica de aplicação.
                </Text>
                <Text size="xs" c="blue" mb="xs">
                  Veja o exemplo real em <b>/examples/clean-architecture/create-user-usecase.ts</b>
                </Text>
                <Code mt="xs" block>
{`import { User } from './user-entity';

export interface UserRepository {
  save(user: User): Promise<User>;
}

export class CreateUserUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(data: { id: string; name: string; email: string }): Promise<User> {
    // Validações e regras de negócio
    const user = new User(data.id, data.name, data.email);
    return this.userRepo.save(user);
  }
}
`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Adaptadores (Adapters)</Title>
                <Text size="sm" c="dimmed">
                  Conectam com o mundo externo. APIs, localStorage, React components.
                </Text>
                <Code mt="xs" block>
{`class UserRepositoryImpl implements UserRepository {
  async save(user: User): Promise<User> {
    // Chama API, localStorage, etc
    return fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
  }
}`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Frameworks & Drivers</Title>
                <Text size="sm" c="dimmed">
                  React, Vue, APIs externas. Detalhes de implementação.
                </Text>
                <Code mt="xs" block>
{`function UserForm() {
  const createUser = useCreateUser();
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <button type="submit">Criar</button>
    </form>
  );
}`}
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
                <IconTestPipe size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Testes Fáceis</Title>
                <Text size="sm">
                  Sua lógica de negócio roda sem DOM. Testes unitários puros, sem mocks complexos.
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
                <Title order={4}>Independência de Framework</Title>
                <Text size="sm">
                  Troque React por Vue sem afetar regras de negócio. Migrações mais seguras.
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
                <Title order={4}>Manutenibilidade</Title>
                <Text size="sm">
                  Código organizado por responsabilidade. Fácil de entender e modificar.
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
              <List.Item>Produto vai durar mais de 2 anos</List.Item>
              <List.Item>Time grande, contratos claros</List.Item>
              <List.Item>Regras de negócio complexas (não é só CRUD)</List.Item>
              <List.Item>Vai migrar de tecnologia no futuro</List.Item>
              <List.Item>Testes são importantes pro negócio</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projeto pequeno/MVP (over-engineering)</List.Item>
              <List.Item>Time pequeno (complexidade desnecessária)</List.Item>
              <List.Item>Protótipo rápido</List.Item>
              <List.Item>Só CRUD simples</List.Item>
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
            <Title order={3} mb="md">🛒 E-commerce - Sistema de Carrinho</Title>
            
            <Stack gap="md">
                        <Text>
            <strong>Cenário:</strong> Carrinho de compras. Você tem validações complexas, 
            cálculo de frete, cupons, múltiplos gateways de pagamento. Bagunça total.
            <br />
            <strong>Problema:</strong> Tudo misturado, impossível de testar, migração = morte.
          </Text>
              
              <Code block>
{`// ENTIDADE - Regras de negócio puras
class CartItem {
  constructor(
    public product: Product,
    public quantity: number
  ) {}
  
  getSubtotal(): number {
    return this.product.price * this.quantity;
  }
  
  canAddMore(): boolean {
    return this.quantity < this.product.maxQuantity;
  }
}

class Cart {
  constructor(public items: CartItem[] = []) {}
  
  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.getSubtotal(), 0);
  }
  
  canCheckout(): boolean {
    return this.items.length > 0 && this.items.every(item => item.product.inStock());
  }
  
  applyCoupon(coupon: Coupon): void {
    if (coupon.isValid() && coupon.appliesTo(this)) {
      this.discount = coupon.calculateDiscount(this.getTotal());
    }
  }
}

// CASO DE USO - Orquestração
class AddToCartUseCase {
  constructor(
    private cartRepo: CartRepository,
    private productRepo: ProductRepository
  ) {}
  
  async execute(productId: string, quantity: number): Promise<Cart> {
    const product = await this.productRepo.findById(productId);
    const cart = await this.cartRepo.getCurrent();
    
    const newItem = new CartItem(product, quantity);
    
    if (!newItem.canAddMore()) {
      throw new Error('Quantity exceeds maximum allowed');
    }
    
    cart.addItem(newItem);
    return this.cartRepo.save(cart);
  }
}

// ADAPTADOR - Implementação concreta
class CartRepositoryImpl implements CartRepository {
  async getCurrent(): Promise<Cart> {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : new Cart();
  }
  
  async save(cart: Cart): Promise<Cart> {
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }
}

// FRAMEWORK - React component
function AddToCartButton({ productId, quantity = 1 }) {
  const addToCart = useAddToCart();
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    try {
      await addToCart.execute(productId, quantity);
      showNotification('Item adicionado ao carrinho!');
    } catch (error) {
      showError('Erro ao adicionar item');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Button onClick={handleClick} loading={loading}>
      Adicionar ao Carrinho
    </Button>
  );
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Dashboard Analytics */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Analytics em Tempo Real</Title>
            
            <Stack gap="md">
                        <Text>
            <strong>Cenário:</strong> Dashboard com métricas. Você tem APIs, WebSockets, 
            localStorage, filtros dinâmicos. Dados vindo de todo lado.
            <br />
            <strong>Problema:</strong> Dados espalhados, lógica duplicada, impossível de manter.
          </Text>
              
              <Code block>
{`// ENTIDADE - Regras de negócio
class Metric {
  constructor(
    public name: string,
    public value: number,
    public unit: string,
    public trend: 'up' | 'down' | 'stable'
  ) {}
  
  isPositive(): boolean {
    return this.trend === 'up';
  }
  
  getFormattedValue(): string {
    return \`\${this.value}\${this.unit}\`;
  }
}

class Dashboard {
  constructor(public metrics: Metric[] = []) {}
  
  getTotalRevenue(): number {
    return this.metrics
      .filter(m => m.name === 'revenue')
      .reduce((sum, m) => sum + m.value, 0);
  }
  
  getTopPerformers(): Metric[] {
    return this.metrics
      .filter(m => m.isPositive())
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }
}

// CASO DE USO
class LoadDashboardUseCase {
  constructor(
    private dashboardRepo: DashboardRepository,
    private realtimeService: RealtimeService
  ) {}
  
  async execute(filters: DashboardFilters): Promise<Dashboard> {
    const [metrics, realtimeData] = await Promise.all([
      this.dashboardRepo.getMetrics(filters),
      this.realtimeService.getUpdates()
    ]);
    
    const dashboard = new Dashboard([...metrics, ...realtimeData]);
    return dashboard;
  }
}

// ADAPTADOR - Múltiplas fontes
class DashboardRepositoryImpl implements DashboardRepository {
  async getMetrics(filters: DashboardFilters): Promise<Metric[]> {
    const response = await fetch(\`/api/metrics?\${new URLSearchParams(filters)}\`);
    const data = await response.json();
    return data.map(d => new Metric(d.name, d.value, d.unit, d.trend));
  }
}

class RealtimeServiceImpl implements RealtimeService {
  private ws: WebSocket;
  
  async getUpdates(): Promise<Metric[]> {
    return new Promise((resolve) => {
      this.ws = new WebSocket('ws://api.example.com/realtime');
      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        resolve(data.map(d => new Metric(d.name, d.value, d.unit, d.trend)));
      };
    });
  }
}

// FRAMEWORK - React component
function DashboardPage() {
  const [filters, setFilters] = useState({ period: '7d', category: 'all' });
  const { data: dashboard, loading } = useDashboard(filters);
  
  if (loading) return <LoadingSpinner />;
  
  return (
    <div>
      <MetricCards metrics={dashboard.metrics} />
      <TopPerformersChart data={dashboard.getTopPerformers()} />
      <RevenueSummary total={dashboard.getTotalRevenue()} />
    </div>
  );
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Form Validation */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Formulários - Validação Complexa</Title>
            
            <Stack gap="md">
                        <Text>
            <strong>Cenário:</strong> Formulário de cadastro. Validações cruzadas, 
            máscaras, validação em tempo real, APIs externas. O inferno.
            <br />
            <strong>Problema:</strong> Validações espalhadas, lógica de UI misturada com negócio, 
            impossível de testar isoladamente.
          </Text>
              
              <Code block>
{`// ENTIDADE - Regras de validação
class User {
  constructor(
    public email: string,
    public cpf: string,
    public phone: string
  ) {}
  
  isValidEmail(): boolean {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(this.email);
  }
  
  isValidCPF(): boolean {
    // Algoritmo de validação de CPF
    const cleanCPF = this.cpf.replace(/[\\D]/g, '');
    if (cleanCPF.length !== 11) return false;
    
    // Validação dos dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF[i]) * (10 - i);
    }
    const digit1 = (sum * 10) % 11;
    if (digit1 === 10) digit1 = 0;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF[i]) * (11 - i);
    }
    const digit2 = (sum * 10) % 11;
    if (digit2 === 10) digit2 = 0;
    
    return digit1 === parseInt(cleanCPF[9]) && digit2 === parseInt(cleanCPF[10]);
  }
  
  isValidPhone(): boolean {
    const phoneRegex = /^\\([1-9]{2}\\) [0-9]{4,5}-[0-9]{4}$/;
    return phoneRegex.test(this.phone);
  }
  
  isValid(): boolean {
    return this.isValidEmail() && this.isValidCPF() && this.isValidPhone();
  }
}

// CASO DE USO
class ValidateUserUseCase {
  constructor(
    private userRepo: UserRepository,
    private externalValidationService: ExternalValidationService
  ) {}
  
  async execute(userData: CreateUserDTO): Promise<ValidationResult> {
    const user = new User(userData.email, userData.cpf, userData.phone);
    
    if (!user.isValid()) {
      return { isValid: false, errors: ['Dados inválidos'] };
    }
    
    // Validação externa (API de terceiros)
    const externalValidation = await this.externalValidationService.validate(user);
    if (!externalValidation.isValid) {
      return { isValid: false, errors: externalValidation.errors };
    }
    
    // Verifica se já existe
    const existingUser = await this.userRepo.findByEmail(user.email);
    if (existingUser) {
      return { isValid: false, errors: ['Email já cadastrado'] };
    }
    
    return { isValid: true, errors: [] };
  }
}

// ADAPTADOR
class ExternalValidationServiceImpl implements ExternalValidationService {
  async validate(user: User): Promise<ValidationResult> {
    const response = await fetch('/api/external-validation', {
      method: 'POST',
      body: JSON.stringify(user)
    });
    return response.json();
  }
}

// FRAMEWORK - React component
function UserRegistrationForm() {
  const [formData, setFormData] = useState({ email: '', cpf: '', phone: '' });
  const [errors, setErrors] = useState({});
  const validateUser = useValidateUser();
  
  const handleFieldChange = async (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validação em tempo real
    if (value.length > 3) {
      const result = await validateUser.execute({ ...formData, [field]: value });
      setErrors(prev => ({ ...prev, [field]: result.errors[0] }));
    }
  };
  
  return (
    <form>
      <Input
        label="Email"
        value={formData.email}
        onChange={(e) => handleFieldChange('email', e.target.value)}
        error={errors.email}
      />
      <Input
        label="CPF"
        value={formData.cpf}
        onChange={(e) => handleFieldChange('cpf', e.target.value)}
        error={errors.cpf}
        mask="000.000.000-00"
      />
      <Input
        label="Telefone"
        value={formData.phone}
        onChange={(e) => handleFieldChange('phone', e.target.value)}
        error={errors.phone}
        mask="(00) 00000-0000"
      />
    </form>
  );
}`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Trade-offs */}
      <div>
        <Title order={2} mb="lg">Trade-offs</Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">✅ Vantagens</Title>
            <List>
              <List.Item>Testes fáceis (sem DOM)</List.Item>
              <List.Item>Troca de framework sem medo</List.Item>
              <List.Item>Código que dura anos</List.Item>
              <List.Item>Cada coisa no seu lugar</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">❌ Desvantagens</Title>
            <List>
              <List.Item>Mais código boilerplate</List.Item>
              <List.Item>Curva de aprendizado inicial</List.Item>
              <List.Item>Overkill para projeto pequeno</List.Item>
              <List.Item>Mais arquivos pra organizar</List.Item>
            </List>
          </Card>
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
                <strong>Problema:</strong> Você cria abstrações desnecessárias, 
                interfaces pra tudo, classes pra nada. Vira uma bagunça pior que antes.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Comece simples. Só crie abstração quando 
                você realmente precisa. Se é só um CRUD, não precisa de Clean Architecture.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Over-engineering
interface IUserRepository {
  findById(id: string): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
  delete(id: string): Promise<void>;
}

class UserRepositoryImpl implements IUserRepository {
  async findById(id: string): Promise<IUser> {
    return fetch(\`/api/users/\${id}\`);
  }
}

// ✅ BOM - Simples e direto
class UserService {
  async getUser(id: string) {
    return fetch(\`/api/users/\${id}\`);
  }
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Circular Dependencies */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Dependências Circulares</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você quebra a regra das dependências. 
                Camada interna depende da externa, vira uma bagunça.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Sempre lembre: dependências apontam para dentro. 
                Use interfaces pra inverter dependências quando necessário.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Dependência circular
class UserService {
  constructor(private userRepo: UserRepository) {}
  
  async createUser(data: CreateUserDTO) {
    // UserService depende de UserRepository (OK)
    const user = await this.userRepo.save(data);
    return user;
  }
}

class UserRepository {
  constructor(private userService: UserService) {} // ❌ RUIM!
  
  async save(data: CreateUserDTO) {
    // UserRepository depende de UserService (RUIM!)
    return this.userService.validate(data);
  }
}

// ✅ BOM - Dependências corretas
interface UserRepository {
  save(data: CreateUserDTO): Promise<User>;
}

class UserService {
  constructor(private userRepo: UserRepository) {}
  
  async createUser(data: CreateUserDTO) {
    // Validação na camada de negócio
    if (!this.isValidUser(data)) {
      throw new Error('Invalid user data');
    }
    
    return this.userRepo.save(data);
  }
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Anemic Domain */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">💀 Domínio Anêmico</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Suas entidades são só DTOs, sem comportamento. 
                Toda lógica fica nos casos de uso, vira procedural.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Coloque comportamento nas entidades. 
                Elas devem ter métodos que representam regras de negócio.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Domínio anêmico
class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public isActive: boolean
  ) {}
}

class UserService {
  async createUser(data: CreateUserDTO) {
    // Toda lógica aqui, entidade só carrega dados
    if (!this.isValidEmail(data.email)) {
      throw new Error('Invalid email');
    }
    
    const user = new User(data.id, data.name, data.email, true);
    return this.userRepo.save(user);
  }
}

// ✅ BOM - Domínio rico
class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public isActive: boolean
  ) {}
  
  // Comportamento na entidade
  isValidEmail(): boolean {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(this.email);
  }
  
  activate(): void {
    this.isActive = true;
  }
  
  deactivate(): void {
    this.isActive = false;
  }
}

class UserService {
  async createUser(data: CreateUserDTO) {
    const user = new User(data.id, data.name, data.email, false);
    
    // Validação na entidade
    if (!user.isValidEmail()) {
      throw new Error('Invalid email');
    }
    
    user.activate();
    return this.userRepo.save(user);
  }
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Testing Everything */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧪 Testando Tudo</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você testa cada linha de código, 
                incluindo getters/setters, vira overhead desnecessário.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Teste comportamento, não implementação. 
                Foque em regras de negócio, não em detalhes técnicos.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Testando tudo
describe('User', () => {
  it('should have correct properties', () => {
    const user = new User('1', 'John', 'john@email.com', true);
    expect(user.id).toBe('1');
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@email.com');
    expect(user.isActive).toBe(true);
  });
});

// ✅ BOM - Testando comportamento
describe('User', () => {
  it('should validate email correctly', () => {
    const validUser = new User('1', 'John', 'john@email.com', true);
    const invalidUser = new User('2', 'Jane', 'invalid-email', true);
    
    expect(validUser.isValidEmail()).toBe(true);
    expect(invalidUser.isValidEmail()).toBe(false);
  });
  
  it('should activate and deactivate correctly', () => {
    const user = new User('1', 'John', 'john@email.com', false);
    
    user.activate();
    expect(user.isActive).toBe(true);
    
    user.deactivate();
    expect(user.isActive).toBe(false);
  });
}`}
              </Code>
            </Stack>
          </Paper>

          {/* Premature Abstraction */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔮 Abstração Prematura</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você cria interfaces e abstrações 
                antes de precisar delas. "Ah, mas e se no futuro..."
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> YAGNI - You Aren't Gonna Need It. 
                Só abstraia quando você realmente precisa. Comece concreto.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Abstração prematura
interface IUserRepository {
  findById(id: string): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
  delete(id: string): Promise<void>;
  findByEmail(email: string): Promise<IUser>;
  findByStatus(status: UserStatus): Promise<IUser[]>;
}

// Você só precisa de findById e save por enquanto!

// ✅ BOM - Concreto primeiro
class UserRepository {
  async findById(id: string) {
    return fetch(\`/api/users/\${id}\`);
  }
  
  async save(user: User) {
    return fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user)
    });
  }
}

// Só abstraia quando precisar de múltiplas implementações
// ou quando for testar isoladamente`}
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
                  <strong>"Clean Architecture"</strong> - Robert C. Martin (Uncle Bob)
                </List.Item>
                <List.Item>
                  <strong>"Clean Code"</strong> - Robert C. Martin
                </List.Item>
                <List.Item>
                  <strong>"Domain-Driven Design"</strong> - Eric Evans
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank">
                    The Clean Architecture - Uncle Bob
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://martinfowler.com/bliki/PresentationDomainDataLayering.html" target="_blank">
                    Presentation Domain Data Layering - Martin Fowler
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://khalilstemmler.com/articles/domain-driven-design-intro/" target="_blank">
                    Domain-Driven Design - Khalil Stemmler
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
                  <strong>Problema:</strong> Migração de AngularJS para React em 2015. 
                  AngularJS tava morrendo, React era o futuro.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Clean Architecture permitiu migração gradual, 
                  mantendo regras de negócio intactas. Sem quebrar nada.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Migração bem-sucedida sem downtime, 
                  código de negócio preservado. Ninguém enlouqueceu.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Aplicação desktop complexa. Windows, Mac, Linux. 
                  Cada um com suas peculiaridades.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Clean Architecture no front-end, 
                  separando lógica de negócio da interface. Negócio igual pra todos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Código mais testável, manutenível 
                  e fácil de evoluir. Menos bugs, mais paz.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Uber</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Aplicação móvel com regras de negócio complexas
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Clean Architecture para separar 
                  cálculo de preços, rotas e pagamentos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Regras de negócio testáveis e 
                  independentes da UI.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Airbnb</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Sistema de reservas complexo com múltiplas validações
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Clean Architecture para regras de negócio 
                  de reservas, preços e disponibilidade.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Código mais limpo, testável e 
                  fácil de manter.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Frameworks que facilitam Clean Architecture:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>TypeScript</strong> - Tipagem forte para contratos claros
                </List.Item>
                <List.Item>
                  <strong>Jest</strong> - Testes unitários para regras de negócio
                </List.Item>
                <List.Item>
                  <strong>Dependency Injection</strong> - Inversify, Awilix
                </List.Item>
                <List.Item>
                  <strong>State Management</strong> - Zustand, Redux Toolkit
                </List.Item>
                <List.Item>
                  <strong>API Clients</strong> - React Query, SWR
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
              <Text c="dimmed">Clean Architecture na prática</Text>
            </div>
          </Group>
          
          <Text>
            Clean Architecture é sobre uma coisa só: <strong>proteger seu código de negócio</strong>. 
            Separe responsabilidades, teste facilmente, migre sem medo. 
            Use quando o projeto vai durar e você não quer enlouquecer.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre seguir regras cegamente. 
            É sobre ter um código que sobrevive às mudanças de tecnologia. E você também.
            <br />
            <strong>Dica:</strong> Comece pequeno, evolua conforme necessário. Não precisa ser perfeito desde o início.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

CleanArchitecture.metadata = {
  title: 'Clean Architecture',
  description: 'Arquitetura em camadas que protege sua lógica de negócio e facilita testes e migrações.'
};

export default CleanArchitecture;
