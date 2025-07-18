import { Box } from "@mantine/core";
import { motion } from "framer-motion";

interface VehicleProps {
  y: number;
  width: number;
  height: number;
  color: string;
  speed: number;
  direction: "left" | "right";
  type: "car" | "van";
  delay?: number;
}

export default function Vehicle({
  y,
  width,
  height,
  color,
  speed,
  direction,
  type,
  delay = 0,
}: VehicleProps) {
  const startX = direction === "right" ? "-100px" : "calc(100vw + 100px)";
  const endX = direction === "right" ? "calc(100vw + 100px)" : "-100px";

  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: `${y}px`,
        left: direction === "right" ? startX : "auto",
        right: direction === "left" ? startX : "auto",
        width: `${width}px`,
        height: `${height}px`,
        transform: "rotateX(60deg) translateZ(5px)",
        zIndex: 4,
      }}
      animate={{
        x: direction === "right" ? [startX, endX] : [startX, endX],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      {/* Corpo principal */}
      <Box
        style={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          width: `${width}px`,
          height: `${height * 0.8}px`,
          background: `linear-gradient(135deg, ${color}, ${color}dd, ${color})`,
          borderRadius:
            type === "car" ? "8px 8px 4px 4px" : "10px 10px 5px 5px",
          boxShadow: `0 4px 8px rgba(0,0,0,0.4), 0 0 10px ${color}33`,
        }}
      />

      {/* Capô (apenas para carros) */}
      {type === "car" && (
        <Box
          style={{
            position: "absolute",
            bottom: `${height * 0.6}px`,
            left: `${width * 0.1}px`,
            width: `${width * 0.4}px`,
            height: `${height * 0.3}px`,
            background: `linear-gradient(135deg, ${color}, ${color}dd)`,
            borderRadius: "4px 4px 0px 0px",
            border: `1px solid ${color}`,
          }}
        />
      )}

      {/* Teto */}
      <Box
        style={{
          position: "absolute",
          bottom: type === "car" ? `${height * 0.8}px` : `${height * 0.7}px`,
          left: type === "car" ? `${width * 0.25}px` : `${width * 0.12}px`,
          width: type === "car" ? `${width * 0.3}px` : `${width * 0.7}px`,
          height: type === "car" ? `${height * 0.2}px` : `${height * 0.25}px`,
          background: `linear-gradient(135deg, ${color}, ${color}dd)`,
          borderRadius: type === "car" ? "3px 3px 0px 0px" : "4px 4px 0px 0px",
        }}
      />

      {/* Janelas */}
      {type === "car" ? (
        <Box
          style={{
            position: "absolute",
            bottom: `${height * 0.84}px`,
            left: `${width * 0.27}px`,
            width: `${width * 0.26}px`,
            height: `${height * 0.12}px`,
            background: "linear-gradient(135deg, #87ceeb, #b0e0e6)",
            borderRadius: "2px",
            border: "1px solid #4682b4",
          }}
        />
      ) : (
        <>
          {/* Janelas dianteira */}
          <Box
            style={{
              position: "absolute",
              bottom: `${height * 0.75}px`,
              left: `${width * 0.15}px`,
              width: `${width * 0.15}px`,
              height: `${height * 0.15}px`,
              background: "linear-gradient(135deg, #87ceeb, #b0e0e6)",
              borderRadius: "3px",
              border: "1px solid #4682b4",
            }}
          />
          {/* Janelas traseira */}
          <Box
            style={{
              position: "absolute",
              bottom: `${height * 0.75}px`,
              right: `${width * 0.15}px`,
              width: `${width * 0.15}px`,
              height: `${height * 0.15}px`,
              background: "linear-gradient(135deg, #87ceeb, #b0e0e6)",
              borderRadius: "3px",
              border: "1px solid #4682b4",
            }}
          />
        </>
      )}

      {/* Faróis */}
      <Box
        style={{
          position: "absolute",
          bottom: `${height * 0.1}px`,
          left: direction === "right" ? `${width * 0.05}px` : "auto",
          right: direction === "left" ? `${width * 0.05}px` : "auto",
          width: type === "car" ? `${width * 0.1}px` : `${width * 0.12}px`,
          height: type === "car" ? `${height * 0.15}px` : `${height * 0.15}px`,
          background: "radial-gradient(circle, #fff, #ffd700)",
          borderRadius: type === "car" ? "2px" : "2px",
          boxShadow: "0 0 8px rgba(255,215,0,0.8)",
        }}
      />

      {/* Lanterna traseira */}
      <Box
        style={{
          position: "absolute",
          bottom: `${height * 0.1}px`,
          left: direction === "left" ? `${width * 0.05}px` : "auto",
          right: direction === "right" ? `${width * 0.05}px` : "auto",
          width: type === "car" ? `${width * 0.08}px` : `${width * 0.1}px`,
          height: type === "car" ? `${height * 0.12}px` : `${height * 0.12}px`,
          background: "radial-gradient(circle, #ff0000, #cc0000)",
          borderRadius: type === "car" ? "2px" : "2px",
          boxShadow: "0 0 6px rgba(255,0,0,0.6)",
        }}
      />

      {/* Rodas - dianteira */}
      <Box
        style={{
          position: "absolute",
          bottom: `-${height * 0.3}px`,
          left: `${width * 0.15}px`,
          width: type === "car" ? `${width * 0.25}px` : `${width * 0.25}px`,
          height: type === "car" ? `${height * 0.6}px` : `${height * 0.7}px`,
          background: "radial-gradient(circle, #333, #000)",
          borderRadius: "50%",
          border: "2px solid #666",
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
        }}
      />

      {/* Rodas - traseira */}
      <Box
        style={{
          position: "absolute",
          bottom: `-${height * 0.3}px`,
          right: `${width * 0.15}px`,
          width: type === "car" ? `${width * 0.25}px` : `${width * 0.25}px`,
          height: type === "car" ? `${height * 0.6}px` : `${height * 0.7}px`,
          background: "radial-gradient(circle, #333, #000)",
          borderRadius: "50%",
          border: "2px solid #666",
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
        }}
      />

      {/* Para-choque (apenas para carros) */}
      {type === "car" && (
        <Box
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: `${width}px`,
            height: `${height * 0.1}px`,
            background: color,
            borderRadius: "1px",
          }}
        />
      )}
    </motion.div>
  );
}
