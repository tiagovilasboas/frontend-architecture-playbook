import React, { useMemo, useState } from 'react';
import {
  Title,
  Text,
  Stack,
  Paper,
  Group,
  Anchor,
  ThemeIcon,
  SegmentedControl,
  Box,
  List,
} from '@mantine/core';
import {
  IconBook2,
  IconArrowRight,
  IconExternalLink,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import glossaryData from '../../data/glossary/terms.json';

interface GlossaryReference {
  label: string;
  url: string;
}

interface GlossaryTerm {
  id: string;
  term: string;
  termPt: string;
  definition: string;
  category: string;
  guideHref: string;
  guideLabel: string;
  references: GlossaryReference[];
}

interface GlossaryCategory {
  id: string;
  label: string;
  order: number;
}

const data = glossaryData as {
  meta: { description?: string; updatedAt?: string };
  categories: GlossaryCategory[];
  terms: GlossaryTerm[];
};

const ALL_ID = 'all';

export default function GlossaryPage() {
  const [category, setCategory] = useState<string>(ALL_ID);

  const categories = useMemo(() => {
    const list = [
      { id: ALL_ID, label: 'Todos', order: 0 },
      ...(data.categories ?? []).sort((a, b) => a.order - b.order),
    ];
    return list;
  }, []);

  const terms = useMemo(() => {
    const list = (data.terms ?? []) as GlossaryTerm[];
    if (category === ALL_ID) return list;
    return list.filter(t => t.category === category);
  }, [category]);

  return (
    <Stack gap="xl">
      <Box>
        <Group gap="sm" mb="md">
          <ThemeIcon size="xl" radius="md" variant="light" color="brand">
            <IconBook2 size={28} />
          </ThemeIcon>
          <div>
            <Title order={1} size="h1">
              Glossário
            </Title>
            <Text size="lg" c="dimmed" mt="xs">
              Conceitos de front-end com definição curta e link para o guia que
              aprofunda.
            </Text>
          </div>
        </Group>
      </Box>

      {categories.length > 1 && (
        <SegmentedControl
          value={category}
          onChange={setCategory}
          data={categories.map(c => ({ label: c.label, value: c.id }))}
          fullWidth
          size="sm"
        />
      )}

      <Stack gap="md">
        {terms.length === 0 ? (
          <Text c="dimmed">Nenhum termo nesta categoria.</Text>
        ) : (
          terms.map(term => (
            <Paper
              key={term.id}
              withBorder
              p="md"
              radius="md"
              component="article"
            >
              <Stack gap="xs">
                <Group gap="xs" wrap="nowrap" align="flex-start">
                  <Title order={3} size="h4" style={{ lineHeight: 1.2 }}>
                    {term.term}
                  </Title>
                  {term.termPt && term.termPt !== term.term && (
                    <Text size="sm" c="dimmed" fs="italic">
                      {term.termPt}
                    </Text>
                  )}
                </Group>
                <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-wrap' }}>
                  {term.definition.replace(/\*\*(.+?)\*\*/g, '$1')}
                </Text>
                {term.guideHref && (
                  <Group gap="xs" mt="xs">
                    <Anchor
                      component={Link}
                      to={term.guideHref}
                      size="sm"
                      fw={600}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <IconArrowRight size={14} />
                      Ver em {term.guideLabel}
                    </Anchor>
                  </Group>
                )}
                {term.references && term.references.length > 0 && (
                  <List
                    size="xs"
                    spacing={2}
                    mt="xs"
                    icon={
                      <IconExternalLink size={12} style={{ marginTop: 2 }} />
                    }
                  >
                    {term.references.map((ref, i) => (
                      <List.Item key={i}>
                        <Anchor
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="xs"
                          c="dimmed"
                        >
                          {ref.label}
                        </Anchor>
                      </List.Item>
                    ))}
                  </List>
                )}
              </Stack>
            </Paper>
          ))
        )}
      </Stack>
    </Stack>
  );
}
