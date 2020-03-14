import { ITimecode } from "./ITimecode";

export class Timecode implements ITimecode
{
  constructor(public hours: number = 0,
    public minutes: number = 0,
    public seconds: number = 0,
    public frames: number = 0)
  {
  }

  public toTimecodeString(framesSeparator: string = '.', timeSeparator: string = ':'): string
  {
    return this.hours.toString().padStart(2, '0')
      + timeSeparator
      + this.minutes.toString().padStart(2, '0')
      + timeSeparator
      + this.seconds.toString().padStart(2, '0')
      + framesSeparator
      + this.frames.toString().padStart(2, '0');
  }

  public toString()
  {
    return this.toTimecodeString();
  }
}