import { useState } from 'react';
import { Stack, SegmentedControl, Button, Title, List } from '@mantine/core';
import { Link } from 'react-router-dom';
import { patterns } from '../../lib/content.ts';

type TeamSize = 'small' | 'medium' | 'large';
type Complexity = 'low' | 'medium' | 'high';

export default function DecisionWizard() {
  const [team, setTeam] = useState<TeamSize>('small');
  const [complexity, setComplexity] = useState<Complexity>('low');
  const [show, setShow] = useState(false);

  const recommendations = (): string[] => {
    if (team === 'small' && complexity === 'low') return ['jamstack', 'islands-architecture'];
    if (team === 'small' && complexity === 'medium') return ['spa', 'component-driven'];
    if (team === 'medium' && complexity === 'low') return ['jamstack', 'monorepo'];
    if (team === 'medium' && complexity === 'medium') return ['spa', 'atomic-design'];
    if (team === 'large' && complexity === 'high') return ['micro-frontends', 'clean-architecture', 'monorepo'];
    if (complexity === 'high') return ['clean-architecture', 'state-machines'];
    return ['spa'];
  };

  const resultIds = show ? recommendations() : [];
  const results = patterns.filter((p) => resultIds.includes(p.slug));

  return (
    <Stack gap="md">
      <Title order={3}>Encontre sua Arquitetura</Title>
      <SegmentedControl
        data={[
          { label: 'Time pequeno (1-5)', value: 'small' },
          { label: 'Médio (6-15)', value: 'medium' },
          { label: 'Grande (+15)', value: 'large' },
        ]}
        value={team}
        onChange={(v) => setTeam(v as TeamSize)}
        fullWidth
      />
      <SegmentedControl
        data={[
          { label: 'Baixa complexidade', value: 'low' },
          { label: 'Média', value: 'medium' },
          { label: 'Alta', value: 'high' },
        ]}
        value={complexity}
        onChange={(v) => setComplexity(v as Complexity)}
        fullWidth
      />
      <Button onClick={() => setShow(true)}>Mostrar recomendações</Button>

      {show && (
        <div>
          <Title order={4} mb="xs">Recomendações</Title>
          <List spacing="xs">
            {results.map((r) => (
              <List.Item key={r.slug}>
                <Link to={`/patterns/${r.slug}`}>{r.title}</Link>
              </List.Item>
            ))}
          </List>
        </div>
      )}
    </Stack>
  );
} 