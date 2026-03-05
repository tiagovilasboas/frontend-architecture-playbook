import { motion } from 'framer-motion';

export interface PlaybookHeroProps {
  label?: string;
  titleLine1?: string;
  titleHighlight?: string;
  titleLine2?: string;
  subtitle?: string;
  tags?: string[];
}

export function PlaybookHero({
  label = 'Staff Engineer Level',
  titleLine1 = 'Front-End',
  titleHighlight = 'Architecture',
  titleLine2 = 'Playbook',
  subtitle = 'Decisões arquiteturais, padrões de projeto e estratégias de escala para aplicações front-end de alta complexidade. Um guia prático para líderes técnicos.',
  tags = [
    'React',
    'TypeScript',
    'Design Systems',
    'Performance',
    'Testing',
    'CI/CD',
  ],
}: PlaybookHeroProps): React.ReactElement {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {label}
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
            {titleLine1}
            <br />
            <span className="text-gradient">{titleHighlight}</span>
            <br />
            {titleLine2}
          </h1>
          {subtitle ? (
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
          {tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-4 py-1.5 font-mono text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
