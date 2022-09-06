// problem statement - Give an integer 'n', find the factorial of that integer. 

function factorial(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result = result * i
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

// Big-O time complexity is O(n) ie linear