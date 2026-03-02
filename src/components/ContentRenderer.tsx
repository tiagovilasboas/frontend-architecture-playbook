import React, { lazy, Suspense } from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  List,
  ThemeIcon,
  Group,
  Anchor,
  Card,
  SimpleGrid,
  Code,
  Alert,
  Table,
  Badge,
  Timeline,
  LoadingOverlay,
} from '@mantine/core';
import {
  IconCheck,
  IconCode,
  IconLock,
  IconFileText,
  IconChartBar,
  IconRocket,
  IconShield,
  IconBulb,
  IconAlertTriangle,
  IconInfoCircle,
  IconArrowRight,
  IconDeviceMobile,
  IconStack,
  IconScale,
  IconTarget,
  IconPuzzle,
  IconPalette,
  IconBuilding,
  IconTrendingUp,
  IconRoute,
  IconMap2,
  IconSchool,
  IconUsers,
  IconCurrencyDollar,
  IconMessageCircle,
  IconPlug,
  IconBook,
  IconTool,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { CaseCard } from './CaseCard';
import casesData from '../data/cases.json';
import ArchitectureComparisonWidget from './ArchitectureComparisonWidget';
const DecisionWizard = lazy(() => import('./interactive/DecisionWizard.tsx'));
import type {
  ContentBlock,
  ContentIconKey,
  ContentPage,
} from '../lib/content-schema';
import CodeExample from './CodeExample';
import GlossaryBlock from './GlossaryBlock';

const ICON_MAP: Record<
  ContentIconKey,
  React.ComponentType<{ size?: number }>
> = {
  check: IconCheck,
  code: IconCode,
  lock: IconLock,
  'file-text': IconFileText,
  'chart-bar': IconChartBar,
  rocket: IconRocket,
  shield: IconShield,
  bulb: IconBulb,
  'alert-triangle': IconAlertTriangle,
  'info-circle': IconInfoCircle,
  'arrow-right': IconArrowRight,
  'device-mobile': IconDeviceMobile,
  stack: IconStack,
  scale: IconScale,
  target: IconTarget,
  puzzle: IconPuzzle,
  palette: IconPalette,
  building: IconBuilding,
  'trending-up': IconTrendingUp,
  route: IconRoute,
  map: IconMap2,
  school: IconSchool,
  users: IconUsers,
  'currency-dollar': IconCurrencyDollar,
  'message-circle': IconMessageCircle,
  plug: IconPlug,
  book: IconBook,
  tool: IconTool,
};

function getIcon(iconKey?: ContentIconKey, size = 20) {
  if (!iconKey || !ICON_MAP[iconKey]) return null;
  const Icon = ICON_MAP[iconKey];
  return <Icon size={size} />;
}

function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  const key = `block-${index}`;

  switch (block.type) {
    case 'hero': {
      const iconEl = block.icon ? getIcon(block.icon, 28) : null;
      return (
        <div key={key}>
          {iconEl ? (
            <Group
              gap="sm"
              mb={{ base: 'sm', sm: 'md' }}
              align="flex-start"
              wrap="nowrap"
              justify="flex-start"
              style={{ flexDirection: 'row', display: 'flex' }}
            >
              <ThemeIcon
                size={{ base: 'lg', sm: 'xl' }}
                radius="md"
                variant="light"
                color="brand"
                style={{ flexShrink: 0 }}
              >
                {iconEl}
              </ThemeIcon>
              <div style={{ minWidth: 0 }}>
                <Title order={1} size="h1">
                  {block.title}
                </Title>
                {block.subtitle && (
                  <Text size={{ base: 'md', sm: 'lg' }} c="dimmed" mt="xs">
                    {block.subtitle}
                  </Text>
                )}
              </div>
            </Group>
          ) : (
            <>
              <Title order={1} mb={{ base: 'sm', sm: 'md' }}>
                {block.title}
              </Title>
              {block.subtitle && (
                <Text size={{ base: 'md', sm: 'lg' }} c="dimmed">
                  {block.subtitle}
                </Text>
              )}
            </>
          )}
        </div>
      );
    }

    case 'section': {
      const iconEl = block.icon ? getIcon(block.icon) : null;
      return (
        <Paper key={key} withBorder p={{ base: 'md', sm: 'xl' }} radius="md">
          {(block.title || iconEl) && (
            <Group
              gap="sm"
              mb={block.children?.length ? 'sm' : undefined}
              align="flex-start"
              wrap="nowrap"
              justify="flex-start"
              style={{ flexDirection: 'row', display: 'flex' }}
            >
              {iconEl && (
                <ThemeIcon
                  size="lg"
                  radius="md"
                  variant="light"
                  color="brand"
                  style={{ flexShrink: 0 }}
                >
                  {iconEl}
                </ThemeIcon>
              )}
              {block.title && (
                <Title
                  order={3}
                  style={{ minWidth: 0, margin: 0, lineHeight: 1.25 }}
                >
                  {block.title}
                </Title>
              )}
            </Group>
          )}
          {block.children?.length ? (
            <Stack gap={{ base: 'sm', sm: 'md' }}>
              {block.children.map((child, i) => renderBlock(child, i))}
            </Stack>
          ) : null}
        </Paper>
      );
    }

    case 'text':
      return (
        <Text
          key={key}
          size={block.size ?? 'md'}
          c={block.dimmed ? 'dimmed' : undefined}
        >
          {block.content}
        </Text>
      );

    case 'title':
      return (
        <Title key={key} order={block.order ?? 3} mb="xs">
          {block.content}
        </Title>
      );

    case 'list': {
      const items = Array.isArray(block.items) ? block.items : [];
      const iconEl = block.icon ? (
        <ThemeIcon size={18} radius="xl" color="brand">
          {getIcon(block.icon, 10)}
        </ThemeIcon>
      ) : undefined;
      return (
        <List
          key={key}
          spacing={block.spacing ?? 'sm'}
          icon={iconEl}
          listStyleType={block.ordered ? 'decimal' : undefined}
        >
          {items.map((item, i) => {
            const line =
              typeof item === 'string'
                ? item
                : item.title + (item.description ? ' ' + item.description : '');
            const titlePart = typeof item === 'string' ? null : item.title;
            const descPart = typeof item === 'string' ? null : item.description;
            return (
              <List.Item key={i}>
                {titlePart != null ? (
                  <>
                    <strong>{titlePart}</strong>
                    {descPart != null && ` ${descPart}`}
                  </>
                ) : (
                  line
                )}
              </List.Item>
            );
          })}
        </List>
      );
    }

    case 'code':
      return (
        <Code key={key} block={block.block !== false} mb="md">
          {block.code}
        </Code>
      );

    case 'codeExample':
      return (
        <div key={key}>
          <CodeExample
            title={block.title}
            description={block.description}
            code={block.code}
            defaultExpanded={block.defaultExpanded}
          />
        </div>
      );

    case 'alert': {
      const AlertIcon = block.icon ? ICON_MAP[block.icon] : null;
      return (
        <Alert
          key={key}
          color={block.color ?? 'blue'}
          icon={AlertIcon ? <AlertIcon size={16} /> : undefined}
          radius="md"
        >
          {block.message}
        </Alert>
      );
    }

    case 'linkCards': {
      const cards = Array.isArray(block.cards) ? block.cards : [];
      const cols = block.cols ?? { base: 1, sm: 2 };
      return (
        <SimpleGrid key={key} cols={cols} spacing="md">
          {cards.map((card, i) => {
            const iconEl = card.icon ? getIcon(card.icon, 20) : null;
            return (
              <Card
                key={i}
                withBorder
                p="md"
                component={Link}
                to={card.to}
                style={{ textDecoration: 'none' }}
              >
                <Group
                  gap="sm"
                  align="flex-start"
                  wrap="nowrap"
                  justify="flex-start"
                >
                  {iconEl && (
                    <ThemeIcon
                      size={36}
                      radius="md"
                      variant="light"
                      color="brand"
                      style={{ flexShrink: 0 }}
                    >
                      {iconEl}
                    </ThemeIcon>
                  )}
                  <div>
                    <Text fw={600}>{card.title}</Text>
                    {card.description && (
                      <Text size="xs" c="dimmed">
                        {card.description}
                      </Text>
                    )}
                  </div>
                </Group>
              </Card>
            );
          })}
        </SimpleGrid>
      );
    }

    case 'iconCards': {
      const iconCards = Array.isArray(block.cards) ? block.cards : [];
      const cols = block.cols ?? { base: 1, sm: 2 };
      return (
        <SimpleGrid key={key} cols={cols} spacing="md">
          {iconCards.map((c, i) => {
            const iconEl = c.icon ? getIcon(c.icon, 20) : null;
            return (
              <Card key={i} withBorder p="md">
                <Group
                  gap="sm"
                  mb={c.items?.length ? 'sm' : undefined}
                  align="flex-start"
                  wrap="nowrap"
                  justify="flex-start"
                >
                  {iconEl && (
                    <ThemeIcon
                      size="lg"
                      radius="md"
                      variant="light"
                      color={(c.iconColor as 'brand') ?? 'brand'}
                      style={{ flexShrink: 0 }}
                    >
                      {iconEl}
                    </ThemeIcon>
                  )}
                  <div>
                    <Text fw={600} size="sm">
                      {c.title}
                    </Text>
                    {c.description && !c.items?.length && (
                      <Text size="sm" c="dimmed">
                        {c.description}
                      </Text>
                    )}
                  </div>
                </Group>
                {c.items?.length ? (
                  <List size="sm" spacing="xs">
                    {c.items.map((item, j) => (
                      <List.Item key={j}>{item}</List.Item>
                    ))}
                  </List>
                ) : null}
              </Card>
            );
          })}
        </SimpleGrid>
      );
    }

    case 'linkList': {
      const links = Array.isArray(block.links) ? block.links : [];
      const iconEl = block.icon ? (
        <ThemeIcon size={20} radius="xl" color="brand">
          {getIcon(block.icon, 12)}
        </ThemeIcon>
      ) : undefined;
      return (
        <List key={key} spacing="xs" icon={iconEl}>
          {links.map((link, i) => (
            <List.Item key={i}>
              <Anchor component={Link} to={link.to} size="sm">
                {link.label}
              </Anchor>
            </List.Item>
          ))}
        </List>
      );
    }

    case 'table': {
      const headers = Array.isArray(block.headers) ? block.headers : [];
      const rows = Array.isArray(block.rows) ? block.rows : [];
      return (
        <Table key={key} withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              {headers.map((h, i) => (
                <Table.Th key={i}>{h}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((row, i) => (
              <Table.Tr key={i}>
                {(Array.isArray(row) ? row : []).map((cell, j) => (
                  <Table.Td key={j}>
                    {cell.startsWith('code:') ? (
                      <Code>{cell.slice(5)}</Code>
                    ) : (
                      cell
                    )}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      );
    }

    case 'badges': {
      const badgeItems = Array.isArray(block.items) ? block.items : [];
      return (
        <Group key={key} gap="xs" wrap="wrap">
          {badgeItems.map((item, i) => (
            <Badge key={i} variant="light" size="lg">
              {item}
            </Badge>
          ))}
        </Group>
      );
    }

    case 'callout': {
      return (
        <Paper
          key={key}
          withBorder
          p="sm"
          radius="md"
          bg={block.dimmed ? 'dimmed' : undefined}
        >
          <Text size="xs" fw={600} mb={4}>
            {block.title}
          </Text>
          <Text size="xs" c="dimmed">
            {block.content}
          </Text>
        </Paper>
      );
    }

    case 'richCardGrid': {
      const richCards = Array.isArray(block.cards) ? block.cards : [];
      const cols = block.cols ?? { base: 1, md: 2 };
      return (
        <SimpleGrid key={key} cols={cols} spacing="lg">
          {richCards.map((c, i) => {
            const iconEl = c.icon ? getIcon(c.icon, 24) : null;
            return (
              <Card key={i} withBorder p="xl" radius="lg">
                <Stack gap="sm">
                  <Group gap="sm" align="flex-start">
                    {iconEl && (
                      <ThemeIcon
                        size={44}
                        radius="md"
                        variant="light"
                        color={(c.iconColor as 'green') ?? 'brand'}
                      >
                        {iconEl}
                      </ThemeIcon>
                    )}
                    <div>
                      <Text fw={600} size="lg">
                        {c.title}
                      </Text>
                      {c.subtitle && (
                        <Text size="sm" c="dimmed">
                          {c.subtitle}
                        </Text>
                      )}
                    </div>
                  </Group>
                  {c.bodyText && <Text size="sm">{c.bodyText}</Text>}
                  {c.links?.length ? (
                    <List
                      spacing="xs"
                      icon={
                        <ThemeIcon size={20} radius="xl" color="brand">
                          {getIcon('arrow-right', 12)}
                        </ThemeIcon>
                      }
                    >
                      {c.links.map((link, j) => (
                        <List.Item key={j}>
                          <Anchor component={Link} to={link.to} size="sm">
                            {link.label}
                          </Anchor>
                        </List.Item>
                      ))}
                    </List>
                  ) : null}
                  {c.nextLevel ? (
                    <Paper withBorder p="sm" radius="md" bg="dimmed">
                      <Text size="xs" fw={600} mb={4}>
                        {c.nextLevel.title}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {c.nextLevel.content}
                      </Text>
                    </Paper>
                  ) : null}
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      );
    }

    case 'anchor':
      if (!block.to && !block.href) return null;
      if (block.to) {
        return (
          <Anchor key={key} component={Link} to={block.to} size="sm" fw={600}>
            {block.label}
          </Anchor>
        );
      }
      return (
        <Anchor
          key={key}
          href={block.href}
          target={block.href?.startsWith('http') ? '_blank' : undefined}
          rel={
            block.href?.startsWith('http') ? 'noopener noreferrer' : undefined
          }
          size="sm"
          fw={600}
        >
          {block.label}
        </Anchor>
      );

    case 'stack': {
      const stackChildren = Array.isArray(block.children) ? block.children : [];
      return (
        <Stack key={key} gap={block.gap ?? 'md'}>
          {stackChildren.map((child, i) => renderBlock(child, i))}
        </Stack>
      );
    }

    case 'architectureComparison':
      return (
        <div key={key}>
          <ArchitectureComparisonWidget />
        </div>
      );

    case 'decisionWizard':
      return (
        <Paper key={key} withBorder p="md" radius="lg">
          <Stack gap="lg">
            <div>
              <Title order={2} mb="sm">
                Decision Wizard v3.0
              </Title>
              <Text size="lg" c="dimmed">
                6 perguntas para obter sugestões de arquitetura. O resultado é
                um ponto de partida para discutir com o time, não uma decisão
                final.
              </Text>
            </div>
            <Suspense fallback={<LoadingOverlay visible />}>
              <DecisionWizard />
            </Suspense>
          </Stack>
        </Paper>
      );

    case 'casesGrid': {
      const cases = Array.isArray(casesData) ? casesData : [];
      const gridTitle = block.title;
      return (
        <div key={key}>
          {gridTitle ? (
            <Group gap="xs" mb="lg" align="flex-start">
              {getIcon('trending-up', 28)}
              <Title order={2}>{gridTitle}</Title>
            </Group>
          ) : null}
          <Stack gap="lg">
            {cases.map((case_: (typeof casesData)[number], index: number) => (
              <CaseCard key={case_.company} case_={case_} index={index} />
            ))}
          </Stack>
        </div>
      );
    }

    case 'glossary':
      return (
        <div key={key}>
          <GlossaryBlock />
        </div>
      );

    case 'timeline': {
      const items = Array.isArray(block.items) ? block.items : [];
      const resultAlert = block.resultAlert;
      return (
        <Stack key={key} gap="lg">
          <Timeline active={block.active} bulletSize={24} lineWidth={2}>
            {items.map((item, i) => (
              <Timeline.Item
                key={i}
                bullet={getIcon('check', 16)}
                title={item.title}
              >
                {item.description ? (
                  <Text size="sm" c="dimmed" mb="md">
                    {item.description}
                  </Text>
                ) : null}
                <List size="sm" spacing="xs">
                  {(item.items || []).map((bullet, j) => (
                    <List.Item key={j}>{bullet}</List.Item>
                  ))}
                </List>
              </Timeline.Item>
            ))}
          </Timeline>
          {resultAlert?.message ? (
            <Alert
              color={resultAlert.color ?? 'blue'}
              icon={resultAlert.icon ? getIcon(resultAlert.icon, 16) : null}
              radius="md"
            >
              <Text size="sm" fw={600} mb={4}>
                Resultado Esperado:
              </Text>
              <Text size="sm">{resultAlert.message}</Text>
            </Alert>
          ) : null}
        </Stack>
      );
    }

    default:
      return null;
  }
}

export interface ContentRendererProps {
  page: ContentPage;
  /** Optional: render after body (e.g. GuideNavigation) */
  after?: React.ReactNode;
}

export default function ContentRenderer({ page, after }: ContentRendererProps) {
  const body = Array.isArray(page?.body) ? page.body : [];
  return (
    <Stack gap={{ base: 'sm', sm: 'md' }}>
      {body.map((block, index) => renderBlock(block, index))}
      {after}
    </Stack>
  );
}
