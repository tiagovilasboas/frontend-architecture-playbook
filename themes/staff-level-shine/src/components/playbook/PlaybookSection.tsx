import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PlaybookSectionProps {
  number: string;
  title: string;
  description: string;
  children: ReactNode;
}

const PlaybookSection = ({
  number,
  title,
  description,
  children,
}: PlaybookSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-border py-16 md:py-24"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 grid gap-4 md:grid-cols-[120px_1fr]">
          <span className="font-mono text-sm text-highlight-muted">
            {number}
          </span>
          <div>
            <h2 className="mb-3 text-3xl font-black tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="md:ml-[120px]">{children}</div>
      </div>
    </motion.section>
  );
};

export default PlaybookSection;
