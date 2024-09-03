const oggiDir = new Date();

function creaPeriodo(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink) {
    return {
        inizio: new Date(oggiDir.getFullYear(), meseInizio - 1, giornoInizio),
        fine: new Date(oggiDir.getFullYear(), meseFine - 1, giornoFine),
        url: url,
        testoLink: testoLink
    };
}

const periodiDir = [
    creaPeriodo(12, 21, 1, 31, "direzioni/dir1-nord.html", "Nord"),
    creaPeriodo(2, 1, 3, 20, "direzioni/dir2-nordEst.html", "Nord-Est"),
    creaPeriodo(3, 21, 4, 30, "direzioni/dir3-est.html", "Est"),
    creaPeriodo(5, 1, 6, 20, "direzioni/dir4-sudest.html", "Sud-Est"),
    creaPeriodo(6, 21, 7, 31, "direzioni/dir5-sud.html", "Sud"),
    creaPeriodo(8, 1, 9, 20, "direzioni/dir6-sudOvest.html", "Sud-Ovest"),
    creaPeriodo(9, 21, 10, 30, "direzioni/dir7-Ovest.html", "Ovest"),
    creaPeriodo(10, 31, 12, 20, "direzioni/dir8-nordOvest.html", "Nord-Ovest")
];

let urlDir = "medicine-wheel/dir1-nord.html";
let testoDir = "Direzione";

for (let periodo of periodiDir) {
    if (oggiDir >= periodo.inizio && oggiDir <= periodo.fine) {
        urlDir = periodo.url;
        testoDir = periodo.testoLink;
        break
    }
}

const link = document.getElementById("direzione");
link.innerHTML = testoDir;
link.href = urlDir;

console.log(urlDir)