import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { PanelFrame } from "./PanelFrame";
import { Screentone } from "./Screentone";
import { InkFigure } from "./InkFigure";
import { INK } from "./constants";

export const TriumphScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 11, mass: 0.7 } });
  const textOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const glow = Math.sin(frame / 20) * 8;

  return (
    <PanelFrame>
      <Screentone opacity={0.1} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <svg width={700} height={700} viewBox="0 0 700 700" style={{ position: "absolute" }}>
          <circle
            cx="350"
            cy="350"
            r={220 + glow}
            fill="none"
            stroke={INK}
            strokeWidth={3}
            opacity={0.25}
          />
        </svg>
        <div style={{ transform: `scale(${entrance})` }}>
          <InkFigure pose="triumph" size={320} />
        </div>
        <div
          style={{
            marginTop: 30,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 56,
            fontWeight: 800,
            color: INK,
            opacity: textOpacity,
            textAlign: "center",
          }}
        >
          Dans le flow.
        </div>
      </AbsoluteFill>
    </PanelFrame>
  );
};
