/**
 * You are given a matrix A representing a chessboard with N rows and M columns. Each square 
 * of the chessboard contains an integer representing a points-based score. You have to place 
 * two rooks on the chessboard in such a way that they can not attack each other and the sum 
 * of points on their squares is maximal. Rooks in chess can only attack each other if they 
 * are in the same row or column.
 * 
 * For example,given a matrix as in the following picture:
 * 
 *     0  1
 *    ------
 * 0 | 1  4
 * 1 | 2  3
 * 
 * we can place rooks in two different ways:
 *  - One rook on A[0][0] = 1 and another rook on A[1][1] = 3. The sum of points on these squares is 4.
 *  - One rook on A[0][1] = 4 and another rook on A[1][0] = 2. The sum of points on these squares is 6.
 * 
 * Your task is to find the maximum sum of two squares of the chessboards on which the rooks can be placed.
 * In the example above, the answer is 6. We cannot, for example, place the rooks at A[0][1] and A[1][1](whose sum is 7),
 * as they would attack each other.
 * 
 * Write a function which, given a matrix A, returns a maximum sum that can be achieved by placing two non-attacking rooks
 * 
 * Write an efficient algorithm for the following assumptions
 *  - N and M are integers within the range [2..600]
 *  - each element of matrix A is an integer within the range[0..1,000,000,000]
 */

const assert = require('assert')
 
function MaxRook(A) {
  
}

assert.equal(MaxRook([[1, 4], [2, 3]]), 6)
assert.equal(MaxRook([[15, 1, 5], [16, 3, 8], [2, 6, 4]]), 23)
assert.equal(MaxRook([[12, 12], [12, 12], [0, 7]]), 24)
assert.equal(MaxRook([[1,2,14], [8, 3, 15]]), 22)

