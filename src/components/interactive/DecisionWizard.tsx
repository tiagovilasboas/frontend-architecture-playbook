import { useState } from 'react';
import { Stack, Card, Title, Text, Button, Group, SimpleGrid, ThemeIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { patterns } from '../../lib/content.ts';
import { IconPuzzle, IconHierarchy, IconStack2, IconShare, IconGitBranch, IconDeviceDesktop, IconSettings, IconTopologyStar3, IconArrowRight, IconBroadcast, IconSettings2 } from '@tabler/icons-react';
import './DecisionWizard.css';

// Mapeamento de ícones por padrão
const patternIcons: Record<string, React.ReactNode> = {
  'atomic-design': <IconPuzzle size={28} />, // Atomic Design
  'clean-architecture': <IconHierarchy size={28} />, // Clean Architecture
  'component-driven': <IconStack2 size={28} />, // Component Driven
  'event-driven': <IconBroadcast size={28} />, // Event Driven
  'feature-flags': <IconSettings2 size={28} />, // Feature Flags
  'islands-architecture': <IconArrowRight size={28} />, // Islands
  'jamstack': <IconShare size={28} />, // Jamstack
  'micro-frontends': <IconGitBranch size={28} />, // Micro-frontends
  'monorepo': <IconTopologyStar3 size={28} />, // Monorepo
  'spa': <IconDeviceDesktop size={28} />, // SPA
  'state-machines': <IconSettings size={28} />, // State Machines
};

type TeamSize = 'small' | 'medium' | 'large';
type Complexity = 'low' | 'medium' | 'high';

export default function DecisionWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [team, setTeam] = useState<TeamSize | null>(null);
  const [complexity, setComplexity] = useState<Complexity | null>(null);

  const selectTeam = (value: TeamSize) => {
    setTeam(value);
    setStep(2);
  };

  const selectComplexity = (value: Complexity) => {
    setComplexity(value);
    setStep(3);
  };

  const recommendations = (): string[] => {
    if (!team || !complexity) return [];
    if (team === 'small' && complexity === 'low') return ['jamstack', 'islands-architecture'];
    if (team === 'small' && complexity === 'medium') return ['spa', 'component-driven'];
    if (team === 'small' && complexity === 'high') return ['clean-architecture', 'event-driven'];
    if (team === 'medium' && complexity === 'low') return ['jamstack', 'monorepo'];
    if (team === 'medium' && complexity === 'medium') return ['spa', 'atomic-design', 'feature-flags'];
    if (team === 'medium' && complexity === 'high') return ['clean-architecture', 'state-machines', 'event-driven'];
    if (team === 'large' && complexity === 'low') return ['monorepo', 'feature-flags'];
    if (team === 'large' && complexity === 'medium') return ['monorepo', 'spa', 'feature-flags'];
    if (team === 'large' && complexity === 'high') return ['micro-frontends', 'clean-architecture', 'state-machines', 'event-driven'];
    return ['spa'];
  };

  const patternResults = patterns.filter((p) => recommendations().includes(p.slug));

  const CardOption = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <Card 
      shadow="sm" 
      padding="lg" 
      radius="md" 
      withBorder 
      onClick={onClick} 
      style={{ cursor: 'pointer' }}
      className="wizard-option-card"
    >
      <Text fw={500}>{label}</Text>
    </Card>
  );

  return (
    <Stack gap="xl" className="wizard-container">
      {/* Step 1 */}
      {step === 1 && (
        <div>
          <Title order={4} mb="sm">Qual o tamanho do seu time?</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            <CardOption label="Pequeno (1-5)" onClick={() => selectTeam('small')} />
            <CardOption label="Médio (6-15)" onClick={() => selectTeam('medium')} />
            <CardOption label="Grande (+15)" onClick={() => selectTeam('large')} />
          </SimpleGrid>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <Title order={4} mb="sm">Qual a complexidade do produto?</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            <CardOption label="Baixa" onClick={() => selectComplexity('low')} />
            <CardOption label="Média" onClick={() => selectComplexity('medium')} />
            <CardOption label="Alta" onClick={() => selectComplexity('high')} />
          </SimpleGrid>
          <Button variant="subtle" mt="md" onClick={() => setStep(1)} size="xs">Voltar</Button>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <Title order={4} mb="sm">Recomendações</Title>
          <Stack gap="sm">
            {patternResults.map((pat) => (
              <Card
                key={pat.slug}
                component={Link}
                to={`/patterns/${pat.slug}`}
                withBorder
                shadow="md"
                padding="xl"
                radius="md"
                className="wizard-recommendation-card"
              >
                <Group align="flex-start" gap="md" wrap="nowrap">
                  <ThemeIcon size={44} radius="md" variant="light" color="gray">
                    {patternIcons[pat.slug] || <IconPuzzle size={28} />}
                  </ThemeIcon>
                  <div style={{ flex: 1 }}>
                    <Text fw={700} size="lg" mb={4}>{pat.title}</Text>
                    {pat.description && <Text c="dimmed" size="sm" mb="xs">{pat.description}</Text>}
                    <Button variant="light" size="xs" mt={4} rightSection={<IconArrowRight size={16} />} component={Link} to={`/patterns/${pat.slug}`}>Saiba mais</Button>
                  </div>
                </Group>
              </Card>
            ))}
          </Stack>
          <Group mt="md" mb="md" gap="xs">
            <Button variant="subtle" size="xs" onClick={() => setStep(2)}>Voltar</Button>
            <Button size="xs" onClick={() => { setTeam(null); setComplexity(null); setStep(1); }}>Reiniciar</Button>
          </Group>
        </div>
      )}
    </Stack>
  );
} 