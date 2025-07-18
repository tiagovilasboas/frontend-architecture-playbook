import { useState } from 'react';
import { Stack, Card, Title, Text, Button, Group, SimpleGrid, ThemeIcon, Alert } from '@mantine/core';
import { Link } from 'react-router-dom';
import { architectures, patterns } from '../../lib/content.ts';
import { IconPuzzle, IconHierarchy, IconStack2, IconShare, IconGitBranch, IconDeviceDesktop, IconSettings, IconTopologyStar3, IconArrowRight, IconBroadcast, IconSettings2, IconBulb, IconAlertTriangle, IconInfoCircle, IconRocket, IconApi, IconDeviceMobile, IconCloud, IconHexagon, IconLayers, IconHistory, IconSeparator, IconBoxMultiple } from '@tabler/icons-react';
import './DecisionWizard.css';
import { useMediaQuery } from '@mantine/hooks';
import { getBonusPatterns } from './getBonusPatterns';

// Mapeamento de ícones por padrão - WIZARD v3.0 com todas as 15 arquiteturas
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
  // TIER 1 - Arquiteturas críticas adicionadas
  'ssr-ssg': <IconRocket size={28} />,
  'bff': <IconApi size={28} />,
  'pwa': <IconDeviceMobile size={28} />,
  // TIER 2 - Arquiteturas importantes adicionadas
  'headless': <IconCloud size={28} />,
  'hexagonal': <IconHexagon size={28} />,
  'layered': <IconLayers size={28} />,
  // TIER 3 - Arquiteturas específicas adicionadas
  'event-sourcing': <IconHistory size={28} />,
  'cqrs': <IconSeparator size={28} />,
  'microservices-frontend': <IconBoxMultiple size={28} />,
};

// Tipos de projeto melhorados
const projectTypes = [
  { value: 'mvp', label: 'MVP/Protótipo', description: 'Validar ideia rapidamente' },
  { value: 'saas', label: 'SaaS', description: 'Produto como serviço' },
  { value: 'ecommerce', label: 'E-commerce', description: 'Loja online/marketplace' },
  { value: 'dashboard', label: 'Dashboard', description: 'Análise de dados/métricas' },
  { value: 'enterprise', label: 'Enterprise', description: 'Sistema corporativo' },
  { value: 'startup', label: 'Startup', description: 'Produto inovador escalável' },
];

// Novos tipos para contexto adicional
const teamSizes = [
  { value: 'small', label: '1-3 devs', description: 'Time pequeno' },
  { value: 'medium', label: '4-8 devs', description: 'Time médio' },
  { value: 'large', label: '9+ devs', description: 'Time grande' },
];

const techLevels = [
  { value: 'junior', label: 'Júnior/Misto', description: 'Time com pouca experiência' },
  { value: 'mid', label: 'Pleno', description: 'Time com experiência moderada' },
  { value: 'senior', label: 'Sênior', description: 'Time muito experiente' },
];

const priorities = [
  { value: 'speed', label: 'Velocidade', description: 'Entregar rápido' },
  { value: 'maintainability', label: 'Manutenibilidade', description: 'Fácil de manter' },
  { value: 'performance', label: 'Performance', description: 'Otimização máxima' },
  { value: 'scalability', label: 'Escalabilidade', description: 'Crescimento futuro' },
];

export default function DecisionWizard() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [projectType, setProjectType] = useState<string | null>(null);
  const [teamSize, setTeamSize] = useState<string | null>(null);
  const [techLevel, setTechLevel] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [hasIntegrations, setHasIntegrations] = useState<boolean | null>(null);

  // Lógica sofisticada de recomendações - WIZARD v3.0
  const recommendations = (): { pattern: string; score: number; reason: string }[] => {
    if (!projectType || !teamSize || !techLevel || !priority || hasIntegrations === null) return [];
    
    const scores: Record<string, { score: number; reason: string }> = {};

    // Base scoring por tipo de projeto
    if (projectType === 'mvp') {
      scores['spa'] = { score: 8, reason: 'Rápido para prototipar' };
      scores['jamstack'] = { score: 7, reason: 'Deploy simples e performance' };
      if (priority === 'performance') {
        scores['islands-architecture'] = { score: 9, reason: 'Performance máxima para MVP' };
        scores['ssr-ssg'] = { score: 8, reason: 'SEO + performance inicial críticos' };
      }
      if (priority === 'speed') {
        scores['layered'] = { score: 7, reason: 'Mais simples que Clean para MVP rápido' };
      }
    }

    if (projectType === 'saas') {
      scores['clean-architecture'] = { score: 9, reason: 'Manutenibilidade e testes' };
      scores['component-driven'] = { score: 8, reason: 'Reutilização de UI' };
      if (priority === 'scalability') {
        scores['monorepo'] = { score: 7, reason: 'Facilita escalabilidade de código' };
      }
      if (hasIntegrations) {
        scores['bff'] = { score: 8, reason: 'Simplifica integrações múltiplas' };
        scores['hexagonal'] = { score: 7, reason: 'Isolamento de dependências externas' };
      }
      if (priority === 'performance') {
        scores['ssr-ssg'] = { score: 7, reason: 'SEO e performance para aquisição' };
      }
    }

    if (projectType === 'ecommerce') {
      scores['event-driven'] = { score: 9, reason: 'Gerenciar fluxos complexos (carrinho, pagamento)' };
      scores['clean-architecture'] = { score: 8, reason: 'Lógica de negócio complexa' };
      scores['ssr-ssg'] = { score: 9, reason: 'SEO crítico para descoberta de produtos' };
      scores['pwa'] = { score: 8, reason: 'App-like experience aumenta conversão' };
      if (hasIntegrations) {
        scores['state-machines'] = { score: 7, reason: 'Estados complexos (pedidos, inventory)' };
        scores['bff'] = { score: 7, reason: 'Agregação de APIs (pagamento, estoque, etc)' };
        scores['cqrs'] = { score: 6, reason: 'Separar leitura (catálogo) de escrita (pedidos)' };
      }
      if (priority === 'maintainability') {
        scores['hexagonal'] = { score: 7, reason: 'Isolar integrações de pagamento/estoque' };
      }
    }

    if (projectType === 'dashboard') {
      scores['component-driven'] = { score: 9, reason: 'Reutilização de charts e widgets' };
      scores['spa'] = { score: 8, reason: 'Interatividade em tempo real' };
      if (techLevel === 'senior') {
        scores['atomic-design'] = { score: 7, reason: 'Design system estruturado' };
      }
      if (hasIntegrations) {
        scores['bff'] = { score: 8, reason: 'Agregação de dados de múltiplas APIs' };
        scores['cqrs'] = { score: 7, reason: 'Otimizar queries de leitura para dashboards' };
      }
      if (priority === 'performance') {
        scores['islands-architecture'] = { score: 7, reason: 'Hidratação seletiva de widgets' };
      }
      if (priority === 'maintainability') {
        scores['layered'] = { score: 6, reason: 'Separação clara: UI → Logic → Data' };
      }
    }

    if (projectType === 'enterprise') {
      scores['clean-architecture'] = { score: 9, reason: 'Complexidade empresarial' };
      scores['hexagonal'] = { score: 8, reason: 'Isolamento de sistemas legados' };
      if (teamSize === 'large' && techLevel === 'senior') {
        scores['micro-frontends'] = { score: 10, reason: 'Times grandes independentes' };
        scores['microservices-frontend'] = { score: 8, reason: 'Alinhamento com arquitetura backend' };
      }
      if (teamSize === 'large') {
        scores['monorepo'] = { score: 8, reason: 'Compartilhamento entre times' };
      }
      if (hasIntegrations) {
        scores['bff'] = { score: 8, reason: 'Abstração de sistemas legados complexos' };
        scores['headless'] = { score: 7, reason: 'Flexibilidade para múltiplos canais' };
        scores['event-sourcing'] = { score: 6, reason: 'Auditoria e compliance empresarial' };
      }
      if (priority === 'maintainability') {
        scores['layered'] = { score: 7, reason: 'Alternativa mais simples ao Clean' };
      }
    }

    if (projectType === 'startup') {
      scores['clean-architecture'] = { score: 9, reason: 'Base sólida para crescimento' };
      scores['component-driven'] = { score: 8, reason: 'Velocidade de desenvolvimento' };
      // Para startups que precisam de SEO/performance
      if (priority === 'performance') {
        scores['ssr-ssg'] = { score: 8, reason: 'SEO crítico para aquisição' };
        scores['islands-architecture'] = { score: 7, reason: 'Performance competitiva' };
      }
      // PWA para startups mobile-first
      if (priority === 'performance' || priority === 'scalability') {
        scores['pwa'] = { score: 7, reason: 'Reduz fricção de instalação vs app nativo' };
      }
      // Micro-frontends só para startups grandes com times sêniores
      if (teamSize === 'large' && techLevel === 'senior' && priority === 'scalability') {
        scores['micro-frontends'] = { score: 7, reason: 'Escalabilidade extrema de times' };
        scores['microservices-frontend'] = { score: 6, reason: 'Alinhamento com microservices backend' };
      }
      // Para times pequenos, opções mais simples
      if (teamSize === 'small' && techLevel !== 'senior') {
        scores['layered'] = { score: 7, reason: 'Mais simples que Clean para time pequeno' };
      }
    }

    // Ajustes por tamanho do time
    if (teamSize === 'small') {
      // Times pequenos preferem simplicidade
      scores['spa'] = { score: (scores['spa']?.score || 0) + 2, reason: scores['spa']?.reason || 'Simplicidade para time pequeno' };
      scores['jamstack'] = { score: (scores['jamstack']?.score || 0) + 2, reason: scores['jamstack']?.reason || 'Fácil para time pequeno' };
      scores['layered'] = { score: (scores['layered']?.score || 5) + 2, reason: scores['layered']?.reason || 'Estrutura simples para time pequeno' };
      
      // Penaliza arquiteturas complexas
      if (scores['micro-frontends']) {
        scores['micro-frontends'].score -= 4;
        scores['micro-frontends'].reason += ' (complexo para time pequeno)';
      }
      if (scores['microservices-frontend']) {
        scores['microservices-frontend'].score -= 5;
        scores['microservices-frontend'].reason += ' (muito complexo para time pequeno)';
      }
      if (scores['monorepo']) {
        scores['monorepo'].score -= 2;
        scores['monorepo'].reason += ' (overhead para time pequeno)';
      }
      if (scores['event-sourcing']) {
        scores['event-sourcing'].score -= 3;
        scores['event-sourcing'].reason += ' (complexidade desnecessária)';
      }
      if (scores['cqrs']) {
        scores['cqrs'].score -= 3;
        scores['cqrs'].reason += ' (over-engineering para time pequeno)';
      }
    }

    if (teamSize === 'large') {
      // Times grandes se beneficiam de modularização
      scores['monorepo'] = { score: (scores['monorepo']?.score || 5) + 3, reason: scores['monorepo']?.reason || 'Facilita colaboração em time grande' };
      scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Organização para time grande' };
      scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 2, reason: scores['hexagonal']?.reason || 'Facilita desenvolvimento paralelo' };
      scores['microservices-frontend'] = { score: (scores['microservices-frontend']?.score || 4) + 3, reason: scores['microservices-frontend']?.reason || 'Times independentes com deploys autônomos' };
    }

    // Ajustes por nível técnico
    if (techLevel === 'junior') {
      // Times júniores preferem simplicidade
      scores['spa'] = { score: (scores['spa']?.score || 5) + 3, reason: scores['spa']?.reason || 'Mais simples para time júnior' };
      scores['component-driven'] = { score: (scores['component-driven']?.score || 5) + 2, reason: scores['component-driven']?.reason || 'Conceitos claros para júniors' };
      scores['layered'] = { score: (scores['layered']?.score || 5) + 3, reason: scores['layered']?.reason || 'Estrutura fácil de entender' };
      scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 2, reason: scores['jamstack']?.reason || 'Deploy simples para iniciantes' };
      
      // Penaliza arquiteturas avançadas
      if (scores['micro-frontends']) {
        scores['micro-frontends'].score -= 5;
        scores['micro-frontends'].reason += ' (muito complexo para júniors)';
      }
      if (scores['microservices-frontend']) {
        scores['microservices-frontend'].score -= 6;
        scores['microservices-frontend'].reason += ' (extremamente complexo para júniors)';
      }
      if (scores['event-driven']) {
        scores['event-driven'].score -= 2;
        scores['event-driven'].reason += ' (conceitos avançados)';
      }
      if (scores['hexagonal']) {
        scores['hexagonal'].score -= 3;
        scores['hexagonal'].reason += ' (abstração complexa para júniors)';
      }
      if (scores['event-sourcing']) {
        scores['event-sourcing'].score -= 4;
        scores['event-sourcing'].reason += ' (conceitos muito avançados)';
      }
      if (scores['cqrs']) {
        scores['cqrs'].score -= 4;
        scores['cqrs'].reason += ' (padrão avançado para júniors)';
      }
    }

    if (techLevel === 'senior') {
      // Times sêniores podem lidar com complexidade
      scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Time pode implementar bem' };
      scores['event-driven'] = { score: (scores['event-driven']?.score || 5) + 2, reason: scores['event-driven']?.reason || 'Time experiente com eventos' };
      scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 2, reason: scores['hexagonal']?.reason || 'Time domina abstrações complexas' };
      scores['event-sourcing'] = { score: (scores['event-sourcing']?.score || 4) + 2, reason: scores['event-sourcing']?.reason || 'Time experiente com padrões avançados' };
      scores['cqrs'] = { score: (scores['cqrs']?.score || 4) + 2, reason: scores['cqrs']?.reason || 'Time pode implementar separação read/write' };
      scores['microservices-frontend'] = { score: (scores['microservices-frontend']?.score || 4) + 2, reason: scores['microservices-frontend']?.reason || 'Time experiente com arquiteturas distribuídas' };
    }

    // Ajustes por prioridade
    if (priority === 'speed') {
      scores['spa'] = { score: (scores['spa']?.score || 5) + 3, reason: scores['spa']?.reason || 'Desenvolvimento rápido' };
      scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 2, reason: scores['jamstack']?.reason || 'Deploy rápido' };
      scores['layered'] = { score: (scores['layered']?.score || 5) + 2, reason: scores['layered']?.reason || 'Estrutura simples, desenvolvimento rápido' };
      
      // Penaliza arquiteturas que demandam setup
      if (scores['micro-frontends']) {
        scores['micro-frontends'].score -= 3;
        scores['micro-frontends'].reason += ' (setup inicial lento)';
      }
      if (scores['microservices-frontend']) {
        scores['microservices-frontend'].score -= 4;
        scores['microservices-frontend'].reason += ' (infraestrutura complexa)';
      }
      if (scores['hexagonal']) {
        scores['hexagonal'].score -= 2;
        scores['hexagonal'].reason += ' (abstrações demoram para configurar)';
      }
      if (scores['event-sourcing']) {
        scores['event-sourcing'].score -= 3;
        scores['event-sourcing'].reason += ' (setup de stores complexo)';
      }
    }

    if (priority === 'performance') {
      scores['islands-architecture'] = { score: (scores['islands-architecture']?.score || 5) + 4, reason: scores['islands-architecture']?.reason || 'Performance máxima' };
      scores['jamstack'] = { score: (scores['jamstack']?.score || 5) + 3, reason: scores['jamstack']?.reason || 'Performance de CDN' };
      scores['ssr-ssg'] = { score: (scores['ssr-ssg']?.score || 5) + 4, reason: scores['ssr-ssg']?.reason || 'First paint otimizado' };
      scores['pwa'] = { score: (scores['pwa']?.score || 5) + 3, reason: scores['pwa']?.reason || 'Cache offline e performance nativa' };
      
      // SPA pode ter problemas de performance
      if (scores['spa']) {
        scores['spa'].score -= 1;
        scores['spa'].reason += ' (cuidado com bundle size)';
      }
      
      // CQRS pode otimizar reads
      if (scores['cqrs']) {
        scores['cqrs'].score += 2;
        scores['cqrs'].reason += ' (queries otimizadas para leitura)';
      }
    }

    if (priority === 'maintainability') {
      scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 4, reason: scores['clean-architecture']?.reason || 'Máxima manutenibilidade' };
      scores['component-driven'] = { score: (scores['component-driven']?.score || 5) + 3, reason: scores['component-driven']?.reason || 'Componentes fáceis de manter' };
      scores['hexagonal'] = { score: (scores['hexagonal']?.score || 5) + 3, reason: scores['hexagonal']?.reason || 'Isolamento facilita manutenção' };
      scores['layered'] = { score: (scores['layered']?.score || 5) + 2, reason: scores['layered']?.reason || 'Separação clara de responsabilidades' };
      
      // Event sourcing facilita debug
      if (scores['event-sourcing']) {
        scores['event-sourcing'].score += 2;
        scores['event-sourcing'].reason += ' (debug e auditoria completos)';
      }
    }

    if (priority === 'scalability') {
      if (teamSize === 'large') {
        scores['micro-frontends'] = { score: (scores['micro-frontends']?.score || 5) + 4, reason: scores['micro-frontends']?.reason || 'Máxima escalabilidade de times' };
      }
      scores['monorepo'] = { score: (scores['monorepo']?.score || 5) + 3, reason: scores['monorepo']?.reason || 'Facilita escalabilidade de código' };
      scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Base sólida para crescer' };
    }

    // Ajustes por integrações
    if (hasIntegrations) {
      scores['clean-architecture'] = { score: (scores['clean-architecture']?.score || 6) + 2, reason: scores['clean-architecture']?.reason || 'Isola integrações na camada externa' };
      scores['event-driven'] = { score: (scores['event-driven']?.score || 5) + 2, reason: scores['event-driven']?.reason || 'Facilita integrações via eventos' };
    }

    // Fallback para garantir sempre ter recomendações
    if (Object.keys(scores).length === 0) {
      scores['spa'] = { score: 7, reason: 'Opção segura e versátil' };
      scores['component-driven'] = { score: 6, reason: 'Boa organização de código' };
    }

    // Garante pelo menos 3 opções
    if (Object.keys(scores).length < 3) {
      if (!scores['clean-architecture']) {
        scores['clean-architecture'] = { score: 6, reason: 'Base sólida para qualquer projeto' };
      }
      if (!scores['component-driven']) {
        scores['component-driven'] = { score: 5, reason: 'Reutilização e organização' };
      }
      if (!scores['spa']) {
        scores['spa'] = { score: 5, reason: 'Flexibilidade e simplicidade' };
      }
    }

    return Object.entries(scores)
      .map(([pattern, data]) => ({ pattern, score: data.score, reason: data.reason }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const allDocs = [...architectures, ...patterns];
  const recommendationResults = recommendations();

  // Bonus patterns melhorados
  const answers = { projectType, teamSize, techLevel, hasIntegrations };
  const bonusResults = getBonusPatterns(answers)
    .map((bonus) => allDocs.find((doc) => doc.slug === bonus.slug))
    .filter((pat): pat is typeof allDocs[number] => Boolean(pat));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <Title order={4} mb="sm">Qual o tipo do seu projeto?</Title>
            <Text size="sm" c="dimmed" mb="md">Isso ajuda a definir as necessidades base</Text>
            <SimpleGrid cols={isMobile ? 1 : 2} spacing={isMobile ? 8 : 'md'}>
              {projectTypes.map((opt) => (
                <Card
                  key={opt.value}
                  withBorder
                  shadow={isMobile ? undefined : 'sm'}
                  padding={isMobile ? 'sm' : 'md'}
                  radius={isMobile ? 'sm' : 'md'}
                  style={{ cursor: 'pointer', minWidth: 0 }}
                  onClick={() => { setProjectType(opt.value); setStep(2); }}
                >
                  <Text fw={600} size={isMobile ? 'sm' : 'md'}>{opt.label}</Text>
                  <Text size="xs" c="dimmed">{opt.description}</Text>
                </Card>
              ))}
            </SimpleGrid>
          </div>
        );

      case 2:
        return (
          <div>
            <Title order={4} mb="sm">Qual o tamanho do seu time?</Title>
            <Text size="sm" c="dimmed" mb="md">Times maiores podem lidar com mais complexidade</Text>
            <SimpleGrid cols={isMobile ? 1 : 3} spacing={isMobile ? 8 : 'md'}>
              {teamSizes.map((opt) => (
                <Card
                  key={opt.value}
                  withBorder
                  shadow={isMobile ? undefined : 'sm'}
                  padding={isMobile ? 'sm' : 'md'}
                  radius={isMobile ? 'sm' : 'md'}
                  style={{ cursor: 'pointer', minWidth: 0 }}
                  onClick={() => { setTeamSize(opt.value); setStep(3); }}
                >
                  <Text fw={600} size={isMobile ? 'sm' : 'md'}>{opt.label}</Text>
                  <Text size="xs" c="dimmed">{opt.description}</Text>
                </Card>
              ))}
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={() => setStep(1)} size="sm" fullWidth={isMobile}>Voltar</Button>
          </div>
        );

      case 3:
        return (
          <div>
            <Title order={4} mb="sm">Qual o nível técnico do time?</Title>
            <Text size="sm" c="dimmed" mb="md">Isso determina quanta complexidade vocês conseguem absorver</Text>
            <SimpleGrid cols={isMobile ? 1 : 3} spacing={isMobile ? 8 : 'md'}>
              {techLevels.map((opt) => (
                <Card
                  key={opt.value}
                  withBorder
                  shadow={isMobile ? undefined : 'sm'}
                  padding={isMobile ? 'sm' : 'md'}
                  radius={isMobile ? 'sm' : 'md'}
                  style={{ cursor: 'pointer', minWidth: 0 }}
                  onClick={() => { setTechLevel(opt.value); setStep(4); }}
                >
                  <Text fw={600} size={isMobile ? 'sm' : 'md'}>{opt.label}</Text>
                  <Text size="xs" c="dimmed">{opt.description}</Text>
                </Card>
              ))}
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={() => setStep(2)} size="sm" fullWidth={isMobile}>Voltar</Button>
          </div>
        );

      case 4:
        return (
          <div>
            <Title order={4} mb="sm">Qual a prioridade principal?</Title>
            <Text size="sm" c="dimmed" mb="md">Cada arquitetura tem trade-offs diferentes</Text>
            <SimpleGrid cols={isMobile ? 1 : 2} spacing={isMobile ? 8 : 'md'}>
              {priorities.map((opt) => (
                <Card
                  key={opt.value}
                  withBorder
                  shadow={isMobile ? undefined : 'sm'}
                  padding={isMobile ? 'sm' : 'md'}
                  radius={isMobile ? 'sm' : 'md'}
                  style={{ cursor: 'pointer', minWidth: 0 }}
                  onClick={() => { setPriority(opt.value); setStep(5); }}
                >
                  <Text fw={600} size={isMobile ? 'sm' : 'md'}>{opt.label}</Text>
                  <Text size="xs" c="dimmed">{opt.description}</Text>
                </Card>
              ))}
            </SimpleGrid>
            <Button variant="subtle" mt="md" onClick={() => setStep(3)} size="sm" fullWidth={isMobile}>Voltar</Button>
          </div>
        );

      case 5:
        return (
          <div>
            <Title order={4} mb="sm">Vai integrar com muitos sistemas externos?</Title>
            <Text size="sm" c="dimmed" mb="md">APIs, bancos de dados, serviços third-party, etc.</Text>
            <Group gap={16} mt="md">
              <Button size={isMobile ? 'md' : 'lg'} fullWidth={isMobile} onClick={() => { setHasIntegrations(true); setStep(6); }}>
                Sim, muitas integrações
              </Button>
              <Button size={isMobile ? 'md' : 'lg'} fullWidth={isMobile} onClick={() => { setHasIntegrations(false); setStep(6); }}>
                Não, poucas integrações
              </Button>
            </Group>
            <Button variant="subtle" mt="md" onClick={() => setStep(4)} size="sm" fullWidth={isMobile}>Voltar</Button>
          </div>
        );

      case 6:
        return (
          <div style={isMobile ? { maxWidth: 420, margin: '0 auto', width: '100%' } : {}}>
            <Title order={4} mb="sm">🎯 Recomendações Personalizadas</Title>
            
            <Alert color="blue" icon={<IconInfoCircle size={16} />} radius="md" mb="md">
              <Text size="sm" fw={600} mb={4}>
                Baseado no seu contexto: {projectTypes.find(p => p.value === projectType)?.label}, 
                time {teamSizes.find(t => t.value === teamSize)?.label}, 
                nível {techLevels.find(t => t.value === techLevel)?.label}, 
                priorizando {priorities.find(p => p.value === priority)?.label.toLowerCase()}.
              </Text>
            </Alert>

            <Stack gap={isMobile ? 8 : 'sm'}>
              {recommendationResults.map((rec, index) => {
                const pattern = allDocs.find(p => p.slug === rec.pattern);
                if (!pattern) return null;
                
                return (
                  <Card
                    key={pattern.slug}
                    component={Link}
                    to={`/patterns/${pattern.slug}`}
                    withBorder
                    shadow={isMobile ? undefined : 'md'}
                    padding={isMobile ? 'sm' : 'md'}
                    radius="md"
                    className="wizard-recommendation-card"
                    style={{ marginBottom: isMobile ? 4 : 8 }}
                  >
                    <Group align="flex-start" gap={isMobile ? 8 : 'sm'} wrap="nowrap">
                      <ThemeIcon size={isMobile ? 32 : 40} radius="md" variant="light" color={index === 0 ? "green" : "blue"}>
                        {patternIcons[pattern.slug] || <IconPuzzle size={isMobile ? 18 : 22} />}
                      </ThemeIcon>
                      <div style={{ flex: 1 }}>
                        <Group gap={4} align="center" mb={4}>
                          <Text fw={700} size={isMobile ? 'sm' : 'md'}>{pattern.title}</Text>
                          {index === 0 && (
                            <ThemeIcon size={16} radius="sm" variant="light" color="green">
                              <IconBulb size={10} />
                            </ThemeIcon>
                          )}
                        </Group>
                        
                        <Text c="dimmed" size={isMobile ? 'xs' : 'sm'} mb={4}>
                          {pattern.description}
                        </Text>
                        
                        <Text size={isMobile ? 'xs' : 'sm'} fw={500} mb={8} style={{ color: 'var(--mantine-color-blue-6)' }}>
                          💡 {rec.reason}
                        </Text>
                        
                        <Button 
                          variant="light" 
                          size="xs" 
                          rightSection={<IconArrowRight size={12} />} 
                          fullWidth={isMobile}
                        >
                          Saiba mais
                        </Button>
                      </div>
                    </Group>
                  </Card>
                );
              })}
            </Stack>

            {bonusResults.length > 0 && (
              <>
                <Title order={5} mt="lg" mb="sm">🎁 Padrões Complementares</Title>
                <Stack gap={isMobile ? 4 : 'xs'}>
                  {bonusResults.map((pat) => (
                    <Card
                      key={pat.slug}
                      component={Link}
                      to={`/patterns/${pat.slug}`}
                      withBorder
                      padding="xs"
                      radius="sm"
                      className="wizard-recommendation-card"
                      style={{ marginBottom: 4 }}
                    >
                      <Group gap="xs" wrap="nowrap">
                        <ThemeIcon size={24} radius="sm" variant="light" color="gray">
                          {patternIcons[pat.slug] || <IconPuzzle size={14} />}
                        </ThemeIcon>
                        <Text fw={600} size="sm" style={{ flex: 1 }}>{pat.title}</Text>
                        <IconArrowRight size={14} />
                      </Group>
                    </Card>
                  ))}
                </Stack>
              </>
            )}

            <Alert color="orange" icon={<IconAlertTriangle size={16} />} radius="md" mt="lg">
              <Text size="sm" fw={600} mb={4}>⚠️ Importante lembrar:</Text>
              <Text size="sm" c="dimmed">
                Estas são sugestões baseadas em padrões comuns e seu contexto. 
                Seu projeto específico pode justificar escolhas diferentes. 
                Sempre valide com sua equipe e considere constraints específicos do negócio.
              </Text>
            </Alert>

            <Alert color="green" icon={<IconBulb size={16} />} radius="md" mt="md">
              <Text size="sm" fw={600} mb={4}>💡 Próximos passos:</Text>
              <Text size="sm" c="dimmed">
                • Leia sobre cada arquitetura sugerida<br/>
                • Considere os trade-offs e complexidade<br/>
                • Teste em um projeto pequeno/piloto primeiro<br/>
                • Ajuste conforme o projeto e time evoluem<br/>
                • Lembre-se: você pode combinar múltiplas abordagens
              </Text>
            </Alert>

            <Group mt="lg" gap={isMobile ? 8 : 'sm'}>
              <Button variant="subtle" size="sm" onClick={() => setStep(5)} fullWidth={isMobile}>
                Voltar
              </Button>
              <Button size="sm" onClick={() => { 
                setProjectType(null); 
                setTeamSize(null);
                setTechLevel(null);
                setPriority(null);
                setHasIntegrations(null);
                setStep(1); 
              }} fullWidth={isMobile}>
                Reiniciar Wizard
              </Button>
            </Group>
          </div>
        );
    }
  };

  return (
    <Stack gap={isMobile ? 8 : 'md'} className="wizard-container">
      {renderStep()}
    </Stack>
  );
} 