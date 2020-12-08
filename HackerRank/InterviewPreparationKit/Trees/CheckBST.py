'''
https://www.hackerrank.com/challenges/ctci-is-binary-search-tree/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees&h_r=next-challenge&h_v=zen
'''


class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


INT_MAX = 4294967296
INT_MIN = -4294967296


def checkBST(root):
    return (checkBSTHelper(root, INT_MAX, INT_MIN))


def checkBSTHelper(root, max, min):
    # empty trees are considered BST
    if (root == None):
        return True

    # node shouldn't break min/max constrains
    if root.data > max or root.data < min:
        return False

    # check the remaining subtree
    return (checkBSTHelper(root.left, max, root.data - 1) and checkBSTHelper(root.right, root.data + 1, min))
