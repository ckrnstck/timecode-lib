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

  public static fromSeconds(secondsInput: number, framerate: number): IVideoStream
  {
    const frames = Math.floor((secondsInput % 1) * framerate);
    let seconds = Math.floor(secondsInput);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    minutes = minutes % 60;
    seconds = seconds % 60;

    const obj: ITimecodeObject = {
      hours,
      minutes,
      seconds,
      frames
    };

    const timecode = TimecodeUtility.fromObject(obj);

    return new VideoStream(timecode, framerate);
  }
}