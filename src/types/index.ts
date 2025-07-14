export interface DocMeta {
  slug: string;
  title: string;
  description?: string;
  collection: 'guides' | 'architectures' | 'patterns' | 'techniques' | 'best-practices';
} 