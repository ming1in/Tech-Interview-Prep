const bt5  = require("./Seed/BinaryTree5")

  
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
    console.log(root.data)
  }
  return
}

Postorder(bt5)

// module.exports = Postorder