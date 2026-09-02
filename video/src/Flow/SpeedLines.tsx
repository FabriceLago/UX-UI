import React from "react";
import { INK } from "./constants";

export const SpeedLines: React.FC<{
  opacity?: number;
  color?: string;
  count?: number;
  rotation?: number;
}> = ({ opacity = 1, color = INK, count = 48, rotation = 0 }) => {
  const cx = 960;
  const cy = 540;
  const lines = Array.from({ length: count });

  return (
    <svg
      viewBox="0 0 1920 1080"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "50% 50%",
      }}
    >
      {lines.map((_, i) => {
        const angle = (i / lines.length) * Math.PI * 2;
        const innerR = 130 + (i % 5) * 24;
        const outerR = 1500;
        const x1 = cx + Math.cos(angle) * innerR;
        const y1 = cy + Math.sin(angle) * innerR;
        const x2 = cx + Math.cos(angle) * outerR;
        const y2 = cy + Math.sin(angle) * outerR;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth={i % 3 === 0 ? 5 : 2}
          />
        );
      })}
    </svg>
  );
};
