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
    
    const parolaSplit = uParola.split('');
    console.log(parolaSplit);
    
    arrayParola.push(uParola);
    
    const parolaReverse = parolaSplit.reverse();
    
    console.log(parolaReverse);
    
    const parolaReverseFinale = parolaReverse.join('');
    console.log(parolaReverseFinale);
    
    
    if (uParola === parolaReverseFinale) {
    
        return parolaPalindroma = true;
    }
    
}

const parolaFinale = palindromo(uParola);
console.log(parolaPalindroma);