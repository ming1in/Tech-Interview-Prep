/**
 * The binary cardinality of a number is the total number of 1's it contains in it binary 
 * representation. For example, the decimal integer (20) base 10 corresponds to the binary
 * number (10100) base 2, so the binary cardinality is 2
 * 
 * Given a array of decimal integers, first, sort it by ascending binary cardinality, then
 * by ascending decimal value, and return the resulting array
 * 
 * Example 
 * n = 4
 * nums = [1,2,3,4]
 * 
 * The binary cardinality of each element of the array nums:
 *  - (1) base 10 -> (1) base 2, so 1's binary cardinality is 1
 *  - (2) base 10 -> (10) base 2, so 2's binary cardinality is 1
 *  - (3) base 10 -> (11) base 2, so 3's binary cardinality is 2
 *  - (4) base 10 -> (100) base 2, so 4's binary cardinality is 1
 * 
 * Sort the array by ascending binary cardinality and then by ascending decimal value:[1,2,4,3]. 
 * Note that 1,2, and 4 are in ascending decimal order because they all have a binary 
 * cardinality of 1, and 3 is ordered last because its binary cardinality is 2.
 * 
 * Function Description
 * Complete the function cardinalitySort in the editor below.
 * 
 * cardinalitySort has the following parameter(s):
 *  int nums[n]: an array of integers
 * Returns:
 *  int[n]: the integer array nums sorted by ascending binary cardinality
 * 
 * Constraints
 *  1 <= n <= 10^5
 *  1 <= nums[i] <= 10^6
 * 
 *     
 */

const assert = require('assert')

function cardinalitySort(nums) {
  
}


/**
 * The binary cardinality of each integer in nums is :
 *  - (31) base 10 -> (11111) base 2, so 31's binary cardinality is 5
 *  - (15) base 10 -> (1111) base 2, so 15's binary cardinality is 4
 *  - (7) base 10 -> (111) base 2, so 7's binary cardinality is 3
 *  - (3) base 10 -> (11) base 2, so 3's binary cardinality is 2
 *  - (2) base 10 -> (10) base 2, so 2's binary cardinality is 1
 *
 * Sort the array by ascending binary cardinality and then by ascending decimal
 * value: numsSorted = [2,3,7,15,31]
 */
assert.equal(cardinalitySort([31, 15, 7, 3, 2]), [2, 3, , 7, 15, 21])

/**
 * The binary cardinality of each integer in nums is :
 *  - (3) base 10 -> (11) base 2, so 3's binary cardinality is 2
 *
 * Sort the array by ascending binary cardinality and then by ascending decimal
 * value: numsSorted = [3]
 */
assert.equal(cardinalitySort([3]), [3])

/**
 * The binary cardinality of each integer in nums is :
 *  - (1) base 10 -> (1) base 2, so 1's binary cardinality is 1
 *  - (2) base 10 -> (10) base 2, so 2's binary cardinality is 1
 *  - (3) base 10 -> (11) base 2, so 3's binary cardinality is 2
 *  - (4) base 10 -> (100) base 2, so 4's binary cardinality is 1
 *  - (5) base 10 -> (101) base 2, so 5's binary cardinality is 2
 * 
 * Sort the array by ascending binary cardinality and then by ascending decimal
 * value: numsSorted = [1,2,3,4,5]
 */
assert.equal(cardinalitySort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])

