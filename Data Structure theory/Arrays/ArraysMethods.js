// About Arrays Methods and its Time Complexity

const arr = [3, 2, 5, 7, 4]
let insertingAtLast = arr.push(9) // Time complexity is O(1)
console.log(arr);

let insertingAtBeginning = arr.unshift(0) // Time complexity is O(n)
console.log(arr);

let removingLastElem = arr.pop() // Time complexity is O(1)
console.log(arr);

let removingFirstElem = arr.shift(0) // Time complexity is O(n)
console.log(arr);

// Time Complexity for other Array Methods are
// Accessing Element have time complexity of O(1)
// Searching Element have time complexity of O(n)
// Slice/Splice/Concat/ForEach Loop have time complexity of O(n)