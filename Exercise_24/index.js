// Some more conditional tests to clear the concept of equality opertor

// Test number 1
console.log("ONE  --------------------")

console.log("Hello" == "Hello") // returns true

console.log("Hello" == "hello") // returns false

// Test number 2
console.log("TWO  --------------------")

const word = "Component"

console.log(word == word.toLowerCase()) // returns false

console.log(word.toLowerCase() == word.toLowerCase()) // returns true

// Test number 3
console.log("THREE  --------------------")

const number = 10

console.log(number == number) // returns true
console.log(number != number) // returns false
console.log(number > 10) // returns false
console.log(number < 10) // returns false
console.log(number >= 10) // returns true
console.log(number <= 10) // returns true

// Test number 4
console.log("FOUR  --------------------")

const a = 3
const b = -2

console.log(a > 0 || b > 0) // returns true

console.log(a > 0 && b > 0) // returns false

// Test number 5
console.log("FIVE --------------------")

const numberArray = [1, 2, 3, 4]

const isItemExist = numberArray.find(item => item == 2)

console.log(!!isItemExist)

const isItemExist1 = numberArray.find(item => item == 0)

console.log(!!isItemExist1)