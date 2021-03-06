const Node = require('./Node')

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addToHead(data) {
    // create new node that will be new head
    const newHead = new Node(data)
    // set variable for current head
    const currentHead = this.head
    // if current head exists, set the currentHead's previous to newHead
    // set newHead's next to currentHead
    if (currentHead) {
      currentHead.setPreviousNode(newHead)
      newHead.setNextNode(currentHead)
    }
    // set head of list to newHead
    this.head = newHead
    // if the tail doesn't exist, meaning that the newHead is the only item in the list, set the tail to be newHead
    if (!this.tail) this.tail  = newHead
  }
  addToTail(data) {
    // create new node that will be new tail
    const newTail = new Node(data)
    // set variable for current tail
    const currentTail = this.tail
    // if current tail exists, set the currentTail's next to newTail
    // set newTail's next to currentTail
    if (currentTail) {
      currentTail.setNextNode(newTail)
      newTail.setPreviousNode(currentTail)
    }
    // set tail of list to newTail
    this.tail = newTail
    // if the head doesn't exist, meaning that the newTail is the only item in the list, set the head to be newTail
    if (!this.head) this.head  = newTail
  }
  removeHead() {
    const removedHead = this.head
    if (!removedHead) return
    this.head = removedHead.getNextNode()
    if (this.head) {
      this.head.setPreviousNode(null)
    }
    if (removedHead === this.tail) {
      this.removeTail()
    }
    return removedHead
  }
  removeTail() {
    const removedTail = this.tail
    if (!removedTail) return
    this.tail = removedTail.getPreviousNode()
    if (this.tail) {
      this.tail.setNextNode(null)
    }
    if (removedTail === this.head) {
      this.removeHead()
    }
    return removedTail
  }
  printList() {
    const currentNode = this.head
    const output = '<head> '
    while(currentNode) {
      output += currentNode.data
      currentNode = currentNode.getNextNode()
    }
    output += '<tail>'
    console.log(output)
  }
}