import { ITimecode } from "./ITimecode";
import { ITimecodeObject } from "./ITimecodeObject";
import { Timecode } from "./Timecode";

export class TimecodeUtility
{
  public static fromObject(obj: ITimecodeObject): Timecode
  {
    return new Timecode(obj.hours, obj.minutes, obj.seconds, obj.frames);
  }

  public static fromString(input: string): Timecode
  {
    const regExFramesDot = /^\d*:\d*:\d*\.\d*$/ig;
    const regExFramesColon = /^\d*:\d*:\d*\:\d*$/ig;

    const timeParts = input.split(':');

    let hours: number = parseInt(timeParts[0]);
    let minutes: number = parseInt(timeParts[1]);
    let seconds: number = parseInt(timeParts[2]);
    let frames = 0;

    if (input.match(regExFramesDot) != null)
    {
      const dotIndex = input.indexOf('.');
      frames = parseInt(input.substr(dotIndex + 1));
    }
    else if (input.match(regExFramesColon) != null)
    {
      frames = parseInt(timeParts[3]);
    }

    const obj = {
      hours,
      minutes,
      seconds,
      frames
    };

    return TimecodeUtility.fromObject(obj);
  }
}