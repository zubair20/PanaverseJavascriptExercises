//Exercise 14: Program to print names of guests and invite them to dinner under certain conditions
let noMoreGuest = "Uzair"
let newGuest = "Waseem"
let guests = ["Mohsin", "Haseeb", "Zubair", "Uzair", "Umair"]
let newGuests = guests.map(guest => guest === noMoreGuest ? newGuest : guest)
newGuests.forEach(guest => console.log(`I would like to invite ${guest} for the dinner`))