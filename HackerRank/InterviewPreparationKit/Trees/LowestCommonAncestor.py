'''
https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees
'''


class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)


def LCA(root: Node, v1:Node, v2: Node):
    # 1. check if both nodes are in the left subtree
  if (v1 < root.info and v2 < root.info):
    return LCA(root.left, v1, v2)
  # 2. check if both noes are in the right subtree
  elif (v1 > root.info and v2 > root.info):
    return LCA(root.right, v1, v2)
  # 3. if nodes are split on the left and right subtree the LCA is the node your currently on
  else:
    return root
