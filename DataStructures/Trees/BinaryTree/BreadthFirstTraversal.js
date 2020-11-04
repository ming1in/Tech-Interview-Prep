
/**
 * @description performs a Breadth-First Traversal
 *
 * This has a O(n), n = number of nodes, time complexity because it only
 * iterates through each node once. Making this more efficient that breadFirst()
 *
 * https://www.geeksforgeeks.org/level-order-tree-traversal/
 *
 * @param {*} root of tree
 */
function BFT(root) {
  var queue = []
  var current = root
  var results = []

  while (current) {
    results.push(current.data)
    queue.push(current.left)
    queue.push(current.right)
    current = queue.shift()
  }

  return results
}

module.exports = BFT