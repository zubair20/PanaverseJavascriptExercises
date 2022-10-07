//Exercise 3: Program to display the name in lowercase, uppercase, titlecase of the person stored in a variable
function toTitleCase(name){
  let nameSplit = name.toLowerCase().split(" ");
  for(var i = 0; i < nameSplit.length; i++){
    nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);
  }
  return nameSplit.join(" ");
}
let personName = "Zubair Akhtar";
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log(toTitleCase(personName))