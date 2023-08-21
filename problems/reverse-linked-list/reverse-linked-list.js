// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
  let cur = head;
  let next = cur.next;
  let nextNext = next.next;
  head.next = null

  while (nextNext !== null) {
    next.next = cur;
    
    cur = next;
    next = nextNext;
    nextNext = next.next;
  }

  next.next = cur
  return next
}
