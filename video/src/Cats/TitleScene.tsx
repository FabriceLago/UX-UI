import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { BouncingCat } from "./BouncingCat";
import { PawPrint } from "./PawPrint";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 10, mass: 0.8 } });
  const subOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #ffb199, #ff8a5b)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <PawPrint key={i} index={i} />
      ))}
      <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <BouncingCat color="#7b4b3a" size={140} delay={0} x={-40} />
        <BouncingCat color="#ffcf5c" size={140} delay={8} x={40} />
      </div>
      <div
        style={{
          fontSize: 110,
          fontWeight: 800,
          color: "#fff",
          transform: `scale(${titleScale})`,
          textShadow: "0 6px 16px rgba(0,0,0,0.3)",
        }}
      >
        Les Chats
      </div>
      <div style={{ fontSize: 36, color: "#fff", opacity: subOpacity, marginTop: 10 }}>
        Quelques choses à savoir sur nos amis félins
      </div>
    </AbsoluteFill>
  );
};
