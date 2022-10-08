function make_album(artist, album, tracks) {
  if (tracks) return { artist, album, tracks }
  return { artist, album }
}

console.log(make_album("Atif", "Rohi"))
console.log(make_album("Abrar", "Jal"))
console.log(make_album("Jaki", "Listanging", 7))