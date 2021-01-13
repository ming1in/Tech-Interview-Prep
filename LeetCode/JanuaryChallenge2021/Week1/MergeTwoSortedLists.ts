
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}
 


function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  var result: ListNode
  // base case: if one node is null return the other
  if (l1 === null) return l2
  if (l2 === null) return l1

  // return whichever node is smaller and recurse with respective next node
  if (l1.val <= l2.val) {
    result = l1
    result.next = mergeTwoLists(l1.next, l2)
  } else {
    result = l2
    result.next = mergeTwoLists(l1, l2.next)
  }

  return result
};