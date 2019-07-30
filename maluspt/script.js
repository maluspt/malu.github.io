var today = new Date()
var birth = new Date("1998/01/23")
var year = today.getFullYear()
var idade = Math.floor(Math.abs(today - birth) / 1000 / 60 / 60 / 24 / 365)
document.getElementById("idade").innerHTML = `♥ Level: ${idade}`


