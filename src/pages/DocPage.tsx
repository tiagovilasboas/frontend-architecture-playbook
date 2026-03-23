import { use, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc } from '../lib/content.tsx';
import { getDocContentPromise } from '../lib/content-data';
import { CodeHighlight } from '@mantine/code-highlight';
import '@mantine/code-highlight/styles.css';
import ContentRenderer from '../components/ContentRenderer';
import DocPageLayout from '../components/DocPageLayout';

type CollectionType =
  | 'guides'
  | 'architectures'
  | 'patterns'
  | 'techniques'
  | 'best-practices';

export default function DocPage() {
  const { collection, slug } = useParams();
  const contentPromise =
    collection && slug ? getDocContentPromise(collection, slug) : null;
  const contentPage = contentPromise ? use(contentPromise) : null;
  const doc =
    collection && slug ? getDoc(collection as CollectionType, slug) : null;

  useEffect(() => {
    if (contentPage?.meta?.title) {
      document.title = `${contentPage.meta.title} · Front Arch. Playbook`;
    } else if (doc?.title) {
      document.title = `${doc.title} · Front Arch. Playbook`;
    }
  }, [contentPage?.meta?.title, doc?.title]);

  if (!collection || !slug) return <p>Invalid route</p>;

  if (contentPage) {
    return (
      <DocPageLayout
        showRelated={contentPage.layout?.showRelated !== false}
        contentWrapperProps={{
          'data-content-driven': true,
          title: 'Página migrada (conteúdo em JSON)',
        }}
      >
        <ContentRenderer page={contentPage} />
      </DocPageLayout>
    );
  }

  if (!doc) return <p>Not found</p>;
  type LegacyDocProps = {
    components?: { pre: React.ComponentType<React.ComponentProps<'pre'>> };
  };
  const Component = doc.component as React.ComponentType<LegacyDocProps>;
  const components: LegacyDocProps['components'] = {
    pre: props => <CodeHighlight {...props} />,
  };

  return (
    <DocPageLayout showRelated>
      <Component components={components} />
    </DocPageLayout>
  );
}
