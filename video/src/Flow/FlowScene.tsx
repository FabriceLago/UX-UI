import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { PanelFrame } from "./PanelFrame";
import { SpeedLines } from "./SpeedLines";
import { InkFigure } from "./InkFigure";
import { INK, ACCENT, PAPER } from "./constants";

export const FlowScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const flash = interpolate(frame, [0, 6, 16], [1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rotation = frame * 1.4;
  const textScale = spring({ frame: frame - 14, fps, config: { damping: 8, mass: 0.6 } });
  const dashX = interpolate(frame, [10, 60], [-60, 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneFade = interpolate(
    frame,
    [0, 20, 400, 420],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <PanelFrame bg={ACCENT}>
      <AbsoluteFill style={{ opacity: sceneFade }}>
        <SpeedLines color={PAPER} opacity={0.9} rotation={rotation} />
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative", transform: `translateX(${dashX}px)` }}>
            <div style={{ position: "absolute", opacity: 0.25, transform: "translateX(-40px)" }}>
              <InkFigure pose="dash" size={320} color={PAPER} />
            </div>
            <div style={{ position: "absolute", opacity: 0.4, transform: "translateX(-20px)" }}>
              <InkFigure pose="dash" size={320} color={PAPER} />
            </div>
            <InkFigure pose="dash" size={320} color={INK} />
          </div>
          <div
            style={{
              marginTop: 40,
              fontFamily: "'Arial Black', Impact, Helvetica, sans-serif",
              fontSize: 120,
              fontWeight: 900,
              color: PAPER,
              letterSpacing: 4,
              transform: `scale(${textScale}) rotate(-2deg)`,
              WebkitTextStroke: `4px ${INK}`,
              textShadow: `8px 8px 0 ${INK}`,
            }}
          >
            LE FLOW.
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill
        style={{ background: PAPER, opacity: flash, pointerEvents: "none" }}
      />
    </PanelFrame>
  );
};
