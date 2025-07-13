function IslandsArchitecture() {
  return (
    <article>
      <h1>Islands Architecture</h1>
      <p>
        A <strong>Arquitetura de Ilhas</strong> mescla performance de sites estáticos com
        interatividade de SPAs. A página chega como HTML puro; pequenas “ilhas” de JS
        ficam responsáveis só pelas partes interativas (ex.: formulário, comentários).
      </p>
      <h2>Por que importa?</h2>
      <ul>
        <li>Melhora LCP e SEO: conteúdo já está renderizado.</li>
        <li>Carregamento progressivo: JS é baixado apenas quando cada ilha precisa.</li>
        <li>Pode misturar frameworks diferentes na mesma página.</li>
      </ul>
      <h2>Ferramentas populares</h2>
      <ul>
        <li>Astro (<code>client:visible</code>, <code>client:idle</code>).</li>
        <li>Qwik, Fresh (Deno), Marko.</li>
      </ul>
    </article>
  );
}

IslandsArchitecture.metadata = {
  title: 'Islands Architecture',
  description: 'Conteúdo em construção.'
};

export default IslandsArchitecture;
