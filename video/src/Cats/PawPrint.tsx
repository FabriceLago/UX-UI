import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const PawPrint: React.FC<{ index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const seed = (index * 137) % width;
  const speed = 0.6 + (index % 3) * 0.25;
  const y = height - ((frame * speed + index * 90) % (height + 200));
  const opacity = interpolate(
    y,
    [-100, 100, height - 300, height - 100],
    [0, 0.45, 0.45, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const rotate = (index * 47) % 360;

  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        left: seed,
        top: y,
        opacity,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <ellipse cx="50" cy="68" rx="26" ry="20" fill="#ffffff" />
      <ellipse cx="22" cy="35" rx="9" ry="12" fill="#ffffff" />
      <ellipse cx="43" cy="18" rx="9" ry="12" fill="#ffffff" />
      <ellipse cx="66" cy="18" rx="9" ry="12" fill="#ffffff" />
      <ellipse cx="87" cy="35" rx="9" ry="12" fill="#ffffff" />
    </svg>
  );
};
