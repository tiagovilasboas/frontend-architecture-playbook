import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, SimpleGrid } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconStack } from '@tabler/icons-react';

export default function CleanCode() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="md">
          <Group gap="sm">
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconCode size={30} />
            </ThemeIcon>
            <div>
              <Title order={1} size="h2">Clean Code</Title>
              <Text c="dimmed" size="lg">Código legível e manutenível</Text>
            </div>
          </Group>
          
          <Text size="lg" lh={1.6}>
            Clean Code não é sobre escrever código perfeito. É sobre escrever código que <strong>outros devs conseguem entender e manter</strong> sem enlouquecer. 
            Se você precisa explicar seu código para funcionar, você já perdeu.
          </Text>
        </Stack>
      </Paper>

      {/* O que é? */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconBulb size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            O que é Clean Code?
          </Title>
          
          <Text size="lg" lh={1.6}>
            Clean Code é código que:
          </Text>
          
          <List size="lg" spacing="md">
            <List.Item>
              <Text fw={600}>Lê como uma história</Text>
              <Text c="dimmed">Nomes descritivos, funções pequenas, lógica clara</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>Não precisa de comentários</Text>
              <Text c="dimmed">O código se explica sozinho</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>É fácil de testar</Text>
              <Text c="dimmed">Funções puras, sem efeitos colaterais</Text>
            </List.Item>
            <List.Item>
              <Text fw={600}>É fácil de modificar</Text>
              <Text c="dimmed">Mudanças não quebram outras partes</Text>
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
                  <Text fw={700} size="lg">❌ Código Sujo</Text>
                </Group>
                <Code block>
{`function x(a, b) {
  let c = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] > b) c++;
  }
  return c;
}`}
                </Code>
                <Text size="sm" c="dimmed">
                  O que essa função faz? Ninguém sabe. Nomes ruins, lógica confusa.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="md">
                <Group gap="sm">
                  <ThemeIcon size={40} radius="md" variant="light" color="green">
                    <IconCheck size={20} />
                  </ThemeIcon>
                  <Text fw={700} size="lg">✅ Código Limpo</Text>
                </Group>
                <Code block>
{`function countUsersAboveAge(users, minimumAge) {
  return users.filter(user => user.age > minimumAge).length;
}`}
                </Code>
                <Text size="sm" c="dimmed">
                  Nome descritivo, lógica clara, fácil de entender.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Paper>

      {/* Princípios */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={2} size="h3">
            <IconStack size={24} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Princípios do Clean Code
          </Title>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Nomes Descritivos</Text>
                <Text size="sm" c="dimmed">
                  <Code>getUserById</Code> é melhor que <Code>getUser</Code>
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Funções Pequenas</Text>
                <Text size="sm" c="dimmed">
                  Uma função, uma responsabilidade. Máximo 20 linhas.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Sem Comentários</Text>
                <Text size="sm" c="dimmed">
                  O código deve se explicar sozinho.
                </Text>
              </Stack>
            </Card>

            <Card withBorder p="lg" radius="md">
              <Stack gap="sm">
                <Text fw={700} size="lg">Tratamento de Erros</Text>
                <Text size="sm" c="dimmed">
                  Use try/catch ou Result types, não ignore erros.
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
            <Text size="lg" fw={600}>Over-engineering</Text>
            <Text size="md">
              Não torne simples em complexo. Clean Code é sobre simplicidade, não sobre mostrar que você é inteligente.
            </Text>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Nomes muito longos</Text>
            <Text size="md">
              <Code>getUserByIdAndIncludeProfileAndPreferences</Code> é exagero. 
              <Code>getUserWithProfile</Code> é suficiente.
            </Text>
          </Alert>

          <Alert color="yellow" icon={<IconAlertTriangle size={20} />}>
            <Text size="lg" fw={600}>Ignorar performance</Text>
            <Text size="md">
              Clean Code não significa código lento. Otimize quando necessário, mas mantenha legível.
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
            <strong>Clean Code é sobre empatia.</strong> Escreva para outros devs, não para você mesmo. 
            Se você não conseguir explicar seu código em 30 segundos, ele não está limpo.
          </Text>

          <Alert color="green" icon={<IconBulb size={20} />}>
            <Text size="md" fw={600}>
              <strong>Regra de ouro:</strong> Se você voltar ao código depois de 6 meses e não entender, 
              ele não está limpo. Se outro dev não entende, ele não está limpo.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
} 