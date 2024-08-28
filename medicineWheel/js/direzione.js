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
    creaPeriodo(12, 21, 1, 31, "dir1-nord.html", "Nord"),
    creaPeriodo(2, 1, 3, 20, "dir2-nordEst.html", "Nord-Est"),
    creaPeriodo(3, 21, 4, 30, "dir3-est.html", "Est"),
    creaPeriodo(5, 1, 6, 20, "dir4-sudest.html", "Sud-Est"),
    creaPeriodo(6, 21, 7, 31, "dir5-sud.html", "Sud"),
    creaPeriodo(8, 1, 9, 20, "dir6-sudOvest.html", "Sud-Ovest"),
    creaPeriodo(9, 21, 10, 30, "dir7-Ovest.html", "Ovest"),
    creaPeriodo(10, 31, 12, 20, "dir8-nordOvest.html", "Nord-Ovest")
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