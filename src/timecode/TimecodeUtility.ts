import { ITimecode } from "./ITimecode";
import { ITimecodeObject } from "./ITimecodeObject";
import { Timecode } from "./Timecode";

export class TimecodeUtility
{
  public static fromObject(obj: ITimecodeObject): ITimecode
  {
    return new Timecode(obj.hours, obj.minutes, obj.seconds, obj.frames);
  }

  public static fromString(input: string): ITimecode
  {
    const regExFramesDot = /^\d*:\d*:\d*\.\d*$/ig;
    const regExFramesColon = /^\d*:\d*:\d*\:\d*$/ig;

    const colonParts = input.split(':');

    let hours: number = parseInt(colonParts[0]);
    let minutes: number = parseInt(colonParts[1]);
    let seconds: number = parseInt(colonParts[2]);
    let frames = 0;

    if (input.match(regExFramesDot) != null)
    {
      const dotIndex = input.indexOf('.');
      frames = parseInt(input.substr(dotIndex + 1));
    }
    else if (input.match(regExFramesColon) != null)
    {
      frames = parseInt(colonParts[3]);
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