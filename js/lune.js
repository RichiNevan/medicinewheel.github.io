const oggiLune = new Date();

/*function creaLuna(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink, urlAnim, testoAnim, urlVeg, testoVeg, urlMinerali, testoMinerali, urlColore, testoColore) {
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
}*/

class Luna {
    constructor(meseInizio, giornoInizio, meseFine, giornoFine, url, testoLink, urlAnim, testoAnim, urlVeg, testoVeg, urlMinerali, testoMinerali, urlColore, testoColore) {
        this.meseInizio = meseInizio
        this.giornoInizio = giornoInizio
        this.meseFine = meseFine
        this.giornoFine = giornoFine
        this.url = url,
        this.testoLink = testoLink,
        this.urlAnim = urlAnim,
        this.testoAnim = testoAnim,
        this.urlVeg = urlVeg,
        this.testoVeg = testoVeg,
        this.urlMinerali = urlMinerali,
        this.testoMinerali = testoMinerali,
        this.urlColore = urlColore,
        this.testoColore = testoColore
    }

    inizio() {
        return (new Date(oggiLune.getFullYear(), this.meseInizio - 1, this.giornoInizio))
    }

    fine() {
        return (new Date(oggiLune.getFullYear(), this.meseFine - 1, this.giornoFine))
    }
}



const lune = [
    new Luna(1, 15, 2, 8, "lune/lua1-renovaçao.html", "Lua da Renovaçao", 
        "animLune/1renovaçao-ganso.html", "Ganso das Neves",
        "vegLune/1renovaçao-betula.html", "Betula",
        "mineraliLune/1renovaçao-quartzo.html", "Quartzo",
        "coloriLune/1renovaçao-branco.html", "Branco"),
    new Luna(2, 9, 3, 9, "lune/lua2-limpeza.html", "Lua da Limpeza", 
        "animLune/2limpeza-lontra.html", "Lontra",
        "vegLune/2limpeza-alamo.html", "Alamo",
        "mineraliLune/2limpeza-prata.html", "Prata",
        "coloriLune/2limpeza-prata.html", "Prata"),
    new Luna(3, 10, 4, 7, "lune/lua3-ventosFortes.html", "Lua dos Ventos Fortes", 
        "animLune/3ventosfortes-puma.html", "Puma",
        "vegLune/3ventosfortes-tanchagem.html", "Tanchagem",
        "mineraliLune/3ventosfortes-turquesa.html", "Turquesa",
        "coloriLune/3ventosfortes-turquesa.html", "Turquesa"),
    new Luna(4, 8, 5, 6, "lune/lua4-novosComeços.html", "Lua dos Novos Começos", 
        "animLune/4novosComeços-falcao.html", "Falcao do Rabo Vermelho",
        "vegLune/4novosComeços-dentedeleao.html", "Dente de Leao",
        "mineraliLune/4novoscomeços-opala.html", "Opala de Fogo",
        "coloriLune/4novoscomeços-amarelo.html", "Amarelo"),
    new Luna(5, 7, 6, 5, "lune/lua5-crescimento.html", "Lua do Crescimento", 
        "animLune/5crescimento-castor.html", "Castor",
        "vegLune/5crescimento-açucena.html", "Açucena Azul",
        "mineraliLune/5crescimento-crisocola.html", "Crisocola",
        "coloriLune/5crescimento-amarelo.html", "Amarelo"),
    new Luna(6, 6, 7, 4, "lune/lua6-floraçao.html", "Lua da Floraçao", 
        "animLune/6floraçao-cervo.html", "Cervo", 
        "vegLune/6floraçao-milefolio.html", "Milefolio",
        "mineraliLune/6floraçao-agata.html", "Agata Musgosa",
        "coloriLune/6floraçao-brancoverde.html", "Branco e Verde"),
    new Luna(7, 5, 8, 3, "lune/lua7-diasLongos.html", "Lua dos Dias Longos", 
        "animLune/7diaslongos-picapau.html", "Pica-Pau",
        "vegoLune/7diaslongos-rosa.html", "Rosa Silvestre",
        "mineraliLune/7diaslongos-agatacornalina.html", "Agata Cornalina",
        "coloriLune/7diaslongos-rosa.html", "Rosa"),
    new Luna(8, 4, 9, 1, "lune/lua8-amadurecimento.html", "Lua do Amadurecimento", 
        "animLune/8amadurecimento-esturjao.html", "Esturjao",
        "vegLune/8amadurecimento-framboesa.html", "Framboesa",
        "mineraliLune/8amadurecimento-ferro.html", "Granada e Ferro",
        "coloriLune/8amadurecimento-vermelho.html", "Vermelho"),
    new Luna(9, 2, 10, 1, "lune/lua9-abundancia.html", "Lua da Abundancia", 
        "animLune/9abundancia-urso.html", "Urso Marrom",
        "vegLune/9abundancia-violeta.html", "Violeta",
        "mineraliLune/9abundancia-ametista.html", "Ametista",
        "coloriLune/9abundancia-roxa.html", "Roxa"),
    new Luna(10, 2, 10, 31, "lune/lua10-cairDasFolhas.html", "Lua do Cair das Folhas", 
        "animLune/10cairdasfolhas-corvo.html", "Corvo",
        "vegLune/10cairdasfolhas-verbasco.html", "Verbasco",
        "mineraliLune/10cairdasfolhas-jaspe.html", "Jaspe",
        "coloriLune/10cairdasfolhas-marrom.html", "Marrom"),
    new Luna(11, 1, 11, 30, "lune/lua11-decomposiçao.html", "Lua da Decomposiçao", 
        "animLune/11decomposiçao-cobra.html", "Cobra",
        "vegLune/11decomposiçao-cardo.html", "Cardo",
        "mineraliLune/11decomposiçao-malaquita.html", "Malaquita",
        "coloriLune/11decomposiçao-laranja.html", "Laranja"),
    new Luna(12, 1, 12, 29, "lune/lua12-noitesLongas.html", "Lua das Noites Longas", 
        "animLune/12noitesLongas-alce.html", "Alce",
        "vegLune/12noiteslongas-abeto.html", "Abeto Negro",
        "mineraliLune/12noiteslongas-obsidiana.html", "Obsidiana",
        "coloriLune/12noiteslongas-preta.html", "Preto"),
]

let emisferoLune = localStorage.getItem('emisfero')



if (emisferoLune == "Sud") {
    lune[0].meseInizio = 7; lune[0].giornoInizio = 5; lune[0].meseFine = 8; lune[0].giornoFine = 3; 
    lune[1].meseInizio = 8; lune[1].giornoInizio = 4; lune[1].meseFine = 9; lune[1].giornoFine = 1; 
    lune[2].meseInizio = 9; lune[2].giornoInizio = 2; lune[2].meseFine = 10; lune[2].giornoFine = 1; 
    lune[3].meseInizio = 10; lune[3].giornoInizio = 2; lune[3].meseFine = 10; lune[3].giornoFine = 31; 
    lune[4].meseInizio = 11; lune[4].giornoInizio = 1; lune[4].meseFine = 11; lune[4].giornoFine = 30; 
    lune[5].meseInizio = 12; lune[5].giornoInizio = 1; lune[5].meseFine = 12; lune[5].giornoFine = 29; 
    lune[6].meseInizio = 1; lune[6].giornoInizio = 15; lune[6].meseFine = 2; lune[6].giornoFine = 8; 
    lune[7].meseInizio = 2; lune[7].giornoInizio = 9; lune[7].meseFine = 3; lune[7].giornoFine = 9; 
    lune[8].meseInizio = 3; lune[8].giornoInizio = 10; lune[8].meseFine = 4; lune[8].giornoFine = 7; 
    lune[9].meseInizio = 4; lune[9].giornoInizio = 8; lune[9].meseFine = 5; lune[9].giornoFine = 6; 
    lune[10].meseInizio = 5; lune[10].giornoInizio = 7; lune[10].meseFine = 6; lune[10].giornoFine = 5; 
    lune[11].meseInizio = 6; lune[11].giornoInizio = 6; lune[11].meseFine = 7; lune[11].giornoFine = 4; 
}

console.log(lune[0])

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
    if (oggiLune >= luna.inizio() && oggiLune < luna.fine()) {
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