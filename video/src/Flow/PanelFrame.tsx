import React from "react";
import { AbsoluteFill } from "remotion";
import { INK, PAPER } from "./constants";

export const PanelFrame: React.FC<{
  children: React.ReactNode;
  bg?: string;
}> = ({ children, bg = PAPER }) => (
  <AbsoluteFill style={{ background: INK }}>
    <AbsoluteFill
      style={{
        margin: 26,
        border: `10px solid ${INK}`,
        overflow: "hidden",
        background: bg,
      }}
    >
      {children}
    </AbsoluteFill>
  </AbsoluteFill>
);
