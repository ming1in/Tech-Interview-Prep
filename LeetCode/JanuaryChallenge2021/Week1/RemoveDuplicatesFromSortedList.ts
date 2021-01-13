

function deleteDuplicates(head: ListNode | null): ListNode | null {

  var current = head
 
  while (current.next !== null) {

    var temp = current.next
    while (current.val === temp.val || temp.next.val === temp.next.next.val) {
      temp = temp.next
    }   

    current.next = temp
    current = current.next
  }

  return head
};