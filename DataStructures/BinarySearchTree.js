/**
 * A tree is a collection of nodes connected by some edges. A tree 
 * is a non linear data structure. A Binary Search tree is a binary 
 * tree in which nodes that have LESSER VALUES ARE STORED ON THE LEFT 
 * while the nodes with a HIGHER VALUES ARE STORED ON THE RIGHT.
 * 
 * https://www.geeksforgeeks.org/
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree{
  constructor() {
    // root of a binary search tree 
    this.root = null;
  }

  /**
   * @param {*} data that you want to insert into BST
   */
  insert(data) {
    // Creating a node and initailising with data  
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
   * @param {*} node where traversal is started
   */
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  } 

  /**
  * @description performs preorder traversals starting from a given node
  * @param {*} node where traversal is started
  */
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  } 

  /**
  * @description performs postorder traversals starting from a given node
  * @param {*} node where traversal is started
  */
  postorder(node) {
    if (node !== null) {
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



}