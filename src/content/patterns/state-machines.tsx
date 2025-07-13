function StateMachines() {
  return (
    <article>
      <h1>State Machines</h1>
      <p>
        <strong>Máquinas de Estado</strong> (ex.: XState) modelam a UI como um grafo
        finito de estados e transições, evitando flags conflitantes como
        <code>isLoading</code> + <code>isError</code>. Ideal para fluxos com passos e
        regras claras.
      </p>
      <h2>Vantagens</h2>
      <ul><li>Elimina “estados impossíveis”.</li><li>Visualização e testes mais simples.</li></ul>
    </article>
  );
}

StateMachines.metadata = {
  title: 'State Machines',
  description: 'Conteúdo em construção.'
};

export default StateMachines;
