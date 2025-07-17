import { useState } from 'react';
import { Stack, Card, Title, Text, Button, Group, SimpleGrid, ThemeIcon, Alert } from '@mantine/core';
import { Link } from 'react-router-dom';
import { architectures, patterns } from '../../lib/content.ts';
import { IconPuzzle, IconHierarchy, IconStack2, IconShare, IconGitBranch, IconDeviceDesktop, IconSettings, IconTopologyStar3, IconArrowRight, IconBroadcast, IconSettings2, IconBulb } from '@tabler/icons-react';
import './DecisionWizard.css';
import { useMediaQuery } from '@mantine/hooks';
import { getBonusPatterns } from './getBonusPatterns';

// Mapeamento de ícones por padrão
const patternIcons: Record<string, React.ReactNode> = {
  'atomic-design': <IconPuzzle size={28} />,
  'clean-architecture': <IconHierarchy size={28} />,
  'component-driven': <IconStack2 size={28} />,
  'event-driven': <IconBroadcast size={28} />,
  'feature-flags': <IconSettings2 size={28} />,
  'islands-architecture': <IconArrowRight size={28} />,
  'jamstack': <IconShare size={28} />,
  'micro-frontends': <IconGitBranch size={28} />,
  'monorepo': <IconTopologyStar3 size={28} />,
  'spa': <IconDeviceDesktop size={28} />,
  'state-machines': <IconSettings size={28} />,
};

// NOVOS TIPOS
const projectTypes = [
  { value: 'mvp', label: 'MVP/Protótipo' },
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'enterprise', label: 'Enterprise' },
  { value: 'startup', label: 'Startup' },
];

export default function DecisionWizard() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [willGrow, setWillGrow] = useState<boolean | null>(null);
  const [hasIntegrations, setHasIntegrations] = useState<boolean | null>(null);

  // Lógica enxuta de recomendações
  const recommendations = (): string[] => {
    if (!projectType || willGrow === null || hasIntegrations === null) return [];
    const scores: Record<string, number> = {};
    // MVP
    if (projectType === 'mvp') {
      scores['spa'] = 10;
      scores['jamstack'] = 8;
      if (hasIntegrations) scores['islands-architecture'] = 7;
    }
    // SaaS
    if (projectType === 'saas') {
      scores['clean-architecture'] = 10;
      scores['component-driven'] = 9;
      if (willGrow) scores['monorepo'] = 8;
      if (hasIntegrations) scores['feature-flags'] = 7;
    }
    // E-commerce
    if (projectType === 'ecommerce') {
      scores['event-driven'] = 10;
      scores['clean-architecture'] = 9;
      if (hasIntegrations) scores['state-machines'] = 8;
    }
    // Dashboard
    if (projectType === 'dashboard') {
      scores['component-driven'] = 10;
      scores['atomic-design'] = 9;
      scores['spa'] = 8;
    }
    // Enterprise
    if (projectType === 'enterprise') {
      if (willGrow) scores['micro-frontends'] = 10;
      scores['monorepo'] = 9;
      scores['clean-architecture'] = 8;
      if (hasIntegrations) scores['feature-flags'] = 8;
    }
    // Startup
    if (projectType === 'startup') {
      if (willGrow) scores['micro-frontends'] = 10;
      scores['clean-architecture'] = 9;
      scores['event-driven'] = 8;
      if (willGrow) scores['monorepo'] = 7;
    }
    // Fallback
    if (Object.keys(scores).length === 0) {
      scores['spa'] = 8;
      scores['component-driven'] = 7;
    }
    const sorted = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .map(([pattern]) => pattern);
    if (sorted.length === 0) return ['spa'];
    return sorted.slice(0, 3);
  };

  const allDocs = [...architectures, ...patterns];
  const patternResults = allDocs.filter((p) => recommendations().includes(p.slug));
  const answers = { projectType };
  const bonusResults = getBonusPatterns(answers)
    .map((bonus) => allDocs.find((doc) => doc.slug === bonus.slug))
    .filter((pat): pat is typeof allDocs[number] => Boolean(pat));

  // NOVO FLUXO
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <Title order={4} mb="sm">Qual o tipo do seu projeto?</Title>
            <SimpleGrid cols={2} spacing={isMobile ? 8 : 'md'}>
              {projectTypes.map((opt) => (
                <Card
                  key={opt.value}
                  withBorder
                  shadow={isMobile ? undefined : 'sm'}
                  padding={isMobile ? 'xs' : 'md'}
                  radius={isMobile ? 'sm' : 'md'}
                  style={{ cursor: 'pointer', minWidth: 0, ...(isMobile ? { marginBottom: 4 } : {}) }}
                  onClick={() => { setProjectType(opt.value); setStep(2); }}
                >
                  <Text fw={600} size={isMobile ? 'xs' : 'sm'}>{opt.label}</Text>
                </Card>
              ))}
            </SimpleGrid>
          </div>
        );
      case 2:
        return (
          <div>
            <Title order={4} mb="sm">Seu projeto vai crescer muito ou terá time grande?</Title>
            <Group gap={16} mt="md">
              <Button size={isMobile ? 'md' : 'sm'} fullWidth={isMobile} onClick={() => { setWillGrow(true); setStep(3); }}>Sim</Button>
              <Button size={isMobile ? 'md' : 'sm'} fullWidth={isMobile} onClick={() => { setWillGrow(false); setStep(3); }}>Não</Button>
            </Group>
            <Button variant="subtle" mt="md" onClick={() => setStep(1)} size={isMobile ? 'sm' : 'xs'} fullWidth={isMobile}>Voltar</Button>
          </div>
        );
      case 3:
        return (
          <div>
            <Title order={4} mb="sm">Vai integrar com muitos sistemas?</Title>
            <Group gap={16} mt="md">
              <Button size={isMobile ? 'md' : 'sm'} fullWidth={isMobile} onClick={() => { setHasIntegrations(true); setStep(4); }}>Sim</Button>
              <Button size={isMobile ? 'md' : 'sm'} fullWidth={isMobile} onClick={() => { setHasIntegrations(false); setStep(4); }}>Não</Button>
            </Group>
            <Button variant="subtle" mt="md" onClick={() => setStep(2)} size={isMobile ? 'sm' : 'xs'} fullWidth={isMobile}>Voltar</Button>
          </div>
        );
      case 4:
        return (
          <div style={isMobile ? { maxWidth: 420, margin: '0 auto', width: '100%' } : {}}>
            <Title order={4} mb="sm">Sugestões do Wizard</Title>
            <Alert color="blue" icon={<IconBulb size={16} />} radius="md" mb="md">
              <Text size="sm" fw={600} mb={4}>🎯 Baseado nas suas respostas, essas arquiteturas podem fazer sentido:</Text>
              <Text size="sm" c="dimmed">
                Mas lembra: isso é só um ponto de partida! A decisão final deve vir do seu conhecimento técnico e das necessidades reais do negócio. Contexto é tudo! 💡
              </Text>
            </Alert>
            <Stack gap={isMobile ? 2 : 'xs'}>
              {[...patternResults, ...bonusResults].map((pat, index) => (
                <Card
                  key={pat.slug}
                  component={Link}
                  to={`/patterns/${pat.slug}`}
                  withBorder
                  shadow={isMobile ? undefined : 'md'}
                  padding={isMobile ? 'xs' : 'md'}
                  radius="md"
                  className="wizard-recommendation-card"
                  style={isMobile ? { marginBottom: 6, height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' } : { marginBottom: 8, minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <Group align="flex-start" gap={isMobile ? 6 : 'sm'} wrap="nowrap">
                    <ThemeIcon size={isMobile ? 28 : 36} radius="md" variant="light" color="gray">
                      {patternIcons[pat.slug] || <IconPuzzle size={isMobile ? 16 : 20} />}
                    </ThemeIcon>
                    <div style={{ flex: 1 }}>
                      <Group gap={isMobile ? 2 : 'xs'} align="center" mb={4}>
                        <Text fw={700} size={isMobile ? 'sm' : 'md'}>{pat.title}</Text>
                        {index === 0 && (
                          <ThemeIcon size={isMobile ? 14 : 20} radius="sm" variant="light" color="green">
                            <IconBulb size={isMobile ? 10 : 12} />
                          </ThemeIcon>
                        )}
                      </Group>
                      {pat.description && <Text c="dimmed" size={isMobile ? 'xs' : 'sm'} mb="xs">{pat.description}</Text>}
                      <Button variant="light" size={isMobile ? 'xs' : 'xs'} mt={4} rightSection={<IconArrowRight size={isMobile ? 10 : 16} />} component={Link} to={`/patterns/${pat.slug}`} fullWidth={isMobile}>
                        Saiba mais
                      </Button>
                    </div>
                  </Group>
                </Card>
              ))}
            </Stack>
            <Alert color="green" icon={<IconBulb size={16} />} radius="md" mt="lg">
              <Text size="sm" fw={600} mb={4}>💡 Próximos passos:</Text>
              <Text size="sm" c="dimmed">
                • Leia sobre cada arquitetura sugerida<br/>
                • Considere os prós e contras<br/>
                • Teste em um projeto pequeno primeiro<br/>
                • Ajuste conforme o projeto evolui
              </Text>
            </Alert>
            <Group mt="md" mb="md" gap={isMobile ? 4 : 'xs'}>
              <Button variant="subtle" size={isMobile ? 'sm' : 'xs'} onClick={() => setStep(3)} fullWidth={isMobile}>Voltar</Button>
              <Button size={isMobile ? 'sm' : 'xs'} onClick={() => { 
                setProjectType(null); 
                setWillGrow(null);
                setHasIntegrations(null);
                setStep(1); 
              }} fullWidth={isMobile}>Reiniciar</Button>
            </Group>
          </div>
        );
    }
  };

  return (
    <Stack gap={isMobile ? 4 : 'md'} className="wizard-container">
      {renderStep()}
    </Stack>
  );
} 