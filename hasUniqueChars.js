// Write your code below
// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
// // returns true




function convertWord(word){
    //turn word into an array of characters
    const wordArr = word.split(``); 
    const uniqueArr = []; 
    //go through each indexed character in the array 
    for (i = 0; i<wordArr.length; i++){
        if(!uniqueArr.includes(wordArr[i])){
            uniqueArr.push(wordArr[i])
        }
    }
    return uniqueArr; 
}
console.log(convertWord(`slEep`))