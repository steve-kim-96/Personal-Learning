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
}