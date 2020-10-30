/**
 * https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 * 
 * Resources
 * https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/
 */

class SLLNode{
  constructor(data) {
    this.data = data
    this.next = null
  }
}

/**
 * @description this function returns the node where two linked list intersection.
 * This is done by keeping track of the nodes in one linked list in visitedNodes, and then
 * cross referencing that list with the second linked list.
 * 
 * This has a O(m+n) time complexity, where n = # of nodes in first linked list and
 * m = # of nodes in second linked list. This is because we are iterating through both 
 * linked list separately.
 * 
 * @param {*} rootA head of linked list
 * @param {*} rootB head of linked list
 */
function findIntersection(rootA, rootB) {
  var visitedNodes = []
  var currentA = rootA
  var currentB = rootB

  while (currentA) {
    visitedNodes.push(currentA)
    currentA = currentA.next
  }

  while (currentB) {
    if (visitedNodes.includes(currentB)) {
      return currentB
    }
    currentB = currentB.next
  }

}

var sll_1 = new SLLNode(1)
sll_1.next = new SLLNode(2);
sll_1.next.next = new SLLNode(3);
sll_1.next.next.next = new SLLNode(4);
sll_1.next.next.next.next = new SLLNode(5);
sll_1.next.next.next.next.next = new SLLNode(6);
sll_1.next.next.next.next.next.next = new SLLNode(7); 

var sll_2 = new SLLNode(10)
sll_2.next = new SLLNode(9);
sll_2.next.next = new SLLNode(8);
sll_2.next.next.next = sll_1.next.next.next; 

console.log(findIntersection(sll_1, sll_2))