import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Stack,
  Title,
  Text,
  Button,
  Group,
  ThemeIcon,
} from '@mantine/core';
import {
  IconArrowRight,
  IconRocket,
  IconTarget,
  IconScale,
  IconTrendingUp,
} from '@tabler/icons-react';

interface GuideCTAProps {
  currentGuide: string;
  nextAction?: {
    title: string;
    description: string;
    path: string;
    icon: React.ReactNode;
    color: string;
  };
}

const getNextAction = (currentGuide: string) => {
  switch (currentGuide) {
    case 'dependency-rule':
      return {
        title: 'Decision Wizard',
        description: 'Descubra qual arquitetura faz sentido para você',
        path: '/guides/how-to-choose',
        icon: <IconTarget size={16} />,
        color: 'blue',
      };
    case 'how-to-choose':
      return {
        title: 'Comparação Detalhada',
        description: 'Analise métricas e trade-offs das arquiteturas',
        path: '/guides/architecture-comparison',
        icon: <IconScale size={16} />,
        color: 'green',
      };
    case 'architecture-comparison':
      return {
        title: 'Casos Reais',
        description: 'Veja como empresas resolveram problemas reais',
        path: '/guides/cases',
        icon: <IconTrendingUp size={16} />,
        color: 'orange',
      };
    case 'cases':
      return {
        title: 'Implementar',
        description: 'Escolha uma arquitetura e comece a implementar',
        path: '/patterns/clean-architecture',
        icon: <IconRocket size={16} />,
        color: 'purple',
      };
    default:
      return null;
  }
};

export const GuideCTA: React.FC<GuideCTAProps> = ({
  currentGuide,
  nextAction,
}) => {
  const defaultNextAction = getNextAction(currentGuide);
  const finalNextAction = nextAction || defaultNextAction;

  if (!finalNextAction) {
    return null;
  }

  return (
    <Paper withBorder p="xl" radius="lg">
      <Stack gap="lg">
        <Stack align="center" ta="center">
          <Title order={2} mb="sm">
            Próximo Passo
          </Title>
          <Text c="dimmed" maw={600}>
            Continue sua jornada de arquitetura front-end
          </Text>
        </Stack>

        <Paper withBorder p="md" radius="md">
          <Stack gap="md">
            <Group>
              <ThemeIcon
                size={40}
                radius="md"
                variant="light"
                color={
                  finalNextAction.color as
                    | 'blue'
                    | 'green'
                    | 'orange'
                    | 'purple'
                }
              >
                {finalNextAction.icon}
              </ThemeIcon>
              <div>
                <Title order={4}>{finalNextAction.title}</Title>
                <Text size="sm" c="dimmed">
                  {finalNextAction.description}
                </Text>
              </div>
            </Group>
            <Button
              component={Link}
              to={finalNextAction.path}
              variant="filled"
              rightSection={<IconArrowRight size={16} />}
              fullWidth
            >
              Continuar para {finalNextAction.title}
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default GuideCTA;
