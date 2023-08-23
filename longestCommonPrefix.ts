/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let m = strs.length;
  let n = strs[0].length;
  for (let col = 0; col < n; col++) {
    for (let row = 1; row < m; row++) {
      let thisStr = strs[row],
        prevStr = strs[row - 1];
      if (
        col >= thisStr.length ||
        col >= prevStr.length ||
        thisStr.charAt(col) !== prevStr.charAt(col)
      ) {
        return strs[row].substring(0, col);
      }
    }
  }
  return strs[0];
}
// @lc code=end
export { longestCommonPrefix };
