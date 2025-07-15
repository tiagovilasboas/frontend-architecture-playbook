import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, SimpleGrid } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconStack } from '@tabler/icons-react';

export default function SRP() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="md">
          <Group gap="sm">
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconCode size={30} />
            </ThemeIcon>
            <div>
              <Title order={1} size="h2">Single Responsibility Principle</Title>
              <Text c="dimmed" size="lg">Uma classe, uma responsabilidade</Text>
            </div>
          </Group>
          
          <Text size="lg" lh={1.6}>
            SRP é simples: <strong>uma classe deve ter apenas um motivo para mudar.</strong> 
            Se você precisa alterar uma classe por múltiplas razões, ela está fazendo demais.
          </Text>
        </Stack>
      </Paper>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconBulb size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            O que é SRP?
          </Title>
          
          <Text size="lg" lh={1.6}>
            Uma classe deve ter apenas <strong>uma responsabilidade</strong>, ou seja, apenas um motivo para ser modificada.
          </Text>
          
          <List size="lg" spacing="md">
            <List.Item>
              <Text fw={600}>Responsabilidade única</Text>
              <Text c="dimmed">Uma classe faz uma coisa e faz bem</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Mudanças isoladas</Text>
              <Text c="dimmed">Alterar uma funcionalidade não afeta outras</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Testes focados</Text>
              <Text c="dimmed">Cada classe tem seus testes específicos</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Reutilização</Text>
              <Text c="dimmed">Classes pequenas são mais fáceis de reutilizar</Text>
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
                  <Text fw={700} size="lg">❌ Violando SRP</Text>
                </Group>
                <Code block>
{`function processUser(user) {
  if (!validateUser(user)) throw new Error('Invalid');
  saveUser(user);
  sendWelcomeEmail(user);
  logUserCreation(user);
}
`}
                </Code>
                <Text size="sm" c="dimmed">
                  Função faz tudo: valida, salva, envia e-mail e loga. Difícil de testar, manter e reutilizar.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="md">
                <Group gap="sm">
                  <ThemeIcon size={40} radius="md" variant="light" color="green">
                    <IconCheck size={20} />
                  </ThemeIcon>
                  <Text fw={700} size="lg">✅ Seguindo SRP</Text>
                </Group>
                <Code block>
{`function validateUser(user) {
  // ...
}
function saveUser(user) {
  // ...
}
function sendWelcomeEmail(user) {
  // ...
}
function logUserCreation(user) {
  // ...
}

function processUser(user) {
  if (!validateUser(user)) throw new Error('Invalid');
  saveUser(user);
  sendWelcomeEmail(user);
  logUserCreation(user);
}
`}
                </Code>
                <Text size="sm" c="dimmed">
                  Cada função tem uma responsabilidade. O fluxo principal só orquestra.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Como Identificar */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconStack size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Como Identificar Violações
          </Title>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Múltiplos "e"</Text>
                <Text size="sm" c="dimmed">
                  "Essa classe salva usuários E envia emails E valida dados"
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Métodos não relacionados</Text>
                <Text size="sm" c="dimmed">
                  Uma classe com métodos de domínios diferentes
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Mudanças frequentes</Text>
                <Text size="sm" c="dimmed">
                  A classe muda por motivos diferentes
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Testes complexos</Text>
                <Text size="sm" c="dimmed">
                  Precisa mockar muitas dependências
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
            <Text size="lg" fw={600}>Classes anêmicas</Text>
            <Text size="md">
              Não quebre demais. Uma classe com apenas getters/setters não tem valor.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Over-engineering</Text>
            <Text size="md">
              Não crie classes desnecessárias. SRP não significa "uma classe por método".
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Ignorar contexto</Text>
            <Text size="md">
              O que é "uma responsabilidade" depende do contexto do seu projeto.
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
            <strong>SRP é sobre coesão.</strong> Mantenha classes focadas em uma coisa. 
            Se você precisa explicar o que uma classe faz com "e", ela provavelmente viola SRP.
          </Text>

          <Alert color="green" icon={<IconBulb size={20} />}>
            <Text size="md" fw={600}>
              <strong>Regra prática:</strong> Se você mudar uma funcionalidade e precisar alterar 
              múltiplas partes da mesma classe, ela viola SRP.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
} 