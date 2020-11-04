const BT2 = require('./Seed/BinaryTree2')

function rightViewHelper(root, level, maxLevel) {
  if (!root) { //check empty state
    return
  }

  // if new level is reach it should be right most node at the level
  if (level > maxLevel[0]) { 
    maxLevel[0] = level
  }

  //recurs to right node first in order to traverse deeper levels from right most node
  rightViewHelper(root.right, level + 1, maxLevel)
  rightViewHelper(root.left, level + 1, maxLevel)
}

function RightView(root) {

  return rightViewHelper(root, 1, [0])
}

RightView(BT2)