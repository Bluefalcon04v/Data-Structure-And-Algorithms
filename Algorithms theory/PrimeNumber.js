// Problem Statement- Give a number "n", determine if the number is prime or not.

// method 1
// function prime(n){
//     if(n < 2){
//         return false;
//     }
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

//  method 2 (to make the process faster we have used Sqrt function so that we don't have to conduct unnessary tests and eventually it will improve the Big-O complexity)
function prime(n){
    if(n < 2){
        return false;
    }
    else if(n === 2){
        return true;
    }
    let root = Math.ceil(Math.sqrt(n)) 
    for(let i = 2; i <= root; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(prime(2));
console.log(prime(13));
console.log(prime(121));

// Big-O complexity of method 1 is O(n) because for loop will run n times in worse case senario.
// Big-O complexity of method 2 is O(sqrt n) because we only have to check the condition till square root of n.