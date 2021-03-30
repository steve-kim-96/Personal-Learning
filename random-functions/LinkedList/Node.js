class Node {
  constructor(data) {
  this.data = data,
  this.next = null
  }
  setNextNode (node) {
    if (node instanceof Node || node === null) this.next = node
    throw new Error('Next node must be a member of the Node class.')
  }
  getNextNode () {
    return this.next
  }
}

module.exports = Node