/*
    Consider the following problem:

Create a function that returns the nth last element of a singly linked list.

*/

// Solution one:

/*

** You need to find the end of the list so that you can know what the length is
so that you can iterate through the list for its length amount.

First, declare some variables:
    1. nthLastNodePointer = null
    2. tailPointer = linkedListHead
    3. count = 0

Then:
While the tailPointer exists move the tail pointer forward
IF the count is less than or equal to n set nthLastNodePointer to head if its null
OR move it forward
Increment the count

return nthLastNodePointer

*/

// Solution two:

/* Consider this problem:

Find the middle node of a linked list.

*/

/*
    send two pointers that run through the iteration at different speeds.

    For every step slowPointer takes, the fastPointer will take two steps.
    
    IF the fastPointer is not null move fast pointer forward
    IF the end of the list has not been reached then move the fastPointer forward again
    AND move the slowPointer forward

    Since the fastPointer is moving twice as 
*/
