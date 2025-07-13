import DecisionWizard from '../../components/interactive/DecisionWizard.tsx';

function HowToChoose() {
  return (
    <article>
      <h1>Como Escolher sua Arquitetura Front-End</h1>
      
      <p>
        <strong>Não existe “a melhor arquitetura”.</strong> Existe a arquitetura que resolve o seu problema, no seu contexto, com o seu time.
        Senta aí, responde o wizard ou lê os pontos abaixo. O objetivo é te ajudar a tomar uma decisão consciente — sem modinha, sem hype, só o que funciona na vida real.
      </p>

      <DecisionWizard />

      <p>
        <strong>Arquitetura front-end é trade-off atrás de trade-off.</strong> Não existe bala de prata. O que resolve pra um, pode ser dor de cabeça pra outro. O segredo? Saber o que você precisa agora — e não fechar portas pro futuro.
      </p>

      <h2>1. Contexto de Time</h2>
      <ul>
        <li>
          <strong>Time pequeno (até 5 pessoas):</strong> Vai de simples. SPA, MPA, o que for mais rápido pro seu time entregar. Não inventa moda.
        </li>
        <li>
          <strong>Squads/múltiplos times:</strong> Cada um no seu quadrado. Monorepo ou micro-frontends pra não dar briga.
        </li>
      </ul>

      <h2>2. Tipo de Produto</h2>
      <ul>
        <li>
          <strong>Conteúdo estático (landing, blog):</strong> SEO é rei. SSG (Astro, Next.js) resolve bonito.
        </li>
        <li>
          <strong>Dashboard, SaaS, CRUD:</strong> O usuário quer agilidade, não precisa de SSR. SPA bem feita resolve.
        </li>
        <li>
          <strong>App complexo (Figma, ERP):</strong> Aqui o bicho pega. Clean Architecture, máquinas de estado, separa bem as camadas.
        </li>
      </ul>

      <h2>3. SEO & Performance</h2>
      <p>
        <strong>De onde vem seu usuário?</strong> Se é Google, SSR/SSG é obrigatório. Se é login direto, SPA voando é o que importa.
      </p>

      <h2>4. Time-to-Market</h2>
      <p>
        <strong>MVP/startup:</strong> Vai no que o time já domina. O objetivo é entregar rápido, aprender e iterar.<br />
        <strong>Produto maduro:</strong> Aí vale investir em base robusta. Refatorar depois dói mais.
      </p>

      <h2>5. Visão de Futuro</h2>
      <p>
        <strong>Vai crescer?</strong> Já pensa em modularidade. Feature folders, contratos claros, separa o que é compartilhado.
      </p>

      <blockquote>
        <p>
          <strong>Regra de ouro:</strong> Resolve o problema de hoje, mas não se fecha pro amanhã. Código simples, portas abertas pra evoluir.
        </p>
      </blockquote>

      <h2 id="o-desafio-da-escolha">O Desafio da Escolha</h2>
      <p>
        <strong>Arquitetura é o que faz seu projeto durar (ou morrer na praia).</strong> Escolheu errado? Vai sofrer pra manter, escalar, contratar. Escolheu certo? O time voa, o produto cresce.
      </p>
      <p>
        <strong>Não existe fórmula mágica.</strong> O que funciona pra um squad gigante pode ser overkill pra uma startup. O segredo é saber onde você está e pra onde quer ir.
      </p>
      <p>
        <strong>Segue o jogo:</strong> abaixo estão os fatores que realmente importam. O resto é barulho.
      </p>
      <hr />

      <h3>1. Tamanho e Maturidade do Time</h3>
      <p><strong>Time pequeno:</strong> faz simples, entrega rápido. SPA, Astro, o que for menos burocrático.<br />
      <strong>Time grande:</strong> separa bem as coisas. Monorepo, micro-frontends, cada um no seu quadrado.</p>

      <h3>2. Complexidade e Escopo do Produto</h3>
      <p><strong>Produto simples:</strong> SEO e performance. SSG, Astro, Next.js.<br />
      <strong>Produto médio:</strong> SPA bem feita, separa UI, lógica, dados.<br />
      <strong>Produto complexo:</strong> Clean Architecture, máquinas de estado, muita separação de responsabilidade.</p>

      <h3>3. Performance e SEO</h3>
      <ul>
        <li><strong>SEO é tudo:</strong> SSR/SSG, arquitetura de ilhas, Next.js.</li>
        <li><strong>Usuário logado:</strong> SPA rápida, experiência fluida.</li>
      </ul>

      <h3>4. Velocidade de Entrega</h3>
      <ul>
        <li><strong>MVP:</strong> Menos cerimônia, mais entrega.</li>
        <li><strong>Enterprise:</strong> Investe em base sólida, pensa no amanhã.</li>
      </ul>

      <h3>5. Escalabilidade e Manutenibilidade</h3>
      <ul>
        <li><strong>Vai crescer?</strong> Modulariza, separa domínio, pensa em shared libs.</li>
        <li><strong>Quer manter fácil?</strong> Teste, CDD, documentação, onboarding simples.</li>
      </ul>
    </article>
  );
}

HowToChoose.metadata = {
  title: 'Como Escolher sua Arquitetura Front-End',
  description: 'Perguntas práticas para encontrar a melhor arquitetura para o seu contexto.'
};

export default HowToChoose;
