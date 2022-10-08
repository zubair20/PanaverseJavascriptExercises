const numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let ordinalNumber = []
numbers_array.forEach(number => {
  if (number == 1) {
    ordinalNumber.push("1st")
  } else if (number == 2) {
    ordinalNumber.push("2nd")
  } else if (number == 3) {
    ordinalNumber.push("3rd")
  } else {
    ordinalNumber.push(`${number}th`)
  }
})

console.log(ordinalNumber)