// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi
// Nome repo: js-simon

$(document).ready(function() {
// creo array con i numeri random che utente visualizza
var listaNumeriRandom = [];
var numeroRandom;

// devo creare un ciclo per creare i numeri casuali
for (var i = 0; i < 5; i++) {
    numeroRandom = getRandomInt(1, 100);
    console.log(numeroRandom);
    // devo inserire il numeroRandom nell'array listaNumeriRandom
    listaNumeriRandom.push(numeroRandom);
}
console.log(listaNumeriRandom);


});

// per generare listaNumeriRandom
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
