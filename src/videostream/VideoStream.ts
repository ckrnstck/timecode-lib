import { ITimecode } from "../timecode/ITimecode";

import { IVideoStream } from "./IVideoStream";
import { VideoStreamUtility } from "./VideoStreamUtility";

export class VideoStream implements IVideoStream
{
  private _length: ITimecode;
  private _framerate: number;

  get length(): ITimecode
  {
    return this._length;
  }

  get framerate(): number
  {
    return this._framerate;
  }

  constructor(length: ITimecode, framerate: number)
  {
    this._length = length;
    this._framerate = framerate;
  }

  public addFrames(framesToAdd: number): IVideoStream
  {
    const thisFrames = this.countFrames();

    const newFrameCount = thisFrames + framesToAdd;

    return VideoStreamUtility.fromFrameCount(newFrameCount, this.framerate);
  }

  public seekToPercent(percent: number): IVideoStream
  {
    const percentValue = Math.floor((percent * this.countFrames()) / 100);

    return VideoStreamUtility.fromFrameCount(percentValue, this.framerate);
  }

  public countFrames(): number
  {
    let count = 0;

    count += this.length.hours * 60 * 60 * this.framerate;
    count += this.length.minutes * 60 * this.framerate;
    count += this.length.seconds * this.framerate;
    count += this.length.frames;

    return count;
  }
}