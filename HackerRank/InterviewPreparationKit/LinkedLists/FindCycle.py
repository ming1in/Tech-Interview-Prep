'''
https://www.hackerrank.com/challenges/ctci-linked-list-cycle/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists
'''

class SLLNode():
  def __init__(self, data):
    self.data = data
    self.next = None

"""
This functions checks is linked list has a cycle

This has a O(n) time complexity, n = # of nodes in the linked list

@returns 1 if linked list has a cycle
@returns 0 if linked list does not have a cycle
"""

def has_cycle(head):
  
  current = head
  visitedNodes = []

  while (current):
    if (current in visitedNodes):
      return 1
    visitedNodes.append(current)
    current = current.next

  return 0

