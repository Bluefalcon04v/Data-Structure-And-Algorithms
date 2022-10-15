// About Objects and it's methods and their time complexity

let obj = {
    name: "Bruce",
    age: 33,
    "part-time-job": "investor",
    search: function(){
        return (this.name)
    }
}
obj.hobby = "football"        // to insert new value in object
// delete obj.hobby           to delete the value in object

console.log(obj.search());
console.log(obj.age);
console.log(obj[`part-time-job`]);
console.log(obj[`hobby`]);


// Time Complexity
// Insert/Removing items = O(1)
// Accessing elements = O(1)
// Searching elements = O(n)
// Objects.keys() = O(n)
// Objects.values() = O(n)
// Objects.entries() = O(n)