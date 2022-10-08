function carInformation(manufacturer, model, ...args){
  return {manufacturer, model, ...args}
}

console.log(carInformation("Toyota","Parado 2022", "Green"))
console.log(carInformation("Honda","Parado 2022", "Yellow"))
console.log(carInformation("Suzuki","Mehran 2021", "Red"))