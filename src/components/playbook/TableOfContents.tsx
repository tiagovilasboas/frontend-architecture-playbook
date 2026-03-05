import { Box, Title, SimpleGrid, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';

export interface TocItem {
  number: string;
  title: string;
  id: string;
}

export interface TableOfContentsProps {
  title?: string;
  items: TocItem[];
}

export function TableOfContents({ title = 'Índice', items }: TableOfContentsProps): JSX.Element {
  return (
    <Box component="nav" className="playbook-toc">
      <Title order={2} className="playbook-toc-title" component="h2">
        {title}
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={0} verticalSpacing={0}>
        {items.map((item) => (
          <Anchor
            key={item.id}
            component={Link}
            to={`#${item.id}`}
            underline="never"
            c="inherit"
            className="playbook-toc-item"
            style={{ textDecoration: 'none' }}
          >
            <span className="playbook-toc-num">{item.number}</span>
            <span style={{ fontSize: '0.875rem', lineHeight: 1.3 }}>{item.title}</span>
          </Anchor>
        ))}
      </SimpleGrid>
    </Box>
  );
}
