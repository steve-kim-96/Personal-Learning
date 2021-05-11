// return a new array with where the two given arrays intersect

const array1 = [1,2,2,1]
const array2 = [2,2]

function intersect(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = [];
  const counter = createCounter(nums1);
  nums2.forEach((num) => {
    if ((counter.get(num) ?? 0) > 0) {
      intersection.push(num);
      counter.set(num, counter.get(num)! - 1);
    }
  });
  return intersection;
};

const createCounter = <T>(array: T[]): Map<T, number> => {
  const counter = new Map<T, number>();
  array.forEach((val) => counter.set(val, (counter.get(val) ?? 0) + 1));
  return counter;
};