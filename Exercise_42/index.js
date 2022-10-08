let magicians = ["Zubair","Uzair","Umair", "Ali", "Waseem"]

function make_great(arr){
  magicians = arr.map(name => `Great ${name}`)
  return magicians
}
function show_magicians(arr){
  arr.forEach(name => {
    console.log(name)
  });
}

make_great(magicians)
show_magicians(magicians)