function Preorder(root) {
  if (root) {
    console.log(root)
    Preorder(root.left)
    Preorder(root.right)
  }
}

module.export = Preorder