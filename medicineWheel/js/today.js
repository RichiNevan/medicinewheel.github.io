let tday = new Date()
document.getElementById("today").innerHTML = tday
const menu = document.getElementById("menu")
const menuBut = document.getElementById("menuBut")

menuBut.onclick = function() {
   menu.classList.toggle("menuVisible")
}