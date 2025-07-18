import React from 'react';
import { Box, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconCode } from '@tabler/icons-react';

interface MobileLoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function MobileLoader({
  message = 'Carregando...',
  size = 'md',
}: MobileLoaderProps) {
  const iconSize = size === 'sm' ? 16 : size === 'md' ? 20 : 24;
  const textSize = size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md';

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: size === 'sm' ? '120px' : size === 'md' ? '200px' : '300px',
        padding: size === 'sm' ? '1rem' : '2rem',
      }}
    >
      <Stack align="center" gap="md">
        <ThemeIcon
          size={size === 'sm' ? 'md' : size === 'md' ? 'lg' : 'xl'}
          variant="light"
          color="blue"
          style={{
            animation: 'bounce 1.5s ease-in-out infinite',
          }}
        >
          <IconCode size={iconSize} />
        </ThemeIcon>
        <Text size={textSize} c="dimmed" ta="center">
          {message}
        </Text>
      </Stack>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </Box>
  );
}

// Componente de loading ultra-leve para componentes pequenos
export function TinyLoader() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <ThemeIcon
        size="sm"
        variant="light"
        color="blue"
        style={{
          animation: 'pulse 1s ease-in-out infinite',
        }}
      >
        <IconCode size={12} />
      </ThemeIcon>

      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </Box>
  );
}
