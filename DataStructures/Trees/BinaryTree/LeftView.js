const BT3 = require('./Seed/BinaryTree3')

function leftViewHelper(root, level, maxLevel) {
  if (!root) {
    return
  }

  if (level > maxLevel[0]) {
    console.log(root.data)
    maxLevel[0] = level
  }

  //recurs to left node first in order to traverse deeper levels from left most node
  leftViewHelper(root.left, level + 1, maxLevel)
  leftViewHelper(root.right, level+1, maxLevel)
}

function LeftView(root) {
  
  return leftViewHelper(root, 1, [0])
}

LeftView(BT3)