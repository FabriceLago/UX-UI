import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { TitleScene } from "./TitleScene";
import { StruggleScene } from "./StruggleScene";
import { FocusScene } from "./FocusScene";
import { FlowScene } from "./FlowScene";
import { TriumphScene } from "./TriumphScene";
import { OutroScene } from "./OutroScene";
import {
  TITLE_DURATION,
  STRUGGLE_DURATION,
  FOCUS_DURATION,
  FLOW_DURATION,
  TRIUMPH_DURATION,
} from "./constants";

export const FlowVideo: React.FC = () => {
  let cursor = 0;
  const titleFrom = cursor;
  cursor += TITLE_DURATION;
  const struggleFrom = cursor;
  cursor += STRUGGLE_DURATION;
  const focusFrom = cursor;
  cursor += FOCUS_DURATION;
  const flowFrom = cursor;
  cursor += FLOW_DURATION;
  const triumphFrom = cursor;
  cursor += TRIUMPH_DURATION;
  const outroFrom = cursor;

  return (
    <AbsoluteFill>
      <Sequence from={titleFrom} durationInFrames={TITLE_DURATION}>
        <TitleScene />
      </Sequence>
      <Sequence from={struggleFrom} durationInFrames={STRUGGLE_DURATION}>
        <StruggleScene />
      </Sequence>
      <Sequence from={focusFrom} durationInFrames={FOCUS_DURATION}>
        <FocusScene />
      </Sequence>
      <Sequence from={flowFrom} durationInFrames={FLOW_DURATION}>
        <FlowScene />
      </Sequence>
      <Sequence from={triumphFrom} durationInFrames={TRIUMPH_DURATION}>
        <TriumphScene />
      </Sequence>
      <Sequence from={outroFrom}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
