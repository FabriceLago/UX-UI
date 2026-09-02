import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { PanelFrame } from "./PanelFrame";
import { Screentone } from "./Screentone";
import { InkFigure } from "./InkFigure";
import { INK } from "./constants";

const Scribble: React.FC<{ x: number; y: number; delay: number; scale?: number }> = ({
  x,
  y,
  delay,
  scale = 1,
}) => {
  const frame = useCurrentFrame();
  const bob = Math.sin((frame + delay) / 10) * 12;
  const rotate = Math.sin((frame + delay) / 14) * 10;
  return (
    <svg
      width={70 * scale}
      height={70 * scale}
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        left: x,
        top: y + bob,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <path
        d="M15 60 Q 30 10 50 45 Q 70 80 85 30"
        stroke={INK}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const StruggleScene: React.FC = () => {
  const frame = useCurrentFrame();

  const textOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const figureShake = Math.sin(frame / 6) * 4;

  return (
    <PanelFrame>
      <Screentone opacity={0.18} />
      <Scribble x={260} y={220} delay={0} />
      <Scribble x={1500} y={260} delay={20} scale={0.8} />
      <Scribble x={1420} y={620} delay={45} scale={1.1} />
      <Scribble x={300} y={700} delay={10} scale={0.9} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ transform: `translateX(${figureShake}px)` }}>
          <InkFigure pose="crouch" size={320} />
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
          Distrait. Dispersé.
        </div>
      </AbsoluteFill>
    </PanelFrame>
  );
};
