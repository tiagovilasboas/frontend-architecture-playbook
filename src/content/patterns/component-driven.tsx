function ComponentDriven() {
  return (
    <article style={{ padding: '1rem' }}>
      <h1>Component Driven</h1>
      <p>
        <strong>Component-Driven Development (CDD)</strong> trata cada componente de UI
        como um produto em si. Em vez de codar na página real, construímos na “oficina”
        (Storybook, Ladle…) onde podemos visualizar, testar e documentar em isolamento.
      </p>
      <h2>Vantagens</h2>
      <ul>
        <li>Colaboração Designer⇄Dev: a oficina vira documentação viva.</li>
        <li>Maior cobertura de estados edge, reduzindo bugs visuais.</li>
        <li>Reutilização natural em múltiplas aplicações.</li>
      </ul>
      <h2>Fluxo resumido</h2>
      <ol>
        <li>Crie a história do componente nos vários estados.</li>
        <li>Implemente lógica/estilo até passar testes visuais.</li>
        <li>Componha moléculas e telas na aplicação principal.</li>
      </ol>
    </article>
  );
}

ComponentDriven.metadata = {
  title: 'Component Driven',
  description: 'Conteúdo em construção.'
};

export default ComponentDriven;
