import React from "react";
import { INK } from "./constants";

type Pose = "crouch" | "focus" | "dash" | "triumph";

const limbProps = (color: string) => ({
  stroke: color,
  strokeWidth: 22,
  strokeLinecap: "round" as const,
});

export const InkFigure: React.FC<{
  pose: Pose;
  color?: string;
  size?: number;
  mirror?: boolean;
}> = ({ pose, color = INK, size = 260, mirror = false }) => {
  const limbs = limbProps(color);

  return (
    <svg
      width={size}
      height={size * 1.36}
      viewBox="0 0 220 300"
      style={{ transform: mirror ? "scaleX(-1)" : undefined }}
    >
      <polygon points="70,60 85,20 95,55 110,15 120,55 135,20 150,60" fill={color} />
      <circle cx="110" cy="72" r="34" fill={color} />

      {pose === "crouch" && (
        <g>
          <line x1="110" y1="106" x2="92" y2="180" {...limbs} />
          <line x1="92" y1="180" x2="68" y2="232" {...limbs} />
          <line x1="92" y1="180" x2="126" y2="238" {...limbs} />
          <line x1="103" y1="132" x2="58" y2="168" {...limbs} />
          <line x1="103" y1="132" x2="138" y2="178" {...limbs} />
        </g>
      )}

      {pose === "focus" && (
        <g>
          <line x1="110" y1="106" x2="110" y2="188" {...limbs} />
          <line x1="110" y1="220" x2="60" y2="230" {...limbs} />
          <line x1="110" y1="220" x2="160" y2="230" {...limbs} />
          <line x1="110" y1="140" x2="72" y2="196" {...limbs} />
          <line x1="110" y1="140" x2="148" y2="196" {...limbs} />
        </g>
      )}

      {pose === "dash" && (
        <g>
          <line x1="110" y1="106" x2="140" y2="170" {...limbs} />
          <line x1="140" y1="170" x2="180" y2="150" {...limbs} />
          <line x1="140" y1="170" x2="100" y2="250" {...limbs} />
          <line x1="122" y1="128" x2="50" y2="110" {...limbs} />
          <line x1="122" y1="128" x2="168" y2="190" {...limbs} />
        </g>
      )}

      {pose === "triumph" && (
        <g>
          <line x1="110" y1="106" x2="110" y2="190" {...limbs} />
          <line x1="110" y1="190" x2="80" y2="255" {...limbs} />
          <line x1="110" y1="190" x2="140" y2="255" {...limbs} />
          <line x1="110" y1="130" x2="55" y2="70" {...limbs} />
          <line x1="110" y1="130" x2="165" y2="70" {...limbs} />
        </g>
      )}
    </svg>
  );
};
