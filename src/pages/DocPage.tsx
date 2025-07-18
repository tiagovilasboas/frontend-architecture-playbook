import { useParams } from 'react-router-dom';
import { getDoc } from '../lib/content.tsx';
import { TypographyStylesProvider, Container } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';

export default function DocPage() {
  const { collection, slug } = useParams();
  if (!collection || !slug) return <p>Invalid route</p>;
  const doc = getDoc(collection as 'guides' | 'patterns', slug);
  if (!doc) return <p>Not found</p>;

  const Component = doc.component;
  const components = {
    pre: (props: React.ComponentProps<'pre'>) => <CodeHighlight {...props} />,
  };
  return (
    <Container size="lg">
      <TypographyStylesProvider>
        <Component components={components} />
      </TypographyStylesProvider>
    </Container>
  );
}
