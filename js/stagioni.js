const oggiStag = new Date();

const periodiStag = [{inizio: new Date(oggiStag.getFullYear(), 11, 22), 
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
    testoLink: "Estate"
}, {inizio: new Date(oggiStag.getFullYear(), 8, 22),
    fine: new Date(oggiStag.getFullYear(), 11, 21),
    url: "stag-autunno.html",
    testoLink: "Autunno"
}];

let urlStag = "https://www.xamanismo.com.br/o-verao/";
let testoStag = "Stagione";

for (let periodo of periodiStag) {
    if (oggiStag >= periodo.inizio && oggiStag < periodo.fine) {
        urlStag = periodo.url;
        testoStag = periodo.testoLink;
        break
    }
}

const linkStag = document.getElementById("stagione");
linkStag.href = urlStag;
linkStag.innerHTML = testoStag;
