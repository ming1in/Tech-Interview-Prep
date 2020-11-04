
/**
 * @description traversals tree in order starting from a given node
 *
 * O(n) time-space complexity
 *
 * @param {*} node where traversal is started
 */
function Inorder(root) {
  if (root) {
    Inorder(root.left)
    console.log(root)
    Inorder(root.right)
  }
}

module.export = Inorder