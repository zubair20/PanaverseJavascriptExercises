//Exercise 18: Program to reduce number of guests

let guests = ["Mohsin", "Haseeb", "Zubair", "Uzair", "Umair", "Waseem", "Anees", "Zahid"]
console.log('Unfortunately our bigger table hasnt arrived yet so we have to reduce the number of guests')

while(guests.length > 0){
  let guest = guests.pop();
  if(guests.length <= 1){
    console.log(`${guest} WOhoooo You are still invited`)
  }else{
    console.log(`${guest} I regret to inform you are not invited anymore! `)
  }
}
console.log(guests)