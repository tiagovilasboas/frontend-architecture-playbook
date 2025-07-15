import { motion } from 'framer-motion';
import { 
  IconCar, 
  IconTruck, 
  IconCarSuv
} from '@tabler/icons-react';

interface Vehicle {
  id: string;
  name: string;
  y: number;
  size: number;
  color: string;
  speed: number;
  direction: 'left' | 'right';
  type: 'car' | 'van' | 'truck';
  delay?: number;
}

interface VehicleIconProps {
  vehicle: Vehicle;
}

export default function VehicleIcon({ vehicle }: VehicleIconProps) {
  const { y, size, color, speed, direction, type, delay = 0 } = vehicle;
  
  const startX = direction === 'right' ? -100 : window.innerWidth + 100;
  const endX = direction === 'right' ? window.innerWidth + 100 : -100;

  // Escolher ícone baseado no tipo
  const getIcon = () => {
    const iconProps = { size, color };
    let icon;
    switch (type) {
      case 'car':
        icon = <IconCar {...iconProps} />;
        break;
      case 'van':
        icon = <IconCarSuv {...iconProps} />;
        break;
      case 'truck':
        icon = <IconTruck {...iconProps} />;
        break;
      default:
        icon = <IconCar {...iconProps} />;
    }
    return (
      <span style={direction === 'left' ? { display: 'inline-block', transform: 'scaleX(-1)' } : undefined}>
        {icon}
      </span>
    );
  };

  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: `${y}px`,
        left: 0,
        transform: 'rotateX(60deg) translateZ(5px)',
        zIndex: 4,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))'
      }}
      animate={{
        x: [startX, endX]
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay
      }}
    >
      {getIcon()}
    </motion.div>
  );
} 