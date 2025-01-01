## Solutions of problem 2

## Solution 1
```javascript
let symbol1 = Symbol('uI1')
let symbol2 = Symbol('uI2')

console.log("are the symbols equal", symbol1 === symbol2);

let acc1 = 1234567890n
let acc2 = 9876543210n

let acc3 = acc1 + acc2
console.log(`the total balance is ${acc3}`);
```

## Solution 2
#### Write a JavaScript script that demonstrates the following: Declare and initialize variables of both Symbol and BigInt data types. Use these variables in a meaningful context to showcase their uniqueness. Specifically: Create two unique symbols and compare them to illustrate their uniqueness. Perform an arithmetic operation using BigInt values, such as addition or multiplication, and store the result in another BigInt variable. Print the results of the comparison and the arithmetic operation to the console. Expected Output: A message confirming that the symbols are unique (e.g., "Symbols are unique: true"). The result of the BigInt arithmetic operation.

```javascript
let sym1 = Symbol('unique1')
let sym2 = Symbol('unique2')

console.log(`are the symbols unique ${sym1 !== sym2}`);

let value1 = 234456567788899n
let value2 = 22323234345463575673567567n

let value3 = (value1 * value2) * (value1 + value2)
console.log(`the total value is ${value3}`);
```