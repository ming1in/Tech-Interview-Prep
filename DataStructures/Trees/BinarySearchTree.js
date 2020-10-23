/**
 * A tree is a collection of nodes connected by some edges. A tree 
 * is a non linear data structure. A Binary Search tree is a binary 
 * tree in which nodes that have LESSER VALUES ARE STORED ON THE LEFT 
 * while the nodes with a HIGHER VALUES ARE STORED ON THE RIGHT.
 * 
 * https://www.geeksforgeeks.org/
 */

const Queue = require('../Queue')
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor() {
    // root of a binary search tree 
    this.root = null;
  }

  /**
   * @param {*} data that you want to insert into BST
   */
  insert(data) {
    // Creating a node and initializing with data  
    var newNode = new Node(data);

    // root is null then node will be added to the tree and made root. 
    if (this.root === null)
      this.root = newNode;
    else

      // find the correct position in the tree and add the node 
      this.insertNode(this.root, newNode);
  }

  
  /**
   * @description Method to insert a node in a tree it moves over 
   * the tree to find the location to insert a node with a given data
   * 
   * @param {*} node 
   * @param {*} newNode 
   */
  insertNode(node, newNode) {
    // if the data is less than the node data move left of the tree  
    if (newNode.data < node.data) {
      // if left is null insert node here 
      if (node.left === null)
        node.left = newNode;
      else

        // if left is not null recur until null is found 
        this.insertNode(node.left, newNode);
    }

    // if the data is more than the node data move right of the tree  
    else {
      // if right is null insert node here 
      if (node.right === null)
        node.right = newNode;
      else

        // if right is not null recur until null is found 
        this.insertNode(node.right, newNode);
    }
  }

  /**
   * @param {*} data that should be removed from the BST
   */
  remove(data) {
    // root is re-initialized with root of a modified tree. 
    this.root = this.removeNode(this.root, data);
  } 

  /**
   * @description Method to remove node with a given data it recur over the tree to find the data and removes it
   * @param {*} node used to start the search for the node containing data
   * @param {*} data that will be removed from the tree
   */
  removeNode(node, data) {

    // if the root is null then tree is  
    // empty 
    if (node === null)
      return null;

    // if data to be delete is less than roots data then move to left subtree 
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    // if data to be delete is greater than roots data then move to right subtree 
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    // if data is similar to the root's data then delete this node 
    else {
      // deleting node with no children 
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children 
      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children minimum node of the right subtree is stored in aux 
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  } 

  /**
   * @description traversals tree in order starting from a given node
   * 
   * O(n) time-space complexity
   * 
   * @param {*} node where traversal is started
   */
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  } 

  /**
  * @description performs preorder traversals starting from a given node
  * 
  * O(n) time-space complexity
  * 
  * @param {*} node where traversal is started
  */
  preorder(node) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  } 

  /**
  * @description performs postorder traversals starting from a given node
  * 
  * O(n) time-space complexity
  * 
  * @param {*} node where traversal is started
  */
  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  } 

  /**
  * @returns smallest node in the BST
  * @param {*} node where traversal is started
  */
  findMinNode(node) {
    // if left of a node is null then it must be minimum node 
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  } 

  /**
   * @returns root node of tree
   */
  getRoot() {
    return this.root;
  } 
  
  /**
   * @description search for a node with given data
   * @returns Node containing data if it is found
   * @returns Null if tree does not contains Node containing data
   * @param {*} node where traversal is started
   * @param {*} data that you are searching for and which Node contains that data
   */
  search(node, data) {
    // if trees is empty return null 
    if (node === null)
      return null;

    // if data is less than node's data move left 
    else if (data < node.data)
      return this.search(node.left, data);

    // if data is less than node's data move left 
    else if (data > node.data)
      return this.search(node.right, data);

    // if data is equal to the node data return node 
    else
      return node;
  } 

  /**
   * @description prints the nodes at the given level
   * 
   * This has a O(2^n) time complexity because the worse case could be
   * a skewed tree.
   * 
   * @param {*} root node
   * @param {*} level of tree that should be returned
   */
  printLevel(root, level) {
    if (!root) {
      return
    }

    if (level == 1) {
      console.log(root.data,)
      return root.data
    } else if (level > 1) {
      this.printLevel(root.left, level - 1)
      this.printLevel(root.right, level - 1)
    }
  }

  height(root) {
    if (!root) {
      return 0
    } else {
      var leftSubTree = this.height(root.left) + 1
      var rightSubTree = this.height(root.right) + 1
    }

    return Math.max(leftSubTree, rightSubTree)
  }


  /**
   * @description performs a Breadth-First Traversal. 
   * 
   * This has a O(2^n) time complexity because the worse case could be 
   * a skewed tree, so printLevel() could take O(n). So time complexity of 
   * printLevelOrder() is O(n) + O(n-1) + O(n-2) + .. + O(1) which is O(n^2).
   * 
   * @param {*} root node of BST
   */
  breadthFirst(root) {
    var height = this.height(this.root)

    for (let i = 1; i < height + 1; i++){
      this.printLevel(root, i)
    }
  }

  /**
   * @description performs a more efficient BFT than breadthFirst()
   * 
   * This has a O(n), n = number of nodes, time complexity because it only
   * iterates through each node once. Making this more efficient that breadFirst()
   * 
   * @param {*} root node of BST
   */
  breadthFirst2(root) {
    var queue = new Queue()
    var current = root
    var traversal = []

    console.log(current)
    while (current != null) {
      traversal.push(current.data)
      queue.enqueue(current.left)
      queue.enqueue(current.right)
      current = queue.dequeue()
    }

    console.log(traversal)
    return traversal
  }
}

/** Example BST #1
 *         8
 *       /   \
 *      3     10
 *     / \      \
 *    1   6     14
 *       / \    /
 *      4   7  13
 */ 
let bst1 = new BinarySearchTree()
bst1.insert(8)
bst1.insert(3)
bst1.insert(10)
bst1.insert(1)
bst1.insert(6)
bst1.insert(14)
bst1.insert(4)
bst1.insert(7)
bst1.insert(13)

// bst1.breadthFirst(bst1.getRoot())
bst1.printLevel(bst1.getRoot(), 4)

module.exports = BinarySearchTree
