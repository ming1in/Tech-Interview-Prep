const BinaryTreeNode = require('../BinaryTreeNode')

/** Example Tree #1
 *
 *        1
 *      /   \
 *     2     3
 *    / \   / \
 *   4   5 6   7
 *
 */
var BinaryTree1 = new BinaryTreeNode(1)
BinaryTree1.left = new BinaryTreeNode(2)
BinaryTree1.right = new BinaryTreeNode(2)
BinaryTree1.right.left = new BinaryTreeNode(6)
BinaryTree1.right.right = new BinaryTreeNode(7)
BinaryTree1.left.left = new BinaryTreeNode(4)
BinaryTree1.left.right = new BinaryTreeNode(5)

module.exports = BinaryTree1