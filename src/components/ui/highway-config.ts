// Configuração das faixas da rodovia
export interface LaneConfig {
  id: string;
  name: string;
  direction: "up" | "down";
  sublanes: SubLaneConfig[];
  color: string;
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
    canvasHeight: 240,
    marginTop: 25,
    laneHeight: 30,
    laneGap: 20,
    lateralMargin: 20,
  },
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      sublanes: [
        {
          id: "single",
          name: "Faixa Única",
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
      id: "down",
      name: "Sentido de Baixo",
      direction: "down",
      color: "#fff",
      sublanes: [
        {
          id: "single",
          name: "Faixa Única",
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
  const { marginTop, laneHeight, laneGap } = visual;

  const yLineTop = marginTop;
  const yLine1 = yLineTop + laneHeight;
  const yYellow = yLine1 + laneHeight + laneGap;
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
  config: HighwayConfig,
): number {
  const positions = calculateLanePositions(config);

  if (laneIndex === 0) {
    // Sentido de cima
    return sublaneIndex === 0
      ? positions.centers.fast
      : positions.centers.medium;
  } else {
    // Sentido de baixo
    return positions.centers.slow;
  }
}

// Função para gerar imperfeições baseadas na configuração
export function generateImperfections(config: HighwayConfig) {
  const { imperfections } = config;
  const positions = calculateLanePositions(config);

  const potholes = Array.from({ length: imperfections.potholes.count }).map(
    (_, i) => ({
      x: imperfections.potholes.baseX + i * imperfections.potholes.spacing + 15,
      y: positions.centers.slow + 6,
      r:
        imperfections.potholes.minRadius +
        (i % 2) *
          (imperfections.potholes.maxRadius - imperfections.potholes.minRadius),
    }),
  );

  const cracks = Array.from({ length: imperfections.cracks.count }).map(
    (_, i) => ({
      x: imperfections.cracks.baseX + i * imperfections.cracks.spacing + 20,
      y: positions.centers.slow - 8,
      points: Array.from({ length: imperfections.cracks.pointsPerCrack }).map(
        () => ({
          dx: 10 + Math.random() * 18,
          dy: (Math.random() - 0.5) * imperfections.cracks.maxOffset,
        }),
      ),
    }),
  );

  return { potholes, cracks };
}

// Função para calcular espaçamento entre carros baseado na configuração
export function calculateCarSpacing(
  laneConfig: SubLaneConfig,
  canvasWidth: number,
  lateralMargin: number,
): number {
  return (canvasWidth - 2 * lateralMargin) / laneConfig.numCars;
}
