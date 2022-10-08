const current_users = ["Zubair", "Uzair", "Umair", "Waseem", "Mohsin", "Haseeb"]
const new_users = ["Anees", "Zubair", "Uzair", "Mubashir", "Amir"]

new_users.forEach(user_name => {
  const isUserExist = current_users.includes(user_name)

  if (!isUserExist) {
    console.log("Username is availble")
  }else{
    console.log(`${user_name} will have to enter a new Username` )
  }
})