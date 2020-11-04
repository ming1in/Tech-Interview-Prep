function Postorder(root) {
  if (root) {
    Postorder(root.left)
    Postorder(root.right)
    console.log(root)
  }
}

module.export = Postorder