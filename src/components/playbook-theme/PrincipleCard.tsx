import { motion } from 'framer-motion';

export interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
}

export function PrincipleCard({
  icon,
  title,
  description,
  items = [],
}: PrincipleCardProps): React.ReactElement {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-glow"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-secondary [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold tracking-tight">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {items.length > 0 ? (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-secondary-foreground"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}
