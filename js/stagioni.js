const oggiStag = new Date();

class Stagione {
    constructor(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink) {
        this.meseInizio = meseInizio
        this.giornoInizio = giornoInizio
        this.meseFine = meseFine
        this.giornoFine = giornoFine
        this.url = url
        this.testoLink = testoLink
    }

    inizio() {
        return (new Date(oggiStag.getFullYear(), this.meseInizio - 1, this.giornoInizio))
    }

    fine() {
        return (new Date(oggiStag.getFullYear(), this.meseFine - 1, this.giornoFine))
    }
}


let stagioni = [
    new Stagione(12, 22, 1, 21, "stag-inverno.html", "Inverno"),
    new Stagione(3, 22, 6, 21, "stag-primavera.html", "Primavera"),
    new Stagione(6, 22, 9, 21, "stag-estate.html", "Estate"),
    new Stagione(9, 22, 12, 21, "stag-autunno.html", "Outono")
]


let emisferoStag = localStorage.getItem('emisfero')
if (emisferoStag == "Sud") {
    stagioni[0].meseInizio = 6; stagioni[0].giornoInizio = 22; stagioni[0].meseFine = 9; stagioni[0].giornoFine = 21;
    stagioni[1].meseInizio = 9; stagioni[1].giornoInizio = 22; stagioni[1].meseFine = 12; stagioni[1].giornoFine = 21;
    stagioni[2].meseInizio = 12; stagioni[2].giornoInizio = 22; stagioni[2].meseFine = 1; stagioni[2].giornoFine = 21;
    stagioni[3].meseInizio = 3; stagioni[3].giornoInizio = 22; stagioni[3].meseFine = 6; stagioni[3].giornoFine = 21;
}

/*const periodiStag = [{inizio: new Date(oggiStag.getFullYear(), 11, 22), 
    fine: new Date(oggiStag.getFullYear(), 2, 21), 
    url: "stag-inverno.html", 
    testoLink: "Inverno"
}, {inizio: new Date(oggiStag.getFullYear(), 2, 22),
    fine: new Date(oggiStag.getFullYear(), 5, 21),
    url: "stag-primavera.html",
    testoLink: "Primavera"
}, {inizio: new Date(oggiStag.getFullYear(), 5, 22),
    fine: new Date(oggiStag.getFullYear(), 8, 21),
    url: "stag-estate.html",
    testoLink: "Verao"
}, {inizio: new Date(oggiStag.getFullYear(), 8, 22),
    fine: new Date(oggiStag.getFullYear(), 11, 21),
    url: "stag-autunno.html",
    testoLink: "Outono"
}];*/

let urlStag = "https://www.xamanismo.com.br/o-verao/";
let testoStag = "Stagione";

for (let stagione of stagioni) {
    if (oggiStag >= stagione.inizio() && oggiStag < stagione.fine()) {
        urlStag = stagione.url;
        testoStag = stagione.testoLink;
        break
    }
}

const linkStag = document.getElementById("stagione");
linkStag.href = urlStag;
linkStag.innerHTML = testoStag;
