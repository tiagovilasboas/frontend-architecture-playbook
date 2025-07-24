import React from 'react';
import { Link } from 'react-router-dom';
import { Group, Button, Text, Badge, Stack, Paper } from '@mantine/core';
import {
  IconArrowLeft,
  IconBulb,
  IconTarget,
  IconScale,
  IconTrendingUp,
} from '@tabler/icons-react';

interface GuideNavigationProps {
  currentGuide: string;
}

const guides = [
  {
    id: 'dependency-rule',
    title: 'Dependency Rule',
    description: 'Regra fundamental',
    icon: <IconBulb size={16} />,
    path: '/guides/dependency-rule',
  },
  {
    id: 'how-to-choose',
    title: 'Decision Wizard',
    description: 'Escolha sua arquitetura',
    icon: <IconTarget size={16} />,
    path: '/guides/how-to-choose',
  },
  {
    id: 'architecture-comparison',
    title: 'Comparação',
    description: 'Análise detalhada',
    icon: <IconScale size={16} />,
    path: '/guides/architecture-comparison',
  },
  {
    id: 'cases',
    title: 'Casos Reais',
    description: 'Prova de ROI',
    icon: <IconTrendingUp size={16} />,
    path: '/guides/cases',
  },
];

export const GuideNavigation: React.FC<GuideNavigationProps> = ({
  currentGuide,
}) => {
  const currentIndex = guides.findIndex(guide => guide.id === currentGuide);
  const currentGuideData = guides[currentIndex];
  const prevGuide = guides[currentIndex - 1];
  const nextGuide = guides[currentIndex + 1];

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="md">
        {/* Progress Indicator */}
        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            Guia {currentIndex + 1} de {guides.length}
          </Text>
          <Badge variant="light" color="blue">
            {currentGuideData?.title}
          </Badge>
        </Group>

        {/* Navigation Buttons */}
        <Group justify="space-between">
          {prevGuide ? (
            <Button
              component={Link}
              to={prevGuide.path}
              variant="light"
              leftSection={<IconArrowLeft size={16} />}
              size="sm"
            >
              ← {prevGuide.title}
            </Button>
          ) : (
            <div />
          )}

          {nextGuide ? (
            <Button
              component={Link}
              to={nextGuide.path}
              variant="filled"
              rightSection={
                <IconArrowLeft
                  size={16}
                  style={{ transform: 'rotate(180deg)' }}
                />
              }
              size="sm"
            >
              {nextGuide.title} →
            </Button>
          ) : (
            <div />
          )}
        </Group>

        {/* All Guides */}
        <div>
          <Text size="sm" fw={600} mb="xs">
            Todos os Guias:
          </Text>
          <Group gap="xs" wrap="wrap">
            {guides.map(guide => (
              <Button
                key={guide.id}
                component={Link}
                to={guide.path}
                variant={guide.id === currentGuide ? 'filled' : 'light'}
                size="xs"
                leftSection={guide.icon}
                style={{
                  opacity: guide.id === currentGuide ? 1 : 0.7,
                  fontWeight: guide.id === currentGuide ? 600 : 400,
                }}
              >
                {guide.title}
              </Button>
            ))}
          </Group>
        </div>
      </Stack>
    </Paper>
  );
};

export default GuideNavigation;
