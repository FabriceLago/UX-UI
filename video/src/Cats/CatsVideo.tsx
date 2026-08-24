import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { TitleScene } from "./TitleScene";
import { FactScene } from "./FactScene";
import { OutroScene } from "./OutroScene";
import { FACTS, INTRO_DURATION, FACT_DURATION } from "./constants";

export const CatsVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={INTRO_DURATION}>
        <TitleScene />
      </Sequence>
      {FACTS.map((fact, i) => (
        <Sequence
          key={fact.text}
          from={INTRO_DURATION + i * FACT_DURATION}
          durationInFrames={FACT_DURATION}
        >
          <FactScene fact={fact.text} bg={fact.bg} catColor={fact.catColor} />
        </Sequence>
      ))}
      <Sequence from={INTRO_DURATION + FACTS.length * FACT_DURATION}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
