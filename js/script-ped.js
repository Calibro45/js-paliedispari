/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer 
(usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari 
(usando una funzione) Dichiariamo chi ha vinto. */

// scegli apri o dispari

let pari_o_dispari = 0;

do {
    pari_o_dispari = (prompt('pari o dispari')).toLowerCase().trim();

} while (pari_o_dispari <= 0 || !isNaN(pari_o_dispari)) {


}

const pari = 'pari';
const dispari = 'dispari';

// chiedo all'utente un numero 

let uNumber = 0;

do {
    
    uNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
    console.log(uNumber);

    // effettuo controllo su inserimento n utente

} while ((isNaN(uNumber)) || (uNumber <= 0) || (uNumber > 5)) {

}

// funzione per generare numero random per pc

function pcRandomNumber () {

    const pcNumberRandom = Math.floor(Math.random()* 5 ) + 1;
    //console.log(pcNumberRandom);

    return pcNumberRandom;

}

// richiamo il numero del pc

const pcNumber = pcRandomNumber();
console.log(pcNumber);

// funzione per sommare i due numeri e controllare se e pari o dispari

function sommaNumeri(num1, num2) {

    const sommaUnumberPcnumber = num1 + num2;

    return sommaUnumberPcnumber;

}

const somma_numeri = sommaNumeri(uNumber, pcNumber);
//console.log(somma_numeri);


// funzione pari dispari 

function pariDispari (sommaNumeri) {

    if (pari_o_dispari === pari && somma_numeri % 2 === 0) {
    
        return 'la somma è pari... hai vinto';
    
    } else if (pari_o_dispari === dispari && somma_numeri % 2 !== 0) {
    
        return 'la somma è dispari... hai vinto';
    
    } else {
    
        return 'hai perso... ritenta';
    }

}

const sommaPari_o_Dispari = pariDispari(somma_numeri);
console.log(somma_numeri, sommaPari_o_Dispari);
