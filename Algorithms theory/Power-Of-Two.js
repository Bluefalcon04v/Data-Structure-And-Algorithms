//  Problem Statement- Give a positive integer 'n', determine if the number is a power of 2 or not

function powerOfTwo(n){
    if (n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false;
        }
        n = n/2
    }
    return true;
}

console.log(powerOfTwo(0));
console.log(powerOfTwo(1));
console.log(powerOfTwo(4));
console.log(powerOfTwo(7));
console.log(powerOfTwo(12));

// Big-O time complexity is O(log n) because the input size is decreasing by half with each iteration