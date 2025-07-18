import {
  Title,
  Text,
  Stack,
  Paper,
  Alert,
  List,
  ThemeIcon,
  Group,
  Card,
  Badge,
} from '@mantine/core';
import {
  IconBulb,
  IconAlertTriangle,
  IconCheck,
  IconCode,
  IconDatabase,
} from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import codeExamples from '../../utils/code-examples/repository-pattern.json';

function RepositoryPattern() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Repository Pattern
        </Title>
        <Text size="lg" c="dimmed">
          Abstração da camada de dados. Seu código de negócio não precisa saber
          se os dados vêm de uma API, banco local ou arquivo JSON.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconDatabase size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Padrão que abstrai o acesso aos dados</Text>
            </div>
          </Group>

          <Text>
            Repository Pattern é sobre{' '}
            <strong>separar a lógica de acesso aos dados</strong> da lógica de
            negócio. Seu código não precisa saber se os dados vêm de uma API,
            banco local ou arquivo JSON.
          </Text>

          <Text>
            Pensa assim: se você precisa trocar de API (REST para GraphQL) ou de
            banco (SQLite para PostgreSQL), você só muda o Repository. O resto
            do código continua igual.
          </Text>

          <Text>
            A regra é clara:{' '}
            <em>
              seu código de negócio não pode depender de como os dados são
              armazenados
            </em>
            .
          </Text>
        </Stack>
      </Paper>

      {/* Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Exemplos Práticos
        </Title>

        <Stack gap="md">
          {codeExamples.map((ex, idx) => (
            <Card
              withBorder
              p="md"
              key={ex.title}
              w="100%"
              style={{ minWidth: 0, width: '100%' }}
            >
              <Group w="100%" style={{ minWidth: 0, width: '100%' }}>
                <Badge
                  size="lg"
                  variant="light"
                  color={['red', 'green'][idx] || 'gray'}
                >
                  {idx === 0 ? '❌' : '✅'}
                </Badge>
                <div style={{ flex: 1, width: '100%' }}>
                  <Title order={4}>{ex.title}</Title>
                  <Text size="sm" c="dimmed">
                    {ex.description}
                  </Text>
                  <CodeExample title={ex.title} code={ex.code} />
                </div>
              </Group>
            </Card>
          ))}
        </Stack>
      </div>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Por que vale a pena?
        </Title>

        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Independência de Dados</Title>
                <Text size="sm">
                  Troque API, banco ou fonte de dados sem afetar a lógica de
                  negócio.
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
                <Title order={4}>Testabilidade</Title>
                <Text size="sm">
                  Mocke o Repository para testar sua lógica sem depender de
                  dados reais.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="orange">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Flexibilidade</Title>
                <Text size="sm">
                  Use diferentes fontes de dados (API, cache, local) sem mudar o
                  código.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Quando usar?
        </Title>

        <Stack gap="md">
          <Alert color="green" icon={<IconCheck size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ✅ Use quando:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>
                Precisa trocar fonte de dados (API → banco local)
              </List.Item>
              <List.Item>Quer testar lógica sem dados reais</List.Item>
              <List.Item>Usa múltiplas fontes de dados</List.Item>
              <List.Item>Precisa de cache ou fallback</List.Item>
              <List.Item>Quer separar responsabilidades</List.Item>
            </List>
          </Alert>

          <Alert color="red" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>
              ❌ Evite quando:
            </Text>
            <List size="sm" c="dimmed">
              <List.Item>Projeto pequeno/MVP (over-engineering)</List.Item>
              <List.Item>Só uma fonte de dados simples</List.Item>
              <List.Item>Protótipo rápido</List.Item>
              <List.Item>CRUD básico sem lógica complexa</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Pitfalls */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle
            size={28}
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
          />
          Armadilhas Comuns
        </Title>

        <Stack gap="md">
          {codeExamples.slice(2).map(ex => (
            <Card
              withBorder
              p="md"
              key={ex.title}
              w="100%"
              style={{ minWidth: 0, width: '100%' }}
            >
              <Title order={4} mb="sm">
                {ex.title}
              </Title>
              <Text size="sm" mb="md">
                {ex.description}
              </Text>
              <CodeExample title={ex.title} code={ex.code} />
            </Card>
          ))}
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Title order={3}>Resumo</Title>
          <Text>
            Repository Pattern é sobre abstrair o acesso aos dados. Seu código
            de negócio não deve saber como os dados são armazenados ou
            recuperados.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se você precisa mudar a fonte de
            dados, só deve precisar trocar o Repository. O resto do código
            continua igual.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

RepositoryPattern.metadata = {
  title: 'Repository Pattern',
  description:
    'Abstração da camada de dados. Seu código de negócio não precisa saber se os dados vêm de uma API, banco local ou arquivo JSON.',
};

export default RepositoryPattern;
