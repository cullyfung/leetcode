/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } as Record<string, number>;

  let ret = 0;
  let pre = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    pre = map[s[i + 1]] || 0;
    const current = map[s[i]];
    if (current >= pre) {
      ret += current;
    } else {
      ret -= current;
    }
  }
  return ret;
}
// @lc code=end

export { romanToInt };
