

function Inorder(root) {
  if (root) {
    Inorder(root.left)
    console.log(root)
    Inorder(root.right)
  }
}

module.export = Inorder