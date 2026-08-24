import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { CatSVG } from "./CatSVG";

export const BouncingCat: React.FC<{
  color?: string;
  size?: number;
  delay?: number;
  x?: number;
}> = ({ color = "#ff8a5b", size = 260, delay = 0, x = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = Math.max(0, frame - delay);

  const entrance = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, mass: 0.6 },
  });

  const bounce = Math.sin((frame + delay) / 8) * 10;
  const wiggle = Math.sin((frame + delay) / 15) * 4;

  return (
    <div
      style={{
        transform: `translateX(${x}px) translateY(${(1 - entrance) * 200 - bounce}px) scale(${entrance}) rotate(${wiggle}deg)`,
      }}
    >
      <CatSVG color={color} size={size} />
    </div>
  );
};
