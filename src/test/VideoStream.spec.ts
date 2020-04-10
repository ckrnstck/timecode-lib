import { ITimecodeObject, VideoStream } from '../';

describe('VideoStream', () =>
{
  describe('ctor', () =>
  {
    it('should start at 00:00:00.00', () =>
    {
      const length: ITimecodeObject = {
        hours: 2,
        minutes: 6,
        seconds: 24,
        frames: 22
      };

      const startPosition: ITimecodeObject = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        frames: 0
      };

      const stream = new VideoStream(length, 23);
      expect(stream.position).toEqual(startPosition);
    });
  });

  describe('addFrames', () =>
  {
    it('should be at 00:08:13.20 when adding 12345 frames to a video with a framerate of 25', () =>
    {
      const length: ITimecodeObject = {
        hours: 1,
        minutes: 0,
        seconds: 0,
        frames: 0
      };

      const position: ITimecodeObject = {
        hours: 0,
        minutes: 8,
        seconds: 13,
        frames: 20
      };

      const stream = new VideoStream(length, 25);
      stream.addFrames(12345);

      expect(stream.position).toEqual(position);
    });
  });

  describe('seekToPercent', () =>
  {
    it('should be at 00:30:00.00 on a 1hr video when seeked to 50%', () =>
    {
      const length: ITimecodeObject = {
        hours: 1,
        minutes: 0,
        seconds: 0,
        frames: 0
      };

      const position: ITimecodeObject = {
        hours: 0,
        minutes: 30,
        seconds: 0,
        frames: 0
      };

      const stream = new VideoStream(length, 23);
      stream.seekToPercent(50);

      expect(stream.position).toEqual(position);
    });
  });
});