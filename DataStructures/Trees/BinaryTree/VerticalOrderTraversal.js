const BT4 = require('./Seed/BinaryTree4')

/**
 * @description this is a helper function to find minimum and maximum horizontal distance 
 * a node is from the root
 * 
 * @param {*} node 
 * @param {*} min 
 * @param {*} max 
 * @param {*} hd 
 */
function findMinMaxHD(node, min, max, hd) {
  //base case: empty state
  if (!node) {
    return
  }
  
  //update min & max 
  if (hd > max[0]) {
    max[0] = hd
  } else if (hd < min[0]) {
    min[0] = hd
  }

  //recur for children nodes
  findMinMaxHD(node.left, min, max, hd - 1)
  findMinMaxHD(node.right, min, max, hd + 1)
}

function printVerticalLine(node, line, hd) {
  //empty state
  if (!node) {
    return
  }

  //check if node is in line
  if (hd === line) {
    console.log(node.data)
  }

  //recur for children node
  printVerticalLine(node.left, line, hd - 1)
  printVerticalLine(node.right, line, hd + 1)
}

function VerticalOrderTraversal(root) {
  
  var minHD = [0]
  var maxHD = [0]
  
  //update minHD & maxHD
  findMinMaxHD(root, minHD, maxHD, 0)

  console.log(minHD)
  console.log(maxHD)

  for (let i = minHD[0]; i < maxHD[0] + 1; i++){
    printVerticalLine(root, i,0)
  }
}

console.log(BT4.data)
VerticalOrderTraversal(BT4)