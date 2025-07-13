import { Title, Text, Stack, Paper, Code, Alert, List, ThemeIcon, Group, Card, Badge } from '@mantine/core';
import { IconBulb, IconAlertTriangle, IconCheck, IconCode, IconFolder, IconBrandGithub } from '@tabler/icons-react';

function Monorepo() {
  return (
    <Stack gap="xl">
      {/* Hero Section */}
      <div>
        <Title order={1} mb="md">
          Monorepo
        </Title>
        <Text size="lg" c="dimmed">
          Um repositório, múltiplos projetos. Compartilhamento de código, 
          tooling centralizado, refatoração segura. Escalabilidade sem complexidade.
        </Text>
      </div>

      {/* What is it */}
      <Paper withBorder p="xl" radius="md">
        <Stack gap="md">
          <Group>
            <ThemeIcon size={50} radius="md" variant="light" color="blue">
              <IconFolder size={25} />
            </ThemeIcon>
            <div>
              <Title order={3}>O que é?</Title>
              <Text c="dimmed">Um repositório que contém múltiplos projetos/pacotes</Text>
            </div>
          </Group>
          
          <Text>
            Monorepo é sobre uma coisa só: <strong>ter tudo num lugar só</strong>.
          </Text>
          
          <Text>
            Pensa assim: ao invés de ter 10 repositórios separados, você tem tudo num só. 
            Apps, libs, docs, tudo junto. Mas organizado, não bagunçado.
          </Text>
          
          <Text>
            A regra é simples: <em>compartilhamento fácil, tooling centralizado</em>. 
            Você refatora uma vez, todo mundo ganha. Você muda uma lib, todos os projetos atualizam.
          </Text>
        </Stack>
      </Paper>

      {/* Concepts */}
      <div>
        <Title order={2} mb="lg">
                      <IconBrandGithub size={28} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          Os 4 Conceitos Principais
        </Title>
        
        <Stack gap="md">
          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="green">1</Badge>
              <div>
                <Title order={4}>Compartilhamento de Código</Title>
                <Text size="sm" c="dimmed">
                  Libs compartilhadas entre projetos. Muda uma vez, todo mundo ganha.
                </Text>
                <Code mt="xs" block>
{`// packages/shared/components/
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';

// apps/web/src/
import { Button, Input, Card } from '@shared/components';

// apps/mobile/src/
import { Button, Input, Card } from '@shared/components';

// Muda o Button, muda em todo lugar`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="blue">2</Badge>
              <div>
                <Title order={4}>Tooling Centralizado</Title>
                <Text size="sm" c="dimmed">
                  ESLint, Prettier, TypeScript, testes. Configura uma vez, 
                  funciona em todo lugar.
                </Text>
                <Code mt="xs" block>
{`// root/.eslintrc.js
module.exports = {
  extends: ['@repo/eslint-config'],
  // Configuração centralizada
};

// root/package.json
{
  "scripts": {
    "lint": "eslint .",
    "test": "jest",
    "build": "turbo run build"
  }
}

// Funciona em todos os projetos`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="orange">3</Badge>
              <div>
                <Title order={4}>Refatoração Segura</Title>
                <Text size="sm" c="dimmed">
                  Muda uma lib, vê o impacto em todos os projetos. 
                  Sem quebrar nada.
                </Text>
                <Code mt="xs" block>
{`// packages/ui/src/Button.tsx
export function Button({ children, variant }) {
  // Muda aqui
  return <button className={\`btn btn-\${variant}\`}>{children}</button>;
}

// Turbo detecta mudanças
// Roda testes em todos os projetos
// Build só nos que mudaram
// Deploy só nos afetados

// Refatoração segura, sem quebrar nada`}
                </Code>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <Badge size="lg" variant="light" color="red">4</Badge>
              <div>
                <Title order={4}>Versionamento Unificado</Title>
                <Text size="sm" c="dimmed">
                  Um commit pode afetar múltiplos projetos. 
                  Histórico completo, rastreabilidade total.
                </Text>
                <Code mt="xs" block>
{`// Um commit, múltiplos projetos
git commit -m "feat: add new Button component

- Add Button to shared/ui
- Update web app to use new Button
- Update mobile app to use new Button
- Update docs with Button examples"

// Histórico completo
// Rastreabilidade total
// Mudanças atômicas`}
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
                <IconCode size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Menos Duplicação</Title>
                <Text size="sm">
                  Compartilha código entre projetos. Não reescreve, reutiliza.
                </Text>
              </div>
            </Group>
          </Card>

          <Card withBorder p="md">
            <Group>
              <ThemeIcon size={40} radius="md" variant="light" color="blue">
                <IconFolder size={20} />
              </ThemeIcon>
              <div>
                <Title order={4}>Tooling Centralizado</Title>
                <Text size="sm">
                  Configura ESLint, Prettier, TypeScript uma vez. 
                  Funciona em todo lugar.
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
                <Title order={4}>Refatoração Segura</Title>
                <Text size="sm">
                  Muda uma lib, vê o impacto em todos os projetos. 
                  Sem quebrar nada.
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
              <List.Item>Múltiplos projetos relacionados</List.Item>
              <List.Item>Precisa compartilhar código</List.Item>
              <List.Item>Tooling centralizado é importante</List.Item>
              <List.Item>Refatoração frequente</List.Item>
              <List.Item>Time grande trabalhando junto</List.Item>
            </List>
          </Alert>

          <Alert variant="light" color="red" title="❌ Evite quando:">
            <List>
              <List.Item>Projetos completamente independentes</List.Item>
              <List.Item>Time pequeno (complexidade desnecessária)</List.Item>
              <List.Item>Projetos com tecnologias muito diferentes</List.Item>
              <List.Item>Deploy independente é crítico</List.Item>
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
          {/* Example 1: Design System */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🎨 Design System - Componentes Compartilhados</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Design system com componentes reutilizáveis. 
                Web app, mobile app, admin panel usando os mesmos componentes.
                <br />
                <strong>Problema:</strong> Código duplicado, inconsistência visual, 
                difícil de manter.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Múltiplos repositórios
// repo-web-app/
// ├── src/components/Button.tsx
// ├── src/components/Input.tsx
// └── src/components/Card.tsx

// repo-mobile-app/
// ├── src/components/Button.tsx
// ├── src/components/Input.tsx
// └── src/components/Card.tsx

// repo-admin-panel/
// ├── src/components/Button.tsx
// ├── src/components/Input.tsx
// └── src/components/Card.tsx

// Código duplicado, inconsistência visual

// ✅ BOM - Monorepo
// packages/ui/
// ├── src/components/Button.tsx
// ├── src/components/Input.tsx
// └── src/components/Card.tsx

// apps/web-app/
// ├── src/pages/
// └── package.json (depende de @repo/ui)

// apps/mobile-app/
// ├── src/screens/
// └── package.json (depende de @repo/ui)

// apps/admin-panel/
// ├── src/pages/
// └── package.json (depende de @repo/ui)

// Muda um componente, muda em todo lugar
// Consistência visual garantida
// Fácil de manter`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 2: Full-Stack App */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🚀 Full-Stack - Front-end + Back-end</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Aplicação full-stack com front-end React, 
                back-end Node.js, mobile React Native.
                <br />
                <strong>Problema:</strong> Tipos duplicados, validações diferentes, 
                difícil de sincronizar.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Repositórios separados
// repo-frontend/
// ├── src/types/User.ts
// ├── src/validations/userSchema.ts
// └── src/api/users.ts

// repo-backend/
// ├── src/types/User.ts
// ├── src/validations/userSchema.ts
// └── src/routes/users.ts

// repo-mobile/
// ├── src/types/User.ts
// ├── src/validations/userSchema.ts
// └── src/api/users.ts

// Tipos duplicados, validações diferentes

// ✅ BOM - Monorepo
// packages/shared/
// ├── src/types/User.ts
// ├── src/validations/userSchema.ts
// └── src/constants/api.ts

// apps/frontend/
// ├── src/pages/
// └── package.json (depende de @repo/shared)

// apps/backend/
// ├── src/routes/
// └── package.json (depende de @repo/shared)

// apps/mobile/
// ├── src/screens/
// └── package.json (depende de @repo/shared)

// Tipos compartilhados
// Validações consistentes
// Fácil de sincronizar`}
              </Code>
            </Stack>
          </Paper>

          {/* Example 3: Micro-frontends */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🧩 Micro-frontends - Múltiplas Apps</Title>
            
            <Stack gap="md">
              <Text>
                <strong>Cenário:</strong> Micro-frontends com múltiplas aplicações. 
                Shell, catalog, cart, checkout, profile.
                <br />
                <strong>Problema:</strong> Configurações duplicadas, 
                tooling diferente, difícil de manter.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Repositórios separados
// repo-shell/
// ├── .eslintrc.js
// ├── .prettierrc
// ├── tsconfig.json
// └── package.json

// repo-catalog/
// ├── .eslintrc.js
// ├── .prettierrc
// ├── tsconfig.json
// └── package.json

// repo-cart/
// ├── .eslintrc.js
// ├── .prettierrc
// ├── tsconfig.json
// └── package.json

// Configurações duplicadas, tooling diferente

// ✅ BOM - Monorepo
// packages/config/
// ├── eslint-config/
// ├── prettier-config/
// └── typescript-config/

// apps/shell/
// ├── src/
// └── package.json (usa @repo/config)

// apps/catalog/
// ├── src/
// └── package.json (usa @repo/config)

// apps/cart/
// ├── src/
// └── package.json (usa @repo/config)

// apps/checkout/
// ├── src/
// └── package.json (usa @repo/config)

// apps/profile/
// ├── src/
// └── package.json (usa @repo/config)

// Tooling centralizado
// Configurações consistentes
// Fácil de manter`}
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
          {/* Giant Monorepo */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🐋 Monorepo Gigante</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Você coloca tudo num repositório, 
                vira uma bagunça gigante. Impossível de navegar.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Organize por domínio. 
                Use ferramentas como Nx, Lerna, Turborepo.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Monorepo bagunçado
// repo/
// ├── app1/
// ├── app2/
// ├── app3/
// ├── lib1/
// ├── lib2/
// ├── docs/
// ├── scripts/
// └── ...

// Impossível de navegar

// ✅ BOM - Organizado
// repo/
// ├── apps/
// │   ├── web-app/
// │   ├── mobile-app/
// │   └── admin-panel/
// ├── packages/
// │   ├── ui/
// │   ├── utils/
// │   └── config/
// ├── tools/
// │   ├── eslint-config/
// │   └── typescript-config/
// └── docs/

// Estrutura clara
// Fácil de navegar`}
              </Code>
            </Stack>
          </Paper>

          {/* Circular Dependencies */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🔄 Dependências Circulares</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Pacotes dependendo uns dos outros. 
                Build quebra, deploy falha.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Estrutura hierárquica clara. 
                Use ferramentas que detectam dependências circulares.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Dependências circulares
// packages/ui/package.json
{
  "dependencies": {
    "@repo/utils": "workspace:*"
  }
}

// packages/utils/package.json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}

// Dependência circular!

// ✅ BOM - Estrutura hierárquica
// packages/utils/package.json
{
  "name": "@repo/utils",
  "dependencies": {}
}

// packages/ui/package.json
{
  "name": "@repo/ui",
  "dependencies": {
    "@repo/utils": "workspace:*"
  }
}

// packages/app/package.json
{
  "dependencies": {
    "@repo/ui": "workspace:*",
    "@repo/utils": "workspace:*"
  }
}

// Hierarquia clara
// Sem dependências circulares`}
              </Code>
            </Stack>
          </Paper>

          {/* Build Performance */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🐌 Performance de Build</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Build lento, cache ineficiente, 
                rebuild desnecessário.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use Turborepo, Nx, ou Lerna. 
                Configure cache e build incremental.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Build lento
// package.json
{
  "scripts": {
    "build": "cd apps/web && npm run build && cd ../mobile && npm run build"
  }
}

// Sem cache, rebuild tudo sempre

// ✅ BOM - Build otimizado
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}

// package.json
{
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev"
  }
}

// Cache inteligente
// Build incremental
// Só builda o que mudou`}
              </Code>
            </Stack>
          </Paper>

          {/* Version Management */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">📦 Gestão de Versões</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Versões descoordenadas, 
                dependências quebradas, deploy inconsistente.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> Use ferramentas de versionamento. 
                Lerna, Changesets, ou versionamento manual coordenado.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Versões descoordenadas
// packages/ui/package.json
{
  "name": "@repo/ui",
  "version": "1.2.3"
}

// packages/utils/package.json
{
  "name": "@repo/utils", 
  "version": "2.1.0"
}

// apps/web/package.json
{
  "dependencies": {
    "@repo/ui": "^1.2.3",
    "@repo/utils": "^2.1.0"
  }
}

// Versões descoordenadas

// ✅ BOM - Versionamento coordenado
// lerna.json
{
  "version": "1.2.3",
  "packages": ["packages/*", "apps/*"]
}

// package.json
{
  "scripts": {
    "version": "lerna version",
    "publish": "lerna publish"
  }
}

// Versões coordenadas
// Deploy consistente`}
              </Code>
            </Stack>
          </Paper>

          {/* Team Coordination */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">👥 Coordenação de Times</Title>
            <Stack gap="md">
              <Text>
                <strong>Problema:</strong> Times sem coordenação. 
                Conflitos de merge, mudanças que quebram outros projetos.
              </Text>
              
              <Text>
                <strong>Como evitar:</strong> CI/CD robusto, testes em todos os projetos, 
                code review obrigatório.
              </Text>
              
              <Code block>
{`// ❌ RUIM - Sem coordenação
// Time A muda lib compartilhada
// Não testa em outros projetos
// Quebra build de outros times

// ✅ BOM - Coordenação
// .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run test:all
      - run: npm run build:all
      - run: npm run lint:all

// Testa todos os projetos
// Build todos os projetos
// Lint todos os projetos
// Quebra build se algo falhar`}
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
                  <strong>"Monorepo Tools"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Large Scale JavaScript"</strong> - Various Authors
                </List.Item>
                <List.Item>
                  <strong>"Monorepo Patterns"</strong> - Various Authors
                </List.Item>
              </List>
              
              <Text>
                <strong>Artigos & Blogs:</strong>
              </Text>
              <List>
                <List.Item>
                  <a href="https://monorepo.tools/" target="_blank">
                    Monorepo Tools - Site oficial
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://nx.dev/" target="_blank">
                    Nx - Monorepo build system
                  </a>
                </List.Item>
                <List.Item>
                  <a href="https://turborepo.com/" target="_blank">
                    Turborepo - High-performance build system
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
                <Title order={4} mb="sm">Google</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Milhares de projetos, 
                  código duplicado, tooling inconsistente.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Monorepo gigante com Bazel. 
                  Compartilhamento de código, build otimizado.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Desenvolvimento mais eficiente, 
                  menos duplicação, tooling centralizado.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Facebook</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos produtos, 
                  código compartilhado, refatoração difícil.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Monorepo com Mercurial. 
                  Compartilhamento de componentes, refatoração segura.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Refatoração mais segura, 
                  desenvolvimento mais rápido.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Microsoft</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplos produtos, 
                  tooling diferente, inconsistência.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Monorepo com Rush. 
                  Tooling centralizado, dependências gerenciadas.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Consistência entre produtos, 
                  desenvolvimento mais eficiente.
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="sm">Uber</Title>
                <Text size="sm" mb="sm">
                  <strong>Problema:</strong> Múltiplas aplicações, 
                  código duplicado, deploy complexo.
                </Text>
                <Text size="sm" mb="sm">
                  <strong>Solução:</strong> Monorepo com Bazel. 
                  Compartilhamento de código, deploy otimizado.
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Resultado:</strong> Deploy mais rápido, 
                  menos duplicação de código.
                </Text>
              </Card>
            </Stack>
          </Paper>

          {/* Tools & Libraries */}
          <Paper withBorder p="xl" radius="md">
            <Title order={3} mb="md">🛠️ Ferramentas & Bibliotecas</Title>
            <Stack gap="md">
              <Text>
                <strong>Ferramentas que facilitam Monorepo:</strong>
              </Text>
              <List>
                <List.Item>
                  <strong>Nx</strong> - Build system para monorepos
                </List.Item>
                <List.Item>
                  <strong>Turborepo</strong> - High-performance build system
                </List.Item>
                <List.Item>
                  <strong>Lerna</strong> - Tooling para monorepos
                </List.Item>
                <List.Item>
                  <strong>Rush</strong> - Microsoft's monorepo solution
                </List.Item>
                <List.Item>
                  <strong>Bazel</strong> - Google's build system
                </List.Item>
                <List.Item>
                  <strong>Yarn Workspaces</strong> - Package manager workspaces
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
              <Text c="dimmed">Monorepo na prática</Text>
            </div>
          </Group>
          
          <Text>
            Monorepo é sobre uma coisa só: <strong>ter tudo num lugar só</strong>. 
            Compartilhamento de código, tooling centralizado, refatoração segura. 
            Use quando tem múltiplos projetos relacionados e quer eficiência.
          </Text>
          
          <Text size="sm" c="dimmed">
            <strong>Lembre-se:</strong> Não é sobre colocar tudo num repositório. 
            É sobre organizar e compartilhar quando faz sentido. E você não enlouquece.
            <br />
            <strong>Dica:</strong> Comece pequeno, use ferramentas adequadas, 
            evolua conforme necessário.
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

Monorepo.metadata = {
  title: 'Monorepo',
  description: 'Um repositório, múltiplos projetos. Compartilhamento de código e tooling centralizado.'
};

export default Monorepo;
