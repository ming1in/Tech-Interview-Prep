class SLLNode{
  constructor(data) {
    this.data = data
    this.next = null
  }
}

function MergeSortedLinkedLists(head1, head2) {
  if (!head1) {
    return head2
  }

  if (!head2) {
    return head1
  }

  if (head1.data < head2.data) {
    head1.next = MergeSortedLinkedLists(head1.next, head2)
    return head1
  } else{
    head2.next = MergeSortedLinkedLists(head1, head2.next)
    return head2
}
}

function printSLL(head) {
  var current = head
  var list = []
  
  while (current) {
    list.push(current.data)
    current = current.next
  }

  console.log(list)
  return list
}

var head1 = new SLLNode(1)
head1.next = new SLLNode(3)
head1.next.next = new SLLNode(5) 
  
var head2 = new SLLNode(0)
head2.next = new SLLNode(2)
head2.next.next = new SLLNode(4)

var merged = MergeSortedLinkedLists(head1, head2)

printSLL(merged)
