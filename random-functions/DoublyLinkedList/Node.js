class Node {
  constructor(data) {
    this.data = data,
    this.next = null,
    this.previous = null
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node
      return
    }
    throw new Error('Next Node must be a member of the Node class')
  }
  
  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node
      return
    }
    throw new Error('Next Node must be a member of the Node class')
  }

  getNextNode () {
    return this.next
  }

  getPreviousNode() {
    return this.previous
  }

}