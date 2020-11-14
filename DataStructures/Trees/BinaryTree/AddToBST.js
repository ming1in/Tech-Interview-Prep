const BinaryTreeNode = require('../BinaryTreeNode')
const BT5 = require('./Seed/BinaryTree5')

function add(item, root) {
  if (item > root.data) {
    if (root.right) {
      return add(item, root.right)      
    } else {
      root.right = new BinaryTreeNode(item)
    }
  } else if (item < root.data) {
    if (root.left) {
      return add(item, root.left)
    } else {
      root.left = new BinaryTreeNode(item)
    }
  }
}

add(60, BT5)
console.log(BT5.right.)