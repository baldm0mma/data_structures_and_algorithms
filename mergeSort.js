import * as arrs from "./sortData.js";

const mergeSort = (arr) => {
  // base case - if arr is empty | 1 val
  if (arr.length <= 1) return arr;

  //splitting
  // grab middle index
  const middleIndex = Math.floor(arr.length / 2);
  // split arr on that index into r and l
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);

  // recursion
  // return mergeFunction(left, right)
  return mergeBranches(mergeSort(left), mergeSort(right));
};

const mergeBranches = (left, right) => {
  // set up an empty arr
  const finalSorted = [];
  // compare and push

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      finalSorted.push(left.shift());
    } else {
      finalSorted.push(right.shift());
    }
  }
  // return final sorted array upwards

  return [...finalSorted, ...left, ...right];
};

console.log(mergeSort(arrs.testArr1));
console.log(mergeSort(arrs.testArr2));
console.log(mergeSort(arrs.testArr3));
