import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { PanelFrame } from "./PanelFrame";
import { Screentone } from "./Screentone";
import { InkFigure } from "./InkFigure";
import { INK, ACCENT } from "./constants";

export const FocusScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const toneOpacity = interpolate(frame, [0, durationInFrames], [0.12, 0.3]);
  const ringRadius = interpolate(frame, [30, durationInFrames], [40, 260], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringOpacity = interpolate(
    frame,
    [30, 60, durationInFrames - 60, durationInFrames],
    [0, 0.9, 0.9, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const textOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulse = 1 + Math.sin(frame / 12) * 0.03;

  return (
    <PanelFrame>
      <Screentone opacity={toneOpacity} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <svg
          width={800}
          height={800}
          viewBox="0 0 800 800"
          style={{ position: "absolute" }}
        >
          <circle
            cx="400"
            cy="400"
            r={ringRadius}
            fill="none"
            stroke={ACCENT}
            strokeWidth={6}
            strokeDasharray="14 10"
            opacity={ringOpacity}
          />
        </svg>
        <div style={{ transform: `scale(${pulse})` }}>
          <InkFigure pose="focus" size={300} />
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
          Respire. Concentre-toi.
        </div>
      </AbsoluteFill>
    </PanelFrame>
  );
};
