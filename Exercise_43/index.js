function make_great(arr){
  let newArray = arr.map(name => `Great ${name}`)
  return newArray
}
function show_magicians(arr){
  arr.forEach(name => {
    console.log(name)
  });
}

let magicians = ["Zubair","Uzair","Umair", "Ali", "Waseem"]
show_magicians(make_great(magicians))
show_magicians(magicians)