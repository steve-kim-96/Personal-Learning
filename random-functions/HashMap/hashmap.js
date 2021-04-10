const LinkedList = require("../LinkedList/linkedList");

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList())
  }
}

module.exports = HashMap