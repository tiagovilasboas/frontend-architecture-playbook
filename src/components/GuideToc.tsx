import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, NavLink, Text, Box } from '@mantine/core';
import {
  IconBulb,
  IconMap2,
  IconPlug,
  IconShield,
  IconTarget,
  IconScale,
  IconTrendingUp,
  IconFileText,
  IconRoute,
  IconBook,
  IconListCheck,
} from '@tabler/icons-react';
import { getGuideNavItems } from '../lib/content';

interface GuideTocProps {
  currentGuide: string;
}

const GUIDE_ICONS: Record<string, React.ReactNode> = {
  'dependency-rule': <IconBulb size={18} />,
  'how-to-choose': <IconTarget size={18} />,
  'architecture-comparison': <IconScale size={18} />,
  cases: <IconTrendingUp size={18} />,
  'study-guide': <IconMap2 size={18} />,
  staff: <IconTarget size={18} />,
  'security-business': <IconShield size={18} />,
  mcp: <IconPlug size={18} />,
  adr: <IconFileText size={18} />,
  'migration-strategies': <IconRoute size={18} />,
  glossary: <IconBook size={18} />,
  'implementation-roadmap': <IconListCheck size={18} />,
};

/**
 * Table of contents for guides: vertical list on the left (desktop) or above content (mobile).
 * Replaces the previous "Guia" block (GuideNavigation) with a persistent sidebar TOC.
 */
export default function GuideToc({ currentGuide }: GuideTocProps) {
  const items = getGuideNavItems();

  return (
    <Box
      component="nav"
      aria-label="Guias"
      style={{
        position: 'sticky',
        top: 16,
        alignSelf: 'flex-start',
      }}
    >
      <Text size="sm" fw={600} c="dimmed" mb="xs" tt="uppercase">
        Guias
      </Text>
      <Stack gap={2}>
        {items.map(guide => {
          const isActive = guide.id === currentGuide;
          const icon = GUIDE_ICONS[guide.id] ?? <IconTarget size={18} />;
          return (
            <NavLink
              key={guide.id}
              component={Link}
              to={guide.path}
              label={guide.title}
              leftSection={icon}
              active={isActive}
              variant="light"
              style={{
                borderRadius: 6,
                fontWeight: isActive ? 600 : 400,
              }}
              onClick={() => {}}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
