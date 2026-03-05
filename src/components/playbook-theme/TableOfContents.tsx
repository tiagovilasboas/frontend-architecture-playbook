import { Link } from 'react-router-dom';

export interface TocItem {
  number: string;
  title: string;
  id: string;
}

export interface TableOfContentsProps {
  title?: string;
  items: TocItem[];
}

export function TableOfContents({
  title = 'Índice',
  items,
}: TableOfContentsProps): React.ReactElement {
  return (
    <nav className="border-b border-border py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {title}
        </h2>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <Link
              key={item.id}
              to={`#${item.id}`}
              className="group flex items-baseline gap-3 border-b border-border py-3 last:border-0 sm:border-0 sm:py-2 text-foreground no-underline transition-colors hover:text-primary"
            >
              <span className="font-mono text-xs text-highlight-muted">
                {item.number}
              </span>
              <span className="text-sm">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
