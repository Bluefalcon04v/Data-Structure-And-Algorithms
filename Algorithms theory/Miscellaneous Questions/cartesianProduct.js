//  Problem Statement- Given two finite non-empty sets, find their Cartesian Product.

function cartesianProduct(arrA, arrB){
    const result = []
    for(let i=0; i < arrA.length; i++){
        for(let j=0; j<arrB.length; j++){
            result.push([arrA[i],arrB[j]])
        }
    }    
    return result
}

const arrA = [2, 4]
const arrB = [3, 6, 7]
console.log(cartesianProduct(arrA, arrB));

// Big-O time complexity is O(mn) because both arrays can be of different lengths.