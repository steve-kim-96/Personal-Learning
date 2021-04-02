// function for swapping nodes
function swapNodes(list, data1, data2) {
    let node1 = list.head
    let node2 = list.head
    let node1Prev = null
    let node1Prev = null
  
    if (data1 === data2) {
      console.log('Elements are the same - no swap needed.')
      return
    }
    while (node1) {
      if (node1.data === data1) {
        break
      }
      node1Prev = node1
      node1 = node1.getNextNode()
    }
    while (node2) {
      if (node2.data === data2) {
        break
      }
      node2Prev = node2
      node2 = node2.getNextNode()
    }
  
    if (!node1 || !node2) {
      console.log('Elements are the same - no swap needed.')
      return
    }
  
    if (node1Prev === null) {
      list.head = node2
    } else {
      node1Prev.setNextNode(node2)
    }
    if (node2Prev === null) {
      list.head = node1
    } else {
      node2Prev.setNextNode(node1)
    }
    // reason we set temp is because once we set a new next node for node 1, that value changes.
    // we want the next node of node1 before we swap which is why we save it before changing
    // the pointer.
    let temp = node1.getNextNode()
    node1.setNextNode(node2.getNextNode())
    node2.setNextNode(temp)
  }

/*
  Things I need to think about:
  Takes in three parameters: The list, node 1 and node 2 (the nodes you want to swap)
  
  You need to save node 1 and node 2 as the heads so you can iterate from the start of the list
  You need to keep track of node 1 and node 2's previous nodes so you can change their pointers
  
  first Thing you need function to do is check if data1 is equal to data2.
  If that is the case just break out of the function because there's no point

  Starting with node1:
  You need to iterate through the list until node 1 is equal to data 1.
  If that is the case break out of the iteration.
  Otherwise, you're going to set node1Prev to be the current node1 in the iteration
  then you set node 1 to be node 1's next node

  Repeat this for node 2.

  If either node 1 or node 2 ends up being null then just break out of function

  Then you check if node1Prev is null. If it is then set node2 to be the head
  If it isnt then set node1Prev's next node to be node 2

  Repeat this step for node 2

  Set a temporary variable for node 1's next node because you want the current next node
  Then set node 1's next node to be node 2's nextnode
  Then set node 2's next node to be node 1's next node
*/

  module.exports = swapNodes