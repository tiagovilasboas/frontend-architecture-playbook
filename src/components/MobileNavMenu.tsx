import { Stack, Group, Text, Accordion, ScrollArea, Anchor } from '@mantine/core';
import {
  IconBook,
  IconPuzzle,
  IconStack,
  IconRocket,
  IconBuilding,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconTarget,
} from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import NavItem from './NavItem.tsx';
import { NAV_JOURNEY, type NavSectionIconKey } from '../lib/navigation';

interface Props {
  onNavigate?: () => void;
}

const ICON_MAP: Record<
  NavSectionIconKey,
  React.ReactNode
> = {
  book: <IconBook size={18} color="var(--mantine-color-brand-6)" />,
  puzzle: <IconPuzzle size={18} color="var(--mantine-color-brand-6)" />,
  rocket: <IconRocket size={18} color="var(--mantine-color-brand-6)" />,
  building: <IconBuilding size={18} color="var(--mantine-color-brand-6)" />,
  stack: <IconStack size={18} color="var(--mantine-color-brand-6)" />,
  target: <IconTarget size={18} color="var(--mantine-color-brand-6)" />,
};

const ITEM_ICON_MAP: Record<NavSectionIconKey, React.ReactNode> = {
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
      <ScrollArea style={{ flex: 1, minHeight: 0 }} className="mobile-nav-scroll">
        <Accordion
          defaultValue={[]}
          multiple
          variant="default"
          radius={0}
          className="mobile-nav-accordion"
        >
          {NAV_JOURNEY.map((section, idx) => (
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
                <Stack gap={0}>
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
          ))}
        </Accordion>

        <div className="mobile-nav-footer">
          <Stack gap={4} className="mobile-nav-footer-links">
            <Anchor
              href="https://github.com/tiagovilasboas"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              c="gray"
              className="mobile-nav-footer-link"
              aria-label="GitHub - Tiago Vilas Boas"
            >
              <Group gap="sm">
                <IconBrandGithub size={22} />
                <Text size="sm" fw={500}>GitHub</Text>
              </Group>
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/tiagovilasboas"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              c="gray"
              className="mobile-nav-footer-link"
              aria-label="LinkedIn - Tiago Vilas Boas"
            >
              <Group gap="sm">
                <IconBrandLinkedin size={22} />
                <Text size="sm" fw={500}>LinkedIn</Text>
              </Group>
            </Anchor>
          </Stack>
          <Text size="sm" c="dimmed" ta="left" mt={4}>
            Feito com{' '}
            <IconHeart
              size={14}
              style={{
                verticalAlign: 'middle',
                color: 'var(--mantine-color-brand-6)',
              }}
            />{' '}
            por Tiago Vilas Boas
          </Text>
        </div>
      </ScrollArea>
    </Stack>
  );
}
