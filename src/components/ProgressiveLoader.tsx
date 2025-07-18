import React, { useState, useEffect } from 'react';
import { Box, Stack, Text, Group, ThemeIcon, Progress } from '@mantine/core';
import {
  IconCode,
  IconStack,
  IconBook,
  IconCheck,
  IconSparkles,
} from '@tabler/icons-react';
import { useMobileDetector } from '../hooks/useMobileDetector.ts';

interface ProgressiveLoaderProps {
  type?: 'architecture' | 'pattern' | 'guide' | 'technique';
  message?: string;
}

const loadingStages = {
  architecture: [
    { icon: IconCode, text: 'Carregando conceitos', color: 'blue' },
    { icon: IconStack, text: 'Montando camadas', color: 'green' },
    { icon: IconBook, text: 'Preparando exemplos', color: 'orange' },
    { icon: IconSparkles, text: 'Arquitetura pronta!', color: 'teal' },
  ],
  pattern: [
    { icon: IconCode, text: 'Inicializando padrão', color: 'blue' },
    { icon: IconStack, text: 'Carregando implementação', color: 'green' },
    { icon: IconBook, text: 'Montando exemplos', color: 'orange' },
    { icon: IconCheck, text: 'Padrão carregado!', color: 'teal' },
  ],
  guide: [
    { icon: IconBook, text: 'Abrindo guia', color: 'blue' },
    { icon: IconCode, text: 'Carregando conteúdo', color: 'green' },
    { icon: IconStack, text: 'Preparando exemplos', color: 'orange' },
    { icon: IconCheck, text: 'Guia pronto!', color: 'teal' },
  ],
  technique: [
    { icon: IconSparkles, text: 'Inicializando técnica', color: 'blue' },
    { icon: IconCode, text: 'Carregando detalhes', color: 'green' },
    { icon: IconBook, text: 'Preparando casos de uso', color: 'orange' },
    { icon: IconCheck, text: 'Técnica carregada!', color: 'teal' },
  ],
};

export function ProgressiveLoader({
  type = 'architecture',
  message,
}: ProgressiveLoaderProps) {
  const { isMobile } = useMobileDetector();
  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const stages = loadingStages[type];

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setCurrentStage(prev => {
        if (prev >= stages.length - 1) {
          clearInterval(stageInterval);
          return stages.length - 1;
        }
        return prev + 1;
      });
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 300);

    return () => {
      clearInterval(stageInterval);
      clearInterval(progressInterval);
    };
  }, [stages.length]);

  if (isMobile) {
    return (
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
          padding: '1.5rem',
        }}
      >
        <Stack align="center" gap="lg">
          <ThemeIcon
            size="xl"
            variant="light"
            color="blue"
            style={{
              animation: 'bounce 1.5s ease-in-out infinite',
            }}
          >
            <IconCode size={24} />
          </ThemeIcon>

          <Text size="lg" fw={500} ta="center">
            {message || `Carregando ${type}...`}
          </Text>

          <Progress
            value={progress}
            size="sm"
            style={{ width: '200px' }}
            color="blue"
          />

          <Text size="xs" c="dimmed" ta="center">
            {stages[currentStage]?.text}
          </Text>
        </Stack>

        <style>
          {`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-8px);
              }
              60% {
                transform: translateY(-4px);
              }
            }
          `}
        </style>
      </Box>
    );
  }

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        padding: '2rem',
      }}
    >
      {/* Header */}
      <Stack align="center" gap="md" mb="xl">
        <Group gap="xs">
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
            <IconBook size={24} />
          </ThemeIcon>
        </Group>

        <Text
          size="xl"
          fw={600}
          ta="center"
          style={{
            background:
              'linear-gradient(135deg, var(--mantine-color-blue-6), var(--mantine-color-green-6))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {message || `Carregando ${type}...`}
        </Text>
      </Stack>

      {/* Stages */}
      <Stack gap="md" mb="xl" style={{ width: '100%', maxWidth: '400px' }}>
        {stages.map((stage, index) => (
          <Group
            key={index}
            gap="sm"
            style={{
              opacity: index <= currentStage ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}
          >
            <ThemeIcon
              size="sm"
              variant="light"
              color={index <= currentStage ? stage.color : 'gray'}
              style={{
                transition: 'all 0.3s ease',
              }}
            >
              <stage.icon size={16} />
            </ThemeIcon>
            <Text
              size="sm"
              c={index <= currentStage ? 'inherit' : 'dimmed'}
              style={{
                transition: 'color 0.3s ease',
              }}
            >
              {stage.text}
            </Text>
          </Group>
        ))}
      </Stack>

      {/* Progress */}
      <Box style={{ width: '100%', maxWidth: '400px' }}>
        <Progress
          value={progress}
          size="md"
          color="blue"
          style={{ marginBottom: '0.5rem' }}
        />
        <Text size="xs" c="dimmed" ta="center">
          {Math.round(progress)}% completo
        </Text>
      </Box>

      {/* Tip */}
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
        💡 Dica: Use lazy loading para melhorar a performance em dispositivos
        móveis
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
