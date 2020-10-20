/**
 * A Queue works on the FIFO(First in First Out) principle. Hence, 
 * it performs two basic operations that is addition of elements at 
 * the end of the queue and removal of elements from the front of the 
 * queue. Like Stack, Queue is also a linear data structure.
 * 
 * https://www.geeksforgeeks.org/implementation-queue-javascript/?ref=lbp
 */

export class Queue{
  constructor() {
    this.items = [];
  } 

  /**
   * @param {*} element that will be added to queue
   */
  enqueue(element) {
    // adding element to the queue 
    this.items.push(element);
  } 

  /**
   * @returns element that was removed from queue
   * @returns -1 if the queue is empty
   */
  dequeue() {
    if (this.isEmpty())
      return -1;
    return this.items.shift();
  } 

  /**
   * @returns the Front element of the queue without removing it.
   * @returns -1 if the queue is empty
   */
  front() {
    if (this.isEmpty())
      return -1;
    return this.items[0];
  } 

  /**
   * @returns True is queue is empty
   * @returns False if queue is not empty
   */
  isEmpty() {
    return this.items.length == 0;
  }

  /**
   * @returns elements in the queue as a string
   * @description prints elements in the queue
   */
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++)
      str += this.items[i] + " ";
    
    console.log(str)
    return str;
  } 
 }