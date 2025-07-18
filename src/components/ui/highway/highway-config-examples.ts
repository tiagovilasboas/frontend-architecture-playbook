import { DEFAULT_HIGHWAY_CONFIG, type HighwayConfig } from "./highway-config";

// Configuração simplificada: uma faixa por sentido
export const SIMPLE_HIGHWAY_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: 5, // 30 pontos mais baixo que antes
      },
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
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -40, // 30 pontos mais alto que original
      },
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
};

// Exemplo: Carros menores na via de cima
export const SMALL_CARS_TOP_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 0.8, // Carros 20% menores
        vehicleYOffset: -20, // Posicionados mais baixo
      },
      sublanes: [
        {
          id: "single",
          name: "Faixa Única",
          maxSpeed: 2.2,
          minSpeed: 1.5,
          acceleration: 0.008,
          deceleration: 0.02,
          safeDistance: 360, // Ajustado para carros menores
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
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.0, // Carros tamanho normal
        vehicleYOffset: -40,
      },
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
};

// Exemplo: Carros maiores na via de baixo
export const LARGE_CARS_BOTTOM_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 1.0, // Carros tamanho normal
        vehicleYOffset: -25,
      },
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
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.2, // Carros 20% maiores
        vehicleYOffset: -15, // Ajustado para carros maiores
      },
      sublanes: [
        {
          id: "single",
          name: "Faixa Única",
          maxSpeed: 0.8,
          minSpeed: 0.3,
          acceleration: 0.008,
          deceleration: 0.06,
          safeDistance: 132, // Ajustado para carros maiores
          numCars: 5,
          initialSpeed: 0.7,
        },
      ],
    },
  ],
};

// Exemplo: Carros posicionados mais altos
export const HIGH_POSITION_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -35, // Muito mais alto
      },
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
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -20, // Mais alto
      },
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
};

// Exemplo 1: Rodovia com mais carros e trânsito intenso
export const HIGH_TRAFFIC_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -25,
      },
      sublanes: [
        {
          id: "fast",
          name: "Faixa Rápida",
          maxSpeed: 2.0,
          minSpeed: 1.2,
          acceleration: 0.006,
          deceleration: 0.025,
          safeDistance: 380,
          numCars: 5,
          initialSpeed: 2.0,
        },
        {
          id: "medium",
          name: "Faixa Média",
          maxSpeed: 1.5,
          minSpeed: 1.0,
          acceleration: 0.006,
          deceleration: 0.025,
          safeDistance: 380,
          numCars: 6,
          initialSpeed: 1.3,
        },
      ],
    },
    {
      id: "down",
      name: "Sentido de Baixo",
      direction: "down",
      color: "#fff",
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -40,
      },
      sublanes: [
        {
          id: "slow",
          name: "Faixa Lenta",
          maxSpeed: 0.6,
          minSpeed: 0.2,
          acceleration: 0.005,
          deceleration: 0.08,
          safeDistance: 90,
          numCars: 7,
          initialSpeed: 0.5,
        },
      ],
    },
  ],
};

// Exemplo 2: Rodovia com faixas mais largas e menos trânsito
export const WIDE_LANES_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  visual: {
    ...DEFAULT_HIGHWAY_CONFIG.visual,
    laneHeight: 50,
    laneGap: 25,
    canvasHeight: 280,
  },
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 30,
        height: 30,
        vehicleScale: 1.0,
        vehicleYOffset: 100,
      },
      sublanes: [
        {
          id: "fast",
          name: "Faixa Rápida",
          maxSpeed: 3.0,
          minSpeed: 2.0,
          acceleration: 0.01,
          deceleration: 0.015,
          safeDistance: 500,
          numCars: 2,
          initialSpeed: 2.8,
        },
        {
          id: "medium",
          name: "Faixa Média",
          maxSpeed: 2.2,
          minSpeed: 1.5,
          acceleration: 0.01,
          deceleration: 0.015,
          safeDistance: 500,
          numCars: 3,
          initialSpeed: 2.0,
        },
      ],
    },
    {
      id: "down",
      name: "Sentido de Baixo",
      direction: "down",
      color: "#fff",
      position: {
        yOffset: 75,
        height: 50,
        vehicleScale: 1.0,
        vehicleYOffset: -40,
      },
      sublanes: [
        {
          id: "slow",
          name: "Faixa Lenta",
          maxSpeed: 1.2,
          minSpeed: 0.5,
          acceleration: 0.008,
          deceleration: 0.04,
          safeDistance: 150,
          numCars: 3,
          initialSpeed: 1.0,
        },
      ],
    },
  ],
};

// Exemplo 3: Rodovia com apenas uma faixa por sentido
export const SINGLE_LANE_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -25,
      },
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
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -40,
      },
      sublanes: [
        {
          id: "single",
          name: "Faixa Única",
          maxSpeed: 1.0,
          minSpeed: 0.4,
          acceleration: 0.008,
          deceleration: 0.05,
          safeDistance: 120,
          numCars: 4,
          initialSpeed: 0.8,
        },
      ],
    },
  ],
};

// Exemplo 4: Rodovia com três faixas no sentido de cima
export const THREE_LANE_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  visual: {
    ...DEFAULT_HIGHWAY_CONFIG.visual,
    canvasHeight: 300,
  },
  lanes: [
    {
      id: "up",
      name: "Sentido de Cima",
      direction: "up",
      color: "#fff",
      position: {
        yOffset: 0,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -25,
      },
      sublanes: [
        {
          id: "fast",
          name: "Faixa Rápida",
          maxSpeed: 2.8,
          minSpeed: 2.0,
          acceleration: 0.01,
          deceleration: 0.015,
          safeDistance: 480,
          numCars: 3,
          initialSpeed: 2.5,
        },
        {
          id: "medium",
          name: "Faixa Média",
          maxSpeed: 2.0,
          minSpeed: 1.5,
          acceleration: 0.008,
          deceleration: 0.02,
          safeDistance: 420,
          numCars: 4,
          initialSpeed: 1.8,
        },
        {
          id: "slow",
          name: "Faixa Lenta",
          maxSpeed: 1.5,
          minSpeed: 1.0,
          acceleration: 0.008,
          deceleration: 0.025,
          safeDistance: 380,
          numCars: 4,
          initialSpeed: 1.3,
        },
      ],
    },
    {
      id: "down",
      name: "Sentido de Baixo",
      direction: "down",
      color: "#fff",
      position: {
        yOffset: 55,
        height: 35,
        vehicleScale: 1.0,
        vehicleYOffset: -40,
      },
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
};

// Exemplo: Rodovia cheia de buracos (bugs, código mal estruturado e dívida técnica)
export const BUGGY_HIGHWAY_CONFIG: HighwayConfig = {
  ...DEFAULT_HIGHWAY_CONFIG,
  visual: {
    ...DEFAULT_HIGHWAY_CONFIG.visual,
    canvasHeight: 220,
    yellowLineYOffset: 100,
  },
  lanes: [
    {
      ...DEFAULT_HIGHWAY_CONFIG.lanes[0],
      position: {
        ...DEFAULT_HIGHWAY_CONFIG.lanes[0].position,
      },
    },
    {
      ...DEFAULT_HIGHWAY_CONFIG.lanes[1],
      position: {
        ...DEFAULT_HIGHWAY_CONFIG.lanes[1].position,
      },
    },
  ],
  imperfections: {
    potholes: {
      count: 10, // Muitos buracos: bugs, código mal estruturado, dívida técnica
      baseX: 40,
      spacing: 70,
      minRadius: 10,
      maxRadius: 22,
    },
    cracks: {
      count: 6,
      baseX: 60,
      spacing: 90,
      pointsPerCrack: 6,
      maxOffset: 22,
    },
  },
};

// Comentário para o playbook:
// "Rodovia cheia de buracos é igual projeto cheio de bugs, código mal estruturado e dívida técnica: todo mundo freia, trava, e o fluxo nunca é suave. Cada buraco é um bug ou gambiarra que atrasa a entrega e aumenta o risco de acidente (bug em produção)."

// Função para criar configuração customizada
export function createCustomConfig(
  overrides: Partial<HighwayConfig>,
): HighwayConfig {
  return {
    ...DEFAULT_HIGHWAY_CONFIG,
    ...overrides,
  };
}

// Função para modificar apenas uma subfaixa específica
export function modifySublane(
  config: HighwayConfig,
  laneIndex: number,
  sublaneIndex: number,
  overrides: Partial<HighwayConfig["lanes"][0]["sublanes"][0]>,
): HighwayConfig {
  const newConfig = { ...config };
  newConfig.lanes = [...config.lanes];
  newConfig.lanes[laneIndex] = { ...config.lanes[laneIndex] };
  newConfig.lanes[laneIndex].sublanes = [...config.lanes[laneIndex].sublanes];
  newConfig.lanes[laneIndex].sublanes[sublaneIndex] = {
    ...config.lanes[laneIndex].sublanes[sublaneIndex],
    ...overrides,
  };
  return newConfig;
}

// Função para modificar a posição de uma faixa
export function modifyLanePosition(
  config: HighwayConfig,
  laneIndex: number,
  positionOverrides: Partial<HighwayConfig["lanes"][0]["position"]>,
): HighwayConfig {
  const newConfig = { ...config };
  newConfig.lanes = [...config.lanes];
  newConfig.lanes[laneIndex] = { ...config.lanes[laneIndex] };
  newConfig.lanes[laneIndex].position = {
    ...config.lanes[laneIndex].position,
    ...positionOverrides,
  };
  return newConfig;
}
