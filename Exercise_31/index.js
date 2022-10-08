let usernames = ["Zubair", "Uzair", "Admin", "Anees", "Waseem"]

if (usernames.length > 1){
  usernames.forEach(item => {
  if (item == "Admin") {
    console.log(`Hello ${item}, would you like to see a status report?`)
  } else {
    console.log(`Hello ${item}, thank you for logging in again.`)
  }
})
}

usernames = []
if (usernames.length > 1){
  usernames.forEach(item => {
  if (item == "Admin") {
    console.log(`Hello ${item}, would you like to see a status report?`)
  } else {
    console.log(`Hello ${item}, thank you for logging in again.`)
  }
})
}


