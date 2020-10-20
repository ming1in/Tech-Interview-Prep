/**
 * LinkedList is the dynamic data structure, as we can add or remove 
 * elements at ease, and it can even grow as needed. Just like arrays, 
 * linked lists store elements sequentially, but don’t store the elements 
 * contiguously like an array.
 * 
 * https://www.geeksforgeeks.org/implementation-linkedlist-javascript/?ref=lbp
 */

class Node{
  constructor(element) {
    this.element = element
    this.next = null
  }

  constructor(element, next) {
    this.element = element
    this.next = next
  }
}

export class SinglyLinkedList{
  constructor() {
    this.head = null
    this.size = 0
  }

  /**
   * @param {element} to be added to linked list
   */
  add(element) {

    // creates a new node 
    var node = new Node(element);

    // to store current node 
    var current;

    // if list is Empty add the element and make it head 
    if (this.head == null)
      this.head = node;
    else {
      current = this.head;

      // iterate to the end of the list 
      while (current.next) {
        current = current.next;
      }

      // add node 
      current.next = node;
    }
    this.size++;
  }

  /**
   * 
   * @param {*} element to be added to linked list
   * @param {*} location where element should be added
   */
  insertAt(element, location) {
    if (index > 0 && index > this.size)
      return false;
    else {
      // creates a new node 
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the first index 
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find the position to insert 
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element 
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  /**
   * @returns element that was removed
   * @param {*} location where element should be removed
   */
  removeFrom(location) {
    if (index > 0 && index > this.size)
      return -1;
    else {
      var curr, prev, it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element 
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the position to remove an element 
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element 
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element 
      return curr.element;
    } 
  }

  /**
   * @returns element that was removed 
   * @returns -1 if element does not exist
   * @param {*} element that should be removed 
   */
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list 
    while (current != null) {
      // comparing element with current element if found then remove the and return true 
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1; 
  }

  /**
   * @returns index where first instance of element is found
   * @returns -1 if element is not found
   * @param {*} element you are searching for the index of within the list
   */
  indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterate over the list 
    while (current != null) {
      // compare each element of the list 
      // with given element 
      if (current.element === element)
      return count;
      count++;
      current = current.next;
    }

    // not found 
    return -1;
  } 

  /**
   * @returns True if size of list of greater than 0
   * @returns False if size of list is 0
   */
  isEmpty() {
    return this.size == 0; 
  }

  /**
   * @returns size of list
   */
  getSize() {
    return this.size
  }

  /**
   * @returns elements within linked list as a string
   */
  print() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
    return str
  }
}