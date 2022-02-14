/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto. */


// chiedo all'utente un numero 

let uNumber = 0;

do {
    
    uNumber = parseInt(prompt('scegli pari o dispari, e inserisci un numero da 1 a 5'));
    console.log(uNumber);

    // effettuo controllo su inserimento n utente

} while ((isNaN(uNumber)) || (uNumber <= 0) || (uNumber > 5)) {

}

// funzione per generare numero random per pc

function pcRandomNumber (num1) {

    const pcNumber = Math.floor(Math.random()* 5 ) + 1;
    console.log(pcNumber);

    return pcNumber;

}
