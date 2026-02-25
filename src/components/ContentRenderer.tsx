import React from 'react';
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
import type {
  ContentBlock,
  ContentIconKey,
  ContentPage,
} from '../lib/content-schema';
import CodeExample from './CodeExample';

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
            <Group gap="sm" mb="md">
              <ThemeIcon size="xl" radius="md" variant="light" color="brand">
                {iconEl}
              </ThemeIcon>
              <div>
                <Title order={1} size="h1">
                  {block.title}
                </Title>
                {block.subtitle && (
                  <Text size="lg" c="dimmed" mt="xs">
                    {block.subtitle}
                  </Text>
                )}
              </div>
            </Group>
          ) : (
            <>
              <Title order={1} mb="md">
                {block.title}
              </Title>
              {block.subtitle && (
                <Text size="lg" c="dimmed">
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
        <Paper key={key} withBorder p="xl" radius="md">
          {(block.title || iconEl) && (
            <Group gap="sm" mb={block.children?.length ? 'md' : undefined}>
              {iconEl && (
                <ThemeIcon size="lg" radius="md" variant="light" color="brand">
                  {iconEl}
                </ThemeIcon>
              )}
              {block.title && <Title order={3}>{block.title}</Title>}
            </Group>
          )}
          {block.children?.length ? (
            <Stack gap="md">
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
        <Title key={key} order={block.order ?? 3} mb="md">
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
                <Group gap="sm">
                  {iconEl && (
                    <ThemeIcon
                      size={36}
                      radius="md"
                      variant="light"
                      color="brand"
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
                <Group gap="sm" mb={c.items?.length ? 'sm' : undefined}>
                  {iconEl && (
                    <ThemeIcon
                      size="lg"
                      radius="md"
                      variant="light"
                      color={(c.iconColor as 'brand') ?? 'brand'}
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
                <Stack gap="md">
                  <Group gap="sm">
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
    <Stack gap="xl">
      {body.map((block, index) => renderBlock(block, index))}
      {after}
    </Stack>
  );
}
