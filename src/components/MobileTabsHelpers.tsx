import React from 'react';
import {
  IconCode,
  IconBook,
  IconBulb,
  IconAlertTriangle,
  IconSettings,
  IconRocket,
  IconUsers,
} from '@tabler/icons-react';

export interface TabItem {
  value: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// Predefined tab configurations for common patterns
export const createArchitectureTabs = (
  overview: React.ReactNode,
  implementation: React.ReactNode,
  examples: React.ReactNode,
  pitfalls: React.ReactNode,
  references: React.ReactNode
): TabItem[] => [
  {
    value: 'overview',
    label: 'Visão Geral',
    icon: <IconBook size={16} />,
    content: overview,
  },
  {
    value: 'implementation',
    label: 'Implementação',
    icon: <IconCode size={16} />,
    content: implementation,
  },
  {
    value: 'examples',
    label: 'Exemplos',
    icon: <IconBulb size={16} />,
    content: examples,
  },
  {
    value: 'pitfalls',
    label: 'Armadilhas',
    icon: <IconAlertTriangle size={16} />,
    content: pitfalls,
  },
  {
    value: 'references',
    label: 'Referências',
    icon: <IconRocket size={16} />,
    content: references,
  },
];

export const createPatternTabs = (
  overview: React.ReactNode,
  examples: React.ReactNode,
  bestPractices: React.ReactNode,
  references: React.ReactNode
): TabItem[] => [
  {
    value: 'overview',
    label: 'Visão Geral',
    icon: <IconBook size={16} />,
    content: overview,
  },
  {
    value: 'examples',
    label: 'Exemplos',
    icon: <IconBulb size={16} />,
    content: examples,
  },
  {
    value: 'best-practices',
    label: 'Boas Práticas',
    icon: <IconSettings size={16} />,
    content: bestPractices,
  },
  {
    value: 'references',
    label: 'Referências',
    icon: <IconRocket size={16} />,
    content: references,
  },
];

export const createGuideTabs = (
  overview: React.ReactNode,
  steps: React.ReactNode,
  examples: React.ReactNode,
  tips: React.ReactNode
): TabItem[] => [
  {
    value: 'overview',
    label: 'Visão Geral',
    icon: <IconBook size={16} />,
    content: overview,
  },
  {
    value: 'steps',
    label: 'Passos',
    icon: <IconUsers size={16} />,
    content: steps,
  },
  {
    value: 'examples',
    label: 'Exemplos',
    icon: <IconBulb size={16} />,
    content: examples,
  },
  {
    value: 'tips',
    label: 'Dicas',
    icon: <IconRocket size={16} />,
    content: tips,
  },
];
