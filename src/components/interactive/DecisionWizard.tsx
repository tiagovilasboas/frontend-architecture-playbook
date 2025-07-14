import { useState } from 'react';
import { Stack, Card, Title, Text, Button, Group, SimpleGrid, ThemeIcon, Alert } from '@mantine/core';
import { Link } from 'react-router-dom';
import { patterns } from '../../lib/content.ts';
import { IconPuzzle, IconHierarchy, IconStack2, IconShare, IconGitBranch, IconDeviceDesktop, IconSettings, IconTopologyStar3, IconArrowRight, IconBroadcast, IconSettings2, IconBulb } from '@tabler/icons-react';
import './DecisionWizard.css';

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

type ProjectType = 'mvp' | 'saas' | 'ecommerce' | 'dashboard' | 'enterprise' | 'startup';
type TeamSize = 'solo' | 'small' | 'medium' | 'large';
type TimeConstraint = 'tight' | 'normal' | 'flexible';
type IntegrationNeeds = 'simple' | 'moderate' | 'complex';
type ScalePlans = 'niche' | 'growth' | 'massive';

export default function DecisionWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [teamSize, setTeamSize] = useState<TeamSize | null>(null);
  const [timeConstraint, setTimeConstraint] = useState<TimeConstraint | null>(null);
  const [integrationNeeds, setIntegrationNeeds] = useState<IntegrationNeeds | null>(null);
  const [scalePlans, setScalePlans] = useState<ScalePlans | null>(null);

  const nextStep = () => setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4 | 5 | 6);
  const prevStep = () => setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5 | 6);

  const recommendations = (): string[] => {
    if (!projectType || !teamSize || !timeConstraint || !integrationNeeds || !scalePlans) return [];

    const scores: Record<string, number> = {};

    // MVP com prazo apertado
    if (projectType === 'mvp' && timeConstraint === 'tight') {
      scores['spa'] = 10;
      scores['jamstack'] = 8;
      scores['islands-architecture'] = 7;
    }

    // SaaS com crescimento planejado
    if (projectType === 'saas' && scalePlans === 'growth') {
      scores['clean-architecture'] = 10;
      scores['component-driven'] = 9;
      scores['feature-flags'] = 8;
      scores['monorepo'] = 7;
    }

    // E-commerce com integrações complexas
    if (projectType === 'ecommerce' && integrationNeeds === 'complex') {
      scores['event-driven'] = 10;
      scores['clean-architecture'] = 9;
      scores['state-machines'] = 8;
    }

    // Dashboard com time pequeno
    if (projectType === 'dashboard' && teamSize === 'small') {
      scores['component-driven'] = 10;
      scores['atomic-design'] = 9;
      scores['spa'] = 8;
    }

    // Enterprise com time grande
    if (projectType === 'enterprise' && teamSize === 'large') {
      scores['micro-frontends'] = 10;
      scores['monorepo'] = 9;
      scores['clean-architecture'] = 8;
      scores['feature-flags'] = 8;
    }

    // Startup com escala massiva
    if (projectType === 'startup' && scalePlans === 'massive') {
      scores['micro-frontends'] = 10;
      scores['clean-architecture'] = 9;
      scores['event-driven'] = 8;
      scores['monorepo'] = 7;
    }

    // Solo dev com prazo flexível
    if (teamSize === 'solo' && timeConstraint === 'flexible') {
      scores['clean-architecture'] = 10;
      scores['component-driven'] = 9;
      scores['atomic-design'] = 8;
    }

    // Time médio com integrações moderadas
    if (teamSize === 'medium' && integrationNeeds === 'moderate') {
      scores['spa'] = 9;
      scores['component-driven'] = 8;
      scores['feature-flags'] = 7;
    }

    // Fallback para casos não cobertos
    if (Object.keys(scores).length === 0) {
      scores['spa'] = 8;
      scores['component-driven'] = 7;
    }

    // Retorna os 3 melhores scores
    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([pattern]) => pattern);
  };

  const patternResults = patterns.filter((p) => recommendations().includes(p.slug));

  const CardOption = ({ 
    label, 
    description, 
    onClick, 
    icon 
  }: { 
    label: string; 
    description?: string;
    onClick: () => void;
    icon?: React.ReactNode;
  }) => (
    <Card 
      shadow="sm" 
      padding="lg" 
      radius="md" 
      withBorder 
      onClick={onClick} 
      style={{ cursor: 'pointer' }}
      className="wizard-option-card"
    >
      <Stack gap="xs">
        {icon && <ThemeIcon size={32} radius="md" variant="light">{icon}</ThemeIcon>}
        <Text fw={600} size="sm">{label}</Text>
        {description && <Text size="xs" c="dimmed">{description}</Text>}
      </Stack>
    </Card>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <Alert color="blue" icon={<IconBulb size={16} />} radius="md" mb="lg">
              <Text size="sm" fw={600} mb={4}>💡 Isso aqui é só uma dica!</Text>
              <Text size="sm" c="dimmed">
                O wizard vai sugerir algumas arquiteturas baseado nas suas respostas, mas a decisão final 
                vem do seu conhecimento e das necessidades reais do negócio. Use como ponto de partida, não como verdade absoluta.
              </Text>
            </Alert>
            
            <Title order={4} mb="sm">Que tipo de projeto você está fazendo?</Title>
            <Text size="sm" c="dimmed" mb="md">Isso vai definir muito do que você precisa</Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              <CardOption 
                label="MVP/Protótipo" 
                description="Validar ideia rapidamente"
                onClick={() => { setProjectType('mvp'); nextStep(); }}
              />
              <CardOption 
                label="SaaS" 
                description="Software como serviço"
                onClick={() => { setProjectType('saas'); nextStep(); }}
              />
              <CardOption 
                label="E-commerce" 
                description="Loja online"
                onClick={() => { setProjectType('ecommerce'); nextStep(); }}
              />
              <CardOption 
                label="Dashboard" 
                description="Painel de controle"
                onClick={() => { setProjectType('dashboard'); nextStep(); }}
              />
              <CardOption 
                label="Enterprise" 
                description="Sistema corporativo"
                onClick={() => { setProjectType('enterprise'); nextStep(); }}
              />
              <CardOption 
                label="Startup" 
                description="Crescimento rápido"
                onClick={() => { setProjectType('startup'); nextStep(); }}
              />
            </SimpleGrid>
          </div>
        );

      case 2:
        return (
          <div>
            <Title order={4} mb="sm">Quantos devs no time?</Title>
            <Text size="sm" c="dimmed" mb="md">Isso define como você vai organizar o código</Text>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
              <CardOption 
                label="Solo (só você)" 
                description="1 desenvolvedor"
                onClick={() => { setTeamSize('solo'); nextStep(); }}
              />
              <CardOption 
                label="Pequeno" 
                description="2-5 desenvolvedores"
                onClick={() => { setTeamSize('small'); nextStep(); }}
              />
              <CardOption 
                label="Médio" 
                description="6-15 desenvolvedores"
                onClick={() => { setTeamSize('medium'); nextStep(); }}
              />
              <CardOption 
                label="Grande" 
                description="15+ desenvolvedores"
                onClick={() => { setTeamSize('large'); nextStep(); }}
              />
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={prevStep} size="xs">Voltar</Button>
          </div>
        );

      case 3:
        return (
          <div>
            <Title order={4} mb="sm">Qual o prazo?</Title>
            <Text size="sm" c="dimmed" mb="md">Prazo define se você pode investir em estrutura</Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              <CardOption 
                label="Apertado" 
                description="2-4 semanas"
                onClick={() => { setTimeConstraint('tight'); nextStep(); }}
              />
              <CardOption 
                label="Normal" 
                description="1-3 meses"
                onClick={() => { setTimeConstraint('normal'); nextStep(); }}
              />
              <CardOption 
                label="Flexível" 
                description="3+ meses"
                onClick={() => { setTimeConstraint('flexible'); nextStep(); }}
              />
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={prevStep} size="xs">Voltar</Button>
          </div>
        );

      case 4:
        return (
          <div>
            <Title order={4} mb="sm">Quantas integrações você precisa?</Title>
            <Text size="sm" c="dimmed" mb="md">APIs externas, sistemas legados, etc.</Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              <CardOption 
                label="Simples" 
                description="1-2 APIs básicas"
                onClick={() => { setIntegrationNeeds('simple'); nextStep(); }}
              />
              <CardOption 
                label="Moderado" 
                description="3-5 integrações"
                onClick={() => { setIntegrationNeeds('moderate'); nextStep(); }}
              />
              <CardOption 
                label="Complexo" 
                description="5+ sistemas diferentes"
                onClick={() => { setIntegrationNeeds('complex'); nextStep(); }}
              />
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={prevStep} size="xs">Voltar</Button>
          </div>
        );

      case 5:
        return (
          <div>
            <Title order={4} mb="sm">Como você planeja escalar?</Title>
            <Text size="sm" c="dimmed" mb="md">Isso define se você precisa de arquitetura robusta</Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              <CardOption 
                label="Nicho" 
                description="Poucos usuários, mercado específico"
                onClick={() => { setScalePlans('niche'); nextStep(); }}
              />
              <CardOption 
                label="Crescimento" 
                description="Crescimento planejado"
                onClick={() => { setScalePlans('growth'); nextStep(); }}
              />
              <CardOption 
                label="Massivo" 
                description="Milhares/milhões de usuários"
                onClick={() => { setScalePlans('massive'); nextStep(); }}
              />
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={prevStep} size="xs">Voltar</Button>
          </div>
        );

      case 6:
        return (
          <div>
            <Title order={4} mb="sm">Sugestões do Wizard</Title>
            
            <Alert color="blue" icon={<IconBulb size={16} />} radius="md" mb="md">
              <Text size="sm" fw={600} mb={4}>🎯 Baseado nas suas respostas, essas arquiteturas podem fazer sentido:</Text>
              <Text size="sm" c="dimmed">
                Mas lembra: isso é só um ponto de partida! A decisão final deve vir do seu conhecimento 
                técnico e das necessidades reais do negócio. Contexto é tudo! 💡
              </Text>
            </Alert>

            <Alert color="blue" icon={<IconBulb size={16} />} radius="md" mb="lg">
              <Text size="sm" fw={600} mb={4}>💡 Isso aqui é só uma dica!</Text>
              <Text size="sm" c="dimmed">
                O wizard vai sugerir algumas arquiteturas baseado nas suas respostas, mas a decisão final 
                vem do seu conhecimento e das necessidades reais do negócio. Use como ponto de partida, não como verdade absoluta.
              </Text>
            </Alert>

            <Stack gap="sm">
              {patternResults.map((pat, index) => (
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
                      <Group gap="xs" align="center" mb={4}>
                        <Text fw={700} size="lg">{pat.title}</Text>
                        {index === 0 && (
                          <ThemeIcon size={20} radius="sm" variant="light" color="green">
                            <IconBulb size={12} />
                          </ThemeIcon>
                        )}
                      </Group>
                      {pat.description && <Text c="dimmed" size="sm" mb="xs">{pat.description}</Text>}
                      <Button variant="light" size="xs" mt={4} rightSection={<IconArrowRight size={16} />} component={Link} to={`/patterns/${pat.slug}`}>
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

            <Group mt="md" mb="md" gap="xs">
              <Button variant="subtle" size="xs" onClick={prevStep}>Voltar</Button>
              <Button size="xs" onClick={() => { 
                setProjectType(null); 
                setTeamSize(null); 
                setTimeConstraint(null);
                setIntegrationNeeds(null);
                setScalePlans(null);
                setStep(1); 
              }}>Reiniciar</Button>
            </Group>
          </div>
        );
    }
  };

  return (
    <Stack gap="xl" className="wizard-container">
      {renderStep()}
    </Stack>
  );
} 