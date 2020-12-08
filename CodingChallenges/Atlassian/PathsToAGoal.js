/**
 * Given a number line from 0 to n and a string denoting a sequence of moves, determine the number of subsequences of those 
 * moves that lead from a given point x to end at another point y. Moves will be given as a sequence of l and r instructions.
 * An instruction l = left movement, so from position j the new position is j - 1, and an instruction r = right movement, so from 
 * position j the new position would be j + 1
 * 
 * For example, given a number line from 0 to 6, and a sequence of moves rrrlrlr, the number of subsequences that lead from 1 to 4
 * on the number line is 3, as shown below
 * 
 * Note: Subsequences are created by deleting 0 or more elements from a sequence without changing
 * the order. Return the answer modulo ((10^9) + 7)
 * 
 * Function Description
 * Complete the function distinctMoves in the editor below. The function must return an integer
 * that represents the number of distinct subsequences. As this number may be large, return the 
 * value modulo (10^9)+7
 * 
 * distinctMoves has the following parameter(s):
 *  s: a string that represents a sequence of moves 
 *  n: an integer that represents the upper bound of the number line
 *  x: an integer that represents the starting point
 *  y: an integer that represents the ending point
 */

const assert = require('assert')

function distinctMoves(s, n, x, y) {
  
}

assert.equal(distinctMoves('rrlrlr', 6, 1, 2), 7)
