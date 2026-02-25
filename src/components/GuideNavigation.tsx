import React from 'react';
import { Link } from 'react-router-dom';
import { Group, Button, Text, Badge, Stack, Paper } from '@mantine/core';
import {
  IconArrowLeft,
  IconBulb,
  IconMap2,
  IconPlug,
  IconShield,
  IconTarget,
  IconScale,
  IconTrendingUp,
  IconFileText,
  IconRoute,
} from '@tabler/icons-react';
import { getGuideNavItems } from '../lib/content';

interface GuideNavigationProps {
  currentGuide: string;
}

const GUIDE_ICONS: Record<string, React.ReactNode> = {
  'dependency-rule': <IconBulb size={16} />,
  'how-to-choose': <IconTarget size={16} />,
  'architecture-comparison': <IconScale size={16} />,
  cases: <IconTrendingUp size={16} />,
  'study-guide': <IconMap2 size={16} />,
  staff: <IconTarget size={16} />,
  'security-business': <IconShield size={16} />,
  mcp: <IconPlug size={16} />,
  adr: <IconFileText size={16} />,
  'migration-strategies': <IconRoute size={16} />,
};

export const GuideNavigation: React.FC<GuideNavigationProps> = ({
  currentGuide,
}) => {
  const guides = getGuideNavItems().map(g => ({
    ...g,
    icon: GUIDE_ICONS[g.id] ?? <IconTarget size={16} />,
  }));

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
