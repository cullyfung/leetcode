import { expect, describe, test } from 'vitest';
import { romanToInt } from './romanToInt';

describe('romanToInt', () => {
  test('romanToInt', () => {
    expect(romanToInt('LVIII')).toBe(58);
    expect(romanToInt('MCMXCIV')).toBe(1994);
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
  });
});
