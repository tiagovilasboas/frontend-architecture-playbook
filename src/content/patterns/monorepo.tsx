function Monorepo() {
  return (
    <article>
      <h1>Monorepo</h1>
      <p>
        Um <strong>Monorepo</strong> centraliza múltiplos pacotes/apps em um único
        repositório Git. Isso permite <em>commits atômicos</em> que modificam biblioteca
        e consumidor ao mesmo tempo, acabando com o “dependency hell”. Ferramentas como
        Nx e Turborepo otimizam builds incrementais.
      </p>
      <h2>Pontos-chave</h2>
      <ul>
        <li>Compartilhamento de código via packages internos.</li>
        <li>Visibilidade total de mudanças impactantes.</li>
        <li>Requer cultura de CI/CD e caches para escalar.</li>
      </ul>
    </article>
  );
}

Monorepo.metadata = {
  title: 'Monorepo',
  description: 'Conteúdo em construção.'
};

export default Monorepo;
