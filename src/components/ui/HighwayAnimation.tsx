import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

export default function HighwayAnimation() {
  return (
    <Box 
      style={{ 
        position: 'relative',
        height: '120px',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        borderRadius: '8px',
        margin: '20px 0'
      }}
    >
      {/* Ponte raiada - linhas horizontais */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '4px',
          background: 'repeating-linear-gradient(90deg, #ffd700 0px, #ffd700 20px, transparent 20px, transparent 40px)',
          transform: 'translateY(-50%)'
        }}
      />
      
      {/* Linha central da rodovia */}
      <Box
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #ffd700 0%, #ffd700 50%, transparent 50%, transparent 100%)',
          transform: 'translateY(-50%)'
        }}
      />

      {/* Carrinho 1 - indo para direita */}
      <motion.div
        style={{
          position: 'absolute',
          top: '35%',
          left: '-50px',
          width: '40px',
          height: '20px',
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}
        animate={{
          x: ['-50px', 'calc(100vw + 50px)']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Janelas do carro */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '8px',
            width: '12px',
            height: '8px',
            background: '#87ceeb',
            borderRadius: '2px'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            right: '8px',
            width: '12px',
            height: '8px',
            background: '#87ceeb',
            borderRadius: '2px'
          }}
        />
        {/* Rodas */}
        <Box
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '6px',
            width: '8px',
            height: '8px',
            background: '#333',
            borderRadius: '50%',
            border: '1px solid #666'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '6px',
            width: '8px',
            height: '8px',
            background: '#333',
            borderRadius: '50%',
            border: '1px solid #666'
          }}
        />
      </motion.div>

      {/* Carrinho 2 - indo para esquerda */}
      <motion.div
        style={{
          position: 'absolute',
          top: '65%',
          right: '-50px',
          width: '40px',
          height: '20px',
          background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}
        animate={{
          x: ['calc(100vw + 50px)', '-50px']
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Janelas do carro */}
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            left: '8px',
            width: '12px',
            height: '8px',
            background: '#87ceeb',
            borderRadius: '2px'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '2px',
            right: '8px',
            width: '12px',
            height: '8px',
            background: '#87ceeb',
            borderRadius: '2px'
          }}
        />
        {/* Rodas */}
        <Box
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '6px',
            width: '8px',
            height: '8px',
            background: '#333',
            borderRadius: '50%',
            border: '1px solid #666'
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '6px',
            width: '8px',
            height: '8px',
            background: '#333',
            borderRadius: '50%',
            border: '1px solid #666'
          }}
        />
      </motion.div>

      {/* Luzes de fundo - efeito de profundidade */}
      <Box
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
    </Box>
  );
} 