/**
Tree Constructor
Have the function TreeConstructor(strArr) take the array of strings stored in strArr, 
which will contain pairs of integers in the following format: (i1,i2), where i1 represents 
a child node in a tree and the second integer i2 signifies that it is the parent of i1. 

For example: 
if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:

     4
    /
   2
  / \
 1   7

which you can see forms a proper binary tree. Your program should, in this case, return 
the string true because a valid binary tree can be formed. If a proper binary tree cannot 
be formed with the integer pairs, then return the string false. All of the integers within 
the tree will be unique, which means there can only be one node in the tree with the given 
integer value.

Properties of Binary Trees:
 - there is one root node
 - every child node has a parent node
 - every parent node has a maximum of two children nodes

Examples:
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true

Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
 */

const assert = require('assert')

function TreeConstructor(strArr) {
  
  var parents = {} //{ parent: [child]}
  var children = {} //{ child: parent}

  for (let i = 0; i < strArr.length; i++) {
    const pair = strArr[i].replace('/[()]/g', '').split(',')
    const child = pair[0]
    const parent = pair[1]

    //update parent with child
    if (parents[parent]) {
      parents[parent].push(child)
    } else {
      parents[parent] = [child]
    }

    //check if parents has more than 2 children
    if (parents[parent].length > 2) {
      return false
    }

    //update children with parent
    if (children[child]) { //check if there is a child node with 2 parents
      return false
    } else {
      children[child] = parent
    }
  }

  return true
}

assert.equal(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]), false)
assert.equal(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]), true)