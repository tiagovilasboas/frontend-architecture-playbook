function Jamstack() {
  return (
    <article>
      <h1>Jamstack</h1>
      <p>
        <strong>Jamstack</strong> (JavaScript, APIs, Markup) pré-gera todo o HTML em
        build-time e serve via CDN. Qualquer dinamismo acontece no cliente, chamando
        APIs de terceiros ou serverless. Resultado: sites ultrarrápidos e seguros.
      </p>
      <h2>Quando usar</h2>
      <ul>
        <li>Conteúdo estático que muda via CMS ou geração.</li>
        <li>Projetos onde performance e custo de hospedagem são prioridade.</li>
      </ul>
    </article>
  );
}

Jamstack.metadata = {
  title: 'Jamstack',
  description: 'Conteúdo em construção.'
};

export default Jamstack;
