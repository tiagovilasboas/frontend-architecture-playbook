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
  IconBulb,
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
  relatedActions?: Array<{
    title: string;
    description: string;
    path: string;
    icon: React.ReactNode;
    color: string;
  }>;
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

const getRelatedActions = (currentGuide: string) => {
  const allActions = [
    {
      title: 'Dependency Rule',
      description: 'Regra fundamental',
      path: '/guides/dependency-rule',
      icon: <IconBulb size={16} />,
      color: 'blue',
    },
    {
      title: 'Decision Wizard',
      description: 'Escolha sua arquitetura',
      path: '/guides/how-to-choose',
      icon: <IconTarget size={16} />,
      color: 'green',
    },
    {
      title: 'Comparação',
      description: 'Análise detalhada',
      path: '/guides/architecture-comparison',
      icon: <IconScale size={16} />,
      color: 'orange',
    },
    {
      title: 'Casos Reais',
      description: 'Prova de ROI',
      path: '/guides/cases',
      icon: <IconTrendingUp size={16} />,
      color: 'purple',
    },
  ];

  return allActions.filter(action => action.path !== `/guides/${currentGuide}`);
};

export const GuideCTA: React.FC<GuideCTAProps> = ({
  currentGuide,
  nextAction,
  relatedActions,
}) => {
  const defaultNextAction = getNextAction(currentGuide);
  const defaultRelatedActions = getRelatedActions(currentGuide);

  const finalNextAction = nextAction || defaultNextAction;
  const finalRelatedActions = relatedActions || defaultRelatedActions;

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

        {finalNextAction && (
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
        )}

        <div>
          <Text size="sm" fw={600} mb="md">
            Outras opções:
          </Text>
          <Group gap="sm">
            {finalRelatedActions.map(action => (
              <Button
                key={action.path}
                component={Link}
                to={action.path}
                variant="light"
                leftSection={action.icon}
                size="sm"
              >
                {action.title}
              </Button>
            ))}
          </Group>
        </div>
      </Stack>
    </Paper>
  );
};

export default GuideCTA;
