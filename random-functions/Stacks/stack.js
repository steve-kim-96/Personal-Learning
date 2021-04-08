const LinkedList = require('../LinkedList/linkedList')

/*
  Quite similar to queue but follows LIFO principle (last in, first out).
  Think of it like a stack of books piled on top of each other. You can't remove the last book until you've removed all the books on top first.
*/

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList()
    this.size = 0
    this.maxSize = maxSize
  }

  isEmpty() {
    return this.size === 0
  }

  hasRoom() {
    return this.size < this.maxSize
  }

  peek() {
    if (this.size) return this.stack.head.data
    return null
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value)
      this.size++
      return
    }
    throw new Error('Stack is full!')
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead()
      this.size--
      return value
    }
    throw new Error('Stack is emtpy!')
  }
}

module.exports = Stack
