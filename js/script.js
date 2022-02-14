/* chiedere all'utente una parola quindi creare una funzione per capire
se la parola inserita è palindroma */ 

// chidere all'utente una parola

do {
    
    uParola = prompt('dimmi una parola').trim().toLocaleLowerCase();
    
    console.log(uParola);

} while ((uParola  <= 0) || (!isNaN(uParola))) {


}

// creare funzione 

let parolaPalindroma = false;

function palindromo (parola1) {
    
    const arrayParola = [];

    // splittare la parola inserita 
    
    const parolaSplit = uParola.split('');
    console.log(parolaSplit);

    // metterla in array
    
    arrayParola.push(uParola);

    // effettuare il reverse dell'array
    
    const parolaReverse = parolaSplit.reverse();
    
    console.log(parolaReverse);

    // unire le lettere rovesciate in una nuova parola
    
    const parolaReverseFinale = parolaReverse.join('');
    console.log(parolaReverseFinale);

    // controllare se la parola è palindroma
    
    if (uParola === parolaReverseFinale) {
    
        return parolaPalindroma = true;
    }
    
}

// richiamare la funzione per restituire il risulatato

const parolaFinale = palindromo(uParola);
console.log(parolaPalindroma);