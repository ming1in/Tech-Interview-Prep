  /**
* @description performs postorder traversals starting from a given node
*
* O(n) time-space complexity
*
* @param {*} node where traversal is started
*/
function Postorder(root) {
  if (root) {
    Postorder(root.left)
    Postorder(root.right)
    console.log(root)
  }
}

module.export = Postorder