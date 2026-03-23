import {
  Stack,
  Group,
  Text,
  Accordion,
  ScrollArea,
  Anchor,
  Box,
  NavLink,
  ActionIcon,
} from '@mantine/core';
import {
  IconBook,
  IconMap2,
  IconPuzzle,
  IconStack,
  IconRocket,
  IconBuilding,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconTarget,
  IconX,
} from '@tabler/icons-react';
import { useLocation, Link } from 'react-router-dom';
import NavItem from './NavItem.tsx';
import { NAV_JOURNEY, type NavSectionIconKey } from '../lib/navigation';

interface Props {
  onNavigate?: () => void;
}

const ICON_MAP: Record<NavSectionIconKey, React.ReactNode> = {
  map: <IconMap2 size={18} color="var(--mantine-color-brand-6)" />,
  book: <IconBook size={18} color="var(--mantine-color-brand-6)" />,
  puzzle: <IconPuzzle size={18} color="var(--mantine-color-brand-6)" />,
  rocket: <IconRocket size={18} color="var(--mantine-color-brand-6)" />,
  building: <IconBuilding size={18} color="var(--mantine-color-brand-6)" />,
  stack: <IconStack size={18} color="var(--mantine-color-brand-6)" />,
  target: <IconTarget size={18} color="var(--mantine-color-brand-6)" />,
};

const ITEM_ICON_MAP: Record<NavSectionIconKey, React.ReactNode> = {
  map: <IconMap2 size={18} />,
  book: <IconBook size={18} />,
  puzzle: <IconPuzzle size={18} />,
  rocket: <IconRocket size={18} />,
  building: <IconBuilding size={18} />,
  stack: <IconStack size={18} />,
  target: <IconTarget size={18} />,
};

export default function MobileNavMenu({ onNavigate }: Props) {
  const location = useLocation();
  const current = location.pathname;

  return (
    <Stack gap={0} style={{ height: '100%' }} className="mobile-nav-menu">
      {/* Slim toolbar: evita o header alto do Drawer (X default do Mantine). */}
      <Box
        component="header"
        className="mobile-nav-drawer-header"
        style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          minHeight: 40,
          paddingTop: 'max(6px, env(safe-area-inset-top))',
          paddingBottom: 6,
          paddingLeft: 'max(8px, env(safe-area-inset-left))',
          paddingRight: 'max(8px, env(safe-area-inset-right))',
          borderBottom: '1px solid var(--mantine-color-default-border)',
        }}
      >
        <Text
          id="mobile-nav-menu-title"
          size="sm"
          fw={600}
          style={{ lineHeight: 1.2 }}
        >
          Navegação
        </Text>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          radius="md"
          onClick={onNavigate}
          aria-label="Fechar menu"
        >
          <IconX size={20} stroke={2} />
        </ActionIcon>
      </Box>

      <ScrollArea
        style={{ flex: 1, minHeight: 0 }}
        className="mobile-nav-scroll"
      >
        <Box px="xs" py="xs">
          <Accordion
            defaultValue={[]}
            multiple
            variant="default"
            radius="md"
            className="mobile-nav-accordion"
            styles={{
              control: {
                borderRadius: 6,
                paddingTop: 6,
                paddingBottom: 6,
                minHeight: 'unset',
              },
              content: {
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 2,
                paddingBottom: 4,
              },
              item: { marginBottom: 2 },
            }}
          >
            {NAV_JOURNEY.map((section, idx) => {
              const isDirectLink = section.items.length === 1;
              const href = isDirectLink ? section.items[0].href : undefined;

              if (isDirectLink && href) {
                return (
                  <NavLink
                    key={section.key}
                    component={Link}
                    to={href}
                    onClick={onNavigate}
                    leftSection={ICON_MAP[section.iconKey]}
                    label={
                      <Stack gap={0}>
                        <Text fw={500} size="sm">
                          {idx + 1}. {section.label}
                        </Text>
                        {section.subtitle && (
                          <Text size="xs" c="dimmed">
                            {section.subtitle}
                          </Text>
                        )}
                      </Stack>
                    }
                    variant="light"
                    style={{ borderRadius: 6, marginBottom: 2 }}
                    styles={{
                      root: {
                        paddingTop: 6,
                        paddingBottom: 6,
                        minHeight: 'unset',
                      },
                    }}
                  />
                );
              }

              return (
                <Accordion.Item key={section.key} value={section.key}>
                  <Accordion.Control className="mobile-accordion-control">
                    <Group gap="sm">
                      {ICON_MAP[section.iconKey]}
                      <Stack gap={0}>
                        <Text fw={500} size="sm">
                          {idx + 1}. {section.label}
                        </Text>
                        {section.subtitle && (
                          <Text size="xs" c="dimmed">
                            {section.subtitle}
                          </Text>
                        )}
                      </Stack>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel className="mobile-nav-panel">
                    <Stack gap={2} pl="sm">
                      {section.items.map(item => (
                        <NavItem
                          key={item.href}
                          href={item.href}
                          label={item.label}
                          icon={ITEM_ICON_MAP[section.iconKey]}
                          active={current === item.href}
                          onNavigate={onNavigate}
                        />
                      ))}
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Box>

        <Box
          pt="sm"
          pb="xs"
          px="xs"
          style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}
        >
          <Stack gap="xs">
            <Group justify="space-between" wrap="nowrap">
              <Text size="xs" c="dimmed">
                Feito com{' '}
                <IconHeart size={12} style={{ verticalAlign: 'middle' }} /> por
                Tiago
              </Text>
              <Group gap="xs">
                <Anchor
                  href="https://github.com/tiagovilasboas"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  aria-label="GitHub - Tiago Vilas Boas"
                >
                  <IconBrandGithub size={18} />
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/tiagovilasboas"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xs"
                  aria-label="LinkedIn - Tiago Vilas Boas"
                >
                  <IconBrandLinkedin size={18} />
                </Anchor>
              </Group>
            </Group>
            <Text size="xs" c="dimmed">
              Front-End Architecture Playbook • 2025
            </Text>
          </Stack>
        </Box>
      </ScrollArea>
    </Stack>
  );
}
