const oggiLune = new Date();

function creaLuna(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink) {
    return {
        inizio: new Date(oggiLune.getFullYear(), meseInizio - 1, giornoInizio),
        fine: new Date(oggiLune.getFullYear(), meseFine - 1, giornoFine),
        url: url,
        testoLink: testoLink
    };
}

const lune = [
    creaLuna(1, 15, 2, 8, "lua1-renovaçao.html", "Luna del Rinnovamento"),
    creaLuna(2, 9, 3, 9, "lua2-limpeza.html", "Luna della Pulizia"),
    creaLuna(3, 10, 4, 7, "lua3-ventosFortes.html", "Luna dei Venti Forti"),
    creaLuna(4, 8, 5, 6, "lua4-novosComeços.html", "Lua dei Nuovi Inizi"),
    creaLuna(5, 7, 6, 5, "lua5-crescimento.html", "Lua della Crescita"),
    creaLuna(6, 6, 7, 4, "lua6-floraçao.html", "Luna della Fioritura"),
    creaLuna(7, 5, 8, 3, "lua7-diasLongos.html", "Luna dei Giorni Lunghi"),
    creaLuna(8, 4, 9, 1, "lua8-amadurecimento.html", "Luna della Maturazione"),
    creaLuna(9, 2, 10, 1, "lua9-abundancia.html", "Luna dell'Abbondanza"),
    creaLuna(10, 2, 11, 8, "lua10-cairDasFolhas.html", "Luna del Cadere delle Foglie"),
    creaLuna(11, 9, 11, 30, "lua11-decomposiçao.html", "Luna della Decomposizione"),
    creaLuna(12, 1, 29, 12, "lua12-noitesLongas.html", "Luna delle Notti Lunghe"),
];

let urlLune;
let testoLune;

for (let luna of lune) {
    if (oggiLune >= luna.inizio && oggiLune < luna.fine) {
        urlLune = luna.url;
        testoLune = luna.testoLink;
        break
    }
}

document.getElementById("luna").innerHTML = testoLune;
document.getElementById("luna").href = urlLune;