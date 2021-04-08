const LinkedList = require('../LinkedList/linkedList')


class Queue {
  constructor(maxSize = Inifinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }
  isEmpty() {
    return this.size === 0
  }

  hasRoom() {
    return this.size < maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data)
      this.size++
      return
    }
    throw new Error('Queue is full!')
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead()
      this.size--
      return data
    }
    throw new Error('Queue is empty!')
  }
}

module.exports = Queue

/*
  Some things to watch for:
    Queues follow FIFO (First in, First Out).
    The max size determines how many nodes can be added to the queue. Has a default of infinity.
    You add to the tail and remove from the head.
    Prevent overflow and underflow.
    1. Underflow: Can't dequeue if the queue is empty,
    2. Overflow: For a bounded queue, can't add to queue past the max size and for an unbounded queue cannot add to queue past the available memory.
*/