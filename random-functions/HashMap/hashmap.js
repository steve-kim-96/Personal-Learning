const LinkedList = require("../LinkedList/linkedList");
const Node = require('../LinkedList/Node')
class HashMap {
  constructor(size = 0) {
    // the hashmap starts off as a new array with initially value null
    // we then map through the array with each element being a new LinkedList
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList())
  }

  //.hash function
  hash(key) {
    // need to add each acc of hashcode starting with 0
    let hashcode = 0
    for (let i = 0; i < key.length; i++) {
      hashcode += hashcode + key.charCodeAt(i)
    }
    return hashcode % this.hashmap.length
  }

  //.assign function
  assign(key, value) {
    let arrayIndex = this.hash(key)
    let linkedList = this.hashmap[arrayIndex]
    // first we need to check if any data exists at all. If no head exists that means there are no nodes in the current list
    if (!linkedList.head) {
      linkedList.addToHead({ key, value })
      return
    }
    // next we need to check if within the list there is data associated with the same key
    // in order to do that we need to iterate through the list as long as the current node exists
    let current = linkedList.head
    while(current) {
      if (current.data.key === key) {
        current.data = { key, value }
        return
      }
      if (!current.next) {
        current.next = new Node({ key, value })
        break
      }
      current = current.next
    }
  }

  //.retrieve function
  retrieve(key) {
    const arrayIndex = this.hash(key)
    const current = this.hashmap[arrayIndex].head
    // I need to iterate through the list to match the value in the list with the current
    while(current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`)
        return current.data.value
      }
      current = current.next
    }
    // if nothing matches then just return null
    return null
  }

  delete(key) {
    const lowerCaseKey = key.toLowerCase()
    const arrayIndex = this.hash(lowerCaseKey)
    const current = this.hashmap[arrayIndex]
    while(current) {
      if (!current.next) {
        console.log('no such value exists in this list')
        return
      }
      if (current.data.key === key) {
        
      }
      current = current.next
    }
  }
}

module.exports = HashMap