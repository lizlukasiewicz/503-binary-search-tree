class Node:
  # here we will add the constructor 
  def __init__(self, data): # override method
    self.data = data
    self.left = None
    self.right = None
  # method overried of the string method for the node 
  def __str__(self):
    return f'{self.data}'
  


class BinaryTree:
  # here we will add the constructor
  def __init__(self):
    self.root = None

  def insert(self, data):
    '''
      👶🏻 Insert(data: any) -> None:\n 👶🏻
      creates a new Node from the data passed in and adds it to the tree
      If the data is already in the tree, does not insert it again
    '''
    
    new_node = Node(data) # 1️⃣ make a node from the data
    if not self.root: # if there is no root, set node to be root
      self.root = new_node
      return
    
    current_node = self.root # 2️⃣ loop over the tree starting at root (w/comparisons AlongTheWay)
    while current_node:
      if new_node.data < current_node.data: # if data is less than node
        if not current_node.left: # if there is no left
          current_node.left = new_node #set the left to be the new node
          return 
        else: current_node = current_node.left # else move to the left
      elif new_node.data > current_node.data: # if the new node data is bigger than the current node
        if not current_node.right: #check if there is no right
          current_node.right = new_node  #insert to the right
          return
        else: current_node = current_node.right #otherwise we need to move to the right


  def search(self, val):
    '''
      search(value: any) -> value or bool:\n 
      Performs 💥 🔥 DEPTH FIRST SEARCH 🔥 💥
      Search the Tree for a node with the given value
      If the node exists, return it
      If the node doesn't exist, return false
    '''
    if not self.root:# check if the tree is empty
      return False
    current_node = self.root #loop through the tree starting at the root
    while current_node:
      #if the value is less than the current node
      if val < current_node.data:
        # set current node to be the left
        current_node = current_node.left
      # else if the value is greater
      elif val > current_node.data:
        # set current node to be the right
        current_node = current_node.right
      #otherwise return the node
      else:
        return current_node
    return False #in case it all goes wrong


  def print(self, node=None):
    '''
      print(node=optional: Node) -> None:\n
      prints out all values recursively (in a 🌬 ✨ BREADTH FIRST SEARCH ✨ 💨 fashion)
      defualt start is at root node
    '''
    # check if this is the first recursion
    if not node: node = self.root
    #print the node
    print(node)
    # if there is a left node
    if node.left: 
      # recursively invoke self.print on the node
      self.print(node.left)
    # if there is a right node
    if node.right: 
      # recurse
      self.print(node.right)

  def size(self, node=None):
    '''
      size(node=optional: Node) -> int:\n 
      performs breadth first search
      Calculate the number of nodes in the tree, starting from the given node
      If no node is provided, we can use the root as a sensible default
    '''
    pass

  def height(self, node=None):
    '''
      height(node=optional: Node) -> int:\n 
      perform breadth first search
      Calculate the maximum amount of nodes in any one path from the given node
      If not given a specific node, default to using the root node
    '''
    count_left = 0
    count_right = 0 
    if not node:
      node = self.root
    max_height = 0
    def recursive_height(node, height=1):
      nonlocal max_height
      if node:
        if height > max_height:
          max_height = height
        recursive_height(node.left, height + 1)
        recursive_height(node.right, height + 1)
    recursive_height(node)
    return max_height


  def get_max(self):
    '''
      getMax() -> int:\n 
      perform depth first search
      Calculate the maximum value held in the tree
    '''
    #check to see if the tree is empty
    if not self.root:
      return False
    #loop through the tree starting at the root
    current_node = self.root
    while current_node.right:
      current_node = current_node.right
      #if there is a node to the right
        # set the current node to be the right
      #else return value of current node 
    return current_node.data

  def get_min(self):
    '''
      getMin() -> int:\n 
      perform depth first search
      Calculate the minimum value held in the tree
    '''
    if not self.root: return None
    current_node = self.root
    while current_node.left:
      current_node = current_node.left
    return current_node.data

