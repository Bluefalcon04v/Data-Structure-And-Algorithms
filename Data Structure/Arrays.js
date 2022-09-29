// How Map, Filter and Reduce functions works in Arrays and it's Time Complexity


//  Map function (Is used to transform an array)
const arr = [2, 4, 1, 7, 8]
function double(x){
    return x*2
}
const output = arr.map(double) // "Map" takes a parameter that is function or logic to operate
console.log(output);



// Filter function (Is used to filter an array accordingly)
function isOdd(x){
    return x%2
}
console.log(arr.filter(isOdd));

// Or we can use Arrow function too while writting logic
console.log(arr.filter(x => x < 5)) // to filter the elements less than 5



// Reduce function (Is used to Reduce the size of an array into a single value)
function sumOfArray(acc, curr){ // here reduce pass 2 parameters 1st "acc" stands for storing current value at ever iteration 2nd "curr" take the value of array at every passing iteration
    acc = acc + curr
    return acc
}
console.log(arr.reduce(sumOfArray,0)) // Reduce takes 2 parameter first is "function" 2nd the base value of "acc" 
