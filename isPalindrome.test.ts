import { describe, expect, test } from 'vitest';
import { isPalindrome } from './isPalindrome';

describe('test isPalindrome', () => {
  test('isPalindrome', () => {
    expect(isPalindrome(121)).toBeTruthy();
    expect(isPalindrome(-121)).toBeFalsy();
    expect(isPalindrome(10)).toBeFalsy();
  });
});
