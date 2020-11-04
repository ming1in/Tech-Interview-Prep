const BinaryTreeNode = require('../BinaryTreeNode')

/** Example Tree #1
 *
 *        1
 *       / \
 *      2   3
 *     / \
 *    4   5
 *
 */
var BinaryTree2 = new BinaryTreeNode(1)
BinaryTree2.left = new BinaryTreeNode(2)
BinaryTree2.right = new BinaryTreeNode(3)
BinaryTree2.left.left = new BinaryTreeNode(4)
BinaryTree2.left.right = new BinaryTreeNode(5)

module.exports = BinaryTree2