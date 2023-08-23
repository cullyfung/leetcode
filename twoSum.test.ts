import { describe, expect, test } from 'vitest';
import { twoSum } from './twoSum';

describe('twoSum test', () => {
  test('test', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toMatchInlineSnapshot(`
      [
        0,
        1,
      ]
    `);
  });
});
