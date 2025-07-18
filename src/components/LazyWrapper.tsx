import React, { Suspense } from 'react';
import { SimpleLoader } from './ArchitectureLoader.tsx';

// Componente de loading para lazy components
export const LoadingComponent = () => <SimpleLoader />;

// Wrapper para componentes lazy com Suspense
export function LazyComponentWrapper({
  component: LazyComponent,
}: {
  component: React.ComponentType;
}) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <LazyComponent />
    </Suspense>
  );
}
