import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Card, Badge, Divider, SimpleGrid } from '@mantine/core';
import { 
  IconBulb, 
  IconAlertTriangle, 
  IconCheck, 
  IconCode, 
  IconStack,
  IconArrowDown,
  IconArrowUp,
  IconX,
  IconShield
} from '@tabler/icons-react';

export default function DependencyRuleGuide() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <section>
        <Stack align="center" ta="center" mb="xl">
          <Badge size="lg" variant="light" color="brand" mb="md">
            <IconShield size={16} style={{ marginRight: 8 }} />
            Regra Fundamental
          </Badge>
          <Title order={1} fw={800} size="3.5rem" mb="md" style={{ 
            background: 'linear-gradient(135deg, var(--mantine-color-brand-6) 0%, var(--mantine-color-accent-6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Dependency Rule
          </Title>
          <Text size="xl" c="dimmed" mb="lg" maw={800}>
            A regra mais importante de qualquer arquitetura. Se você ignorar isso, 
            <strong> nenhuma arquitetura consegue salvar seu projeto do caos.</strong>
          </Text>
        </Stack>
      </section>

      {/* What is Dependency Rule */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconBulb size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              O que é a Dependency Rule?
            </Title>
            <Text size="lg" c="dimmed">
              A Dependency Rule é simples: <strong>dependências só apontam para dentro</strong>. 
              Camadas externas podem depender das internas, mas nunca o contrário.
            </Text>
            
            <Alert color="brand" icon={<IconCheck size={20} />} radius="md">
              <Text size="md" fw={500}>
                <strong>Regra Simples:</strong> Se você está na camada de fora, você pode usar qualquer coisa das camadas de dentro. 
                Se você está na camada de dentro, você NUNCA pode usar nada das camadas de fora.
              </Text>
            </Alert>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Card withBorder p="md" radius="md">
                <Stack gap="md">
                  <ThemeIcon size={50} radius="md" variant="light" color="green" mb="sm">
                    <IconArrowDown size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5">✅ Pode Depender</Title>
                  <Text size="sm" c="dimmed">
                    Camadas externas podem usar camadas internas. UI pode usar services, 
                    services podem usar repositories, etc.
                  </Text>
                </Stack>
              </Card>

              <Card withBorder p="md" radius="md">
                <Stack gap="md">
                  <ThemeIcon size={50} radius="md" variant="light" color="red" mb="sm">
                    <IconX size={25} />
                  </ThemeIcon>
                  <Title order={4} size="h5">❌ Nunca Depender</Title>
                  <Text size="sm" c="dimmed">
                    Camadas internas NUNCA usam camadas externas. Domain não usa UI, 
                    repositories não usam services, etc.
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>
        </Paper>
      </section>

      {/* Why it matters */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconAlertTriangle size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Por que a Dependency Rule é Crucial?
            </Title>
            
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              <Card withBorder p="md" radius="md" ta="center">
                <ThemeIcon size={50} radius="md" variant="light" color="green" mb="sm">
                  <IconShield size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Independência</Title>
                <Text size="sm" c="dimmed">
                  Seu negócio não depende de framework. Troque React por Vue, 
                  troque banco de dados, troque UI - seu core sobrevive.
                </Text>
              </Card>

              <Card withBorder p="md" radius="md" ta="center">
                <ThemeIcon size={50} radius="md" variant="light" color="blue" mb="sm">
                  <IconCode size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Testabilidade</Title>
                <Text size="sm" c="dimmed">
                  Teste cada camada isoladamente. Mocks simples, 
                  testes rápidos, bugs fáceis de encontrar.
                </Text>
              </Card>

              <Card withBorder p="md" radius="md" ta="center">
                <ThemeIcon size={50} radius="md" variant="light" color="orange" mb="sm">
                  <IconStack size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Flexibilidade</Title>
                <Text size="sm" c="dimmed">
                  Mude uma camada sem afetar as outras. 
                  Refatore com segurança, evolua sem medo.
                </Text>
              </Card>
            </SimpleGrid>

            <Alert color="red" icon={<IconAlertTriangle size={20} />} radius="md">
              <Text size="md" fw={500}>
                <strong>Sem Dependency Rule:</strong> Seu projeto vira uma bola de neve. 
                Mude uma coisa, quebre tudo. Teste uma coisa, teste tudo. 
                Refatore uma coisa, refatore tudo. <strong>Isso vira um pesadelo de manutenção.</strong>
              </Text>
            </Alert>
          </Stack>
        </Paper>
      </section>

      {/* Practical Examples */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconCode size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Exemplos Práticos
            </Title>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">✅ Arquitetura Correta</Title>
                <Stack gap="xs">
                  <Text size="sm" fw={500}>UI Layer (React Components)</Text>
                  <IconArrowDown size={16} style={{ marginLeft: '8px' }} />
                  <Text size="sm" fw={500}>Service Layer (Business Logic)</Text>
                  <IconArrowDown size={16} style={{ marginLeft: '8px' }} />
                  <Text size="sm" fw={500}>Repository Layer (Data Access)</Text>
                  <IconArrowDown size={16} style={{ marginLeft: '8px' }} />
                  <Text size="sm" fw={500}>Domain Layer (Entities)</Text>
                </Stack>
                <Alert color="green" icon={<IconCheck size={16} />} radius="md" mt="md">
                  <Text size="xs">Dependências só apontam para baixo</Text>
                </Alert>
              </Card>

              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">❌ Arquitetura Quebrada</Title>
                <Stack gap="xs">
                  <Text size="sm" fw={500}>UI Layer (React Components)</Text>
                  <IconArrowDown size={16} style={{ marginLeft: '8px' }} />
                  <Text size="sm" fw={500}>Service Layer (Business Logic)</Text>
                  <IconArrowUp size={16} style={{ marginLeft: '8px' }} />
                  <Text size="sm" fw={500}>Repository Layer (Data Access)</Text>
                  <IconArrowUp size={16} style={{ marginLeft: '8px' }} />
                  <Text size="sm" fw={500}>Domain Layer (Entities)</Text>
                </Stack>
                <Alert color="red" icon={<IconX size={16} />} radius="md" mt="md">
                  <Text size="xs">Dependências circulares = caos</Text>
                </Alert>
              </Card>
            </SimpleGrid>

            <Divider />

            <Title order={3} mb="md">Código Real</Title>
            
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
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
}`}
                </Code>
              </div>

              <div>
                <Badge color="red" mb="xs">❌ Errado</Badge>
                <Code block>
{`// Domain Layer - NUNCA pode usar UI
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  
  // ❌ QUEBRANDO A REGRA
  render() {
    return <div>{this.name}</div>; // UI no domain!
  }
}

// Repository Layer - NUNCA pode usar Service
function UserRepository() {
  // ❌ QUEBRANDO A REGRA
  const userService = new UserService(); // Service no repository!
  
  async findById(id) {
    return await userService.getUser(id);
  }
}`}
                </Code>
              </div>
            </SimpleGrid>
          </Stack>
        </Paper>
      </section>

      {/* Common Mistakes */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconAlertTriangle size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Armadilhas Comuns
            </Title>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Card withBorder p="md" radius="md">
                <ThemeIcon size={50} radius="md" variant="light" color="red" mb="sm">
                  <IconX size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">UI no Domain</Title>
                <Text size="sm" c="dimmed">
                  Entidades com métodos de renderização. Domain não deve saber sobre React, 
                  Vue ou qualquer framework.
                </Text>
                <Code block mt="md">
{`// ❌ ERRADO
class User {
  render() {
    return <div>{this.name}</div>;
  }
}`}
                </Code>
              </Card>

              <Card withBorder p="md" radius="md">
                <ThemeIcon size={50} radius="md" variant="light" color="red" mb="sm">
                  <IconX size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Service no Repository</Title>
                <Text size="sm" c="dimmed">
                  Repository usando service. Repository deve ser a camada mais baixa 
                  de acesso a dados.
                </Text>
                <Code block mt="md">
{`// ❌ ERRADO
class UserRepository {
  constructor() {
    this.userService = new UserService(); // Service no repo!
  }
}`}
                </Code>
              </Card>

              <Card withBorder p="md" radius="md">
                <ThemeIcon size={50} radius="md" variant="light" color="red" mb="sm">
                  <IconX size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Framework no Domain</Title>
                <Text size="sm" c="dimmed">
                  Domain usando decorators, annotations ou imports de framework. 
                  Domain deve ser puro.
                </Text>
                <Code block mt="md">
{`// ❌ ERRADO
@Entity()
class User {
  @Column()
  name: string;
}`}
                </Code>
              </Card>

              <Card withBorder p="md" radius="md">
                <ThemeIcon size={50} radius="md" variant="light" color="red" mb="sm">
                  <IconX size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Dependências Circulares</Title>
                <Text size="sm" c="dimmed">
                  Service usando UI, UI usando Service. Dependências que apontam 
                  em direções opostas.
                </Text>
                <Code block mt="md">
{`// ❌ ERRADO
// Service usando UI
class UserService {
  showUser(user) {
    return <UserCard user={user} />; // UI no service!
  }
}`}
                </Code>
              </Card>
            </SimpleGrid>
          </Stack>
        </Paper>
      </section>

      {/* How to Apply */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconCheck size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Como Aplicar a Dependency Rule
            </Title>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">1. Defina as Camadas</Title>
                <List size="sm" spacing="xs">
                  <List.Item>UI (React, Vue, Angular)</List.Item>
                  <List.Item>Services (Business Logic)</List.Item>
                  <List.Item>Repositories (Data Access)</List.Item>
                  <List.Item>Domain (Entities, Rules)</List.Item>
                </List>
              </Card>

              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">2. Estabeleça Direção</Title>
                <List size="sm" spacing="xs">
                  <List.Item>Dependências só apontam para baixo</List.Item>
                  <List.Item>UI pode usar Services</List.Item>
                  <List.Item>Services podem usar Repositories</List.Item>
                  <List.Item>Repositories podem usar Domain</List.Item>
                </List>
              </Card>

              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">3. Valide Imports</Title>
                <List size="sm" spacing="xs">
                  <List.Item>Verifique imports em cada arquivo</List.Item>
                  <List.Item>Domain não importa UI</List.Item>
                  <List.Item>Repository não importa Service</List.Item>
                  <List.Item>Use ESLint para detectar</List.Item>
                </List>
              </Card>

              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">4. Teste Isoladamente</Title>
                <List size="sm" spacing="xs">
                  <List.Item>Teste cada camada separadamente</List.Item>
                  <List.Item>Mocks simples para camadas externas</List.Item>
                  <List.Item>Domain deve ser testável sem UI</List.Item>
                  <List.Item>Services devem ser testáveis sem DB</List.Item>
                </List>
              </Card>
            </SimpleGrid>

            <Alert color="brand" icon={<IconBulb size={20} />} radius="md">
              <Text size="md" fw={500}>
                <strong>Dica:</strong> Comece pequeno. Aplique a regra em um módulo, 
                depois expanda. É melhor ter uma parte bem arquitetada do que tudo quebrado.
              </Text>
            </Alert>
          </Stack>
        </Paper>
      </section>

      {/* Benefits */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconShield size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Benefícios de Seguir a Dependency Rule
            </Title>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              <Card withBorder p="md" radius="md" ta="center">
                <ThemeIcon size={50} radius="md" variant="light" color="green" mb="sm">
                  <IconCode size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Testes Rápidos</Title>
                <Text size="sm" c="dimmed">
                  Teste cada camada isoladamente. Mocks simples, 
                  testes que rodam em milissegundos.
                </Text>
              </Card>

              <Card withBorder p="md" radius="md" ta="center">
                <ThemeIcon size={50} radius="md" variant="light" color="blue" mb="sm">
                  <IconStack size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Refatoração Segura</Title>
                <Text size="sm" c="dimmed">
                  Mude uma camada sem afetar as outras. 
                  Troque framework, troque banco, sem medo.
                </Text>
              </Card>

              <Card withBorder p="md" radius="md" ta="center">
                <ThemeIcon size={50} radius="md" variant="light" color="orange" mb="sm">
                  <IconShield size={25} />
                </ThemeIcon>
                <Title order={4} size="h5">Independência</Title>
                <Text size="sm" c="dimmed">
                  Seu negócio não depende de tecnologia. 
                  Troque React por Vue, seu core sobrevive.
                </Text>
              </Card>
            </SimpleGrid>

            <Alert color="green" icon={<IconCheck size={20} />} radius="md">
              <Text size="md" fw={500}>
                <strong>Resultado:</strong> Código que você consegue manter, 
                testar e evoluir sem dor de cabeça. Menos bugs, mais paz, 
                refatoração sem medo.
              </Text>
            </Alert>
          </Stack>
        </Paper>
      </section>

      {/* Summary */}
      <section>
        <Paper withBorder p="xl" radius="lg">
          <Stack gap="lg">
            <Title order={2} mb="sm">
              <IconBulb size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
              Resumo
            </Title>
            
            <Text size="lg" c="dimmed" maw={800}>
              A <strong>Dependency Rule</strong> é a regra mais importante de qualquer arquitetura. 
              Se você ignorar essa regra, nenhuma arquitetura consegue salvar seu projeto do caos.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" w="100%">
              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">✅ Lembre-se</Title>
                <List size="sm" spacing="xs">
                  <List.Item>Dependências só apontam para dentro</List.Item>
                  <List.Item>Camadas externas podem usar internas</List.Item>
                  <List.Item>Camadas internas NUNCA usam externas</List.Item>
                  <List.Item>Teste cada camada isoladamente</List.Item>
                </List>
              </Card>

              <Card withBorder p="md" radius="md">
                <Title order={4} size="h5" mb="md">❌ Evite</Title>
                <List size="sm" spacing="xs">
                  <List.Item>UI no domain</List.Item>
                  <List.Item>Service no repository</List.Item>
                  <List.Item>Framework no domain</List.Item>
                  <List.Item>Dependências circulares</List.Item>
                </List>
              </Card>
            </SimpleGrid>

            <Alert color="brand" icon={<IconShield size={20} />} radius="md" maw={800}>
              <Text size="md" fw={500}>
                <strong>Regra de Ouro:</strong> Se você está na camada de fora, você pode usar qualquer coisa das camadas de dentro. 
                Se você está na camada de dentro, você NUNCA pode usar nada das camadas de fora. 
                <strong>Simples assim.</strong>
              </Text>
            </Alert>
          </Stack>
        </Paper>
      </section>
    </Stack>
  );
}

DependencyRuleGuide.metadata = {
  title: 'Dependency Rule',
  description: 'A regra mais importante de qualquer arquitetura. Se você quebrar essa, nenhuma arquitetura salva seu projeto do caos.',
  category: 'guides'
}; 