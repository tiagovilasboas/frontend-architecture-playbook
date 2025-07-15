import { Title, Text, Stack, Paper, Alert, List, ThemeIcon, Group, Card } from '@mantine/core';
import { IconShield, IconAlertTriangle, IconCheck, IconCode, IconLock } from '@tabler/icons-react';
import securityExamples from '../../utils/code-examples/security.json';
import CodeExample from '../../components/CodeExample';

function renderCodeExample(example: { title: string; code: string; description?: string }) {
  return <CodeExample title={example.title} code={example.code} {...(example.description ? { description: example.description } : {})} />;
}

export default function SecurityPatterns() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <Paper withBorder p="xl">
        <Group>
          <ThemeIcon size="xl" variant="light" color="blue">
            <IconShield size={32} />
          </ThemeIcon>
          <div>
            <Title order={1}>Security Patterns</Title>
            <Text c="dimmed" size="lg">
              Protegendo sua aplicação front-end sem virar paranoico
            </Text>
          </div>
        </Group>
      </Paper>

      {/* O que é? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconCode size={24} style={{ marginRight: 8 }} />
          O que é?
        </Title>
        <Text>
          Security patterns são técnicas e práticas que protegem sua aplicação front-end contra vulnerabilidades comuns. 
          Não é sobre virar um expert em criptografia, é sobre não deixar a porta aberta para o bandido.
        </Text>
        
        <Alert icon={<IconAlertTriangle size={16} />} color="orange" mt="md">
          <Text size="sm">
            <strong>Problema real:</strong> 90% dos ataques web exploram vulnerabilidades básicas que poderiam ser evitadas 
            com algumas práticas simples. Não precisa ser um hacker para se proteger.
          </Text>
        </Alert>
      </Paper>

      {/* Camadas de Segurança */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconShield size={24} style={{ marginRight: 8 }} />
          Camadas de Proteção
        </Title>
        
        <Stack gap="md">
          <Card withBorder>
            <Group>
              <ThemeIcon size="lg" variant="light" color="green">
                <IconCheck size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>1. Input Validation</Text>
                <Text size="sm" c="dimmed">
                  Valide TUDO que vem do usuário. Não confie em ninguém.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder>
            <Group>
              <ThemeIcon size="lg" variant="light" color="blue">
                <IconLock size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>2. Authentication & Authorization</Text>
                <Text size="sm" c="dimmed">
                  Quem é você e o que você pode fazer? Sempre verifique.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder>
            <Group>
              <ThemeIcon size="lg" variant="light" color="purple">
                <IconShield size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>3. Data Protection</Text>
                <Text size="sm" c="dimmed">
                  Dados sensíveis não ficam no localStorage. Ponto.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder>
            <Group>
              <ThemeIcon size="lg" variant="light" color="orange">
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>4. XSS Prevention</Text>
                <Text size="sm" c="dimmed">
                  Não renderize HTML do usuário. Nunca.
                </Text>
              </div>
            </Group>
          </Card>
        </Stack>
      </Paper>

      {/* Por que vale a pena? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconCheck size={24} style={{ marginRight: 8 }} />
          Por que vale a pena?
        </Title>
        
        <List spacing="md">
          <List.Item>
            <Text fw={600}>Evita vazamentos de dados</Text>
            <Text size="sm" c="dimmed">
              Seus usuários confiam em você. Não quebre essa confiança.
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Reduz custos de incidentes</Text>
            <Text size="sm" c="dimmed">
              Um bug de segurança pode custar milhões. Prevenção é barata.
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Mantém compliance</Text>
            <Text size="sm" c="dimmed">
              LGPD, GDPR, HIPAA... Regulamentações existem por um motivo.
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Protege sua reputação</Text>
            <Text size="sm" c="dimmed">
              Uma vez quebrada, a confiança é difícil de recuperar.
            </Text>
          </List.Item>
        </List>
      </Paper>

      {/* Quando usar? */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconAlertTriangle size={24} style={{ marginRight: 8 }} />
          Quando usar?
        </Title>
        
        <Stack gap="md">
          <Alert color="green" title="Sempre">
            <Text size="sm">
              <strong>Formulários de login/registro</strong> - Validação rigorosa de inputs
            </Text>
          </Alert>
          
          <Alert color="blue" title="Aplicações com dados sensíveis">
            <Text size="sm">
              <strong>E-commerce, bancos, saúde</strong> - Criptografia e proteção extra
            </Text>
          </Alert>
          
          <Alert color="orange" title="APIs públicas">
            <Text size="sm">
              <strong>Rate limiting, CORS, validação</strong> - Proteção contra abuso
            </Text>
          </Alert>
          
          <Alert color="red" title="Conteúdo gerado por usuários">
            <Text size="sm">
              <strong>Comentários, uploads, UGC</strong> - Sanitização obrigatória
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Exemplos Práticos */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconCode size={24} style={{ marginRight: 8 }} />
          Exemplos Práticos
        </Title>

        <Stack gap="xl">
          {/* Input Validation */}
          <Card withBorder>
            <Title order={3} mb="md">{securityExamples.inputValidation.title}</Title>
            <Text size="sm" mb="md">{securityExamples.inputValidation.description}</Text>
            <Stack gap="md">
              {renderCodeExample(securityExamples.inputValidation.bad)}
              {renderCodeExample(securityExamples.inputValidation.good)}
            </Stack>
          </Card>

          {/* XSS Prevention */}
          <Card withBorder>
            <Title order={3} mb="md">{securityExamples.xssPrevention.title}</Title>
            <Text size="sm" mb="md">{securityExamples.xssPrevention.description}</Text>
            <Stack gap="md">
              <CodeExample
                title={securityExamples.xssPrevention.bad.title}
                code={securityExamples.xssPrevention.bad.code}
              />
              <CodeExample
                title={securityExamples.xssPrevention.good.title}
                code={securityExamples.xssPrevention.good.code}
              />
              <CodeExample
                title={securityExamples.xssPrevention.better.title}
                code={securityExamples.xssPrevention.better.code}
              />
            </Stack>
          </Card>

          {/* Secure Storage */}
          <Card withBorder>
            <Title order={3} mb="md">{securityExamples.secureStorage.title}</Title>
            <Text size="sm" mb="md">{securityExamples.secureStorage.description}</Text>
            <Stack gap="md">
              <CodeExample
                title={securityExamples.secureStorage.bad.title}
                code={securityExamples.secureStorage.bad.code}
              />
              <CodeExample
                title={securityExamples.secureStorage.good.title}
                code={securityExamples.secureStorage.good.code}
              />
              <CodeExample
                title={securityExamples.secureStorage.better.title}
                code={securityExamples.secureStorage.better.code}
              />
            </Stack>
          </Card>

          {/* CORS Configuration */}
          <Card withBorder>
            <Title order={3} mb="md">{securityExamples.corsConfiguration.title}</Title>
            <Text size="sm" mb="md">{securityExamples.corsConfiguration.description}</Text>
            <Stack gap="md">
              <CodeExample
                title={securityExamples.corsConfiguration.bad.title}
                code={securityExamples.corsConfiguration.bad.code}
              />
              <CodeExample
                title={securityExamples.corsConfiguration.good.title}
                code={securityExamples.corsConfiguration.good.code}
              />
              <CodeExample
                title={securityExamples.corsConfiguration.better.title}
                code={securityExamples.corsConfiguration.better.code}
              />
            </Stack>
          </Card>

          {/* Security Headers */}
          <Card withBorder>
            <Title order={3} mb="md">{securityExamples.securityHeaders.title}</Title>
            <Text size="sm" mb="md">{securityExamples.securityHeaders.description}</Text>
            <Stack gap="md">
              <CodeExample
                title={securityExamples.securityHeaders.bad.title}
                code={securityExamples.securityHeaders.bad.code}
              />
              <CodeExample
                title={securityExamples.securityHeaders.good.title}
                code={securityExamples.securityHeaders.good.code}
              />
              <CodeExample
                title={securityExamples.securityHeaders.better.title}
                code={securityExamples.securityHeaders.better.code}
              />
            </Stack>
          </Card>

          {/* Rate Limiting */}
          <Card withBorder>
            <Title order={3} mb="md">{securityExamples.rateLimiting.title}</Title>
            <Text size="sm" mb="md">{securityExamples.rateLimiting.description}</Text>
            <Stack gap="md">
              <CodeExample
                title={securityExamples.rateLimiting.bad.title}
                code={securityExamples.rateLimiting.bad.code}
              />
              <CodeExample
                title={securityExamples.rateLimiting.good.title}
                code={securityExamples.rateLimiting.good.code}
              />
              <CodeExample
                title={securityExamples.rateLimiting.better.title}
                code={securityExamples.rateLimiting.better.code}
              />
            </Stack>
          </Card>
        </Stack>
      </Paper>

      {/* Armadilhas */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconAlertTriangle size={24} style={{ marginRight: 8 }} />
          Armadilhas Comuns
        </Title>
        
        <Stack gap="md">
          <Alert color="red" title="Over-engineering">
            <Text size="sm">
              <strong>Problema:</strong> Implementar segurança complexa desnecessária
            </Text>
            <Text size="sm" mt="xs">
              <strong>Solução:</strong> Comece com o básico. Validação, sanitização, HTTPS.
            </Text>
          </Alert>
          
          <Alert color="red" title="Security by obscurity">
            <Text size="sm">
              <strong>Problema:</strong> Esconder dados sensíveis no front-end
            </Text>
            <Text size="sm" mt="xs">
              <strong>Solução:</strong> Dados sensíveis ficam no backend. Sempre.
            </Text>
          </Alert>
          
          <Alert color="red" title="Trusting client-side validation">
            <Text size="sm">
              <strong>Problema:</strong> Só validar no front-end
            </Text>
            <Text size="sm" mt="xs">
              <strong>Solução:</strong> Valide sempre no backend. Front-end é só UX.
            </Text>
          </Alert>
          
          <Alert color="red" title="Ignoring updates">
            <Text size="sm">
              <strong>Problema:</strong> Não atualizar dependências com vulnerabilidades
            </Text>
            <Text size="sm" mt="xs">
              <strong>Solução:</strong> Use dependabot, npm audit, renovate.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Referências */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconCode size={24} style={{ marginRight: 8 }} />
          Referências
        </Title>
        
        <List spacing="md">
          <List.Item>
            <Text fw={600}>OWASP Top 10</Text>
            <Text size="sm" c="dimmed">
              Lista das vulnerabilidades mais comuns em aplicações web
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Security Headers</Text>
            <Text size="sm" c="dimmed">
              helmet.js, CSP, HSTS, X-Frame-Options
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Authentication Libraries</Text>
            <Text size="sm" c="dimmed">
              NextAuth.js, Auth0, Supabase Auth, Clerk
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Validation Libraries</Text>
            <Text size="sm" c="dimmed">
              Zod, Yup, Joi, class-validator
            </Text>
          </List.Item>
          
          <List.Item>
            <Text fw={600}>Security Tools</Text>
            <Text size="sm" c="dimmed">
              Snyk, npm audit, dependabot, renovate
            </Text>
          </List.Item>
        </List>
      </Paper>

      {/* Resumo */}
      <Paper withBorder p="xl">
        <Title order={2} mb="md">
          <IconCheck size={24} style={{ marginRight: 8 }} />
          Resumo
        </Title>
        
        <Stack gap="md">
          <Text>
            <strong>Segurança não é opcional.</strong> Mesmo em projetos pequenos, implemente as práticas básicas:
          </Text>
          
          <List spacing="sm">
            <List.Item>✅ Valide todos os inputs</List.Item>
            <List.Item>✅ Sanitize conteúdo do usuário</List.Item>
            <List.Item>✅ Use HTTPS sempre</List.Item>
            <List.Item>✅ Configure CORS corretamente</List.Item>
            <List.Item>✅ Mantenha dependências atualizadas</List.Item>
            <List.Item>✅ Não confie no front-end para dados sensíveis</List.Item>
          </List>
          
          <Alert color="blue" title="Lembre-se">
            <Text size="sm">
              Segurança é um processo, não um produto. Comece simples e evolua conforme necessário.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}

SecurityPatterns.metadata = {
  title: 'Security Patterns',
  description: 'Técnicas e práticas para proteger aplicações front-end contra vulnerabilidades comuns.'
}; 