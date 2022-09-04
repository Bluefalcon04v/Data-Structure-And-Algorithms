// An Object is an collection of Key value Pairs. So the time compelxity is defined as

const person = {
    name: "Sam",
    age: 22, 
    gender: "Male",
    skill: "Web-Developer"
}
person.city = "Mumbai"  // Adding a value have time complexity O(1) ie constant 
delete person.name      // Removing a value have time complexity O(1) ie constant 
person.age              // Accessing a value have time complexity O(1) ie constant 
// Adding, Removing and Accessing in Object have O(1) because in object data is not stored order wise so Adding, deleting won't affect the other data. and for searching Objects uses key so it won't affect how much data you have in it. 


console.log( Object.keys(person));     // Printing the keys of an object have time complexity of O(n) ie linear 
console.log( Object.values(person));   // Printing the values of an object have time complexity of O(n) ie linear 
console.log( Object.entries(person));  // Printing all the key and values of an object have time complexity of O(n) ie linear 
// but for Searching, printing values, keys or entries it have to run "n" times for worse case.