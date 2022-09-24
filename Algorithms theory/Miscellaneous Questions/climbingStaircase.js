// Problem Statement- Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 steps or 2 steps at a time.

function climbingStairs(n){
    const noOfWays = [1, 2]
    for(let i=2; i<=n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
    }
    return noOfWays[n-1]
}

console.log(climbingStairs(1));
console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));
console.log(climbingStairs(5));
console.log(climbingStairs(6));

// Big-O time complexity is O(n) ie linear