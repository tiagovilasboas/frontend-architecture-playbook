// Configuração das faixas da rodovia
export interface LaneConfig {
  id: string;
  name: string;
  direction: 'up' | 'down';
  sublanes: SubLaneConfig[];
  color: string;
  position: LanePositionConfig; // Nova configuração de posição
}

// Configuração de posição da faixa
export interface LanePositionConfig {
  yOffset: number; // Deslocamento Y da faixa
  height: number; // Altura da faixa
  vehicleScale: number; // Escala dos veículos (1.0 = tamanho normal)
  vehicleYOffset: number; // Deslocamento Y dos veículos na faixa
}

export interface SubLaneConfig {
  id: string;
  name: string;
  maxSpeed: number;
  minSpeed: number;
  acceleration: number;
  deceleration: number;
  safeDistance: number;
  numCars: number;
  initialSpeed: number;
}

// Configuração visual da rodovia
export interface HighwayVisualConfig {
  canvasWidth: number;
  canvasHeight: number;
  marginTop: number;
  laneHeight: number;
  laneGap: number;
  lateralMargin: number;
  yellowLineYOffset?: number; // Novo parâmetro para posição da linha amarela
}

// Configuração dos veículos
export interface VehicleConfig {
  spriteWidth: number;
  spriteHeight: number;
  hoverVibrationAmplitude: number;
  hoverVibrationSpeed: number;
}

// Configuração das imperfeições da pista
export interface RoadImperfectionsConfig {
  potholes: {
    count: number;
    baseX: number;
    spacing: number;
    minRadius: number;
    maxRadius: number;
  };
  cracks: {
    count: number;
    baseX: number;
    spacing: number;
    pointsPerCrack: number;
    maxOffset: number;
  };
}

// Configuração principal da rodovia
export interface HighwayConfig {
  visual: HighwayVisualConfig;
  lanes: LaneConfig[];
  vehicles: VehicleConfig;
  imperfections: RoadImperfectionsConfig;
}

// Configuração padrão da rodovia
export const DEFAULT_HIGHWAY_CONFIG: HighwayConfig = {
  visual: {
    canvasWidth: 800,
    canvasHeight: 180,
    marginTop: 20,
    laneHeight: 35,
    laneGap: 20,
    lateralMargin: 20,
    yellowLineYOffset: undefined, // Por padrão, undefined (usa cálculo automático)
  },
  lanes: [
    {
      id: 'up',
      name: 'Sentido de Cima',
      direction: 'up',
      color: '#fff',
      position: {
        yOffset: 0, // Posição base da faixa
        height: 35, // Altura da faixa
        vehicleScale: 1.0, // Escala dos veículos (1.0 = tamanho normal)
        vehicleYOffset: 5, // Deslocamento Y dos veículos (+5 = 30 pontos mais baixo que antes)
      },
      sublanes: [
        {
          id: 'single',
          name: 'Faixa Única',
          maxSpeed: 2.2,
          minSpeed: 1.5,
          acceleration: 0.008,
          deceleration: 0.02,
          safeDistance: 450,
          numCars: 4,
          initialSpeed: 2.0,
        },
      ],
    },
    {
      id: 'down',
      name: 'Sentido de Baixo',
      direction: 'down',
      color: '#fff',
      position: {
        yOffset: 55, // Posição base da faixa (abaixo da amarela)
        height: 35, // Altura da faixa
        vehicleScale: 1.0, // Escala dos veículos (1.0 = tamanho normal)
        vehicleYOffset: -40, // Deslocamento Y dos veículos (-40 = 30 pontos mais alto que original)
      },
      sublanes: [
        {
          id: 'single',
          name: 'Faixa Única',
          maxSpeed: 0.8,
          minSpeed: 0.3,
          acceleration: 0.008,
          deceleration: 0.06,
          safeDistance: 110,
          numCars: 5,
          initialSpeed: 0.7,
        },
      ],
    },
  ],
  vehicles: {
    spriteWidth: 100,
    spriteHeight: 100,
    hoverVibrationAmplitude: 14,
    hoverVibrationSpeed: 40,
  },
  imperfections: {
    potholes: {
      count: 4,
      baseX: 80,
      spacing: 180,
      minRadius: 12,
      maxRadius: 17,
    },
    cracks: {
      count: 3,
      baseX: 120,
      spacing: 220,
      pointsPerCrack: 5,
      maxOffset: 18,
    },
  },
};

// Funções utilitárias para calcular posições baseadas na configuração
export function calculateLanePositions(config: HighwayConfig) {
  const { visual } = config;
  const { marginTop, laneHeight, laneGap, yellowLineYOffset } = visual;

  const yLineTop = marginTop;
  const yLine1 = yLineTop + laneHeight;
  // Se yellowLineYOffset for definido, usa ele; senão, calcula padrão
  const yYellow =
    yellowLineYOffset !== undefined
      ? yellowLineYOffset
      : yLine1 + laneHeight + laneGap;
  const yLine2 = yYellow + laneGap + laneHeight;
  const yLineBottom = yLine2 + laneHeight;

  // Centros das faixas
  const yFast = (yLineTop + yLine1) / 2;
  const yMedium = (yLine1 + yYellow - laneGap) / 2;
  const ySlow = (yLine2 + yLineBottom) / 2;

  return {
    lines: {
      top: yLineTop,
      line1: yLine1,
      yellow: yYellow,
      line2: yLine2,
      bottom: yLineBottom,
    },
    centers: {
      fast: yFast,
      medium: yMedium,
      slow: ySlow,
    },
  };
}

// Função para obter a posição Y de uma faixa específica
export function getLaneY(
  laneIndex: number,
  sublaneIndex: number,
  config: HighwayConfig
): number {
  const positions = calculateLanePositions(config);
  const lane = config.lanes[laneIndex];

  if (laneIndex === 0) {
    // Sentido de cima
    const centerY =
      sublaneIndex === 0 ? positions.centers.fast : positions.centers.medium;
    return centerY + lane.position.vehicleYOffset;
  } else {
    // Sentido de baixo
    const centerY = positions.centers.slow;
    return centerY + lane.position.vehicleYOffset;
  }
}

// Função para obter a escala dos veículos de uma faixa
export function getVehicleScale(
  laneIndex: number,
  config: HighwayConfig
): number {
  const lane = config.lanes[laneIndex];
  return lane.position.vehicleScale;
}

// Função para gerar imperfeições baseadas na configuração
export function generateImperfections(config: HighwayConfig) {
  const { imperfections } = config;
  const positions = calculateLanePositions(config);

  const potholes = Array.from({ length: imperfections.potholes.count }).map(
    (_, i) => ({
      x: imperfections.potholes.baseX + i * imperfections.potholes.spacing + 15,
      y: positions.centers.slow + 6 - 50, // 50 pontos mais acima (30 + 20)
      r:
        imperfections.potholes.minRadius +
        (i % 2) *
          (imperfections.potholes.maxRadius - imperfections.potholes.minRadius),
    })
  );

  const cracks = Array.from({ length: imperfections.cracks.count }).map(
    (_, i) => ({
      x: imperfections.cracks.baseX + i * imperfections.cracks.spacing + 20,
      y: positions.centers.slow - 8 - 20, // 20 pontos mais acima
      points: Array.from({ length: imperfections.cracks.pointsPerCrack }).map(
        () => ({
          dx: 10 + Math.random() * 18,
          dy: (Math.random() - 0.5) * imperfections.cracks.maxOffset,
        })
      ),
    })
  );

  return { potholes, cracks };
}

// Função para calcular espaçamento entre carros baseado na configuração
export function calculateCarSpacing(
  laneConfig: SubLaneConfig,
  canvasWidth: number,
  lateralMargin: number
): number {
  return (canvasWidth - 2 * lateralMargin) / laneConfig.numCars;
}
