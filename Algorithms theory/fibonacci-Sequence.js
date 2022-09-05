// problem statement - Give a number "n", find the first "n" elements of the fibonacci sequence. 


function fibonacci(n){
    const fib = [0, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib
}

console.log(fibonacci(6));
console.log(fibonacci(12));

//  the Big-O complexity is linear ie O(n)