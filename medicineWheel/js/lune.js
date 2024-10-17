const oggiLune = new Date();

function creaLuna(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink, urlAnim, testoAnim, urlVeg, testoVeg, urlMinerali, testoMinerali, urlColore, testoColore) {
    return {
        inizio: new Date(oggiLune.getFullYear(), meseInizio - 1, giornoInizio),
        fine: new Date(oggiLune.getFullYear(), meseFine - 1, giornoFine),
        url: url,
        testoLink: testoLink,
        urlAnim: urlAnim,
        testoAnim: testoAnim,
        urlVeg: urlVeg,
        testoVeg: testoVeg,
        urlMinerali: urlMinerali,
        testoMinerali: testoMinerali,
        urlColore: urlColore,
        testoColore: testoColore
    };
}

const lune = [
    creaLuna(1, 15, 2, 8, "lune/lua1-renovaçao.html", "Luna del Rinnovamento", 
        "animLune/1renovaçao-ganso.html", "Ganso das Neves",
        "vegLune/1renovaçao-betula.html", "Betula",
        "mineraliLune/1renovaçao-quartzo.html", "Quartzo",
        "coloriLune/1renovaçao-branco.html", "Branco"),
    creaLuna(2, 9, 3, 9, "lune/lua2-limpeza.html", "Luna della Pulizia", 
        "animLune/2limpeza-lontra.html", "Lontra",
        "vegLune/2limpeza-alamo.html", "Alamo",
        "mineraliLune/2limpeza-prata.html", "Prata",
        "coloriLune/2limpeza-prata.html", "Prata"),
    creaLuna(3, 10, 4, 7, "lune/lua3-ventosFortes.html", "Luna dei Venti Forti", 
        "animLune/3ventosfortes-puma.html", "Puma",
        "vegLune/3ventosfortes-tanchagem.html", "Tanchagem",
        "mineraliLune/3ventosfortes-turquesa.html", "Turquesa",
        "coloriLune/3ventosfortes-turquesa.html", "Turquesa"),
    creaLuna(4, 8, 5, 6, "lune/lua4-novosComeços.html", "Lua dei Nuovi Inizi", 
        "animLune/4novosComeços-falcao.html", "Falcao do Rabo Vermelho",
        "vegLune/4novosComeços-dentedeleao.html", "Dente de Leao",
        "mineraliLune/4novoscomeços-opala.html", "Opala de Fogo",
        "coloriLune/4novoscomeços-amarelo.html", "Amarelo"),
    creaLuna(5, 7, 6, 5, "lune/lua5-crescimento.html", "Lua della Crescita", 
        "animLune/5crescimento-castor.html", "Castor",
        "vegLune/5crescimento-açucena.html", "Açucena Azul",
        "mineraliLune/5crescimento-crisocola.html", "Crisocola",
        "coloriLune/5crescimento-amarelo.html", "Amarelo"),
    creaLuna(6, 6, 7, 4, "lune/lua6-floraçao.html", "Luna della Fioritura", 
        "animLune/6floraçao-cervo.html", "Cervo", 
        "vegLune/6floraçao-milefolio.html", "Milefolio",
        "mineraliLune/6floraçao-agata.html", "Agata Musgosa",
        "coloriLune/6floraçao-brancoverde.html", "Branco e Verde"),
    creaLuna(7, 5, 8, 3, "lune/lua7-diasLongos.html", "Luna dei Giorni Lunghi", 
        "animLune/7diaslongos-picapau.html", "Pica-Pau",
        "vegoLune/7diaslongos-rosa.html", "Rosa Silvestre",
        "mineraliLune/7diaslongos-agatacornalina.html", "Agata Cornalina",
        "coloriLune/7diaslongos-rosa.html", "Rosa"),
    creaLuna(8, 4, 9, 1, "lune/lua8-amadurecimento.html", "Luna della Maturazione", 
        "animLune/8amadurecimento-esturjao.html", "Esturjao",
        "vegLune/8amadurecimento-framboesa.html", "Framboesa",
        "mineraliLune/8amadurecimento-ferro.html", "Granada e Ferro",
        "coloriLune/8amadurecimento-vermelho.html", "Vermelho"),
    creaLuna(9, 2, 10, 1, "lune/lua9-abundancia.html", "Luna dell'Abbondanza", 
        "animLune/9abundancia-urso.html", "Urso Marrom",
        "vegLune/9abundancia-violeta.html", "Violeta",
        "mineraliLune/9abundancia-ametista.html", "Ametista",
        "coloriLune/9abundancia-roxa.html", "Roxa"),
    creaLuna(10, 2, 10, 31, "lune/lua10-cairDasFolhas.html", "Luna del Cadere delle Foglie", 
        "animLune/10cairdasfolhas-corvo.html", "Corvo",
        "vegLune/10cairdasfolhas-verbasco.html", "Verbasco",
        "mineraliLune/10cairdasfolhas-jaspe.html", "Jaspe",
        "coloriLune/10cairdasfolhas-marrom.html", "Marrom"),
    creaLuna(11, 1, 11, 30, "lune/lua11-decomposiçao.html", "Luna della Decomposizione", 
        "animLune/11decomposiçao-cobra.html", "Cobra",
        "vegLune/11decomposiçao-cardo.html", "Cardo",
        "mineraliLune/11decomposiçao-malaquita.html", "Malaquita",
        "coloriLune/11decomposiçao-laranja.html", "Laranja"),
    creaLuna(12, 1, 29, 12, "lune/lua12-noitesLongas.html", "Luna delle Notti Lunghe", 
        "animLune/12noitesLongas-alce.html", "Alce",
        "vegLune/12noiteslongas-abeto.html", "Abeto Negro",
        "mineraliLune/12noiteslongas-obsidiana.html", "Obsidiana",
        "coloriLune/12noiteslongas-preta.html", "Preto"),
];

let urlLune;
let testoLune;
let urlAniLune;
let testoAniLune;
let urlVegLune;
let testoVegLune;
let urlMineraliLune;
let testoMineraliLune;
let urlColoriLune;
let testoColoriLune;

for (let luna of lune) {
    if (oggiLune >= luna.inizio && oggiLune < luna.fine) {
        urlLune = luna.url;
        testoLune = luna.testoLink;
        urlAniLune = luna.urlAnim;
        testoAniLune = luna.testoAnim;
        urlVegLune = luna.urlVeg;
        testoVegLune = luna.testoVeg;
        urlMineraliLune = luna.urlMinerali;
        testoMineraliLune = luna.testoMinerali;
        urlColoriLune = luna.urlColore;
        testoColoriLune = luna.testoColore;
        break
    }
}

document.getElementById("luna").innerHTML = testoLune;
document.getElementById("luna").href = urlLune;

document.getElementById("animLuna").href = urlAniLune;
document.getElementById("animLuna").innerHTML =  testoAniLune; 

document.getElementById("vegLuna").href = urlVegLune;
document.getElementById("vegLuna").innerHTML = testoVegLune;

document.getElementById("minLuna").href = urlMineraliLune;
document.getElementById("minLuna").innerHTML = testoMineraliLune;

document.getElementById("coloreLuna").href = urlColoriLune;
document.getElementById("coloreLuna").innerHTML = testoColoriLune;