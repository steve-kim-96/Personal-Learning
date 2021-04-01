const LinkedList = require('./linkedList')

const seasons = new LinkedList()

seasons.addToHead('summer')
seasons.addToHead('winter')

seasons.addToTail('spring')

console.log(seasons.removeHead())

seasons.printList()