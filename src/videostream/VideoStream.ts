import { ITimecodeObject, Timecode, TimecodeUtility, IVideoStream, VideoStreamUtility } from '../';

export class VideoStream implements IVideoStream
{
  private _length: Timecode;
  private _position: Timecode;
  private _framerate: number;

  get length(): Timecode
  {
    return this._length;
  }

  get position(): Timecode
  {
    return this._position;
  }

  get framerate(): number
  {
    return this._framerate;
  }

  constructor(length: ITimecodeObject, framerate: number)
  {
    this._length = TimecodeUtility.fromObject(length);
    this._framerate = framerate;

    this._position = TimecodeUtility.fromObject({
      hours: 0,
      minutes: 0,
      seconds: 0,
      frames: 0
    });
  }

  public addFrames(framesToAdd: number): void
  {
    const newFrameCount = this._position.toFrames(this.framerate) + framesToAdd;

    this._position = VideoStreamUtility.fromFrameCount(newFrameCount, this.framerate).length;
  }

  public seekToPercent(percent: number): void
  {
    const percentValue = Math.floor((percent * this.countFrames()) / 100);

    this._position = VideoStreamUtility.fromFrameCount(percentValue, this.framerate).length;
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