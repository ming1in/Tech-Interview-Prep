const BinaryTreeNode = require('../BinaryTreeNode')


/**
 * 
 *            1
 *         /   \
 *       2       3
 *     /  \     /  \
 *   4     5   6    7
 *              \    \
 *               8    9
 */
var BinaryTree4 = new BinaryTreeNode(1)
BinaryTree4.left = new BinaryTreeNode(2)
BinaryTree4.right = new BinaryTreeNode(3)
BinaryTree4.left.left = new BinaryTreeNode(4)
BinaryTree4.left.right = new BinaryTreeNode(5)
BinaryTree4.right.left = new BinaryTreeNode(6)
BinaryTree4.right.right = new BinaryTreeNode(7)
BinaryTree4.right.left.right = new BinaryTreeNode(8)
BinaryTree4.right.right.right = new BinaryTreeNode(9) 


module.exports = BinaryTree4