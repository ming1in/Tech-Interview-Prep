  /**
* @description performs preorder traversals starting from a given node
*
* O(n) time-space complexity
*
* @param {*} node where traversal is started
*/
function Preorder(root) {
  if (root) {
    console.log(root)
    Preorder(root.left)
    Preorder(root.right)
  }
}

module.export = Preorder