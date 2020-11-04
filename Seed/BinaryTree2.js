const BinaryTreeNode = require('../DataStructures/Trees/BinaryTree')

/** Example Tree #1
 *
 *        1
 *      /   \
 *     2     3
 *    / \   / \
 *   4   5 6   7
 *
 */
var BinaryTree2 = new BinaryTreeNode(1)
BinaryTree2.left = new BinaryTreeNode(2)
BinaryTree2.right = new BinaryTreeNode(12)
BinaryTree2.right.left = new BinaryTreeNode(6)
BinaryTree2.right.right = new BinaryTreeNode(7)
BinaryTree2.left.left = new BinaryTreeNode(4)
BinaryTree2.left.right = new BinaryTreeNode(5)

module.exports = BinaryTree2