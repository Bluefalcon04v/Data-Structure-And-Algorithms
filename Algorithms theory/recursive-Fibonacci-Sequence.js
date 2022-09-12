// Give a number 'n', find the nth element of the fibonacci sequence

function recursiveFibonacci(n){
    if ( n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(12));

// it's Big-O time complexity is O(2^n)