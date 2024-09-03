const oggiLune = new Date();

function creaLuna(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink, urlAnim, testoAnim) {
    return {
        inizio: new Date(oggiLune.getFullYear(), meseInizio - 1, giornoInizio),
        fine: new Date(oggiLune.getFullYear(), meseFine - 1, giornoFine),
        url: url,
        testoLink: testoLink,
        urlAnim: urlAnim,
        testoAnim: testoAnim
    };
}

const lune = [
    creaLuna(1, 15, 2, 8, "lune/lua1-renovaçao.html", "Luna del Rinnovamento", "animLune/1renovaçao-ganso.html", "Ganso das Neves"),
    creaLuna(2, 9, 3, 9, "lune/lua2-limpeza.html", "Luna della Pulizia", "animLune/2limpeza-lontra.html", "Lontra"),
    creaLuna(3, 10, 4, 7, "lune/lua3-ventosFortes.html", "Luna dei Venti Forti", "animLune/3ventosfortes-puma.html", "Puma"),
    creaLuna(4, 8, 5, 6, "lune/lua4-novosComeços.html", "Lua dei Nuovi Inizi", "animLune/4novosComeços-falcao.html", "Falcao do Rabo Vermelho"),
    creaLuna(5, 7, 6, 5, "lune/lua5-crescimento.html", "Lua della Crescita", "animLune/5crescimento-castor", "Castor"),
    creaLuna(6, 6, 7, 4, "lune/lua6-floraçao.html", "Luna della Fioritura", "animLune/6floraçao-cervo.html", "Cervo"),
    creaLuna(7, 5, 8, 3, "lune/lua7-diasLongos.html", "Luna dei Giorni Lunghi", "animLune/7diaslongos-picapau.html", "Pica-Pau"),
    creaLuna(8, 4, 9, 1, "lune/lua8-amadurecimento.html", "Luna della Maturazione", "animLune/8amadurecimento-esturjao.html", "Esturjao"),
    creaLuna(9, 2, 10, 1, "lune/lua9-abundancia.html", "Luna dell'Abbondanza", "animLune/9abundancia-urso.html", "Urso Marrom"),
    creaLuna(10, 2, 11, 8, "lune/lua10-cairDasFolhas.html", "Luna del Cadere delle Foglie", "animLune/10cairdasfolhas-corvo.html", "Corvo"),
    creaLuna(11, 9, 11, 30, "lune/lua11-decomposiçao.html", "Luna della Decomposizione", "animLune/11decomposiçao-cobra.html", "Cobra"),
    creaLuna(12, 1, 29, 12, "lune/lua12-noitesLongas.html", "Luna delle Notti Lunghe", "animLune/12noitesLongas-alce.html", "Alce"),
];

let urlLune;
let testoLune;
let urlAniLune;
let testoAniLune;

for (let luna of lune) {
    if (oggiLune >= luna.inizio && oggiLune < luna.fine) {
        urlLune = luna.url;
        testoLune = luna.testoLink;
        urlAniLune = luna.urlAnim;
        testoAniLune = luna.testoAnim;
        break
    }
}

document.getElementById("luna").innerHTML = testoLune;
document.getElementById("luna").href = urlLune;

document.getElementById("animLuna").href = urlAniLune;
document.getElementById("animLuna").innerHTML =  testoAniLune; 