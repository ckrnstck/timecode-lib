import { ITimecode } from "../timecode/ITimecode";

export interface IVideoStream
{
  length: ITimecode;
  framerate: number;

  addFrames(framesToAdd: number): IVideoStream;
  seekToPercent(percent: number): IVideoStream;
  countFrames(): number;
}