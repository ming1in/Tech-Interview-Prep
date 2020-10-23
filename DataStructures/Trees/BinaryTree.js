const Queue = require('../Queue')

class BinaryTreeNode{
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function height(root) {
  if (!root) {
    return 0
  } else {
    var leftSubTree = height(root.left) + 1
    var rightSubTree = height(root.right) + 1
  }

  return Math.max(leftSubTree, rightSubTree)
}

/**
 * @description prints the nodes at the given level
 * @param {*} root  
 * @param {*} level 
 */
function printLevel(root, level) {
  if (!root) {
    return
  }

  if (level == 1) {
    console.log(root.data)
    return root.data
  } else if (level > 1) {
    printLevel(root.left, level - 1)
    printLevel(root.right, level - 1)
  }
}
/**
 * @description https://www.geeksforgeeks.org/level-order-tree-traversal/
 * 
 * @param {*} root of tree
 */
function breadthFirst(root) {
  var queue = new Queue() 
  var current = root
  var traversal = []

  while (current != null){
    traversal.push(current.data) // 1. print or save current node
    queue.enqueue(current.left) // 2. enqueue left child
    queue.enqueue(current.right) //3. enqueue right child
    current = queue.dequeue() // 4. set current to next in queue
  }

  return traversal 
}


var root = new BinaryTreeNode(1)
root.left = new BinaryTreeNode(2)
root.right = new BinaryTreeNode(3)
root.left.left = new BinaryTreeNode(4)
root.left.right = new BinaryTreeNode(5)

console.log(breadthFirst(root))
