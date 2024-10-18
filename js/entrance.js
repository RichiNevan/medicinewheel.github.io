let entraBtn = document.getElementById("entra");
entraBtn.onclick = function() {
    location.href = "wheel.html"
}

let menuBtn = document.getElementById("menuBtn");
menuBtn.onclick = function() {
    menuBtn.classList.toggle("clicked")
    document.getElementById("menu").classList.toggle("dropdown")
    let options = document.querySelectorAll('.menuOpt');
    for (opt of options) {
        opt.classList.toggle("dropdown")
    }
}


let emisferoSel = document.getElementById("emisfero")
emisferoSel.addEventListener("input", () => {
    if (emisferoSel.value == "Emisferio Norte") {
        localStorage.setItem("emisfero", "Emisferio Norte")
    } else if (emisferoSel.value == "Emisferio Sul") {
        console.log("ciao")
        localStorage.setItem("emisfero", "Emisferio Sul")
}})

let emisferoSelezionato = localStorage.getItem('emisfero')
emisferoSel.value = emisferoSelezionato