import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, SimpleGrid } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconStack } from '@tabler/icons-react';

export default function SOC() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="md">
          <Group gap="sm">
            <ThemeIcon size={50} radius="md" variant="light" color="purple">
              <IconCode size={30} />
            </ThemeIcon>
            <div>
              <Title order={1} size="h2">Separation of Concerns</Title>
              <Text c="dimmed" size="lg">Separe responsabilidades claramente</Text>
            </div>
          </Group>
          
          <Text size="lg" lh={1.6}>
            SOC é sobre <strong>organização mental.</strong> Cada parte do seu código deve ter uma preocupação específica. 
            Se você mistura lógica de negócio com UI, está violando SOC.
          </Text>
        </Stack>
      </Paper>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconBulb size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            O que é SOC?
          </Title>
          
          <Text size="lg" lh={1.6}>
            Separation of Concerns é o princípio de <strong>separar diferentes responsabilidades</strong> em módulos distintos. 
            Cada módulo deve se preocupar com apenas um aspecto do sistema.
          </Text>
          
          <List size="lg" spacing="md">
            <List.Item>
              <Text fw={600}>UI separada da lógica</Text>
              <Text c="dimmed">Componentes não fazem cálculos complexos</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Dados separados da apresentação</Text>
              <Text c="dimmed">Modelos não sabem como são exibidos</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Configuração separada do código</Text>
              <Text c="dimmed">Ambiente, URLs, chaves em arquivos separados</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Testes separados da implementação</Text>
              <Text c="dimmed">Testes não dependem de detalhes internos</Text>
            </List.Item>
          </List>
        </Stack>
      </Paper>

      {/* Exemplos Práticos */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconCode size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Exemplos Práticos
          </Title>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="lg" radius="md">
              <Stack gap="md">
                <Group gap="sm">
                  <ThemeIcon size={40} radius="md" variant="light" color="red">
                    <IconAlertTriangle size={20} />
                  </ThemeIcon>
                  <Text fw={700} size="lg">❌ Violando SOC</Text>
                </Group>
                <Code block>
{`function UserCard({ user }) {
  const [data, setData] = useState(null);
  
  // UI fazendo lógica de negócio
  const calculateDiscount = (price) => {
    if (user.type === 'premium') return price * 0.2;
    if (user.type === 'vip') return price * 0.3;
    return 0;
  };
  
  // UI fazendo chamada de API
  useEffect(() => {
    fetch('/api/users/' + user.id)
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{/* renderização */}</div>;
}`}
                </Code>
                <Text size="sm" c="dimmed">
                  Componente misturando UI, lógica de negócio e chamadas de API.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="md">
                <Group gap="sm">
                  <ThemeIcon size={40} radius="md" variant="light" color="green">
                    <IconCheck size={20} />
                  </ThemeIcon>
                  <Text fw={700} size="lg">✅ Seguindo SOC</Text>
                </Group>
                <Code block>
{`// Lógica de negócio separada
const calculateDiscount = (user, price) => {
  if (user.type === 'premium') return price * 0.2;
  if (user.type === 'vip') return price * 0.3;
  return 0;
};

// Serviço de API separado
const userService = {
  getUser: (id) => fetch('/api/users/' + id).then(r => r.json())
};

// Componente só com UI
function UserCard({ user, discount }) {
  return <div>{/* só renderização */}</div>;
}`}
                </Code>
                <Text size="sm" c="dimmed">
                  Cada parte com sua responsabilidade específica.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Camadas Típicas */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconStack size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Camadas Típicas
          </Title>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Presentation Layer</Text>
                <Text size="sm" c="dimmed">
                  UI, componentes, formulários, validação visual
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Business Logic</Text>
                <Text size="sm" c="dimmed">
                  Regras de negócio, cálculos, validações
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Data Access</Text>
                <Text size="sm" c="dimmed">
                  APIs, banco de dados, cache
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Infrastructure</Text>
                <Text size="sm" c="dimmed">
                  Configuração, logging, segurança
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Armadilhas */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconAlertTriangle size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Armadilhas Comuns
          </Title>

          <Alert color="red" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Fat Controllers</Text>
            <Text size="md">
              Controllers que fazem tudo: validação, lógica de negócio, formatação de resposta.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Smart UI</Text>
            <Text size="md">
              Componentes que sabem demais sobre dados e fazem lógica de negócio.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Dependency Hell</Text>
            <Text size="md">
              Módulos que dependem de tudo, criando acoplamento excessivo.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="md">
          <Title order={2} size="h3">
            <IconCheck size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Resumo
          </Title>
          
          <Text size="lg" lh={1.6}>
            <strong>SOC é sobre organização.</strong> Cada parte do seu código deve ter uma preocupação específica. 
            Se você não consegue explicar o que um módulo faz em uma frase, ele provavelmente viola SOC.
          </Text>

          <Alert color="green" icon={<IconBulb size={20} />}>
            <Text size="md" fw={600}>
              <strong>Regra prática:</strong> Se você mudar uma funcionalidade e precisar alterar 
              múltiplas camadas do sistema, você provavelmente violou SOC.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
} 