import { useState } from 'react';
import { SimpleGrid, TextInput, Title, Stack, Card, Text } from '@mantine/core';
import { guides, patterns } from '../lib/content.ts';
import { Link } from 'react-router-dom';

export default function Home() {
  const [query, setQuery] = useState('');
  const filteredPatterns = patterns.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <Stack gap="xl">
      <section>
        <Title order={2} mb="md">Guides</Title>
        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
          {guides.map((g) => (
            <Card key={g.slug} component={Link} to={`/guides/${g.slug}`} withBorder shadow="sm">
              <Title order={4}>{g.title}</Title>
              <Text size="sm" c="dimmed">{g.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </section>
      <section>
        <Title order={2} mb="md">Patterns</Title>
        <TextInput placeholder="Search patterns..." value={query} onChange={(e) => setQuery(e.currentTarget.value)} mb="lg" w={240} />
        <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
          {filteredPatterns.map((p) => (
            <Card key={p.slug} component={Link} to={`/patterns/${p.slug}`} withBorder shadow="sm">
              <Title order={4}>{p.title}</Title>
              <Text size="sm" c="dimmed">{p.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </section>
    </Stack>
  );
} 