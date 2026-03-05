interface DiagramBlockProps {
  title: string;
  children: React.ReactNode;
}

const DiagramBlock = ({ title, children }: DiagramBlockProps) => {
  return (
    <div className="my-8 rounded-lg border border-border bg-card p-6">
      <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {title}
      </h4>
      <div className="flex items-center justify-center overflow-x-auto py-4">
        {children}
      </div>
    </div>
  );
};

export default DiagramBlock;
