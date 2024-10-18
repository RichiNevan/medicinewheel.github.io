const oggiDir = new Date();

class Direzione {
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



/*function creaPeriodo(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink) {
    return {
        inizio: new Date(oggiDir.getFullYear(), meseInizio - 1, giornoInizio),
        fine: new Date(oggiDir.getFullYear(), meseFine - 1, giornoFine),
        url: url,
        testoLink: testoLink
    };
}*/

const direzioni = [
    new Direzione(12, 21, 1, 31, "direzioni/dir1-nord.html", "Norte"),
    new Direzione(2, 1, 3, 20, "direzioni/dir2-nordEst.html", "Norte-Este"),
    new Direzione(3, 21, 4, 30, "direzioni/dir3-est.html", "Este"),
    new Direzione(5, 1, 6, 20, "direzioni/dir4-sudest.html", "Sul-Este"),
    new Direzione(6, 21, 7, 31, "direzioni/dir5-sud.html", "Sul"),
    new Direzione(8, 1, 9, 20, "direzioni/dir6-sudOvest.html", "Sul-Oeste"),
    new Direzione(9, 21, 10, 30, "direzioni/dir7-Ovest.html", "Oeste"),
    new Direzione(10, 31, 12, 20, "direzioni/dir8-nordOvest.html", "Norte-Oeste")
];

let emisferoDir = localStorage.getItem('emisfero')
if (emisferoDir == "Emisferio Sul") {
    direzioni[0].meseInizio = 6; direzioni[0].giornoInizio = 21; direzioni[0].meseFine = 7; direzioni[0].giornoFine = 31;
    direzioni[1].meseInizio = 8; direzioni[1].giornoInizio = 1; direzioni[1].meseFine = 9; direzioni[1].giornoFine = 20;
    direzioni[2].meseInizio = 9; direzioni[2].giornoInizio = 21; direzioni[2].meseFine = 10; direzioni[2].giornoFine = 30;
    direzioni[3].meseInizio = 10; direzioni[3].giornoInizio = 31; direzioni[3].meseFine = 12; direzioni[3].giornoFine = 20;
    direzioni[4].meseInizio = 12; direzioni[4].giornoInizio = 21; direzioni[4].meseFine = 1; direzioni[4].giornoFine = 31;
    direzioni[5].meseInizio = 2; direzioni[5].giornoInizio = 1; direzioni[5].meseFine = 3; direzioni[5].giornoFine = 20;
    direzioni[6].meseInizio = 3; direzioni[6].giornoInizio = 21; direzioni[6].meseFine = 4; direzioni[6].giornoFine = 30;
    direzioni[7].meseInizio = 5; direzioni[7].giornoInizio = 1; direzioni[7].meseFine = 6; direzioni[7].giornoFine = 20;
}

let urlDir = "medicine-wheel/dir1-nord.html";
let testoDir = "Direzione";

for (let direzione of direzioni) {
    if (oggiDir >= direzione.inizio() && oggiDir <= direzione.fine()) {
        urlDir = direzione.url;
        testoDir = direzione.testoLink;
        break
    }
}

const link = document.getElementById("direzione");
link.innerHTML = testoDir;
link.href = urlDir;

console.log(urlDir)