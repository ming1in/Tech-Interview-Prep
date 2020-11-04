const BinaryTreeNode = require('../BinaryTreeNode')

/** Example Tree #1
 *
 *         1
 *        / \
 *       2   3
 *      / \
 *     4   5
 *    /
 *   6
 *  /
 * 7
 *  
 */
var BinaryTree3 = new BinaryTreeNode(1)
BinaryTree3.left = new BinaryTreeNode(2)
BinaryTree3.right = new BinaryTreeNode(3)
BinaryTree3.left.left = new BinaryTreeNode(4)
BinaryTree3.left.right = new BinaryTreeNode(5)
BinaryTree3.left.left.left = new BinaryTreeNode(6)
BinaryTree3.left.left.left.left = new BinaryTreeNode(7)


module.exports = BinaryTree3