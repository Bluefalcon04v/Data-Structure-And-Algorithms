// Problem Statement Reverse Vowels of a String (Two Pointers)

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
    const arr = s.split("") // spliting each characters
    
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    
    let i = 0
    let j = arr.length - 1
    
    while(i < j){
        // looping Over arr and checking if it exists in vowels or not 
        if(vowels.indexOf(arr[i]) === -1){
            i++
            continue;
        }
        
        if(vowels.indexOf(arr[j]) === -1){
            j--
            continue;
        }
        // right now i and j will only contains index Of vowels so we will swap them
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr.join("")
};