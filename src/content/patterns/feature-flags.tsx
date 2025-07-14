import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconSettings2, IconSettings } from '@tabler/icons-react';
import CodeExample from '../../components/CodeExample';

function FeatureFlags() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Feature Flags
        </Title>
        <Text size="lg" c="dimmed">
          Controle dinâmico de funcionalidades. Deploy seguro, testes em produção, 
          rollback instantâneo. O que acontece quando você quer mudar código sem fazer deploy.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconSettings2 size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Sistema que controla funcionalidades dinamicamente</Text>
            </div>
          </Group>
          
          <Text>
            Feature Flags é sobre uma coisa só: <strong>controlar funcionalidades sem fazer deploy</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de fazer deploy toda vez que quer ativar/desativar uma funcionalidade, 
            você tem um sistema que controla isso dinamicamente. Novo código pode ficar dormindo 
            até você decidir ativar.
          </Text>
          
          <Text>
            A regra é simples: <em>código sempre no ar, funcionalidade controlada por flag</em>. 
            Deploy seguro, rollback instantâneo, testes em produção.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
          <IconSettings size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 4 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Feature Flags (Toggles)</Title>
                <Text size="sm" c="dimmed">
                  Variáveis que controlam se uma funcionalidade está ativa ou não.
                </Text>
                <Text size="xs" c="blue" mb="xs">
                  Veja o exemplo real em <b>/examples/feature-flags/use-feature-flag.ts</b>
                </Text>
                <CodeExample
                  title="useFeatureFlag"
                  code="useFeatureFlag"
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Flag Providers</Title>
                <Text size="sm" c="dimmed">
                  Sistemas que gerenciam e distribuem flags. Local, API, CDN.
                </Text>
                <CodeExample
                  title="Provider simples"
                  code="Provider simples"
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Targeting Rules</Title>
                <Text size="sm" c="dimmed">
                  Regras que determinam quem vê qual funcionalidade. Usuário, localização, porcentagem.
                </Text>
                <CodeExample
                  title="Targeting por usuário"
                  code="Targeting por usuário"
                />
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Rollback & Monitoring</Title>
                <Text size="sm" c="dimmed">
                  Sistemas para desativar flags rapidamente e monitorar impacto.
                </Text>
                <CodeExample
                  title="Rollback automático"
                  code="Rollback automático"
                />
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* Benefits */}
      <div>
        <Title order={2} mb="lg">
          <IconCheck size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Por que vale a pena?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="green">
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Deploy Seguro</Title>
                <Text size="sm">
                  Código sempre no ar, funcionalidade controlada. Rollback instantâneo se der problema.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Testes em Produção</Title>
                <Text size="sm">
                  Teste novas funcionalidades com usuários reais. A/B testing, gradual rollout.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="purple">
                <IconBulb size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Flexibilidade</Title>
                <Text size="sm">
                  Ative/desative funcionalidades sem deploy. Controle por usuário, região, horário.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Title order={4} mb="sm">✅ Use quando:</Title>
            <List>
              <List.Item>Quer fazer deploy seguro sem risco</List.Item>
              <List.Item>Precisa testar funcionalidades em produção</List.Item>
              <List.Item>Quer fazer gradual rollout de features</List.Item>
              <List.Item>Precisa de rollback instantâneo</List.Item>
              <List.Item>Quer controlar features por usuário/região</List.Item>
            </List>
          </Card>

          <Card withBorder p="md">
            <Title order={4} mb="sm">❌ Evite quando:</Title>
            <List>
              <List.Item>Aplicação muito simples (overkill)</List.Item>
              <List.Item>Time pequeno que prefere simplicidade</List.Item>
              <List.Item>Funcionalidades nunca mudam</List.Item>
              <List.Item>Performance crítica (flags têm overhead)</List.Item>
            </List>
          </Card>
        </Stack>
      </div>

      {/* Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos no Front-End
        </Title>
        
        <Stack gap="xl">
          {/* Example 1: E-commerce */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛒 E-commerce - Novo Checkout</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Novo checkout com melhor UX. 
                Quer testar com 10% dos usuários primeiro, depois expandir.
                <br />
                <strong>Problema:</strong> Se der problema, precisa fazer rollback rápido.
              </Text>
              
              <CodeExample
                title="E-commerce - Novo Checkout"
                description="Exemplo de uso de feature flags para controlar o novo checkout"
                code={{ content: `// ❌ RUIM - Deploy tradicional
// Deploy com novo checkout
// Se der problema, precisa fazer novo deploy
// Rollback demora 30 minutos

// ✅ BOM - Feature Flags
// Deploy sempre com ambos os checkouts
// Flag controla qual usar

// Hook para feature flags
function useFeatureFlag(flagKey, defaultValue = false) {
  const [isEnabled, setIsEnabled] = useState(defaultValue);
  
  useEffect(() => {
    fetchFeatureFlag(flagKey).then(setIsEnabled);
  }, [flagKey]);
  
  return isEnabled;
}

// Componente com flag
function CheckoutPage() {
  const newCheckoutEnabled = useFeatureFlag('new-checkout', false);
  
  return (
    <div>
      {newCheckoutEnabled ? (
        <NewCheckoutFlow />
      ) : (
        <LegacyCheckoutFlow />
      )}
    </div>
  );
}

// Novo checkout sempre no ar
function NewCheckoutFlow() {
  // Código do novo checkout
  return (
    <div>
      <NewPaymentForm />
      <NewShippingForm />
      <NewReviewForm />
    </div>
  );
}

// Se der problema, desativa flag
// Rollback em segundos, não em minutos
// Testa com 10%, depois 50%, depois 100%` }}
              />
            </Stack>
          </Paper>

          {/* Example 2: Dashboard */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📊 Dashboard - Nova UI</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Nova interface do dashboard. 
                Quer testar com beta testers primeiro, depois expandir.
                <br />
                <strong>Problema:</strong> Precisa controlar por usuário específico.
              </Text>
              
              <CodeExample
                title="Dashboard - Nova UI"
                description="Exemplo de uso de feature flags para controlar a nova UI do dashboard"
                code={{ content: `// ❌ RUIM - Deploy por ambiente
// Deploy em staging
// Testa com time
// Deploy em produção
// Se der problema, rollback demorado

// ✅ BOM - Feature Flags
// Deploy sempre em produção
// Flag controla quem vê

// Sistema de targeting
class FlagTargeting {
  isUserEligible(user, flagConfig) {
    // Por usuário específico
    if (flagConfig.targetUsers?.includes(user.id)) {
      return true;
    }
    
    // Por role
    if (flagConfig.targetRoles?.includes(user.role)) {
      return true;
    }
    
    // Por porcentagem
    if (flagConfig.rolloutPercentage) {
      return this.isUserInRollout(user.id, flagConfig.rolloutPercentage);
    }
    
    return false;
  }
}

// Hook com targeting
function useTargetedFeatureFlag(flagKey, user) {
  const [isEnabled, setIsEnabled] = useState(false);
  
  useEffect(() => {
    fetchFlagWithTargeting(flagKey, user).then(setIsEnabled);
  }, [flagKey, user]);
  
  return isEnabled;
}

// Dashboard com flag
function Dashboard({ user }) {
  const newUIEnabled = useTargetedFeatureFlag('dashboard-new-ui', user);
  
  return (
    <div>
      {newUIEnabled ? (
        <NewDashboardUI user={user} />
      ) : (
        <LegacyDashboardUI user={user} />
      )}
    </div>
  );
}

// Controle granular
const FLAG_CONFIG = {
  'dashboard-new-ui': {
    enabled: true,
    targetUsers: ['user-123', 'user-456'],
    targetRoles: ['admin', 'beta-tester'],
    rolloutPercentage: 25 // 25% dos usuários
  }
};

// Ativa para usuários específicos
// Testa com beta testers
// Expande gradualmente
// Rollback instantâneo se necessário` }}
              />
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas e Como Evitar
        </Title>
        
        <Stack gap="xl">
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚨 Problemas Comuns</Title>
            
            <Stack gap="lg">
              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">1. Flag Hell</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Muitas flags, código difícil de entender, 
                  lógica espalhada por toda aplicação.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Centralize lógica de flags, use padrões 
                  consistentes, documente flags.
                </Text>
                <CodeExample
                  title="Flag Hell"
                  description="Como evitar a complexidade de múltiplas flags"
                  code={{ content: `// ❌ RUIM - Flags espalhadas
function Component() {
  const flag1 = useFeatureFlag('flag1');
  const flag2 = useFeatureFlag('flag2');
  const flag3 = useFeatureFlag('flag3');
  
  if (flag1 && flag2 && !flag3) {
    return <ComponentA />;
  } else if (flag2 && flag3) {
    return <ComponentB />;
  }
  // Lógica confusa...
}

// ✅ BOM - Lógica centralizada
class FeatureFlagManager {
  getComponentVariant(flags) {
    if (flags.newUI && flags.beta) {
      return 'new-beta';
    }
    if (flags.newUI) {
      return 'new';
    }
    return 'legacy';
  }
}

function Component() {
  const flags = useFeatureFlags();
  const variant = flagManager.getComponentVariant(flags);
  
  return <Component variant={variant} />;
}` }}
                />
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">2. Dead Code</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Código de features antigas nunca removido, 
                  aplicação fica pesada e confusa.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Limpe flags antigas, use timeouts, 
                  documente quando remover.
                </Text>
                <CodeExample
                  title="Dead Code"
                  description="Como evitar o código morto"
                  code={{ content: `// ❌ RUIM - Código morto
function Component() {
  const oldFeature = useFeatureFlag('old-feature'); // Nunca usado
  const newFeature = useFeatureFlag('new-feature');
  
  return <div>{newFeature && <NewComponent />}</div>;
}

// ✅ BOM - Limpeza automática
class FlagCleanup {
  scheduleCleanup(flagKey, days = 30) {
    setTimeout(() => {
      if (isFlagUnused(flagKey)) {
        removeFlag(flagKey);
        cleanupCode(flagKey);
      }
    }, days * 24 * 60 * 60 * 1000);
  }
}

// Documentação clara
const FLAG_LIFECYCLE = {
  'new-checkout': {
    created: '2024-01-01',
    cleanupAfter: '2024-02-01', // Remove em 30 dias
    description: 'Novo checkout - remover código antigo após estabilização'
  }
};` }}
                />
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">3. Performance Issues</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Muitas chamadas para API de flags, 
                  aplicação fica lenta.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Cache flags, batch requests, 
                  carregue flags no início.
                </Text>
                <CodeExample
                  title="Performance Issues"
                  description="Como evitar problemas de performance com feature flags"
                  code={{ content: `// ❌ RUIM - Muitas chamadas
function Component() {
  const flag1 = useFeatureFlag('flag1'); // API call
  const flag2 = useFeatureFlag('flag2'); // API call
  const flag3 = useFeatureFlag('flag3'); // API call
  // 3 chamadas desnecessárias
}

// ✅ BOM - Cache e batch
class FlagProvider {
  private cache = new Map();
  private pendingRequests = new Map();
  
  async getFlag(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key);
    }
    
    const promise = this.fetchFlag(key);
    this.pendingRequests.set(key, promise);
    
    const result = await promise;
    this.cache.set(key, result);
    this.pendingRequests.delete(key);
    
    return result;
  }
  
  // Carrega todas as flags de uma vez
  async loadAllFlags() {
    const flags = await fetch('/api/flags');
    flags.forEach(flag => this.cache.set(flag.key, flag.value));
  }
}` }}
                />
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm" c="red">4. Testing Complexity</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Testes ficam complexos com múltiplas 
                  combinações de flags.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Como evitar:</strong> Mock flags nos testes, 
                  teste cada variante isoladamente.
                </Text>
                <CodeExample
                  title="Testing Complexity"
                  description="Como evitar testes complexos com múltiplas combinações de flags"
                  code={{ content: `// ❌ RUIM - Testes complexos
test('Component with flags', () => {
  // Testa todas as combinações
  const flagCombinations = [
    { flag1: true, flag2: false },
    { flag1: false, flag2: true },
    { flag1: true, flag2: true },
    // 8 combinações...
  ];
  
  flagCombinations.forEach(flags => {
    render(<Component flags={flags} />);
    // Testes...
  });
});

// ✅ BOM - Testes isolados
// Mock do provider
const mockFlagProvider = {
  getFlag: jest.fn()
};

test('Component with new feature', () => {
  mockFlagProvider.getFlag.mockReturnValue(true);
  
  render(
    <FlagProvider value={mockFlagProvider}>
      <Component />
    </FlagProvider>
  );
  
  expect(screen.getByText('New Feature')).toBeInTheDocument();
});

test('Component without new feature', () => {
  mockFlagProvider.getFlag.mockReturnValue(false);
  
  render(
    <FlagProvider value={mockFlagProvider}>
      <Component />
    </FlagProvider>
  );
  
  expect(screen.getByText('Old Feature')).toBeInTheDocument();
});` }}
                />
              </Card>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References */}
      <div>
        <Title order={2} mb="lg">
          <IconBulb size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Referências & Casos Reais
        </Title>
        
        <Stack gap="xl">
          {/* References */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📚 Referências</Title>
            <Stack gap="md">
              <Text>
                <strong>Livros:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>"Feature Toggles (aka Feature Flags)"</strong> - Martin Fowler
                </List.Item>
                <List.Item>
                  <strong>"Continuous Delivery"</strong> - Jez Humble & David Farley
                </List.Item>
                <List.Item>
                  <strong>"The Pragmatic Programmer"</strong> - Andrew Hunt & David Thomas
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://martinfowler.com/articles/feature-toggles.html" target="_blank">
                    Feature Toggles - Martin Fowler
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://launchdarkly.com/blog/" target="_blank">
                    Feature Flag Best Practices - LaunchDarkly
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://www.split.io/blog/" target="_blank">
                    Feature Flag Strategies - Split.io
                  </a>
                </List.Item>
              </List>
            </Stack>
          </Paper>

          {/* Real Cases */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🏢 Casos Reais de Sucesso</Title>
            <Stack gap="md">
              
              <Card withBorder p="md">
                <Title order={4} mb="sm">Netflix</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Deploy de novas funcionalidades com risco 
                  de quebrar experiência de milhões de usuários.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Sistema robusto de feature flags para 
                  gradual rollout e rollback instantâneo.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy seguro, testes em produção, 
                  rollback em segundos.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Facebook</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Aplicação gigante com milhares de 
                  desenvolvedores, risco alto de quebrar funcionalidades.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Feature flags para controle granular 
                  de funcionalidades por usuário, região, dispositivo.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy contínuo seguro, 
                  testes A/B em larga escala.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos times desenvolvendo 
                  funcionalidades simultaneamente, risco de conflitos.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Feature flags para isolar 
                  funcionalidades por time e funcionalidade.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Times independentes, 
                  deploy sem conflitos, rollback granular.
                </Text>
              </Card>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="green">
              <IconCheck size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">Pontos-chave dos Feature Flags</Text>
            </div>
          </Group>
          
          <List>
            <List.Item>
              <strong>Deploy seguro:</strong> Código sempre no ar, funcionalidade controlada
            </List.Item>
            <List.Item>
              <strong>Testes em produção:</strong> Teste com usuários reais, gradual rollout
            </List.Item>
            <List.Item>
              <strong>Rollback instantâneo:</strong> Desative flags em segundos, não em minutos
            </List.Item>
            <List.Item>
              <strong>Use quando:</strong> Quer deploy seguro ou testes em produção
            </List.Item>
            <List.Item>
              <strong>Evite:</strong> Aplicações simples ou quando performance é crítica
            </List.Item>
          </List>
          
          <Alert color="blue" title="💡 Dica">
            Feature Flags são sobre controle. Use quando quiser mudar comportamento 
            sem fazer deploy. Mas não use para tudo - às vezes um deploy simples 
            é melhor que uma flag complexa.
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

FeatureFlags.metadata = {
  title: 'Feature Flags',
  description: 'Controle dinâmico de funcionalidades. Deploy seguro, testes em produção, rollback instantâneo.'
};

export default FeatureFlags; 