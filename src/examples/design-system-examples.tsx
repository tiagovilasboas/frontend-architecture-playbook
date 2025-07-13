import { Title, Text, Stack, Paper, Code, Alert, Badge, Group } from '@mantine/core';
import { 
  IconBulb, 
  IconCheck, 
  IconCode, 
  IconShield
} from '@tabler/icons-react';
import { FeatureCard } from '../components/ui';
import { IconRocket } from '@tabler/icons-react';

export function DesignSystemExamples() {
  return (
    <Stack gap="xl">
      <Title order={2} mb="lg">
        <IconBulb size={32} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Exemplos do Design System
      </Title>

      {/* Before vs After */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Antes vs Depois - Reduzindo Repetição</Title>
          
          <Group>
            <div>
              <Badge color="red" mb="xs">❌ Código Repetitivo</Badge>
              <Code block>
{`// ❌ ANTES - Muito repetitivo
<Card withBorder p="md" radius="md" ta="center">
  <ThemeIcon size={50} radius="md" variant="light" color="green" mb="sm">
    <IconCheck size={25} />
  </ThemeIcon>
  <Title order={4} size="h5">Evita Refatoração</Title>
  <Text size="sm" c="dimmed">
    Escolha a arquitetura certa desde o início.
  </Text>
</Card>

<Card withBorder p="md" radius="md" ta="center">
  <ThemeIcon size={50} radius="md" variant="light" color="blue" mb="sm">
    <IconRocket size={25} />
  </ThemeIcon>
  <Title order={4} size="h5">Decisões Sólidas</Title>
  <Text size="sm" c="dimmed">
    Base para justificar escolhas arquiteturais.
  </Text>
</Card>

<Card withBorder p="md" radius="md" ta="center">
  <ThemeIcon size={50} radius="md" variant="light" color="orange" mb="sm">
    <IconBolt size={25} />
  </ThemeIcon>
  <Title order={4} size="h5">Experiência Real</Title>
  <Text size="sm" c="dimmed">
    18 anos de front-end convertidos em decisões.
  </Text>
</Card>`}
              </Code>
            </div>

            <div>
              <Badge color="green" mb="xs">✅ Design System</Badge>
              <Code block>
{`// ✅ DEPOIS - Limpo e reutilizável
<FeatureCard 
  icon={IconCheck}
  title="Evita Refatoração"
  description="Escolha a arquitetura certa desde o início."
  color="green"
/>

<FeatureCard 
  icon={IconRocket}
  title="Decisões Sólidas"
  description="Base para justificar escolhas arquiteturais."
  color="brand"
/>

<FeatureCard 
  icon={IconBolt}
  title="Experiência Real"
  description="18 anos de front-end convertidos em decisões."
  color="orange"
/>`}
              </Code>
            </div>
          </Group>

          <Alert color="brand" icon={<IconBulb size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Redução de 70% no código:</strong> Menos repetição, mais consistência, 
              fácil manutenção.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Theme Configuration */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Configuração do Tema</Title>
          
          <div>
            <Badge color="green" mb="xs">✅ Tema Centralizado</Badge>
            <Code block>
{`// src/theme.ts - Configuração centralizada
export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [/* escala de cinzas neutros */],
    accent: [/* cores de destaque */],
  },
  components: {
    Paper: {
      defaultProps: {
        withBorder: true,
        p: 'xl',
        radius: 'lg',
      },
    },
    Card: {
      defaultProps: {
        withBorder: true,
        p: 'md',
        radius: 'md',
      },
    },
    ThemeIcon: {
      defaultProps: {
        variant: 'light',
        size: 'md',
        radius: 'md',
      },
    },
    Badge: {
      defaultProps: {
        variant: 'light',
      },
    },
    Title: {
      styles: {
        root: {
          '&[data-order="1"]': {
            background: 'linear-gradient(...)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        },
      },
    },
  },
});`}
            </Code>
          </div>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Benefícios:</strong> Configuração centralizada, adaptação automática ao tema, 
              consistência visual em todo o projeto.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Component Examples */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Componentes Reutilizáveis</Title>
          
          <Group>
            <FeatureCard 
              icon={IconRocket}
              title="HeroTitle"
              description="Título com gradiente automático"
              color="brand"
            />
            <FeatureCard 
              icon={IconCode}
              title="FeatureCard"
              description="Cards de features com ícones"
              color="green"
            />
            <FeatureCard 
              icon={IconShield}
              title="StatsCard"
              description="Cards de estatísticas"
              color="orange"
            />
          </Group>

          <div>
            <Badge color="green" mb="xs">✅ Implementação dos Componentes</Badge>
            <Code block>
{`// src/components/ui/HeroTitle.tsx
export function HeroTitle({ children, ...props }) {
  return (
    <Title order={1} fw={800} size="3.5rem" mb="md" {...props}>
      {children}
    </Title>
  );
}

// src/components/ui/FeatureCard.tsx
export function FeatureCard({ icon: Icon, title, description, color = 'brand', ...props }) {
  return (
    <Card withBorder p="md" radius="md" ta="center" {...props}>
      <ThemeIcon size={50} radius="md" variant="light" color={color} mb="sm">
        <Icon size={25} />
      </ThemeIcon>
      <Title order={4} size="h5">{title}</Title>
      <Text size="sm" c="dimmed">{description}</Text>
    </Card>
  );
}

// src/components/ui/StatsCard.tsx
export function StatsCard({ icon: Icon, value, label, color = 'brand', ...props }) {
  return (
    <Card withBorder p="md" radius="md" ta="center" {...props}>
      <ThemeIcon size={50} radius="md" variant="light" color={color} mb="sm">
        <Icon size={25} />
      </ThemeIcon>
      <Title order={3} size="h4">{value}</Title>
      <Text size="sm" c="dimmed">{label}</Text>
    </Card>
  );
}`}
            </Code>
          </div>
        </Stack>
      </Paper>

      {/* Dark Mode Benefits */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">Benefícios do Dark Mode</Title>
          
          <Group>
            <div>
              <Badge color="red" mb="xs">❌ Cores Fixas</Badge>
              <Code block>
{`// ❌ PROBLEMÁTICO
<Paper style={{ 
  background: 'linear-gradient(135deg, #f0f0f0, #ffffff)' 
}}>
  Conteúdo
</Paper>

<Card style={{ background: 'white' }}>
  Conteúdo
</Card>

<Text style={{ color: 'black' }}>
  Texto
</Text>`}
              </Code>
            </div>

            <div>
              <Badge color="green" mb="xs">✅ Design System</Badge>
              <Code block>
{`// ✅ FUNCIONA EM AMBOS OS TEMAS
<Paper withBorder>
  Conteúdo
</Paper>

<Card withBorder>
  Conteúdo
</Card>

<Text c="dimmed">
  Texto
</Text>

// Gradiente automático no tema
Title: {
  styles: {
    root: {
      '&[data-order="1"]': {
        background: 'linear-gradient(135deg, var(--mantine-color-brand-6), var(--mantine-color-accent-6))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
}`}
              </Code>
            </div>
          </Group>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Resultado:</strong> Adaptação automática ao tema, sem cores fixas, 
              experiência consistente em light/dark mode.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
} 