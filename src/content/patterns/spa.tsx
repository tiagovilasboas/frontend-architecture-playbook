function SPA() {
  return (
    <article className="content">
      <h1>Single Page Application (SPA)</h1>
      <p>
        Uma <strong>Single Page Application (SPA)</strong> carrega uma vez e depois
        navega via JavaScript, oferecendo experiência de app desktop. Ótima para
        aplicações ricas (Gmail, Figma), mas traz desafios de SEO, bundle size e estado.
      </p>
      <h2>Prós</h2>
      <ul><li>Navegação instantânea após o primeiro carregamento.</li><li>Stateful: mantém contexto entre páginas.</li></ul>
      <h2>Contras</h2>
      <ul><li>TTI inicial maior devido a bundles JS.</li><li>SEO depende de SSR/hidratação.</li></ul>
    </article>
  );
}

SPA.metadata = {
  title: 'Single Page Application (SPA)',
  description: 'Conteúdo em construção.'
};

export default SPA;
