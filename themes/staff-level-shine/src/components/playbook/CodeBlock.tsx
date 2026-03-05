interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string;
}

const CodeBlock = ({ title, code }: CodeBlockProps) => {
  return (
    <div className="code-block overflow-hidden">
      {title && (
        <div className="border-b border-border px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">
            {title}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-secondary-foreground">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
