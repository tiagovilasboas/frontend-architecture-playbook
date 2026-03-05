import { Card, Group, Stack, Title, Text, List, ThemeIcon } from '@mantine/core';
import { motion } from 'framer-motion';

export interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

export function PrincipleCard({ icon, title, description, items }: PrincipleCardProps): JSX.Element {
  return (
    <Card
      component={motion.div}
      withBorder
      p="lg"
      radius="md"
      style={{
        borderColor: 'var(--mantine-color-dark-4)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
      onHoverStart={(_, target) => {
        const el = target as HTMLElement;
        el.style.borderColor = 'hsl(42 60% 30%)';
        el.style.boxShadow = 'var(--playbook-glow-md)';
      }}
      onHoverEnd={(_, target) => {
        const el = target as HTMLElement;
        el.style.borderColor = '';
        el.style.boxShadow = '';
      }}
    >
      <Group align="flex-start" gap="md">
        <ThemeIcon size={40} radius="md" color="primary" variant="light">
          {icon}
        </ThemeIcon>
        <Stack gap="xs" style={{ flex: 1, minWidth: 0 }}>
          <Title order={3} size="h4" style={{ marginTop: 0 }}>
            {title}
          </Title>
          <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
            {description}
          </Text>
          {items.length > 0 ? (
            <List
              size="sm"
              spacing="xs"
              icon={
                <ThemeIcon size={16} radius="xl" color="primary">
                  •
                </ThemeIcon>
              }
            >
              {items.map((item, i) => (
                <List.Item key={i}>{item}</List.Item>
              ))}
            </List>
          ) : null}
        </Stack>
      </Group>
    </Card>
  );
}
