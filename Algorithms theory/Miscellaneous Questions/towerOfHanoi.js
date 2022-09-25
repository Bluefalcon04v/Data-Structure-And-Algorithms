// Problem Statement- it's a puzzle consist of 3 rods and in which one rod have several disks. The objective of the puzzle is to move the entire stack of disk to the last rod, Obeying the following rules.
// Only one disk may move at a time.
// Each move consists of taking upper disk form one of the stacks and placing it on the top of another stack or on an empty rod.
// No disk may be placed on top of a disk that is smaller.

function towerOfHanoi(n, fromRod, toRod, usingRod){
    if(n === 1){
        console.log(`Move disk 1 form ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}

towerOfHanoi(7, 'A', 'B', 'C')

//  Big-O time complexity is O(2^n) because of the number of statements executes increases with the n