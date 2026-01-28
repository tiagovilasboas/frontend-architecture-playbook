import { useParams } from 'react-router-dom';
import { Paper, Stack, Title, Group, Card, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconBook } from '@tabler/icons-react';
import { getDoc, guides, architectures, patterns } from '../lib/content.tsx';

export function RelatedContent() {
  const { collection, slug } = useParams();
  if (!collection || !slug) return null;

  const currentDoc = getDoc(
    collection as 'guides' | 'architectures' | 'patterns',
    slug
  );
  if (!currentDoc) return null;

  // Simple related content logic
  const getRelated = () => {
    // Get next 2-3 items in same collection
    const sameCollection = [...guides, ...architectures, ...patterns].filter(
      doc => doc.collection === collection && doc.slug !== slug
    );

    // For guides, suggest next guides
    if (collection === 'guides') {
      const guideIndex = guides.findIndex(g => g.slug === slug);
      const related = [guides[guideIndex + 1], guides[guideIndex - 1]].filter(
        Boolean
      );
      return related.slice(0, 3);
    }

    // For architectures, suggest related architectures
    if (collection === 'architectures') {
      // Simple: get 2-3 random from same collection
      return sameCollection.slice(0, 3);
    }

    // For patterns, suggest related patterns
    if (collection === 'patterns') {
      return sameCollection.slice(0, 3);
    }

    return [];
  };

  const related = getRelated();

  if (related.length === 0) return null;

  return (
    <Paper withBorder p="lg" radius="md" mt="xl">
      <Stack gap="md">
        <Group gap="xs">
          <IconBook size={20} />
          <Title order={3} size="h4">
            Você também pode gostar
          </Title>
        </Group>

        <Group gap="md" wrap="wrap">
          {related.map(doc => (
            <Card
              key={doc.slug}
              component={Link}
              to={`/${doc.collection}/${doc.slug}`}
              withBorder
              p="md"
              radius="md"
              style={{
                flex: 1,
                minWidth: 200,
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Group gap="sm" justify="space-between">
                <div style={{ flex: 1 }}>
                  <Text fw={600} size="sm" mb={4}>
                    {doc.title}
                  </Text>
                  <Text size="xs" c="dimmed" lineClamp={2}>
                    {doc.description}
                  </Text>
                </div>
                <IconArrowRight size={16} />
              </Group>
            </Card>
          ))}
        </Group>
      </Stack>
    </Paper>
  );
}
