import { useParams } from 'react-router-dom';
import { getDocContent } from '../lib/content-data';
import ContentRenderer from './ContentRenderer';
import GuideNavigation from './GuideNavigation';

/**
 * Renders a content-driven page from JSON (collection/slug from route).
 * Used as the component in DocMeta for guides that have content in src/data/content/.
 */
export default function ContentDrivenPage() {
  const { collection, slug } = useParams<{
    collection: string;
    slug: string;
  }>();
  if (!collection || !slug) return null;

  const contentPage = getDocContent(collection, slug);
  if (!contentPage) return null;

  const after = contentPage.layout?.showGuideNav ? (
    <GuideNavigation currentGuide={contentPage.layout.showGuideNav} />
  ) : undefined;

  return <ContentRenderer page={contentPage} after={after} />;
}
