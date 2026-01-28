import { useParams } from 'react-router-dom';
import { getDoc } from '../lib/content.tsx';
import { TypographyStylesProvider, Group } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { ReadingTime } from '../components/ReadingTime.tsx';
import { RelatedContent } from '../components/RelatedContent.tsx';

export default function DocPage() {
  const { collection, slug } = useParams();
  if (!collection || !slug) return <p>Invalid route</p>;
  const doc = getDoc(
    collection as
      | 'guides'
      | 'architectures'
      | 'patterns'
      | 'techniques'
      | 'best-practices',
    slug
  );
  if (!doc) return <p>Not found</p>;

  const Component = doc.component;
  const components = {
    pre: (props: React.ComponentProps<'pre'>) => <CodeHighlight {...props} />,
  };
  return (
    <>
      <Group mb="md" justify="flex-end">
        <ReadingTime />
      </Group>
      <TypographyStylesProvider>
        <Component components={components} />
      </TypographyStylesProvider>
      <RelatedContent />
    </>
  );
}
