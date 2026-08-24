import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { BouncingCat } from "./BouncingCat";
import { PawPrint } from "./PawPrint";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 10 } });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #f6d365, #fda085)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <PawPrint key={i} index={i + 20} />
      ))}
      <div style={{ display: "flex", gap: 10, marginBottom: 30 }}>
        <BouncingCat color="#4a4a4a" size={120} delay={0} x={-100} />
        <BouncingCat color="#e07a5f" size={150} delay={5} />
        <BouncingCat color="#f4a261" size={120} delay={10} x={100} />
      </div>
      <div
        style={{
          fontSize: 80,
          fontWeight: 800,
          color: "#fff",
          transform: `scale(${scale})`,
          textShadow: "0 6px 16px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        Merci d'avoir regardé !
      </div>
    </AbsoluteFill>
  );
};
