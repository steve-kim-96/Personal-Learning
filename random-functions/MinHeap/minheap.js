class MinHeap {
  constructor() {
    this.heap = [null]
    this.size = 0
  }
  add(value) {
    console.log(`... adding ${value}`)
    this.heap.push(value)
    this.size++
    this.bubbleUp()
    console.log(`added ${value} to heap`, this.heap)
  }
  bubbleUp() {
    // current points to the index of the last node, which is the node we add to the heap
    let current = this.size
    while(current > 1 && this.heap[current] < this.heap[getParent(current)]) {
      this.swap(current, getParent(current))
      current = getParent(current)
    }
  }
  swap(current, parent) {
    [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
  }
}

// helper functions that finds the parent, left, and right node indices of the current element
const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;