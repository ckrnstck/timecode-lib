import { expect,assert } from 'chai';
import { describe, it } from 'mocha';

import { Timecode } from '../index';

describe('Timecode', () =>
{
  it('should output timecode with valid inputs', () =>
  {
    // arrange
    const tc = new Timecode(2, 42, 39, 12);

    // act
    const result = tc.toString();

    // assert
    assert.equal(result, '02:42:39.12');
  });
});