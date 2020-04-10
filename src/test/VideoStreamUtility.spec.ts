import { TimecodeUtility, ITimecodeObject, VideoStreamUtility } from '..';

describe('VideoStreamUtility', () =>
{
  it('test fromFrames', () =>
  {
    const obj: ITimecodeObject = {
      hours: 2,
      minutes: 33,
      seconds: 3,
      frames: 20
    };

    const timecode = TimecodeUtility.fromObject(obj);
    const videostream = VideoStreamUtility.fromFrameCount(timecode.toFrames(23), 23);

    expect(timecode).toEqual(videostream.length);
  });

  it('test fromSeconds', () =>
  {
    const obj: ITimecodeObject = {
      hours: 2,
      minutes: 33,
      seconds: 3,
      frames: 0
    };

    const timecode = TimecodeUtility.fromObject(obj);
    const videostream = VideoStreamUtility.fromSeconds(timecode.toSeconds(), 23);

    expect(timecode).toEqual(videostream.length);
  });
});