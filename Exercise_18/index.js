let favoritePlaces = ["Pakistan", "America", "Germany", "Qatar", "Multan"]

// Print the original Array
console.log("Original Array", favoritePlaces)

// Print the array in alphabetial order
console.log("Alphabetical sort array", [...favoritePlaces].sort())

// Again Print the original Array
console.log("Original Array", favoritePlaces)

// Print the list in reverse alphabetial order
console.log("Alphabetical sort array reverse", [...favoritePlaces].sort().reverse())

// Again Print the original Array
console.log("Original Array", favoritePlaces)

// Reverse the order of the given Array
const reverseArray = [...favoritePlaces].reverse()
console.log("Reverse Array", reverseArray)

const againReverse = reverseArray.reverse()

console.log("Reverse Array Again", againReverse)

// Sorting the original array in alphabetical order
favoritePlaces.sort()

console.log("Original sorted Array", favoritePlaces)

favoritePlaces.sort().reverse()

console.log("Reverse Sorted Array", favoritePlaces)