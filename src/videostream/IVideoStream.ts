import { ITimecode } from "../timecode/ITimecode";

export interface IVideoStream
{
  length: ITimecode;
  position: ITimecode;
  framerate: number;

  addFrames(framesToAdd: number): void;
  seekToPercent(percent: number): void;
  countFrames(): number;
}