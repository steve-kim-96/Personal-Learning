class MinHeap {
  constructor() {
    this.heap = [null]
    this.size = 0
  }

  popMin() {
    if (!this.size) return null
    this.swap(1, parent)
    const min = this.heap.pop()
    this.size--
    this.heapify()
    return min
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

  heapify() {
    let current = 1
    let leftChild = getLeft(current)
    let rightChild = getRight(current)
    // need to run it twice because the current element may have both left and right children
    while(this.canSwap(current, leftChild, rightChild)) {
      while(this.canSwap(current, leftChild, rightChild)) {
        if (this.exists(leftChild) && this.exists(rightChild)) {
          if (this.heap[leftChild] < this.heap[rightChild]) {
            this.swap(current, leftChild)
            current = leftChild
          } else {
            this.swap(current, rightChild)
            current = rightChild
          }
        } else {
          this.swap(current, leftChild)
          current = rightChild
        }
        leftChild = getLeft(current)
        rightChild = getRight(current)
      }
      leftChild = getLeft(current)
      rightChild = getRight(current)
    }
  }

  exists(index) {
    return index <=this.size
  }

  canSwap(current, leftChild, rightChild) {
    return (
      // need to make sure that either the left or right child exists
      // and also that the current element is larger than the child element (since it is a min-heap)
      this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
      || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    )
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