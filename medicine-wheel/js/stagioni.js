const oggi = new Date();

const periodi = [{inizio: new Date(oggi.getFullYear(), 11, 22), 
    fine: new Date(oggi.getFullYear(), 2, 21), 
    url: "/stag-inverno.html", 
    testoLink: "Inverno"
}, {inizio: new Date(oggi.getFullYear(), 2, 22),
    fine: new Date(oggi.getFullYear(), 5, 21),
    url: "/stag-primavera.html",
    testoLink: "Primavera"
}, {inizio: new Date(oggi.getFullYear(), 5, 22),
    fine: new Date(oggi.getFullYear(), 8, 21),
    url: "/stag-estate.html",
    testoLink: "Estate"
}, {inizio: new Date(oggi.getFullYear(), 8, 22),
    fine: new Date(oggi.getFullYear(), 11, 21),
    url: "/stag-autunno.html",
    testoLink: "Autunno"
}];

let urlCorrente = "https://www.xamanismo.com.br/o-verao/";
let testoCorrente = "Stagione";

for (let periodo of periodi) {
    if (oggi >= periodo.inizio && oggi < periodo.fine) {
        urlCorrente = periodo.url;
        testoCorrente = periodo.testoLink;
        break
    }
}

const link = document.getElementById("stagione");
link.href = urlCorrente;
link.innerHTML = testoCorrente;

class istanza {
    constructor(inizio, fine, url, testoLink) {
        this.inizio = inizio
        this.fine = fine
        this.url= url
        this. testoLink = testoLink
    }
}
console.log("soso");

