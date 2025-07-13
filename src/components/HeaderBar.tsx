import { Group, Burger, Title, ActionIcon, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';

interface Props {
  opened: boolean;
  onBurger: () => void;
  onSearch: () => void;
}

export default function HeaderBar({ opened, onBurger, onSearch }: Props) {
  return (
    <Group h={56} px="md" justify="space-between">
      <Group>
        <Burger opened={opened} onClick={onBurger} hiddenFrom="sm" size="sm" />
        <Title order={4}>Front-End Architecture</Title>
      </Group>
      <Group gap="md" visibleFrom="sm">
        <Anchor component={Link} to="/" fw={500} size="sm">Home</Anchor>
        <Anchor component={Link} to="/guides/how-to-choose" fw={500} size="sm">Guides</Anchor>
        <Anchor component={Link} to="/patterns/atomic-design" fw={500} size="sm">Patterns</Anchor>
      </Group>
      <ActionIcon variant="subtle" onClick={onSearch} size="lg">
        <IconSearch size={18} />
      </ActionIcon>
    </Group>
  );
} 