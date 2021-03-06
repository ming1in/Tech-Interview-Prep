
/**
 * left child: i * 2
 * right child: (i*2) + 1
 * parent: floor(i / 2)
 */
class MinHeap{
  constructor() {
      this.heap = [ null ]
  }

  /**
   * Method to add element to the MinHeap
   * 
   * 1. add element to the end of the Heap
   * 2. reheap
   * 
   * Time Complexity: O(log(n))
   * 
   * @param {Number} element to be added
   */
  add(element) { 
    this.heap.push(element)

    // check if heap has more than one 2 elements, if not no operations are needed
    if (this.heap.length > 2) { 
      var newElementIdx = this.heap.length - 1 //index of the new element

      while (this.heap[newElementIdx] < this.heap[Math.floor(newElementIdx / 2)]) { // is the new element smaller than its parent
        if (newElementIdx >= 1) { // check if newElement is at the root
          [this.heap[Math.floor(newElementIdx / 2)], this.heap[newElementIdx]] = [this.heap[newElementIdx], this.heap[Math.floor(newElementIdx / 2)]] //swap newElement with parent
          if (Math.floor(newElementIdx / 2) > 1) { //only update newElementIdx, if parent is not root
            newElementIdx = Math.floor(newElementIdx / 2) //update newElementIdx with parentIdx since we swapped
          } else {
            break; // break out of the while loop when elements have been reheaped
          }
        }
      }
    }

    return this.heap
  }

  /**
   * Method that removes the element at the root of the MinHeap
   * 
   * Time Complexity: O(log(n))
   */
  remove() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        };
        return smallest;
      };
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = 2 * i
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = 2 * i + 1;
        };
        left = 2 * i;
        right = 2 * i + 1;
        if (this.heap[left] == undefined || this.heap[right] == undefined) {
          break;
        };
      };
    } else if (this.heap.length == 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    };
    return smallest;
  }


  sort(){
    let result = new Array();
    while (this.heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  };

  toStringUtil(elementIdx, level) {
    var element = this.heap[elementIdx]
    var parentIdx = Math.floor(elementIdx / 2)
    var parent = this.heap[parentIdx]

    var result = ""

    for (let i = 0; i < level; i++){
      result.concat("--")
    }

    if (elementIdx > this.heap.length) {
      return
    }

    result.concat(`${element}\n`)
    result.concat(this.toStringUtil(elementIdx * 2, level + 1))
    result.concat(this.toStringUtil(((elementIdx * 2) + 1), level + 1))
    console.log(result)
    return result
  }

  toString() {
    return this.toStringUtil(1, 0)
  }
}

var heap = new MinHeap()
heap.add(18)
heap.add(10)
heap.add(90)
heap.add(82)
heap.add(55)
heap.add(33)
heap.add(15)
heap.add(47)
heap.add(25)

console.log(heap.heap)

heap.remove()
console.log(heap.heap)

