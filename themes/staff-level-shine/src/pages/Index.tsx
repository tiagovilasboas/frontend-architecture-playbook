import PlaybookHero from '@/components/playbook/PlaybookHero';
import TableOfContents from '@/components/playbook/TableOfContents';
import PlaybookSection from '@/components/playbook/PlaybookSection';
import PrincipleCard from '@/components/playbook/PrincipleCard';
import CodeBlock from '@/components/playbook/CodeBlock';
import DiagramBlock from '@/components/playbook/DiagramBlock';
import {
  Layers,
  GitBranch,
  Shield,
  Zap,
  Box,
  TestTube,
  Gauge,
  Eye,
  FolderTree,
  Database,
  Paintbrush,
  Rocket,
  AlertTriangle,
  BarChart3,
  Monitor,
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlaybookHero />
      <TableOfContents />

      {/* 01 - Princípios */}
      <PlaybookSection
        number="01"
        title="Princípios Arquiteturais"
        description="Fundamentos que guiam todas as decisões técnicas. Cada escolha deve ser rastreável a um destes princípios."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PrincipleCard
            icon={Layers}
            title="Separação de Concerns"
            description="Camadas bem definidas com responsabilidades claras e contratos explícitos entre elas."
            items={[
              'UI pura (apresentação)',
              'Lógica de negócio (hooks/services)',
              'Acesso a dados (API layer)',
              'Estado global (stores)',
            ]}
          />
          <PrincipleCard
            icon={GitBranch}
            title="Composição sobre Herança"
            description="Componentes compostos, hooks customizados e padrões de injeção como estratégia principal."
            items={[
              'Compound Components',
              'Render Props quando necessário',
              'Custom Hooks para lógica',
              'HOCs apenas como último recurso',
            ]}
          />
          <PrincipleCard
            icon={Shield}
            title="Type Safety End-to-End"
            description="TypeScript estrito do backend ao componente. Sem 'any', sem 'as' desnecessário."
            items={[
              'strict: true no tsconfig',
              'Zod para validação runtime',
              'Tipos gerados da API',
              'Branded types para IDs',
            ]}
          />
          <PrincipleCard
            icon={Zap}
            title="Performance by Default"
            description="Performance não é otimização posterior — é decisão arquitetural desde o dia zero."
            items={[
              'Code splitting por rota',
              'Lazy loading de componentes',
              'Virtualização de listas',
              'Bundle analysis no CI',
            ]}
          />
          <PrincipleCard
            icon={Box}
            title="Boundaries Explícitos"
            description="Módulos com APIs públicas claras. O que não é exportado, não existe."
            items={[
              'Barrel files (index.ts)',
              'Encapsulamento de módulos',
              'Dependency inversion',
              'Feature flags como boundary',
            ]}
          />
          <PrincipleCard
            icon={TestTube}
            title="Testabilidade Intrínseca"
            description="A arquitetura facilita testes. Se é difícil testar, a arquitetura está errada."
            items={[
              'Dependency injection',
              'Pure functions first',
              'Hooks testáveis isolados',
              'MSW para mocks de API',
            ]}
          />
        </div>
      </PlaybookSection>

      {/* 02 - Estrutura */}
      <PlaybookSection
        number="02"
        title="Estrutura de Projeto"
        description="Feature-based architecture com boundaries claros. Escalável de 5 a 50 desenvolvedores."
      >
        <CodeBlock
          title="Estrutura de diretórios"
          code={`src/
├── app/                    # App shell, providers, router
│   ├── providers/          # React context providers
│   ├── routes/             # Route definitions
│   └── App.tsx
├── features/               # Feature modules (bounded contexts)
│   ├── auth/
│   │   ├── api/            # API calls & types
│   │   ├── components/     # Feature-specific UI
│   │   ├── hooks/          # Feature-specific hooks
│   │   ├── stores/         # Feature-specific state
│   │   ├── utils/          # Feature-specific helpers
│   │   ├── __tests__/      # Feature tests
│   │   └── index.ts        # Public API (barrel file)
│   ├── dashboard/
│   └── settings/
├── shared/                 # Shared kernel
│   ├── components/         # Design system components
│   ├── hooks/              # Generic reusable hooks
│   ├── lib/                # Utilities, helpers
│   ├── types/              # Global type definitions
│   └── api/                # API client, interceptors
├── assets/                 # Static assets
└── styles/                 # Global styles, tokens`}
        />

        <DiagramBlock title="Dependency Flow">
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-sm">
            <div className="rounded border border-border bg-secondary px-4 py-2 text-foreground">
              Pages
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="rounded border border-glow bg-secondary px-4 py-2 text-primary">
              Features
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="rounded border border-border bg-secondary px-4 py-2 text-foreground">
              Shared
            </div>
            <span className="text-muted-foreground">→</span>
            <div className="rounded border border-border bg-secondary px-4 py-2 text-muted-foreground">
              Libs
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
            Dependências sempre fluem para baixo. Features nunca importam de
            outras features.
          </p>
        </DiagramBlock>

        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 flex items-center gap-2 font-bold">
            <AlertTriangle className="h-4 w-4 text-primary" />
            Regras de Ouro
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{' '}
              Feature A nunca importa de Feature B — extraia para shared/
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{' '}
              Barrel files definem a API pública. Imports internos são
              proibidos.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{' '}
              Máximo 1 nível de nesting em features. Se precisa de sub-features,
              é uma nova feature.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{' '}
              ESLint boundaries plugin para enforcement automático.
            </li>
          </ul>
        </div>
      </PlaybookSection>

      {/* 03 - State Management */}
      <PlaybookSection
        number="03"
        title="Gerenciamento de Estado"
        description="Escolha a ferramenta certa para cada tipo de estado. Over-engineering de estado é o erro #1 em projetos front-end."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Tipo
                </th>
                <th className="py-3 pr-4 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Ferramenta
                </th>
                <th className="py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Exemplo
                </th>
              </tr>
            </thead>
            <tbody className="text-secondary-foreground">
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium text-foreground">
                  Server State
                </td>
                <td className="py-3 pr-4">
                  <code className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-primary">
                    TanStack Query
                  </code>
                </td>
                <td className="py-3 text-muted-foreground">
                  Dados da API, cache, revalidação
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium text-foreground">
                  Client Global
                </td>
                <td className="py-3 pr-4">
                  <code className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-primary">
                    Zustand
                  </code>
                </td>
                <td className="py-3 text-muted-foreground">
                  Theme, sidebar, user preferences
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium text-foreground">
                  Form State
                </td>
                <td className="py-3 pr-4">
                  <code className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-primary">
                    React Hook Form + Zod
                  </code>
                </td>
                <td className="py-3 text-muted-foreground">
                  Validação, dirty tracking, submit
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 font-medium text-foreground">
                  URL State
                </td>
                <td className="py-3 pr-4">
                  <code className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-primary">
                    nuqs / searchParams
                  </code>
                </td>
                <td className="py-3 text-muted-foreground">
                  Filtros, paginação, tabs ativas
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">
                  UI Local
                </td>
                <td className="py-3 pr-4">
                  <code className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-primary">
                    useState / useReducer
                  </code>
                </td>
                <td className="py-3 text-muted-foreground">
                  Modals, dropdowns, toggles
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          title="Exemplo: Custom hook com TanStack Query"
          code={`// features/dashboard/hooks/useMetrics.ts
export function useMetrics(period: DateRange) {
  return useQuery({
    queryKey: ['metrics', period],
    queryFn: () => metricsApi.fetch(period),
    staleTime: 5 * 60 * 1000,
    select: (data) => transformMetrics(data),
    placeholderData: keepPreviousData,
  });
}

// features/dashboard/hooks/useUpdateMetric.ts  
export function useUpdateMetric() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: metricsApi.update,
    onMutate: async (updated) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['metrics'] });
      const previous = queryClient.getQueryData(['metrics']);
      queryClient.setQueryData(['metrics'], (old) => 
        applyOptimisticUpdate(old, updated)
      );
      return { previous };
    },
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(['metrics'], context?.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['metrics'] });
    },
  });
}`}
        />
      </PlaybookSection>

      {/* 04 - Design System */}
      <PlaybookSection
        number="04"
        title="Design System & Tokens"
        description="Tokens como contrato entre design e engenharia. Um sistema que escala sem perder consistência."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <PrincipleCard
            icon={Paintbrush}
            title="Design Tokens"
            description="CSS custom properties como fonte única da verdade para cores, espaçamentos e tipografia."
            items={[
              'Semantic tokens (--color-text-primary)',
              'Component tokens (--button-bg)',
              'Nunca hardcode valores',
              'Suporte a theming via tokens',
            ]}
          />
          <PrincipleCard
            icon={Box}
            title="Component API Design"
            description="APIs consistentes, previsíveis e compostas. Variantes via CVA."
            items={[
              'Props tipadas com discriminated unions',
              'Variants com class-variance-authority',
              'Slots pattern para customização',
              'Forwarded refs sempre',
            ]}
          />
        </div>

        <CodeBlock
          title="Exemplo: Button com CVA"
          code={`import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        ghost: "hover:bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-border hover:bg-secondary",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);`}
        />
      </PlaybookSection>

      {/* 05 - Performance */}
      <PlaybookSection
        number="05"
        title="Performance & Otimização"
        description="Budgets, métricas e estratégias concretas. Performance é feature, não afterthought."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <Gauge className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="font-mono text-2xl font-bold text-foreground">
              {'< 200kb'}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              JS Bundle (gzipped)
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <Monitor className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="font-mono text-2xl font-bold text-foreground">
              {'< 2.5s'}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">LCP Target</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <BarChart3 className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="font-mono text-2xl font-bold text-foreground">
              {'< 100ms'}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">INP Target</div>
          </div>
        </div>

        <CodeBlock
          title="Checklist de Performance"
          code={`✓ Code splitting por rota (React.lazy + Suspense)
✓ Tree shaking — imports nomeados, nunca import *
✓ Virtualização para listas > 100 items (TanStack Virtual)
✓ Image optimization (WebP/AVIF, srcset, lazy loading)
✓ Prefetch de rotas prováveis (router prefetch)
✓ Web Workers para computações pesadas
✓ Service Worker para cache de assets estáticos
✓ Bundle analyzer integrado no CI (tamanho como gate)
✓ React.memo() apenas com profiling (nunca preventivo)
✓ useDeferredValue / useTransition para UI responsiva`}
        />
      </PlaybookSection>

      {/* 06 - Testing */}
      <PlaybookSection
        number="06"
        title="Testing Strategy"
        description="A pirâmide de testes adaptada para front-end moderno. Confiança sem fragilidade."
      >
        <DiagramBlock title="Testing Trophy">
          <div className="flex flex-col items-center gap-2 font-mono text-sm">
            <div className="rounded border border-border bg-secondary px-6 py-2 text-muted-foreground">
              E2E (Playwright) — 10%
            </div>
            <div className="rounded border border-glow bg-secondary px-10 py-2 text-primary">
              Integration (Testing Library) — 50%
            </div>
            <div className="rounded border border-border bg-secondary px-8 py-2 text-foreground">
              Unit (Vitest) — 30%
            </div>
            <div className="rounded border border-border bg-secondary px-4 py-2 text-muted-foreground">
              Static (TypeScript + ESLint) — 10%
            </div>
          </div>
        </DiagramBlock>

        <CodeBlock
          title="Exemplo: Integration Test"
          code={`// features/auth/__tests__/LoginForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from '@/test/msw/server';
import { http, HttpResponse } from 'msw';
import { LoginForm } from '../components/LoginForm';
import { TestProviders } from '@/test/utils';

describe('LoginForm', () => {
  it('submits credentials and redirects on success', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    
    render(
      <TestProviders>
        <LoginForm onSuccess={onSuccess} />
      </TestProviders>
    );

    await user.type(screen.getByLabelText(/email/i), 'user@test.com');
    await user.type(screen.getByLabelText(/senha/i), 'password123');
    await user.click(screen.getByRole('button', { name: /entrar/i }));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith({ 
        user: expect.objectContaining({ email: 'user@test.com' }) 
      });
    });
  });

  it('shows validation errors for empty fields', async () => {
    const user = userEvent.setup();
    render(<TestProviders><LoginForm /></TestProviders>);
    
    await user.click(screen.getByRole('button', { name: /entrar/i }));
    
    expect(screen.getByText(/email é obrigatório/i)).toBeInTheDocument();
  });
});`}
        />
      </PlaybookSection>

      {/* 07 - CI/CD */}
      <PlaybookSection
        number="07"
        title="CI/CD & Deploy"
        description="Pipeline automatizado que garante qualidade em cada PR. Zero deploy manual."
      >
        <CodeBlock
          title="Pipeline stages"
          code={`# .github/workflows/ci.yml
Pipeline:
  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐
  │   Install    │ →  │    Lint +     │ →  │   Unit +     │
  │ Dependencies │    │  Type Check  │    │ Integration  │
  └─────────────┘    └──────────────┘    └─────────────┘
         │                                       │
         ▼                                       ▼
  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐
  │   Bundle     │ →  │   Preview    │ →  │    E2E      │
  │  Analysis    │    │   Deploy     │    │   Tests     │
  └─────────────┘    └──────────────┘    └─────────────┘
         │                                       │
         ▼                                       ▼
  ┌─────────────────────────────────────────────────┐
  │              Production Deploy                   │
  │     (main branch only, após aprovação)          │
  └─────────────────────────────────────────────────┘

Gates automáticos:
  • Bundle size delta > 10kb → review obrigatório
  • Coverage drop > 2% → block merge  
  • Lighthouse score < 90 → warning
  • Type errors → block merge
  • Lint errors → block merge`}
        />
      </PlaybookSection>

      {/* 08 - Observabilidade */}
      <PlaybookSection
        number="08"
        title="Observabilidade"
        description="Não basta funcionar — é preciso saber COMO está funcionando em produção."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PrincipleCard
            icon={Eye}
            title="Error Tracking"
            description="Captura automática de erros com context e source maps."
            items={[
              'Sentry / Datadog RUM',
              'Error Boundaries por feature',
              'Breadcrumbs de navegação',
              'Custom tags por contexto',
            ]}
          />
          <PrincipleCard
            icon={BarChart3}
            title="Web Vitals"
            description="Core Web Vitals monitorados continuamente em produção."
            items={[
              'LCP, FID/INP, CLS',
              'Real User Monitoring (RUM)',
              'Alertas em regressões',
              'Dashboards por rota',
            ]}
          />
          <PrincipleCard
            icon={Database}
            title="Analytics Estruturado"
            description="Eventos tipados com schema validation. Nada de strings soltas."
            items={[
              'Typed event catalog',
              'Schema validation (Zod)',
              'Automatic page tracking',
              'Feature usage metrics',
            ]}
          />
        </div>

        <CodeBlock
          title="Exemplo: Error Boundary com reporting"
          code={`// shared/components/ErrorBoundary.tsx
class FeatureErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    errorReporter.captureException(error, {
      feature: this.props.feature,
      componentStack: info.componentStack,
      metadata: this.props.metadata,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <DefaultErrorFallback />;
    }
    return this.props.children;
  }
}

// Uso:
<FeatureErrorBoundary feature="dashboard" fallback={<DashboardError />}>
  <DashboardContent />
</FeatureErrorBoundary>`}
        />
      </PlaybookSection>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <span className="font-mono text-xs text-muted-foreground">
                Front-End Architecture Playbook v1.0
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-muted-foreground">
                Staff Engineer Reference
              </span>
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                2026
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
