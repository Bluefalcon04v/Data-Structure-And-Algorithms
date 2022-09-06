// problem statement - Give a number "n", find the first "n" elements of the fibonacci sequence. 


function fibonacci(n){
    const fib = [0, 1];
    if(n == 0){
        return null;
    }
    else if(n == 1){
        return 0;
    }
    else {
        for(let i = 2; i < n; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(4));

//  the Big-O complexity is linear ie O(n)