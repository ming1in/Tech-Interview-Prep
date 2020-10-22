/**
 * https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists&h_r=next-challenge&h_v=zen
 */

const DoublyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
};

const DoublyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    let node = new DoublyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }
};

function sortedInsert(head, data) {
  var current = head
  var newNode = new DoublyLinkedListNode(data)

  if (head === null) { //if list is empty
    head = newNode
  } else if (head.data >= data) { // is node is inserted in beginning
    newNode.next = head
    head.prev = newNode
    head = newNode
  } else {
    while (current.next !== null && current.next.data < data) { // traverse list until you hit node where the next is greater than the new node
      current = current.next
    }
    
    newNode.next = current.next
    current.next = newNode
    newNode.prev = current
  }

  return head
}