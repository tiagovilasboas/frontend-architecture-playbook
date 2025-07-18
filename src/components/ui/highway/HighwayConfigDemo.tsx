import { useState } from 'react';
import { Stack, Select, Text, Paper, Title, Group, Badge } from '@mantine/core';
import { IconSettings, IconCar, IconRoad } from '@tabler/icons-react';
import HighwayAnimationCanvas from './HighwayAnimationCanvas';
import {
  SIMPLE_HIGHWAY_CONFIG,
  SMALL_CARS_TOP_CONFIG,
  LARGE_CARS_BOTTOM_CONFIG,
  HIGH_POSITION_CONFIG,
  HIGH_TRAFFIC_CONFIG,
  WIDE_LANES_CONFIG,
  SINGLE_LANE_CONFIG,
  THREE_LANE_CONFIG,
} from './highway-config-examples';
import { DEFAULT_HIGHWAY_CONFIG, type HighwayConfig } from './highway-config';

const CONFIG_OPTIONS = [
  { value: 'default', label: 'Padrão', config: DEFAULT_HIGHWAY_CONFIG },
  { value: 'simple', label: 'Simplificada', config: SIMPLE_HIGHWAY_CONFIG },
  {
    value: 'small-cars',
    label: 'Carros Pequenos (Cima)',
    config: SMALL_CARS_TOP_CONFIG,
  },
  {
    value: 'large-cars',
    label: 'Carros Grandes (Baixo)',
    config: LARGE_CARS_BOTTOM_CONFIG,
  },
  {
    value: 'high-position',
    label: 'Posição Alta',
    config: HIGH_POSITION_CONFIG,
  },
  {
    value: 'high-traffic',
    label: 'Trânsito Intenso',
    config: HIGH_TRAFFIC_CONFIG,
  },
  { value: 'wide-lanes', label: 'Faixas Largas', config: WIDE_LANES_CONFIG },
  { value: 'single-lane', label: 'Uma Faixa', config: SINGLE_LANE_CONFIG },
  { value: 'three-lane', label: 'Três Faixas', config: THREE_LANE_CONFIG },
];

export default function HighwayConfigDemo() {
  const [selectedConfig, setSelectedConfig] = useState('simple');

  const currentConfig =
    CONFIG_OPTIONS.find(opt => opt.value === selectedConfig)?.config ||
    SIMPLE_HIGHWAY_CONFIG;

  const getConfigInfo = (config: HighwayConfig) => {
    const totalCars = config.lanes.reduce(
      (total: number, lane) =>
        total +
        lane.sublanes.reduce(
          (laneTotal: number, sublane) => laneTotal + sublane.numCars,
          0
        ),
      0
    );

    const totalLanes = config.lanes.reduce(
      (total: number, lane) => total + lane.sublanes.length,
      0
    );

    const avgSpeed =
      config.lanes.reduce(
        (total: number, lane) =>
          total +
          lane.sublanes.reduce(
            (laneTotal: number, sublane) =>
              laneTotal + (sublane.maxSpeed + sublane.minSpeed) / 2,
            0
          ),
        0
      ) / totalLanes;

    return { totalCars, totalLanes, avgSpeed: avgSpeed.toFixed(1) };
  };

  const info = getConfigInfo(currentConfig);

  return (
    <Paper withBorder p="xl">
      <Stack gap="lg">
        <Group>
          <IconSettings size={24} />
          <Title order={3}>Configuração da Rodovia</Title>
        </Group>

        <Group>
          <Select
            label="Tipo de Configuração"
            value={selectedConfig}
            onChange={value => setSelectedConfig(value || 'simple')}
            data={CONFIG_OPTIONS.map(opt => ({
              value: opt.value,
              label: opt.label,
            }))}
            w={300}
          />

          <Group gap="xs">
            <Badge variant="light" leftSection={<IconCar size={12} />}>
              {info.totalCars} carros
            </Badge>
            <Badge variant="light" leftSection={<IconRoad size={12} />}>
              {info.totalLanes} faixas
            </Badge>
            <Badge variant="light">Vel. média: {info.avgSpeed}</Badge>
          </Group>
        </Group>

        <Text c="dimmed" size="sm">
          Teste diferentes configurações de rodovia para ver como a abstração
          permite customizar facilmente posições, escalas e comportamentos dos
          veículos.
        </Text>

        <Paper withBorder p="md" style={{ background: 'transparent' }}>
          <HighwayAnimationCanvas config={currentConfig} />
        </Paper>

        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Configuração Atual:
          </Text>
          <Text size="xs" c="dimmed" style={{ fontFamily: 'monospace' }}>
            {JSON.stringify(
              {
                lanes: currentConfig.lanes.map(lane => ({
                  id: lane.id,
                  position: lane.position,
                  sublanes: lane.sublanes.map(s => ({
                    id: s.id,
                    numCars: s.numCars,
                    maxSpeed: s.maxSpeed,
                  })),
                })),
              },
              null,
              2
            )}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  );
}
