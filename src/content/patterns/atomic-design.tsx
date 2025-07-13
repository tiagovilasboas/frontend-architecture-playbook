function AtomicDesign() {
  return (
    <article style={{ padding: '1rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Atomic Design&nbsp;— Organizando UI como Lego</h1>

      <p>
        Criado por <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank">Brad&nbsp;Frost</a>, o Atomic Design propõe enxergar componentes de interface como
        blocos químicos: <em>átomos</em>, <em>moléculas</em>, <em>organismos</em>, <em>templates</em> e
        <em>páginas</em>. A ideia é simples&nbsp;&mdash; e poderosa: construir sistemas a partir de
        peças minúsculas e reutilizáveis, como fazemos com Lego.
      </p>

      <h2>O Modelo em 5 Etapas</h2>
      <ol>
        <li>
          <strong>Átomos</strong>: elementos HTML puros (button, input, label). São
          a menor unidade de composição.
        </li>
        <li>
          <strong>Moléculas</strong>: combinação de átomos que juntos cumprem uma
          função simples (campo de busca = label + input + botão).
        </li>
        <li>
          <strong>Organismos</strong>: componentes complexos e independentes
          (header, footer, card). Já carregam contexto de layout.
        </li>
        <li>
          <strong>Templates</strong>: esqueleto de página. Posicionam organismos
          mas ainda usam conteúdo fictício.
        </li>
        <li>
          <strong>Páginas</strong>: templates com dados reais. Permitem validar
          se o sistema funciona em cenários de produção.
        </li>
      </ol>

      <h2>Por que vale a pena?</h2>
      <ul>
        <li><strong>Consistência visual</strong> — todo mundo reutiliza as mesmas peças.</li>
        <li><strong>Velocidade</strong> — criar novas telas vira um exercício de montar Lego.</li>
        <li><strong>Escalabilidade</strong> — componentes menores sofrem menos <em>ripple effects</em>.</li>
      </ul>

      <h2>Quando usar</h2>
      <ul>
        <li>Sistemas de Design corporativos.</li>
        <li>Produtos com vida longa e times grandes.</li>
        <li>Projetos que exigem acessibilidade e padronização.</li>
      </ul>

      <h2>Cuidados</h2>
      <ul>
        <li>Evite dogmatismo: o objetivo é composição, não classificar tudo.</li>
        <li>Documente bem a hierarquia para evitar confusão entre níveis.</li>
      </ul>

      <blockquote>
        <p>
          <strong>Resumo:</strong> pense em Lego, componha do pequeno para o grande e garanta que cada peça possa
          ser testada e reutilizada isoladamente.
        </p>
      </blockquote>
    </article>
  );
}

AtomicDesign.metadata = {
  title: 'Atomic Design',
  description: 'Metodologia para criar sistemas de UI a partir de componentes atômicos.'
};

export default AtomicDesign;
