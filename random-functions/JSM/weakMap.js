let weak = new WeakMap();

let obj = {};

weak.set(obj, "ok");

console.log(weak.get(obj));

/* 
  need to look into caching and garbage collection because I don't really know. I get that we need to delete certain types of data when its deleted
  so that space in memory isn't taken... but what sort of data do we delete???
*/

/* 
  WeakSet and WeakMap are pretty much work the same way as Map and Set but, they only take in objects as keys (or values in weakSet case) and when the object
  is rendered null (not needed anymore) then the keys and/or values stored in weak Set and Map are deleted as well.
*/

