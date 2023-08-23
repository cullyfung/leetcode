/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let p1 = l1,
    p2 = l2;
  let dummy = new ListNode(-1);
  let p = dummy;
  let carry = 0;

  while (p1 !== null || p2 !== null || carry > 0) {
    let val = carry;
    if (p1 !== null) {
      val += p1.val;
      p1 = p1.next;
    }
    if (p2 !== null) {
      val += p2.val;
      p2 = p2.next;
    }
    carry = Math.floor(val / 10);
    val = val % 10;

    p.next = new ListNode(val);
    p = p.next;
  }
  return dummy.next;
}
// @lc code=end

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export { ListNode, addTwoNumbers };
