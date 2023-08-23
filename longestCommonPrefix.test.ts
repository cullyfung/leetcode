import { expect, describe, test } from 'vitest';
import { longestCommonPrefix } from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  test('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
