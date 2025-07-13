function CleanArchitecture() {
  return (
    <article style={{ padding: '1rem' }}>
      <h1>Clean Architecture</h1>
      <p>
        A <strong>Clean Architecture</strong> traz para o front-end o princípio de
        <em>independência de frameworks</em>: sua lógica de negócio deve sobreviver mesmo
        que amanhã o React seja trocado por outra biblioteca. Ao dividir o código em
        camadas (Entidades → Casos de Uso → Adaptadores → Frameworks), ganhamos teste
        unitário fácil, baixa dependência de UI e um core de negócio que dura muitos anos.
      </p>
      <h2>Benefícios</h2>
      <ul>
        <li>Código altamente testável (camadas sem DOM).</li>
        <li>Facilidade para migrar de framework ou renderizador.</li>
        <li>Separação clara entre regras de negócio e detalhes de infraestrutura.</li>
      </ul>
      <h2>Quando aplicar</h2>
      <ul>
        <li>Produtos de longa duração onde manutenção é crítica.</li>
        <li>Equipes grandes que precisam de contratos claros entre camadas.</li>
      </ul>
    </article>
  );
}

CleanArchitecture.metadata = {
  title: 'Clean Architecture',
  description: 'Conteúdo em construção.'
};

export default CleanArchitecture;
