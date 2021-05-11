// function intersect(nums1: number[], nums2: number[]): number[] {
//   const intersect: number[] = []
//   const map = record(nums1)
//   nums2.forEach(num => {
//     if ((map.get(num)??0)>0) {
//       intersect.push(num)
//       map.set(num, map.get(num)! - 1)
//       console.log('intersect function', map.values())
//     }
//   })
//   return intersect
// }
// const record = <Type>(arr: Type[]): Map<Type, number>  =>  {
//     const map = new Map<Type, number>()
//     arr.forEach(num => map.set(num, (map.get(num)??0) + 1))
//     console.log('record function', map.values())
//     return map
// }
// console.log(intersect([1,2,2,1], [2,2]))
var map = new Map();
map.set('hello', 1);
console.log(map.values());
map.set('hello', (map.get('hello') + 1));
console.log(map.values());
