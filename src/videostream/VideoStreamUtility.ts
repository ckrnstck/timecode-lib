import { ITimecodeObject } from "../timecode/ITimecodeObject";
import { TimecodeUtility } from "../timecode/TimecodeUtility";

import { IVideoStream } from "./IVideoStream";
import { VideoStream } from "./VideoStream";

export class VideoStreamUtility
{
  public static fromFrameCount(frameCount: number, framerate: number): IVideoStream
  {
    const obj: ITimecodeObject = {
      hours: Math.floor(frameCount / (framerate * 60 * 60)) % 24,
      minutes: Math.floor(frameCount / (framerate * 60)) % 60,
      seconds: Math.floor(frameCount / framerate) % 60,
      frames: frameCount % framerate
    };

    const timecode = TimecodeUtility.fromObject(obj);

    return new VideoStream(timecode, framerate);
  }

  public static fromSeconds(seconds: number, framerate: number): IVideoStream
  {
    const obj: ITimecodeObject = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      frames: 0
    };

    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    const minutes = Math.floor(seconds / 60);

    seconds -= minutes * 60;
    const frames = seconds * framerate;

    obj.hours = hours;
    obj.minutes = minutes;
    obj.seconds = seconds;
    obj.frames = frames;

    const timecode = TimecodeUtility.fromObject(obj);

    return new VideoStream(timecode, framerate);
  }
}