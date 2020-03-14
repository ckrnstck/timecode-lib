import { ITimecodeObject } from "./ITimecodeObject";

export interface ITimecode extends ITimecodeObject
{
  toTimecodeString(framesSeparator: string, timeSeparator: string): string;
}