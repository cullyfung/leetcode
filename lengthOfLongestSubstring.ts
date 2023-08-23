/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let window = new Map();
  let left = 0,
    right = 0,
    res = 0;
  while (left < s.length) {
    let c = s[right];
    right++;
    window.set(c, (window.get(c) || 0) + 1);
    while (window.get(c) > 1) {
      let d = s[left];
      left++;
      window.set(d, window.get(d) - 1);
    }
    res = Math.max(res, right - left);
  }

  return res;
}
// @lc code=end
export { lengthOfLongestSubstring };
