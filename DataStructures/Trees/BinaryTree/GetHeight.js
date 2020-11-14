const bt1  = require("../../../Seed/BinaryTree1")

function GetHeight(root) {
  if (!root) {
    return 0
  } else {
    var leftSubTree = GetHeight(root.left) + 1
    var rightSubTree = GetHeight(root.right) + 1
  }

  return Math.max(leftSubTree, rightSubTree)
}

module.exports = GetHeight