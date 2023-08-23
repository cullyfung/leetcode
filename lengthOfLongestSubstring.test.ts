import { describe, expect, test } from 'vitest';
import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('test lengthOfLongestSubstring', () => {
  test('lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });
});
