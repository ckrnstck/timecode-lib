import { ITimecode } from "./ITimecode";
import { ITimecodeObject } from "./ITimecodeObject";
import { Timecode } from "./Timecode";

export class TimecodeUtility
{
  public static fromObject(obj: ITimecodeObject): ITimecode
  {
    return new Timecode(obj.hours, obj.minutes, obj.seconds, obj.frames);
  }
}