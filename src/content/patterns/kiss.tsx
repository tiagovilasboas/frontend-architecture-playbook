import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconBrain } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import codeExamples from '../../utils/code-examples/kiss.json';

function Kiss() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          KISS - Keep It Simple, Stupid
        </Title>
        <Text size="lg" c="dimmed">
          Simplicidade acima de tudo. Se você não consegue explicar seu código para um dev júnior, 
          você está fazendo algo errado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBrain size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Princípio que prioriza simplicidade sobre complexidade</Text>
            </div>
          </Group>
          
          <Text>
            KISS significa <strong>"Keep It Simple, Stupid"</strong>. É sobre escrever código que qualquer dev 
            consegue entender na primeira leitura.
          </Text>
          
          <Text>
            Pensa assim: se você precisa de 3 páginas para explicar como uma função funciona, 
            você está violando KISS. Se um dev júnior não entende seu código, você está violando KISS.
          </Text>
          
          <Text>
            A regra é clara: <em>se há uma forma mais simples de fazer, use a forma mais simples</em>.
          </Text>
        </Stack>
      </Paper>

      {/* Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos
        </Title>
        
        <Stack gap="md">
          {codeExamples.map((ex, idx) => (
            <Card withBorder p="md" key={ex.title} w="100%" style={{ minWidth: 0, width: '100%' }}>
              <Group w="100%" style={{ minWidth: 0, width: '100%' }}>
                <Badge size="lg" variant="light" color={['red','green'][idx] || 'gray'}>{idx === 0 ? '❌' : '✅'}</Badge>
                <div style={{ flex: 1, width: '100%' }}>
                  <Title order={4}>{ex.title}</Title>
                  <Text size="sm" c="dimmed">{ex.description}</Text>
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
          <IconCheck size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Por que vale a pena?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Legibilidade</Title>
                <Text size="sm">
                  Código que qualquer dev entende na primeira leitura. Menos tempo debugando.
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
                <Title order={4}>Manutenibilidade</Title>
                <Text size="sm">
                  Mudanças mais fáceis, menos bugs, menos tempo refatorando.
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
                <Title order={4}>Onboarding</Title>
                <Text size="sm">
                  Novos devs no time entendem o código rapidamente. Menos tempo treinando.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando aplicar?
        </Title>
        
        <Stack gap="md">
          <Alert color="green" icon={<IconCheck size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>✅ Sempre aplique:</Text>
            <List size="sm" c="dimmed">
              <List.Item>Nomes de variáveis e funções</List.Item>
              <List.Item>Lógica de negócio</List.Item>
              <List.Item>Estrutura de dados</List.Item>
              <List.Item>Fluxo de controle</List.Item>
              <List.Item>Configurações e constantes</List.Item>
            </List>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>⚠️ Cuidado com:</Text>
            <List size="sm" c="dimmed">
              <List.Item>Oversimplificação (perder funcionalidade)</List.Item>
              <List.Item>Nomes muito genéricos</List.Item>
              <List.Item>Ignorar casos edge importantes</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Pitfalls */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas Comuns
        </Title>
        
        <Stack gap="md">
          {codeExamples.slice(2).map((ex) => (
            <Card withBorder p="md" key={ex.title} w="100%" style={{ minWidth: 0, width: '100%' }}>
              <Title order={4} mb="sm">{ex.title}</Title>
              <Text size="sm" mb="md">{ex.description}</Text>
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
            KISS é sobre simplicidade, não sobre perder funcionalidade. 
            Se você não consegue explicar seu código para um dev júnior, simplifique.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se há uma forma mais simples de fazer, use a forma mais simples. 
            Mas não perca funcionalidade no processo.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

Kiss.metadata = {
  title: 'KISS - Keep It Simple, Stupid',
  description: 'Simplicidade acima de tudo. Se você não consegue explicar seu código para um dev júnior, você está fazendo algo errado.'
};

export default Kiss; 