class Node {
  constructor(data) {
  this.data = data,
  this.next = null
  }
  setNextNode (node) {
    // I'm trying not to use else statements.
    // in this case, after I set the next node, I break out of the function so that it doesn't
    // touch the error portion of function
    if (node instanceof Node || node === null) { 
    this.next = node
    return
    }
    // if the IF statement turns false, the function will skip to the error statement
    throw new Error('Next node must be a member of the Node class.')
  }
  getNextNode () {
    return this.next
  }
}

module.exports = Node