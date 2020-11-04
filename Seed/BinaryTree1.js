const BinaryTreeNode = require('../DataStructures/Trees/BinaryTree')

/** Example Tree #1
 *
 *        1
 *       / \
 *      2   3
 *     / \
 *    4   5
 *
 */
var BinaryTree1 = new BinaryTreeNode(1)
BinaryTree1.left = new BinaryTreeNode(2)
BinaryTree1.right = new BinaryTreeNode(3)
BinaryTree1.left.left = new BinaryTreeNode(4)
BinaryTree1.left.right = new BinaryTreeNode(5)

module.exports = BinaryTree1