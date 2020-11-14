const BinaryTreeNode = require('../BinaryTreeNode')

/**
 *
 *           13
 *         /   \
 *        8     25
 *      /  \   /  
 *     0    5 30

 */
var BinaryTree5 = new BinaryTreeNode(13)
BinaryTree5.left = new BinaryTreeNode(8)
BinaryTree5.right = new BinaryTreeNode(25)
BinaryTree5.left.left = new BinaryTreeNode(0)
BinaryTree5.left.right = new BinaryTreeNode(5)
BinaryTree5.right.left = new BinaryTreeNode(30)

module.exports = BinaryTree5
