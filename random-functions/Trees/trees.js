class TreeNode {
  constructor(data) {
    // the tree node takes in some sort of information as the data and also has reference to its children nodes
    this.data = data;
    this.children = [];
  }

  //adding a child node
  //allow the user to either enter an instance of TreeNode or just enter the child and have the functinon instantiate the new TreeNode and add as child
  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child)
      return
    }
    this.children.push(new TreeNode(child))
  }
  //remove a child node
  //allow the user to delete child by data or by child node
  //in order to search deeper levels calling removeChild recursively on each child of children
  //foreach function automatically stops once end has been reached? so no need for stopping condition
  //else in the end throw an error to alert user that no such node exists
  removeChild(childToRemove) {
    const length = this.children.length
    this.children = this.children.filter(child => {
      if (childToRemove instanceof TreeNode) {
        return child !== childToRemove
      }
      return child.data !== childToRemove
    })
    if (this.children.length === length) {
      this.children.forEach(child => child.removeChild(childToRemove))
    }
    throw new Error('this child does not exist')
  }

  print(level = 0) {

  }
}

module.exports = TreeNode