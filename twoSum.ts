/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
export function twoSum(nums: number[], target: number): number[] {
  const valueToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (valueToIndex.has(need)) {
      return [valueToIndex.get(need), i];
    }
    valueToIndex.set(nums[i], i);
  }
  return [];
}
// @lc code=end
