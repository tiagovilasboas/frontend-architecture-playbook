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
        background: 'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(26,26,26,0.4) 30%, rgba(45,45,45,0.5) 70%, rgba(10,10,10,0.3) 100%)',
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
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.3), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.3), transparent)
          `,
          zIndex: 1
        }}
      />

      {/* Ponte raiada 3D - múltiplas camadas */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '8px',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.7) 0%, rgba(255, 237, 78, 0.8) 50%, rgba(255, 215, 0, 0.7) 100%)',
          transform: 'translateX(-50%) translateY(-50%) rotateX(60deg) translateZ(20px)',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
          zIndex: 2
        }}
      />
      
      {/* Linhas da ponte - efeito de profundidade */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '2px',
          height: '100%',
          background: 'repeating-linear-gradient(180deg, rgba(255, 215, 0, 0.7) 0px, rgba(255, 215, 0, 0.7) 30px, transparent 30px, transparent 60px)',
          transform: 'translateX(-50%) translateY(-50%) rotateX(60deg) translateZ(15px)',
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
          background: 'linear-gradient(90deg, rgba(102,102,102,0.6), rgba(136,136,136,0.7), rgba(102,102,102,0.6))',
          transform: 'rotateX(60deg) translateZ(10px)',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
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
          background: 'linear-gradient(90deg, rgba(102,102,102,0.6), rgba(136,136,136,0.7), rgba(102,102,102,0.6))',
          transform: 'rotateX(60deg) translateZ(10px)',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          zIndex: 3
        }}
      />

      {/* Opala - 3D indo para direita */}
      <motion.div
        style={{
          position: 'absolute',
          top: '35%',
          left: '-80px',
          width: '55px',
          height: '28px',
          background: 'linear-gradient(135deg, #8B4513, #A0522D, #8B4513)',
          borderRadius: '6px 12px 6px 6px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.4), 0 0 20px rgba(139,69,19,0.3)',
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
        {/* Capô do Opala */}
        <Box
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '20px',
            height: '12px',
            background: 'linear-gradient(135deg, #654321, #8B4513)',
            borderRadius: '4px 8px 0px 0px',
            borderBottom: '1px solid #654321'
          }}
        />
        {/* Janelas do Opala */}
        <Box
          style={{
            position: 'absolute',
            top: '4px',
            left: '12px',
            width: '18px',
            height: '12px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '4px',
            right: '12px',
            width: '18px',
            height: '12px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        {/* Grade frontal do Opala */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '8px',
            height: '6px',
            background: 'linear-gradient(135deg, #333, #555)',
            borderRadius: '2px',
            border: '1px solid #222'
          }}
        />
        {/* Rodas do Opala */}
        <Box
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '8px',
            width: '12px',
            height: '12px',
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
            width: '12px',
            height: '12px',
            background: 'radial-gradient(circle, #333, #000)',
            borderRadius: '50%',
            border: '2px solid #666',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        {/* Faróis do Opala */}
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            left: '3px',
            width: '3px',
            height: '3px',
            background: 'radial-gradient(circle, #fff, #ffd700)',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(255,215,0,0.8)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            left: '6px',
            width: '3px',
            height: '3px',
            background: 'radial-gradient(circle, #fff, #ffd700)',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(255,215,0,0.8)'
          }}
        />
        {/* Lanterna traseira do Opala */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '4px',
            height: '3px',
            background: 'radial-gradient(circle, #ff0000, #cc0000)',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(255,0,0,0.6)'
          }}
        />
      </motion.div>

      {/* Skyline R33 - 3D indo para esquerda */}
      <motion.div
        style={{
          position: 'absolute',
          top: '65%',
          right: '-80px',
          width: '60px',
          height: '22px',
          background: 'linear-gradient(135deg, #1a1a1a, #333333, #1a1a1a)',
          borderRadius: '8px 4px 4px 8px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.4), 0 0 20px rgba(26,26,26,0.3)',
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
        {/* Capô do Skyline */}
        <Box
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '25px',
            height: '10px',
            background: 'linear-gradient(135deg, #000000, #1a1a1a)',
            borderRadius: '6px 4px 0px 0px',
            borderBottom: '1px solid #000'
          }}
        />
        {/* Janelas do Skyline */}
        <Box
          style={{
            position: 'absolute',
            top: '3px',
            left: '15px',
            width: '20px',
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
            right: '15px',
            width: '20px',
            height: '10px',
            background: 'linear-gradient(135deg, #87ceeb, #b0e0e6)',
            borderRadius: '3px',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
          }}
        />
        {/* Grade frontal do Skyline */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '3px',
            width: '10px',
            height: '5px',
            background: 'linear-gradient(135deg, #000, #333)',
            borderRadius: '2px',
            border: '1px solid #000'
          }}
        />
        {/* Rodas do Skyline */}
        <Box
          style={{
            position: 'absolute',
            bottom: '-4px',
            left: '10px',
            width: '12px',
            height: '12px',
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
            right: '10px',
            width: '12px',
            height: '12px',
            background: 'radial-gradient(circle, #333, #000)',
            borderRadius: '50%',
            border: '2px solid #666',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        />
        {/* Faróis do Skyline */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '4px',
            width: '3px',
            height: '3px',
            background: 'radial-gradient(circle, #fff, #ffd700)',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(255,215,0,0.8)'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '8px',
            width: '3px',
            height: '3px',
            background: 'radial-gradient(circle, #fff, #ffd700)',
            borderRadius: '50%',
            boxShadow: '0 0 6px rgba(255,215,0,0.8)'
          }}
        />
        {/* Lanterna traseira do Skyline */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            right: '3px',
            width: '5px',
            height: '3px',
            background: 'radial-gradient(circle, #ff0000, #cc0000)',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(255,0,0,0.6)'
          }}
        />
        {/* Spoiler do Skyline */}
        <Box
          style={{
            position: 'absolute',
            top: '-2px',
            right: '8px',
            width: '8px',
            height: '3px',
            background: 'linear-gradient(135deg, #000, #333)',
            borderRadius: '1px',
            border: '1px solid #000'
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
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.03) 0%, transparent 70%)',
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
          background: 'linear-gradient(180deg, rgba(255,215,0,0.05) 0%, transparent 100%)',
          transform: 'scaleY(-1)',
          opacity: 0.2,
          zIndex: 1
        }}
      />
    </Box>
  );
} 