function make_shirt(size, text) {
  if (size == "large" || size == "medium") {
    console.log("I love Javascript")
  } else {
    console.log(`The size of the shirt is ${size} and Text on it is ${text}`)
  }
}

make_shirt("large", "Awesome shirt")
make_shirt("small", "Think outside of box")