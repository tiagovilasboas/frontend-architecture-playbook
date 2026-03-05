import { motion } from 'framer-motion';

const PlaybookHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
      {/* Grid background */}
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
              Staff Engineer Level
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-[1.05] tracking-tighter md:text-7xl">
            Front-End
            <br />
            <span className="text-gradient">Architecture</span>
            <br />
            Playbook
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Decisões arquiteturais, padrões de projeto e estratégias de escala
            para aplicações front-end de alta complexidade. Um guia prático para
            líderes técnicos.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              'React',
              'TypeScript',
              'Design Systems',
              'Performance',
              'Testing',
              'CI/CD',
            ].map(tag => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 font-mono text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlaybookHero;
