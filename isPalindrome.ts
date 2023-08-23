/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  debugger;
  if (x < 0) {
    return false;
  }

  let temp = x;
  let y = 0;
  while (temp > 0) {
    // 取最后一位数
    const lastNum = temp % 10;
    temp = Math.floor(temp / 10);
    y = y * 10 + lastNum;
  }

  return x === y;
}
// @lc code=end
export { isPalindrome };
