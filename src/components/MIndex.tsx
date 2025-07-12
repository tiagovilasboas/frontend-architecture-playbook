import React, { useState } from 'react';
import { MantineProvider, SimpleGrid, TextInput, Stack, Title } from '@mantine/core';
import type { CollectionEntry } from 'astro:content';
import MCard from './MCard.tsx';

interface Props {
  patterns: CollectionEntry<'patterns'>[];
  guides: CollectionEntry<'guides'>[];
}

export default function MIndex({ patterns, guides }: Props) {
  const [query, setQuery] = useState('');
  const filtered = patterns.filter((p) => p.data.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Stack gap="xl">
        <section>
          <Title order={2} mb="md">Guides</Title>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            {guides.map((g) => (
              <MCard key={g.slug} title={g.data.title} description={g.data.description} href={`/guides/${g.slug}`} />
            ))}
          </SimpleGrid>
        </section>

        <section>
          <Title order={2} mb="md">Patterns</Title>
          <TextInput placeholder="Search patterns..." value={query} onChange={(e) => setQuery(e.currentTarget.value)} mb="lg" w={240} />
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            {filtered.map((p) => (
              <MCard key={p.slug} title={p.data.title} description={p.data.description} href={`/patterns/${p.slug}`} />
            ))}
          </SimpleGrid>
        </section>
      </Stack>
    </MantineProvider>
  );
} 