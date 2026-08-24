import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { BouncingCat } from "./BouncingCat";
import { PawPrint } from "./PawPrint";

export const FactScene: React.FC<{
  fact: string;
  bg: [string, string];
  catColor: string;
}> = ({ fact, bg, catColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = spring({ frame: frame - 10, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${bg[0]}, ${bg[1]})`,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <PawPrint key={i} index={i} />
      ))}
      <BouncingCat color={catColor} size={240} delay={0} />
      <div
        style={{
          marginTop: 40,
          opacity: textOpacity,
          transform: `translateY(${(1 - textY) * 30}px)`,
          fontSize: 52,
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          maxWidth: 1100,
          textShadow: "0 4px 12px rgba(0,0,0,0.25)",
          padding: "0 60px",
        }}
      >
        {fact}
      </div>
    </AbsoluteFill>
  );
};
