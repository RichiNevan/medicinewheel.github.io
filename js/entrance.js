let entraBtn = document.getElementById("entra");
entraBtn.disabled = true
if (emisfero == "Nord" || "Sud") {
    entraBtn.disabled = false
}

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
        localStorage.setItem("emisfero", "Nord")
        entraBtn.disabled = false
    } else if (emisferoSel.value == "Emisferio Sul") {
        localStorage.setItem("emisfero", "Sud")
        entraBtn.disabled = false
}})

let emisferoSelezionato = localStorage.getItem('emisfero')

if (emisferoSelezionato == "Nord") {
    emisferoSel.value = "Emisferio Norte"
    document.getElementById('temp').style.display = 'none'
    
} else if (emisferoSelezionato == "Sud") {
    emisferoSel.value = "Emisferio Sul"
    document.getElementById('temp').style.display = 'none'
    
} else {
    emisferoSel.value = "Escolhe..."
    entraBtn.disabled = true
}