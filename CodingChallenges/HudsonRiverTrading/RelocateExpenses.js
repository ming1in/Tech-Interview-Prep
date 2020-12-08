/**
 * A company has a list of expected revenues and payments for the upcoming year in chronological order. 
 * The problem is that at some moments in time the sum of previous payments can be larger than the total 
 * previous revenue, which would put the company in debt. To avoid this problem the company takes a very 
 * simple approach: it reschedules some expenses to the end of the year.
 * 
 * You are given an array of integers, where positive numbers represent revenue and negative numbers represent
 * expenses, all in chronological order. In one move you can relocate any expense(negative number) to the end of
 * the array. What is the minimum number of such relocations to make sure that the company never falls into debt(in 
 * other words: you need to ensure that there is no consecutive sequence of elements starting from the beginning of 
 * the array, that sums up to a negative number)?
 * 
 * You can assume that the sum of all elements in A is nonnegative
 * 
 * Write a function that, given an array A of N integers, returns the minimum number of relocations, so that company
 * never falls into debt
 * 
 * Examples 
 * 
 * 1. A = [10,-10,-1,-1,10], the function should return 1. It is enough to move -10 to the end of the array.
 * 2. A = [-1,-1,-1,-1,1,1,1,1], you function should return 3. the negative elements at the beginning must be 
 *    moved to the end to avoid the debt at the start of the year.
 * 3. A = [5,-2,-3,1], the answer is 0. The company balance is always nonnegative 
 * 
 * Write an efficient algorithm for the following assumptions
 *  - N is an integer within the range [1..100,000]
 *  - each element of array A is an integer within the range [-1000000000..1000000000]
 *  - sum of all elements in A is greater than or equal to 0
 */


const assert = require('assert')

function RelocateExpenses(A) {
  
}

assert.equal(RelocateExpenses([10, -10, -1, -1, 10]), 1)
assert.equal(RelocateExpenses([-1, -1, -1, -1, 1, 1, 1, 1]), 3)
assert.equal(RelocateExpenses([5, -2, -3, 1]), 0)
