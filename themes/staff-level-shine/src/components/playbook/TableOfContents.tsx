const sections = [
  { num: '01', title: 'Princípios Arquiteturais' },
  { num: '02', title: 'Estrutura de Projeto' },
  { num: '03', title: 'Gerenciamento de Estado' },
  { num: '04', title: 'Design System & Tokens' },
  { num: '05', title: 'Performance & Otimização' },
  { num: '06', title: 'Testing Strategy' },
  { num: '07', title: 'CI/CD & Deploy' },
  { num: '08', title: 'Observabilidade' },
];

const TableOfContents = () => {
  return (
    <nav className="border-b border-border py-12">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Índice
        </h2>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map(s => (
            <div
              key={s.num}
              className="group flex items-baseline gap-3 border-b border-border py-3 last:border-0 sm:border-0 sm:py-2"
            >
              <span className="font-mono text-xs text-highlight-muted">
                {s.num}
              </span>
              <span className="text-sm text-foreground transition-colors group-hover:text-primary">
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default TableOfContents;
