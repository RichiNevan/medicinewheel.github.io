const oggi = new Date();

const periodi = [{inizio: new Date(oggi.getFullYear(), 12, 21), 
    fine: new Date(oggi.getFullYear(), 1, 31),
    url: "/dir1-nord.html",
    testoLink: "Nord"
}, {inizio: new Date(oggi.getFullYear(), 2, 1),
    fine: new Date(oggi.getFullYear(), 3, 20),
    url: "/dir2-nordovest.html",
    testoLink: "Nord-Ovest"
}, {inizio: new Date(oggi.getFullYear(), 3, 21),
    fine: new Date(oggi.getFullYear(), 4, 30),
    url: "/dir3-ovest.html",
    testoLink: "Ovest"
}, {inizio: new Date(oggi.getFullYear(), 5, 1),
    fine: new Date(oggi.getFullYear(), 6, 20),
    url: "/dir4-sudovest.html",
    testoLink: "Sud-Ovest"
}, {inizio: new Date(oggi.getFullYear(), 6, 21),
    fine: new Date(oggi.getFullYear(), 7, 31),
    url: "/dir5-sud.html",
    testoLink: "Sud"
}, {inizio: new Date(oggi.getFullYear(), 8, 1),
    fine: new Date(oggi.getFullYear(), 9, 20),
    url: "/dir6-sudest.html",
    testoLink: "Sud-Est"
}, {inizio: new Date(oggi.getFullYear(), 9, 21),
    fine: new Date(oggi.getFullYear(), 10, 30),
    url: "/dir7-est.html",
    testoLink: "Est"
}, {inizio: new Date(oggi.getFullYear(), 10, 31),
    fine: new Date(oggi.getFullYear(), 12, 20),
    url: "/dir8-nordest.html",
    testoLink: "Nord-Est"
}];

let urlCorrente = "/dir1-nord.html";
let testoCorrente = "Direzione";

for (let periodo of periodi) {
    if (oggi >= periodo.inizio && oggi <= periodo.fine) {
        urlCorrente = periodo.url;
        testoCorrente = periodo.testoLink;
        break
    }
}

const link = document.getElementById("direzione");
link.innerHTML = testoCorrente;
link.href = urlCorrente;

console.log(urlCorrente)