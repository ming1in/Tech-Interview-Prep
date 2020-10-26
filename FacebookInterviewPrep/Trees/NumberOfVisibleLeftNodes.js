/**
 * Number of Visible Nodes

There is a binary tree with N nodes. You are viewing the tree from its 
left side and can see only the leftmost nodes at each level. Return the 
number of visible nodes.

Note: You can see only the leftmost nodes, but that doesn't mean they have to be left nodes. The leftmost node at a level could be a right node.

Signature
int visibleNodes(Node root) {

Input
The root node of a tree, where the number of nodes is between 1 and 1000, and the value of each node is between 0 and 1,000,000,000

Output
An int representing the number of visible nodes.
Example
            8  <------ root
           / \
         3    10
        / \     \
       1   6     14
          / \    /
         4   7  13
         
output = 4

Resources:
https://www.youtube.com/watch?v=jCqIr_tBLKs
 */

// Add any extra import statements you may need here

const Queue = require('../../DataStructures/Queue')

// Definition for a binary tree node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Add any helper functions you may need here
var sum = 0

/**
 * @description return the number of visible nodes from left side. This is done
 * by traversing through the entire node checking the left most nodes first. If 
 * a left most node is found on a new level it can be seen from the left side.
 * 
 * This has a O(n) time complexity, n = # of nodes, because we are traversing the 
 * tree only once
 * 
 * @param {*} root node
 * @param {*} level level of root node
 * @param {*} maxLevel deepest level traversed up to this point
 */
function visibleNodesHelper(root, level, maxLevel) {
  if (root === null) {
    return
  }
  
  //checks if a deeper level has been found. First node to be 
  //traversed at this level is the left most node
  if (level > maxLevel[0]) {
    sum++
    maxLevel[0] = level
  }

  //recur to traverse the tree checking left nodes first.
  //If right nodes are checked first it will return nodes visible 
  //from a left side view
  visibleNodesHelper(root.left, level + 1, maxLevel)
  visibleNodesHelper(root.right, level +1, maxLevel )
}

/**
 * @description returns the number of visible nodes from the left side
 * @param {*} root node
 */
function visibleNodes(root) {
  // Write your code here
  var maxLevel = [0]
  sum = 0
  visibleNodesHelper(root, 1, maxLevel)
  return sum
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var root1 = new TreeNode(8);
root1.left = new TreeNode(3);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(6);
root1.left.right.left = new TreeNode(4);
root1.left.right.right = new TreeNode(7);
root1.right.right = new TreeNode(14);
root1.right.right.left = new TreeNode(13);
var expected_1 = 4;
var output_1 = visibleNodes(root1);
check(expected_1, output_1);

var root2 = new TreeNode(10);
root2.left = new TreeNode(8);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(5);
root2.left.left.right.right = new TreeNode(6);
root2.right.left = new TreeNode(14);
root2.right.right = new TreeNode(16);
var expected_2 = 5;
var output_2 = visibleNodes(root2);
check(expected_2, output_2);

// Add your own test cases here