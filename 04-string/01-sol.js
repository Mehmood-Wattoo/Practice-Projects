// +++++++++++++++++++++++++ solution 1 +++++++++++++++++++++++

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



