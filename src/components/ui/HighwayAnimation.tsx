import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

export default function HighwayAnimation() {
  return (
    <Box 
      style={{ 
        position: 'relative',
        height: '200px',
        width: '100%',
        overflow: 'hidden',
        perspective: '1000px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 30%, #2d2d2d 70%, #0a0a0a 100%)',
        borderRadius: '12px',
        margin: '20px 0',
        transform: 'rotateX(15deg)',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Céu noturno com estrelas */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 40px 70px, #fff, transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, #fff, transparent),
            radial-gradient(2px 2px at 160px 30px, #fff, transparent)
          `,
          zIndex: 1
        }}
      />

      {/* Ponte raiada 3D - múltiplas camadas */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
          transform: 'translateY(-50%) rotateX(60deg) translateZ(20px)',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
          zIndex: 2
        }}
      />
      
      {/* Linhas da ponte - efeito de profundidade */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          background: 'repeating-linear-gradient(90deg, #ffd700 0px, #ffd700 30px, transparent 30px, transparent 60px)',
          transform: 'translateY(-50%) rotateX(60deg) translateZ(15px)',
          zIndex: 2
        }}
      />

      {/* Pilar da ponte - lado esquerdo */}
      <Box
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20%',
          width: '8px',
          height: '60px',
          background: 'linear-gradient(90deg, #666, #888, #666)',
          transform: 'rotateX(60deg) translateZ(10px)',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          zIndex: 3
        }}
      />

      {/* Pilar da ponte - lado direito */}
      <Box
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20%',
          width: '8px',
          height: '60px',
          background: 'linear-gradient(90deg, #666, #888, #666)',
          transform: 'rotateX(60deg) translateZ(10px)',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          zIndex: 3
        }}
      />

      {/* Carrinho 1 - 3D indo para direita */}
      <motion.div
        style={{
          position: 'absolute',
          top: '35%',
          left: '-80px',
          width: '50px',
          height: '25px',
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a52, #ff6b6b)',
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.4), 0 0 20px rgba(255,107,107,0.3)',
          transform: 'rotateX(60deg) translateZ(25px)',
          zIndex: 4
        }}
        animate={{
          x: ['-80px', 'calc(100vw + 80px)']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Janelas do carro 3D */}
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            left: '10px',
            width: '15px',
            height: '10px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            right: '10px',
            width: '15px',
            height: '10px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        {/* Rodas 3D */}
        <Box
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '8px',
            width: '10px',
            height: '10px',
            background: 'radial-gradient(circle, #333, #000)',
            borderRadius: '50%',
            border: '2px solid #666',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '-4px',
            right: '8px',
            width: '10px',
            height: '10px',
            background: 'radial-gradient(circle, #333, #000)',
            borderRadius: '50%',
            border: '2px solid #666',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        {/* Faróis */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '4px',
            height: '4px',
            background: 'radial-gradient(circle, #fff, #ffd700)',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(255,215,0,0.8)'
          }}
        />
      </motion.div>

      {/* Carrinho 2 - 3D indo para esquerda */}
      <motion.div
        style={{
          position: 'absolute',
          top: '65%',
          right: '-80px',
          width: '50px',
          height: '25px',
          background: 'linear-gradient(135deg, #4ecdc4, #44a08d, #4ecdc4)',
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.4), 0 0 20px rgba(78,205,196,0.3)',
          transform: 'rotateX(60deg) translateZ(25px)',
          zIndex: 4
        }}
        animate={{
          x: ['calc(100vw + 80px)', '-80px']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Janelas do carro 3D */}
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            left: '10px',
            width: '15px',
            height: '10px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            right: '10px',
            width: '15px',
            height: '10px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        {/* Rodas 3D */}
        <Box
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '8px',
            width: '10px',
            height: '10px',
            background: 'radial-gradient(circle, #333, #000)',
            borderRadius: '50%',
            border: '2px solid #666',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '-4px',
            right: '8px',
            width: '10px',
            height: '10px',
            background: 'radial-gradient(circle, #333, #000)',
            borderRadius: '50%',
            border: '2px solid #666',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        {/* Faróis */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '4px',
            height: '4px',
            background: 'radial-gradient(circle, #fff, #ffd700)',
            borderRadius: '50%',
            boxShadow: '0 0 8px rgba(255,215,0,0.8)'
          }}
        />
      </motion.div>

      {/* Efeito de névoa/atmosfera */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 5
        }}
      />

      {/* Reflexos na água (simulado) */}
      <Box
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '20px',
          background: 'linear-gradient(180deg, rgba(255,215,0,0.1) 0%, transparent 100%)',
          transform: 'scaleY(-1)',
          opacity: 0.3,
          zIndex: 1
        }}
      />
    </Box>
  );
} 