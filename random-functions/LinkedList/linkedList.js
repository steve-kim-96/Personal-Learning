const Node = require('./Node')

class LinkedList {
  constructor() {
  this.head = null
  }
  addToHead (data) {
    const newHead = new Node(data)
    const currentHead = this.head
    this.head = newHead
    if (currentHead) {
      this.head.setNextNode(currentHead)
    }
  }
}

// Linked List has a way to add Node to Head
// Linked list has a way to add to Tail
