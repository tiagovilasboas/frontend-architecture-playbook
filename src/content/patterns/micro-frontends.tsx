function MicroFrontends() {
  return (
    <article>
      <h1>Micro Frontends</h1>
      <p>
        <strong>Micro-frontends</strong> aplicam a filosofia dos microserviços ao front-end:
        cada área da UI é um aplicativo separado, mantido por um time autônomo. O shell
        da aplicação orquestra a composição (via <em>Module Federation</em>, iframe ou
        includes server-side).
      </p>
      <h2>Vantagens</h2>
      <ul>
        <li>Deploys independentes e ownership claro.</li>
        <li>Escala organizacional: cada time decide tecnologia e ritmo.</li>
      </ul>
      <h2>Desafios</h2>
      <ul>
        <li>Overhead de performance (bundles duplicados, múltiplos runtimes).</li>
        <li>Garantir consistência visual e experiência coesa.</li>
        <li>Gerenciar estado global e roteamento cruzado.</li>
      </ul>
    </article>
  );
}

MicroFrontends.metadata = {
  title: 'Micro Frontends',
  description: 'Conteúdo em construção.'
};

export default MicroFrontends;
