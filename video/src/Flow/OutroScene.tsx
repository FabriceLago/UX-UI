import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { PanelFrame } from "./PanelFrame";
import { SpeedLines } from "./SpeedLines";
import { INK } from "./constants";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 15, 70, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const linesOpacity = interpolate(frame, [0, 15], [0, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <PanelFrame>
      <SpeedLines opacity={linesOpacity} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: titleOpacity }}>
        <div
          style={{
            fontFamily: "'Arial Black', Impact, Helvetica, sans-serif",
            fontSize: 160,
            fontWeight: 900,
            color: INK,
            letterSpacing: 6,
            WebkitTextStroke: `4px ${INK}`,
          }}
        >
          FLOW
        </div>
        <div
          style={{
            marginTop: 10,
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 28,
            fontWeight: 600,
            color: INK,
          }}
        >
          fait avec Remotion
        </div>
      </AbsoluteFill>
    </PanelFrame>
  );
};
