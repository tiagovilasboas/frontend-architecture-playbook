import React, { useRef } from 'react';
import { Group, Box, Stack, TypographyStylesProvider } from '@mantine/core';
import { ReadingTime } from './ReadingTime';
import { RelatedContent } from './RelatedContent';
import PageToc from './PageToc';
import AppBreadcrumbs from './AppBreadcrumbs';
interface DocPageLayoutProps {
  children: React.ReactNode;
  showRelated?: boolean;
  /** Optional: props for the main content wrapper (e.g. data-content-driven, title) */
  contentWrapperProps?: React.HTMLAttributes<HTMLDivElement> & {
    'data-content-driven'?: boolean;
  };
}

/**
 * Layout for doc pages: sidebar (page TOC) + main content.
 * PageToc discovers headings (h2/h3) from the content DOM.
 */
export default function DocPageLayout({
  children,
  showRelated = true,
  contentWrapperProps,
}: DocPageLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      w="100%"
      className="doc-page-wrapper"
      style={{
        maxWidth: '100%',
      }}
    >
      {/* Fixed TOC on the right, narrow width – does not take grid space */}
      <Box
        visibleFrom="md"
        style={{
          position: 'fixed',
          top: 72,
          right: 24,
          width: 200,
          maxWidth: 'calc(100vw - 2rem)',
          zIndex: 5,
        }}
        className="doc-page-toc"
      >
        <PageToc contentRef={contentRef} />
      </Box>

      <Box pr={{ base: 0, md: 224 }}>
        <Stack gap={4}>
          <Group justify="space-between" align="center" wrap="nowrap" pb={2}>
            <Box style={{ minWidth: 0 }}>
              <AppBreadcrumbs />
            </Box>
            <ReadingTime />
          </Group>
          <div ref={contentRef} data-doc-content {...contentWrapperProps}>
            <TypographyStylesProvider>{children}</TypographyStylesProvider>
          </div>
        </Stack>
        {showRelated && <RelatedContent />}
      </Box>
    </Box>
  );
}
