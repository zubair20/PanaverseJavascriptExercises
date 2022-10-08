function printSandwitchExtras(...args){
  args[0].forEach(extra => {
    console.log(extra)
  })
}

let sandwitchExtras = ["Chicken","Mayo sauce","Garlic sauce", "Tomato"]
printSandwitchExtras(sandwitchExtras)

sandwitchExtras = ["Beef","Mayo sauce","Garlic sauce", "Tomato"]
printSandwitchExtras(sandwitchExtras)

sandwitchExtras = ["Mutton","Mayo sauce","Garlic sauce", "Tomato"]
printSandwitchExtras(sandwitchExtras)