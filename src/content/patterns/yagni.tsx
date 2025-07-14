import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconClock } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';
import codeExamples from '../../utils/code-examples/yagni.json';

function Yagni() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          YAGNI - You Aren't Gonna Need It
        </Title>
        <Text size="lg" c="dimmed">
          Não implemente features futuras. Se você não precisa hoje, não implemente hoje. 
          O futuro é incerto, o presente é real.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconClock size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Princípio que evita implementar features futuras</Text>
            </div>
          </Group>
          
          <Text>
            YAGNI significa <strong>"You Aren't Gonna Need It"</strong>. É sobre não implementar 
            funcionalidades que você <em>acha</em> que vai precisar no futuro.
          </Text>
          
          <Text>
            Pensa assim: se você implementa uma feature que não está sendo usada hoje, 
            você está gastando tempo e criando complexidade desnecessária. E quando você 
            realmente precisar, os requisitos já mudaram.
          </Text>
          
          <Text>
            A regra é clara: <em>implemente apenas o que você precisa hoje</em>. 
            O futuro vai cuidar de si mesmo.
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
                <Title order={4}>Velocidade</Title>
                <Text size="sm">
                  Menos código para escrever, testar e manter. Entregas mais rápidas.
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
                <Title order={4}>Simplicidade</Title>
                <Text size="sm">
                  Código mais simples, menos bugs, menos complexidade para entender.
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
                  Quando precisar da feature, implemente com os requisitos reais, não imaginários.
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
              <List.Item>Features que \"podem ser úteis no futuro\"</List.Item>
              <List.Item>Abstrações \"genéricas\" para casos futuros</List.Item>
              <List.Item>Configurações para cenários hipotéticos</List.Item>
              <List.Item>Validações para dados que não existem</List.Item>
              <List.Item>Interfaces para APIs que não foram definidas</List.Item>
            </List>
          </Alert>

          <Alert color="orange" icon={<IconAlertTriangle size={16} />} radius="md">
            <Text size="sm" fw={600} mb={4}>⚠️ Cuidado com:</Text>
            <List size="sm" c="dimmed">
              <List.Item>Ignorar requisitos reais do presente</List.Item>
              <List.Item>Não planejar arquitetura básica</List.Item>
              <List.Item>Deixar código desorganizado</List.Item>
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
            YAGNI é sobre foco no presente. Implemente apenas o que você precisa hoje. 
            O futuro vai trazer requisitos reais, não imaginários.
          </Text>
          <Text>
            <strong>Regra de ouro:</strong> Se você não tem um requisito real hoje, 
            não implemente. Quando precisar, implemente com os requisitos reais.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

Yagni.metadata = {
  title: 'YAGNI - You Aren\'t Gonna Need It',
  description: 'Não implemente features futuras. Se você não precisa hoje, não implemente hoje. O futuro é incerto, o presente é real.'
};

export default Yagni; 