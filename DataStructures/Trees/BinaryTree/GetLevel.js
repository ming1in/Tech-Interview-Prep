/**
 * @description prints the nodes at the given level
 * @param {*} root
 * @param {*} level
 */
function GetLevel(root, level) {
  if (!root) {
    return
  }

  if (level == 1) {
    console.log(root.data)
    return root.data
  } else if (level > 1) {
    GetLevel(root.left, level - 1)
    GetLevel(root.right, level - 1)
  }
}

module.exports = GetLevel