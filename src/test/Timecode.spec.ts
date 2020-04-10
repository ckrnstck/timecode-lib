import { Timecode } from '../';

describe('Timecode', () =>
{
  const timecode = new Timecode(1, 4, 43, 16);

  describe('toTimecodeString', () =>
  {
    it('should output 01:04:43.16 with default values', () =>
    {
      expect(timecode.toTimecodeString()).toBe('01:04:43.16');
    });

    it('should output 01:04:43:16 when using colon as frame seperator', () =>
    {
      expect(timecode.toTimecodeString(':')).toBe('01:04:43:16');
    });

    it('should output 01.04.43:16 when switching frame and time seperators', () =>
    {
      expect(timecode.toTimecodeString(':', '.')).toBe('01.04.43:16');
    });
  });

  describe('toSeconds', () =>
  {
    it('should output 3883 seconds', () =>
    {
      expect(timecode.toSeconds()).toBe(3883);
    });
  });

  describe('toFrames', () =>
  {
    it('should output 89325 frames with a framerate of 23', () =>
    {
      expect(timecode.toFrames(23)).toBe(89325);
    });
  });

  describe('toString', () =>
  {
    it('should output 01:04:43.16 with default values', () =>
    {
      expect(timecode.toString()).toBe('01:04:43.16');
    });
  });
});