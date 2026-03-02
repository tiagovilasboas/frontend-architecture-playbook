import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDoc } from '../lib/content.tsx';
import { getDocContent } from '../lib/content-data';
import { TypographyStylesProvider, Group } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { ReadingTime } from '../components/ReadingTime.tsx';
import { RelatedContent } from '../components/RelatedContent.tsx';
import ContentRenderer from '../components/ContentRenderer';
import GuideNavigation from '../components/GuideNavigation';

type CollectionType =
  | 'guides'
  | 'architectures'
  | 'patterns'
  | 'techniques'
  | 'best-practices';

export default function DocPage() {
  const { collection, slug } = useParams();
  const contentPage =
    collection && slug ? getDocContent(collection, slug) : null;
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

  // Content-driven page: render from JSON
  if (contentPage) {
    const after = (
      <>
        {contentPage.layout?.showGuideNav && (
          <GuideNavigation currentGuide={contentPage.layout.showGuideNav} />
        )}
      </>
    );

    return (
      <>
        <Group mb={{ base: 'xs', sm: 'md' }} justify="flex-end" gap="xs">
          <ReadingTime />
          <span
            data-content-driven-marker
            title="Página migrada (conteúdo em JSON)"
            aria-hidden
          />
        </Group>
        <div data-doc-content data-content-driven>
          <TypographyStylesProvider>
            <ContentRenderer page={contentPage} after={after} />
          </TypographyStylesProvider>
        </div>
        {contentPage.layout?.showRelated !== false && <RelatedContent />}
      </>
    );
  }

  // Legacy: React component
  if (!doc) return <p>Not found</p>;
  const Component = doc.component;
  const components = {
    pre: (props: React.ComponentProps<'pre'>) => <CodeHighlight {...props} />,
  };
  const showGuideNav = collection === 'guides' && slug;

  return (
    <>
      <Group mb="md" justify="flex-end">
        <ReadingTime />
      </Group>
      <div data-doc-content>
        <TypographyStylesProvider>
          <Component components={components} />
          {showGuideNav && <GuideNavigation currentGuide={slug} />}
        </TypographyStylesProvider>
      </div>
      <RelatedContent />
    </>
  );
}
