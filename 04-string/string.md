# string

## problem 1
#### You are given a string containing a sentence. Your task is to demonstrate the usage of various basic string methods in JavaScript without using functions. The following actions should be performed on the string: Find the length of the string. Convert the entire string to uppercase. Convert the entire string to lowercase. Extract a part of the string starting from a specified index. Check if a specific word or substring exists in the string. Replace a word or character in the string with a new one. Trim any leading or trailing spaces from the string. Split the string into an array of words. Find the position of a specific character or substring in the string.

```javascript
let str1 = "   JavaScript is the most Fundamental and Useful Language in the World of Web Development       "
console.log(typeof str1);
console.log(str1);
console.log(`the length of str1 is ${str1.length}`);
console.log(`the uppercase of str1 is ${str1.toUpperCase()}`);
console.log(`the uppercase of str1 is ${str1.toLowerCase()}`);
console.log(`the index of the following line is ${str1.indexOf('the',7)}`)

console.log(str1.substring(7,80));
console.log(str1.replace('Fundamental', 'important'));

let str2 = "    hello world    "
console.log(str1.trim());
console.log(str2.trim());
console.log(str1.trimStart());
console.log(str2.trimStart());
console.log(str1.trimEnd());
console.log(str2.trimEnd());

console.log(str1.split(''));
```