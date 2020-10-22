'''
https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees
'''


class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def create(self, val):
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root

            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

'''
Recursively calculate height of left and right subtrees of a node and assign height to the node as max of the heights of two children plus 1
'''
def height(root):
  
  #base case, if you run into a leaf
    if root is None:
        return - 1
    else:
        leftSide = height(root.left) + 1 # traverse through left side and set root to left node, increment count bc your at a node
        rightSide = height(root.right) + 1 # traverse through right side and set root to right node, increment count bc your at a node

        return max(leftSide, rightSide)
    
