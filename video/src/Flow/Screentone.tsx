import React from "react";
import { INK } from "./constants";

export const Screentone: React.FC<{ opacity?: number; size?: number }> = ({
  opacity = 0.15,
  size = 10,
}) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      opacity,
      backgroundImage: `radial-gradient(circle, ${INK} 1.5px, transparent 1.6px)`,
      backgroundSize: `${size}px ${size}px`,
    }}
  />
);
