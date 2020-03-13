export interface ITimecodeObject
{
  hours: number;
  minutes: number;
  seconds: number;
  frames: number;
}

export class Timecode implements ITimecodeObject
{
  constructor(public hours: number = 0,
    public minutes: number = 0,
    public seconds: number = 0,
    public frames: number = 0)
  {
  }

  public toString(framesSeparator: string = '.', timeSeparator: string = ':'): string
  {
    return this.hours.toString().padStart(2, '0')
      + timeSeparator
      + this.minutes.toString().padStart(2, '0')
      + timeSeparator
      + this.seconds.toString().padStart(2, '0')
      + framesSeparator
      + this.frames.toString().padStart(2, '0');
  }
}

export class TimecodeUtility
{
  public static fromObject(obj: ITimecodeObject)
  {
    return new Timecode(obj.hours, obj.minutes, obj.seconds, obj.frames);
  }
}