/**
 * Search an element in a circular sorted array
 * 
 * https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
 */

function SearchCircularSortedArrayUtil(array) {
  
}

function SearchCircularSortedArray(element, array) {
  var pivotIdx 

  for (let i = 0; i < array.length; i++){
    if (array[i] > array[i + 1]) {
      pivotIdx = i
      break
    }
  }

  //check if element your searching for is the pivot
  if (element === array[pivotIdx]) {
    return pivotIdx
  }
  
  if (element > array[0]) {
    //search left of pivot
  } else {
    //search right of pivot
  }
}
SearchCircularSortedArray(1, [3, 4, 5, 1, 2]) // 3

// SearchCircularSortedArray(3, [5, 6, 7, 8, 9, 10, 1, 2, 3]) // 8
// SearchCircularSortedArray(30, [5, 6, 7, 8, 9, 10, 1, 2, 3]) // Not Found
// SearchCircularSortedArray(10, [30, 40, 50, 10, 20]) // 3


