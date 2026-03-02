import React, { useMemo, useState } from 'react';
import {
  Text,
  Stack,
  Paper,
  Group,
  Anchor,
  SegmentedControl,
  List,
} from '@mantine/core';
import { IconArrowRight, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import glossaryData from '../data/glossary/terms.json';

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

export default function GlossaryBlock() {
  const [category, setCategory] = useState<string>(ALL_ID);

  const categories = useMemo(() => {
    return [
      { id: ALL_ID, label: 'Todos', order: 0 },
      ...(data.categories ?? []).sort((a, b) => a.order - b.order),
    ];
  }, []);

  const terms = useMemo(() => {
    const list = (data.terms ?? []) as GlossaryTerm[];
    if (category === ALL_ID) return list;
    return list.filter(t => t.category === category);
  }, [category]);

  return (
    <>
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
          <Text c="dimmed" size="sm">
            Nenhum termo nesta categoria.
          </Text>
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
                  <Text fw={600} size="md" style={{ lineHeight: 1.2 }}>
                    {term.term}
                  </Text>
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
    </>
  );
}
