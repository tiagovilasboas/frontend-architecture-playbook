import React from 'react';
import { Box, Stack, Text, Group, ThemeIcon } from '@mantine/core';
import {
  IconCode,
  IconStack,
  IconLayersSubtract,
  IconCheck,
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';

interface ArchitectureLoaderProps {
  message?: string;
  showProgress?: boolean;
}

export function ArchitectureLoader({
  message = 'Carregando arquiteturas...',
  showProgress = true,
}: ArchitectureLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: IconCode, text: 'Inicializando', color: 'blue' },
    { icon: IconStack, text: 'Carregando padrões', color: 'green' },
    {
      icon: IconLayersSubtract,
      text: 'Montando arquiteturas',
      color: 'orange',
    },
    { icon: IconCheck, text: 'Pronto!', color: 'teal' },
  ];

  useEffect(() => {
    if (!showProgress) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [showProgress, steps.length]);

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        padding: '2rem',
        background: 'var(--mantine-color-body)',
      }}
    >
      {/* Logo animado */}
      <Box
        style={{
          position: 'relative',
          marginBottom: '2rem',
        }}
      >
        <Group gap="xs" style={{ marginBottom: '1rem' }}>
          <ThemeIcon
            size="xl"
            variant="light"
            color="blue"
            style={{
              animation: 'pulse 2s ease-in-out infinite',
            }}
          >
            <IconCode size={24} />
          </ThemeIcon>
          <ThemeIcon
            size="xl"
            variant="light"
            color="green"
            style={{
              animation: 'pulse 2s ease-in-out infinite 0.5s',
            }}
          >
            <IconStack size={24} />
          </ThemeIcon>
          <ThemeIcon
            size="xl"
            variant="light"
            color="orange"
            style={{
              animation: 'pulse 2s ease-in-out infinite 1s',
            }}
          >
            <IconLayersSubtract size={24} />
          </ThemeIcon>
        </Group>
      </Box>

      {/* Título */}
      <Text
        size="xl"
        fw={600}
        ta="center"
        mb="md"
        style={{
          background:
            'linear-gradient(135deg, var(--mantine-color-blue-6), var(--mantine-color-green-6))',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Frontend Architecture Playbook
      </Text>

      {/* Mensagem */}
      <Text size="lg" c="dimmed" ta="center" mb="xl">
        {message}
      </Text>

      {/* Steps */}
      <Stack gap="md" mb="xl" style={{ width: '100%', maxWidth: '400px' }}>
        {steps.map((step, index) => (
          <Group
            key={index}
            gap="sm"
            style={{
              opacity: index <= currentStep ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}
          >
            <ThemeIcon
              size="sm"
              variant="light"
              color={index <= currentStep ? step.color : 'gray'}
              style={{
                transition: 'all 0.3s ease',
              }}
            >
              <step.icon size={16} />
            </ThemeIcon>
            <Text
              size="sm"
              c={index <= currentStep ? 'inherit' : 'dimmed'}
              style={{
                transition: 'color 0.3s ease',
              }}
            >
              {step.text}
            </Text>
          </Group>
        ))}
      </Stack>

      {/* Progress bar */}
      {showProgress && (
        <Box style={{ width: '100%', maxWidth: '400px' }}>
          <Box
            style={{
              width: '100%',
              height: '4px',
              background: 'var(--mantine-color-gray-2)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                width: `${progress}%`,
                height: '100%',
                background:
                  'linear-gradient(90deg, var(--mantine-color-blue-6), var(--mantine-color-green-6))',
                borderRadius: '2px',
                transition: 'width 0.3s ease',
              }}
            />
          </Box>
          <Text size="xs" c="dimmed" ta="center" mt="xs">
            {Math.round(progress)}%
          </Text>
        </Box>
      )}

      {/* Dica */}
      <Text
        size="xs"
        c="dimmed"
        ta="center"
        mt="xl"
        style={{
          maxWidth: '300px',
          lineHeight: 1.4,
        }}
      >
        💡 Dica: Use lazy loading e code splitting para melhorar a performance
        em produção
      </Text>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </Box>
  );
}

// Componente de loading simples para fallback
export function SimpleLoader() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <Stack align="center" gap="md">
        <ThemeIcon
          size="lg"
          variant="light"
          color="blue"
          style={{
            animation: 'spin 1s linear infinite',
          }}
        >
          <IconCode size={20} />
        </ThemeIcon>
        <Text size="sm" c="dimmed">
          Carregando...
        </Text>
      </Stack>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
}
