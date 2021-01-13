
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
       
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {

  const queue = []
  var current = cloned

  while (current) {

    if (current.left !== null) {
      queue.push(current.left)
    }

    if (current.right !== null) {
      queue.push(current.right)
    }

    if (current.val === target.val) {
      return current
    }


    current = queue.shift()

  }
};

// queue = [3,6,19]
//traversal = [7,4,3]