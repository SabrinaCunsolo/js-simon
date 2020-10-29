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
    var numeroUtente;
    var listaNumeriUtente = [];

    // devo creare un ciclo per creare i numeri casuali
    for (var i = 0; i < 5; i++) {
        numeroRandom = getRandomInt(1, 100);
        console.log(numeroRandom);
        // devo inserire il numeroRandom nell'array listaNumeriRandom
        listaNumeriRandom.push(numeroRandom);
    }
    console.log(listaNumeriRandom);
    // Chiedo all'utente di memorizzare i 5 numeri della listaNumeriRandom

    // Dopo 30 secondi i numeri vengono rimossi dalla pagina
    $('.memorizza-numeri').html('<div>Ciao! Prova a memorizzare questi 5 numeri:</div>' + listaNumeriRandom);

    setTimeout(function() {

        $('.memorizza-numeri').hide();

    }, 30000);

    setTimeout(function() {

        // l'utente deve inserire i numeri visualizzati in precedenza
        for (var i = 0; i < 5; i++) {
            numeroUtente = parseInt(prompt(' Inserisci uno alla volta i numeri che ricordi '));
                for (var numeri = 0; numeri < listaNumeriRandom.length; numeri++) {
                if (numeroUtente == listaNumeriRandom[numeri]) {
                    listaNumeriUtente.push(numeroUtente);
                }
            }
        }
        // devo stampare quanti numeri ha ricordato l'utente + i numeri corretti che ha inserito
        $('.numeri-indovinati').html(' Sei riuscito a ricordare ' + listaNumeriUtente.length + 'numeri. Ecco i numeri indovinati:' + listaNumeriUtente);
        console.log(listaNumeriUtente);

    }, 31000);


});

// per generare listaNumeriRandom
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
