// About sets and it's time complexity

const set = new Set([1, "hello", 7])

set.add("world")                // to add a new value

console.log(set.has(3));        // to check if it exists or not
console.log(set.has("hello"));

set.delete(7)                   // to delete a particular value

console.log(set.size);          //to check the size of set

console.log(set);

set.clear()                     // to clear all elements of the set
console.log(set);

// Sets have time complexity of O(1) ie linear