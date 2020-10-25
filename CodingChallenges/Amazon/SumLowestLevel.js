/**
 * Problem: find the sum of all the nodes at the lowest level
 * 
 * Resources:
 * https://www.geeksforgeeks.org/sum-nodes-maximum-depth-binary-tree/
 */

class TreeNode{
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
   }
 }

var sum = 0
var maxLevel = -1
/**
 * @description this functions gets the sum of all the nodes at the lowest
 * level within a binary tree. While traversing through the nodes, compare the level
 * of each node. If the level of the current node is greater than maxLevel, 
 * set it to maxLevel and set that node's data to start sum. If the level of the
 * current node matches maxLevel, then it is added to sum. 
 * 
 * This has a O(n) time complexity, where n = number of nodes
 * 
 * @param {*} root node of tree
 * @param {*} level that the relative root node is on
 */
function SumLowestLevel(root, level) {
  if (!root) { //empty state
    return
  }

  //if deeper level is found reset sum with current node and set new maxLevel
  if (level > maxLevel) {
    sum = root.data
    maxLevel = level
  //if node is found on same level as maxLevel add to sum
  } else if (level === maxLevel) {
    sum += root.data
  }

  //Recur to traverse to next nodes and increment level as your moving down the tree
  SumLowestLevel(root.left, level + 1)
  SumLowestLevel(root.right, level + 1)
}

function bft(root) {
  var queue = []
  var current = root

  while (current !== null) {
    console.log(current.data)
    queue.push(current.left)
    queue.push(current.right)
    current = queue.shift()
  }
}

/**
 *      1
 *    /   \
 *   2     3
 *  / \   / \
 * 4   5 6   7
 */
var tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(7) 

bft(tree)

SumLowestLevel(tree, 0)
console.log(sum)