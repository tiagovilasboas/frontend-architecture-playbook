import { Group, Burger, Title, ActionIcon } from '@mantine/core';
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
      <ActionIcon variant="subtle" onClick={onSearch} size="lg">
        <IconSearch size={18} />
      </ActionIcon>
    </Group>
  );
} 