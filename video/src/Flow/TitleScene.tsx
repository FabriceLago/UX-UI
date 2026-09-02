import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { PanelFrame } from "./PanelFrame";
import { SpeedLines } from "./SpeedLines";
import { Screentone } from "./Screentone";
import { INK } from "./constants";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 9, mass: 0.7 } });
  const linesOpacity = interpolate(frame, [0, 15, 60, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <PanelFrame>
      <Screentone opacity={0.12} />
      <SpeedLines opacity={linesOpacity} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            fontFamily: "'Arial Black', Impact, Helvetica, sans-serif",
            fontSize: 220,
            fontWeight: 900,
            color: INK,
            letterSpacing: 6,
            transform: `scale(${titleScale}) rotate(-3deg)`,
            WebkitTextStroke: "6px " + INK,
          }}
        >
          FLOW
        </div>
        <div
          style={{
            marginTop: 10,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 34,
            fontWeight: 700,
            color: INK,
            opacity: subOpacity,
          }}
        >
          Trouver son rythme.
        </div>
      </AbsoluteFill>
    </PanelFrame>
  );
};
