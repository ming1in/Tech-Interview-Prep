const BT4 = require('./Seed/BinaryTree4')

function topViewUtil(node, minHd, maxHd, hd) {
  if (!node) {
     return
  }
  
  if (hd > maxHd[0]) {
    console.log(node.data)
    maxHd[0] = hd
  } else if (hd < minHd[0]) {
    console.log(node.data)
    minHd[0] = hd
  }

  topViewUtil(node.left, minHd, maxHd, hd - 1)
  topViewUtil(node.right, minHd, maxHd, hd + 1)
}

function TopView(root) {
  var minHd = [0]
  var maxHd = [0]

  console.log(root.data)

  topViewUtil(root, minHd, maxHd, 0)
}

TopView(BT4)