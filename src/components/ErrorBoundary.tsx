import React, { Component, type ReactNode } from 'react';
import { Box, Button, Stack, Text, Title } from '@mantine/core';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/** Catches React render errors and shows a fallback UI instead of a blank screen. */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Box
          p="xl"
          style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}
        >
          <Stack gap="md" maw={480}>
            <Title order={3}>Algo deu errado</Title>
            <Text size="sm" c="dimmed">
              A página encontrou um erro. Tente recarregar ou voltar ao início.
            </Text>
            <Button variant="light" onClick={this.handleRetry}>
              Tentar novamente
            </Button>
            <Button variant="subtle" component="a" href="/">
              Voltar ao início
            </Button>
          </Stack>
        </Box>
      );
    }

    return this.props.children;
  }
}
