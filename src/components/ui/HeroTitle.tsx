import { Title } from '@mantine/core';
import type { TitleProps } from '@mantine/core';

interface HeroTitleProps extends Omit<TitleProps, 'order'> {
  children: React.ReactNode;
}

export function HeroTitle({ children, ...props }: HeroTitleProps) {
  return (
    <Title order={1} fw={800} size="3.5rem" mb="md" {...props}>
      {children}
    </Title>
  );
} 