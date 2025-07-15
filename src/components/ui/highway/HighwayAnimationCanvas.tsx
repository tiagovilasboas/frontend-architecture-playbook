import { useRef, useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { 
  DEFAULT_HIGHWAY_CONFIG, 
  calculateLanePositions, 
  getLaneY, 
  getVehicleScale,
  generateImperfections,
  calculateCarSpacing,
  type HighwayConfig 
} from './highway-config';

const SPRITE_PATHS = [
  'Ambulance.png',
  'Audi.png',
  'Police.png',
  'Black_viper.png',
  'Car.png',
  'Mini_truck.png',
  'Mini_van.png',
  'truck.png',
  'taxi.png',
].map(f => `/assets/cars/${f}`);

interface Vehicle {
  lane: number;
  x: number;
  speed: number;
  color: string;
  direction: 'left' | 'right';
  opacity: number;
  maxSpeed: number;
  sprite: HTMLImageElement;
  hasHeadlights?: boolean;
  headlightsOn?: boolean;
  derrapando?: boolean;
  derrapagemTimer?: number;
  derrapagemCooldown?: number;
  sublane: number;
  isNearPothole?: boolean; // Nova propriedade para detectar proximidade de buraco
  laneSpacingMultiplier?: number; // Adicionar multiplicadores específicos da pista
  laneSafeDistanceMultiplier?: number; // Adicionar multiplicadores específicos da pista
}

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
}

export default function HighwayAnimationCanvas({ config = DEFAULT_HIGHWAY_CONFIG }: { config?: HighwayConfig }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sprites, setSprites] = useState<HTMLImageElement[]>([]);
  
  // Detectar resolução pequena (até 430px)
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 430;


  // Carregar todos os sprites ao montar
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];
    SPRITE_PATHS.forEach((src, i) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === SPRITE_PATHS.length) setSprites([...imgs]);
      };
      imgs[i] = img;
    });
  }, []);

  useEffect(() => {
    if (sprites.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { visual, vehicles } = config;
    const positions = calculateLanePositions(config);
    const imperfections = generateImperfections(config);

    // Partículas de fumaça
    let smokeParticles: SmokeParticle[] = [];

    let animationId: number;
    
    // Função para detectar proximidade de buracos
    const checkPotholeProximity = (vehicle: Vehicle, potholes: Array<{x: number, y: number, r: number}>) => {
      const vehicleY = getLaneY(vehicle.lane, vehicle.sublane, config);
      const proximityThreshold = 80; // Distância para considerar "próximo" do buraco
      
      for (const pothole of potholes) {
        const distanceX = Math.abs(vehicle.x - pothole.x);
        const distanceY = Math.abs(vehicleY - pothole.y);
        
        // Se o carro está próximo do buraco (dentro do threshold)
        if (distanceX < proximityThreshold && distanceY < 30) {
          return true;
        }
      }
      return false;
    };

    // Função para embaralhar array (Fisher-Yates)
    function shuffle<T>(array: T[]): T[] {
      let m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }
    
    // Configuração mobile vs desktop
    const mobileConfig = isSmallScreen ? {
      widthScale: 1,
      heightScale: 2.2,
      spacingMultiplier: 2.5,
      safeDistanceMultiplier: 3.5
    } : {
      widthScale: 1,
      heightScale: 1,
      spacingMultiplier: 1,
      safeDistanceMultiplier: 1
    };
    
    // Embaralhar os sprites e dividir entre as lanes
    const shuffledSprites = shuffle([...sprites]);
    const half = Math.ceil(shuffledSprites.length / 2);
    const spritesLane0 = shuffledSprites.slice(0, half);
    const spritesLane1 = shuffledSprites.slice(half);
    
    const vehiclesList: Vehicle[] = [];
    
    // Criar veículos baseado na configuração
    config.lanes.forEach((lane, laneIndex) => {
      lane.sublanes.forEach((sublane, sublaneIndex) => {
        const spritePool = laneIndex === 0 ? spritesLane0 : spritesLane1;
        
        // Ajuste específico para pista de baixo no mobile
        const laneSpacingMultiplier = isSmallScreen && laneIndex === 1 ? 4.0 : mobileConfig.spacingMultiplier;
        const laneSafeDistanceMultiplier = isSmallScreen && laneIndex === 1 ? 4.0 : mobileConfig.safeDistanceMultiplier;
        
        const spacing = calculateCarSpacing(sublane, visual.canvasWidth, visual.lateralMargin) * laneSpacingMultiplier;
        
        // Reduzir número de carros no mobile
        const numCars = isSmallScreen ? Math.max(2, Math.floor(sublane.numCars * 0.6)) : sublane.numCars;
        
        for (let i = 0; i < numCars; i++) {
          const sprite = spritePool[i % spritePool.length];
          const x = visual.lateralMargin + i * spacing;
          
          vehiclesList.push({
            lane: laneIndex,
            sublane: sublaneIndex,
            x,
            speed: sublane.initialSpeed,
            color: lane.color,
            direction: lane.direction === 'up' ? 'right' : 'left',
            opacity: 0,
            maxSpeed: sublane.maxSpeed,
            sprite,
            hasHeadlights: Math.random() < 0.5,
            headlightsOn: false,
            derrapando: false,
            derrapagemTimer: Math.random() * 300 + 200,
            derrapagemCooldown: 0,
            isNearPothole: false,
            // Adicionar multiplicadores específicos da pista
            laneSpacingMultiplier,
            laneSafeDistanceMultiplier,
          });
        }
      });
    });

    // Mouse interaction
    let mouseX = -1, mouseY = -1;
    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * canvas.width;
      mouseY = ((e.clientY - rect.top) / rect.height) * canvas.height;
    };
    canvas.onmouseleave = () => {
      mouseX = -1;
      mouseY = -1;
    };

    // Desenhar rodovia
    const drawRoad = () => {
      ctx.save();
      // Rodovia retangular
      ctx.fillStyle = '#23272a';
      ctx.fillRect(0, 0, visual.canvasWidth, visual.canvasHeight);
      ctx.restore();
      
      // Linha amarela central
      ctx.save();
      ctx.strokeStyle = '#FFD600';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, positions.lines.yellow - 20); // 20 pontos mais acima
      ctx.lineTo(visual.canvasWidth, positions.lines.yellow - 20); // 100% da largura
      ctx.stroke();
      ctx.restore();
      
      // Buracos e trincados na faixa de baixo
      ctx.save();
      // Buracos
      for (const p of imperfections.potholes) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#181a1b';
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Trincados
      ctx.globalAlpha = 0.7;
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 3;
      for (const c of imperfections.cracks) {
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        let tx = c.x, ty = c.y;
        for (const pt of c.points) {
          tx += pt.dx;
          ty += pt.dy;
          ctx.lineTo(tx, ty);
        }
        ctx.stroke();
      }
      ctx.restore();
    };

    // Desenhar carro usando sprite
    const drawCar = (v: Vehicle, vibrate = 0) => {
      const y = getLaneY(v.lane, v.sublane, config);
      const x = v.x + vibrate;
      ctx.save();
      
      // Efeito visual para carros próximos de buracos
      if (v.isNearPothole) {
        ctx.globalAlpha = v.opacity * 0.7; // Mais transparente
        ctx.filter = 'brightness(1.2) saturate(1.5)'; // Mais brilhante e saturado
      } else {
        ctx.globalAlpha = v.opacity;
      }
      
      ctx.translate(x, y);
      
      // Calcular tamanho de renderização baseado na configuração
      const vehicleScale = getVehicleScale(v.lane, config);
      const renderWidth = vehicles.spriteWidth * vehicleScale * mobileConfig.widthScale;
      const renderHeight = vehicles.spriteHeight * vehicleScale * mobileConfig.heightScale;
      
      if (v.direction === 'right') {
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(v.sprite, -renderWidth/2, -renderHeight/2, renderWidth, renderHeight);
      } else {
        ctx.rotate(-Math.PI / 2);
        ctx.scale(-1, 1);
        ctx.drawImage(v.sprite, -renderWidth/2, -renderHeight/2, renderWidth, renderHeight);
      }
      
      // Faróis
      if (v.hasHeadlights && v.headlightsOn) {
        ctx.save();
        ctx.beginPath();
        if (v.direction === 'right') {
          ctx.arc(renderHeight/2 + 4, -renderWidth/4, 4, 0, Math.PI * 2);
          ctx.arc(renderHeight/2 + 4, +renderWidth/4, 4, 0, Math.PI * 2);
        } else {
          ctx.arc(-renderHeight/2 - 4, -renderWidth/4, 4, 0, Math.PI * 2);
          ctx.arc(-renderHeight/2 - 4, +renderWidth/4, 4, 0, Math.PI * 2);
        }
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, visual.canvasWidth, visual.canvasHeight);
      drawRoad();
      
      // Atualizar e desenhar partículas de fumaça
      smokeParticles = smokeParticles.filter(p => p.alpha > 0.03);
      for (const p of smokeParticles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.97;
        p.size *= 1.04;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = 'rgba(180,180,180,0.8)';
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size, p.size * 0.7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      
      // Separar carros por subfaixa
      const carsByLane = [
        [
          vehiclesList.filter(v => v.lane === 0 && v.sublane === 0),
          vehiclesList.filter(v => v.lane === 0 && v.sublane === 1),
        ],
        [vehiclesList.filter(v => v.lane === 1)],
      ];
      
      for (let lane = 0; lane < 2; lane++) {
        const sublanes = lane === 0 ? 2 : 1;
        for (let sublane = 0; sublane < sublanes; sublane++) {
          const cars = carsByLane[lane][sublane];
          const laneConfig = config.lanes[lane].sublanes[sublane];
          
          cars.sort((a, b) =>
            lane === 0 ? a.x - b.x : b.x - a.x
          );
          
          for (let i = 0; i < cars.length; i++) {
            const v = cars[i];
            const next = cars[(i + 1) % cars.length];
            let dist;
            if (lane === 0) {
              dist = (next.x > v.x) ? next.x - v.x : visual.canvasWidth - v.x + next.x;
            } else {
              dist = (v.x > next.x) ? v.x - next.x : visual.canvasWidth - next.x + v.x;
            }
            
            // Verificar proximidade de buracos (apenas para via de baixo onde estão os buracos)
            if (lane === 1) {
              v.isNearPothole = checkPotholeProximity(v, imperfections.potholes);
            }
            
            // Frenagem por buracos (mais agressiva que frenagem normal)
            if (v.isNearPothole) {
              v.speed = Math.max(laneConfig.minSpeed * 0.5, v.speed - laneConfig.deceleration * 2);
            } else if (dist < laneConfig.safeDistance * (v.laneSafeDistanceMultiplier || mobileConfig.safeDistanceMultiplier)) {
              v.speed = Math.max(laneConfig.minSpeed, v.speed - laneConfig.deceleration);
            } else if (v.speed < v.maxSpeed) {
              v.speed = Math.min(v.maxSpeed, v.speed + laneConfig.acceleration);
            }
            
            if (v.opacity < 1) v.opacity += 0.02;

            // Hover detection
            let isHovered = false;
            const vehicleScale = getVehicleScale(v.lane, config);
            const actualVehicleWidth = vehicles.spriteWidth * vehicleScale * mobileConfig.widthScale;
            const actualVehicleHeight = vehicles.spriteHeight * vehicleScale * mobileConfig.heightScale;
            if (
              mouseX >= v.x - actualVehicleWidth / 2 &&
              mouseX <= v.x + actualVehicleWidth / 2 &&
              mouseY >= getLaneY(lane, v.sublane, config) - actualVehicleHeight / 2 &&
              mouseY <= getLaneY(lane, v.sublane, config) + actualVehicleHeight / 2
            ) {
              isHovered = true;
            }

            // Vibração se hover
            let vibrate = 0;
            if (isHovered) {
              vibrate = Math.sin(Date.now() / vehicles.hoverVibrationSpeed) * vehicles.hoverVibrationAmplitude;
            }

            // Faróis acesos apenas pela lógica normal
            v.headlightsOn = false;

            drawCar(v, vibrate);
            
            if (v.direction === 'right') {
              v.x += v.speed;
              if (v.x > visual.canvasWidth + actualVehicleWidth) v.x = -actualVehicleWidth;
            } else {
              v.x -= v.speed;
              if (v.x < -actualVehicleWidth) v.x = visual.canvasWidth + actualVehicleWidth;
            }
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [sprites, config, isSmallScreen]);

  return (
    <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <canvas 
        ref={canvasRef} 
        width={config.visual.canvasWidth} 
        height={config.visual.canvasHeight} 
        style={{ 
          width: '100%', 
          maxWidth: 900, 
          height: config.visual.canvasHeight, 
          background: 'none', 
          display: 'block' 
        }} 
      />
    </Box>
  );
} 