import { Timecode, TimecodeUtility, ITimecodeObject } from '../';

describe('TimecodeUtility', () =>
{
  describe('fromObject', () =>
  {
    it('should return the same object as from manual creation', () =>
    {
      const obj: ITimecodeObject = {
        hours: 2,
        minutes: 25,
        seconds: 8,
        frames: 12
      };

      const created = TimecodeUtility.fromObject(obj);
      const manual = new Timecode(obj.hours, obj.minutes, obj.seconds, obj.frames);

      expect(created).toEqual(manual);
    });
  });

  describe('fromString', () =>
  {
    it('should return the same object as from manual creation', () =>
    {
      const created = TimecodeUtility.fromString('03:00:40.00');
      const manual = new Timecode(3, 0, 40, 0);

      expect(created).toEqual(manual);
    });

    it('should return the same object as from manual creation, colon for frames', () =>
    {
      const created = TimecodeUtility.fromString('03:00:40:00');
      const manual = new Timecode(3, 0, 40, 0);

      expect(created).toEqual(manual);
    });

    it('should return the same object as from manual without frames', () =>
    {
      const created = TimecodeUtility.fromString('03:00:40');
      const manual = new Timecode(3, 0, 40, 0);

      expect(created).toEqual(manual);
    });
  });
});