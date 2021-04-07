const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null
  }
  addToHead(data) {
    // start off by creating the new Node that's going to be new Head
    const newHead = new Node(data)
    // set a variable for the current head of linked list
    const currentHead = this.head
    // set the new Node as the Head of linked list
    this.head = newHead
    // if the previous current head is truthy set the new Head's next value as the previous Head node
    if (currentHead) {
      this.head.setNextNode(currentHead)
    }
  }
  addToTail(data) {
    // start the tail off at the Head node
    let tail = this.head
    // if there is no tail, there is no Head. In that case create a new Node
    if (!tail) this.head = new Node(data)
    // while the next Node exists i.e. is not null, set the tail to the next Node. It will stop once next value is null
    while (tail.getNextNode() !== null) tail = tail.getNextNode()
    tail.setNextNode(new Node(data))
  }
  removeHead() {
    // start by assigning current Head to a variable to remove
    const removedHead = this.head
    // if this.head is falsy then just break out of function. This would indicate that Head doesn't exist
    if (!removedHead) return
    // set the Head of the list to the next Node over. This would Leave the previous head orphaned and therefore out of the linked list
    this.head = removedHead.getNextNode()
    return removedHead.data
  }

  printList() {
    // start off at the head of the list
    let currentNode = this.head
    // set a statement at the beginning to indicate the start of the linked list
    let output = '<head> '
    // iterating through the linked list
    while (currentNode !== null) {
      //adding the Node data to the output from Head and adding a space
      output += currentNode.data + ' '
      // then set currentNode to the nextNode. Setting the head to the next node since we're trying to iterate
      currentNode = currentNode.getNextNode()
    }
    // adding the end by adding tail indication at the end
    output += '<tail>'
    console.log(output)
  }
}

module.exports = LinkedList
// Linked List has a way to add Node to Head
// Linked list has a way to add to Tail
