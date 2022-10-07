//Exercise 16: Program to print names of guests and invite them to dinner for bigger table
let newGuest1 = "Waseem"
let newGuest2 = "Anees"
let newGuest3 = "Zahid"
let guests = ["Mohsin", "Haseeb", "Zubair", "Uzair", "Umair"]
guests.unshift(newGuest1)
guests.splice(guests.length / 2, 0, newGuest2)
guests.push(newGuest3)
guests.forEach(guest => console.log(`I would like to invite ${guest} for the dinner`))
console.log(
  "We have found the bigger table so our guests memebers are more now!"
)