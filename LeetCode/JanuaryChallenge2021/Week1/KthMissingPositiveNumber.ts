function findKthPositive(arr: number[], k: number): number {

  const temp = arr.length + k
  var idx = 0

  // iterate from 1 to temp which is the range of potential numbers
  for (let num = 1; num <= temp; num++) {
    
    // if we have checked all the numbers in arr
    if (idx >= arr.length) {
      k--
    
    // check if arr is in the correct order
    } else if (num !== arr[idx]) {
      k--
    } else {

      // when we finally run into a number from arr, check the next number in arr
      idx++
    }

    //when we found the kth number, after decrementing k
    if (k === 0) {
      return num
    }
  }




};

console.log(findKthPositive([2, 3, 4, 7, 11], 5))