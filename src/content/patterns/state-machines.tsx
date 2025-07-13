import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconSettings, IconBolt } from '@tabler/icons-react';

function StateMachines() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          State Machines
        </Title>
        <Text size="lg" c="dimmed">
          Estados previsíveis, transições claras, bugs impossíveis. 
          Lógica de negócio organizada, comportamento controlado.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconSettings size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Máquinas de estado para controlar comportamento da aplicação</Text>
            </div>
          </Group>
          
          <Text>
            State Machines é sobre uma coisa só: <strong>estados previsíveis</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de variáveis soltas e lógica espalhada, 
            você tem estados bem definidos e transições claras. 
            Cada estado tem comportamentos específicos, cada transição tem regras.
          </Text>
          
          <Text>
            A regra é simples: <em>estado atual + evento = próximo estado</em>. 
            Sem surpresas, sem bugs impossíveis, comportamento controlado.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
                      <IconBolt size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 3 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Estados</Title>
                <Text size="sm" c="dimmed">
                  Condições bem definidas da aplicação. 
                  Cada estado tem comportamentos específicos.
                </Text>
                <Code mt="xs" block>
{`// Estados de um formulário
const states = {
  IDLE: 'idle',           // Formulário vazio
  FILLING: 'filling',     // Usuário preenchendo
  VALIDATING: 'validating', // Validando dados
  SUBMITTING: 'submitting', // Enviando dados
  SUCCESS: 'success',      // Enviado com sucesso
  ERROR: 'error'           // Erro no envio
};

// Cada estado tem comportamentos específicos
// IDLE: campos vazios, botão desabilitado
// FILLING: campos editáveis, validação em tempo real
// VALIDATING: campos desabilitados, loading
// SUBMITTING: formulário travado, loading
// SUCCESS: mensagem de sucesso, reset disponível
// ERROR: mensagem de erro, retry disponível`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Eventos</Title>
                <Text size="sm" c="dimmed">
                  Ações que causam transições. 
                  Cada evento pode mudar o estado.
                </Text>
                <Code mt="xs" block>
{`// Eventos que causam transições
const events = {
  START_FILLING: 'START_FILLING',
  VALIDATE: 'VALIDATE',
  SUBMIT: 'SUBMIT',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  RESET: 'RESET'
};

// Transições baseadas em eventos
// IDLE + START_FILLING = FILLING
// FILLING + VALIDATE = VALIDATING
// VALIDATING + SUCCESS = SUCCESS
// VALIDATING + ERROR = ERROR
// QUALQUER_ESTADO + RESET = IDLE

// Eventos são disparados por ações do usuário
// ou por respostas de APIs`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Transições</Title>
                <Text size="sm" c="dimmed">
                  Regras que definem como mudar de estado. 
                  Cada transição tem condições e ações.
                </Text>
                <Code mt="xs" block>
{`// Transições bem definidas
const transitions = {
  [states.IDLE]: {
    [events.START_FILLING]: {
      target: states.FILLING,
      actions: ['enableFields', 'clearValidation']
    }
  },
  [states.FILLING]: {
    [events.VALIDATE]: {
      target: states.VALIDATING,
      actions: ['disableFields', 'showLoading']
    }
  },
  [states.VALIDATING]: {
    [events.SUCCESS]: {
      target: states.SUCCESS,
      actions: ['showSuccess', 'disableForm']
    },
    [events.ERROR]: {
      target: states.ERROR,
      actions: ['showError', 'enableFields']
    }
  }
};

// Transições são previsíveis
// Comportamento controlado
// Bugs impossíveis`}
                </Code>
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
                <IconBolt size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Comportamento Previsível</Title>
                <Text size="sm">
                  Estados bem definidos, transições claras. 
                  Sem surpresas, sem bugs impossíveis.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconSettings size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Lógica Organizada</Title>
                <Text size="sm">
                  Comportamento centralizado, regras claras. 
                  Fácil de entender e manter.
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
                <Title order={4}>Testabilidade</Title>
                <Text size="sm">
                  Estados isolados, transições testáveis. 
                  Cobertura de testes completa.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </div>

      {/* When to use */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Alert variant="light" color="green" title="✅ Use quando:">
            <List>
              <List.Item>Formulários complexos</List.Item>
              <List.Item>Wizards/multi-step flows</List.Item>
              <List.Item>Autenticação e autorização</List.Item>
              <List.Item>Upload de arquivos</List.Item>
              <List.Item>Processos de pagamento</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Lógica simples (over-engineering)</List.Item>
              <List.Item>Estados independentes</List.Item>
              <List.Item>Comportamento linear</List.Item>
              <List.Item>Protótipos rápidos</List.Item>
            </List>
          </Alert>
        </Stack>
      </div>

      {/* Real Examples */}
      <div>
        <Title order={2} mb="lg">
          <IconCode size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Exemplos Práticos no Front-End
        </Title>
        
        <Stack gap="xl">
          {/* Example 1: Form */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📝 Formulário - Estados Complexos</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Formulário com validação, 
                envio assíncrono, feedback visual. Estados complexos.
                <br />
                <strong>Problema:</strong> Estados confusos, bugs impossíveis, 
                UX inconsistente.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Estados confusos
function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      await submitForm();
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Estados confusos
  // Bugs impossíveis
  // UX inconsistente

// ✅ BOM - State Machine
import { createMachine, interpret } from 'xstate';

const formMachine = createMachine({
  id: 'form',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START_FILLING: 'filling'
      }
    },
    filling: {
      on: {
        VALIDATE: 'validating',
        RESET: 'idle'
      }
    },
    validating: {
      on: {
        VALIDATION_SUCCESS: 'valid',
        VALIDATION_ERROR: 'error'
      }
    },
    valid: {
      on: {
        SUBMIT: 'submitting',
        RESET: 'idle'
      }
    },
    error: {
      on: {
        RETRY: 'validating',
        RESET: 'idle'
      }
    },
    submitting: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error'
      }
    },
    success: {
      on: {
        RESET: 'idle'
      }
    }
  }
});

function Form() {
  const [state, send] = useMachine(formMachine);
  
  const handleSubmit = async () => {
    send('SUBMIT');
    
    try {
      await submitForm();
      send('SUCCESS');
    } catch (error) {
      send('ERROR');
    }
  };
  
  return (
    <form>
      {state.matches('idle') && (
        <button onClick={() => send('START_FILLING')}>
          Começar
        </button>
      )}
      
      {state.matches('filling') && (
        <div>
          <input onChange={() => send('VALIDATE')} />
          <button onClick={() => send('RESET')}>Reset</button>
        </div>
      )}
      
      {state.matches('validating') && (
        <div>Validando...</div>
      )}
      
      {state.matches('valid') && (
        <div>
          <input />
          <button onClick={handleSubmit}>Enviar</button>
          <button onClick={() => send('RESET')}>Reset</button>
        </div>
      )}
      
      {state.matches('submitting') && (
        <div>Enviando...</div>
      )}
      
      {state.matches('success') && (
        <div>
          <div>Sucesso!</div>
          <button onClick={() => send('RESET')}>Novo Formulário</button>
        </div>
      )}
      
      {state.matches('error') && (
        <div>
          <div>Erro: {state.context.error}</div>
          <button onClick={() => send('RETRY')}>Tentar Novamente</button>
          <button onClick={() => send('RESET')}>Reset</button>
        </div>
      )}
    </form>
  );
}

// Estados previsíveis
// Transições claras
// UX consistente`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Authentication */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔐 Autenticação - Estados de Login</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Sistema de autenticação com login, 
                logout, refresh token. Estados complexos de sessão.
                <br />
                <strong>Problema:</strong> Estados de sessão confusos, 
                race conditions, bugs de segurança.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Estados confusos
function AuthProvider() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  
  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const user = await loginAPI(credentials);
      setUser(user);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Estados confusos
  // Race conditions
  // Bugs de segurança

// ✅ BOM - State Machine
const authMachine = createMachine({
  id: 'auth',
  initial: 'checking',
  context: {
    user: null,
    error: null
  },
  states: {
    checking: {
      on: {
        AUTHENTICATED: 'authenticated',
        UNAUTHENTICATED: 'unauthenticated'
      }
    },
    unauthenticated: {
      on: {
        LOGIN: 'loggingIn'
      }
    },
    loggingIn: {
      on: {
        SUCCESS: 'authenticated',
        ERROR: 'error'
      }
    },
    authenticated: {
      on: {
        LOGOUT: 'loggingOut',
        REFRESH: 'refreshing'
      }
    },
    refreshing: {
      on: {
        SUCCESS: 'authenticated',
        ERROR: 'unauthenticated'
      }
    },
    loggingOut: {
      on: {
        SUCCESS: 'unauthenticated'
      }
    },
    error: {
      on: {
        RETRY: 'loggingIn',
        RESET: 'unauthenticated'
      }
    }
  }
});

function AuthProvider({ children }) {
  const [state, send] = useMachine(authMachine);
  
  useEffect(() => {
    // Verifica token no carregamento
    checkAuth().then(user => {
      if (user) {
        send('AUTHENTICATED', { user });
      } else {
        send('UNAUTHENTICATED');
      }
    });
  }, []);
  
  const login = async (credentials) => {
    send('LOGIN');
    
    try {
      const user = await loginAPI(credentials);
      send('SUCCESS', { user });
    } catch (error) {
      send('ERROR', { error: error.message });
    }
  };
  
  const logout = async () => {
    send('LOGOUT');
    
    try {
      await logoutAPI();
      send('SUCCESS');
    } catch (error) {
      // Força logout mesmo com erro
      send('SUCCESS');
    }
  };
  
  const value = {
    user: state.context.user,
    error: state.context.error,
    isAuthenticated: state.matches('authenticated'),
    isLoading: state.matches('checking') || state.matches('loggingIn'),
    login,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Estados previsíveis
// Transições seguras
// Sem race conditions`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: File Upload */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📁 Upload de Arquivos - Estados de Progresso</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Upload de arquivos com progresso, 
                validação, retry. Estados complexos de upload.
                <br />
                <strong>Problema:</strong> Estados de upload confusos, 
                progresso inconsistente, UX ruim.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Estados confusos
function FileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState(null);
  
  const uploadFile = async (file) => {
    setIsUploading(true);
    setProgress(0);
    setError(null);
    
    try {
      await uploadAPI(file, (progress) => {
        setProgress(progress);
      });
      setIsComplete(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };
  
  // Estados confusos
  // Progresso inconsistente
  // UX ruim

// ✅ BOM - State Machine
const uploadMachine = createMachine({
  id: 'upload',
  initial: 'idle',
  context: {
    file: null,
    progress: 0,
    error: null
  },
  states: {
    idle: {
      on: {
        SELECT_FILE: 'validating'
      }
    },
    validating: {
      on: {
        VALIDATION_SUCCESS: 'ready',
        VALIDATION_ERROR: 'error'
      }
    },
    ready: {
      on: {
        UPLOAD: 'uploading',
        CANCEL: 'idle'
      }
    },
    uploading: {
      on: {
        PROGRESS: {
          actions: 'updateProgress'
        },
        SUCCESS: 'success',
        ERROR: 'error'
      }
    },
    success: {
      on: {
        RESET: 'idle'
      }
    },
    error: {
      on: {
        RETRY: 'uploading',
        RESET: 'idle'
      }
    }
  }
});

function FileUpload() {
  const [state, send] = useMachine(uploadMachine);
  
  const handleFileSelect = (file) => {
    send('SELECT_FILE', { file });
    
    // Valida arquivo
    validateFile(file).then(isValid => {
      if (isValid) {
        send('VALIDATION_SUCCESS');
      } else {
        send('VALIDATION_ERROR', { error: 'Arquivo inválido' });
      }
    });
  };
  
  const handleUpload = async () => {
    send('UPLOAD');
    
    try {
      await uploadAPI(state.context.file, (progress) => {
        send('PROGRESS', { progress });
      });
      send('SUCCESS');
    } catch (error) {
      send('ERROR', { error: error.message });
    }
  };
  
  return (
    <div>
      {state.matches('idle') && (
        <input 
          type="file" 
          onChange={(e) => handleFileSelect(e.target.files[0])}
        />
      )}
      
      {state.matches('validating') && (
        <div>Validando arquivo...</div>
      )}
      
      {state.matches('ready') && (
        <div>
          <div>Arquivo: {state.context.file.name}</div>
          <button onClick={handleUpload}>Upload</button>
          <button onClick={() => send('CANCEL')}>Cancelar</button>
        </div>
      )}
      
      {state.matches('uploading') && (
        <div>
          <div>Upload: {state.context.progress}%</div>
          <progress value={state.context.progress} max="100" />
        </div>
      )}
      
      {state.matches('success') && (
        <div>
          <div>Upload concluído!</div>
          <button onClick={() => send('RESET')}>Novo Upload</button>
        </div>
      )}
      
      {state.matches('error') && (
        <div>
          <div>Erro: {state.context.error}</div>
          <button onClick={() => send('RETRY')}>Tentar Novamente</button>
          <button onClick={() => send('RESET')}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

// Estados previsíveis
// Progresso consistente
// UX excelente`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Pitfalls & How to Avoid */}
      <div>
        <Title order={2} mb="lg">
          <IconAlertTriangle size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Armadilhas & Como Evitar
        </Title>
        
        <Stack gap="xl">
          {/* Over-engineering */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚫 Over-engineering</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você usa state machine pra tudo. 
                Lógica simples vira complexidade desnecessária.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use state machines só quando estados são complexos. 
                Lógica simples não precisa de state machine.
              </Text>
              
              <Code block>
{`// ❌ RUIM - State machine desnecessário
const simpleMachine = createMachine({
  id: 'simple',
  initial: 'off',
  states: {
    off: {
      on: { TOGGLE: 'on' }
    },
    on: {
      on: { TOGGLE: 'off' }
    }
  }
});

// Desnecessário - é só um boolean

// ✅ BOM - Lógica simples
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'Ligado' : 'Desligado'}
    </button>
  );
}

// State machine só quando necessário
// Lógica complexa, múltiplos estados`}
              </Code>
            </Stack>
          </Paper>

          {/* Complex Transitions */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Transições Complexas</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Transições com muitas condições, 
                lógica complexa, difícil de entender.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Mantenha transições simples, 
                use guards para condições complexas.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Transições complexas
const complexMachine = createMachine({
  states: {
    idle: {
      on: {
        SUBMIT: {
          target: 'loading',
          cond: (context, event) => {
            return context.isValid && 
                   context.hasPermission && 
                   !context.isBlocked &&
                   context.network.isOnline;
          }
        }
      }
    }
  }
});

// Difícil de entender
// Difícil de testar

// ✅ BOM - Transições simples
const simpleMachine = createMachine({
  states: {
    idle: {
      on: {
        VALIDATE: 'validating'
      }
    },
    validating: {
      on: {
        SUCCESS: 'ready',
        ERROR: 'error'
      }
    },
    ready: {
      on: {
        SUBMIT: 'loading'
      }
    }
  }
});

// Transições claras
// Fácil de entender
// Fácil de testar`}
              </Code>
            </Stack>
          </Paper>

          {/* State Explosion */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">💥 Explosão de Estados</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Muitos estados, transições complexas, 
                máquina difícil de manter.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Agrupe estados relacionados, 
                use hierarquia, simplifique.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Muitos estados
const complexMachine = createMachine({
  states: {
    idle: {},
    loading: {},
    success: {},
    error: {},
    retrying: {},
    cancelled: {},
    timeout: {},
    networkError: {},
    serverError: {},
    validationError: {},
    permissionError: {}
  }
});

// Difícil de manter
// Difícil de entender

// ✅ BOM - Estados agrupados
const simpleMachine = createMachine({
  states: {
    idle: {
      on: { START: 'loading' }
    },
    loading: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error'
      }
    },
    success: {
      on: { RESET: 'idle' }
    },
    error: {
      on: {
        RETRY: 'loading',
        RESET: 'idle'
      }
    }
  }
});

// Estados simples
// Fácil de manter
// Fácil de entender`}
              </Code>
            </Stack>
          </Paper>

          {/* Side Effects */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">⚡ Side Effects</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Side effects misturados com transições, 
                lógica espalhada, difícil de testar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use actions para side effects, 
                mantenha transições puras.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Side effects misturados
const badMachine = createMachine({
  states: {
    idle: {
      on: {
        SUBMIT: {
          target: 'loading',
          actions: [
            'callAPI',
            'updateUI',
            'logEvent',
            'showLoading'
          ]
        }
      }
    }
  }
});

// Difícil de testar
// Lógica espalhada

// ✅ BOM - Side effects organizados
const goodMachine = createMachine({
  states: {
    idle: {
      on: {
        SUBMIT: {
          target: 'loading',
          actions: ['prepareRequest']
        }
      }
    },
    loading: {
      entry: ['showLoading', 'startRequest'],
      exit: ['hideLoading'],
      on: {
        SUCCESS: {
          target: 'success',
          actions: ['handleSuccess']
        },
        ERROR: {
          target: 'error',
          actions: ['handleError']
        }
      }
    }
  }
});

// Side effects organizados
// Fácil de testar
// Lógica clara`}
              </Code>
            </Stack>
          </Paper>

          {/* Testing */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧪 Testes</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> State machines difíceis de testar, 
                cobertura baixa, bugs não detectados.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Teste cada transição, 
                use ferramentas de testing específicas.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Testes difíceis
// Como testar estados complexos?
// Como testar transições?

// ✅ BOM - Testes organizados
import { createModel } from '@xstate/test';

const testModel = createModel(formMachine).withEvents({
  START_FILLING: {
    exec: () => {
      // Simula ação do usuário
    }
  },
  VALIDATE: {
    exec: () => {
      // Simula validação
    }
  },
  SUBMIT: {
    exec: () => {
      // Simula envio
    }
  }
});

const testPlans = testModel.getSimplePathPlans();

testPlans.forEach((plan) => {
  describe(plan.description, () => {
    plan.paths.forEach((path) => {
      it(path.description, async () => {
        const service = interpret(formMachine);
        service.start();
        
        await path.test(service);
      });
    });
  });
});

// Testa todas as transições
// Cobertura completa
// Bugs detectados`}
              </Code>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* References & Real Cases */}
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
                  <strong>"Statecharts"</strong> - David Harel
                </List.Item>
                <List.Item>
                  <strong>"Understanding State Machines"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"XState in Practice"</strong> - David Khourshid
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://xstate.js.org/" target="_blank">
                    XState - State machine library
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://stately.ai/" target="_blank">
                    Stately - State machine tools
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://statecharts.dev/" target="_blank">
                    Statecharts - Visual state machines
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
                  <strong>Problema:</strong> Estados de player confusos, 
                  bugs de reprodução, UX inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> State machines para player. 
                  Estados bem definidos, transições claras.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Player mais estável, 
                  menos bugs, UX consistente.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Spotify</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Estados de reprodução confusos, 
                  bugs de controle, sincronização ruim.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> State machines para player. 
                  Estados de reprodução bem definidos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Controles mais confiáveis, 
                  sincronização melhor, menos bugs.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Uber</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Estados de viagem confusos, 
                  bugs de tracking, UX inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> State machines para viagens. 
                  Estados de viagem bem definidos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Tracking mais preciso, 
                  UX consistente, menos bugs.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Airbnb</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Estados de reserva confusos, 
                  bugs de pagamento, UX inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> State machines para reservas. 
                  Estados de reserva bem definidos.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Reservas mais confiáveis, 
                  pagamentos seguros, UX consistente.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam State Machines:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>XState</strong> - State machine library para JavaScript
                </List.Item>
                <List.Item>
                  <strong>Robot</strong> - Finite state machine library
                </List.Item>
                <List.Item>
                  <strong>JavaScript State Machine</strong> - Lightweight library
                </List.Item>
                <List.Item>
                  <strong>Stately</strong> - Visual state machine editor
                </List.Item>
                <List.Item>
                  <strong>Statecharts</strong> - Visual state machine notation
                </List.Item>
                <List.Item>
                  <strong>Redux Toolkit</strong> - State management com state machines
                </List.Item>
              </List>
            </Stack>
          </Paper>
        </Stack>
      </div>

      {/* Summary */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconBulb size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>Resumo</Title>
              <Text c="dimmed">State Machines na prática</Text>
            </div>
          </Group>
          
          <Text>
            State Machines é sobre uma coisa só: <strong>estados previsíveis</strong>. 
            Estados bem definidos, transições claras, comportamento controlado. 
            Use quando estados são complexos e comportamento precisa ser previsível.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre usar state machine pra tudo. 
            É sobre usar quando estados são complexos. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece com estados simples, evolua conforme necessário. 
            Foque em previsibilidade e simplicidade.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

StateMachines.metadata = {
  title: 'State Machines',
  description: 'Estados previsíveis, transições claras, bugs impossíveis. Lógica de negócio organizada.'
};

export default StateMachines;
