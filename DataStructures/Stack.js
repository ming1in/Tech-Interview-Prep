/**
 * @description Stack is a very useful data structure and has a wide range of application. 
 * Stack is a linear data structure in which addition or removal of element 
 * follows a particular order LIFO(Last in First Out)
 * 
 * https://www.geeksforgeeks.org/implementation-stack-javascript/
 */

export class Stack{
  constructor() {
    this.items =[]
  }

  /**
   * @param element, item to be added to top of the stack
   * @description adds element to top of the stack
   */
  push(element) {
    this.items.push(element)
  }

  /**
   * @description removes the element at the top of the stack
   * @returns element at the top of the stack
   */
  pop() {
    return this.items.pop()
  }

  /**
   * @returns element at the top of the stack without removing it
   */
  peek() {
    return this.items[this.items.length - 1]
  }

  /**
   * @returns True if there are no elements in the stack
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * @returns returns elements in stack as a string
   */
  printStack() {
    var string = ""

    this.items.forEach(item => {
      string += `${item}, `
    })

    return string
  }


}